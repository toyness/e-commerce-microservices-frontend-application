const createInventoryForm = document.getElementById('create-inventory-form');
const createInventoryBtn = document.getElementById('create-inventory-btn');
const getInventoryBtn = document.getElementById('get-inventory-btn');
const inventoryList = document.getElementById('inventory-list');

const createOrderForm = document.getElementById('create-order-form');
const createOrderBtn = document.getElementById('create-order-btn');
const getOrderBtn = document.getElementById('get-order-btn');
const orderList = document.getElementById('order-list');

createInventoryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const item = document.getElementById('item').value;
    const stock = document.getElementById('stock').value;

    fetch('createInventory.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `item=${item}&stock=${stock}`
    })
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

getInventoryBtn.addEventListener('click', () => {
    fetch('getInventory.php')
    .then((res) => res.text())
    .then((data) => {
        inventoryList.innerHTML = data;
    })
    .catch((err) => console.error(err));
});

createOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    fetch('createOrder.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `item=${item}&quantity=${quantity}`
    })
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

getOrderBtn.addEventListener('click', () => {
    fetch('getOrder.php')
    .then((res) => res.text())
    .then((data) => {
        orderList.innerHTML = data;
    })
    .catch((err) => console.error(err));
});