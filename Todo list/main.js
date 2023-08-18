let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form, submit event
form.addEventListener('submit', addItem);

// Add Item
function addItem(e) {
    e.preventDefault();

    // Get input value
    let input = document.getElementById('item').value;

    // create new li element
    let li = document.createElement('li');

    // Add list 
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(input));


    // create delete button
    let deleteBtn = document.createElement('button');

    // add class name
    deleteBtn.classList = 'btn btn-danger btn-sm float-end delete';
    // ota elementga li ni qoshib ol
    itemList.appendChild(li);

    // add text node
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

}

// -----------------------------------------


// delete remove
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('o`chirishga Roziman')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// -----------------------------------------
// search

let filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItems);

function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');


    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
};