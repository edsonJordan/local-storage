/* Herencia Pagination */
import {Pagination} from "./pagination.js";
//import {Pagination} from "./pagination.js"
const class_pagination = new Pagination();
/* Getting id from calendary__view */
const calendary_search = class_pagination.get_id('calendary__view');
/* Form get id from header */
const form_pagination__header = class_pagination.get_id('table_pagination');
/* Formulario get id from footer */
const form_pagination__footer = class_pagination.get_id('foot_form_pagination');
/* Get id pagination first */
const array_pagination = [1, 2, 3, 4, 5];
let array_cards = JSON.parse(localStorage.getItem('local'));
/* const array_cards= 
[
{codigo: 1, deporte: 'gimnasia', fecha :'02/04/2020'}, 
{codigo: 2, deporte: 'baloncesto', fecha :'01/04/2020'}, 
{codigo: 3, deporte: 'futbol', fecha :'01/04/2020'}, 
{codigo: 4, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 5, deporte: 'boley', fecha :'01/04/2020'},
{codigo: 6, deporte: 'gimnasia', fecha :'02/04/2020'}, 
{codigo: 7, deporte: 'baloncesto', fecha :'01/04/2020'}, 
{codigo: 8, deporte: 'futbol', fecha :'01/04/2020'}, 
{codigo: 9, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 10, deporte: 'boley', fecha :'01/04/2020'},
{codigo: 11, deporte: 'boley', fecha :'01/04/2020'},
{codigo: 12, deporte: 'gimnasia', fecha :'02/04/2020'}, 
{codigo: 13, deporte: 'baloncesto', fecha :'01/04/2020'}, 
{codigo: 14, deporte: 'futbol', fecha :'01/04/2020'}, 
{codigo: 15, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 16, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 17, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 18, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 19, deporte: 'boley', fecha :'01/04/2020'},
{codigo: 20, deporte: 'gimnasia', fecha :'02/04/2020'}, 
{codigo: 21, deporte: 'baloncesto', fecha :'01/04/2020'}, 
{codigo: 22, deporte: 'futbol', fecha :'01/04/2020'}, 
{codigo: 23, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 24, deporte: 'boley', fecha :'01/04/2020'},
{codigo: 25, deporte: 'gimnasia', fecha :'02/04/2020'}, 
{codigo: 26, deporte: 'baloncesto', fecha :'01/04/2020'}, 
{codigo: 27, deporte: 'futbol', fecha :'01/04/2020'}, 
{codigo: 28, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 29, deporte: 'boley', fecha :'01/04/2020'},
{codigo: 30, deporte: 'boley', fecha :'01/04/2020'},
{codigo: 31, deporte: 'gimnasia', fecha :'02/04/2020'}, 
{codigo: 32, deporte: 'baloncesto', fecha :'01/04/2020'}, 
{codigo: 33, deporte: 'futbol', fecha :'01/04/2020'}, 
{codigo: 34, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 35, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 36, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 37, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 38, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 39, deporte: 'beisbol', fecha :'01/04/2020'}, 
{codigo: 40, deporte: 'boley', fecha :'01/04/2020'}
] */
/* Setting array for set_data */
class_pagination.set_data(array_cards);
class_pagination.set_count_array(array_cards);
/* Add array clear */
/* Paginate default  */
const radio_header_paginate = 5;
let array_footer_paginate = [];
for(let i = 1; i <= Math.ceil(parseInt(class_pagination.get_count_array().length)/radio_header_paginate); i++){                        
    array_footer_paginate.push(i)
}
/* add child radios nodes for form_pagination from footer  */
class_pagination.add_childnode_radio_paginatio(form_pagination__footer, array_footer_paginate, "input", 'value', 'radio', 'group-pagination');
/* GET ID first radio and  add attribute check in header */
const first_pagination_header = class_pagination.get_id('radio_five');          
/* Action first radio header  checked */
first_pagination_header.checked = true;
/* GET ID first radio and  add attribute check in footer */
const first_pagination = class_pagination.get_id('radio-pagination-foot-1');
/* Action first radio footer checked */
//first_pagination.checked = true;
first_pagination.click();
/* Firt listener group header and footer */
class_pagination.set_paremeters_paginate(parseInt(class_pagination.search_checked_radio('group_header')), parseInt(class_pagination.search_checked_radio('group_footer')));
/*Event Listener group radio header  */
class_pagination.listener_radio(form_pagination__header, 'group_footer', true);
/*Event Listener group radio footer */
class_pagination.listener_radio(form_pagination__footer, 'group_header', false);
/* Getting parameters from paginate */
let parameters = class_pagination.get_paremeters_paginate()
//array, header, footer
let datacard= class_pagination.clear_array_search(parameters.header, parameters.footer)
//ADD child node and grandchild node(Cards)  array, node, child, class_child, grandchild, class_grandchild
class_pagination.add_child_grandchild(datacard, 'table_tbody', 'tr', 'tr__tbody', 'td', 'td__tbody');


