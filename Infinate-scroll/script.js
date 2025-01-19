const imageContainer = document.getElementById("img-container");
        const loader = document.getElementById("loader");

        let photosArray = [];
        let ready = false;
        let imagesLoaded = 0;
        let totalImages = 0;

        const count = 12;
        const apiKey = "pXCKXY6CSkQIEQBwFNeWDFpDy-5I3LZlxpdbhVBLwD4";
        const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

        function setAttributes(element, attributes) {
            for (const key in attributes) {
                element.setAttribute(key, attributes[key]);
            }
        }

        function imageLoaded() {
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                ready = true;
                loader.style.display = 'none';
            }
        }

        function displayPhotos() {
            totalImages = photosArray.length;
            imagesLoaded = 0;

            photosArray.forEach((photo) => {
                const wrapper = document.createElement("div");
                wrapper.classList.add("img-wrapper");

                const item = document.createElement("a");
                setAttributes(item, {
                    href: photo.links.html,
                    target: "_blank",
                });

                const img = document.createElement("img");
                setAttributes(img, {
                    src: photo.urls.regular,
                    alt: photo.alt_description || 'Unsplash Image',
                    title: photo.alt_description || 'Unsplash Image',
                });

                const overlay = document.createElement("div");
                overlay.classList.add("img-overlay");
                overlay.innerHTML = `<p>${photo.alt_description || 'Unsplash Image'}</p>`;

                img.addEventListener('load', imageLoaded);
                item.appendChild(img);
                item.appendChild(overlay);
                wrapper.appendChild(item);
                imageContainer.appendChild(wrapper);
            });
        }

        async function getPhotos() {
            try {
                const response = await fetch(apiUrl);
                photosArray = await response.json();
                displayPhotos();
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        }

        window.addEventListener("scroll", () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
                ready = false;
                getPhotos();
            }
        });

        // Initial load
        getPhotos();