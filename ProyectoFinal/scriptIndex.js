document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        fetch(`https://restcountries.com/v3.1/name/${query}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    const country = data[0];
                    const params = new URLSearchParams({
                        name: country.name.common,
                        capital: country.capital ? country.capital[0] : 'N/A',
                        region: country.region,
                        population: country.population,
                        flag: country.flags.png,
                        currencyCode: Object.keys(country.currencies)[0],
                        languages: Object.values(country.languages).join(', ')
                    }).toString();
                    window.location.href = `Proyecto.html?${params}`;
                } else {
                    alert('No se encontraron datos para el país o ciudad ingresado.');
                }
            })
            .catch(error => {
                console.error('Error al obtener los datos del país:', error);
                alert('Ocurrió un error al buscar el país o ciudad.');
            });
    } else {
        alert('Por favor, ingresa un país o ciudad.');
    }
});
