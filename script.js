/* Herencia Pagination */
import {Pagination} from "/pagination.js";

const class_pagination = new Pagination();
/* Formulario get id */
const form_pagination = class_pagination.get_id('foot_form_pagination');
/* Get id pagination first */
const array_pagination = [1, 2, 3, 4, 5, 6];
/* form.addEventListener('submit', (e) => {
    e.preventDefault();
})
 */
class_pagination.add_childnode_radio_paginatio(form_pagination, array_pagination, "input", 'value', 'radio', 'group-pagination');
const pagina = class_pagination.clicklistenerinput(form_pagination);
const first_pagination = class_pagination.get_id('1');
/* first_pagination.setAttibute("checked", true); */
/* " checked="true"  */
first_pagination.setAttribute("checked", true);
first_pagination.classList.add('active')
console.log(first_pagination);