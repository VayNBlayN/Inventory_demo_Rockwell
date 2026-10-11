import { readForm, renderRow } from "./inventory.js";
import { deleteItem, loadItems, saveItems } from "./storage.js";

//form show logic
const addBtn = document.getElementById("add_btn");
const cancelBtn = document.getElementById("btn_cancel");
const dialog = document.getElementById("item_dialog");

addBtn.addEventListener('click', () => dialog.showModal());
cancelBtn.addEventListener('click', () => dialog.close());

let items = loadItems();
items.forEach(item => renderRow(item, handleDelete));   // show what was saved, on page load

document.getElementById("item-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const item = readForm();
    items.push(item);
    renderRow(item, handleDelete);
    saveItems(items);
    dialog.close();
    event.target.reset();
});

function handleDelete(id) {
    items = deleteItem(items, id);
    saveItems(items);
    document.querySelector(`tr[data-id="${id}"]`).remove();
}