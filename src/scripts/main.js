import sortByDate from "./utils/sortByDate.js"
import humanizeDate from "./utils/humanizeDate.js"

function humanizeArticleDate(){
    const $dates = document.querySelectorAll("time")
    $dates.forEach(humanizeDate)
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