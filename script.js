import { userProfileIcon } from "./svgIcons.js";
import { robotIcon } from "./svgIcons.js";
import { versusIcon } from "./svgIcons.js";
import { swordsIcon } from "./svgIcons.js";
import { rockIcon } from "./svgIcons.js";
import { paperIcon } from "./svgIcons.js";
import { scissorsIcon } from "./svgIcons.js";

const userPlaceholder = document.getElementById("userChoicePlaceholder");

document.getElementById("userIcon").innerHTML = userProfileIcon;
document.getElementById("robotIcon").innerHTML = robotIcon;
document.getElementById("versusIcon").innerHTML = versusIcon;
document.getElementById("swordsIcon").innerHTML = swordsIcon;

document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        if (button.id === "rock") {
            userPlaceholder.innerHTML = rockIcon;
        } else if (button.id === "paper") {
            userPlaceholder.innerHTML = paperIcon;
        } else {
            userPlaceholder.innerHTML = scissorsIcon;
        }
    });
    button.addEventListener("mouseleave", () => {
        userPlaceholder.innerHTML = "";
    });
});