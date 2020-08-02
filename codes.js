clicklistenerinput(node, section){        
    let promise  = new Promise(function(data){
        node.addEventListener('change', (e) => {
            const targe  = e.target                                             
            //this.set_pagination(targe.value);                                  
            data(targe.value)
        })
        
    })          
    promise.then(function(data){
        console.log(data);            
    })    
}





clicklistenerinput(node, section){        
    node.addEventListener('change', (e) => {                  
        const targe  = e.target                                                     
    this.set_pagination(targe.value) 
    let value = targe.value;
    this.set_value_paginate(value);        
    console.log({ [section] : parseInt(this.get_pagination()) });                
    
                                                    
    
    })  
    
            
}