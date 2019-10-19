
let iconMeteo = document.getElementById("img")
const results =  document.getElementById('result')


const myCity = () => {
  let city = document.getElementById('city').value;

    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=92b96a527957f6972cb0f6fa630c098f`
    fetch(api)
      .then(response => response.json())
        .then(data => {
            console.log("Contenu du json", data)
            const temp = Math.round(data.main.temp-273.15);
            iconMeteo.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

          // On construit le block Html
          const meteoHtml = `
          <p><strong>Le temps est : ${data.weather[0].main}</strong></p>
          <p><strong>La température est: ${temp} °C</strong></p>
          `;
      
          results.innerHTML = meteoHtml;
  });
 }
