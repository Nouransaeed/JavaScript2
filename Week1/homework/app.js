'use strict';

{
  const games = [
    // Replace with your own book titles
    'harry_potter_chamber_secrets',
    'call_of_the_wild',
    'the_turtle',
    'snowball_and_the_bunny_adventures',
    'chicken_little',
  ];

  // Replace with your own code
  console.log(games);
 // document.body.onload = addElement;
 // function displayGameTitles = () => { 
   
    let unorderedList = document.createElement("ul"); 
    for (const game of games) { 
      const listItem = document.createElement("li"); 
      listItem.textContent = game;
      unorderedList.appendChild(listItem); 
  }
    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("gameDiv"); 
    document.body.insertBefore(unorderedList, currentDiv); 
}
