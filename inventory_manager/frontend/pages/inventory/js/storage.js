export function loadItems() {
    const raw = localStorage.getItem("inventory");
    return raw ? JSON.parse(raw) : [];
}

export function saveItems(items) {
    localStorage.setItem("inventory", JSON.stringify(items));
}

export function deleteItem(items, id) {
    return items.filter(item => item.id !== id);
}