let travel_buttons = document.querySelectorAll(".travel-button");

let partners_travel = () => {
    document.getElementById("partners").scrollIntoView({block: 'start', behavior: 'smooth'});
    return false;
}

let products_travel = () => {
    document.getElementById("products").scrollIntoView({block: 'start', behavior: 'smooth'});
    return false;
}

let contacts_travel = () => {
    document.getElementById("contacts").scrollIntoView({block: 'start', behavior: 'smooth'});
    return false;
}

travel_buttons.forEach(el => {
    switch(el.id) {
        case "partners-travel":
            el.onclick = partners_travel;
            break;
        case "products-travel":
            el.onclick = products_travel;
            break;
        case "contacts-travel":
            el.onclick = contacts_travel;  
            break;  
    }
});