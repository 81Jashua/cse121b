const dogElement = document.getElementById('dog');
let dogList = [];
let dog = '';
document.getElementById("searchBtn").addEventListener('click', getDogType);

let options = {
    method: 'GET',
    headers: { 'x-api-key': 'q+zNrzUAjK/k0BOwxHFWww==rgrhTdojd1pvQPaM' }
  }
  
let url = 'https://api.api-ninjas.com/v1/dogs?name=golden retriever'
//let url = `https://api.api-ninjas.com/v1/dogs?name=${dog}`;
  
function getDogType(){
    dog = document.getElementById("dogSearch").value;
    url = `https://api.api-ninjas.com/v1/dogs?name=${dog}`;
    getDog();
    //`Profile image of ${fullName}`
}
//   fetch(url,options)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//           console.log(data)
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
        
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

getDog();