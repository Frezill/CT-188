$(function () {
    $("#header").load("../components/header.html");
    $("#footer").load("../components/footer.html");
});
const buttons = document.getElementsByClassName('layout_head-button');
const buttonData = document.querySelectorAll('#layout_info > div');

//Fetch hotel 
(function fetchHotel() {
    hotelData.map((item) => {
        document.getElementById("layout_info-hotel").getElementsByClassName("layout_info-flexcontainer")[0].insertAdjacentHTML(
            'beforeend',
            `<article class="layout_info-card">
                <img src="${item.mainImage}" class="layout_info-img">
                <div class="layout_info-content">
                    <div class="layout_info-summary">
                        <h3 class="layout_info-title">${item.name}</h3>
                        <p class="layout_info-address">${item.layoutAddress}</p>
                        <div class="layout_info-utilities">
                            ${item.utilities.map((utility) => `<p>${utility}</p>`).join('')}
                        </div>
                        <div class="layout_info-button">
                            <button data-modal-target="#${item.id}">More details</button>
                            <button data-modal-target="#booking-hotel" class="Booking_button">Booking</button>
                        </div>
                    </div>
                    <div class="layout_info-rv_price">
                        <div class="layout_info-review">
                            <p class="layout_info-review-word">${item.popularity}</p>
                            <p class="layout_info-review-point">${item.point}</p>
                        </div>
                        <p class="layout_info-price">${item.layoutPrice}</p>
                    </div>
                </div>
            </article>`
        );
    });
})();

//Fetch restaurant 
(function fetchRestaurant() {
    restaurantData.map((item) => {
        document.getElementById("layout_info-restaurant").getElementsByClassName("layout_info-flexcontainer")[0].insertAdjacentHTML(
            'beforeend',
            `<article class="layout_info-card">
                            <img src="${item.mainImage}"
                                class="layout_info-img">
                            <div class="layout_info-content">
                                <div class="layout_info-summary">
                                    <h3 class="layout_info-title">${item.name}</h3>
                                    <p class="layout_info-address">${item.layoutAddress}</p>
                                    <div class="layout_info-utilities">
                                        ${item.utilities.map((utility) => `<p>${utility}</p>`).join('')}
                                    </div>
                                    <div class="layout_info-button">
                                        <button data-modal-target="#${item.id}">More details</button>
                                        <button data-modal-target="#booking-restaurant"
                                            class="Booking_button">Booking</button>
                                    </div>
                                </div>
                                <div class="layout_info-rv_price">
                                    <div class="layout_info-review">
                                        <p class="layout_info-review-word">${item.popularity}</p>
                                        <p class="layout_info-review-point">${item.point}</p>
                                    </div>
                                    <div class="layout_info-lowest-price">
                                        <h4>Lowest price</h4>
                                        <p>${item.layoutPrice}</p>
                                    </div>
                                </div>
                            </div>
                        </article>`
        );
    });
})();

// Fetch hotel detail modal
(async function fetchHotelDetailModal() {
    await hotelData.map((item) => {
        document.getElementById("layout").insertAdjacentHTML(
            'beforeend',
            `<div class="modal" id="${item.id}">
                <div class="modal_header">
                    <div class="modal_title">${item.name}</div>
                    <button data-close-button class="modal_close-button">&times;</button>
                </div>
                <div class="modal_content">
                    <div class="modal_img-gallery">
                        <div class="modal_main-img">
                            <img src="${item.mainImage}">
                        </div>
                        <div class="modal_sub-img">
                            ${item.modalImages.map((image) => (`<img src="${image}"/>`)).join('')}
                        </div>
                    </div>
                    <div class="modal_add-rv-description">
                        <section class="modal_description">
                            <h4>Descriptions</h4>
                            <p>${item.description}</p>
                        </section>
                        <section class="modal_address">
                            <h4>Address</h4>
                            <p>${item.address}</p>
                            <iframe
                                src="${item.map}"
                                style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade" class="modal_address-map">
                            </iframe>
                        </section>
                        <section class="modal_review">
                            <h3 class="modal_review-point">${item.point}/10</h4>
                                <div class="modal_review-word">
                                    <h4>${item.popularity}</h4>
                                    <p>${item.reviews} reviews</p>
                                </div>
                        </section>
                    </div>
                    <section class="modal_facilities">
                        <h4>Facilities</h4>
                        <ul class="modal_facilities-content">
                            ${item.facilities.map((facility) => `<li>${facility}</li>`).join('')}
                        </ul>
                    </section>
                    <section class="modal_contacts">
                        <h4>Contacts</h4>
                        <div class="modal_contacts-link">
                            <a href="${item.facebook}"><i class="fab fa-facebook"></i></a>
                            <a href="${item.website}"><i class="fas fa-globe"></i></a>
                            <a href="${item.phone}"><i class="fas fa-phone"></i></a>
                            <a href="${item.mail}"> <i class="fas fa-envelope"></i></a>
                        </div>
                </div>
            </div>
            `
        );
    });
})();

