import { icons } from "./svgIcons.js";

const userPlaceholder = document.getElementById("userChoicePlaceholder");
const robotPlaceholder = document.getElementById("robotChoicePlaceholder");

document.getElementById("userIcon").innerHTML = icons.userProfile;
document.getElementById("robotIcon").innerHTML = icons.robot;
document.getElementById("versusIcon").innerHTML = icons.versus;
document.getElementById("swordsIcon").innerHTML = icons.swords;

document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        if (button.id === "rock") {
            userPlaceholder.innerHTML = icons.rock;
        } else if (button.id === "paper") {
            userPlaceholder.innerHTML = icons.paper;
        } else {
            userPlaceholder.innerHTML = icons.scissors;
        }
    });
});