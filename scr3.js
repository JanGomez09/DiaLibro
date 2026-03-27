// pagina de login

const users = {
    cls1: "_woneralizing_7A_.",
    cls2: "_drankkulcc_12A_.",
    cls3: "_alpolkamipz_10D_.",
    cls4: "_haznelgratel_7E_.",
    cls5: "_pretzelpanke_7C_.",
    cls6: "_dragonsmovie_11D_.",
    //pabellon 2
    cls19: "_glorianamepidioun67_10B_.",
    lab1: "_heracklesjobing_11A_.",
    lab4: "_movilizeddick_11B_.",
    lab5: "_carolinanortheste_7B_.",
    //pabellon 3
    cls7: "_jugosambrientos_12B_.",
    cls8: "_gatsbingbigering_10E_.",
    cls9: "_gravewifetotalyded_8A_.",
    cls10: "_narnianiarniaana_12C_.",
    cls12: "_franklinsdaerias_11C_.",
    //pabellon 4
    cls13: "_sheromlelocksgood_9D_.",
    cls15: "_punzaderapunzel_8C_.",
    cls16: "_maltildadaslam_8B_.",
    cls17: "_nicolasypablomatch_10C_.",
    cls18: "_spinosochos_7D_.",
    //area tecnica
    wsh1: "_aladdinmagicslamp_9A_.",
    wsh2: "_losanillosdelseñor_9B_.",
    wsh3: "_cruellacruelacruela_9C_.",
    wsh4: "_pidrasfilosofalespotter_8F_.",
    wsh6: "_jumanjimanjimanjumanji_9E_.",
    wsh7: "_momialamiamomiasas_11E_.",
    wsh8: "_elnormalmundodejacks_8D_.",
    wsh9: "_elozomagozodeoz_8E_.",
    wsh10: "_mazerunneringmaze_10A_.",
}



function logIn(){
    let user = document.getElementById("name").value; 
    let pass = document.getElementById("pass").value; 
    for (let key in users) {
        if (users[key] === user && pass == "29_admings") {
            console.log("adelante");
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "Mofidicacion_Responsive.html";

            break;
        } else {
            console.log("usuario no encontrado");
            
        }
    }
}
