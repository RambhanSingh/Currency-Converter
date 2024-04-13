function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Conversion rates (not real-time, for demonstration purposes)
    var conversionRates = {
        INR: { USD: 0.014, EUR: 0.012 },
        USD: { INR: 83.35, EUR: 0.86 },
        EUR: { INR: 85.62, USD: 1.16 }
    };

    var convertedAmount;
    if (fromCurrency === toCurrency) {
        convertedAmount = amount;
    } else {
        convertedAmount = amount * conversionRates[fromCurrency][toCurrency];
    }

    document.getElementById('result').value = convertedAmount.toFixed(2);
}
