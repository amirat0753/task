function clothingAdviser(temperature, isRaining) {
    if (temperature >= 25) {
        if (isRaining) {
            return "You might need an umbrella and a light jacket or raincoat.";
        } else {
            return "You can wear light clothes like shorts and t-shirts.";
        }
    } else if (temperature >= 15 && temperature < 25) {
        if (isRaining) {
            return "You might need a jacket or sweater and an umbrella.";
        } else {
            return "You can wear a light jacket or sweater.";
        }
    } else {
        if (isRaining) {
            return "You should wear a warm jacket or coat, and don't forget an umbrella.";
        } else {
            return "You should wear warm clothes like a sweater and a coat.";
        }
    }
}

function main() {
    try {
        let temperature = parseFloat(prompt("Enter the current temperature in Celsius:"));
        if (isNaN(temperature)) {
            throw new Error("Invalid input. Please enter a valid temperature.");
        }

        let isRaining = prompt("Is it raining? (yes/no):").toLowerCase() === 'yes';

        let clothingAdvice = clothingAdviser(temperature, isRaining);
        console.log("Clothing Advice:", clothingAdvice);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
