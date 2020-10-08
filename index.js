// want to load two pages, one for dogs, one for cats

// onclick events for the nav-link class
function happyPics(){
    $('#dogs').on('click',function(event){
        event.preventDefault();
        console.log(event.data.value);
        loadDogs(event.data.value);
    });
}