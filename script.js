const myHeaders = new Headers();
myHeaders.append('x-access-token', 'goldapi-xhtiukhjcs5ty-io');
myHeaders.append('Content-Type', 'application/json');

const requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
};

const OUNCE_GRAM = 28.3495;
const INR_NPR = 1.6;
const GRAM_TOLA = 10;


const price = fetch('https://www.goldapi.io/api/XAU/INR', requestOptions)
	.then((response) => response.text())
	.then((result) => {
    const value = calculateNPRRate(result);
    document.getElementById('price').innerText = value + ' Rs/Tola';
  })
	.catch((error) => console.log('error', error));

const calculateNPRRate = (response) => {
  const parsed = JSON.parse(response)
  const value = (parsed.price / OUNCE_GRAM) * INR_NPR * GRAM_TOLA;
  return value.toFixed(2);
};
