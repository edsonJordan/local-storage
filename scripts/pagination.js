export class Pagination
{     
    constructor(count_array,pagination, count_paginate, value_paginate, parameters_paginate, parameters_header, parameters_footer, data){    
    this.count_array = count_array;
    this.count_paginate = count_paginate;
    this.data = data
    this.pagination = pagination
    this.value_paginate =value_paginate
    this.parameters_paginate  = parameters_paginate;
    this.parameters_header = parameters_header;
    this.parameters_footer = parameters_footer;
    }
    /* Clear node */
    clear_node(data){
        let tbody = this.get_id(data)
        //tbody.innerHTML= '' ;
        while (tbody.firstChild) {
            tbody.firstChild.remove();
        }
    }
    /* Encapsulate count paginate footer */
    set_count_paginate(data){
        this.count_paginate = data;
    }
    get_count_paginate(){
        return this.count_paginate;
    }
    /* Encapsulate count arrays */
    set_count_array(data){
        this.count_array=data;
    }
    get_count_array(){
        return this.count_array;
    }
    /* Encapsulate value array */
    set_data(array){
        this.data=array;
    }
    get_data(){
        return this.data;
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
                const tdOperation=document.createElement("TD")
                tdOperation.classList.add(class_grandchild)
                tdOperation.setAttribute('data-titulo', "Operaciones"); 
                const updte = document.createElement("button")
                const del = document.createElement("button")
                                                             
                updte.setAttribute("operation", "update");                
                updte.value=data.codigo                                
            
                updte.textContent="Update";
                updte.classList.add('button', 'button-warning')

                del.textContent="Delete";
                del.setAttribute("operation", "delete");  
                del.classList.add('button', 'button-danger')
                del.value=data.codigo
                



                tdOperation.appendChild(del)
                tdOperation.appendChild(updte)

                nodechild.appendChild(tdOperation);
                
                
                fragment.appendChild(nodechild);
        }
        nodefirst.appendChild(fragment);
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
        if(e.target.name === 'group_header'){
        this.clear_node('foot_form_pagination');
        /*console.log(e.target.value);*/
        //console.log(Math.ceil(parseInt(this.get_count_array().length)/ (e.target.value)));                        
        let array_footer_paginate = [];                
        for(let i = 1; i <= Math.ceil(parseInt(this.get_count_array().length)/(e.target.value)) ; i++){                        
            array_footer_paginate.push(i)
        }
        //console.log(array_footer_paginate);
        const form_pagination__footer = this.get_id('foot_form_pagination');               
        this.add_childnode_radio_paginatio(form_pagination__footer, array_footer_paginate, "input", 'value', 'radio', 'group-pagination');        
        const first_pagination = this.get_id('radio-pagination-foot-1');
        /* Action first radio footer checked */
        first_pagination.click(); 
        }else{
        //clear node
        this.clear_node('table_tbody');
        //add parameters
        let parameters = this.get_paremeters_paginate();                
        //console.log(this.clear_array_search(parameters.header, parameters.footer));
        const arraycleaned = this.clear_array_search(parameters.header, parameters.footer);                
        // add cards
        this.add_child_grandchild(arraycleaned, 'table_tbody', 'tr', 'tr__tbody', 'td', 'td__tbody'); 
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
    /* Autoload for parameters of checks header and footer  */
    clear_array_search(header, footer){        
        let arraydirty = this.get_data();        
        let start = header * (footer-1);
        let end = footer * header;        
        let arraycleaned = arraydirty.slice(start, end);
        return arraycleaned;       
    }    
}
