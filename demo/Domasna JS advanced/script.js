const fetchUserData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('No network response');
            }
            return response.json();
        })
        .then(data => {
            displayUserData(data);
        })
        .catch(error => {
            console.error('Error while fetching data:', error);
            document.getElementById('userData').innerHTML = '<p>Error while fetching data. Please try again later.</p>';
        });
};

const displayUserData = (users) => {
    const userDataDiv = document.getElementById('userData');
    userDataDiv.innerHTML = users.map(user => `
        <div>
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Phone: ${user.phone}</p>
        </div>
    `).join('');
};