import {
    Races
} from './lists.js'

function createCharacter(client, context, commands) {
    const button = document.querySelector('button');
    const input = document.querySelector('input');

    button.addEventListener('click', appearance);
    document.addEventListener('keydown', appearance);
    
    // Begin character creation...
    let curContext = context.shift();
    choicesFor(curContext);
    
    function choicesFor(context) {
        if (context == null || context == undefined) return
        const choices = [];

        if (context == 'race') {
            for (let i = 0; i < Races.length; i++) {
                choices.push(`${i + 1}. ${Races[i].title}`)
            }
        } else {
            for (let i = 0; i < client.character.dna[context].length; i++) {
                choices.push(`${i + 1}. ${client.character.dna[curContext][i].gene}`)
            }
        }

        commands.print(`Choose your ${context}:`);
        commands.print(choices.join('<br>'));
        commands.print();
    }

    function appearance(e) {

        if (e.key == 'Enter' || e.type == 'click') {
            switch (curContext) {
                case 'race': {
                    const choice = Number(input.value) - 1;
                    const Race = Races[choice].race;
                    
                    client.character = new Race();
                    curContext = context.shift();
                    choicesFor(curContext);
                    break;
                }
                case 'complexion': {
                    const choice = Number(input.value) - 1;
                    const complexion = client.character.dna['complexion'][choice];
                    
                    client.character.appearance['complexion'] = complexion.gene;
                    curContext = context.shift();
                    choicesFor(curContext);
                    break;
                }
                case 'eye color': {
                    const choice = Number(input.value) - 1;
                    const eyeColor = client.character.dna['eye color'][choice];
                    
                    client.character.appearance['eye color'] = eyeColor.gene;
                    curContext = context.shift();
                    choicesFor(curContext);
                    break;
                }
                case 'hair length': {
                    const choice = Number(input.value) - 1;
                    const hairLength = client.character.dna['hair length'][choice];
                    
                    client.character.appearance['hair length'] = hairLength.gene;
                    curContext = context.shift();
                    choicesFor(curContext);
                    break;
                }
                case 'hair color': {
                    const choice = Number(input.value) - 1;
                    const hairColor = client.character.dna['hair color'][choice];
                    
                    client.character.appearance['hair color'] = hairColor.gene;
                    curContext = context.shift();
                    choicesFor(curContext);
                    break;
                }
                case 'hair style': {
                    const choice = Number(input.value) - 1;
                    const hairStyle = client.character.dna['hair style'][choice];
                    
                    client.character.appearance['hair style'] = hairStyle.gene;
                    curContext = context.shift();
                    
                    commands.print(client.character.description)
                    button.removeEventListener('click', appearance);
                    document.removeEventListener('keydown', appearance);
                }
            }

            commands.resetInput(input);
        }
    }
}

export {
    createCharacter
}