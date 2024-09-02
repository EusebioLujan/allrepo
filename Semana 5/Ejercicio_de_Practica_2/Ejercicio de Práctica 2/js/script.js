const DATA = [
  { name: "Laura", lastname: "Hightower" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Joaquina", lastname: "Hand" },
  { name: "Maria", lastname: "White" },
];

// Escribe el código necesario aquí
const usuario = document.getElementById("container");
let mapeoUsuario = "";

 DATA.map((data) => {
mapeoUsuario += `
<p>${data.name} ${data.lastname}</p>
`
 });

usuario.innerHTML = mapeoUsuario;
//
