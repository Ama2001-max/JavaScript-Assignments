/**
 * Task 2: Greeting Program
 * Prompts the user for their name and prints a greeting to the HTML document.
 */
function greetUser() {

    const userName = prompt("Please enter your name:");


    const messageElement = document.getElementById('greetingMessage');


    if (userName && userName.trim() !== "") {

        const greeting = `Hello, ${userName.trim()}!`;


        messageElement.textContent = greeting;
        console.log(`Greeting displayed: ${greeting}`);
    } else {

        messageElement.textContent = "Hello there! Please reload the page and enter your name.";
        console.warn("No valid name was entered.");
    }
}


greetUser();