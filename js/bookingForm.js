// Truyền dữ liệu vào form
const bookingButtons = document.querySelectorAll('.Booking_button');
bookingButtons.forEach(button => {
    button.addEventListener('click', () => {
        const bookingform = document.querySelector(button.dataset.modalTarget);
        const nameinForm = bookingform.querySelector('.hotel_res-name');
        const name = button.closest('.layout_info-summary').querySelector('.layout_info-title');
        const namevalue = name.innerText;
        nameinForm.value = namevalue;
        clearInput();
        fetchFormSelectData(namevalue);
    });
});


const fetchFormSelectData = (hotelName) => {
    let hotel;
    hotelData.map((item) => {
        if (item.name === hotelName) {
            hotel = item;
        }
    })
    document.getElementById("roomType").innerHTML = "";
    document.getElementById("roomType").insertAdjacentHTML(
        'beforeend',
        `<option class="room-option" value="">Choose room type</option>`
    )
    hotel?.roomType.map((item) => (
        document.getElementById("roomType").insertAdjacentHTML(
            'beforeend',
            `<option class="room-option" value="${item.roomId}">${item.name} - ${item.price} / night</option>`
        )
    ))
}

const clearInput = () => {
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("firstName").value = '';
    document.getElementById("phone").value = '';
    document.getElementById("email").value = '';
    document.getElementById("roomType").value = '';
    document.getElementById("checkInDate").value = '';
    document.getElementById("checkOutDate").value = '';
    document.getElementById("numOfAdults").value = '';
    document.getElementById("numOfChildren").value = '';
    document.getElementById("specialRequests").value = '';
    document.getElementById("firstNameRes").value = '';
    document.getElementById("lastNameRes").value = '';
    document.getElementById("genderRes").value = '';
    document.getElementById("phoneRes").value = '';
    document.getElementById("emailRes").value = '';
    document.getElementById("arrivalDate").value = '';
    document.getElementById("checkInTime").value = '';
    document.getElementById("numOfAdultsRes").value = '';
    document.getElementById("numOfChildrenRes").value = '';
    document.getElementById("specialRequestsRes").value = '';
}

const handleBookingHotelButton = (event) => {
    event.preventDefault();
    let hotelBookingData = {
        id: "",
        hotelId: "",
        roomId: "",
        firstName: "",
        lastName: "",
        gender: "",
        phone: "",
        email: "",
        checkInDate: "",
        checkOutDate: "",
        numOfAdults: "",
        numOfChildren: "",
        specialRequests: ""
    }
    let uniqueId = 'id' + (new Date()).getTime();  // id for booking
    const hotelName = document.getElementById("hotelName").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const roomType = document.getElementById("roomType").value;
    const checkInDate = document.getElementById("checkInDate").value;
    const checkOutDate = document.getElementById("checkOutDate").value;
    const numOfAdults = document.getElementById("numOfAdults").value;
    const numOfChildren = document.getElementById("numOfChildren").value;
    const specialRequests = document.getElementById("specialRequests").value;

    let hotel;
    hotelData.map((item) => {
        if (item.name === hotelName) {
            hotel = item;
        }
    })
    hotelBookingData = {
        ...hotelBookingData,
        id: uniqueId,
        hotelId: hotel.id,
        roomId: roomType,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        phone: phone,
        email: email,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        numOfAdults: numOfAdults,
        numOfChildren: numOfChildren,
        specialRequests: specialRequests
    }

    //validate check-in & check-out date
    if (checkInDate > checkOutDate) {
        alert("Check-in date must before check-out date");
        return;
    }
    let dayNow = new Date()
    dayNow = dayNow.toISOString().split('T')[0];


    if (checkInDate < dayNow) {
        alert("Invalid check-in date")
        return;
    }

    let hotelBookingResult = localStorage.getItem("hotelBookingResult");
    hotelBookingResult = JSON.parse(hotelBookingResult)

    if (hotelBookingResult === null) {
        hotelBookingResult = [hotelBookingData];
    } else {
        hotelBookingResult = [...hotelBookingResult, hotelBookingData];
    }
    hotelBookingResult = JSON.stringify(hotelBookingResult)
    localStorage.setItem("hotelBookingResult", hotelBookingResult)

    loading(event);
}

const handleBookingRestaurantButton = (event) => {
    event.preventDefault();
    let restaurantBookingData = {
        id: "",
        restaurantId: "",
        firstName: "",
        lastName: "",
        gender: "",
        phone: "",
        email: "",
        arrivalDate: "",
        checkInTime: "",
        numOfAdults: "",
        numOfChildren: "",
        specialRequests: ""
    }
    let uniqueId = 'id' + (new Date()).getTime();  // id for booking
    const restaurantName = document.getElementById("restaurantName").value;
    const firstName = document.getElementById("firstNameRes").value;
    const lastName = document.getElementById("lastNameRes").value;
    const gender = document.getElementById("genderRes").value;
    const phone = document.getElementById("phoneRes").value;
    const email = document.getElementById("emailRes").value;
    const arrivalDate = document.getElementById("arrivalDate").value;
    const checkInTime = document.getElementById("checkInTime").value;
    const numOfAdults = document.getElementById("numOfAdultsRes").value;
    const numOfChildren = document.getElementById("numOfChildrenRes").value;
    const specialRequests = document.getElementById("specialRequestsRes").value;




    let restaurant;
    restaurantData.map((item) => {
        if (item.name === restaurantName) {
            restaurant = item;
        }
    })

    restaurantBookingData = {
        ...restaurantBookingData,
        id: uniqueId,
        restaurantId: restaurant.id,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        phone: phone,
        email: email,
        arrivalDate: arrivalDate,
        checkInTime: checkInTime,
        numOfAdults: numOfAdults,
        numOfChildren: numOfChildren,
        specialRequests: specialRequests
    }

    //validate arrival date
    let dayNow = new Date()
    dayNow = dayNow.toISOString().split('T')[0]
    if (arrivalDate < dayNow) {
        alert("Invalid arrival date")
        return;
    }

    let restaurantBookingResult = localStorage.getItem("restaurantBookingResult");
    restaurantBookingResult = JSON.parse(restaurantBookingResult)

    if (restaurantBookingResult === null) {
        restaurantBookingResult = [restaurantBookingData];
    } else {
        restaurantBookingResult = [...restaurantBookingResult, restaurantBookingData];
    }
    restaurantBookingResult = JSON.stringify(restaurantBookingResult)
    localStorage.setItem("restaurantBookingResult", restaurantBookingResult)

    loading(event);
}

const loading = (event) => {
    //Mở modal loading
    const loading = document.getElementById('loading_card');
    const success = document.getElementById('Success_card');
    const overlay2 = document.getElementById('overlay2');
    event.preventDefault();
    loading.style.display = 'flex';
    const bookingform = document.querySelector('.modal.modal--active');
    setTimeout(() => {
        if (bookingform) {
            closeModal(bookingform);
        }
        overlay2.style.display = 'block';
        loading.style.display = 'none';
        success.style.display = 'block';
    }, 2000);
    overlay2.addEventListener('click', () => {
        success.style.display = 'none';
        overlay2.style.display = 'none';
    });

}