// main.js

// Función para cambiar el color de fondo al pasar el mouse
function addHoverEffect() {
    const listItems = document.querySelectorAll('main ul li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#d3d3d3';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '#e2e2e2';
        });
    });
}

// Función para mostrar alerta al hacer clic.

function addClickAlert() {
    const listItems = document.querySelectorAll('main ul li');
    listItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`Has hecho clic en: ${item.textContent}`);
        });
    });
}

// Función para agregar un nuevo elemento a la lista.
function addNewItem() {
    const newItemText = prompt('Introduce el nombre del nuevo ítem:');
    if (newItemText) {
        const ul = document.querySelector('main ul');
        const li = document.createElement('li');
        li.textContent = `👟 ${newItemText}`;
        li.style.backgroundColor = '#e2e2e2';
        li.style.margin = '0.5em 0';
        li.style.padding = '0.75em';
        li.style.borderRadius = '5px';
        li.style.display = 'flex';
        li.style.alignItems = 'center';
        li.style.justifyContent = 'space-between';
        li.style.fontSize = '1.2em';

        // Agregar detectores de eventos al nuevo elemento
        li.addEventListener('mouseenter', () => {
            li.style.backgroundColor = '#d3d3d3';
        });
        li.addEventListener('mouseleave', () => {
            li.style.backgroundColor = '#e2e2e2';
        });
        li.addEventListener('click', () => {
            alert(`Has hecho clic en: ${li.textContent}`);
        });
        li.addEventListener('dblclick', () => {
            li.style.textDecoration = 'line-through';
        });

        // Añade el botón comprar
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        buyButton.style.marginLeft = '1em';
        buyButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Evitar que se active la alerta de clic
            alert(`Has comprado: ${li.textContent}`);
        });

        li.appendChild(buyButton);
        ul.appendChild(li);
        checkEmptyList();
    }
}

// Función para eliminar elemento de la lista.
function deleteItem() {
    const itemText = prompt('Introduce el nombre del ítem a eliminar:');
    if (itemText) {
        const ul = document.querySelector('main ul');
        const items = ul.querySelectorAll('li');
        let itemFound = false;

        items.forEach(item => {
            if (item.textContent.includes(itemText)) {
                ul.removeChild(item);
                itemFound = true;
            }
        });

        if (!itemFound) {
            alert('Ítem no encontrado.');
        }

        checkEmptyList();
    }
}

// Función para cambiar el estilo del texto al hacer doble clic
function addDoubleClickEffect() {
    const listItems = document.querySelectorAll('main ul li');
    listItems.forEach(item => {
        item.addEventListener('dblclick', () => {
            item.style.textDecoration = 'line-through';
        });
    });
}

// Función para comprobar si la lista está vacía.
function checkEmptyList() {
    const ul = document.querySelector('main ul');
    const emptyMessage = document.querySelector('#emptyMessage');
    if (ul.children.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}

// Función para agregar botones de compra a artículos existentes
function addBuyButtons() {
    const listItems = document.querySelectorAll('main ul li');
    listItems.forEach(item => {
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        buyButton.style.marginLeft = '1em';
        buyButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent the click alert from triggering
            alert(`Has comprado: ${item.textContent}`);
        });
        item.appendChild(buyButton);
    });
}

// Función para buscar elementos por nombre.
function searchItem() {
    const searchText = prompt('Introduce el nombre del ítem a buscar:');
    if (searchText) {
        const items = document.querySelectorAll('main ul li');
        let results = [];
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchText.toLowerCase())) {
                results.push(item.textContent);
            }
        });

        if (results.length > 0) {
            alert(`Ítems encontrados:\n${results.join('\n')}`);
        } else {
            alert('Ítem no encontrado.');
        }
    }
}

// Función para contar el número de elementos de la lista.
function countItems() {
    const items = document.querySelectorAll('main ul li');
    alert(`Número total de ítems: ${items.length}`);
}

// Función para mostrar todos los elementos.
function displayAllItems() {
    const items = document.querySelectorAll('main ul li');
    let allItems = [];
    items.forEach(item => {
        allItems.push(item.textContent);
    });
    if (allItems.length > 0) {
        alert(`Lista de todos los ítems:\n${allItems.join('\n')}`);
    } else {
        alert('La lista está vacía.');
    }
}

// Inicializar funciones
document.addEventListener('DOMContentLoaded', () => {
    addHoverEffect();
    addClickAlert();
    addDoubleClickEffect();
    addBuyButtons();

    const addButton = document.createElement('button');
    addButton.textContent = 'Agregar ítem';
    addButton.style.margin = '1em';
    addButton.addEventListener('click', addNewItem);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar ítem';
    deleteButton.style.margin = '1em';
    deleteButton.addEventListener('click', deleteItem);

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Buscar ítem';
    searchButton.style.margin = '1em';
    searchButton.addEventListener('click', searchItem);

    const countButton = document.createElement('button');
    countButton.textContent = 'Contar ítems';
    countButton.style.margin = '1em';
    countButton.addEventListener('click', countItems);

    const displayButton = document.createElement('button');
    displayButton.textContent = 'Mostrar todos los ítems';
    displayButton.style.margin = '1em';
    displayButton.addEventListener('click', displayAllItems);

    document.body.insertBefore(addButton, document.querySelector('footer'));
    document.body.insertBefore(deleteButton, document.querySelector('footer'));
    document.body.insertBefore(searchButton, document.querySelector('footer'));
    document.body.insertBefore(countButton, document.querySelector('footer'));
    document.body.insertBefore(displayButton, document.querySelector('footer'));

    const emptyMessage = document.createElement("p");
    emptyMessage.id = 'emptyMessage';
    emptyMessage.textContent = 'La lista está vacía.';
    emptyMessage.style.display = 'none';
    emptyMessage.style.textAlign = 'center';
    emptyMessage.style.color = '#333';
    document.querySelector('main').appendChild(emptyMessage);

    checkEmptyList();
});
