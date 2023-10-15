let options = {
    method: 'GET',
    headers: { 'x-api-key': 'q+zNrzUAjK/k0BOwxHFWww==rgrhTdojd1pvQPaM' }
  }
  
let url = 'https://api.api-ninjas.com/v1/dogs?name=golden retriever'
  
  
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
        
        console.log(data)
    }

}

getDog();