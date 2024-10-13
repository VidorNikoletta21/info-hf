document.getElementById('get-recipe').addEventListener('click', async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
            throw new Error('Hiba történt a válasz során: ' + response.status);
        }
        
        const data = await response.json();
        const categories = data.categories.map(category => category.strCategory).join(', ');
        
        document.getElementById('recipe').innerHTML = `
            <h2>Kategóriák</h2>
            <p>${categories}</p>
        `;
    } catch (error) {
        console.error('Hiba történt:', error);
        document.getElementById('recipe').innerText = 'Hiba történt a recept lekérése során.';
    }
});
