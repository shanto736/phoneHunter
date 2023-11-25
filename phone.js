const loadphone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}
const displayPhones = phones =>{
        const phoneContainer = document.getElementById('phone-container');
        phoneContainer.textContent= '';
        const showAllContainer = document.getElementById('show-all-container');
        if(phones.length >12){
            showAllContainer.classList.remove('hidden');
        }
        else{
            showAllContainer.classList.add('hidden');
        }
        phones = phones.slice(0,12);
    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList= `card bg-base-100 bg-sky-200 p-4 shadow-xl`;
        phoneCard.innerHTML=`
        <figure><img src="${phone.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        ` 
        phoneContainer.appendChild(phoneCard);
    });toggleLoadingSpinner(false);
}
const handleSearch = () =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //toggleLoadingSpinner();
    console.log(searchText);
    loadphone(searchText);
}
const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
if(isLoading){
    loadingSpinner.classList.remove('hidden');
}else{
    loadingSpinner.classList.add('hidden');
}
}
loadphone();