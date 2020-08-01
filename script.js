/* Herencia Pagination */
import {Pagination} from "/pagination.js";

const class_pagination = new Pagination();
/* Form get id from header */
const form_pagination__header = class_pagination.get_id('header_form_pagination');
/* Formulario get id from footer */
const form_pagination__footer = class_pagination.get_id('foot_form_pagination');
/* Get id pagination first */
const array_pagination = [1, 2, 3, 4, 5];
/* add child nodes for form_pagination */
class_pagination.add_childnode_radio_paginatio(form_pagination__footer, array_pagination, "input", 'value', 'radio', 'group-pagination');
/* GET ID first radio and  add attribute check */
const first_pagination = class_pagination.get_id('radio-pagination-foot-1');
first_pagination.checked = true;
/* Listener radio header */
//const pagination_header = class_pagination.clicklistenerinput(form_pagination__header);
//console.log(pagination_header);
/* form_pagination__header.addEventListener('click', (e)=>{
    console.log(e.target)
}) */
console.log(form_pagination__header.innethtml);

//console.log(form_pagination__header);
//console.log(form_pagination__footer);

/* Listener radio footer */
const pagination_footer = class_pagination.clicklistenerinput(form_pagination__footer);
if(pagination_footer === undefined){
     console.log(1);        
}else{
    console.log(pagination_footer);    
}




/* */
/* Set pag option checked and label because required styles */
//const pag_option = [{ radio :radios.id, label : radios.getAttribute('data-label') }, ];











//console.log(first_pagination);