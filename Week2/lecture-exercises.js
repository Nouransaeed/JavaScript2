async function getRandomAdvice() {
  const adviceReq = fetch('https://api.adviceslip.com/advice'); // send request
  const adviceResponse = await adviceReq; // wait until something comes back
  // const jsonString = await adviceResponse.text();
  // return jsonString
  // const adviceData = JSON.parse(jsonString)
  // return jsonString
  const adviceData = await adviceResponse.json(); // parses JSON string into native JavaScript object
  return adviceData.slip.advice;
}

let allAdvice = [];
const adviceEl = document.getElementById('advice');

function updateDOM() {  
  adviceEl.innerHTML = '';

allAdvice.forEach((advice, index) => {
  const adviceItem = document.createElement('li');
  adviceEl.appendChild(adviceItem);
  adviceItem.innerText = advice;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  adviceItem.appendChild(removeButton);

  removeButton.addEventListener('click', () => deleteAdvice(index));
})
}

function deleteAdvice(index) {
  allAdvice.splice(index, 1);
  updateDOM();
}

function upcaseAllAdvice() {
  allAdvice = allAdvice.map(advice => advice.toUpperCase());
  updateDOM();
}

async function setRandomAdvice() {
 allAdvice.push(await getRandomAdvice());
 updateDOM();
}

setRandomAdvice();

// for (let i=0; i<10; i++) {
//   setRandomAdvice();
// }

document.getElementById('add-advice').addEventListener('click', setRandomAdvice);
document.getElementById('upcase-everything').addEventListener('click', upcaseAllAdvice);