/* Herencia Pagination */
const class_pagination = new Pagination();
/* Formulario get id */
const form_pagination = class_pagination.get_id('foot_form_pagination');
/* Get id foot */

const array_pagination = [1, 2, 3, 4, 5, 6];

/* form.addEventListener('submit', (e) => {
    e.preventDefault();
})
 */
class_pagination.add_childnode_radio_paginatio(form_pagination, array_pagination, "input", 'value', 'radio', 'group-pagination');
//console.log(form)