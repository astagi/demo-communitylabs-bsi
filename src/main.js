import { Dropdown } from "bootstrap-italia"

import "./main.scss"

document.querySelectorAll('[data-bs-toggle="dropdown"]').forEach((e) => {
    new Dropdown(e);
})