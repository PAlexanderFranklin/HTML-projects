var button = document.querySelector("button");
button.addEventListener("click", function() {
    if(!(document.body.style.backgroundColor == "purple")) {
        document.body.style.backgroundColor = "purple";
    }
    else {
        document.body.style.backgroundColor = "white";
    }
});