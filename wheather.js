const prompt = require('prompt-sync')();
let weather = prompt('what is condition of atmosphere ')
if (weather == 'rain' , 'cloudy' , 'fullwind') {
    console.log('grab ☂️')
} else {
    console.log('wear 😎')
}