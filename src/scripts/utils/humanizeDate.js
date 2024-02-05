import humanize from "./humanize.js"
import capitalize from "./capitalize.js"

export default function humanizeDate ($date, i){
    const datetime = $date.getAttribute("datetime")
    const humanizedDate = humanize(datetime) 
    console.log(humanizedDate, i)
    $date.textContent = capitalize(humanizedDate)
}