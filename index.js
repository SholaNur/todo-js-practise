

function getInfo(){
    var info = document.querySelector("input")
    var ul = document.querySelector("ul")
    var list = document.createElement("li")
    list.textContent = info.value;

    ul.appendChild(list);

}



document.querySelector("button").onclick = getInfo;





