const generatedNumbers = []; // Array to store generated numbers

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100); // Change range as needed
    document.getElementById('randomNumber').textContent = `Random Number: ${randomNumber}`;

    generatedNumbers.push(randomNumber);
    updateNumberList();
}

function updateNumberList() {
    const numberListElement = document.getElementById('numberList');
    numberListElement.innerHTML = generatedNumbers.map(number => `<li>${number}</li>`).join('');
}

function startScheduledRandomNumberGenerator() {

    const now = new Date();
    const nextMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0);
    const timeUntilNextMinute = nextMinute - now;

    setTimeout(() => {
        generateRandomNumber();
        setInterval(generateRandomNumber, 60000); // Call every 60,000 milliseconds (1 minute)
    }, timeUntilNextMinute);
    
    // const now = new Date();
    // const nextFiveMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), Math.ceil(now.getMinutes() / 5) * 5, 0);
    
    // // Calculate time until the next multiple of five minutes
    // let timeUntilNextFiveMinute = nextFiveMinute - now;


    // setTimeout(() => {
    //     generateRandomNumber();
    //     setInterval(generateRandomNumber, 5 * 60 * 1000); // Call every 5 minutes
    // }, timeUntilNextFiveMinute);
}

// Start the generator
startScheduledRandomNumberGenerator();