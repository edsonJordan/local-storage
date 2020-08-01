/* Herencia Pagination */
import {Pagination} from "/pagination.js";
const class_pagination = new Pagination();
/* Getting id from calendary__view */
const calendary_search = class_pagination.get_id('calendary__view');
/* Form get id from header */
const form_pagination__header = class_pagination.get_id('table_pagination');
/* Formulario get id from footer */
const form_pagination__footer = class_pagination.get_id('foot_form_pagination');
/* Get id pagination first */
const array_pagination = [1, 2, 3, 4, 5];
/* add child nodes for form_pagination */
class_pagination.add_childnode_radio_paginatio(form_pagination__footer, array_pagination, "input", 'value', 'radio', 'group-pagination');
    /* GET ID first radio and  add attribute check in header */
    const first_pagination_header = class_pagination.get_id('radio_five');          
    /* Action first radio header  checked */
    first_pagination_header.checked = true;
    /* GET ID first radio and  add attribute check in footer */
    const first_pagination = class_pagination.get_id('radio-pagination-foot-1');
    /* Action first radio footer checked */
    first_pagination.checked = true;
/* Listener event radio header */
const pagination_header = class_pagination.clicklistenerinput(form_pagination__header, "Header");
(pagination_header === undefined) ? 
class_pagination.set_parameters_header({header : 5}) :
class_pagination.set_parameters_header(pagination_header);
/* Listener event radio footer */
const pagination_footer = class_pagination.clicklistenerinput(form_pagination__footer, "Footer");
if(pagination_footer === undefined){
    class_pagination.set_parameters_footer({footer: 1})
    let header_parameters = class_pagination.search_checked_radio('radio_group');
    let footer_parameters = class_pagination.get_parameters_footer();    
    class_pagination.set_paremeters_paginate(parseInt(header_parameters), footer_parameters.footer);
}else{
    //class_pagination.set_parameters_footer()
    let header_parameters = class_pagination.search_checked_radio('radio_group');
    let footer_parameters = class_pagination.set_parameters_footer(pagination_footer);                
    class_pagination.set_paremeters_paginate(header_parameters, footer_parameters);
    
}
/* const pagination_footer = class_pagination.clicklistenerinput(form_pagination__footer, "Footer");
(pagination_footer === undefined) ? 
[class_pagination.set_parameters_footer({footer: 1}), 
    console.log(class_pagination.set_parameters_paginate(class_pagination.search_checked_radio('radio_group'), class_pagination.set_parameters_footer()))                     
]
 :
class_pagination.set_parameters_footer(pagination_footer); */
//console.log(class_pagination.get_parameters_footer());
//console.log("Chekeado radio de header "+ class_pagination.search_checked_radio('radio_group'));
console.log(class_pagination.get_paremeters_paginate());



/* const data_header = class_pagination.get_parameters_header();
const data_footer = class_pagination.get_parameters_footer(); */
/* class_pagination.set_parameters_paginate(data_header, data_footer);
const parameters_data = class_pagination.get_paremeters_paginate();
 */
//const checkeado = document.querySelectorAll('input[name="radio_group"]:checked');
//console.log(class_pagination.get_parameters_paginate());
//const serch = class_pagination.search_checked_radio('group-pagination')
//console.log(serch);
/* const chekeado2 = document.getElementsByName('group-pagination');
 */
 //console.log(calendary_search); 
/* Set pag option checked and label because required styles */
//const pag_option = [{ radio :radios.id, label : radios.getAttribute('data-label') }, ];