let button = document.querySelector("button");


button.addEventListener('click', function (event){
    let user_input = document.getElementById("listItem");
    let newElement = document.createElement('div');
    newElement.textContent = user_input.value;

    user_input.parentNode.insertBefore(newElement, user_input.nextSibling)
    user_input.value = "";
})