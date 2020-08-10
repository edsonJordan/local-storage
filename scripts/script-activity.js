import {Builderactivity} from "./activity.js";
const activity = new Builderactivity()
                    .setActivity("trabajo")
                    .setFecha("10/10/2020")
                    .build();                                       
/* console.log(activity.getActivity);
console.log(activity.getFecha);*/                                  
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let actividad= document.getElementById("actividad"), fecha= document.getElementById("fecha");        
    if(fecha.value.length == 0 || actividad.value.length == 0){
        console.log("Esta vacio uno de los 2 campos");        
    }else{    
        const procedure = new Builderactivity()
                        .setFecha(fecha.value)
                        .setInputform("form")
                        .setValform('form')
                        .setActivity(actividad.value)
                        .build();  
        //console.log(procedure.getValform);                                                              
        let getlocal= JSON.parse(localStorage.getItem('prueba'));                                
        if(getlocal === null){
            localStorage.setItem('prueba', JSON.stringify([procedure.getValform])) 
        }else{
            getlocal.push(procedure.getValform)                            
            localStorage.setItem('prueba', JSON.stringify(getlocal))
            location.reload();
        }                                                                       
        procedure.clearInput();
    }
})






