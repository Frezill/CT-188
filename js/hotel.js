$(function () {
    $("#header").load("../components/header.html");
    $("#footer").load("../components/footer.html");
});
const buttons = document.getElementsByClassName('layout_head-button');
const buttonData = document.querySelectorAll('#layout_info > div');
    //Ẩn hiện nội dung các button
    Array.from(buttons).forEach((button,i) =>{
        button.addEventListener('click', ()=>{
            buttonData.forEach((data,j)=>{
                if (j===i) {data.classList.remove ('layout_info-hidden');}
                else {data.classList.add ('layout_info-hidden');}
            });
        });
    });

    //Đổi màu nút sau khi click
    Array.from(buttons).forEach((button,i)=>{
        button.addEventListener('click', function (event){
            Array.from(buttons).forEach((button,j)=>{
                if (j===i) {button.classList.add ('button_clicked');}
                else {button.classList.remove ('button_clicked');}
            });
        });
    });
//Đóng mở modal
const openModalbuttons=document.querySelectorAll('[data-modal-target]');
const closeModalbuttons=document.querySelectorAll('[data-close-button]');
const overlay= document.getElementById('overlay');
    //function đóng modal
    function openModal(modal){
        if (!modal) return;
        modal.classList.add('modal--active');
        overlay.classList.add('overlay--active');
    }
    // function hiện modal
    function closeModal(modal){
        if(!modal) return;
        modal.classList.remove('modal--active');
        overlay.classList.remove('overlay--active');
        
    }
    //Mở modal
    openModalbuttons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget); 
            openModal(modal);
    });  
    });
    //Đóng modal
    closeModalbuttons.forEach(button =>{
        button.addEventListener('click',()=>{
            const modal= button.closest('.modal');
            closeModal(modal);
        });
    });
    //Nhấn vào overlay và đóng modal
    overlay.addEventListener('click', ()=>{
        const modals= document.querySelectorAll('.modal--active');
        modals.forEach(modal =>{
           closeModal(modal);
        });
    });
// Truyền dữ liệu vào form
const bookingButtons=document.querySelectorAll('.Booking_button');
    bookingButtons.forEach(button =>{
        button.addEventListener('click', () =>{
            const bookingform=document.querySelector(button.dataset.modalTarget);
            const nameinForm=bookingform.querySelector('.hotel_res-name');
            const  name=button.closest('.layout_info-summary').querySelector('.layout_info-title');
            const namevalue=name.innerText;
            nameinForm.value=namevalue;
        });
    });
//Mở modal loading
const submitButton=document.querySelectorAll('.submit_button');
const loading=document.getElementById('loading_card');
const success=document.getElementById('Success_card');
const overlay2=document.getElementById('overlay2');
    submitButton.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            loading.style.display='flex';
            const bookingform=document.querySelector('.modal.modal--active');
            setTimeout(() => {
                if (bookingform) {
                    closeModal(bookingform);
                }
                overlay2.style.display='block';
                loading.style.display='none';
                success.style.display='block';
            }, 2000);
    });
    });
    overlay2.addEventListener('click', () =>{
        success.style.display='none';
        overlay2.style.display='none';
    });
