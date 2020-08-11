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
        let getlocal= JSON.parse(localStorage.getItem('local'));                                
        if(getlocal === null){
            localStorage.setItem('local', JSON.stringify([procedure.getValform])) 
            location.reload();
        }else{
            getlocal.push(procedure.getValform)                            
            localStorage.setItem('local', JSON.stringify(getlocal))
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
       let data=JSON.parse(event.value);
       document.getElementById("modal-codigo-delete").value=data.codigo
       document.getElementById("data-delete").textContent=
       `Se eliminaran todos los datos permanentes de ${data.codigo} y ${data.deporte} con fecha ${data.fecha}`;              
    }else if(event.nodeName === "BUTTON" && event.attributes.operation.value === "update"){
        //console.log("es update");      
        document.getElementById("calendary-modal").classList.remove("none");
        document.getElementById("modal-update").classList.remove("none");  
        let data=JSON.parse(event.value);                       
        document.getElementById("modal-codigo").value=data.codigo
        document.getElementById("modal-actividad").value=data.deporte
        document.getElementById("modal-fecha").value=data.fecha                 
    }            
})
document.getElementById("form-update").addEventListener('submit', (e)=>{
    e.preventDefault();
    let fUpdate= new Builderactivity()    
    .setValform('form-update')
    .setActivity(actividad.value)
    .build();   
    let vfUpdate= fUpdate.getValform;      
    const datalocal = JSON.parse(localStorage.getItem('local'));            
    let keydata=""    
    for(let data of datalocal){
      if(data.codigo == vfUpdate.Mcodigo){          
          keydata = datalocal.indexOf(data);
          break;          
      }          
    }    
    datalocal[keydata]={codigo: parseInt(vfUpdate.Mcodigo), deporte: vfUpdate.Mdeporte, fecha : vfUpdate.Mfecha}        
    localStorage.setItem('local', JSON.stringify(datalocal));
    location.reload();           
})
document.getElementById("form-delete").addEventListener('submit', (e)=>{
    e.preventDefault();
    let fdelete= new Builderactivity()    
    .setValform('form-delete')
    .setActivity(actividad.value)
    .build();   
    let fvdelete= fdelete.getValform;            
    const datalocal = JSON.parse(localStorage.getItem('local'));            
    let keydata=""    
    for(let data of datalocal){
      if(data.codigo == fvdelete.Mcodigo){          
          keydata = datalocal.indexOf(data);
          break;          
      }          
    }        
    datalocal.splice(keydata, 1)    
    localStorage.setItem('local', JSON.stringify(datalocal));
    location.reload();        
})





