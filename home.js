const gbtn = document.getElementById("generate-btn");
let input = document.querySelector("#name");
let un = input.value;
gbtn.onclick = function () {
    console.log(un);
    if (input.value != "") {
        localStorage.setItem("name", input.value);
        window.location.href = "char.html";
        // generate();

    }
    else {
        alert("Please enter your name to generate your character.");
    }
}

