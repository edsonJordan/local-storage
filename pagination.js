export class Pagination
{     
    constructor(pagination, seudopaginate, parameters_paginate, parameters_header, parameters_footer){
    this.pagination = pagination
    this.seudopaginate =seudopaginate
    this.parameters_paginate  = parameters_paginate;
    this.parameters_header = parameters_header;
    this.parameters_footer = parameters_footer;
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
    /* encapsulate parameters header */
    set_parameters_header(header_paginate){
        this.parameters_header= header_paginate;        
    }
    get_parameters_header(){
        return this.parameters_header;
    }
    /* encapsulate parameters footer */
    set_parameters_footer(footer_paginate){
        this.parameters_footer= footer_paginate;        
    }
    get_parameters_footer(){
        return this.parameters_footer;
    }
    /* encapsulate parameters general[header, footer] */
    set_paremeters_paginate(header, footer){
        this.parameters_paginate = [header, footer];
    }
    get_paremeters_paginate(){
        return this.parameters_paginate;
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
    /* Listener event from node */
    clicklistenerinput(node, section){        
        node.addEventListener('click', (e) => {                  
            const targe  = e.target                                 
        if(targe.nodeName === 'INPUT'){            
            this.set_pagination(targe.value)                                     
        return console.log({ [section] : parseInt(this.get_pagination()) });   
        }                                                                   
        })  
                
    }
    /* Search radio checked from radio group */
    search_checked_radio(name_input){
        const search = document.getElementsByName(name_input);
        for(const data of search){
                if(data.checked){
                    return data.value;
                break;
                }
            }
    }

}