window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

//اضهار العنوان المنبثق عند التمرير على عربة الشراء
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
 

// message on click add-to-cart-btn
document.querySelectorAll('.add-to-cart-btn').forEach(item =>{
    item.addEventListener("click",() => {
        alert("اضيف المنتج الى عربة الشراء")
    })
})
//product.html
//radio button 
document.querySelectorAll('.size-option input[type="radio"]').forEach(item =>{

    item.addEventListener('change',() =>{
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})
document.querySelectorAll('.color-option input[type="radio"]').forEach(item =>{

    item.addEventListener('change',() =>{
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})
document.getElementById('year').innerHTML = new Date().getFullYear();

