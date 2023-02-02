var archive = [];

document.querySelector(".name").value
document.querySelector(".password").value

function getData(){
    var name = document.querySelector(".name").value;
    var password = document.querySelector(".password").value;
    
    archive.push(name,password);
    console.log(archive);
}

document.querySelector("button").onclick = getData;
