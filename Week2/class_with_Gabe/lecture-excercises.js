document.querySelector('h1').innerText = 'Monkey';

async function getAdvice() {
    const adviceResponse = await fetch('https://api.adviceslip.com/advice') //get bytes
    const payloadText = await adviceResponse.text(); //convert bytes to text
    const payloadObj = JSON.parse(payloadText)
    return payloadObj.slip.advice;
}


async function addAdviceToPage() {
    document.querySelector('h1').innerHTML = await getAdvice();
}

addAdviceToPage();