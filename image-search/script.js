const accessKey = "LUZNWCcYnL1xMRzynLxBx1JtLzKg_TaS_QzKSbptqdk";
        const form = document.getElementById('search-form');
        const input = document.getElementById('search-input');
        const gallery = document.getElementById('gallery');
        const showMoreBtn = document.getElementById('show-more-btn');

        let page = 1;
        let searchTerm = '';

        async function downloadImage(imageUrl, imageName) {
            try {
                const response = await fetch(imageUrl);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = imageName || 'image.jpg';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            } catch (error) {
                console.error('Error downloading image:', error);
                alert('Failed to download image. Please try again.');
            }
        }

        async function searchImages() {
            const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}&client_id=${accessKey}&per_page=12`;

            try {
                const response = await fetch(url);
                const data = await response.json();

                if (page === 1) {
                    gallery.innerHTML = '';
                }

                const results = data.results;

                results.forEach(result => {
                    const imageCard = document.createElement('div');
                    imageCard.classList.add('image-card');

                    const imageContainer = document.createElement('div');
                    imageContainer.classList.add('image-container');

                    const img = document.createElement('img');
                    img.src = result.urls.regular;
                    img.alt = result.alt_description || 'Unsplash Image';

                    const imageInfo = document.createElement('div');
                    imageInfo.classList.add('image-info');

                    const photographer = document.createElement('span');
                    photographer.textContent = `© ${result.user.name}`;

                    const downloadBtn = document.createElement('button');
                    downloadBtn.classList.add('btn', 'download-btn');
                    downloadBtn.textContent = 'Download';
                    downloadBtn.addEventListener('click', () => {
                        downloadImage(result.urls.full, `${result.id}.jpg`);
                    });

                    imageContainer.appendChild(img);
                    imageInfo.appendChild(photographer);
                    imageInfo.appendChild(downloadBtn);
                    imageCard.appendChild(imageContainer);
                    imageCard.appendChild(imageInfo);
                    gallery.appendChild(imageCard);
                });

                if (data.total_pages > page) {
                    showMoreBtn.style.display = 'block';
                } else {
                    showMoreBtn.style.display = 'none';
                }

            } catch (error) {
                console.error('Error fetching images:', error);
                gallery.innerHTML = '<div class="loading">Error loading images. Please try again.</div>';
            }
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            page = 1;
            searchTerm = input.value;
            searchImages();
        });

        showMoreBtn.addEventListener('click', () => {
            page++;
            searchImages();
        });