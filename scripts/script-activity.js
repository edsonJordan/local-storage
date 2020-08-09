import {Builderactivity} from "./activity.js";
const activity = new Builderactivity()
                    .setActivity("trabajo")
                    .setFecha("10/10/2020")
                    .build();                    
const prueba = new Builderactivity()
                    .setDactivity("actividad")
                    .setDfecha("fecha")
                    .setInputform("form")
                    .build();                    
/* console.log(activity.getActivity);
console.log(activity.getFecha);*/                                  
const form= document.getElementById("form");
let data = []
for (const key of form) {        
    if(key.id !== ""){
        //console.log(key.id);    
        data.push({[key.name]:key.id})
    }
}
for(const da of data){
    //console.log(Object.values(da)[0]);    
}
//console.log(Object.values(data[0]));

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let actividad= document.getElementById("actividad");    
    let fecha= document.getElementById("fecha");        
    
                
    if(fecha.value.length == 0 || actividad.value.length == 0){
        console.log("Esta vacio uno de los 2 campos");        
    }else{
    /*     activity.getActivity.value="";
        activity.getFecha.value=""; */
        const procedure = new Builderactivity().setFecha(fecha.value).setActivity(actividad.value).build();         
        console.log(procedure);
        
        //console.log(procedure.getInputform());
        console.log(prueba.Dfecha());        
        //console.log(procedure.clearInput(procedure.getInputform()));
        ;
        //localStorage.setItem('hola', fecha.value) 
    }
})






