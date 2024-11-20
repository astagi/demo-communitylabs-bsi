import { Dropdown, NavBarCollapsible } from "bootstrap-italia"

import "./main.scss"

document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((e) => {
    new Dropdown(e);
})

const navBarCollapsibleElement = document.querySelector('#navC2')
new NavBarCollapsible(navBarCollapsibleElement)

/*
In questo esempio si nota come si può applicare in autonomia le funzionalità
del Dropdown. Aggiungere in seguito le altre funzioni per attivare il JavaScript
degli altri elementi.
*/
