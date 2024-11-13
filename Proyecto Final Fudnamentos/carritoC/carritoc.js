document.addEventListener("DOMContentLoaded", () => {
  const cartTableBody = document.getElementById("cart-table-body");
  const totalCostElement = document.getElementById("total-cost");
  const applyShippingCheckbox = document.getElementById("apply-shipping");
  const confirmPurchaseBtn = document.getElementById("confirm-purchase");
  
  document.getElementById("toggle-cvv-visibility").addEventListener("click", () => {
    const cvvField = document.getElementById("cvv");
    const toggleButton = document.getElementById("toggle-cvv-visibility");
  
    if (cvvField.type === "password") {
      cvvField.type = "text";
      toggleButton.textContent = "Ocultar CVV";
    } else {
      cvvField.type = "password";
      toggleButton.textContent = "Mostrar CVV";
    }
  });

  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

const requerimientosCompra = JSON.parse(localStorage.getItem("requerimientosCompra")) || {};
const maxQuantity = requerimientosCompra.cantidadProductos;
const budget = requerimientosCompra.presupuesto;

  function loadCart() {
    cartTableBody.innerHTML = "";
    let totalCost = 0;

    cart.forEach((product, index) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td><img src="${product.image}" alt="${product.name}" width="50" height="50"></td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td>${product.price * product.quantity}</td>
        <td><button data-index="${index}" class="remove-btn">Eliminar</button></td>
      `;
      cartTableBody.appendChild(row);
      totalCost += product.price * product.quantity;
    });

    updateTotalCost(totalCost);
  }

  function updateTotalCost(totalCost) {
    const shippingCost = 15000;
    const finalCost = applyShippingCheckbox.checked ? totalCost + shippingCost : totalCost;
    totalCostElement.textContent = `Total: $${finalCost}`;
  }

  applyShippingCheckbox.addEventListener("change", () => {
    const totalCost = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    updateTotalCost(totalCost);
  });

  cartTableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
      const index = parseInt(event.target.dataset.index);
      const newCart = [];
      for (let i = 0; i < cart.length; i++) {
        if (i !== index) {
          newCart.push(cart[i]);
        }
      }
      cart = newCart;
      localStorage.setItem("cartItems", JSON.stringify(cart));
      loadCart();
    }
  });

  document.getElementById("clear-fields").addEventListener("click", () => {
    document.getElementById("payment-form").reset();
  });

  
  confirmPurchaseBtn.addEventListener("click", () => {
    confirmPurchaseBtn.disabled = true;
    const purchasePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isValidCard = validateCardInfo();
        const totalCost = calculateTotal();
        const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);

        if (!isValidCard) {
          reject("La información de la tarjeta es incorrecta.");
        } else if (totalItems > maxQuantity) {
          reject(`No puede comprar más de ${maxQuantity} productos en total.`);
        } else if (totalCost > budget) {
          reject("El costo total supera el presupuesto permitido.");
        } else {
          resolve("Pago realizado con éxito.");
        }
      }, Math.random() * 1000 + 2000);
    });

    purchasePromise
      .then((message) => {
        alert(message);
        localStorage.removeItem("cartItems");
        window.location.href = "/index.html";
      })
      .catch((error) => {
        alert(error);
        confirmPurchaseBtn.disabled = false;
      });
  });


  function validateCardInfo() {
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;
    return cardNumber.length === 16 && expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}$/) && cvv.length === 3;
  }

  function calculateTotal() {
    let total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    if (applyShippingCheckbox.checked) total += 15000;
    return total;
  }


  loadCart();
});