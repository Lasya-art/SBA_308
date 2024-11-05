// scripts/ui.js

// Function to display a cat image in the gallery
export function displayCatImage(catData, onImageClick) {
    const catImagesContainer = document.getElementById('cat-images');
    catImagesContainer.innerHTML = ''; // Clear any previous images

    const img = document.createElement('img');
    img.src = catData.url;
    img.alt = 'Random Cat';
    img.classList.add('cat-image');

    // Event listener for clicking the image to view breed information
    img.addEventListener('click', () => onImageClick(catData));

    catImagesContainer.appendChild(img);
}

// Display breed information in an alert (or update this to display in a specific part of your page)
export function displayBreedInfo(catData) {
    const breed = catData.breeds ? catData.breeds[0] : null;
    if (breed) {
        alert(`Breed: ${breed.name}\nDescription: ${breed.description}`);
    } else {
        alert('Breed information is not available for this cat.');
    }
}

// Button to favorite the image
export function createFavoriteButton(onFavoriteClick) {
    const button = document.createElement('button');
    button.textContent = 'Add to Favorites';
    button.addEventListener('click', onFavoriteClick);
    document.getElementById('cat-images').appendChild(button);
}
