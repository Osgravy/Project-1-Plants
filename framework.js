function showWateringSchedule() {
  
    //collect the info in box 1 store in a var
    let plant = document.querySelector("#plant").value;
    //collect info in box 2
    let temperature = document.querySelector("#temperature").value;
    //collect box 3]
    let lightSource = document.querySelector("#lightSource").value;
    //hint use the id and query selector. remember how do i get the VALUE
    console.log(plant, temperature, lightSource)
    if(!plant||!temperature||!lightSource){
        alert("fill out all the boxes")
    }else{
        //prompt with the vars
        const schedule = ""
        alert(`Your watering schedule for the plant: '${plant}' Temperature: ${temperature}°F Light Source: ${lightSource} is ${schedule} `);
    }

    };

    //add an event listener that listens for the submit of that form and the runs the 
    document.getElementById("button").addEventListener('click', showWateringSchedule
       
    );

    //showWateringSchedule button
