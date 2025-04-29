import * as commands from './utils/commands.js'
import { ROOMS } from './world/rooms.js'

// Initialize player character object
const character = {
    location: {
        x: 0,
        y: 0,
        z: 0
    },
    commands: commands,
    room: {}
}

function getRoom(xyz) {
    return ROOMS[xyz]
}

(function initialize() {
    /**
     * Initializes the game with the splash screen and handles tidying
     * up the splash screen and loading you into the world upon any key
     * press.
     */


    const button = document.querySelector('button');

    // Initialize
    const xyz = `${character.location.x}${character.location.y}${character.location.z}`; // stringify the location
    character.room = getRoom(xyz);
    character.commands = character.room.commands;
    character.commands.look(character.room);


    button.addEventListener('click', (e) => {
        character.commands.choose(character.room.params)
        character.location.z += 1;
        const xyz = `${character.location.x}${character.location.y}${character.location.z}`;

        character.room = getRoom(xyz);
        character.commands = character.room.commands;
        character.commands.look(character.room)
    });
    // button.addEventListener('click', event);
    // document.addEventListener('keydown', event)

    

    // Function declarations
    // function event() {
    //     clear();
    //     print(listOptions(COMPLEXIONS));
    //     print(listOptions(EYECOLORS));
    //     print(listOptions(HAIRLENGTHS));
    //     print(listOptions(HAIRSTYLES));
    //     print(listOptions(HAIRCOLORS));
        

    //     button.removeEventListener('click', event);
    //     document.removeEventListener('keydown', event);
    // }
})()