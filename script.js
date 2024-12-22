const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist&type=single&idRange=0-50";
let getjoke =()=>{
    fetch(url)
    .then(data=>data.json())
    .then(iteam=>{
        document.querySelector(".jokecon").innerHTML=iteam.joke;
    });
}
getjoke();
