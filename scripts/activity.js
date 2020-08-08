class Activity
{   constructor(){            
        this.actividad=null;
        this.fecha = null;
    }    
    set setActivity(actividad){
        this.actividad=actividad;
    }
    get getActivity(){
        return this.actividad;
    }
    set setFecha(fecha){
        this.fecha = fecha;
    }    
    get getFecha(){
        return this.fecha;
    }                       
}
export class Builderactivity{
    constructor(){     
        this.activity = new Activity();
    }      
    setActivity(actividad){
        this.activity.setActivity=actividad;
        return this;
    }
    setFecha(fecha){
        this.activity.setFecha = fecha;
        return this;
    }    
     getLocal(key, data){
        localStorage.setItem(key, JSON.stringify(data));
    return this;
        
    }
    build(){
        return this.activity;
    }
    
}
