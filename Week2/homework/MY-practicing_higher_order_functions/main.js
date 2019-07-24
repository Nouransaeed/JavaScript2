const shoppingCardItems = [
    {name:"yogurt", category: "Diary", start: 07, end: 09},
    {name:"white bun", category: "Bread", start: 09, end: 10},
    {name:"beef", category: "Meat", start: 05, end: 09},
    {name:"pizza", category: "Ready to Eat", start: 02, end: 08},
    {name:"bell pepper", category: "Vegetables", start: 01, end: 16},
    {name:"apple", category: "Fruit", start: 02, end: 14},
    {name:"beer", category: "Alcohol", start: 01, end: 31},
];
const ages = [34, 55, 6,  67, 28, 12, 15, 18, 30, 17, 17, 36, 51];

    //for loop
// for(let i=0; i< shoppingCardItems.length; i++) {
//     console.log(shoppingCardItems[i]);
// }

    //forEach
shoppingCardItems.forEach(function(shoppingCardItems){
    console.log(shoppingCardItems);
    console.log(shoppingCardItems.name);
});


    //filter
    //get 21 and older
// let canDrink = [];
// for (let i= 0; i < ages.length; i++){
//     if(ages[i] >=21) {
//         canDrink.push(ages[i]);
//     }
// }
        //or 
// const canDrink = ages.filter(function(age){
//     if(age >=21){
//         return true;
//     }
// })
        //or 
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);



//map
//sort
//reduce
