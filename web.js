let cartCount = 0;
let cart = [];
fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    const products = data.products;
    console.log(products);
    const cnt = document.getElementById("cnt");
    
    cnt.innerHTML = "";

    products.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("pr-box");

      // Add product image
      const img = document.createElement("img");
      img.src = product.thumbnail; 
      img.alt = product.title;
      img.style.width = "100px";
      img.style.height = "100px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "8px";
      div.appendChild(img);

      // Product title
      const title = document.createElement("a");
      title.href = "#";
      title.textContent = product.title;
      title.style.display = "block";
      title.style.margin = "8px 0";
      title.style.textDecoration = "none";
      title.style.color = "#333";
      div.appendChild(title);

      // Product price
      const price = document.createElement("span");
      price.textContent = `$${product.price}`;
      div.appendChild(price);

      // Add to Cart button
      const btn = document.createElement("button");
      btn.classList.add("but");
      btn.textContent = "Add to Cart";
      btn.style.borderRadius = "5px";
      btn.style.marginTop = "5px";
      btn.style.padding = "6px 10px";
      btn.style.cursor = "pointer";
      
       btn.addEventListener("click", ()=>{
        cart.push(product.id);
         console.log(cart);
       
        cartCount++;
        console.log(cartCount);
        
        updateCartUI();
      });
      
      div.appendChild(btn);
     

      cnt.appendChild(div);
    });
  });

  function updateCartUI() {
  const bagSpan = document.querySelector(".fa-bag-shopping").parentElement;
  bagSpan.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> Bag (${cartCount})`;
}


if(cart.length > 0){
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    const products = data.products;
    const cnt1 = document.getElementById("cnt1");
    cnt1.innerHTML = "";
    products.forEach(product =>{
      cart.forEach(i =>{
        if(cart[i]==product.id){
          console.log(product.id);
          
           const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = product.thumbnail; 
      img.alt = product.title;
      img.style.width = "100px";
      img.style.height = "100px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "8px";
      div.appendChild(img);

      // Product title
      const title = document.createElement("a");
      title.href = "#";
      title.textContent = product.title;
      title.style.display = "block";
      title.style.margin = "8px 0";
      title.style.textDecoration = "none";
      title.style.color = "#333";
      div.appendChild(title);

      // Product price
      const price = document.createElement("span");
      price.textContent = `$${product.price}`;
      div.appendChild(price);
      cnt1.appendChild(div);
        }
      });
      
    });
  });
}


