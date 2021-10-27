/* document.getElementById("headline").classList.add("font")
document.getElementById("list").classList.add("listing") */

let headLine = document.getElementById("headline")
let ulList = document.getElementById("list")

function changeHeadline() {
    console.log(changeHeadline)
    document.getElementById("headline").classList.add("font", "listing")
}

function resetHeadline() {
    console.log("läuft")
    headLine.classList.remove("font", "listing")

}