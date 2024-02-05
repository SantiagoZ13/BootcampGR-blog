import humanize from "./utils/humanize.js"

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function humanizeDate ($date, i){
    const datetime = $date.getAttribute("datetime")
    const humanizedDate = humanize(datetime) 
    console.log(humanizedDate, i)
    $date.textContent = capitalize(humanizedDate)
}

function humanizeArticleDate(){
    const $dates = document.querySelectorAll("time")
    $dates.forEach(humanizeDate)
}

function sortByDate($a, $b){
    const dateA = new Date($a.querySelector("time").getAttribute("datetime"))
    const dateB = new Date($b.querySelector("time").getAttribute("datetime"))
    return dateB - dateA
}

function sortArticleByDate(){
    const $cards = document.querySelectorAll(".post-list .card")
    const $cardSorted = [...$cards].sort(sortByDate)
    const $postList = document.querySelector(".post-list");
    [...$postList.children].forEach($child => $child.remove())
    $postList.append(...$cardSorted)
}

function main(){
    humanizeArticleDate()
    sortArticleByDate()
}

main()