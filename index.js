

const apiKey = "live_k9TYgEWHh7QBZIFBn53Ko6mHHTq2Fkz1O7QN9cQ1v8LJYaqPUUNzkmQ8uk8INRUz";
const ApiUrl = 'https://api.thecatapi.com/v1/favourites';
const favorites = []; 

// Fetch and display a random cat image
document.getElementById('fetch-button').addEventListener('click', fetchCatImage);

async function fetchCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
            headers: { 'x-api-key': apiKey }
        });
        if (!response.ok) throw new Error('Failed to fetch cat image.');
        const data = await response.json();
        const catImageUrl = data[0].url;
        const catImageId = data[0].id;
        displayCatImage(catImageId, catImageUrl);
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

function displayCatImage(imageId, imageUrl) {
    const catImagesContainer = document.getElementById('cat-images');
    catImagesContainer.innerHTML = ''; // Clear previous images

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Cat';
    img.classList.add('cat-image'); // Optional: for styling

    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = 'Add to Favorites';

    favoriteButton.addEventListener('click', () => favoriteCatImage(imageId, imageUrl));

    catImagesContainer.appendChild(img);
    catImagesContainer.appendChild(favoriteButton);
}

async function favoriteCatImage(imageId, imageUrl) {
    try {
        const response = await fetch(ApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify({
                image_id: imageId,
                sub_id: "user-123" 
            })
        });

        
        
        
        favorites.push({ id: imageId, url: imageUrl });
        alert('Cat image added to favorites!');
    } catch (error) {
        console.error('Error adding cat image to favorites:', error);
    }
}


document.getElementById('get-favorites').addEventListener('click', displayFavorites);

function displayFavorites() {
    const favoritesContainer = document.getElementById('favorites');
    favoritesContainer.innerHTML = ''; // Clear previous favorites

    favorites.forEach(favorite => {
        const img = document.createElement('img');
        img.src = favorite.url;
        img.alt = 'Favorite Cat';
        img.classList.add('cat-image'); 
        img.style.height = "50px";
     img.style.width = "100px";
     img.style.height = "100px";


        favoritesContainer.appendChild(img);
    });
}
