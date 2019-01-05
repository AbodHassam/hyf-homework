let bookIds = [
    'the_lord_of_the_rings',
    'the_call_of_the_wild',
    'catch_22',
    'tom_jones',
    'emma',
    'the_perfect_nanny',
    'sybil',
    'the_bridges_of_constantine',
    'compass',
    'moby_dick'];
//console.log(bookTitles[0]);

let bookInfo = {
    the_lord_of_the_rings:{ title: 'The Lord Of The Rings', author: 'J. R. R. Tolkien', language: 'English',cover: '' },
    the_call_of_the_wild:{ title: 'The Call Of The Wild', author: 'Jack london', language: 'English',cover: '' },
    catch_22:{ title: 'Catch 22', author: 'Joseph Heller', language: 'English',cover: '' },
    tom_jones:{ title: 'Tom Jones', author: 'Henry Fielding', language: 'English' ,cover: ''},
    emma:{ title: 'Emma', author: 'Jane Austen', language: 'English' ,cover: ''},
    the_perfect_nanny:{ title: 'The Perfect Nanny', author: 'Leila Slimani', language: 'french' ,cover: ''},
    sybil:{ title: 'Sybil', author: 'Benjamin Disraeli', language: 'English' ,cover: ''},
    the_bridges_of_constantine:{ title: 'The Bridges Of Constantine', author: 'Ahlem Mosteghanemi', language: 'Arabic' ,cover: ''},
    compass:{ title: 'Compass', author: 'Matthias Enard', language: 'french' ,cover: ''},
    moby_dick:{ title: 'Moby Dick', author: 'Herman Melville', language: 'English' ,cover: ''}
};

let covers={
    'the_lord_of_the_rings':'./covers/rings.jpg',
    'the_call_of_the_wild':'./covers/call.jfif',
    'catch_22':'./covers/catch.jpg',
    'tom_jones':'./covers/tom.jpg',
    'emma':'./covers/emma.jpg',
    'the_perfect_nanny':'./covers/nanny.jpg',
    'sybil':'./covers/sybil.jpg',
    'the_bridges_of_constantine':'./covers/bridges.jpg',
    'compass':'./covers/compass.jpg',
    'moby_dick':'./covers/moby.JPG'
};
    
function myList() {
    let ul = document.createElement('ul');
    document.getElementById('myBooks').appendChild(ul);
    
    for (let i = 0; i < bookIds.length; i++) {
        let li = document.createElement('li');
        let img = document.createElement('img');
        let h1 = document.createElement('h1');
        let b = document.createElement('b');
        let p = document.createElement('p');
        li.ids = bookIds[i];
        img.src = bookInfo[bookIds[i]]['cover'];
        img.alt = 'the cover';
        h1.innerHTML +=bookInfo[bookIds[i]]['title'];
        b.innerHTML +=bookInfo[bookIds[i]]['author'];
        p.innerHTML +=bookInfo[bookIds[i]]['language'];
        ul.appendChild(li);
        li.appendChild(h1);
        li.appendChild(img);
        li.appendChild(b);
        li.appendChild(p);
    }

};
function addACover() {
    for (let i=0; i<bookIds.length; i++) {
        let listBook = document.getElementById (bookIds[i]);
        let covering = listBook.querySelector ('img');
        covering.src = covers[bookIds[i]];

    }
};
myList();
addACover();