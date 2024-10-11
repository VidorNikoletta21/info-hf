document.getElementById('get-recipe').addEventListener('click', async () => {
    try {
        const response = await fetch('www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        const recipe = data.recipes[0];
        
        document.getElementById('recipe').innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}">
            <p>${recipe.instructions}</p>
        `;
    } catch (error) {
        console.error('Hiba történt:', error);
    }
});