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

function getAllToys(){
  fetch('http://localhost:3333/toys')
    .then(res => console.log(res))
    // .then(response =>  response.json())
    // .then(toyData => toyData.forEach(toy => renderOneToy(toy)))
}
function initialize(){
  getAllToys();
}
initialize();

// // document.querySelector('.submit').addEventListener('submit', newToy);

// // function newToy(event){
// //   event.preventDefault()

// //   const addNewToy = {
// //     name: event.target.name.value,
// //     image: event.target.image.value,
// //     likes: 0
// //   }
  
// //   renderOneToy(addNewToy)
// //   createToy(addNewToy)
// // }


// function renderOneToy(toys){
//   const collection = document.querySelector("#toy-collection");
//   const card = document.createElement('div')
//   card.className = 'card'
//   card.innerHTML = `
//   <p>${toys.likes} Likes</p> 
//   <button class="like-button" id="${toys.id}">Like ❤️</button>`
  
//   card.querySelector('.like-button').addEventListener('click', function(){
//     toys.likes += 1
//     card.querySelector('p').textContent = toys.likes
//     updateLikesCounts(toys)
//   })
//   collection.appendChild(card)
  
//   const name = document.createElement('h2');
//   name.className = toys.name;
//   card.appendChild(name);

//   const image = document.createElement('img')
//   image.src = toys.image;
//   image.className = 'toy-image';
//   card.appendChild(image)
  
//   const likes = document.createElement('p')
//   likes.className = toys.likes
//   card.appendChild(likes)

//   document.querySelector('.like-button').appendChild(card)
  
// }

// function createToy(addNewToy){
//   const toyObject = {
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     method: "POST",
//     body: JSON.stringify(addNewToy)
//   }
//   fetch('http://localhost:4000/toys', toyObject)
//     // .then(resp => resp.json)
//     // .then(renderOneToy)
// }


// function updateLikesCounts(addNewToy){
//   fetch("http://localhost:4000/toys/${toyObj.id}", {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json'
//     },
//     body: JSON.stringify(addNewToy)
//   })
// }

