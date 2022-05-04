const UsersList = [
    {
        id: 1,
        name: "Mohammed",
        username: "m7md2199",
        age: 29,
        nationality: "Saudi",
    },
    {
        id: 2,
        name: "Jack",
        username: "Jack",
        age: 22,
        nationality: "American",
    },
    {
        id: 3,
        name: "Cena",
        username: "Cena",
        age: 56,
        nationality: "Mexican",
    },
    {
        id: 4,
        name: "Jawed",
        username: "Jawwed",
        age: 43,
        nationality: "Pakistan",
    },
    {
        id: 5,
        name: "Yanner",
        username: "yaaa",
        age: 29,
        nationality: "Canadian",
        friends: [
            {
                id: 4,
                name: "Jawed",
                username: "Jawwed",
                age: 43,
                nationality: "Pakistan",
            },
            {
                id: 2,
                name: "Jack",
                username: "Jack",
                age: 22,
                nationality: "American",
            },

        ]
    }
]

const MoviesList = [
    {
        id: 1,
        name: "Batman",
        year: 2022,
        isInCinema: true,
    },
    {
        id: 2,
        name: "Nice",
        year: 1992,
        isInCinema: true,
    },
    {
        id: 3,
        name: "Dark Night",
        year: 2009,
        isInCinema: false,
    },
    {
        id: 2,
        name: "Game of the Galaxy",
        year: 2017,
        isInCinema: false,
    },
]


module.exports = {UsersList , MoviesList};
