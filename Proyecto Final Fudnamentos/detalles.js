const nombreInput = document.getElementById("nombre");
const presupuestoInput = document.getElementById("presupuesto");
const cantidadInput = document.getElementById("cantidad");
const direccionInput = document.getElementById("direccion");
const domicilioBtn = document.querySelector("footer button:nth-child(1)");
const tiendaBtn = document.querySelector("footer button:nth-child(2)");
const iniciarCompraBtn = document.querySelector('button[type="submit"]');

const pixelVault = [
  {
    id: 10,
    product: "Nintendo Entertainment System (NES)",
    quantity: 12,
    price: 130000,
    category: "Consolas Retro",
    image: '../images/NES.jpg',
  },
  {
    id: 10,
    product: "Super Nintendo Entertainment System (SNES)",
    quantity: 14,
    price: 175000,
    category: "Consolas Retro",
    image: '../images/SNES.jpeg',
  },
  {
    id: 10,
    product: "Sega Genesis",
    quantity: 9,
    price: 120000,
    category: "Consolas Retro",
    image: '../images/Sega Genesis.jpg',
  },
  {
    id: 20,
    product: "PlayStation 1",
    quantity: 20,
    price: 110000,
    category: "Consolas Antiguas",
    image: '../images/PS1.jpg',
  },
  {
    id: 10,
    product: "Nintendo 64",
    quantity: 11,
    price: 135000,
    category: "Consolas Retro",
    image: '../images/N64.jpg',
  },
  {
    id: 10,
    product: "GameCube",
    quantity: 20,
    price: 189000,
    category: "Consolas Retro",
    image: '../images/GameCube.jpeg',
  },
  {
    id: 20,
    product: "PlayStation 2",
    quantity: 13,
    price: 135000,
    category: "Consolas Antiguas",
    image: '../images/PS2.jpg',
  },
  {
    id: 20,
    product: "Xbox 360",
    quantity: 21,
    price: 122000,
    category: "Consolas Antiguas",
    image: '../images/Xbox 360.jpg',
  },
  {
    id: 20,
    product: "Nintendo Wii",
    quantity: 14,
    price: 175000,
    category: "Consolas Antiguas",
    image: '../images/Wii.jpg',
  },
  {
    id: 20,
    product: "PlayStation 3",
    quantity: 11,
    price: 278000,
    category: "Consolas Antiguas",
    image: '../images/PS3.jpg',
  },
  {
    id: 20,
    product: "Nintendo Wii U",
    quantity: 22,
    price: 169000,
    category: "Consolas Antiguas",
    image: '../images/Wii U.jpg',
  },
  {
    id: 30,
    product: "PlayStation 4",
    quantity: 24,
    price: 379000,
    category: "Consolas Modernas",
    image: '../images/PS4.jpg',
  },
  {
    id: 30,
    product: "Xbox One",
    quantity: 34,
    price: 389000,
    category: "Consolas Modernas",
    image: '../images/Xbox One.jpg',
  },
  {
    id: 30,
    product: "Nintendo Switch (edicion OLED)",
    quantity: 24,
    price: 300000,
    category: "Consolas Modernas",
    image: '../images/Switch.jpeg',
  },
  {
    id: 30,
    product: "PlayStation 5",
    quantity: 30,
    price: 550000,
    category: "Consolas Modernas",
    image: '../images/PS5.jpg',
  },
  {
    id: 30,
    product: "Xbox Series X",
    quantity: 29,
    price: 478000,
    category: "Consolas Modernas",
    image: '../images/Xbox series X.jpg',
  },
  {
    id: 10,
    product: "Sega Dreamcast",
    quantity: 12,
    price: 123000,
    category: "Consolas Retro",
    image: '../images/Sega Dreamcast.jpg',
  },
  {
    id: 10,
    product: "Game Boy Advance",
    quantity: 8,
    price: 230000,
    category: "Consolas Retro",
    image: '../images/Game boy Advance.jpg',
  },
  {
    id: 20,
    product: "PlayStation Portable (PSP)",
    quantity: 14,
    price: 199000,
    category: "Consolas Antiguas",
    image: '../images/PSP.jpg',
  },
  {
    id: 20,
    product: "Nintendo 3DS",
    quantity: 5,
    price: 250000,
    category: "Consolas Antiguas",
    image: '../images/Nintendo 3DS.jpg',
  },
  {
    id: 11,
    product: "Super Smash Bros (N64)",
    quantity: 15,
    price: 54000,
    category: "Juegos Retro",
    image: '../images/Super Smash N64.jpg',
  },
  {
    id: 11,
    product: "The Legend of Zelda: Ocarina of Time (Nintendo 64)",
    quantity: 3,
    price: 60000,
    category: "Juegos Retro",
    image: '../images/Zelda Ocarina N64.jpg',
  },
  {
    id: 11,
    product: "Street Fighter II (SNES)",
    quantity: 12,
    price: 70000,
    category: "Juegos Retro",
    image: '../images/Street fighter II SNES.jpg',
  },
  {
    id: 11,
    product: "Sonic the Hedgehog (Sega Genesis)",
    quantity: 9,
    price: 42000,
    category: "Juegos Retro",
    image: '../images/Sonic I Sega.jpg',
  },
  {
    id: 22,
    product: "Metal Gear Solid (PlayStation)",
    quantity: 6,
    price: 55000,
    category: "Juegos Antiguos",
    image: '../images/Metal gear Solid PS1.jpg',
  },
  {
    id: 22,
    product: "Final Fantasy VII (PlayStation)",
    quantity: 7,
    price: 60000,
    category: "Juegos Antiguos",
    image: '../images/Final Fantasy VII PS1.jpg',
  },
  {
    id: 11,
    product: "Resident Evil 4 (GameCube)",
    quantity: 6,
    price: 70000,
    category: "Juegos Retro",
    image: '../images/Resident Evil 4 Gamecube.jpeg',
  },
  {
    id: 22,
    product: "Halo: Combat Evolved (Xbox) ",
    quantity: 16,
    price: 68000,
    category: "Juegos Antiguos",
    image: '../images/Halo Combat evolved PS2.jpg',
  },
  {
    id: 22,
    product: "God of War (PS2)",
    quantity: 19,
    price: 80000,
    category: "Juegos Antiguos",
    image: '../images/Gow II PS2.jpg',
  },
  {
    id: 22,
    product: "Grand Theft Auto: San Andreas (PS2)",
    quantity: 22,
    price: 55000,
    category: "Juegos Antiguos",
    image: '../images/GTA San andreas PS2.jpg',
  },
  {
    id: 22,
    product: "The Elder Scrolls V: Skyrim (PS3)",
    quantity: 11,
    price: 100000,
    category: "Juegos Antiguos",
    image: '../images/Skyrim PS3.jpg',
  },
  {
    id: 33,
    product: "Mario Kart 8 Deluxe (Nintendo Switch)",
    quantity: 22,
    price: 110000,
    category: "Juegos Modernos",
    image: '../images/Mario Kart 8 Switch.jpg',
  },
  {
    id: 33,
    product: "The Legend of Zelda: Breath of the Wild (Switch)",
    quantity: 19,
    price: 99000,
    category: "Juegos Modernos",
    image: '../images/Zelda breath wild Switch.jpg',
  },
  {
    id: 33,
    product: "Animal Crossing: New Horizons (Switch)",
    quantity: 32,
    price: 78000,
    category: "Juegos Modernos",
    image: '../images/Animal Crossing Switch.jpg',
  },
  {
    id: 33,
    product: "Red Dead Redemption 2 (PS4, Xbox One)",
    quantity: 34,
    price: 160000,
    category: "Juegos Modernos",
    image: '../images/Red dead Redemption II PS4.jpg',
  },
  {
    id: 33,
    product: "Call of Duty: Modern Warfare II (PS4, Xbox One)",
    quantity: 22,
    price: 99000,
    category: "Juegos Modernos",
    image: '../images/Call of Duty modern warfare PS4.jpg',
  },
  {
    id: 33,
    product: "Cyberpunk 2077 (PS5, Xbox Series X)",
    quantity: 35,
    price: 135000,
    category: "Juegos Modernos",
    image: '../images/Cyber punk 2077 PS4.jpg',
  },
  {
    id: 33,
    product: "Elden Ring (PS5, Xbox Series X) ",
    quantity: 18,
    price: 122000,
    category: "Juegos Modernos",
    image: '../images/Elden Ring PS5.jpg',
  },
  {
    id: 33,
    product: "FIFA 23 (PS5, Xbox Series X)",
    quantity: 20,
    price: 70000,
    category: "Juegos Modernos",
    image: '../images/FIFA 23 PS4.jpg',
  },
  {
    id: 33,
    product: "Super Smash Bros. Ultimate (Switch)",
    quantity: 17,
    price: 100000,
    category: "Juegos Modernos",
    image: '../images/Super Smash bros Ultimate Switch.jpg',
  },
];


