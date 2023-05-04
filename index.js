

fetch("https://www.balldontlie.io/api/v1/players")
    .then(function (response){return response.json()})
    .then(function (data) {
        data.data.forEach(element => {
            const p = document.createElement('p')
            p.innerText = element.first_name + " " + element.last_name
            p.addEventListener('click', () => {
                const p2 = document.createElement("p")
                p2.innerText = element.team.full_name + "\n" + element.team.division
                document.body.appendChild(p2)
            })
            document.body.appendChild(p)
        });
    })
    .catch((err) => console.log(err))
    