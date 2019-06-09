'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'kushiels_avatar',
    'dragons_of_autumn_twilight',
    'a_song_of_ice_and_fire',
    'it',
    'and_then_there_were_none',
    'popco',
    'kushiels_scion',
    'neverwhere',
    'the_sandman',
    'the_coldfire_trilogy',
  ];

  const favoriteBooks = {
    popco: {
      title: 'Popco',
      language: 'English',
      author: 'Scarlett Thomas',
    },
    kushiels_avatar: {
      title: "Kushiel's Avatar",
      language: 'English',
      author: 'Jacqueline Carey',
    },
    kushiels_scion: {
      title: "Kushiel's Scion",
      language: 'English',
      author: 'Jacqueline Carey',
    },
    neverwhere: {
      title: 'Neverwhere',
      language: 'English',
      author: 'Neil Gaiman',
    },
    it: {
      title: 'It',
      language: 'English',
      author: 'Stephen King',
    },
    and_then_there_were_none: {
      title: 'And Then There Were None',
      language: 'English',
      author: 'Agatha Christie',
    },
    dragons_of_autumn_twilight: {
      title: 'Dragons of Autumn Twilight',
      language: 'English',
      author: 'Margaret Weis and Tracy Hickman',
    },
    a_song_of_ice_and_fire: {
      title: 'A Song of Ice and Fire',
      language: 'English',
      author: 'George R.R. Martin',
    },
    the_coldfire_trilogy: {
      title: 'The Coldfire Trilogy',
      language: 'English',
      author: 'C.S. Friedman',
    },
    the_sandman: {
      title: 'The Sandman',
      language: 'English',
      author: 'Neil Gaiman',
    },
  };

  // Replace with your own code
  // console.log(bookTitles);

  function displayList(titles) {
    const list = document.createElement('ul'); // creates list
    list.setAttribute('id', 'books'); // adding id of books

    document.body.appendChild(list);

    for (let i = 0; i < titles.length; i++) {
      const titleList = document.createElement('li'); // creates each item
      titleList.setAttribute('id', titles[i]);
      console.log(titleList.id); // confirming that adding id worked (it did!)
      list.appendChild(titleList); // adds item to list(ul)
      const titleKey = titles[i]; // trying to get id for object call
      titleList.innerHTML += favoriteBooks[titleKey].title; // adds title of each to list
      const bookFacts = document.createElement('ul'); // creating a new list for each title
      bookFacts.setAttribute('id', favoriteBooks[titleKey].title); // attempting to add id for each list (this may not work)
      document.getElementById(titleKey).appendChild(bookFacts); // adding bookFacts list as child of each list item (li)
      const authAndLang = document.createElement('li'); // creating variable for other info
      bookFacts.appendChild(authAndLang); // adds authAndLang item to bookFacts list
      bookFacts.innerHTML +=
        'Author: ' +
        favoriteBooks[titleKey].author +
        ' Language: ' +
        favoriteBooks[titleKey].language;

      // or title.textContent = i;
    }
  }

  displayList(bookTitles);
}
