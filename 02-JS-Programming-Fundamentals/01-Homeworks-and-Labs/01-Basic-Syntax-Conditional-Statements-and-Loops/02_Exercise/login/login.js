function login(input) {

    let index = 0;
    let username = input[index];
    index++;
    let password = "";
    let wrongPasswordsCounter = 0;

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    while (input[index] !== password) {
        wrongPasswordsCounter++;

        if (wrongPasswordsCounter === 4) {
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log("Incorrect password. Try again.");
        }
        index++;
    }

    if (input[index] === password) {
        console.log(`User ${username} logged in.`);
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);