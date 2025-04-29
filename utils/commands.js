// import { ROOMS } from '../world/rooms.js';

import * as creationChoices from '../creation/lists.js';

import {
    clear,
    print
} from './utils.js';

// function move(xyz) {
//     const description = ROOMS[xyz].description;
//     const commands = ROOMS[xyz].commands;

//     print(description)

//     return commands;
// }

function look(room) {
    const description = room.description;

    print(description)
}

function resetInput(input) {
    input.innerHTML = '';
    input.focus()
}

function makeChoice(params) {
    const input = document.querySelector('input');
    const i = Number(input.value) - 1;
    
    const attribute = Object.values(creationChoices).find(creationChoice => creationChoice.category == params).options[i].description;
    console.log(attribute) // test code

    resetInput(input);

    // return attribute
}

const commands = {
    choose: makeChoice,
    // move: move,
    look: look
}

export {
    commands
}