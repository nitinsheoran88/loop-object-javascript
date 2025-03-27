let products = [
    {
        name: "Boult K10  ",
        price: 899,
        color: "sky blue",
        imageUrl: "https://rukminim2.flixcart.com/image/300/300/xif0q/headphone/a/4/5/-original-imah4rh56cpue4wk.jpeg?q=90"
    },
    {
        name: "boAt Airdopes 161/163",
        price: 1099,
        color: "Black",
        imageUrl: "https://rukminim2.flixcart.com/image/300/300/xif0q/headphone/q/m/s/-original-imah3zvdthupfejc.jpeg?q=90"
    },
    {
        name: "Apple AirPods Pro (2nd generation)",
        price: 19999,
        color: "White",
        imageUrl: "https://rukminim2.flixcart.com/image/300/300/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=90"
    },

    {
        name: "boAt Rockerz 110 ",
        price: 999,
        color: "Black",
        imageUrl: "https://rukminim2.flixcart.com/image/300/300/xif0q/headphone/r/r/4/-original-imaguggqedr3ypyx.jpeg?q=90",
    },
    {
        name: "Apple AirPods Pro (1st generation)",
        price: 30999,
        color: "White",
        imageUrl: "https://rukminim2.flixcart.com/image/300/300/xif0q/headphone/e/a/f/-original-imagtc44nk4b3hfg.jpeg?q=90"
    },
    {
        name: "Boult Z40 Pro",
        price: 1299,
        color: "Black",
        imageUrl: "https://rukminim2.flixcart.com/image/300/300/xif0q/headphone/x/4/9/-original-imagtr2nezygmu4f.jpeg?q=90"
    },
   

   
];

products.forEach(function (item) {
    console.log(item.imageUrl);
    
    document.querySelector(".product-list").innerHTML += `
          <div class="product">
                <div class="product-image">
                    <img src="${item.imageUrl}"/>
                </div>
              <h3>${item.name}</h3>
              <div class="price">Rs. ${item.price}</div>
              <button class="button">Buy Now</button>
           
          </div>
      `;
});
document.querySelectorAll('button').forEach(function (item) {
    item.addEventListener('click', function () {
        console.log('clicked', item)

        document.querySelector('.popup').style.display = 'flex'

        setTimeout(() => {
            document.querySelector('.popup').style.display = 'none'
        }, 5000);

    })
})