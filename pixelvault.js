const pixelVault = [
    {
      id: 10,
      product: "Nintendo Entertainment System (NES)",
      quantity: 12,
      price: 130000,
      category: "Retro",
      image: "URL aqui",
    },
    {
      id: 10,
      product: "Super Nintendo Entertainment System (SNES)",
      quantity: 14,
      price: 175000,
      category: "Retro",
      image: "URL aqui",
    },
    {
      id: 10,
      product: "Sega Genesis",
      quantity: 9,
      price: 120000,
      category: "Retro",
      image: "",
    },
    {
      id: 20,
      product: "PlayStation 1",
      quantity: 20,
      price: 110000,
      category: "Antigua",
      image: "",
    },
    {
      id: 10,
      product: "Nintendo 64",
      quantity: 11,
      price: 135000,
      category: "Retro",
      image: "",
    },
    {
      id: 10,
      product: "GameCube",
      quantity: 20,
      price: 189000,
      category: "Retro",
      image: "",
    },
    {
      id: 20,
      product: "PlayStation 2",
      quantity: 13,
      price: 135000,
      category: "Antigua",
      image: "Male",
    },
    {
      id: 20,
      product: "Xbox 360",
      quantity: 21,
      price: 122000,
      category: "Antigua",
      image: "",
    },
    {
      id: 20,
      product: "Nintendo Wii",
      quantity: 14,
      price: 175000,
      category: "Antigua",
      image: "",
    },
    {
      id: 20,
      product: "PlayStation 3",
      quantity: 11,
      price: 278000,
      category: "Antigua",
      image: "",
    },
    {
      id: 20,
      product: "Nintendo Wii U",
      quantity: 22,
      price: 169000,
      category: "Antigua",
      image: "",
    },
    {
      id: 30,
      product: "PlayStation 4",
      quantity: 24,
      price: 379000,
      category: "Moderna",
      image: "",
    },
    {
      id: 30,
      product: "Xbox One",
      quantity: 34,
      price: 389000,
      category: "Moderna",
      image: "",
    },
    {
      id: 30,
      product: "Nintendo Switch (edicion OLED)",
      quantity: 24,
      price: 300000,
      category: "Moderna",
      image: "",
    },
    {
      id: 30,
      product: "PlayStation 5",
      quantity: 30,
      price: 550000,
      category: "Moderna",
      image: "",
    },
    {
      id: 30,
      product: "Xbox Series X",
      quantity: 29,
      price: 478000,
      category: "Moderna",
      image: "",
    },
    {
      id: 10,
      product: "Sega Dreamcast",
      quantity: 12,
      price: 123000,
      category: "Retro",
      image: "",
    },
    {
      id: 10,
      product: "Game Boy Advance",
      quantity: 8,
      price: 230000,
      category: "Retro",
      image: "",
    },
    {
      id: 20,
      product: "PlayStation Portable (PSP)",
      quantity: 14,
      price: 199000,
      category: "Antigua",
      image: "",
    },
    {
      id: 20,
      product: "Nintendo 3DS",
      quantity: 5,
      price: 250000,
      category: "Antigua",
      image: "",
    },
    {
      id: 11,
      product: "Super Mario Bros (NES)",
      quantity: 15,
      price: 54000,
      category: "Retro",
      image: "",
    },
    {
      id: 11,
      product: "The Legend of Zelda: Ocarina of Time (Nintendo 64)",
      quantity: 3,
      price: 60000,
      category: "Retro",
      image: "",
    },
    {
      id: 11,
      product: "Street Fighter II (SNES)",
      quantity: 12,
      price: 70000,
      category: "Retro",
      image: "",
    },
    {
      id: 11,
      product: "Sonic the Hedgehog (Sega Genesis)",
      quantity: 9,
      price: 42000,
      category: "Retro",
      image: "",
    },
    {
      id: 22,
      product: "Metal Gear Solid (PlayStation)",
      quantity: 6,
      price: 55000,
      category: "Antiguo",
      image: "Male",
    },
    {
      id: 22,
      product: "Final Fantasy VII (PlayStation)",
      quantity: 7,
      price: 60000,
      category: "Antiguo",
      image: "",
    },
    {
      id: 11,
      product: "Resident Evil 4 (GameCube)",
      quantity: 6,
      price: 70000,
      category: "Retro",
      image: "",
    },
    {
      id: 22,
      product: "Halo: Combat Evolved (Xbox) ",
      quantity: 16,
      price: 68000,
      category: "Antiguo",
      image: "",
    },
    {
      id: 22,
      product: "God of War (PS2)",
      quantity: 19,
      price: 80000,
      category: "Antiguo",
      image: "",
    },
    {
      id: 22,
      product: "Grand Theft Auto: San Andreas (PS2)",
      quantity: 22,
      price: 55000,
      category: "Antiguo",
      image: "",
    },
    {
      id: 22,
      product: "The Elder Scrolls V: Skyrim (PS3)",
      quantity: 11,
      price: 100000,
      category: "Antiguo",
      image: "",
    },
    {
      id: 33,
      product: "Mario Kart 8 Deluxe (Nintendo Switch)",
      quantity: 22,
      price: 110000,
      category: "Moderno",
      image: "",
    },
    {
      id: 33,
      product: "The Legend of Zelda: Breath of the Wild (Switch)",
      quantity: 19,
      price: 99000,
      category: "Moderno",
      image: "",
    },
    {
      id: 33,
      product: "Animal Crossing: New Horizons (Switch)",
      quantity: 32,
      price: 78000,
      category: "Moderno",
      image: "",
    },
    {
      id: 33,
      product: "Red Dead Redemption 2 (PS4, Xbox One)",
      quantity: 34,
      price: 160000,
      category: "Moderno",
      image: "",
    },
    {
      id: 33,
      product: "Call of Duty: Modern Warfare II (PS4, Xbox One)",
      quantity: 22,
      price: 99000,
      category: "Moderno",
      image: "",
    },
    {
      id: 33,
      product: "Cyberpunk 2077 (PS5, Xbox Series X)",
      quantity: 35,
      price: 135000,
      category: "Moderno",
      image: "",
    },
    {
      id: 33,
      product: "Elden Ring (PS5, Xbox Series X) ",
      quantity: 18,
      price: 122000,
      category: "Moderno",
      image: "Male",
    },
    {
      id: 33,
      product: "FIFA 23 (PS5, Xbox Series X)",
      quantity: 20,
      price: 70000,
      category: "Moderno",
      image: "",
    },
    {
      id: 33,
      product: "Super Smash Bros. Ultimate (Switch)",
      quantity: 17,
      price: 100000,
      category: "Moderno",
      image: "",
    },
]
