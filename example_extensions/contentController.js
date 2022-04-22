//Parte de fronted
console.log("hola");
const elementTitlePoduct = document.getElementById('productTitle');
const productName = elementTitlePoduct.innerHTML;
console.log('elementTitlePoduct =>', productName);

chrome.runtime.sendMessage({ productName }, (response) => {
    console.log(response)
})
