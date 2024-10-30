document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('#filter-buttons button');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modal-image');
    const downloadLink = document.getElementById('download-link');

    // Images data
    const images = [
        { src: 'images/nature-1.jpg', alt: 'Nature - Mountains', category: 'nature' },
        { src: 'images/nature-2.jpg', alt: 'Nature - Lights', category: 'nature' },
        { src: 'images/nature-3.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-4.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-5.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-6.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-7.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-8.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-9.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-10.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-11.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-12.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-13.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-14.jpg', alt: 'Nature', category: 'waterfall' },
        { src: 'images/nature-15.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-16.jpg', alt: 'Nature', category: 'beach' },
        { src: 'images/nature-17.jpg', alt: 'Nature', category: 'mountain' },
        { src: 'images/nature-18.jpg', alt: 'Nature', category: 'mountain' },
        { src: 'images/nature-19.jpg', alt: 'Nature', category: 'waterfall' },
        { src: 'images/nature-20.jpg', alt: 'Nature', category: 'nature' },
        { src: 'images/nature-21.jpg', alt: 'Nature', category: 'mountain' },

        { src: 'images/car-1.jpg', alt: 'Car - Mercedes', category: 'cars' },
        { src: 'images/car-2.jpg', alt: 'Car - Mercedes', category: 'cars' },
        { src: 'images/car-3.jpg', alt: 'Car - Classic', category: 'cars' },
        { src: 'images/car-4.jpg', alt: 'Car - car', category: 'cars' },
        { src: 'images/car-5.jpg', alt: 'Car - Mercedes', category: 'cars' },
        { src: 'images/car-6.jpg', alt: 'Car - Range Rover', category: 'cars' },
        { src: 'images/car-7.jpg', alt: 'Car - Mercedes', category: 'cars' },
        { src: 'images/car-8.jpg', alt: 'Car - BMW', category: 'cars' },
        { src: 'images/car-9.jpg', alt: 'Car - Audi', category: 'cars' },
        { src: 'images/car-10.jpg', alt: 'Car - Mercedes', category: 'cars' },
        { src: 'images/car-11.jpg', alt: 'Car - Mercer RT', category: 'cars' },
        { src: 'images/car-12.jpg', alt: 'Car - Mercedes', category: 'cars' },
        { src: 'images/car-13.jpg', alt: 'Car - car', category: 'cars' },
        { src: 'images/car-14.jpg', alt: 'Car - BMW', category: 'cars' },
        { src: 'images/car-15.jpg', alt: 'Car - Mercedes', category: 'cars' },
        { src: 'images/people-1.jpg', alt: 'Boys - Boy', category: 'boys' },
        { src: 'images/people-2.jpg', alt: 'Girls - Girl', category: 'girls' },
        { src: 'images/people-3.jpg', alt: 'Girls - Girl', category: 'girls' },
        { src: 'images/people-4.jpg', alt: 'Girls - Girl', category: 'girls' },
        { src: 'images/people-5.jpg', alt: 'Girls - Girl', category: 'girls' },
        { src: 'images/people-6.jpg', alt: 'Girls - Girl', category: 'girls' },
        { src: 'images/people-7.jpg', alt: 'Girls - Girl', category: 'girls' },
        { src: 'images/people-8.jpg', alt: 'Girls - Girl', category: 'girls' },
        { src: 'images/people-9.jpg', alt: 'Girls - Girl', category: 'girls' },
        { src: 'images/animals1.jpg', alt: 'Animals - dog', category: 'animals' },
        { src: 'images/animals2.jpg', alt: 'Animals - tiger', category: 'animals' },
        { src: 'images/animals3.jpg', alt: 'Animals - dog', category: 'animals' },
        { src: 'images/animals4.jpg', alt: 'Animals - giraffe', category: 'animals' },
        { src: 'images/animals5.jpg', alt: 'Animals - cat', category: 'animals' },
        { src: 'images/animals6.jpg', alt: 'Animals - cat', category: 'animals' },
        { src: 'images/animals7.jpg', alt: 'Animals - tiger', category: 'animals' },
        { src: 'images/animals8.jpg', alt: 'Animals - squirrel', category: 'animals' },
        { src: 'images/animals9.jpg', alt: 'Animals - rabbit', category: 'animals' },
        { src: 'images/animals10.jpg', alt: 'Animals - dog', category: 'animals' },
        { src: 'images/animals11.jpg', alt: 'Animals - tiger', category: 'animals' },
        { src: 'images/animals12.jpg', alt: 'Animals - dog', category: 'animals' },
        { src: 'images/birds1.jpg', alt: 'Birds - pigeon', category: 'birds' },
        { src: 'images/birds2.jpg', alt: 'Birds - birds', category: 'birds' },
        { src: 'images/birds3.jpg', alt: 'Birds - birds', category: 'birds' },
        { src: 'images/birds4.jpg', alt: 'Birds - parrot', category: 'birds' },
        { src: 'images/house1.jpg', alt: 'House - house', category: 'house' },
        { src: 'images/house2.jpg', alt: 'House - house', category: 'house' },
        { src: 'images/house3.jpg', alt: 'House - house', category: 'house' },
        { src: 'images/house4.jpg', alt: 'House - house', category: 'house' },
        { src: 'images/photography1.jpg', alt: 'Photography - Photo 1', category: 'photography' },
        { src: 'images/photography2.jpg', alt: 'Photography - Photo 2', category: 'photography' },
        { src: 'images/photography3.jpg', alt: 'Photography - Photo 3', category: 'photography' },
        { src: 'images/photography4.jpg', alt: 'Photography - Photo 4', category: 'photography' },
        { src: 'images/photography5.jpg', alt: 'Photography - Photo 5', category: 'photography' },
        { src: 'images/photography6.jpg', alt: 'Photography - Photo 6', category: 'photography' },
        { src: 'images/photography7.jpg', alt: 'Photography - Photo 7', category: 'photography' },
        { src: 'images/photography8.jpg', alt: 'Photography - Photo 8', category: 'photography' },
        { src: 'images/photography9.jpg', alt: 'Photography - Photo 9', category: 'photography' },
        { src: 'images/photography10.jpg', alt: 'Photography - Photo 10', category: 'photography' },
        { src: 'images/photography11.jpg', alt: 'Photography - Photo 11', category: 'photography' },
        { src: 'images/photography12.jpg', alt: 'Photography - Photo 12', category: 'photography' },
        { src: 'images/photography13.jpg', alt: 'Photography - Photo 13', category: 'photography' },
        { src: 'images/photography14.jpg', alt: 'Photography - Photo 14', category: 'photography' },
        { src: 'images/photography15.jpg', alt: 'Photography - Photo 15', category: 'photography' }
        // Add more images as needed
    ];

    const cardsContainer = document.getElementById('filterable-cards');
    const itemsPerPage = 16;
    let currentPage = 1;
    let filteredImages = [...images]; // All images by default

    function renderImages() {
        cardsContainer.innerHTML = ''; // Clear the container

        // Calculate the start and end index for pagination
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        const imagesToDisplay = filteredImages.slice(start, end);

        // Create image cards and append to container
        imagesToDisplay.forEach(image => {
            const card = document.createElement('div');
            card.classList.add('card', 'p-0', 'shadow');
            card.dataset.name = image.category;

            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.classList.add('img-fluid');
            img.style.cursor = 'pointer';

            // Add click event to open the modal
            img.addEventListener('click', function () {
                modalImage.src = image.src;
                modalImage.alt = image.alt;
                downloadLink.href = image.src; // Set download link
                imageModal.show(); // Show modal
            });

            card.appendChild(img);

            cardsContainer.appendChild(card);
        });
    }

    function applyFilter(filter) {
        if (filter === 'all') {
            filteredImages = [...images]; // Show all images
        } else {
            filteredImages = images.filter(image => image.category === filter);
        }
        currentPage = 1; // Reset to the first page
        renderImages(); // Render filtered images
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });

    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        filteredImages = images.filter(image => image.alt.toLowerCase().includes(searchTerm));
        currentPage = 1;
        renderImages();
    });

    // Pagination
    document.getElementById('prev-btn').addEventListener('click', function () {
        if (currentPage > 1) {
            currentPage--;
            renderImages();
        }
    });

    document.getElementById('next-btn').addEventListener('click', function () {
        if ((currentPage * itemsPerPage) < filteredImages.length) {
            currentPage++;
            renderImages();
        }
    });

    // Initial Render
    renderImages();
});
