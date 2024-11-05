// scripts/app.js

import { fetchCatImage, favoriteCatImage } from './api.js';
import { displayCatImage, displayBreedInfo, createFavoriteButton } from './ui.js';

document.getElementById('fetch-button').addEventListener('click', async () => {
    // Fetch a random cat image
    const catData = await fetchCatImage();
    if (catData) {
        // Display the cat image in the UI
        displayCatImage(catData, () => displayBreedInfo(catData));

        // Create a favorite button and handle favoriting
        createFavoriteButton(async () => {
            const success = await favoriteCatImage(catData.id);
            if (success) {
                alert('Cat image added to favorites!');
            } else {
                alert('Failed to add cat image to favorites.');
            }
        });
    }
});
