document.addEventListener('DOMContentLoaded', function() {
    let climbs = localStorage.getItem('climbs');
    climbs = climbs ? JSON.parse(climbs) : [];

    const climbHistoryDiv = document.getElementById('climbHistory');

    if (climbs.length > 0) {
        climbs.forEach(climb => {
            const climbDiv = document.createElement('div');
            climbDiv.classList.add('climb-entry');

            climbDiv.innerHTML = `
                <p><strong>Level:</strong> ${climb.level}</p>
                <p><strong>Location:</strong> ${climb.location}</p>
                <p><strong>Date:</strong> ${climb.date}</p>
                <p><strong>Type:</strong> ${climb.type}</p>
                <p><strong>Holds:</strong> ${climb.holds.join(', ')}</p>
            `;

            climbHistoryDiv.appendChild(climbDiv);
        });
    } else {
        climbHistoryDiv.innerHTML = '<p>No climbs recorded yet.</p>';
    }
});
