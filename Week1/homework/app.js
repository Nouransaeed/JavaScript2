'use strict';

{
  const favoriteBooks = [
    //1.1 Replace with your own book titles
    'harry_potter_chamber_secrets',
    'call_of_the_wild',
    'the_turtle',
    'snowball_and_the_bunny_adventures',
    'chicken_little',
    'hey_friend',
    'it_is_chilly_out_there',
    'stone_and_pain',
    'maybe_tomorrow',
    'alise_in_wonderland',
  ];

  // 1.2 Replace with your own code
   
  //console.log(favoriteBooks);

  //1.3 Remove the temporary console.log from step 1.1. Make a function (or functions) that generate a ul with li elements for each book ID 
  // in the array using a for loop. Make sure that the function names you choose are an accurate reflection of what they do. As a reminder, 
  //here are the recommended Naming Conventions.
  
// // // function generateList(){
// // //   let booksList = document.createElement('ul');
// // //   booksList.setAttribute('id', 'li');
// // //   document.body.appendChild(booksList);

// // //   let index;
// // //   for (index in favoriteBooks) {
// // //     let booksListItem = document.createElement('li');
// // //     booksList.appendChild(booksListItem);
// // //     booksListItem.textContent = favoriteBooks[index];
// // //   }
// // // }
// // // generateList();

    // let unorderedList = document.createElement("ul"); 
    // for (const gameIndex in favoriteBooks) { 
    //   const listItem = document.createElement("li"); 
    //   listItem.textContent = favoriteBooks[gameIndex];
    //   unorderedList.appendChild(listItem); 
    // }

    // // add the newly created element and its content into the DOM 
    // const currentDiv = document.getElementById("gameDiv"); 
    // document.body.insertBefore(unorderedList, currentDiv); 



// // 1.4 Make an object (not an array!) containing information for each book. Each property of this object should be another (i.e., nested) 
// object with the book ID you thought up in step 1.1 as a key, and at least the following properties: title, language and author.
let bookProperties = {
  harry_potter_chamber_secrets:{
    title:"Harry Potter: Chamber of Secrets",
    language:"English",
    author:"Joanne K. Rowling",
  },
  call_of_the_wild:{
    title:"Call of the Wild",
    language:"English",
    author:"Jack London",
  },
  the_turtle:{
    title:"The Turtle",
    language:"Anna -ish",
    author:"Imaginery",
  },
  snowball_and_the_bunny_adventures:{
    title:"Snowball and the Bunny Adventures",
    language:"Anna -ish",
    author:"Imaginery van Children",
  },
  chicken_little:{
    title:"Chicken Little - The Sky is Falling",
    language:"English",
    author:"Folk Tale",
  },
  hey_friend:{
    title:"Hey Friend",
    language:"Anna -ish",
    author:"Imaginery",
  },
  it_is_chilly_out_there:{
    title:"It is Chilly out There",
    language:"Anna -ish",
    author:"Imaginery",
  },
  stone_and_pain:{
    title:"Stone and Pain - The Life of Michelangelo Buonarotti",
    language:"Chech",
    author:"Karrel Schulz",
  },
  maybe_tomorrow:{
    title:"Maybe Tomorrow",
    language:"Anna -ish",
    author:"Imaginery Delayer",
  },
  alise_in_wonderland:{
    title:"Alise in Wonderland",
    language:"English",
    author:"Lewis Carrol",
  }
}


// // 1.5 Now change the function from step 1.3 that you used to display the book ID's in a list to take the actual information about the book 
// from the object and display that. Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title.
function generateList(){
  let booksList = document.createElement('ul');
  booksList.setAttribute('id', 'li');
  document.body.appendChild(booksList);

  let index;
  
  for (index in favoriteBooks) {
    let booksListItem = document.createElement('li');
    booksList.appendChild(booksListItem);

    let BooksID = favoriteBooks[index];
    booksListItem.textContent = favoriteBooks[index];
  }
}
generateList();

// // 1.6 Beautify your html page with css (use the style.css file for that), add sources and alts to each of the images.

// // 1.7 Find and download book covers for each book and construct a new object which has as keys the book IDs again, and as value the path to 
// the image source (e.g. { harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }).

// // 1.8 Loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). Then write a function which places an 
// image at the corresponding li element. Remember that objects are not ordered, so you cannot guarantee that the first key is the first li element.
 // (Hint: you could give each li item an id tag by modifying the function you made before.)
}
