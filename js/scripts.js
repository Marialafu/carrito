const filtersContainerElement = document.getElementById('filter-buttons-container')
const productsGrid = document.getElementById('desserts-grid')


const PRODUCTS = [
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
  },
  {
    id: 'af2b4eb6-e180-4e7e-a2c7-221662c7e47b',
    name: 'Crème Brûlée',
    title: 'Vanilla Bean Crème Brûlée',
    price: 7.0,
    imgMobile: './assets/images/image-creme-brulee-mobile.jpg',
    imgTablet: './assets/images/image-creme-brulee-tablet.jpg',
    imgDesktop: './assets/images/image-creme-brulee-desktop.jpg',
    imgThumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
    alt: 'Two dishes of crème brûlée topped with berries, figs and mint.'
  },
  {
    id: 'a8255a6b-87de-4947-a6ec-64169afecd49',
    name: 'Macaron',
    title: 'Macaron Mix of Five',
    price: 8.0,
    imgMobile: './assets/images/image-macaron-mobile.jpg',
    imgTablet: './assets/images/image-macaron-tablet.jpg',
    imgDesktop: './assets/images/image-macaron-desktop.jpg',
    imgThumbnail: './assets/images/image-macaron-thumbnail.jpg',
    alt: 'Five different flavour macarons.'
  },
  {
    id: '14701468-4f6d-49ed-9480-61be223028ac',
    name: 'Tiramisu',
    title: 'Classic Tiramisu',
    price: 5.5,
    imgMobile: './assets/images/image-tiramisu-mobile.jpg',
    imgTablet: './assets/images/image-tiramisu-tablet.jpg',
    imgDesktop: './assets/images/image-tiramisu-desktop.jpg',
    imgThumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
    alt: 'A tiramisu topped with berries, mint and cocoa powder.'
  },
  {
    id: '67897043-ff0e-4273-81e9-fec5059dd42b',
    name: 'Baklava',
    title: 'Pistachio Baklava',
    price: 4.0,
    imgMobile: './assets/images/image-baklava-mobile.jpg',
    imgTablet: './assets/images/image-baklava-tablet.jpg',
    imgDesktop: './assets/images/image-baklava-desktop.jpg',
    imgThumbnail: './assets/images/image-baklava-thumbnail.jpg',
    alt: 'Three triangle-shaped baklavas topped with crushed pistachios.'
  },
  {
    id: 'e44fa461-4bbc-4cd6-974f-682e31eb692c',
    name: 'Pie',
    title: 'Lemon Meringue Pie',
    price: 5.0,
    imgMobile: './assets/images/image-meringue-mobile.jpg',
    imgTablet: './assets/images/image-meringue-tablet.jpg',
    imgDesktop: './assets/images/image-meringue-desktop.jpg',
    imgThumbnail: './assets/images/image-meringue-thumbnail.jpg',
    alt: 'A slice of lemon pie coronated with meringue.'
  },
  {
    id: '8ce98d56-f960-4804-ae34-6218fa3bf312',
    name: 'Cake',
    title: 'Red Velvet Cake',
    price: 4.5,
    imgMobile: './assets/images/image-cake-mobile.jpg',
    imgTablet: './assets/images/image-cake-tablet.jpg',
    imgDesktop: './assets/images/image-cake-desktop.jpg',
    imgThumbnail: './assets/images/image-cake-thumbnail.jpg',
    alt: 'Red velvet cake portion with sliced strawberries on the inside and a berry on top.'
  },
  {
    id: '824f63cd-633e-42b6-b43a-3558966d6376',
    name: 'Brownie',
    title: 'Salted Caramel Brownie',
    price: 5.5,
    imgMobile: './assets/images/image-brownie-mobile.jpg',
    imgTablet: './assets/images/image-brownie-tablet.jpg',
    imgDesktop: './assets/images/image-brownie-desktop.jpg',
    imgThumbnail: './assets/images/image-brownie-thumbnail.jpg',
    alt: 'A portion of brownie with vanilla ice cream and caramel syrup.'
  },
  {
    id: '17cbeca7-4958-4b48-81d5-1820c2d42c6d',
    name: 'Cotta',
    title: 'Vanilla Panna Cotta',
    price: 6.5,
    imgMobile: './assets/images/image-panna-cotta-mobile.jpg',
    imgTablet: './assets/images/image-panna-cotta-tablet.jpg',
    imgDesktop: './assets/images/image-panna-cotta-desktop.jpg',
    imgThumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
    alt: 'Two crystal jars of panna cotta with cream.'
  }
]
let cartList = []
let quantityValue = 1;

const changeAddToCartButton = (event, product) => {
  let buttonClickedElement = event.target
  let textButtonElement = buttonClickedElement.nextSibling.children[1]

  buttonClickedElement.classList.add('hide')
  buttonClickedElement.nextSibling.classList.remove('hide')
  textButtonElement.textContent = quantityValue

  const addQuantityProduct = {...product, quantity: 1}
  cartList.push(addQuantityProduct)
}

