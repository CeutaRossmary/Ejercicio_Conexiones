const contenedor = document.getElementById("mostrar");
const array = [];

async function consulta_holidays() {
    try {
        let respuesta = await fetch("https://api.boostr.cl/holidays");
        let data = await respuesta.json(); 
        let holidays = data.data; 
        
        console.log(data); 
        
        let pintar = "<h4 class='p-5'>Los Feriados son</h4>";
        pintar += "<table class='table table-hover  w-50 mx-auto'>";
        pintar +=
          "<thead class='table-dark'><tr><th>Fecha</th><th>Título</th><th>Tipo</th><th>Inalienable</th><th>Extra</th></tr></thead>";
        pintar += "<tbody class='align-center fw-medium'>";

        pintar += holidays.map(holiday => {
            array.push(holiday);
            return `
                <tr>
                    <td>${holiday.date}</td>
                    <td>${holiday.title}</td> 
                    <td>${holiday.type}</td> 
                    <td>${holiday.inalienable ? "Sí" : "No"}</td> 
                    <td>${holiday.extra || "N/A"}
                </tr>
            `;
        }).join(''); 

        pintar += "</tbody></table>";  
        contenedor.innerHTML = pintar;  
    } catch (error) {
        console.error("Error:", error);
    }
}



async function consulta_weather() {
    try {
        let respuesta = await fetch("https://api.boostr.cl/weather");
        let data = await respuesta.json(); 
        let weathers = data.data; 
        
        console.log(data); 
        
        let pintar =
          "<h4 class='p-5'>Estado del tiempo pricipales Ciudades de Chile</h4>";
        pintar += "<table class='table table-hover w-50 mx-auto'>";
        pintar +=
          "<thead class='table-dark'><tr><th>Codigo</th><th>Ciudad</th><th>Condición</th><th>Temperatura</th></tr></thead>";
        pintar += "<tbody class='align-center fw-medium'>";

        pintar += weathers.map(weather => {
            array.push(weather);
            return `
                <tr>
                    <td>${weather.code}</td>
                    <td>${weather.city}</td> 
                    <td>${weather.condition}</td> 
                    <td>${weather.temperature}ºC</td> 
            `;
        }).join(''); 

        pintar += "</tbody></table>";  
        contenedor.innerHTML = pintar;  
    } catch (error) {
        console.error("Error:", error);
    }
}



async function consulta_banks() {
  try {
    let respuesta = await fetch("https://api.boostr.cl/banks");
    let data = await respuesta.json();
    let banks = data.data; 

    console.log(data);

    let pintar = "<h4 class=' p-5'>Lista de Bancos</h4>";
   pintar += "<table class='table table-hover w-50 mx-auto d-block'>";
    pintar +=
      "<thead class='table-dark'><tr><th>Codigo</th><th>Nombre</th><th>Swift</th><th>Website</th></tr></thead>";
    pintar += "<tbody class='align-center fw-medium'>";

    pintar += banks
      .map((bank) => {
        return `
                <tr>
                    <td>${bank.sbif}</td>
                    <td>${bank.name}</td> 
                    <td>${bank.swift}</td> 
                    <td><a href="${bank.website}" target="_blank">${bank.website}</a></td>
                </tr>
            `;
      }).join("");

    pintar += "</tbody></table>";  
        contenedor.innerHTML = pintar;  
    } catch (error) {
        console.error("Error:", error);
    }

  }