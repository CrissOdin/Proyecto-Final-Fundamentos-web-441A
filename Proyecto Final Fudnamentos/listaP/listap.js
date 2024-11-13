document.addEventListener("DOMContentLoaded", () => {
  const productos = JSON.parse(localStorage.getItem("productosPixelVault")) || [];
  const productList = document.querySelector(".product-list");
  let currentIndex = 0;
  const itemsPerLoad = 15;
  let productosFiltrados = productos;

  const filtro1 = document.getElementById("filtro1");
  const filtro2 = document.getElementById("filtro2");

  const categorias = [...new Set(productos.map(producto => producto.category))];
  categorias.forEach(categoria => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    filtro1.appendChild(option);
  });

  const rangosDePrecio = ["50000", "100000", "150000", "200000"];
  rangosDePrecio.forEach(rango => {
    const option = document.createElement("option");
    option.value = rango;
    option.textContent = `Hasta $${rango}`;
    filtro2.appendChild(option);
  });

  function cargarProductos() {
    if (currentIndex >= productosFiltrados.length) {
      alert("No hay más productos por mostrar");
      return;
    }

    const productosACargar = productosFiltrados.slice(currentIndex, currentIndex + itemsPerLoad);
    productosACargar.forEach(producto => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");

      const productImage = document.createElement("img");
      productImage.src = producto.image;
      productImage.alt = producto.product;

      const productName = document.createElement("p");
      productName.textContent = producto.product;

      productItem.addEventListener("click", () => {
        mostrarDetallesProducto(producto);
      });

      productItem.appendChild(productImage);
      productItem.appendChild(productName);
      productList.appendChild(productItem);
    });

    currentIndex += itemsPerLoad;
  }

  function mostrarDetallesProducto(producto) {
    const productDetails = document.querySelector(".product-details");
    productDetails.innerHTML = "";

    const image = document.createElement("img");
    image.src = producto.image;
    image.alt = producto.product;

    const name = document.createElement("h2");
    name.textContent = producto.product;

    const category = document.createElement("p");
    category.textContent = `Categoría: ${producto.category}`;

    const price = document.createElement("p");
    price.textContent = `Precio: $${producto.price}`;

    const quantity = document.createElement("p");
    quantity.textContent = `Cantidad disponible: ${producto.quantity}`;

    const quantityInput = document.createElement("input");
    quantityInput.type = "number";
    quantityInput.placeholder = "Cantidad";
    quantityInput.min = 1;
    quantityInput.max = producto.quantity;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Añadir al Carrito";
    addToCartBtn.addEventListener("click", () => {
      const cantidadSeleccionada = parseInt(quantityInput.value, 10);
      if (cantidadSeleccionada > 0 && cantidadSeleccionada <= producto.quantity) {
        agregarAlCarrito(producto, cantidadSeleccionada);
        alert(`Se añadieron ${cantidadSeleccionada} unidades de ${producto.product} al carrito.`);
      } else {
        alert("La cantidad seleccionada no es válida.");
      }
    });

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancelar";
    cancelBtn.addEventListener("click", () => {
      productDetails.innerHTML = "";
    });

    productDetails.appendChild(image);
    productDetails.appendChild(name);
    productDetails.appendChild(category);
    productDetails.appendChild(price);
    productDetails.appendChild(quantity);
    productDetails.appendChild(quantityInput);
    productDetails.appendChild(addToCartBtn);
    productDetails.appendChild(cancelBtn);
  }

  function agregarAlCarrito(producto, cantidad) {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingProductIndex = cart.findIndex(item => item.product === producto.product);

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += cantidad;
    } else {
      cart.push({ ...producto, quantity: cantidad });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
  }

  document.querySelector("button[type='button']").addEventListener("click", () => {
    const filtro1Value = filtro1.value;
    const filtro2Value = filtro2.value;

    productosFiltrados = productos.filter(producto => {
      const matchesFiltro1 = filtro1Value ? producto.category === filtro1Value : true;
      const matchesFiltro2 = filtro2Value ? producto.price <= parseInt(filtro2Value) : true;
      return matchesFiltro1 && matchesFiltro2;
    });

    productList.innerHTML = "";
    currentIndex = 0;

    if (productosFiltrados.length === 0) {
      alert("No hay productos que coincidan con los filtros seleccionados.");
    } else {
      cargarProductos();
    }
  });

  document.querySelector("button[type='Cancel']").addEventListener("click", () => {
    window.location.href = "/index.html";
  });

  document.querySelector("button[type='Complete']").addEventListener("click", () => {
  
  const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
  
  
    if (cart.length === 0) {
      alert("Tu carrito está vacío. Por favor, añade productos antes de completar la compra.");
    } else {

      window.location.href = "../carritoC/carritoc.html";
    }
  });

  productList.addEventListener("scroll", () => {
    if (productList.scrollTop + productList.clientHeight >= productList.scrollHeight - 1) {
      cargarProductos();
    }
  });

  cargarProductos();
});
