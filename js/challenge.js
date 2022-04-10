////- See the timer increment every second once the page has loaded.

//- Manually increment and decrement the counter using the plus and minus buttons.

//- "Like" an individual number of the counter. I should see the count of the
  //number of "likes" associated with that number displayed.

//- Pause the counter, which should:
  //- pause the counter
  //- disable all buttons except the pause button
  //- switch the label on the button from "pause" to "resume"

//- Click the "restart" button to restart the counter and re//-enable the buttons.

//- Leave comments on my gameplay, such as: "Wow, what a fun game this is."

const plus = getElementById("plus")
const minus = getElementById("minus")



document.addEventListener("DomContentLoaded", () => {
  
   let interval = setInterval(incrementCounter, 1000)
  
   plus.addEventListener('click', incrementCounter())
  
   minus.addEventListener('click', () => {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) -1
   })
})



function counter(){
    incrementCounter()

}


function incrementCounter (){
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) +1
}

const heart = getElementById("heart")
const submit = getElementById("submit")


const pause = document.querySelector('#pause')
pause.addEventListener('click', () => {
           if(pause.innerText === "resume"){
               pause.innerText = "pause"
               interval = setInterval(incrementCounter, 1000)
           } else {
               interval.setInterval(incrementCounter, 1000)
           }


       minus.disabled = !minus.disabled 
       plus.disabled = !plus.disabled
       heart.disabled = !heart.disabled
       submit.disabled = !submit.disabled
       clearInterval(interval)
       pause.innerText = "resume" 

})

let commentForm = document.querySelector("#comment-form")
commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const list = document.getElementById("list")
    let li = document.createElement("li")
       li.innerText = e.target[0].value
       list.appendChild(li)
       commentForm.resest()

})