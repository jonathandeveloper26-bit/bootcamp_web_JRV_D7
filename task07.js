
let footer = document.querySelector('footer')
let banner = footer.querySelector('div');
let link = banner.querySelector('a');

const delete_cookie_btn = document.createElement("button");
delete_cookie_btn.textContent = "Delete this Cookie";

function showDeleteBtn() {
    banner.style.display = "none";
    footer.append(delete_cookie_btn);
}

if (document.cookie.includes("clicked=true")) {
    showDeleteBtn();
}

link.addEventListener('click', function(event){
    document.cookie = "clicked=true; max-age=86400";
    showDeleteBtn();
})

delete_cookie_btn.addEventListener('click', function(event) {
    document.cookie = "clicked=false; max-age=0";
    delete_cookie_btn.remove();
    banner.style.display="";
})