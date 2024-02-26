var productNameInput =document.getElementById('productNameInput');
var productPriceInput =document.getElementById('productPriceInput');
var productCategoryInput =document.getElementById('productCategoryInput');
var productDescriptionInput =document.getElementById('productDescriptionInput');

var addBtn =document.getElementById('addBtn')
var updateBtn =document.getElementById('updateBtn')
// console.log(productNameInput.value);
var productContainer= []




if(localStorage.getItem('products') !== null){
    productContainer =JSON.parse(localStorage.getItem('products'));
    displayProduct();
} 

// Session Storage objects can be accessed using the sessionStorage read-only property.
//  The difference between sessionStorage and localStorage is that localStorage data does not expire, 
//  whereas sessionStorage data is cleared when the page session ends.

function addProduct(){
    if(validtionNameProduct() ==true && validtionDescriptionProduct() ==true && validtionCategory()==true && validtionPrice() ==true ){
        var product={
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCategoryInput.value,
            des:productDescriptionInput.value
        }
        productContainer.push(product);
        localStorage.setItem('products',JSON.stringify(productContainer))
        displayProduct();
        clearProduct();
        document.getElementById('error').innerHTML =``
    }
    
    // console.log(productContainer);
}



function displayProduct(){
var carton =``
for(var i=0;i<productContainer.length;i++){
    carton+= `<tr>
    <td>${productContainer[i].name}</td>
    <td>${productContainer[i].price}</td>
    <td>${productContainer[i].category}</td>
    <td>${productContainer[i].des}</td>
    <td><button onclick='setProduct(${i})' class='btn btn-outline-info btn-sm fa-solid fa-pen-to-square'></button></td>
    <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger btn-sm fas fa-x'></button></td>
    
</tr>`
}
document.getElementById('tableData').innerHTML =carton
}






function deleteProduct(productIndex){
   productContainer.splice(productIndex,1);
   localStorage.setItem('products',JSON.stringify(productContainer))
   displayProduct();
// console.log(`Delete ${productIndex}`);

}



function clearProduct(){
    productNameInput.value =``;
    productPriceInput.value=``;
    productCategoryInput.value= ``;
    productDescriptionInput.value =``
}


var productIndex=0;
console.log(productIndex);

function setProduct(id){
    productIndex=id
    document.getElementById('productNameInput').value=  productContainer[id].name
    document.getElementById('productPriceInput').value=  productContainer[id].price
    document.getElementById('productCategoryInput').value=  productContainer[id].category
    document.getElementById('productDescriptionInput').value=  productContainer[id].des
    addBtn.classList.add('d-none')
    updateBtn.classList.remove('d-none')
}


function updateProduct(){
    productContainer[productIndex].name=document.getElementById('productNameInput').value
    productContainer[productIndex].price = document.getElementById('productPriceInput').value
    productContainer[productIndex].category = document.getElementById('productCategoryInput').value
    productContainer[productIndex].des = document.getElementById('productDescriptionInput').value
    localStorage.setItem('products',JSON.stringify(productContainer))
    displayProduct();
    clearProduct();
    addBtn.classList.remove('d-none')
    updateBtn.classList.add('d-none')

}




function searchProductName(term){
    var carton =``
for(var i=0;i<productContainer.length;i++){
    if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
        carton+= `<tr>
    <td>${productContainer[i].name}</td>
    <td>${productContainer[i].price}</td>
    <td>${productContainer[i].category}</td>
    <td>${productContainer[i].des}</td>
    <td><button onclick='setProduct(${i})' class='btn btn-outline-info btn-sm fa-solid fa-pen-to-square'></button></td>
    <td><button onclick='deleteProduct(${i})' class='btn btn-outline-danger btn-sm fas fa-x'></button></td>
    
</tr>`
}
else{
    document.getElementById('errorSearch').innerHTML =`<tr>
    <span>Empty....!</span>
</tr>`

}
document.getElementById('tableData').innerHTML =carton
    }
    
}






// localStorage.setItem()
// localStorage.getItem()
// localStorage.removeItem()
// localStorage.clear()
// EX 1 
// localStorage.setItem('Name','Yousef Elkhawanki')

// console.log(localStorage.getItem('name')); 1- Ah fe Data 2- null





// var numbers = [1,2,3,4,5,6,7]
// for (var i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }






// Regular Expression ( Regx)

// var regx = /^[A-Z][a-z]{3,8}$/
// var test ='yousef'
// console.log(regx.test(test));



function validtionNameProduct(){
    var regx = /.*\S.*/

    if(regx.test(productNameInput.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML =`<div class="alert alert-danger">Name Invalid...!</div>`
    }
}

function validtionDescriptionProduct(){
    var regx = /.*\S.*/
    //empty string
    if(regx.test(productDescriptionInput.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML =`<div class="alert alert-danger">Descrpition Invalid...!</div>`
    }
}
function validtionCategory(){
    var regx = /.*\S.*/

    if(regx.test(productCategoryInput.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML =`<div class="alert alert-danger">Name Invalid...!</div>`
    }
}

function validtionPrice(){
    var regx = /.*\S.*/

    if(regx.test(productPriceInput.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML =`<div class="alert alert-danger">Name Invalid...!</div>`
    }
}




var x= 'ahmed'
var term ='A'
console.log(x.toLowerCase().includes(term.toLowerCase()));