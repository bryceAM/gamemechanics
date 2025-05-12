import { commands } from './utils/commands.js'
import { ROOMS } from './world/rooms.js'

// Initialize player character object
class Client {
    constructor() {
        this.location = {
            x: 0,
            y: 0,
            z: 0
        };
    }
    character = {};
}

const client = new Client();
const context = ['race', 'complexion', 'eye color', 'hair length', 'hair color', 'hair style'];

(function initialize() {
    /**
     * Sets your character's location in the first room of the world - the womb - where
     * character creation begins, and executes the room's character creation script.
     */

    // Initialize
    const xyz = `${client.location.x}${client.location.y}${client.location.z}`
    ROOMS[xyz].script(client, context, commands);
})()