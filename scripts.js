document.getElementById('climbForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const level = document.getElementById('level').value;
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;

    const holds = [];
    document.querySelectorAll('input[name="holds"]:checked').forEach(checkbox => {
        holds.push(checkbox.value);
    });

    const climb = {
        level,
        location,
        date,
        type,
        holds
    };

    let climbs = localStorage.getItem('climbs');
    climbs = climbs ? JSON.parse(climbs) : [];
    climbs.push(climb);
    localStorage.setItem('climbs', JSON.stringify(climbs));

    document.getElementById('message').innerText = 'Climb added successfully!';
    this.reset();
});
