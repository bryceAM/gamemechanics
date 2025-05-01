import {
    clear,
    print
} from './utils.js';

function resetInput(input) {
    input.value = '';
    input.focus()
}

function makeChoice(featureSet) {
    const input = document.querySelector('input');
    const i = Number(input.value) - 1;
    
    console.log(featureSet.options[i].selection) // test code
    resetInput(input);

    return featureSet.options[i].selection
}

const commands = {
    choose: makeChoice,
    resetInput: resetInput,
    print: print
}

export {
    commands
}