document.addEventListener('DOMContentLoaded', function() {
    getCharacters();
});

function getCharacters() {
    // URL de l'API
    const apiUrl = 'https://but-sd.github.io/prez/characters.json';

    // Récupérer les données avec fetch
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau : ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Afficher les données dans la console
            const list = document.querySelector('#charactersList');

            // Boucle à travers les personnages et crée un élément de liste pour chacun
            data.forEach(character => {
                const listItem = document.createElement('li');

                // Affiche seulement le nom du personnage
                listItem.textContent = character.name;
                
                // Ajouter l'élément de liste à la liste
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données :', error));
}
