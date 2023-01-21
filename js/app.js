const d = document;
const btn = d.querySelectorAll(".guitar-btn");

window.onload = initApp;

//Event
function initApp() {
  //Agrega el id de la imagen y el tile de cada guitarra
  btn.forEach((btn) => {
    btn.addEventListener("click", guitarElements);
  });

  //Agrega el contenido al producto.html
  agregarElements();
}

//Functions
function guitarElements(e) {
  const guitar = e.target.parentElement;

  const guitarObj = {
    id: e.target.dataset.id,
    title: guitar.querySelector("H3").textContent.trim(),
  };
  //Agregar el objeto al localStorage
  window.localStorage.setItem("guitar", JSON.stringify(guitarObj));

  //redirije a producto.html
  window.location.href = "./producto.html";
}

function agregarElements() {
  const guitarObj = JSON.parse(window.localStorage.getItem("guitar"));
  const { id, title } = guitarObj;
  const guitarImg = d.querySelector("#imagen-producto");

  //Agregando la imagen
  if (guitarImg) {
    const picture = document.createElement("PICTURE");
    guitarImg.appendChild(picture);

    const avif = document.createElement("SOURCE");
    avif.srcset = `./build/img/guitarra_${id}.avif`;
    avif.type = "image/avif";
    picture.appendChild(avif);

    const webp = document.createElement("SOURCE");
    webp.srcset = `./build/img/guitarra_${id}.webp`;
    webp.type = "image/webp";
    picture.appendChild(webp);

    const img = document.createElement("IMG");
    img.loading = "lazy";
    img.src = `./build/img/guitarra_${id}.jpg`;
    img.alt = "Imagen del curso";
    img.className = "img-fluid";
    picture.appendChild(img);

    //Agregar el titulo
    const guitarTitle = d.querySelector(".producto-title");
    guitarTitle.textContent = title;
  }
}
