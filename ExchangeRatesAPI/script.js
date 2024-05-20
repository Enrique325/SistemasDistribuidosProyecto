async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    const apiKey = '0f07820e656f674f9a8a3a26'; // Replace with your ExchangeRate-API API key
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const rate = data.conversion_rates[toCurrency];
        const convertedAmount = amount * rate;
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        console.error('Error fetching exchange rate:', error);
        document.getElementById('result').textContent = 'Error fetching exchange rate. Please try again later.';
    }
}

