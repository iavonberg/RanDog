// HOME PAGE
 let homeImg = document.querySelector('#dogImg');


let homeBreeds = window.localStorage.getItem('breeds');
console.log(homeBreeds);

let url = 'https://dog.ceo/api/breed/'+ homeBreeds +'/images/random';
    fetch(url).then(function(res) {
        return res.json();
    }).then(function (randImg) {
        homeImg.style.backgroundImage="url(" + randImg.message+ ")";
        console.log(randImg.message)})