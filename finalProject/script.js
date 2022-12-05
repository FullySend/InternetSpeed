//Project 1 Code:
let inout1 = document.getElementById("inputname");
let yourN = document.getElementById("yourname");

inout1.on('keyup', function () {


    function timer() {
        let name = inout1.val();
        yourN.text(name);
    }


    setTimeout(timer, 3000);

});




//Project 2 Code:
let rangevalue = document.getElementById("myRange");
let setvalue = document.getElementById("rangevalue");
let imgchangevalue = docuemnt.getElementById("imgchange");

rangevalue.oninput = function() {
    let getvalue = rangevalue.ariaValueNow;
    setvalue.innerHTML = this.value;
    if (getvalue > 0 && getvalue < 16){
        imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1666720192286-9a09913ee6cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80")
    } else if (getvalue >= 17 && getvalue <= 33) {
        imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1666649013395-b10759afa8b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")
    } else if (getvalue >= 34 && getvalue <= 49) { 
        imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1666620657207-c748f7600a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80") 
    } else if (getvalue >= 50 && getvalue <= 66) { 
        imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1666636413703-961f0076185d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80") 
    } else if (getvalue >= 67 && getvalue <= 83) { 
        imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1666760012395-c63bf13fb188?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1894&q=80") 
    } else if (getvalue >= 84 && getvalue <= 99) { 
        imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1666791065993-f5109d7dd8d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80") 
    } else if (getvalue >= 100) { 
        imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1666473574287-0424cc6d0946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80") }
}


//Project 3 Code:
