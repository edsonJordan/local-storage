export class Pagination
{ 
    
    constructor(pagination, seudopaginate){
    this.pagination = pagination
    this.seudopaginate =seudopaginate
    }
    set_pagination(array = []){
        this.pagination = array;
    }
    get_pagination(){
        return this.pagination;
    }
    get_id(node){
        return document.getElementById(node);        
    }
    /* Add nodechild */
    add_childnode_radio_paginatio(node, array, child, attibute, type, name){
    const fragment = document.createDocumentFragment()
        for(const date of array){        
            const nodechild = document.createElement(child);
            const nodelabel = document.createElement('label');
            /* ADD ATTRIBUTE  LABEL */            
            nodelabel.setAttribute('for', 'radio-pagination-foot-'+date)
            nodelabel.classList.add('label-pagination-foot')
            nodelabel.setAttribute('id', 'label-pagination-foot-'+date)
            nodelabel.textContent = date;
            /*ADD  ATTIBUTE  RADIO */            
            nodechild.setAttribute(attibute, date);            
            nodechild.setAttribute('type', type);
            nodechild.setAttribute('name', name);            
            nodechild.classList.add('radio-pagination-foot')            
            nodechild.setAttribute('id', 'radio-pagination-foot-'+date);
            fragment.appendChild(nodechild)
            fragment.appendChild(nodelabel)
        }
        return node.appendChild(fragment);
    }
    /*  
    set_seudopaginate(before_radio, before_label, after_radio, after_label){
        this.seudopaginate={before_radio : [before_radio], before_label : [before_label],
             after_radio : [after_radio], after_label: [after_label]};               
    }
    get_seudopaginate(){
        return this.seudopaginate; 
    }
    action_seudopaginate(action = []){
        console.log(action.before_radio, action.before_label,
            action.after_radio, action.after_label  );                
    }*/

    clicklistenerinput(node){        
        node.addEventListener('click', (e) => {                  
            const targe  = e.target                    
        if(targe.nodeName === 'INPUT'){            
            this.set_pagination(targe.value)                                     
            return console.log(this.get_pagination());   
        }                               
        
                            
        }  )    
        
    }

}