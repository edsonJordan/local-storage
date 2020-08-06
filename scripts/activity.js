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
        this.setInstaBuilder()
        
        this.settingsObject = {
            'background': '#fffff',
            'version' : '2.1'
        }
        this.getInstaBuilder();
    }
    getInstaBuilder(){
        this.activity= new Activity();
        return Builderactivity.instance = this;
    }
    setInstaBuilder(){
        if(Builderactivity.instance instanceof Builderactivity){
            return Builderactivity.instance;
        }
    }
    

    /* get instActivity(){
        this.activity = new Activity();
    } */
    setActivity(actividad){
        this.activity.setActivity=actividad;
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