//Fetch restaurant detail modal
(function fetchRestaurantDetailModal() {
    restaurantData.map((item) => {
        document.getElementById("layout").insertAdjacentHTML(
            'beforeend',
            `
            <div class="modal" id="${item.id}">
                <div class="modal_header">
                    <div class="modal_title">${item.name}</div>
                    <button data-close-button class="modal_close-button">&times;</button>
                </div>
                <div class="modal_content">
                    <div class="modal_img-gallery">
                        <div class="modal_main-img">
                            <img src="${item.mainImage}">
                        </div>
                        <div class="modal_sub-img">
                            ${item.modalImages.map((image) => (`<img src="${image}"/>`)).join('')}
                        </div>
                    </div>
                    <section class="modal_oppening-time">
                        <h4>Openning time:</h4>
                        <p>${item.openTime}</p>
                    </section>
                    <div class="modal_add-rv-description">
                        <section class="modal_description">
                            <h4>Descriptions</h4>
                            <p>${item.description}</p>
                        </section>
                        <section class="modal_address">
                            <h4>Address</h4>
                            <p>${item.address}</p>
                            <iframe
                                src="${item.map}"
                                style="border:0;" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade" class="modal_address-map"></iframe>
                        </section>
                        <section class="modal_review">
                            <h3 class="modal_review-point">${item.point}/10</h3>
                            <div class="modal_review-word">
                                <h4>${item.popularity}</h4>
                                <p>${item.reviews} reviews</p>
                            </div>
                        </section>
                    </div>
                    <section class="modal_facilities">
                        <h4>Features</h4>
                        <ul class="modal_facilities-content">
                            ${item.facilities.map((facility) => `<li>${facility}</li>`).join('')}
                        </ul>
                        <h4>Price range: <span class="modal_facilities-price">${item.priceRange}</span></h4>
                    </section>
                    <section class="modal_contacts">
                        <h4>Contacts</h4>
                        <div class="modal_contacts-link">
                            ${item.facebook && `<a href="${item.facebook}"><i class="fab fa-facebook"></i></a>`}
                            ${item.website && `<a href="${item.website}"><i class="fas fa-globe"></i></a>`}
                            ${item.phone && `<a href="${item.phone}"><i class="fas fa-phone"></i></a>`}
                            ${item.mail && `<a href="${item.mail}"> <i class="fas fa-envelope"></i></a>`}
                        </div>
                </div>
            </div>
            `
        );
    });
})();

//Ẩn hiện nội dung các button
Array.from(buttons).forEach((button, i) => {
    button.addEventListener('click', () => {
        buttonData.forEach((data, j) => {
            if (j === i) { data.classList.remove('layout_info-hidden'); }
            else { data.classList.add('layout_info-hidden'); }
        });
    });
});

//Đổi màu nút sau khi click
Array.from(buttons).forEach((button, i) => {
    button.addEventListener('click', function (event) {
        Array.from(buttons).forEach((button, j) => {
            if (j === i) { button.classList.add('button_clicked'); }
            else { button.classList.remove('button_clicked'); }
        });
    });
});

//Đóng mở modal
const openModalbuttons = document.querySelectorAll('[data-modal-target]');
const closeModalbuttons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

//function đóng modal
function openModal(modal) {
    if (!modal) return;
    modal.classList.add('modal--active');
    overlay.classList.add('overlay--active');
}
// function hiện modal
function closeModal(modal) {
    if (!modal) return;
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
closeModalbuttons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});
//Nhấn vào overlay và đóng modal
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal--active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});


