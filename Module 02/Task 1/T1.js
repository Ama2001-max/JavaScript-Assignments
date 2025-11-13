const numbers = [];
const count = 5;

for (let i = 0; i < count; i++) {
    let input = prompt(`Enter number ${i + 1} of ${count}:`);
    let number = parseInt(input);
    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert("Invalid input. Please enter a number.");
        i--;
    }
}

console.log("Original order:", numbers);
console.log("Numbers in reverse order:");

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}