//Project 1:

    
//Code was the working on here for some reason, moved into the HTML


//Project 2:


window.addEventListener("load", function () {
    console.log("window loaded")
let setvalue = document.getElementById("rangevalue");
let imgchangevalue = document.getElementById("imgchange");
let rangeValue = document.getElementById("myRange");

    rangeValue.addEventListener("mouseup", function() {
    console.log("input works")
    let getvalue = rangeValue.value;
    setvalue.innerHTML = this.value;
    if (getvalue > 0 && getvalue < 16){
        imgchangevalue.setAttribute("src", "https://previews.dropbox.com/p/thumb/ABvAMEwdF95O1TvaWC1DCis0KLdOVbaNT1xnJrotosJhxls385r9iESJfuwfmq30LcbJbSdMeFnAJX7r0JCyGtzyDH4_d4WwJykBmDwoMF5tIycAqxEs4NwUIz_MBM3SXTSRqQClGOFU9fLgoVHy9eSQg-O5-_Jr86BDRden36yQgv3YItO_QBnXz8kLzZpaqskU4esEfbk3DTzx3gQyIeGiKXJR1Oo8KyqKUrABCph7i2_pUNyU_XZ8Mzdq46qFjhS0ZDREnz7rUT5Ezh-4YJ19mz91O3SMPBpj3ni6ZJZ0hgO_c3bHe08gM7TWG7ztijfwGaitLU4BnE2chpKXX5_KdZXprGFnqp-fE9Qk9usODmHIhm6IqCsBipSgJz3XbG8/p.jpeg")
    } else if (getvalue >= 17 && getvalue <= 33) {
        imgchangevalue.setAttribute("src", "https://previews.dropbox.com/p/thumb/ABsZ5QFMHhr60_BW_jxT1XQ0JyXJE5Uzck3x0BSJ0sUPw3l4G60BDC4Hy3FqX4WJU_sHXy2ByAWvuoMG5j_Yqw8aFLRuwib0XE1ze6TwpnFKq2xsSCYVzrkQzT1erDXdAdnK9XcHS402AIUbidfYNUY8UxPiMId4O4eE3s8eeLK4LQ07kuhXcOCQdpBN397d5uK8dPnaaVkRzSfRp7FpfNtB3zKb8k4B8GhiZQuoj8Gx5DnBc0T6Ho2L5421vYPNP4Lq2oPRiTFLadEqQXJ6lKpohGNCFHdEKwPs48eijQNAgREtkiY05vNdDUhdnmNYy8vFvYBh3H2VGfYQzy7iByloi2tf_nQc33ZQAwGXMiN6hdARCDip49f66ZFgLl4ChSo/p.jpeg")
    } else if (getvalue >= 34 && getvalue <= 49) { 
        imgchangevalue.setAttribute("src", "https://previews.dropbox.com/p/thumb/ABuNs78b7opLD6Qn5EBpmx39xX7qj4_m-OlAY98kS1YDgXE6JTX68OXtX-GmzmvdaMf_slQYBoDDOjfl_f3LxPWDGI5ZB6caD1g_KjkdaIqCXkR0n_n1aQEIUfRPcqeejkFMNxXLQx6ThifC1YzHNPTl06awGMSUVoAeH4nJfmuFB3H4D7uN7s5dsCGPoK3n-iwcbAo-KeVe3BMNz1DbVTWG6czJsjHq9HwLS-TRROqnmTT4R47DV1s7yRukztxd0mrGyJGEg40TQ4igMPKKVndnCGFwBSREdA2NQ9pBbb6OKaPtePfhCjSOz0ZUJr1haNc-3ybWCbBcxCzNnVKkn3iauhWMtix8ypevgGixtEcHY4VsqKniSB1-8kEI6aH5I9I/p.jpeg") 
    } else if (getvalue >= 50 && getvalue <= 66) { 
        imgchangevalue.setAttribute("src", "https://previews.dropbox.com/p/thumb/ABs5QTDW-vxq3PkZdcPpyC4bl5qiUY43fgvTAbhBsp3rdhaxeKQ1EsMcrVIaBhO68runCxKEdxZ5GtNdt3vdjijqjKBljHG7hsvQFpiOud0mxgXavwJrGOlPjs85rwdIcXqF5KmIDsOYTD-u3SbKGpG4QbdGF5YFj5g4lxh4Ti-Jx6Izpxxe5fYHFQNdxzmlS4qIhLynORld7nrobs-gLHBwLe32inhJxQA-ABLDaId848EUKy-mbup9oeKszJEstXFFig_FgM49YQjtDBCI4274lgcsNuvjR-Y8sFS2Vk61XhMjxBP6mVhrm3njypdoCOMf3q-pLheo9s3KP1XScIxJtSibAZfXAIlO80rmtVHIsHwhdHuarGQ2hNfGTXy6ugM/p.jpeg") 
    } else if (getvalue >= 67 && getvalue <= 83) { 
        imgchangevalue.setAttribute("src", "https://previews.dropbox.com/p/thumb/ABuTDkw2DUZoXmoCAtNUp5NaLouxrzSa_ksb6h9NkU8UB0izA9e6zNbBIEjypNfGsRd1JMgLnQEK_vLDuiCpwPl8nlV6LXFU3MS6b3BE9ahLSZaj4bg49WTTIFfnf-23_NaOYzRrCFVXz2-kuHQRb0WoG4Itjh6iW4YUEO5h1_Q9q9MM7JkH_qg1eMjCFt01lqQjiqrlmsI_HW-5h4s8eTqIB2lu7Pd9P47MdQGayFCZL6y7HCjI5Y_BV104XN0a_uVrFvfL1fXGae6FWnJ4qPmgxhK1ueMsOHP2-35PgrHrx9-bCIqdcM40cFNY8GkO0BnWNCQ21wOPElgC_N4lFId4VesudT2uIgBfjlvqb7YcNeLpbHfXkJlxZ-z1HgpfPbA/p.jpeg") 
    } else if (getvalue >= 84 && getvalue <= 100) { 
        imgchangevalue.setAttribute("src", "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") 
    }
    })})

//Project 3
function startTest() {
    var imgAddr = "http://upload.wikimedia.org/wikipedia/commons/2/2d/Snake_River_%285mb%29.jpg" + "?n=" + Math.random();
    var startTime, endTime;
    var download_size = 5*1024*1024;
    var img = new Image();
    img.onload = function () {
        endTime = (new Date()).getTime();
        ShowData();
    }
    startTime = (new Date()).getTime();
    img.src = imgAddr;
    
    function ShowData()
    {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = download_size * 8;
        var speedMbps = ((bitsLoaded / duration) / 1024 / 1024).toFixed(2);
        alert("Speed: " + speedMbps + " Mbps");
    }
}
    /*This code displays an alert prompting the user to click "OK" to start a test.
     Next, a variable is set which stores the address of an image file. Two more variables
      are set which will be used to store the start and end time of the test. A new Image 
      is then created and an event listener is set which will run the ShowData() function 
      when the image has finished loading. The start time is then set, and the image source 
      is set to the image address. Finally, the ShowData() function is defined, which calculates 
      the duration of the test, the bits loaded, and the speed in Mbps. An alert then displays
      the calculated speed.*/
      