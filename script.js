//create and build HTML element
document.body.innerHTML = `<div class="heading-container">
<h1>Cosmetic</h1>
<img class="icon" src="https://cdn.dribbble.com/users/7023443/screenshots/15563846/media/2d17ed866b1c3bdda5fd498de5e6b920.jpeg?compress=1&resize=400x300" width="300px" height="100px" alt="icon">
</div>
<div id="mainContainer" class="main-container"></div>
`;
const getData = async () => {
  try {
    const data = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );
    const products = await data.json();
    console.log(products)
    mainContainer.innerHTML = "";
    // products.forEach((element) => {
    //   displayData(element);
    // });
    for(let key of products){
      displayData(key)

    }
  } catch (error) {
    console.log(error);
  }
};

getData();
const displayData = (obj) => {
  mainContainer.innerHTML += `
  <div class="container">
     <img class="image" src="${obj.image_link}">
     <a href="${obj.product_link}">product link</a>
    <h4 class="product_name">Brand:<span class="brand"> ${obj.brand}${obj.name}</span></h4>
    <h4 class="product_name">Product Name:<span class="product"> ${obj.name}</span></h4>
    <h5 class="product_price">Product price:<span class="price">${obj.price_sign}${obj.price}<span></h5>
    <p class="discription">Product Discription:<span>${obj.description}<span></p>
     </div>
     `;
};