localStorage.setItem("productosPixelVault", JSON.stringify(pixelVault));

let tipoEntrega = "";

domicilioBtn.addEventListener("click", () => {
  tipoEntrega = "Domicilio";
  domicilioBtn.style.background = "#a67558";
  tiendaBtn.style.background = "#d5a787";
});

tiendaBtn.addEventListener("click", () => {
  tipoEntrega = "Tienda Física";
  tiendaBtn.style.background = "#a67558";
  domicilioBtn.style.background = "#d5a787";
});


iniciarCompraBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!nombreInput.value || !presupuestoInput.value || !cantidadInput.value || !direccionInput.value) {
    alert("Señor Usuario por favor llene todos los campos antes de continuar");
    return;
  }

  if (nombreInput.value.length > 20) {
    alert("El nombre no debe exceder los 20 caracteres.");
    return;
  }

  if (presupuestoInput.value <= 0) {
    alert("El presupuesto debe ser un número positivo.");
    return;
  }

  if (cantidadInput.value <= 0 || cantidadInput.value > 20) {
    alert("La cantidad de productos debe estar entre 1 y 20.");
    return;
  }

  if (!tipoEntrega) {
    alert("Por favor, seleccione un tipo de entrega.");
    return;
  }

  const requerimientosCompra = {
    nombre: nombreInput.value,
    presupuesto: Number(presupuestoInput.value),
    cantidadProductos: Number(cantidadInput.value),
    direccion: direccionInput.value,
    tipoEntrega: tipoEntrega,
  };

  localStorage.setItem("requerimientosCompra", JSON.stringify(requerimientosCompra));

  window.location.href = "./listaP/listap.html";
});