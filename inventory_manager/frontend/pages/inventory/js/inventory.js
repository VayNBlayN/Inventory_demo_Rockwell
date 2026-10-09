const item_name = document.getElementById("item_name");
const item_category = document.getElementById("item_category");
const item_quantity = document.getElementById("item_quantity");
const item_price = document.getElementById("item_price");

export function readForm() {
    return {
        id: crypto.randomUUID(),
        name: item_name.value,
        category: item_category.value,
        quantity: item_quantity.value,
        price: item_price.value
    };
}
export function renderRow(item, onDelete) {
    const table = document.getElementById("table_body");
    const row = document.createElement("tr");
    row.dataset.id = item.id;

    [item.name, item.category, item.quantity, item.price].forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.id = 'delete_btn';
    deleteBtn.className = 'delete_btn';
    deleteBtn.addEventListener("click", () => onDelete(item.id));
    deleteCell.appendChild(deleteBtn);
    row.appendChild(deleteCell);

    table.appendChild(row);
}