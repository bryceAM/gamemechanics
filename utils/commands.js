import {
    clear,
    print
} from './utils.js';

function resetInput(input) {
    input.value = '';
    input.focus()
}

function makeChoice(featureList) {
    const input = document.querySelector('input');
    const i = Number(input.value) - 1;
    
    console.log(featureList) // test code
    console.log(featureList[i].gene) // test code
    resetInput(input);

    return featureList[i].gene
}

const commands = {
    choose: makeChoice,
    resetInput: resetInput,
    print: print
}

export {
    commands
}