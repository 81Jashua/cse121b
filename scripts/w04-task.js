/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Joshua Snyder',
    photo: 'images/profileimage.jpg',
    favoriteFoods: ['Hamburgers', 'Salsa', 'Smoothie', 'Ice Cream'],
    hobbies: ['Tennis', 'PickleBall', 'Excersise', 'Painting'],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Upland, CA',
        length: '31 years'
    },
    {
        place: 'Spanish Fork, UT',
        length: '11 years'
    }
)

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').innerHTML = myProfile.name
/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.photo)
document.querySelector('img').setAttribute('alt', `Profile image of ${myProfile.name}`)
/* Favorite Foods List*/
function addFoods(foods){    
    for (let food in foods)
    {
        const newLi = document.createElement("li")
        newLi.innerHTML = foods[food]
        document.getElementById('favorite-foods').appendChild(newLi)
    }
}
addFoods(myProfile.favoriteFoods)

/* Hobbies List */
function addHobbies(hobbies){
    for (let hobbie in hobbies){
        const newLi = document.createElement('li')
        newLi.innerHTML = hobbies[hobbie]
        document.getElementById('hobbies').appendChild(newLi)
    }
}
addHobbies(myProfile.hobbies)

/* Places Lived DataList */
// function addPlacesLived(placesLived){
//     for (let place in placesLived){
//         const newDt = document.createElement('dt')
//         const newDd = document.createElement('dd')
//         newDt.innerHTML = placesLived[place]['place']
//         newDd.innerHTML = placesLived[place]['length']
//         document.getElementById('places-lived').appendChild(newDt)
//         document.querySelector('dt').appendChild(newDd)
//     }
// }
// addPlacesLived(myProfile.placesLived)

const newDtOne = document.createElement('dt')
const newDdOne = document.createElement('dd')
newDtOne.innerHTML = myProfile.placesLived[0]['place']
newDdOne.innerHTML = myProfile.placesLived[0]['length']
document.getElementById('places-lived').appendChild(newDtOne)
document.getElementById('places-lived').appendChild(newDdOne)

const newDtTwo = document.createElement('dt')
const newDdTwo = document.createElement('dd')
newDtTwo.innerHTML = myProfile.placesLived[1]['place']
newDdTwo.innerHTML = myProfile.placesLived[1]['length']
document.getElementById('places-lived').appendChild(newDtTwo)
document.getElementById('places-lived').appendChild(newDdTwo)

