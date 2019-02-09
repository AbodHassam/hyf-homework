let longMovies = [];
let longMovieTitles = [];
let badMovies = [];
let badMoviesSinceYear2000 = [];
let badMoviesSinceYear2000Titles = [];

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(res => res.json())
    .then((Data)=>{
        let largerThan7000 = Data.filter((movie) => movie.running_times > 7000);
        longMovies.push(largerThan7000);
        console.log(longMovies);

        let largerThan7000Titles = largerThan7000.map((movie)=>movie.title);
        longMovieTitles.push(largerThan7000Titles)
        console.log(longMovieTitles);
        
        let bad = Data.filter((movie) => movie.rating < 4);
        badMovies.push(bad);
        console.log(badMovies);
        
        let badSince2000 = Data.filter((movie) => movie.rating < 4 && movie.year > 2000);
        badMoviesSinceYear2000.push(badSince2000);
        console.log(badMoviesSinceYear2000);

        let badSince2000Titles = badSince2000.map((movie)=> movie.title);
        badMoviesSinceYear2000Titles.push(badSince2000Titles);
        console.log(badMoviesSinceYear2000Titles);
        
    })