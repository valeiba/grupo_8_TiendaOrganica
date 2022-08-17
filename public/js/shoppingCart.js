let addShoppingCart=document.querySelectorAll('.addToCart');
console.log(addShoppingCart)
addShoppingCart.forEach((addButton)=>{
    addButton.addEventListener('click', addCartClicked);
   
});
// const buyButton= document.querySelector('.buyButton');
// buyButton.addEventListener('click', buyButtonClicked)

const shoppingCartItemsContainer=document.querySelector('#carrito tbody');
function addCartClicked(event){

    const button = event.target;
    const item=button.closest('.product-card');
    
    const itemTitle= item.querySelector('.product-card__title').textContent;
 
    const itemPrice= item.querySelector('.product-card__price').textContent;
   
    const itemImage= item.querySelector('.product-card__img').src;
    addItemToShop(itemTitle,itemPrice,itemImage);
}
function addItemToShop(itemImage, itemPrice, itemTitle){
    const elementsTitle=shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
    for (let i = 0; i < elementsTitle.length; i++) {
        if(elementsTitle[i].innerText=== itemTitle){
            elementsTitle[i].parentElement.querySelector('.shoppingCartItemQuantity');
            elementsQuantity.value++;
            updateShopCartSubtotal();
            return

        }
        
    }

    console.log(itemImage,itemPrice,itemTitle)
    const shoppingCartRow= document.createElement('tr');
    const shoppingCartContent=`
   
<td class="shoppingCartItem" > 
        <img src="${itemImage}" alt="imagenproducto" class="shoppingCartItemImage">
    <div>
        <p class="shoppingCartItemTitle">${itemTitle}</p>
        <small> <p class="shoppingCartItemPrice">$ ${itemPrice}</p></small>
    </div>
     
</td>
<td>
        <input value="1" type="number" class="shoppingCartItemQuantity">
</td>
<td>
        <p class="subtotalProduct"></p>
</td>
<td>
        <a href="#" class="buttonDelete"><i class="fas fa-trash-alt"></i></a>
</td>
    `;
    shoppingCartRow.innerHTML=shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
    
//     shoppingCartRow
//      .querySelector('.buttonDelete')
//      .addEventListener('click', removeShoppingCartItem);
//     shoppingCartRow
//      .querySelector('.shoppingCartItemQuantity')
//      .addEventListener('change',quantityChanged);

//     updateShopCartSubtotal()
 }
// function updateShopCartSubtotal(){
//     let total= 0;
//     const shoppingCartTotal= document.querySelector('.subtotalProduct');
//     const shoppingCartItem= document.querySelectorAll('.shoppingCartItem');
//     shoppingCartItem.forEach((CartItem)=>{
//         const shoppingItemPriceElement= CartItem.querySelector('.shoppingCartItemPrice');
//         const shoppingCartItemPrice= Number(shoppingItemPriceElement.textContent);
//         const shoppingCartItemQuantityElement= CartItem.querySelector('.shoppingCartItemQuantity');
//         const shoppingCartItemQuantity= Number(shoppingCartItemQuantityElement.value);
//         total= total + shoppingCartItemPrice * shoppingCartItemQuantity;
//     });
//     shoppingCartTotal.innerHTML=`$ ${total.toFixed(2)}`;

// }
// function removeShoppingCartItem(event){
//     const buttonClicked= event.target;
//     buttonClicked.closest('.shoppingCartItem').remove();
//     updateShopCartSubtotal();
// }
// function quantityChanged(event){
//     const inputQuantity= event.target;
//     inputQuantity.value <= 0 ? (input.value =1) : null;
//     updateShopCartSubtotal();
// }
// function buyButtonClicked(){
//     shoppingCartItemsContainer.innerHTML= '';
//     updateShopCartSubtotal
// }