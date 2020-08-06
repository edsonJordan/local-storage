import {Builderactivity} from "./activity.js";
/* const activity = new Builderactivity()
                    .setActivity("trabajo")
                    .setFecha("10/10/2020")
                    .build() */;
const a = new Builderactivity().setActivity("trabajo").build();
const b = new Builderactivity().setActivity("paseo").build();

console.log(a);
console.log(b);

                    

const form= document.getElementById("form");
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let actividad= document.getElementById("actividad");
    let fecha= document.getElementById("fecha");            
    if(fecha.value.length ==0 || actividad.value.length == 0){
        console.log("uno de los datos esta vacio");        
    }else{
        localStorage.clear();
        localStorage.setItem('hola', fecha.value)
    }
})






