let count = 0;

function displayMessage(message) {
    if (!count) {
        console.log(`\n${message}`);
        count++;
    }
}

displayMessage("This is a message.");
