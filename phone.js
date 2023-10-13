const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phone = data.data;
    displayPhone(phone);
}

const displayPhone = phone => {
    console.log(phone);
    const phoneCard = document.getElementById('phoneCard');
    phoneCard.textContent = ``;
    phone.forEach(phn => {
        const phoneCardS = document.createElement('div');
        phoneCardS.classList.add = "card p-4 bg-base-100 shadow-xl";
        phoneCardS.innerHTML = `
        <figure><img class='mx-auto' src="${phn.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title mx-auto">${phn.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <h3>$999</h3>
                <div class="card-actions justify-end">
                <button class="btn btn-primary mx-auto">Buy Now</button>
                </div>
            </div>
        `;
        phoneCard.appendChild(phoneCardS);
    });

}

const handleSearch = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    loadPhones(searchText);
    searchField.value = '';
}