const readline = require('readline');

// Create interface for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a year: ", (year) => {
    year = parseInt(year);

    // Leap year logic
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap Year.`);
    } else {
        console.log(`${year} is NOT a Leap Year.`);
    }

    rl.close();
});
