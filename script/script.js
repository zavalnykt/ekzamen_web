document.getElementById('addCountries').addEventListener('click', function () {
    const input = document.getElementById('countriesInput');
    const countryNames = input.value.split(',').map(country => country.trim()).filter(country => country !== '');
    const list = document.getElementById('countriesList');
    list.innerHTML = '';
    countryNames.forEach(country => {
        const li = document.createElement('li');
        li.textContent = country;
        list.appendChild(li);
    });

    input.value = '';
});
