const navbar = document.querySelector(".navbar");
navbar.querySelector(".toggle").addEventListener("click", () => {
    navbar.classList.toggle("collapsed");
});
window.addEventListener("scroll", e => {
    let windowY = window.pageYOffset;
    let navbarHeight = document.querySelector(".navbar").offsetHeight;
    if (windowY > navbarHeight) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");
});


























const dice = document.getElementById('dice-btn');

function dicegame() {
    var rondomDice = Math.floor((Math.random() * 6) + 1);
    var diceLocation = "img/" + "dice-" + rondomDice + ".png";
    var img = document.querySelectorAll("img")[0];
    img.setAttribute("src", diceLocation);




    var rondomDice2 = Math.floor((Math.random() * 6) + 1);
    var diceLocation2 = "img/" + "dice-" + rondomDice2 + ".png";
    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", diceLocation2);

    (function dices() {
        if (rondomDice > rondomDice2) {
            document.querySelector("h1").innerHTML = " Игрок 1 Победил!  ";
        } else
            if (rondomDice < rondomDice2) {
                document.querySelector("h1").innerHTML = " Игрок 2 Победил! ";
            } else
                if (rondomDice = rondomDice2) {
                    document.querySelector("h1").innerHTML = " Игроки 1 и 2 Победили! ";
                } else {
                    document.querySelector("h1").innerHTML = "Батушка как так";
                }



    })();



}




















