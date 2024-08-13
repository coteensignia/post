// Donde se mostrarán los posts
const postData = document.getElementById("post-data");

// Función asincrónica
async function getPosts() {
  // Llama a la función para traer los datos desde la API
  let contenido = await fetchData();

  // Una variable se insertará en el DOM
  let html = "";

  // Lista desordenada
  html += `<ul>`;

  // Itera sobre cada post
  contenido.forEach(e => {
    // Por cada post, añade un elemento de lista con el título el cuerpo
    html += `
    <li>
      <strong>${e.title}</strong>
      <div>${e.body}</div>
      <br>
    </li>
    `;
  });

  // Cierra la ul
  html += "</ul>";

  // Inserta el HTML
  postData.innerHTML = html;
}

// Función asincrónica realiza la solicitud
async function fetchData() {
  try {
    // Para obtener los posts
    const datos = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Convierte en JSON
    const datosLimpios = await datos.json();

    // Devuelve el array de posts
    return datosLimpios;
  } catch (error) {
    // Error durante la solicitud
    console.log("Error: " + error);

    // Indica que la solicitud falló
    return null;
  }
}
