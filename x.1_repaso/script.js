

// manera para hacer petiones 

// Fetch => manera nativa de JS para hacer petiones.

console.log('Script')

fetch('pokemons.json?api_key=2432j324jk32j4l23k4j23kl4jll32lkj', {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    // mode: 'no-cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    // body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
  .then((response) => {
    console.log(response, typeof response)
    return response.json()
    // return 'algun valor'
    })
  .then(data => {
    console.log(data);
    // get element
    // crear elemento con datos
    document.write(data);
});