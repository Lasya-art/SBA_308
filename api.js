// scripts/api.js

const CAT_API_BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'llive_qnjfcC9Y62TBGhhpraEiGuv6MYZXiipidZNe2E6qi9FTKQMWsx1F1R4kHCg0FJht'; // Replace with your actual API key

// Fetch a random cat image
export async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
            headers: { 'x-api-key': API_KEY }
        });
        const data = await response.json();
        return data[0]; // returns the image data, including URL and breed
    } catch (error) {
        console.error('Error fetching cat image:', error);
        return null;
    }
}

// Add an image to favorites
export async function favoriteCatImage(imageId) {
    try {
        const response = await fetch(`${CAT_API_BASE_URL}/favourites`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY
            },
            body: JSON.stringify({ image_id: imageId })
        });
        return response.ok;
    } catch (error) {
        console.error('Error adding cat image to favorites:', error);
        return false;
    }
}
