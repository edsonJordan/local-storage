class Activity{   
    constructor(){            
        this.actividad=null;
        this.fecha = null;        
        this.Dactivity=null;
        this.Dfecha=null;
        this.Inputs=[];
    }
   
    set setDactivity(Dactivity){
        this.Dactivity=Dactivity;
    }
    get getDactivity(){
        return this.Dactivity;
    }
    set setInputform(data){
        const form = document.getElementById(data);
        for(const key of form){
            if(key.id !== ""){
                this.Inputs.push({[key.name]: key.id})
            }
        }     
    }
    get getInputform(){
        return this.Inputs;
    }
    set setDfecha(Dfecha){
        this.Dfecha=Dfecha;
    }
    get getDfecha(){
        return this.Dfecha;
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
    setDactivity(Dactivity){
        this.activity.setDactivity=document.getElementById(Dactivity);
        return this;
    }
    setDfecha(Dfecha){
        this.activity.setDfecha=document.getElementById(Dfecha);
        return this;
    }
    setActivity(actividad){
        this.activity.setActivity=actividad;
        return this;
    }
    clearInput(data){        
        for (const iterator of data) {            
            document.getElementById(Object.values(iterator)[0]).value="";
        }
    }
    setInputform(data){
        this.activity.setInputform=data;
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
