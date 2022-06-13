let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let dateAdded = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${dateAdded.getFullYear()}-${dateAdded.getMonth() + 1}-${dateAdded.getDate()}`;
    row.insertCell(1).innerHTML = document.getElementById('clockIn').value;
    row.insertCell(2).innerHTML = document.getElementById('clockOut').value;
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++));
    $("input[type=date]").val("")
    document.getElementById(clockOut).value = '0';
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

document.getElementById('pay-button').addEventListener('click', () => {
    let list=document.getElementById('list');
    if(list) list.parentNode.removeChild(list);
    alert("Submitted for payment!");
    location.reload();
});