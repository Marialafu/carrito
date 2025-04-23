const productsGrid = document.getElementById('desserts-grid')


const productsOriginalList = [
    {
        id: '362eb9c8-7d07-476a-891c-7ff627e77070',
        name: 'Waffle',
        title: 'Waffle with Berries',
        price: 6.5,
        imgMobile: './assets/images/image-waffle-mobile.jpg',
        imgTablet: './assets/images/image-waffle-tablet.jpg',
        imgDesktop: './assets/images/image-waffle-desktop.jpg',
        imgThumbnail: './assets/images/image-waffle-thumbnail.jpg',
        alt: 'A waffle tower with sliced strawberries and icing sugar.'
    }
]

const addCardProduct = () => {
    productsOriginalList.forEach(product => {
        
        const article = document.createElement('article')
        article.classList.add('dessert-card')
        article.id = product.id
        
        //PARTE SUPERIOR CARD
        const topCardGroup = document.createElement('div')
        topCardGroup.classList.add('top-card')

        //IMAGEN CARD
        const pictureElement = document.createElement('picture')
        sourceDesktop.media='(min-width: 1400px)'
        sourceDesktop.srcset='./assets/images/desktop/image-baklava-desktop.jpg'
        pictureElement.src = product.imgMobile
        topCardGroup.append(pictureElement)
        
        
//         <picture>
//   <source media="(min-width: 1400px)" srcset="./assets/images/desktop/image-baklava-desktop.jpg">
//   <source media="(min-width: 768px)" srcset="./assets/images/tablet/image-baklava-tablet.jpg">
//   <source media="(min-width: 360px)" srcset="./assets/images/mobile/image-baklava-mobile.jpg">
//   <img src="./assets/images/mobile/image-baklava-mobile.jpg" alt="" class="dessert-picture">
// </picture>

        //BOTÓN ADD TO CART
        const addToCartButton = document.createElement('button')
        addToCartButton.classList.add('button')
        addToCartButton.classList.add('add-to-cart-button')
        addToCartButton.classList.add('card-button')
        
        const imgAddToCartButton = document.createElement('img')
        imgAddToCartButton.src = './assets/images/icons/icon-add-to-cart.svg'
        addToCartButton.append(imgAddToCartButton)

        const textAddToCartButton = document.createElement('span')
        textAddToCartButton.textContent = 'Add to Cart'
        addToCartButton.append(textAddToCartButton)
        
        topCardGroup.append(addToCartButton)
        //FIN BOTÓN ADD TO CART

        //BOTÓN SUMAR O RESTAR PRODUCTOS OCULTO
        const addEliminateToCartButton = document.createElement('button')
        addEliminateToCartButton.classList.add('button')
        addEliminateToCartButton.classList.add('button-selected')
        addEliminateToCartButton.classList.add('card-button')
        addEliminateToCartButton.classList.add('add-eliminate-to-cart-button')
        //meter un evento de escucha que lleve a una función para hide.
        //addEliminateToCartButton.classList.add('hide')

        const imgRemoveFromCart = document.createElement('img')
        imgRemoveFromCart.classList.add('circle')
        imgRemoveFromCart.src = './assets/images/icons/icon-decrement-quantity.svg'
        addEliminateToCartButton.append(imgRemoveFromCart)
    
        const textAddEliminateToCartButton = document.createElement('span')
        textAddEliminateToCartButton.textContent = 'Número'
        addEliminateToCartButton.append(textAddEliminateToCartButton)

        const imgAddToCart = document.createElement('img')
        imgAddToCart.classList.add('circle')
        imgAddToCart.src = './assets/images/icons/icon-increment-quantity.svg'
        addEliminateToCartButton.append(imgAddToCart)
        
        topCardGroup.append(addEliminateToCartButton)
        // FIN BOTÓN SUMAR O RESTAR PRODUCTOS OCULTO
        
        article.append(topCardGroup)
        //FIN PARTE SUPERIOR CARD

        //PARTE INFERIOR CARD
        const bottomCardGroup = document.createElement('div')
        bottomCardGroup.classList.add('bottom-card')
        
        const priceText = document.createElement('p')
        priceText.classList.add('text')
        priceText.classList.add('featured-text')
        priceText.textContent = `$${product.price}`
        bottomCardGroup.append(priceText)
        
        const productText = document.createElement('p')
        productText.classList.add('text')
        productText.textContent = product.title
        bottomCardGroup.append(productText)

        const categoryText = document.createElement('p')
        categoryText.classList.add('category-text')
        categoryText.textContent = product.name
        bottomCardGroup.append(categoryText)
        //FIN PARTE INFERIOR CARD

        article.append(bottomCardGroup)

        productsGrid.append(article)
        console.log('hola');
        
    })
}
addCardProduct()

//<article class="dessert-card">
/* <div class="top-card">


<button class="button add-to-cart-button card-button">
  <img src="./assets/images/icons/icon-add-to-cart.svg" alt="">
  Add to Cart
</button>

<button class="button button-selected card-button add-eliminate-to-cart-button hide">
  <img class="circle" src="./assets/images/icons/icon-decrement-quantity.svg" alt="imagen del menos">
  Número
  <img class="circle" src="./assets/images/icons/icon-increment-quantity.svg" alt="imagen del +">
</button>
</div>

<div class="bottom-card">
  <p class="category-text">Waffle</p>
  <p class="text">Waffle with Berries</p>
  <p class="text featured-text">Price</p>
</div>

</article> */