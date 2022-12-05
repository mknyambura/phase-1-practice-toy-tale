let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    // hide & seek with the form
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

});
function renderOneToy(toy){
    let card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
        <div class = "content">
            <h3>${toy.name}</h3>
            <img class = "toy" src = "${toy.image}">
            <p class = 'likes-count'>Likes: ${toy.likes}</p>
        </div>
        <div class = "buttons">
            <button id='like-button'>Like</button>
        </div>`

    document.querySelector('#toy-collection').appendChild(card)
    card.querySelector('#like-button').addEventListener('click', function(){
        toy.likes += 1
        card.querySelector('.likes-count').textContent = `Likes: ${toy.likes}`
    })
}
function getAllToys(){
    fetch('http://localhost:3333/toys')
      .then((response) =>  response.json())
      .then(data => data.forEach(toy => renderOneToy(toy)))
    //   .then(data => console.log(data))
      console.log("Before fetch")
}

function submitNewToy(e){
    e.preventDefault()
    let toyObject = {
        name: e.target.name.value,
        image: e.target.image.value,
        likes: 0
    }
    renderOneToy(toyObject)
    createNewToy(toyObject)
}
function createNewToy(toyObject){
    fetch('http://localhost:3333/toys', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(toyObject)
    })
}

function updateLikes(toyObject){
    fetch('http://localhost:3333/toys/${toyObject.id}', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(toyObject)
    })
}
function initialize(){
    getAllToys();
    createNewToy();
    console.log("After fetch")
}
initialize();