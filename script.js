import { userProfileIcon } from "./svgIcons.js";
import { robotIcon } from "./svgIcons.js";
import { versusIcon } from "./svgIcons.js";
import { swordsIcon } from "./svgIcons.js";

document.getElementById("userIcon").innerHTML = userProfileIcon;
document.getElementById("robotIcon").innerHTML = robotIcon;
document.getElementById("versusIcon").innerHTML = versusIcon;
document.getElementById("swordsIcon").innerHTML = swordsIcon;

document.querySelectorAll(".buttons button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        console.log("Hovering:", button.id);
    });
});