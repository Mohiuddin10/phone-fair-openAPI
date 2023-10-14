

const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phone = data.data;
    displayPhone(phone);
}

const displayPhone = phone => {
    const phoneCard = document.getElementById('phoneCard');
    const showBtn = document.getElementById('showAllBtn');
    if (phone.length > 12) {
        showBtn.classList.remove('hidden');
    }
    else {
        showBtn.classList.add('hidden');
    }
    // display first 10 phone 
    phone = phone.slice(0,10);
    phoneCard.textContent = ``;
    phone.forEach(phn => {
        console.log(phn);
        const phoneCardS = document.createElement('div');
        phoneCardS.classList.add = "card p-4 bg-base-100 shadow-xl";
        phoneCardS.innerHTML = `
        <figure><img class='mx-auto' src="${phn.image}" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title mx-auto">${phn.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <h3>$999</h3>
                <div class="card-actions justify-end">
                <button onclick="handleShowDetails('${phn.slug}')" class="btn btn-primary mx-auto">Show Details</button>
                </div>
            </div>
        `;
        phoneCard.appendChild(phoneCardS);
    });

    toggleLoadingSpinner(false);
};

const handleSearch = () => {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value;
    loadPhones(searchText);
    searchField.value = '';
    toggleLoadingSpinner(true);
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
    
}

// show details 
const handleShowDetails = id => {
    console.log(id);
}