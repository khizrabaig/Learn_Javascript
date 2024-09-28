const URL=" https://api.thecatapi.com/v1/images/search?limit=10"
let paragragh= document.querySelector("#para");

let fun = async () => {
    let response= await fetch(URL);

    console.log(response);

    let data = await response.json();

    console.log(data);

}

fun();