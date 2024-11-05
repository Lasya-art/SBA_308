// document.getElementById('fetch-button').addEventListener('click', fetchCatImage);

// function fetchCatImage() {
//     fetch('https://api.thecatapi.com/v1/images/search')
//         .then(response => response.json())
//         .then(data => {
//             const catImageUrl = data[0].url;
//             displayCatImage(catImageUrl);
//         })
//         .catch(error => console.error('Error fetching cat image:', error));
// }

// function displayCatImage(url) {
//     const catImagesContainer = document.getElementById('cat-images');
//     const img = document.createElement('img');
//     img.src = url;
//     img.alt = 'Random Cat';
//     catImagesContainer.appendChild(img);
// }


//this worked with no breeds infor display

// document.getElementById('fetch-button').addEventListener('click', fetchCatImage);

// async function fetchCatImage() {
//     try {
//         const response = await fetch('https://api.thecatapi.com/v1/breeds')
//         const data = await response.json();
//         const catImageUrl = data[0].url;
//         const breedInfo = data[0].breeds[0]; // Get breed information

//         displayCatImage(catImageUrl, breedInfo); // Pass the breed info to the display function
//     } catch (error) {
//         console.error('Error fetching cat image:', error);
//     }
// }

// function displayCatImage(url, breedInfo) {
//     const catImagesContainer = document.getElementById('cat-images');
//     const breedInfoContainer = document.getElementById('breed-info');

//     // Clear previous images and breed info
//     catImagesContainer.innerHTML = '';
//     breedInfoContainer.innerHTML = '';

//     const img = document.createElement('img');
//     img.src = url;
//     img.alt = 'Random Cat';
//     img.classList.add('cat-image'); // Add a class for styling or identification

//     // Set up click event to show breed information when image is clicked
//     img.addEventListener('click', () => {
//         showBreedInfo(breedInfo);
//     });

//     catImagesContainer.appendChild(img);
// }

// function showBreedInfo(breedInfo) {
//     const breedInfoContainer = document.getElementById('breed-info');

//     // Display breed information if available
//     if (breedInfo) {
//         breedInfoContainer.innerHTML = `
//             <h3>Breed Information:</h3>
//             <p><strong>Name:</strong> ${breedInfo.name}</p>
//             <p><strong>Description:</strong> ${breedInfo.description}</p>
//             <p><strong>Temperament:</strong> ${breedInfo.temperament}</p>
//             <p><strong>Origin:</strong> ${breedInfo.origin}</p>
//             <p><strong>Life Span:</strong> ${breedInfo.life_span} years</p>
//         `;
//     } else {
//         breedInfoContainer.innerHTML = `<p>No breed information available.</p>`;
//     }
// }

//this worked

// document.getElementById('fetch-button').addEventListener('click', fetchCatImage);

// async function fetchCatImage() {
//     try {
//         const response = await fetch('https://api.thecatapi.com/v1/images/search');
//         const data = await response.json();
//         const catImageUrl = data[0].url;
//         displayCatImage(catImageUrl);
//     } catch (error) {
//         console.error('Error fetching cat image:', error);
//     }
// }

// function displayCatImage(url) {
//     const catImagesContainer = document.getElementById('cat-images');

//     // Clear previous images
//     catImagesContainer.innerHTML = '';

//     const img = document.createElement('img');
//     img.src = url;
//     img.alt = 'Random Cat';
//     img.classList.add('cat-image'); // Optional: for styling

//     // Create a like button
//     const likeButton = document.createElement('button');
//     likeButton.textContent = 'Like';
//     let likeCount = 0; // Initialize like count

//     // Event listener for the like button
//     likeButton.addEventListener('click', () => {
//         likeCount++;
//         likeButton.textContent = `Like (${likeCount})`; // Update button text with like count
//         alert('You liked this cat!'); // Optional: show an alert
//     });

//     // Append the image and like button to the container
//     catImagesContainer.appendChild(img);
//     catImagesContainer.appendChild(likeButton);
// }



//code whih is working

// const apiKey = "live_k9TYgEWHh7QBZIFBn53Ko6mHHTq2Fkz1O7QN9cQ1v8LJYaqPUUNzkmQ8uk8INRUz";

// const mockApiUrl = 'https://api.thecatapi.com/v1/favourites'; // Replace with your mock API endpoint



// document.getElementById('fetch-button').addEventListener('click', fetchCatImage);

// async function fetchCatImage() {
//     try {
//         const response = await fetch('https://api.thecatapi.com/v1/images/search', {
//             headers: { 'x-api-key': apiKey }
//         });
//         if (!response.ok) throw new Error('Failed to fetch cat image.');
//         const data = await response.json();
//         const catImageUrl = data[0].url;
//         const catImageId = data[0].id;
//         displayCatImage(catImageId, catImageUrl);
//     } catch (error) {
//         console.error('Error fetching cat image:', error);
//     }
// }

// function displayCatImage(imageId, imageUrl) {
//     const catImagesContainer = document.getElementById('cat-images');
//     catImagesContainer.innerHTML = ''; // Clear previous images

//     const img = document.createElement('img');
//     img.src = imageUrl;
//     img.alt = 'Random Cat';
//     img.classList.add('cat-image'); // Optional: for styling

//     const favoriteButton = document.createElement('button');
//     favoriteButton.textContent = 'Add to Favorites';

//     favoriteButton.addEventListener('click', () => favoriteCatImage(imageId, imageUrl));

//     catImagesContainer.appendChild(img);
//     catImagesContainer.appendChild(favoriteButton);
// }

// async function favoriteCatImage(imageId, imageUrl) {
//     try {
//         const response = await fetch(mockApiUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-api-key': apiKey // Add API key here if required
//             },
//             body: JSON.stringify({
//                 "image_id": "id-of-image-to-favourite",
// "sub_id":"user-123"
//             })
//         });

//         if (!response.ok) throw new Error(`Failed to add cat image to favorites: ${response.status}`);
        
//         alert('Cat image added to favorites!');
//     } catch (error) {
//         console.error('Error adding cat image to favorites:', error);
//     }
// }



const apiKey = "live_k9TYgEWHh7QBZIFBn53Ko6mHHTq2Fkz1O7QN9cQ1v8LJYaqPUUNzkmQ8uk8INRUz";
const ApiUrl = 'https://api.thecatapi.com/v1/favourites';
const favorites = []; // Array to store favorite images

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
    catImagesContainer.innerHTML = ''; 

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Cat';
    img.classList.add('cat-image'); 

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

        if (!response.ok) throw new Error(`Failed to add cat image to favorites: ${response.status}`);
        
        
        favorites.push({ id: imageId, url: imageUrl });
        alert('Cat image added to favorites!');
    } catch (error) {
        console.error('Error adding cat image to favorites:', error);
    }
}

// Display all favorite images when the "Get Favorites" button is clicked
// document.getElementById('get-favorites').addEventListener('click', displayFavorites);
// function displayFavorites() {
//     const favoritesContainer = document.getElementById('favorites');
//     favoritesContainer.innerHTML = ''; // Clear previous favorites

//     favorites.forEach(favorite => {
//         const img = document.createElement('img');
//         img.src = favorite.url;
//         img.alt = 'Favorite Cat';
//         img.classList.add('favorite-cat-image'); // Add CSS class for styling
//         img.style.height = "50px";
//         img.style.width = "50px";


//         favoritesContainer.appendChild(img);
//     });
// }
