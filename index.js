// want to load two pages, one for dogs, one for cats
// initialize endpoints
const dogEnd = 'https://dog.ceo/api/breeds/image/random';
const catKey = '5b61a5ee-65b9-4c51-b7b7-71418fcda6e7';
const catEnd = 'https://api.thecatapi.com/v1/images/search?api_key='+catKey;

// onclick events for the nav-link class
function happyPics(){
    $('#dogs').on('click',function(event){
        event.preventDefault();
        console.log('#dogs ran');
        getDogs();
    });
    $('#cats').on('click',function(event){
        event.preventDefault();
        console.log('#dogs ran');
        getCats();
    });
    $('#home').on('click',function(event){
        event.preventDefault();
        console.log('#dogs ran');
        loadHome();
    });
}

function loadDogs(imgFile){
    $('.main').html(
        `<header class="header">
        <h1>Cute DOGS!</h1>
    </header>
    <img src=${imgFile} alt="Cute Dog!"></img>`
    )
}

function getDogs(){
    fetch(dogEnd)
    .then(response => {
        if(response.ok){
            return response.json();
        } 
    })
    .then(responseJson => {
        console.log(responseJson.message)
        loadDogs(responseJson.message);
    })
}

function loadCats(imgFile){
    $('.main').html(
        `<header class="header">
        <h1>Cute Cats!</h1>
    </header>
    <img src=${imgFile} alt="Cute Dog!"></img>`
    )
}

function getCats(){
    console.log(catEnd)
    fetch(catEnd)
    .then(response => {
        if(response.ok){
            return response.json();
        } 
    })
    .then(responseJson => {
        console.log(responseJson)
        loadCats(responseJson[0].url);
    })
}

function loadHome(){
    $('.main').html(
        `<header class="header">
        <h1>Cute Pictures!</h1>
    </header>
    <p>Make yourself slightly happier and take a look at some cute animal pictures.</p>`
    )
}

$(happyPics)