const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose'
];

// Function to populate city options
function populateCities() {
    const startSelect = document.getElementById('start');
    const endSelect = document.getElementById('end');
    
    // Populate start and end selects
    cities.forEach(city => {
        const startOption = document.createElement('option');
        startOption.value = city;
        startOption.textContent = city;
        startSelect.appendChild(startOption);
        
        const endOption = document.createElement('option');
        endOption.value = city;
        endOption.textContent = city;
        endSelect.appendChild(endOption);
    });
}

// Function to update end select based on start select
function updateEndSelect() {
    const startSelect = document.getElementById('start');
    const endSelect = document.getElementById('end');
    
    // Remove all options from end select
    endSelect.innerHTML = '';
    
    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select City';
    endSelect.appendChild(defaultOption);
    
    // Populate end select excluding the selected start city
    cities.forEach(city => {
        if (city !== startSelect.value) {
            const endOption = document.createElement('option');
            endOption.value = city;
            endOption.textContent = city;
            endSelect.appendChild(endOption);
        }
    });
}

// Initialize city options
populateCities();

// Add event listener to start select
document.getElementById('start').addEventListener('change', updateEndSelect);

document.getElementById('find-route').addEventListener('click', () => {
    const startPoint = document.getElementById('start').value;
    const endPoint = document.getElementById('end').value;
    const budget = document.getElementById('budget').value;

    if (startPoint && endPoint && budget) {
        // Example data to simulate price and map image
        const price = '$100';
        const mapImageUrl = 'https://via.placeholder.com/150'; // Update with actual image URL

        // Open map image in a new tab
        window.open(mapImageUrl, '_blank');

        // Optional: Display route information on the current page
        const template = document.getElementById('route-card-template');
        const clone = template.cloneNode(true);
        clone.removeAttribute('id');
        clone.style.display = 'flex';

        // Set values in the cloned template
        clone.querySelector('.route-text').innerText = `${startPoint} to ${endPoint}`;
        clone.querySelector('.route-price').innerText = price;
        clone.querySelector('.route-budget').innerText = `$${budget}`;
        clone.querySelector('.map-image').src = mapImageUrl;

        // Append cloned template to results section
        document.querySelector('.results-section').appendChild(clone);
    } else {
        alert('Please enter start point, end point, and budget.');
    }
});
