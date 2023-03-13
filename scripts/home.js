// HOME PAGE
 let homeImg = document.querySelector('#dogImg');



 let homeBreeds = window.localStorage.getItem('breeds').split(",");

function getRandomBreed() {
    const randomIndex = Math.floor(Math.random() * homeBreeds.length);
    const currentBreed = homeBreeds[randomIndex];
    return currentBreed
}

currentBreed = getRandomBreed(homeBreeds);

let url = 'https://dog.ceo/api/breed/'+ currentBreed +'/images/random';
    fetch(url).then(function(res) {
        return res.json();
    }).then(function (randImg) {
        homeImg.style.backgroundImage="url(" + randImg.message+ ")";
})