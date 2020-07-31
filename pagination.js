class Pagination{
    constructor(){
        
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
/*AGREGANDO ATRIBUTOS A RADIO */            
            nodechild.setAttribute(attibute, date);            
            nodechild.setAttribute('type', type);
            nodechild.setAttribute('name', name);
            nodechild.classList.add('radio-pagination-foot')
/* AGREGANDO ATRIBUTOS A LABEL */
            nodechild.setAttribute('id', date);
            nodelabel.setAttribute('for', date)
            nodelabel.classList.add('label-pagination-foot')
            nodelabel.textContent = date;
            fragment.appendChild(nodelabel)
            fragment.appendChild(nodechild)
        }
        return node.appendChild(fragment);
    }


}