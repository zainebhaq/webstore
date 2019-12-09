const product = [
  {
    name: `Octiria`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 1.png`,
    category: `DesignerBag`,
    stars: 3,
    price: 150
  }, {
    name: `Mahogany`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 2.png`,
    category: `NonDesignerBag`,
    stars: 4,
    price: 220
  }, {
    name: `Ivory`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 3.png`,
    category: `DesignerBag`,
    stars: 5,
    price: 250
  }, {
    name: `Leather`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 4.png`,
    category: `DesignerBag`,
    stars: 3,
    price: 170
  }, {
    name: `Leapord`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 5.png`,
    category: `NonDesignerBag`,
    stars: 4,
    price: 170

  }, {
    name: `Rusty`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 6.png`,
    category: `DesignerBag`,
    stars: 3,
    price: 165
  }, {
    name: `Banff`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 7.png`,
    category: `NonDesignerBag`,
    stars: 4,
    price: 230
  }, {
    name: `Lion`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 8.jpg`,
    category: `DesignerBag`,
    stars: 5,
    price: 290
  }, {
    name: `Peekaboo`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 9.jpg`,
    category: `DesignerBag`,
    stars: 3,
    price: 140
  }, {
    name: `Vincent`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 10.jpg`,
    category: `NonDesignerBag`,
    stars: 4,
    price: 235
  }, {
    name: `Cheetah`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 11.jpg`,
    category: `DesignerBag`,
    stars: 5,
    price: 255
  }, {
    name: `Tahini`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 12.jpg`,
    category: `DesignerBag`,
    stars: 3,
    price: 190
  }, {
    name: `Hobo`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 13.jpg`,
    category: `NonDesignerBag`,
    stars: 4,
    price: 170

  }, {
    name: `Sahara`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 15.jpg`,
    category: `DesignerBag`,
    stars: 3,
    price: 265
  }, {
    name: `Jungle`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 4.png`,
    category: `NonDesignerBag`,
    stars: 4,
    price: 330
  }, {
    name: `Ruby`,
    description: `Women's Bags`,
    link: `Shop Now`,
    img: `img/Bag 5.png`,
    category: `DesignerBag`,
    stars: 5,
    price: 390
  }
];
  
// function getproductAsHtmlString(product) {

//   let greatDeal = ``; // start with blank as default
//   if (product.price < 150) {
//     greatDeal = `<small class="callout">On Sale!!</small>`;
//   }

    // function getproductAsHtmlString(product) {

    //   let theStars = `
    //     <span class="material-icons">star</span>
    //     <span class="material-icons">star</span>
    //     <span class="material-icons">star</span>
    //     <span class="material-icons">star</span>
    //     <span class="material-icons">star</span>`;

    //   if (product.stars<1) {
    //     theStars = `
    //     <span class="material-icons">star_half</span>`;
    //   } else if (product.stars<2) {
    //     `<span class="material-icons">star</span>`;
    //   } else if (product.stars<3) {
    //     `<span class="material-icons">star</span>`;
    //     `<span class="material-icons">star</span>`;
    //   }
    //    else if (product.stars<4) {
    //   `<span class="material-icons">star</span>`;
    //   `<span class="material-icons">star</span>`;
    //   `<span class="material-icons">star</span>`;
    //   }
    //    else if (product.stars5) {
    //   `<span class="material-icons">star</span>`;
    //   `<span class="material-icons">star</span>`;
    //   `<span class="material-icons">star</span>`;
    //   `<span class="material-icons">star</span>`;
    //  }

 


  return `<article class="product ${product.category}">
  <img src="${product.img}" alt="Logo for ${product.name}" class="product-img">
       <div class="product-description">
        <img src="img/color1.png">         <input type="radio" name="color" value="blue" alt="[color options]">
        <img src="img/color2.png">         <input type="radio" name="color" value="blue" alt="[color options]">
        <img src="img/color3.png">         <input type="radio" name="color" value="blue" alt="[color options]">
    <h1 class="name">${product.name} ${greatDeal}</h1>
    <p class="description"> ${product.description} </p>
    <p class="link"> <a href="product.html">${product.link}</a></p>
    <p class="price">${product.price}</p>
     <dd class="stars">${producttars}</dd>
     </dl>
    <button type="button"><span class="material-icons">add_shopping_cart</button>
      <button type="button"><span class="material-icons">favorite</span></button>
      a href="#">see more</a>
      </div>
  </article>`;
}

function switchLayout() {
  document.getElementById('product').classList.toggle('column-view');
}
    

function filterByprice(prod) {
  return prod.price < 200;
}
function checkInput(event) {
  const userIsLookingFor = event.target.value.toLowerCase();
     
  const onlyMatchingNames = product.filter(prod => prod.name.toLowerCase().includes(userIsLookingFor));
  renderproduct(onlyMatchingNames);
    }

function renderproduct(arr) {
  
  const arrOfHtml = arr.map(getproductAsHtmlString) 

  const strOfHtml = arrOfHtml.join('\n')
  document.getElementById('product').innerHTML = strOfHtml;
}

console.table(product);

const affordableproduct = product.filter(filterByprice);
renderproduct(affordableproduct);


function checkcategory(event) {
  const userIsLookingFor = event.target.value;

  const onlyMatchingcategories = product.filter(prod => prod.category == userIsLookingFor);
  renderproduct(onlyMatchingcategories);
}



document.getElementById('layout').addEventListener('click', event => switchLayout() )
document.getElementById('productname').addEventListener('input', event => checkInput(event) )
document.getElementById('productcategory').addEventListener('change', event => checkcategory(event) )