const determineQuantity = (event, product) => {
  let buttonClickedName = event.target.dataset.quantity
  let buttonClickedElement = event.target
  let holeButton = buttonClickedElement.parentElement
  
  if (!buttonClickedName) return
  
  const foundProduct = cartList.find(cartProduct => {
    if (cartProduct.id === product.id) return cartProduct
  })

  if (buttonClickedName === 'add'){
    foundProduct.quantity += quantityValue
  } else if (buttonClickedName === 'remove'){
    foundProduct.quantity -= quantityValue
  }
  holeButton.children[1].textContent = foundProduct.quantity
  
  if (foundProduct.quantity === 0){
    holeButton.classList.add('hide')
    holeButton.previousElementSibling.classList.remove('hide')
    cartList.filter(product => {
      if (product !== foundProduct) return product
  })
  }
    //no me funciona bien el filtro. Quita todos.
  
    
    console.log(cartList);
    
  // }
  
}

const defineFilters = (event) => {
  let productsFiltered = [...PRODUCTS]
  let clickedName = event.target.dataset.filter
  let clickedElement = event.target

  if (!clickedName) return
  filtersContainerElement.querySelector('.button-selected').classList.remove('button-selected')
  
  clickedElement.classList.add('button-selected')

  if (clickedName === 'name'){
    productsFiltered.sort((a, b) => a.title.localeCompare(b.title))
  } else if (clickedName === 'price'){
    productsFiltered.sort((a, b) => {
      return a.price - b.price;
    })
  }
  addCardProduct(productsFiltered)
}

const addCardProduct = (productsList) => {
    let fragment = document.createDocumentFragment()

    productsGrid.textContent = ''
    productsList.forEach(product => {
        
        const article = document.createElement('article')
        article.classList.add('dessert-card')
        //ver donde tengo que poner el id para que identifique bien el producto.
        
        //PARTE SUPERIOR CARD
        const topCardGroup = document.createElement('div')
        topCardGroup.classList.add('top-card')

        //IMAGEN CARD
        const pictureElement = document.createElement('picture')

        pictureElement.media='(min-width: 1400px)'
        pictureElement.srcset= product.imgDesktop
        pictureElement.media='(min-width: 768px)'
        pictureElement.srcset= product.imgTablet
        pictureElement.media='(min-width: 360px)'
        pictureElement.srcset= product.imgMobile

        const imgPictureElement = document.createElement('img')
        imgPictureElement.classList.add('dessert-picture')
        imgPictureElement.src = product.imgMobile
        pictureElement.append(imgPictureElement)
      
        topCardGroup.append(pictureElement)
        //FIN IMAGEN CARD

        //BOTÓN ADD TO CART
        const addToCartButton = document.createElement('button')
        addToCartButton.classList.add('button')
        addToCartButton.classList.add('add-to-cart-button')
        addToCartButton.classList.add('card-button')
        
        const imgAddToCartButton = document.createElement('img')
        imgAddToCartButton.src = './assets/images/icons/icon-add-to-cart.svg'
        imgAddToCartButton.classList.add('pointer-events')
        addToCartButton.append(imgAddToCartButton)

        const textAddToCartButton = document.createElement('span')
        textAddToCartButton.textContent = 'Add to Cart'
        textAddToCartButton.classList.add('pointer-events')
        addToCartButton.append(textAddToCartButton)
        
        topCardGroup.append(addToCartButton)

        addToCartButton.addEventListener('click', event => changeAddToCartButton(event, product))
        //FIN BOTÓN ADD TO CART

        //BOTÓN SUMAR O RESTAR PRODUCTOS OCULTO
        const addEliminateToCartButton = document.createElement('button')
        addEliminateToCartButton.classList.add('button')
        addEliminateToCartButton.classList.add('button-selected')
        addEliminateToCartButton.classList.add('card-button')
        addEliminateToCartButton.classList.add('add-eliminate-to-cart-button')
        addEliminateToCartButton.classList.add('hide')
        

        const imgRemoveFromCart = document.createElement('img')
        imgRemoveFromCart.classList.add('circle')
        imgRemoveFromCart.src = './assets/images/icons/icon-decrement-quantity.svg'
        imgRemoveFromCart.dataset.quantity = 'remove'
        addEliminateToCartButton.append(imgRemoveFromCart)
        
    
        const textAddEliminateToCartButton = document.createElement('span')
        textAddEliminateToCartButton.textContent = 'Número'
        addEliminateToCartButton.append(textAddEliminateToCartButton)

        const imgAddToCart = document.createElement('img')
        imgAddToCart.classList.add('circle')
        imgAddToCart.src = './assets/images/icons/icon-increment-quantity.svg'
        imgAddToCart.dataset.quantity = 'add'
        addEliminateToCartButton.append(imgAddToCart)
        
        topCardGroup.addEventListener('click', event => determineQuantity(event, product))
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
        bottomCardGroup.prepend(priceText)
        
        const productText = document.createElement('p')
        productText.classList.add('text')
        productText.textContent = product.title
        bottomCardGroup.prepend(productText)

        const categoryText = document.createElement('p')
        categoryText.classList.add('category-text')
        categoryText.textContent = product.name
        bottomCardGroup.prepend(categoryText)
        //FIN PARTE INFERIOR CARD

        article.append(bottomCardGroup)
        fragment.append(article)
        productsGrid.append(fragment)
    })
}

const addProductToYourCart = () => {
  let fragment = document.createDocumentFragment()
  productsGrid.textContent = ''
}

addCardProduct(PRODUCTS)

filtersContainerElement.addEventListener('click', defineFilters)

