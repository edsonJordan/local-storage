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






const fragment = document.createDocumentFragment()
//const fragmentchild = document.createDocumentFragment()
    for(const data of array_cards){
        const tr = document.createElement('tr');

        const td = document.createElement('td');        
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        
        tr.classList.add('tr__tbody');
        //nodechild.setAttribute('data-titulo', '1')                
        td.classList.add('td__tbody');
        td.setAttribute('data-fecha', data.fecha)        
        td.setAttribute('data-titulo', data.deporte)

        td2.classList.add('td__tbody');
        td2.setAttribute('data-fecha', data.fecha)        
        td2.setAttribute('data-titulo', data.deporte)

        td3.classList.add('td__tbody');
        td3.setAttribute('data-fecha', data.fecha)        
        td3.setAttribute('data-titulo', data.deporte)
        
        td4.classList.add('td__tbody');
        td4.setAttribute('data-fecha', data.fecha)        
        td4.setAttribute('data-titulo', data.deporte)

       
        
        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        fragment.appendChild(tr)        
    
    }
    nodechilder.appendChild(fragment);




    const nodechilder = document.getElementById('table_tbody');
    const fragment = document.createDocumentFragment()
    //const fragmentchild = document.createDocumentFragment()
    /* 
        for(const data of array_cards){                  
            const tr = document.createElement('tr');
            tr.classList.add('tr__tbody');     
           // console.log(Object.entries(data));                                   
           for(const key of Object.entries(data)){                        
            const td_content = document.createElement('td')
            td_content.classList.add('td__tbody');       
            td_content.setAttribute('data-titulo', key[0])          
            td_content.textContent = key[1]
            tr.appendChild(td_content)
            }
            fragment.appendChild(tr)          
        }
        nodechilder.appendChild(fragment); */
        //nodechilder.appendChild(fragment);