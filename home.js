const category = [
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