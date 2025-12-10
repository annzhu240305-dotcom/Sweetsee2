const products = [
  { name: "Fortune cookies", description: "Китайское печенье с предсказанием", image: "images/candy1.jpg" },
  { name: "Lucky Charms", description: "Воздушный бисквит с кремом из шоколада", image: "images/candy2.jpg" },
  { name: "Choco luck", description: "Горький шоколад с вишнёвой начинкой", image: "images/candy3.jpg" },
  { name: "Волшебный леденец", description: "Апельсиновый леденец ручной работы", image: "images/candy4.jpg" },
  { name: "Медовая карамель", description: "Карамель с натуральным мёдом и мятой", image: "images/candy5.jpg" },
  { name: "Lover's sweet", description: "Песочное печенье с вареньем из клубники", image: "images/candy6.jpg" }
];

const catalogContainer = document.getElementById("catalog");

// Генерация карточек товаров 
products.forEach(product => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 mb-4";

  col.innerHTML = `
    <div class="card h-100 text-center">
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      <div class="card-body">
        <h5 class="card-title text-danger">${product.name}</h5>
        <p class="card-text">${product.description}</p>
        
        <form action="https://www.google.com/search" method="get" target="_blank">
          <div class="mb-3">
            <label for="quantity-${product.name}" class="form-label">Количество:</label>
            <input type="number" class="form-control" name="q" id="quantity-${product.name}" min="1" value="1">
          </div>
          <input type="hidden" name="product" value="${product.name}">
          <button type="submit" class="btn btn-danger w-100">Заказать</button>
        </form>
      </div>
    </div>
  `;

  catalogContainer.appendChild(col);
});