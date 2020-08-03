export class Pagination
{     
    constructor(pagination, value_paginate, parameters_paginate, parameters_header, parameters_footer){
    this.pagination = pagination
    this.value_paginate =value_paginate
    this.parameters_paginate  = parameters_paginate;
    this.parameters_header = parameters_header;
    this.parameters_footer = parameters_footer;
    }
    /* Encapsulate value_paginate */
    set_value_paginate(value){
        this.value_paginate = value;
    }
    get_value_paginate(value){
        return this.value_paginate;
    }
    /* Encapsulate parameters pagination */
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
        this.parameters_paginate = {header, footer};
    }
    get_paremeters_paginate(){
        return this.parameters_paginate;
    }
    /* Add nodechild -- radio and label ---*/
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
            nodechild.setAttribute('name', 'group_footer');            
            nodechild.classList.add('radio-pagination-foot')            
            nodechild.setAttribute('id', 'radio-pagination-foot-'+date);
            fragment.appendChild(nodechild)
            fragment.appendChild(nodelabel)
        }
        return node.appendChild(fragment);
    }
    /* Add node cards*/
    add_child_grandchild(array_data, node, child, class_child, grand_child, class_grandchild){
        const nodefirst = this.get_id(node);
        const fragment = document.createDocumentFragment();
        for(const data of array_data){
            const nodechild = document.createElement(child);
            nodechild.classList.add(class_child)
            for(const key of Object.entries(data)){
                const nodegrandchild = document.createElement(grand_child);
                nodegrandchild.classList.add(class_grandchild);
                nodegrandchild.setAttribute('data-titulo', key[0]);
                nodegrandchild.textContent= key[1];
                nodechild.appendChild(nodegrandchild);
            }
            fragment.appendChild(nodechild);
        }
        nodefirst.appendChild(fragment);
    }

    /* Listener event from node */
    clicklistenerinput(node, section){        
        node.addEventListener('change', (e) => {                  
        const targe  = e.target                                                     
        this.set_pagination(targe.value) 
        let value = targe.value;
        this.set_value_paginate(value);        
        console.log({ [section] : parseInt(this.get_pagination()) });                                                                             
        })                          
    }
    /* Listener Group radio */
    listener_radio(id_listener, name_opposite_form, boolean){
        id_listener.addEventListener('change', (e)=>{
        const oppsite = this.search_checked_radio(name_opposite_form);
        if(boolean){
           this.set_paremeters_paginate(parseInt(e.target.value), parseInt(oppsite));
        }else{
            this.set_paremeters_paginate(parseInt(oppsite), parseInt(e.target.value));
        }
        console.log(this.get_paremeters_paginate());        
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