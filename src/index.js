window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import'./sass/custom.scss';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import './sass/style.scss';
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
//حساب السعر الاجمالي للمنتج
document.querySelectorAll('[data-product-qunatity]').forEach(item =>{  //جلب جميع العناصر التي تحتوي على الخاصية واعتبارها item
    item.addEventListener('change',() =>{ //في حال اجراء اي تغير على ال item ينفذ الكود 
          const newQuantity = item.value;//جلب القيمة الجديده لل select
          const parent =item.closest('[data-product-info]'); //الوصول لل tr
          const pricePerUbit=parent.getAttribute('data-product-price');// جلب القيمة من ال attribute
          const totalPriceForProduct=newQuantity * pricePerUbit;
          parent.querySelector('.total-price-for-product').innerHTML=totalPriceForProduct+'$';

          //حساب السعر الاجمالي لسلة المشتريات
          calculatetotalprice();    
        })

})
//زر الحذف الخاص بالمنتج
document.querySelectorAll('[data-remove-from-card]').forEach(item =>{
    item.addEventListener('click',()=>{
        item.closest('[data-product-info]').remove();
        //من اجل تعديل السعر عند حذف احد الصفوف
        calculatetotalprice();  
    })
})
function calculatetotalprice(){
    let totalPriceForAllProduct=0;
          document.querySelectorAll('[data-product-info]').forEach(product =>{
            const pricePerunite=product.getAttribute('data-product-price');
            const qunatity=product.querySelector('[data-product-qunatity]').value;
            const totalPriceForProduct=pricePerunite * qunatity;
            totalPriceForAllProduct =totalPriceForAllProduct+totalPriceForProduct;
          })
          document.getElementById('total-price-for-all-product').innerHTML=totalPriceForAllProduct;
}
//اضهار قائمة المدن بالنسبة لكل دولة
const citiesByCountry={
    sa:['جدة','الرياض'],
    eg:['القاهرة','الاسكندرية'],
    jo:['عمان','الكرك'],
    sy:['دمشق','حلب','درعا'],
}
document.querySelectorAll('select[name="country"]').forEach(item =>{
item.addEventListener('change',() =>{
const country=item.value //جلب الدولة التي اختارها المستخدم
const cities=citiesByCountry[country]//جلب المدن الخاصة بالدولة

document.querySelectorAll('#paymentcities option').forEach(option =>option.remove())//حذف جميع اسماء المدن
//اضافة اختر مدينة 
const firstOption=document.createElement('option')
const optionText=document.createTextNode('اختر مدينة')
firstOption.appendChild(optionText)
firstOption.setAttribute('value','')
firstOption.setAttribute('disabled','true')
firstOption.setAttribute('selected','true')
const city_options=document.getElementById('paymentcities')
city_options.appendChild(firstOption)

cities.forEach(city => {
    const newOption=document.createElement('option')
    const optionText=document.createTextNode(city)
    newOption.appendChild(optionText)
    newOption.setAttribute('value',city)
    city_options.appendChild(newOption)

})
})
})
//اضهار واخفاء الحقول الخاصه بعملية الدفع حسب طريقة الدفع
document.querySelectorAll('#form-checkout input[name="payment-method"]').forEach(item =>{
    item.addEventListener('change', () =>{
        const paymentMethod = item.value;
        const creditCardInputs= document.querySelectorAll('#credit_card_info input');

        if(paymentMethod === 'on_delivery'){
            creditCardInputs.forEach(input =>{
                input.style.display='none'
            })
        }
        else{
            creditCardInputs.forEach(input =>{
                input.style.display='block'
            })
        }

    })
})

//year
document.getElementById('year').innerHTML = new Date().getFullYear();

