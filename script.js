// Smoothie class to create smoothie objects
class Smoothie {
    constructor(name, size, ingredients, base) {
        this.name = name; // Sets the name of the smoothie
        this.size = size; // Sets the size of the smoothie
        this.ingredients = ingredients; // Sets the ingredients of the smoothie
        this.base = base; // Sets the liquid base of the smoothie
    }

    getDescription() {
        // Returns a formatted description of the smoothie
        return `Name: ${this.name}<br>Size: ${this.size}<br>Ingredients: ${this.ingredients.join(', ')}<br>Liquid Base: ${this.base}`;
    }
}

// Function to capture form values and create a Smoothie object
function orderSmoothie() {
    const name = document.getElementById('name').value; // Captures the name of the smoothie
    const size = document.getElementById('size').value; // Captures the size of the smoothie
    // Captures the selected ingredients
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(ingredient => ingredient.value);
    const base = document.getElementById('base').value; // Captures the liquid base

    console.log("Name:", name); // Logs the name to the console
    console.log("Size:", size); // Logs the size to the console
    console.log("Ingredients:", ingredients); // Logs the ingredients to the console
    console.log("Liquid Base:", base); // Logs the liquid base to the console

    // Checks if all fields are filled out
    if (name && size && ingredients.length > 0 && base) {
        const smoothie = new Smoothie(name, size, ingredients, base); // Creates a new Smoothie object
        const summaryElement = document.getElementById('order-summary'); // Captures the order summary element
        summaryElement.innerHTML = smoothie.getDescription(); // Displays the smoothie description in the summary element
        summaryElement.classList.add('visible'); // Adds the 'visible' class to show the summary
    } else {
        alert('Please fill out all fields.'); // Shows an alert if any field is missing
    }
}

// Adds an event listener to the order button
document.getElementById('order-button').addEventListener('click', orderSmoothie); // Calls the orderSmoothie function when the button is clicked
