/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */
const displayTemples = (temples) => {      
    for (let temple in temples){
    const article = document.createElement('article');
    const header = document.createElement('h3');
    header.innerHTML = temples[temple]["templeName"];
    const image = document.createElement('img');
    image.src = temples[temple]["imageUrl"];
    image.alt = temples[temple]["location"];
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
        let temp = [];
        temp.push(data);
        templeList = temp[0];
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
    let filter = document.getElementById('sortBy').value;
    switch(filter){
        case "utah":
            displayTemples(filterUtah(temples));
            break;
        case "notutah":
            displayTemples(filter_non_utah(temples))
            break;
        case "older":
            displayTemples(filter_older(temples))
            break;
        case "all":
            displayTemples(templeList);
            break;
    }
}

function filterUtah(list){
    let tempLists = [];
    for (let key in list){
        if (list[key]["location"].includes("Utah")){
            tempLists.push(list[key]);
        }        
    }
    return tempLists;
}

function filter_non_utah(list){
    let tempLists = [];
    for (let key in list){
        if (list[key]["location"].includes("Utah")){
            continue;
        }
        else {tempLists.push(list[key]);}        
    }
    return tempLists;
}

function filter_older(list){
    let tempLists = [];
    for (let key in list){
        let dedicated = parseInt(list[key]["dedicated"].slice(0, 4));
        if (dedicated < 1950){
            tempLists.push(list[key]);
        }
    }
    return tempLists;
}

getTemples();
console.log(templeList)

/* Event Listener */
let sort_by = document.getElementById('sortBy');
sort_by.addEventListener("change", () => { sortBy(templeList)});
