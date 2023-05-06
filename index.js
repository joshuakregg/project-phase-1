

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
        myDiv.replaceChildren()
        fetch("https://www.balldontlie.io/api/v1/players")
    .then(function (response){return response.json()})
    .then(function (data) {

        data.data.forEach(element => {
            const p = document.createElement('p')
            p.innerText = element.first_name + " " + element.last_name
            p.addEventListener("mouseover", () => {
                p.title = element.team.full_name + "\n" + element.team.division
            })
            p.addEventListener('click', () => p.remove())

            myDiv.appendChild(p)
        });
    })
    .catch((err) => console.log(err))
    })
    
    document.body.addEventListener("mousemove", (e) => {
        document.body.style.backgroundColor = `rgba(${e.clientX * 5 % 255}, ${e.clientY}, ${e.clientX})`

    })

