

//creates elements button and div
    //creates myButton
    let myButton = document.getElementById('my_button')
    // creates myDiv element
    let myDiv = document.getElementById('my_div')
// adds event listener to myButton which deletes all player names and replaces them with the same list.
    // myButton gets eventListener
    myButton.addEventListener('click', () => {
        // creates paragraphs element
        let paragraphs = document.getElementsByTagName("p")
        //deletes p elements that are children of myDiv
        myDiv.replaceChildren()
//fetches data, creates a list of basketball players, adds a hover event that displays team name and division and a click event that deletes the player clicked
        //fetches data from the url
        fetch("https://www.balldontlie.io/api/v1/players")
        //parses the data into json
    .then(function (response){return response.json()})
    //grabs the data for use later on 
    .then(function (data) {
//iterates over the array of objects within the data object and stores first name and last name in a p tag to be displayed on the page
        data.data.forEach(element => {
            // creates element p
            const p = document.createElement('p')
            //sets inner text of p to first name ands last name of player
            p.innerText = element.first_name + " " + element.last_name
            //as the mouse hovers over the name of the player the players team and division pops up
            p.addEventListener("mouseover", () => {
                //fills the p tags title that pops up with the team name and division
                p.title = element.team.full_name + "\n" + element.team.division
            })
            //adds an event listener to the p tag that removes the names in the list
            p.addEventListener('click', () => p.remove())
            //appends the new p element to myDiv 
            myDiv.appendChild(p)
        });
    })
    .catch((err) => console.log(err))
    })
//as the mouse moves around on the page the background color of the page changes
    document.body.addEventListener("mousemove", (e) => {
        //dynamic background color
        document.body.style.backgroundColor = `rgba(${e.clientX * 5 % 255}, ${e.clientY}, ${e.clientX})`

    })

