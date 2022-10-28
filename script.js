var cinema = {
    name: "ამირანი",
    location: "კოსტავას ქუჩა N 36",
    language: ["ქართული", "ინგლისური"],
    movies: [
        {name:"Black Adam", imdb:"7.1"},
        {name:"Bullet Train", imdb:"7.4",},
        {name: "Parasite", imdb: "8.5"}
    ]
}
document.write("<h2> კინოთეატრის სახელი</h2>")
document.write(cinema.name)
document.write("<h3> კინოთეატრის ადგილმდებარეობა</h3>")
document.write(cinema.location)
document.write("<h3>ფილმები სხვადასხვა ენაზე</h3>")
for(var i=0; i<cinema.language.length; i++){
    document.write(cinema.language[i] + "</br>")
}
document.write("<h2> ფილმები</h2>")
for(var i=0; i<cinema.movies.length; i++){
    document.write(cinema.movies[i].name + "</br>")
}
document.write("<h2> ფილმები და მათი რეიტინგი</h2>")
for( var i=0; i<cinema.movies.length; i++){
    document.write(cinema.movies[i].name + "</br>")
    document.write(cinema.movies[i].imdb + "</br>")
}