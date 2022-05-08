/*--------------------------------------------------------------
// # Getting all buttons to add EventListener
--------------------------------------------------------------*/
const buttons = document.querySelectorAll(".num button");

/*--------------------------------------------------------------
// # Select Submit button 
--------------------------------------------------------------*/
const submit = document.getElementById("submit");

/*--------------------------------------------------------------
// # Select result span to show the result of rate on it 
--------------------------------------------------------------*/
const result = document.getElementById("result");

/*--------------------------------------------------------------
// # Local reference to store the rate in it 
--------------------------------------------------------------*/
let selected = "";

/*--------------------------------------------------------------
// # Add EventListener to all buttons and select the textContent
// # when user click on target btn
--------------------------------------------------------------*/
buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        selected = e.target.textContent
        if(document.querySelector('.selected')){    
            document.querySelector('.selected').classList.remove('selected');
            }else{
                ("");
            }
        e.target.classList.add('selected');
    })
})

/*--------------------------------------------------------------
// # Add EventListener to submt btn to show the result
// # in result span
--------------------------------------------------------------*/
submit.addEventListener("click", (e) => {
    if (selected === "") {
        return
    }
    result.textContent = `${selected}`
    content1.classList.add("d-none");
    content2.classList.remove("d-none");
});