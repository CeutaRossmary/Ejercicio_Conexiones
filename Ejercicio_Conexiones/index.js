const contenedor = document.getElementById("mostrar");
const array = [];

async function consulta() {
    try {
        let respuesta = await fetch("https://api.boostr.cl/holidays");
        let data = await respuesta.json(); 
        let holidays = data.data; 
        
        console.log(data); 
        
        let pintar = "<h4>Los Feriados son</h4>";
        pintar += "<table class='table table-hover w-75'>";
        pintar += "<thead><tr><th>Fecha</th><th>Título</th><th>Tipo</th><th>Inalienable</th><th>Extra</th></tr></thead>";
        pintar += "<tbody class='align-baseline fw-medium'>";

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



  async function agregar() {
    try {
      let newUser = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Nuevo registro",
          body: "Este es el nuevo registro",
          userId: 1,
        }),
      });
      let data = await newUser.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function actualizar() {
      try{
    let actualizar= await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        title: "Titulo actualizado",
        body: "Este es el contenido actualizado",
        userId: 1,
      }),
    })
    let dataActualizada = await actualizar.json();
    console.log(dataActualizada);
  }catch(error){
      console.error("Error:", error);
    }
  }
  
  async function eliminar() {
    try {
      let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      });
   console.log(respuesta);
      if (respuesta.ok) {
        console.log("Registro eliminado", respuesta);
      } else {
        console.error("Error al eliminar el registro");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function usuario(id) {
    try {
      let respuesta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!respuesta.ok) {
        throw new Error(`Error: ${respuesta.status}`);
      }
      let usuario = await respuesta.json();
      console.log(usuario);
    } catch (error) {
      console.error("Error al ejecutar la consulta", error);
    }
  }