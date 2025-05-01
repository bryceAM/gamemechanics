import { commands } from './utils/commands.js'
import { ROOMS } from './world/rooms.js'

// Initialize player character object
class Character {
    constructor(commands) {
        this.commands = commands;
    };
    appearance = {
        'complexion': null,
        'eye color': null,
        'hair length': null,
        'hair style': null,
        'hair color': null
    };
    race = {};
    location = {
        x: 0,
        y: 0,
        z: 0
    };
    look(room) {
        if (room == null || room == undefined || Object.keys(room).length <= 0) {
            commands.print("You don't see anything over there!");
            commands.print();
            return
        }

        const title = room.title;
        const description = room.description;
    
        commands.print(title);
        commands.print(description);
        commands.print();
    };
    room = {};
    move(room) {
        if (room == null || room == undefined) {
            commands.print("There's no way to get there!");
            return
        }
        this.room = room;
        this.look(this.room);
    };
    get description() {
        const a = this.appearance;
        return `You have a ${a['complexion']} complexion, ${a['eye color']} eyes, and ${a['hair length']} ${a['hair style']} ${a['hair color']} hair.`;
    };
}

const character = new Character(commands);

(function initialize() {
    /**
     * Sets your character's location in the first room of the world - the womb - where
     * character creation begins, and executes the room's character creation script.
     */

    // Initialize
    const xyz = `${character.location.x}${character.location.y}${character.location.z}`;
    const room = ROOMS[xyz];
    character.move(room);
    character.room.script(character);
})()