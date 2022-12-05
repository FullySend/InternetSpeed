//Project 1 Code:
    // Get the value of the input box
    
    let box = document.getElementById("inputBox")
    box.addEventListener("keyup", function() {
    // Delay code execution by 3 seconds
    let inputValue = document.getElementById("inputBox").value;
    setTimeout(function() {
      
      let p = document.getElementById("p")
      p.innerHTML = inputValue;
      console.log(inputValue)
    }, 3000)})



//Project 2 Code:
window.addEventListener("load", function () {
let setvalue = document.getElementById("rangevalue");
let imgchangevalue = document.getElementById("imgchange");
let rangeValue = document.getElementById("myRange");

rangeValue.addEventListener("mouseup", function() {
    console.log("input works")
    let getvalue = rangeValue.value;
    setvalue.innerHTML = this.value;
    if (getvalue > 0 && getvalue < 16){
        imgchangevalue.setAttribute("src", "20_image.jpeg")
    } else if (getvalue >= 17 && getvalue <= 33) {
        imgchangevalue.setAttribute("src", "40% image.jpeg")
    } else if (getvalue >= 34 && getvalue <= 49) { 
        imgchangevalue.setAttribute("src", "60% image.jpeg") 
    } else if (getvalue >= 50 && getvalue <= 66) { 
        imgchangevalue.setAttribute("src", "80% image.jpeg") 
    } else if (getvalue >= 67 && getvalue <= 83) { 
        imgchangevalue.setAttribute("src", "100% image.jpeg") 
    } else if (getvalue >= 84 && getvalue <= 100) { 
        imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") 
    }
    })})
//Project 3 Code:
