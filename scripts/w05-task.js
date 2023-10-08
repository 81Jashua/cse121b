/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
const templeList = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */
const displayTemples = (temples) => {
    let temp = temples[0];
    for (let temple in temp){
        const article = document.createElement('article');
        const header = document.createElement('h3');
        header.innerHTML = temp[temple]["templeName"];
        const image = document.createElement('img');
        image.src = temp[temple]["imageUrl"];
        image.alt = temp[temple]["location"];
        article.appendChild(header);
        article.appendChild(image);
        templesElement.appendChild(article);  
    }
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();

        templeList.push(data);
        displayTemples(templeList);
    }

}

/* reset Function */
function reset(){
    let parent = document.getElementById('temples');
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

/* sortBy Function */
function sortBy(temples){
    reset();
    let filter = document.getElementById('sortBy').innerHTML;
    switch(filter){
        case "utah":
            displayTemples();
            break;
        case "notutah":
            break;
        case "older":
            break;
        case "all":
            getTemples();
            break;
    }
}


getTemples();
console.log(templeList)

/* Event Listener */
