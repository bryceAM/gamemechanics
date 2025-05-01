import { commands } from '../utils/commands.js'
import {
    COMPLEXIONS,
    EYECOLORS,
    HAIRSTYLES,
    HAIRLENGTHS,
    HAIRCOLORS,
    RACES
} from './lists.js'

function listOptions(featureSet) {
    const c = [];

    for (let i = 0; i < featureSet.options.length; i++) {
        c.push(`
            ${i+1}.) ${featureSet.options[i].selection}
            <br>
        `);
    }
    
    return `
        Choose your ${featureSet.category}:
        <br>
        ${c.join('')}
    `
}

function createCharacter(character) {
    const button = document.querySelector('button');
    const input = document.querySelector('input');
    let i = 0;
    
    // Races
    const races = {
        category: RACES.category,
        options: RACES.options.map(option => {
            return {
                selection: option.selection.race
            }
        })
    }
    commands.print(listOptions(races));
    button.addEventListener('click', race);
    document.addEventListener('keydown', race);
    function race(e) {
        if (e.key == 'Enter' || e.type == 'click') {
            character.race = commands.choose(RACES);
            console.log('race:', character.race) // test code
            i++
            if (i >= races.length) {
                button.removeEventListener('click', appearance);
                document.removeEventListener('keydown', appearance);
                i = 0;

                return
            }
            commands.print(listOptions(features[i]));
            commands.resetInput(input);
        }
    }

    // Appearance choices
    const features = [
        COMPLEXIONS,
        EYECOLORS,
        HAIRLENGTHS,
        HAIRSTYLES,
        HAIRCOLORS
    ]
    commands.print(listOptions(features[i]));
    button.addEventListener('click', appearance);
    document.addEventListener('keydown', appearance);
    function appearance(e) {
        if (e.key == 'Enter' || e.type == 'click') {
            character.appearance[features[i].category] = commands.choose(features[i]);
            i++
            if (i >= features.length) {
                button.removeEventListener('click', appearance);
                document.removeEventListener('keydown', appearance);
                i = 0;

                return
            }
            commands.print(listOptions(features[i]));
            commands.resetInput(input);
        }
    }
}

export {
    listOptions,
    createCharacter
}