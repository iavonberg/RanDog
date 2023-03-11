const searchBtn = document.querySelector('#search');
const breedSelect = document.querySelector('#breedSelect');
const removeBreed = document.querySelector('#removeBreed');
let chosenBreeds = document.querySelector('#chosenBreeds');
let breedSelected = document.querySelector('#searchBox').value;
let breedPreview = document.querySelector('#breedPreview');

savedBreeds = window.localStorage.getItem('breeds');
console.log(savedBreeds)
if (savedBreeds != " ") {
    chosenBreeds.innerHTML = `${savedBreeds}, `;
    removeBreed.classList.remove('hidden');
} if (savedBreeds == null) {
    removeBreed.classList.add('hidden');
    chosenBreeds.innerHTML = "No breeds yet :("
}


searchBtn.addEventListener('click', getResults)

function getResults(e) {
    e.preventDefault();
    breedPreview.innerHTML = "";
    let breedSelected = document.querySelector('#searchBox').value.toLowerCase();
    let byBreedUrl = 'https://dog.ceo/api/breed/'+ breedSelected +'/images/random/4';
    fetch(byBreedUrl).then(function(res) {
        return res.json();
    }).then(function(breedSelected) {
        breedSelect.classList.remove('hidden');
        breedSelect.classList.add('visible');
        breedSelected.message.forEach(function(picture) {
            let previewPic = document.createElement('img');
            previewPic.setAttribute('src', picture);
            previewPic.style.display = "inline-block";
            previewPic.style.width = "25%";
            previewPic.style.height = "200px";
            breedPreview.appendChild(previewPic);
        })
    })
}


breedSelect.addEventListener('click', addBreed);

function addBreed() {
    let breedSelected = document.querySelector('#searchBox').value;
    let breeds = localStorage.getItem('breeds');
    breeds = breeds ? breeds.split(', '): [];
    breeds.push(breedSelected);
    localStorage.setItem('breeds', breeds.toString());
    console.log(breeds);
    chosenBreeds.innerHTML = `${breeds}, `;
    removeBreed.classList.remove('hidden');}

removeBreed.addEventListener('click', clearBreeds)

function clearBreeds() {
    breeds = [];
    localStorage.removeItem('breeds');
    console.log(breeds);
    chosenBreeds.innerHTML = "No breeds yet :("
    removeBreed.classList.add('hidden');
};