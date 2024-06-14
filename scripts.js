document.getElementById('add-climb-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const level = document.getElementById('level').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const wallType = document.getElementById('wall-type').value;
    const holds = Array.from(document.querySelectorAll('input[name="holds"]:checked')).map(hold => hold.value);

    // Create a climb object
    const climb = {
        level,
        location,
        date,
        wallType,
        holds
    };

    // Save the climb to localStorage
    let climbs = JSON.parse(localStorage.getItem('climbs')) || [];
    climbs.push(climb);
    localStorage.setItem('climbs', JSON.stringify(climbs));

    // Clear the form
    document.getElementById('add-climb-form').reset();

    alert('Climb added successfully!');
});
