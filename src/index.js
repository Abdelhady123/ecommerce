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

document.getElementById('year').innerHTML = new Date().getFullYear();