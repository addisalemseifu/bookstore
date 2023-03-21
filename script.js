const test2 = document.getElementsByTagName('h2');
const testid = document.getElementById('txtTitle');
const inputTitle = document.querySelector('.txtTitle');
const inputAuthor = document.querySelector('.txtAuthor');
const addBooks = document.querySelector('.addBook');
const booksList = document.querySelector('.books-list');
const mainBooksContainer = document.getElementsByClassName('main-books-container');
const remover = document.getElementsByClassName('remover');
const myarr = Array.from(mainBooksContainer);
let newBooks = JSON.parse(localStorage.getItem("mydata")) || [];
newBooks.forEach(book => {
    booksList.innerHTML+= `<div class="newBook">
    <h2 class="name">${book.name}</h2>
    <h2 class="title">${book.title}</h2>
    <button class="remover" id=${book.id}>remove</button>
</div>`;
});

function Book(name ,title){
    this.name = name;
    this.title = title;
    this.id = Math.random();
}
for (let i=0;i<remover.length;i++){
    remover[i].addEventListener('click',(e) =>{
    if(newBooks !== []){
        const foundId = newBooks.find((x) =>{
            return x.id == remover[i].id;
        })
    let index = newBooks.indexOf(foundId);
    newBooks.splice(index,1);
    localStorage.setItem('mydata',JSON.stringify(newBooks));
    const mytar = e.target.parentNode;
    mytar.classList.add('remove');
        }
    })
}
addBooks.addEventListener('click', (e) => {
    e.preventDefault();
    const bookFunction = new Book(inputAuthor.value, inputTitle.value);
    newBooks.push(bookFunction);
    localStorage.setItem('mydata',JSON.stringify(newBooks));
    booksList.innerHTML = '';
    newBooks.forEach(book => {
        booksList.innerHTML+= `<div class="newBook">
        <h2 class="name">${book.name}</h2>
        <h2 class="title">${book.title}</h2>
        <button class="remover" id=${book.id}>remove</button>
    </div>`;
    
    });
    for (let i=0;i<remover.length;i++){
        remover[i].addEventListener('click',(e) =>{
        if (newBooks !== []){
            const foundId = newBooks.find((x) =>{
                return x.id == remover[i].id;
            })
        let index = newBooks.indexOf(foundId);
        newBooks.splice(index,1);
        localStorage.setItem('mydata',JSON.stringify(newBooks));
        const mytar = e.target.parentNode;
        mytar.classList.add('remove');
            }
        })
    }
})



