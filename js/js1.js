const jsTest = () => {    
    let inp1 = document.querySelector("input#inp1").value;
    let inp2 = document.querySelector("input#inp2").value;
    let xhr = new XMLHttpRequest();
    let url = "phptest.php";
    let screen = document.querySelector("p#result");
    let formData = new FormData();
    formData.append('num1', inp1);
    formData.append('num2', inp2);


    let option = {
        method: "POST",
        mode: "cors",
        body: formData
     }

 fetch(url, option)
   .then((response) => response.text())
     .then((data) => d.innerHTML = data)
     
}















