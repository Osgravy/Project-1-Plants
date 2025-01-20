function showWateringSchedule() {

    //collect the info in box 1 store in a var
    let plant = document.querySelector("#plant").value.trim().toLowerCase();

    //collect info in box 2
    let temperature = parseFloat(document.querySelector("#temperature").value);

    //collect box 3
    let lightSource = parseFloat(document.querySelector("#lightSource").value);

    //creates set of valid plants
    let validPlants = ["cactus", "tropical", "orchid", "shade"]

    //creates a modal display on the page instead of an alert
    const waterDisplay = document.getElementById("waterDisplay")
    const waterMessage = document.getElementById("waterMessage")

    //same but for errors
    const errorDisplay = document.getElementById("errorDisplay")
    const errorMessage = document.getElementById("errorMessage")

    console.log(plant, temperature, lightSource)
    console.log(validPlants)
    console.log(waterDisplay)


    //empty box error
    if (plant === "" || temperature === "" || lightSource === "") {
        errorMessage.textContent = "Please fill out all the boxes!";
        errorDisplay.classList.remove("hidden");
        return;
    }
    //non-number value for light or temperature
    if (isNaN(temperature) || isNaN(lightSource)) {
        errorMessage.textContent = "Light and temperature values must be a number!";
        errorDisplay.classList.remove("hidden");
        return;
    }
    //invalid plant type
    if (!validPlants.includes(plant) && temperature && lightSource) {
        errorMessage.textContent = `That's not a valid plant! Please choose from the following: ${validPlants.join(", ")}.`;
        errorDisplay.classList.remove("hidden");
        return;
    }

    //create watering schedule

    //for cacti
    if (plant === "cactus" && temperature >= 85 && lightSource >= 20000) {
        waterMessage.textContent = "Water your cactus every 8-9 days.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "cactus" && temperature <= 80 && temperature >= 55 && lightSource >= 20000) {
        waterMessage.textContent = "Water your cactus every 10-14 days.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "cactus" && temperature < 55 && lightSource >= 20000) {
        waterMessage.textContent = "Your cactus needs more warmth!!! Make sure your room is at least 55 degrees.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "cactus" && temperature <= 80 && temperature >= 55 && lightSource < 20000) {
        waterMessage.textContent = "Your cactus needs to be in direct sunlight!!! Make sure it's getting at least 20,000 lux.";
        waterDisplay.classList.remove("hidden");
    }

    //for tropicals
    else if (plant === "tropical" && temperature >= 80 && lightSource >= 10000 && lightSource <= 20000) {
        waterMessage.textContent = "Water your tropical plant every 5-7 days.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "tropical" && temperature <= 80 && temperature >= 65 && lightSource >= 10000 && lightSource <= 20000) {
        waterMessage.textContent = "Water your tropical plant every 7-10 days.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "tropical" && temperature <= 80 && temperature >= 65 && lightSource >= 3000 && lightSource <= 10000) {
        waterMessage.textContent = "Water your tropical plant every 10-12 days.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "tropical" && temperature < 65 && lightSource >= 3000 && lightSource <= 20000) {
        waterMessage.textContent = "Your tropical plant needs more warmth!!! Make sure your room is at least 65 degrees.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "tropical" && temperature >= 65 && lightSource < 3000) {
        waterMessage.textContent = "Your tropical plant needs more light!!! Make sure its geting at least 3000 lux.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "tropical" && temperature >= 65 && lightSource > 20000) {
        waterMessage.textContent = "Your tropical plant is getting too much light!!! Make sure it's geting less than 20,000 lux.";
        waterDisplay.classList.remove("hidden");
    }

    //for orchids
    else if (plant === "orchid" && temperature >= 85 && lightSource >= 10000) {
        waterMessage.textContent = "Water your orchid every day.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "orchid" && temperature <= 85 && temperature >= 55 && lightSource >= 10000) {
        waterMessage.textContent = "Water your orchid every 2-4 days.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "orchid" && temperature < 65 && lightSource >= 10000) {
        waterMessage.textContent = "Your orchid needs more warmth!!! Make sure your room is at least 55 degrees.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "orchid" && temperature >= 55 && lightSource < 10000) {
        waterMessage.textContent = "Your orchid needs to be in bright inderect light!!! Make sure it's getting at least 10,000 lux.";
        waterDisplay.classList.remove("hidden");
    }

    //for shade
    else if (plant === "shade" && temperature >= 55 && temperature <= 80 && lightSource >= 500 && lightSource <= 10000) {
        waterMessage.textContent = "Water your shade plant every 7-10 days.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "shade" && temperature > 80 && lightSource >= 500 && lightSource <= 10000) {
        waterMessage.textContent = "Your shade plant is too hot!!! Make sure your room is less than 80 degrees.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "shade" && temperature < 55 && lightSource >= 500 && lightSource <= 10000) {
        waterMessage.textContent = "Your shade plant needs more warmth!!! Make sure your room is at least 55 degrees.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "shade" && temperature >= 55 && temperature <= 80 && lightSource < 500) {
        waterMessage.textContent = "Your shade plant needs more light!!! Make sure it's getting at least 500 lux.";
        waterDisplay.classList.remove("hidden");
    } else if (plant === "shade" && temperature >= 55 && temperature <= 80 && lightSource > 10000) {
        waterMessage.textContent = "Your shade plant is getting too much light!!! Make sure it's getting less than 10,000 lux.";
        waterDisplay.classList.remove("hidden");
    }

}



//add an event listener that listens for the submit of that form and the runs the 
document.getElementById("button").addEventListener('click', showWateringSchedule);

document.getElementById("closeError").addEventListener("click", () => {
    document.getElementById("errorDisplay").classList.add("hidden");
});

document.getElementById("closeWater").addEventListener("click", () => {
    document.getElementById("waterDisplay").classList.add("hidden");
});
