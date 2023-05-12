let pets = [];

function addPet() {
    const pet = document.getElementById('pet').value;
    const atv = document.getElementById('atv').value;
    const qntAtv = document.getElementById('qntAtv').value;
    const idadePet = document.getElementById('idadePet').value;

    if (pet && atv && qntAtv && idadePet) {
        pets.push({ pet, atv, qntAtv, idadePet});
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
        tdActions.classList.add('actions')
        const edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerText = 'Editar';
        edit.onclick = function() {
            editpet(i);
        }
        const del = document.createElement('button');
        del.classList.add('delete');
        del.innerText = 'Excluir';
        del.onclick = function() {
            deletepet(i);
        }

        tdActions.append(edit);
        tdActions.append(del);

        tr.append(tdpet);
        tr.append(tdAtv);
        tr.append(tdQntAtv);
        tr.append(idadePet);
        tr.append(tdActions);

        tbody.append(tr);
    }
}

function clearFields() {
    document.getElementById('pet').value = '';
    document.getElementById('atv').value = '';
    document.getElementById('qntAtv').value = '';
    document.getElementById('idadePet').value = '';
}

function deletepet(index) {
    pets.splice(index, 1);
    renderList();
}