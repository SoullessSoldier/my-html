'use strict';

const ul = document.querySelector('ul'),
    input = document.querySelector('ul>input'), 
    counterSpan = document.querySelector('.details span'),
    removeBtn = document.querySelector('.details button');

let maxTags = 10,
    tags = [];

const remove = (element, tag) => {
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index+1)];
    element.parentElement.remove();
    countTag();
};

const countTag = () => {
    input.focus();
    counterSpan.innerText = maxTags - tags.length;
};

const createTag = () => {
    ul.querySelectorAll('li').forEach(item => item.remove());
    tags.slice().reverse().forEach(tag => {
        let liTag = `
            <li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>
        `;
        ul.insertAdjacentHTML('afterbegin', liTag);
    });
    countTag();
};


const addTag = (e) => {
    if(e.key === 'Enter') {
        let tag = e.target.value.replace(/\s+/g, ' ').trim();
        if(tag.length > 0 && !tags.includes(tag)){
            tag.split(',').forEach(tag => {
                tag = tag.trim();
                if (tags.length < 10){
                    if(tag.length > 0 && !tags.includes(tag)){
                        tags.push(tag);
                        createTag();
                    }
                }
            });
        }
        e.target.value = '';
    }
};

countTag();

input.addEventListener('keyup', addTag);
removeBtn.addEventListener('click', () => {
    tags.length = 0;
    ul.querySelectorAll('li').forEach(li => li.remove());
    countTag();
});