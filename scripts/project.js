const dogElement = document.getElementById('dog');
const favElement = document.getElementById('favoriteDogs');

let dogList = [];
let favDogs = [];
let dog = '';
document.getElementById("searchBtn").addEventListener('click', getDogType);
document.getElementById("favoriteBtn").addEventListener('click', addFavorite);
let options = {
    method: 'GET',
    headers: { 'x-api-key': 'q+zNrzUAjK/k0BOwxHFWww==rgrhTdojd1pvQPaM' }
  }
  
let url = 'https://api.api-ninjas.com/v1/dogs?name=golden retriever'
  
function getDogType(){
    dog = document.getElementById("dogSearch").value;
    url = `https://api.api-ninjas.com/v1/dogs?name=${dog}`;
    reset();
    getDog();
}
        
/* async getTemples Function using fetch()*/
const getDog = async () => {
    const response = await fetch(url,options);
    if (response.ok){
        const data = await response.json();
        let temp = [];
        temp.push(data);
        dogList = temp[0];
        displayDog(dogList);
        
        console.log(data)
    }
}
//Display Dog information
const displayDog = (dog) => {      
    for (let dogInfo in dog){
    const article = document.createElement('article');
    const header = document.createElement('h3');
    header.innerHTML = dog[dogInfo]["name"];
    const image = document.createElement('img');
    image.src = dog[dogInfo]["image_link"];
    image.alt = dog[dogInfo]["name"];
    article.appendChild(header);
    article.appendChild(image);
    dogElement.appendChild(article);  
    }
}


function addFavorite(){
    resetFav();
    favDogs.push(dogList[0]);
    displayFav(favDogs);
}

const displayFav = (dog) => {      
    for (let dogInfo in dog){
    const article = document.createElement('article');
    const header = document.createElement('h3');
    header.innerHTML = dog[dogInfo]["name"];
    const image = document.createElement('img');
    image.src = dog[dogInfo]["image_link"];
    image.alt = dog[dogInfo]["name"];
    article.appendChild(header);
    article.appendChild(image);
    favElement.appendChild(article);  
    }
}

function reset(){
    let parent = document.getElementById("dog");
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function resetFav(){
    let parent = document.getElementById("favoriteDogs");
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

getDog();