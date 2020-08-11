import {Builderactivity} from "./activity.js";
const activity = new Builderactivity()
                    .setActivity("trabajo")
                    .setFecha("10/10/2020")
                    .build();                                       
/* console.log(activity.getActivity);
console.log(activity.getFecha);*/         
/* document.getElementById("btn-form").addEventListener('click', (e)=>{
    document.getElementById("form").submit();
    e.preventDefault();
})      */                     
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
            location.reload();
        }else{
            getlocal.push(procedure.getValform)                            
            localStorage.setItem('prueba', JSON.stringify(getlocal))
            location.reload();
        }                                                                       
        procedure.clearInput();
    }
})
/* Display modals */
document.getElementById("calendary-modal").addEventListener("click", (e)=>{
    
    
    const event = e.target;
    if(event.id === "calendary-modal"){        
        const modal= document.getElementsByClassName("modal");
        for (let mod of modal) {
            mod.classList.add("none");                
        }
        document.getElementById("calendary-modal").classList.add("none");      
    }
    
})

document.getElementById("table_tbody").addEventListener('click', (e)=>{
    const event = e.target;
    if(event.nodeName === "BUTTON" && event.attributes.operation.value === "delete"){
       // console.log("es delete");        
       
       document.getElementById("calendary-modal").classList.remove("none");
       document.getElementById("modal-delete").classList.remove("none");
    }else if(event.nodeName === "BUTTON" && event.attributes.operation.value === "update"){
        //console.log("es update");      
        document.getElementById("calendary-modal").classList.remove("none");
       document.getElementById("modal-update").classList.remove("none");
    }
    
        
})






