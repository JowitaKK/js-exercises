var myMovie = {
    title: "Titanic",
    releaseYear: 1997,
    duration: 3.15,
    actors: [
        {
            name: "Kate Winslet",
            birthday: new Date ("5 October, 1975"),
            hometown: "Reading, England"
        },

        {
            name: "Leo DiCario",
            birthday: new Date ("November 11, 1974"),
            hometown: "LA, US"

        },
    ]
}

document.write(myMovie.actors[1].name);