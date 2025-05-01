import { createCharacter } from '../creation/create.js'

const ROOMS = {
    '000': {
        title: '[The Womb: Moment of Creation]',
        description: 'Blinding light permeates the atmosphere as you feel assured in your sense of purpose.',
        script: createCharacter
    }
}

export {
    ROOMS
}