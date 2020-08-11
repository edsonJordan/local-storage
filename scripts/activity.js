class Activity{   
    constructor(){            
        this.actividad=null;
        this.fecha = null;        
        this.Dactivity=null;
        this.Dfecha=null;
        this.Inputs=[];
        this.values=[];
        this.data=null;
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
    set setValform(data){
        const form = document.getElementById(data);
        const time  = new Date();
        let cod = parseInt([time.getFullYear().toString().substr(-2)]+[time.getMonth()+1]+[time.getDate()]+[time.getHours()]+[time.getSeconds()]);        
        this.values.push({codigo: cod});
        for(const key of form){
            if(key.id !== ""){
                this.values.push({[key.name]: key.value})
            }
           
        }
    }
    get getValform(){
        let obj= {};                
        for(let val of this.values){
            obj[Object.entries(val)[0][0]] = Object.entries(val)[0][1];
        }
        return obj;
    }
    clearInput(){        
        for (const iterator of this.Inputs) {            
            document.getElementById(Object.values(iterator)[0]).value="";
        }
        this.Inputs=[];            
    }
    getLocal(key, data){
        localStorage.setItem(key, JSON.stringify(data));    
    }
    set setLocal(data){
        this.data=data;                
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
    setLocal(data){
        this.activity.setLocal=data;
        return this.activity;
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
    setInputform(data){
        this.activity.setInputform=data;
        return this;
    }
    setValform(data){
        this.activity.setValform=data;
        return this;
    }
    setFecha(fecha){
        this.activity.setFecha = fecha;
        return this;
    }            
    build(){
        return this.activity;
    }
    
}
