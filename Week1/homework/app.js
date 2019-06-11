'use strict';

{
  const bookTitles = [
    // Replace with your own book titles
    'kushiels_avatar',
    'dragons_of_autumn_twilight',
    'basho_the_complete_haiku',
    'the_wit_and_wisdom_of_mark_twain',
    'the_waste_land_and_other_poems',
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
      cover: 'https://images.gr-assets.com/books/1347962344l/4285468.jpg',
    },
    kushiels_avatar: {
      title: "Kushiel's Avatar",
      language: 'English',
      author: 'Jacqueline Carey',
      cover: 'https://images.gr-assets.com/books/1233366080l/40223.jpg',
    },
    kushiels_scion: {
      title: "Kushiel's Scion",
      language: 'English',
      author: 'Jacqueline Carey',
      cover: 'https://images.gr-assets.com/books/1344265086l/153007.jpg',
    },
    neverwhere: {
      title: 'Neverwhere',
      language: 'English',
      author: 'Neil Gaiman',
      cover: 'https://images.gr-assets.com/books/1523573978l/39821861.jpg',
    },
    the_wit_and_wisdom_of_mark_twain: {
      title: 'The Wit And Wisdom Of Mark Twain',
      language: 'English',
      author: 'Mark Twain',
      cover: 'https://images.gr-assets.com/books/1388209857l/2965.jpg',
    },
    the_waste_land_and_other_poems: {
      title: 'The Waste Land and Other Poems',
      language: 'English',
      author: 'T.S. Eliot',
      cover: 'https://images.gr-assets.com/books/1372992691l/400412.jpg',
    },
    dragons_of_autumn_twilight: {
      title: 'Dragons of Autumn Twilight',
      language: 'English',
      author: 'Margaret Weis and Tracy Hickman',
      cover: 'https://images.gr-assets.com/books/1220752967l/1082252.jpg',
    },
    basho_the_complete_haiku: {
      title: 'Basho: The Complete Haiku',
      language: 'English, Japanese',
      author: 'Matsuo Basho',
      cover: 'https://images.gr-assets.com/books/1371446834l/2183600.jpg',
    },
    the_coldfire_trilogy: {
      title: 'The Coldfire Trilogy',
      language: 'English',
      author: 'C.S. Friedman',
      cover: 'https://images.gr-assets.com/books/1437435124l/36159.jpg',
    },
    the_sandman: {
      title: 'The Sandman',
      language: 'English',
      author: 'Neil Gaiman',
      cover: 'https://images.gr-assets.com/books/1352657721l/16142737.jpg',
    },
  };

  // Replace with your own code
  // console.log(bookTitles);

  function displayList(titles) {
    const list = document.createElement('ul'); // creates list
    list.setAttribute('id', 'books'); // adding id of books
    document.body.appendChild(list);
    // list.innerHTML = 'My favorite books, with authors and languages.';

    for (let i = 0; i < titles.length; i++) {
      const titleList = document.createElement('li'); // creates each title item (li)
      titleList.setAttribute('id', titles[i]); // sets id of each item of the list
      list.appendChild(titleList); // adds item (li) to list(ul)
      const titleKey = titles[i]; // id for object call
      titleList.innerHTML += favoriteBooks[titleKey].title; // adds title of each to list
      document.write('<br>');
      // const imageLink = '' + favoriteBooks[titleKey].cover + '';
      // titleList.appendChild(imageLink);
      const myNewImage = document.createElement('img');
      myNewImage.src = '' + favoriteBooks[titleKey].cover + '';
      myNewImage.id = '' + titleKey + 'cover';

      document.body.appendChild(myNewImage);
      /* document.getElementById(titleKey).style.backgroundRepeat = 'no-repeat';
      document.getElementById(titleKey).style.backgroundImage = 'width: 20%';
      document.getElementById(titleKey).style.backgroundImage = 'height: auto';
      document.getElementById(titleKey).style.padding = '380px 250px 250px 50px'; */
      // document.getElementById(titleKey).style.listStyleImage = imageLink; // attempts to add covers as list bullets
      /* const bookFacts = document.createElement('ul'); // creating a new list for each title to hold author and language
      bookFacts.setAttribute('id', 'aandllist');
      document.getElementById(titleKey).appendChild(bookFacts); // adding bookFacts list as child of each list item (li)
      document.getElementById('aandllist').style.listStyle = 'none';
      const authAndLang = document.createElement('li'); // creating variable for other info
      bookFacts.appendChild(authAndLang); // adds authAndLang item to bookFacts list
      authAndLang.innerHTML +=
        'Author: ' +
        favoriteBooks[titleKey].author +
        '; ' +
        'Language: ' +
        favoriteBooks[titleKey].language; */
      titleList.innerHTML +=
        '<br><br>The author of ' +
        favoriteBooks[titleKey].title +
        ' is ' +
        favoriteBooks[titleKey].author +
        ', and the book is in ' +
        favoriteBooks[titleKey].language +
        '.';
    }
  }

  displayList(bookTitles);
}
