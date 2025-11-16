function fetchCharacterInfo() {
    fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(data => {
            displayCharacterInfo(data);
        })
    }
function displayCharacterInfo(character) {
    const characterInfo = document.getElementById('characterInfo');
    characterInfo.innerHTML = `
        <p>Name: ${character.name}</p>
        <p>Height: ${character.height} cm</p>
        <p>Mass: ${character.mass} kg</p>
    `;
}
