const movies = [
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Godfather: Part II", genre: "Crime" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "12 Angry Men", genre: "Drama" },
    { title: "Schindler's List", genre: "Drama" },
    { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
    { title: "Pulp Fiction", genre: "Crime" },
    { title: "The Good, the Bad and the Ugly", genre: "Western" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "Inception", genre: "Action" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
    { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
    { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
    { title: "The Matrix", genre: "Action" },
    { title: "Goodfellas", genre: "Crime" },
    { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
    { title: "Seven Samurai", genre: "Adventure" },
    { title: "Se7en", genre: "Crime" },
    { title: "City of God", genre: "Crime" },
    { title: "The Silence of the Lambs", genre: "Thriller" },
    { title: "It's a Wonderful Life", genre: "Drama" },
    { title: "Life is Beautiful", genre: "Comedy" },
    { title: "The Usual Suspects", genre: "Crime" },
    { title: "Léon: The Professional", genre: "Action" },
    { title: "Spirited Away", genre: "Animation" },
    { title: "Saving Private Ryan", genre: "Drama" },
    { title: "Interstellar", genre: "Adventure" },
    { title: "The Green Mile", genre: "Drama" },
    { title: "The Prestige", genre: "Drama" },
    { title: "The Intouchables", genre: "Comedy" },
    { title: "The Lion King", genre: "Animation" },
    { title: "The Pianist", genre: "Drama" },
    { title: "The Departed", genre: "Crime" },
    { title: "Whiplash", genre: "Drama" },
    { title: "Gladiator", genre: "Action" }
]
const inputT = document.getElementById("input");
const inputG = document.getElementById("genre");
const button = document.getElementById("btn");
const list = document.getElementById("result");
const titleSort = document.getElementById("Tsort");
const genreSort = document.getElementById("Gsort")
const Gcount = document.getElementById("count-genre")

let resultArr = []

button.addEventListener("click", () => {
    const adSearch = document.getElementById("adSearch").value
    // console.log(adSearch);

    if (adSearch == "title" && inputT.value != "") {
        resultArr = searchByTitle(inputT.value)
        displayResult(resultArr)
        return;

    }
    else if (adSearch == "genre" && inputG.value != "") {
        resultArr = searchByGenre(inputG.value)
        displayResult(resultArr)
        return;

    }

    else if (adSearch == "both" && inputG.value != "" && inputT.value != "") {
        let arr = [];
        arr = searchByTitle(inputT.value);
        resultArr = arr.filter(movies => {
            return movies.genre.toLowerCase().includes(inputG.value.toLowerCase())
        })
        console.log(resultArr)

        // console.log(resultArr)


    }

    else if (inputT.value) {
        return resultArr = searchByTitle(inputT.value)

    }
    else {
        return resultArr = searchByGenre(inputG.value);
        // displayResult (resultArr)

    }
    displayResult(resultArr)

})
function searchByTitle(searchT) {
    return (movies.filter(movies => {
        return movies.title.toLowerCase().includes(searchT.toLowerCase())
    }))

}

function searchByGenre(searchG) {
    return movies.filter(movies => {
        return movies.genre.toLowerCase().includes(searchG.toLowerCase())
    })
}

function displayResult(resultArr) {
    countByGenre(resultArr);
    list.innerHTML = ""
    resultArr.map(result => {
        list.innerHTML += `<li>${result.title} (${result.genre})</li>`
    })
    if(resultArr.length == 0){
        list.innerHTML = "No movie found"
    }
}
//////

titleSort.addEventListener('click', (e) => {
    sortByTitle(resultArr);

})
function sortByTitle(resultArr) {
    displayResult(resultArr.sort((a, b) => a.title.localeCompare(b.title)));

}
// sortByTitle

genreSort.addEventListener('click', (e) => {
    sortByGenre(resultArr)
})
function sortByGenre(resultArr) {
    displayResult(resultArr.sort((a, b) => a.title.localeCompare(b.title)))
}

// 
function countByGenre(movies) {
    Gcount.innerHTML = ""
    const map = new Map();

    movies.map(movie => {
        if (map.has(movie.genre)) {
            map.set(movie.genre, map.get(movie.genre) + 1)
        }
        else {
            map.set(movie.genre, 1)
        }
    });
    for (let [key, value] of map) {
        Gcount.innerHTML += `<li>${key} ${value} </li>`
    }
};


