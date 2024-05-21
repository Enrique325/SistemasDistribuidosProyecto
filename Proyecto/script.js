document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchButton').addEventListener('click', getPlants);
});

async function getPlants() {
    const token = 'bV6XESY1WPOZORbLMgiy5MUekmtJR1B7S4G8DWsDPV0';  // Reemplaza con tu token
    const query = document.getElementById('search').value;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = `https://trefle.io/api/v1/plants/search?token=${token}&q=${query}`;

    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        console.log(data); // Para depuración
        displayPlants(data.data);
    } catch (error) {
        console.error('Error fetching plant data:', error);
        document.getElementById('plant-container').textContent = 'Error fetching plant data. Please try again later.';
    }
}

function displayPlants(plants) {
    const plantContainer = document.getElementById('plant-container');
    plantContainer.innerHTML = '';

    if (plants.length === 0) {
        plantContainer.innerHTML = '<p>No se encontraron plantas.</p>';
        return;
    }

    plants.forEach(plant => {
        const plantElement = document.createElement('div');
        plantElement.className = 'plant';
        plantElement.innerHTML = `
            <h2>${plant.common_name || 'Nombre común no disponible'}</h2>
            <p><strong>Nombre científico:</strong> ${plant.scientific_name}</p>
            <p><strong>Familia:</strong> ${plant.family_common_name || 'Familia no disponible'}</p>
            <img src="${plant.image_url || 'https://via.placeholder.com/150'}" alt="${plant.common_name}" style="max-width: 100%;">
        `;
        plantContainer.appendChild(plantElement);
    });
}
