let pets = [];

function addPet() {
    const pet = document.getElementById('pet').value;
    const atv = document.getElementById('atv').value;
    const qntAtv = document.getElementById('qntAtv').value;
    const idadePet = document.getElementById('idadePet').value;

    if (pet && atv && qntAtv && idadePet) {
        pets.push({ pet, atv, qntAtv,idadePet });
        renderList();
        clearFields();
    } else {
        alert('Preencha todos os campos!');
    }
}

function renderList() {
    const tbody = document.getElementById('lista');
    tbody.innerHTML = '';

    for (let i = 0; i < pets.length; i++) {
        const tr = document.createElement('tr');

        const tdpet = document.createElement('td');
        tdpet.innerText = pets[i].pet;
        
        const tdAtv = document.createElement('td');
        tdAtv.innerText = pets[i].atv;

        const tdQntAtv = document.createElement('td');
        tdQntAtv.innerText = pets[i].qntAtv;
     
        const idadePet = document.createElement('td');
        idadePet.innerText = pets[i].idadePet;
        
        const tdActions = document.createElement('td');
        const edit = document.createElement('span');
        edit.classList.add('edit');
        edit.innerText = 'Editar';
        edit.onclick = function() {
            editpet(i);
        }
        const del = document.createElement('span');
        del.classList.add('delete');
        del.innerText = 'Excluir';
        del.onclick = function() {
            deletepet(i);
        }

        tdActions.appendChild(edit);
        tdActions.appendChild(del);

        tr.appendChild(tdpet);
        tr.appendChild(tdAtv);
        tr.appendChild(tdQntAtv);
        tr.appendChild(tdActions);

        tbody.appendChild(tr);
    }
}

function clearFields() {
    document.getElementById('pet').value = '';
    document.getElementById('atv').value = '';
    document.getElementById('atv').value = '';
    document.getElementById('atv').value = '';
}

function deletepet(index) {
    pets.splice(index, 1);
    renderList();
}