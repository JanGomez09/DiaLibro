

let Cls1_free = false;


function change(){
    Cls1_free = true;
    localStorage.setItem('Class 1', Cls1_free);
   

}

if (Cls1_free) {
    document.getElementById("check").textContent = "Disponible";
    console.log(Cls1_free);
} else {
    document.getElementById("check").textContent = "Ocupada";  
    console.log(Cls1_free);
}


function mainGO() {
    location.href='main.html'
}