// API
const API_ENDPOINT = 'https://yesno.wtf/api';
var div = document.getElementById("answer");
var btn = document.getElementById("button");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (validation()) {
        getData();
    }//if
});//event
const getData = () => {
    let promesa = fetch("https://yesno.wtf/api", {
        method: "GET"
    });
    promesa.then((response) => {
        response.json().then((data) => {
            console.log(data.answer);
            div.innerText = data.answer;
            console.log(typeof (data));
            const cronometro = setTimeout(clear, 5000);
        }).catch((error) => {
            console.error(error);
        });
    }).catch((error) => {
        console.log("error " + error);
    })
}//getData



function clear() {
    answer.innerText = "";
    document.getElementById("input").value = '';
}

function validation() {
    if (document.getElementById("input").value) {
        return true;
    } else {
        console.log("favor de ingresar los datos requeridos");
        return false;
    }

}
/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */