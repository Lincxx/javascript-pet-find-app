// Validate Zipcode

export function isValidZip(zip){
    return /^\d{5}(-\d{4})?$/.test(zip);
}

//Display Alert Message 
export function showAlert(message, className){
    //cteate div

    const div = document.createElement('div');
    div.className = `alert alert-${className}`;

    //add text 
    div.appendChild(document.createTextNode(message));

    //get container
    const container = document.querySelector('.container');

    //get form
    const form = document.querySelector('#pet-form')

    container.insertBefore(div, form);

    setTimeout(()=>{
        document.querySelector(".alert").remove();
    },3000)
}