(async () => {
    const container = document.querySelector('.intro__text-container');
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/EUR");
    const data = await response.json();
    
    container.innerHTML = `1 EUR = ${data.rates.UAH} UAH`;
})();
