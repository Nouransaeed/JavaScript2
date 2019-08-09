
'use strict';
{

	const title = [

		 'harry_potter_chamber_secrets',

    'alchemist',  //Paulo coelho
    'paula',
    'orlando',
    'divine-comedy',
    'the-odyssey',
	];

	let objBooks =  {

        "harry_potter_chamber_secrets" :
        { 
       
        title :"harry_potter_chamber_secrets",
      
        language:"english",
    
        author:"Joanne K. Rowling",
    
      },

      "alchemist":
      {
        title:"alchemist",
    
        language:"english",
    
        author:"paulo-coelho",
    
      },
    
    "paula":{
    
        title:"paula",
    
        language:"english",
    
        author:"isabel allende",
    
      },
    "orlando":
      {
        title:"orlando",
    
        language:"english",
    
        author:"virgina wolf",
    
      },
    "divine-comedy" :
       {
    
        title:"divine-comedy",
    
        language:"English",
    
        author:"dante",
    
      },
    
      "the-odyssey":
      {
    
        title:"the-odyssey",
    
        language: "english",
    
        author:"homeros",
    
      }
    
    

  }



	function listBooks() {

		let i = 0;

		let ul = document.createElement('ul')

		for (i = 0; i < title.length; i++) {

			let li = document.createElement('li');

			li.textContent = title[i];

			ul.appendChild(li);
    }
  }

		document.body.appendChild(ul);
	  document.body.onload = listBooks;
    const objBooksArr = [];
    for (const newListBooks in objBooks) {
    console.log(newListBooks);
    objBooksArr.push(objBooks[newListBooks])

}



const bookPic = {

    'harry_potter_chamber_secrets':potter.jpg ,
    'alchemist':alchemist,  
    'paula' :paula.jpg,
    'orlando':woolf.jpg,
    'divine-comedy':divine.jpg,
    'the-odyssey' :odyssy.jpg,
};


