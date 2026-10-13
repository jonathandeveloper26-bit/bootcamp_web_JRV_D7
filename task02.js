
var elem = document.querySelector('footer div');

elem.onclick = function() {
    console.log("Clicked");
    let name = "";
    let confirmed = false;
    while (!confirmed) {
        name = "";
        while (name == "") {
            name = prompt("What's your name?", "");
        }
 
        confirmed = confirm("Are you sure that "+name+" is your name?")
    }

    alert("Hello " + name + "!");

    elem.textContent = "Hello "+ name + "!";
}