const inputElement = document.querySelector('.input-area')
const searchBtn = document.querySelector('.search-button')
const country = document.querySelector('.country')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const lastUpdate = document.querySelector('.last-update')

const apiKey = '1278d4612d7a4133985232847232106'

inputElement.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getWeather()
  }
})

searchBtn.addEventListener('click', () => {
  getWeather()
})

function getWeather() {
  if (inputElement.value == '') {
    alert('Please Enter a City Name')
  }
  else {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputElement.value}`)
          .then(res => res.json()).then(result => {
            if (result.error) {
              alert('Please Enter a Valid City Name')
              return
            }
            else {
              country.innerHTML = result.location.country
              city.innerHTML = result.location.name
              temp.innerHTML = result.current.temp_c + '°C'
              temp.innerHTML += `<img src="${result.current.condition.icon}" alt="weather icon">`
              lastUpdate.innerHTML = `Last Update: ${result.current.last_updated}`
              inputElement.value = ''
            }
          })
  }
}

function handleKeyPress(e) {
  if (e.key === 'Enter') {
    getWeather()
  }
}