document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ride-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const pickup = document.getElementById('pickup').value;
        const dropoff = document.getElementById('dropoff').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        alert(`Ride Scheduled:
        Name: ${name}
        Pickup: ${pickup}
        Dropoff: ${dropoff}
        Date: ${date}
        Time: ${time}`);
    });
});
