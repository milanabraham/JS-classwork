const API_KEY = 'b82cb479';
        const DEBOUNCE_DELAY = 500;
        let currentPage = 1;
        let totalPages = 0;
        let currentSearch = '';

        // DOM Elements
        const searchInput = document.querySelector('.search-input');
        const moviesGrid = document.querySelector('.movies-grid');
        const loadingSpinner = document.querySelector('.loading-spinner');
        const paginationContainer = document.querySelector('.pagination');
        const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.movie-details');
        const closeButton = document.querySelector('.close-button');

        // Debounce function
        function debounce(func, delay) {
            let timeoutId;
            return function (...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        }

        // Fetch movies from API
        async function fetchMovies(searchTerm, page = 1) {
            try {
                loadingSpinner.classList.add('active');
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
                );
                const data = await response.json();
                loadingSpinner.classList.remove('active');

                if (data.Response === 'True') {
                    totalPages = Math.ceil(data.totalResults / 10);
                    return data;
                } else {
                    throw new Error(data.Error);
                }
            } catch (error) {
                loadingSpinner.classList.remove('active');
                showError(error.message);
                return null;
            }
        }

        // Fetch movie details
        async function fetchMovieDetails(imdbID) {
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`
                );
                const data = await response.json();
                if (data.Response === 'True') {
                    return data;
                } else {
                    throw new Error(data.Error);
                }
            } catch (error) {
                showError(error.message);
                return null;
            }
        }

        // Display movies in grid
        function displayMovies(movies) {
            moviesGrid.innerHTML = '';
            if (!movies) return;

            movies.Search.forEach(movie => {
                const movieCard = createMovieCard(movie);
                moviesGrid.appendChild(movieCard);
            });
            updatePagination();
        }

        // Create movie card element
        function createMovieCard(movie) {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}" 
                     alt="${movie.Title}" 
                     class="movie-poster">
                <div class="movie-info">
                    <h3 class="movie-title">${movie.Title}</h3>
                    <p class="movie-year">${movie.Year}</p>
                </div>
            `;
            card.addEventListener('click', () => showMovieDetails(movie.imdbID));
            return card;
        }

        // Show movie details in modal
        async function showMovieDetails(imdbID) {
            const movie = await fetchMovieDetails(imdbID);
            if (!movie) return;

            modalContent.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}" 
                     alt="${movie.Title}" 
                     class="movie-poster">
                <div class="movie-info">
                    <h2>${movie.Title} (${movie.Year})</h2>
                    <p><strong>Rating:</strong> ${movie.imdbRating}</p>
                    <p><strong>Runtime:</strong> ${movie.Runtime}</p>
                    <p><strong>Genre:</strong> ${movie.Genre}</p>
                    <p><strong>Director:</strong> ${movie.Director}</p>
                    <p><strong>Cast:</strong> ${movie.Actors}</p>
                    <p><strong>Plot:</strong> ${movie.Plot}</p>
                </div>
            `;
            modal.classList.add('active');
        }

        // Update pagination controls
        function updatePagination() {
            paginationContainer.innerHTML = '';
            if (totalPages <= 1) return;

            const prevButton = document.createElement('button');
            prevButton.className = 'page-button';
            prevButton.textContent = 'Previous';
            prevButton.disabled = currentPage === 1;
            prevButton.addEventListener('click', () => {
                if (currentPage > 1) {
                    currentPage--;
                    searchMovies(currentSearch, currentPage);
                }
            });

            const nextButton = document.createElement('button');
            nextButton.className = 'page-button';
            nextButton.textContent = 'Next';
            nextButton.disabled = currentPage === totalPages;
            nextButton.addEventListener('click', () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    searchMovies(currentSearch, currentPage);
                }
            });

            paginationContainer.appendChild(prevButton);
            paginationContainer.appendChild(nextButton);
        }

        // Show error message
        function showError(message) {
            moviesGrid.innerHTML = `<div class="error-message">${message}</div>`;
            paginationContainer.innerHTML = '';
        }

        // Search movies function
        async function searchMovies(searchTerm, page = 1) {
            if (!searchTerm.trim()) {
                moviesGrid.innerHTML = '';
                paginationContainer.innerHTML = '';
                return;
            }

            currentSearch = searchTerm;
            const movies = await fetchMovies(searchTerm, page);
            displayMovies(movies);
        }

        // Event listeners
        searchInput.addEventListener('input', debounce((e) => {
            currentPage = 1;
            searchMovies(e.target.value);
        }, DEBOUNCE_DELAY));

        closeButton.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });