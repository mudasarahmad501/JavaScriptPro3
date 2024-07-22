var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//  Form Submit Event //
form.addEventListener('submit', addItem);

// dell event
itemList.addEventListener('click', removeItem);

//  Filter Event //
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';
    // console.log(li);

    // Add Text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create delete button
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    
    itemList.appendChild(li);

    document.getElementById('item').value = ' ';

}

/// Remove Function ///
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

/// Filter Function //
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);

    //  grab all list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
}
