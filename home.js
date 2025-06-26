/*const category = [
    { 
        name: 'C1', 
        info: 'lorem epsum 1' 
    },
    { 
        name: 'C2', 
        info: 'lorem epsum 2' 
    },
    { 
        name: 'C3', 
        info: 'lorem epsum 3' 
    },
    { 
        name: 'C4', 
        info: 'lorem epsum 4' 
    },
    { 
        name: 'C5', 
        info: 'lorem epsum 5' 
    },
    { 
        name: 'C6', 
        info: 'lorem epsum 6' 
    },
    { 
        name: 'C7', 
        info: 'lorem epsum 7' 
    },
    { 
        name: 'C8', 
        info: 'lorem epsum 8' 
    },
    { 
        name: 'C9', 
        info: 'lorem epsum 9' 
    },
    { 
        name: 'C10', 
        info: 'lorem epsum 10' 
    },
]

let ul = document.querySelector('ul');
let selectedcat = JSON.parse(localStorage.getItem('selectedcat')) || [];

for (let i = 0; i < category.length; i++) {
    let string = document.createElement('li');
    let txt = document.createElement('p');

    txt.textContent = category[i].name;


    let addbtn = document.createElement('button');
    addbtn.classList.add('plus');
    addbtn.textContent = "+";
    addbtn.setAttribute('data-category', category[i].name);
    addbtn.setAttribute('data-info', category[i].info);
    addbtn.addEventListener('click', function () {
        if (selectedcat.some(item => item.name === this.getAttribute('data-category'))) {
            alert("You can only select each category once!");
        } else {
            selectedcat.push({ name: this.getAttribute('data-category'), info: this.getAttribute('data-info') });
            localStorage.setItem('selectedcat', JSON.stringify(selectedcat));
            updatenextbtn();
        }
    });


    
    string.appendChild(txt);
    ul.appendChild(string);
    string.append(addbtn);
}

let nextbtn = document.querySelector('.nextbtn');

function updatenextbtn() {
    nextbtn.textContent = "Next > (" + selectedcat.length + ")";
}

document.addEventListener('DOMContentLoaded', updatenextbtn);
*/

const category = [
    { name: 'C1', info: 'lorem epsum 1' },
    { name: 'C2', info: 'lorem epsum 2' },
    { name: 'C3', info: 'lorem epsum 3' },
    { name: 'C4', info: 'lorem epsum 4' },
    { name: 'C5', info: 'lorem epsum 5' },
    { name: 'C6', info: 'lorem epsum 6' },
    { name: 'C7', info: 'lorem epsum 7' },
    { name: 'C8', info: 'lorem epsum 8' },
    { name: 'C9', info: 'lorem epsum 9' },
    { name: 'C10', info: 'lorem epsum 10' },
];

const ul = document.querySelector('ul');
const nextbtn = document.querySelector('.nextbtn');

// ✅ Always clear old selections on fresh home page load
localStorage.removeItem('selectedcat');
let selectedcat = [];

function updatenextbtn() {
    nextbtn.textContent = "Next > (" + selectedcat.length + ")";
}

function highlightSelected() {
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(li => {
        const name = li.querySelector('p').textContent;
        if (selectedcat.some(item => item.name === name)) {
            li.style.backgroundColor = 'lightgreen'; // ✅ Highlight full box
        } else {
            li.style.backgroundColor = 'white';
        }
    });
}

category.forEach(cat => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = cat.name;

    const addbtn = document.createElement('button');
    addbtn.classList.add('plus');
    addbtn.textContent = "+";
    addbtn.setAttribute('data-category', cat.name);
    addbtn.setAttribute('data-info', cat.info);

    addbtn.addEventListener('click', function () {
        const name = this.getAttribute('data-category');
        const info = this.getAttribute('data-info');
        if (selectedcat.some(item => item.name === name)) {
            alert("You can only select each category once!");
        } else {
            selectedcat.push({ name, info });
            localStorage.setItem('selectedcat', JSON.stringify(selectedcat));
            updatenextbtn();
            highlightSelected();
        }
    });

    li.appendChild(p);
    li.appendChild(addbtn);
    ul.appendChild(li);
});

document.addEventListener('DOMContentLoaded', () => {
    updatenextbtn();
    highlightSelected();

    // ✅ Hook to existing Home button
    const homeLinks = document.querySelectorAll('a[href="home.html"]');
    homeLinks.forEach(link => {
        link.addEventListener('click', () => {
            localStorage.removeItem('selectedcat');
        });
    });
});
