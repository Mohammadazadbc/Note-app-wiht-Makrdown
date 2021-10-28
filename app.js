const notesEl = document.querySelector('.notes')

const addBtn = document.getElementById('add')

addBtn.addEventListener('click',()=>{
    addNEwNote();
})


function addNEwNote(){
    const note = document.createElement('div');
    note.classList.add('notes')

    note.innerHTML = `
    <div class="notes">
<div class="tools">
    <button class="edit" > <i class="far fa-edit"></i> </button>
    <button class="delete" > <i class="far fa-trash-alt"></i> </button>
</div>
<div class="main hidden">
</div>
<textarea placeholder="your texte here after writing click on edit button to see the resutl on mark down" ></textarea>
</div>

    `;

const deleteBtn = note.querySelector('.delete')
const editBtn = note.querySelector('.edit')

const main = note.querySelector('.main');
const textareat = note.querySelector('textarea');

editBtn.addEventListener('click',()=>{
    main.classList.toggle('hidden');
    textareat.classList.toggle('hidden')
})

deleteBtn.addEventListener('click',()=>{
    note.remove();
})


textareat.addEventListener('input',(e)=>{
    const { value } = e.target;

    main.innerHTML = marked(value)
})


    document.body.append(note)
}







