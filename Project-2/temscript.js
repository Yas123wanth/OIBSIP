function convertTemperature() 
{
    var temperatureInput = +document.getElementById('temperatureInput').value;
    var unitSelect = document.getElementById('unitSelect').value;
    var resultDisplay = document.getElementById('result');
    if (!Number.isFinite(temperatureInput)) 
    {
      resultDisplay.innerText = 'Please enter a valid number';
      return;
    }

    var convertedTemperature;
    if (unitSelect === 'celsius') 
    {
      convertedTemperature = (temperatureInput - 32) * 5/9; // Fahrenheit to Celsius
      resultDisplay.innerText = convertedTemperature.toFixed(2) + ' °C';
    } 
    else if (unitSelect === 'fahrenheit') 
    {
      convertedTemperature = (temperatureInput * 9/5) + 32; // Celsius to Fahrenheit
      resultDisplay.innerText = convertedTemperature.toFixed(2) + ' °F';
    } 
    else if (unitSelect === 'kelvin')
     {
      convertedTemperature = temperatureInput + 273.15; // Celsius to Kelvin
      resultDisplay.innerText = convertedTemperature.toFixed(2) + ' K';
    }
  }
  
  