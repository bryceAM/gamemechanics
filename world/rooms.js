import { commands } from '../utils/commands.js'
import { listOptions } from '../creation/create.js'
import { COMPLEXIONS, EYECOLORS, HAIRLENGTHS, HAIRSTYLES, HAIRCOLORS } from '../creation/lists.js'

const ROOMS = {
    '000': {
        params: COMPLEXIONS.category,
        description: listOptions(COMPLEXIONS),
        commands: commands
    },
    '001': {
        params: EYECOLORS.category,
        description: listOptions(EYECOLORS),
        commands: commands
    },
    '002': {
        params: HAIRLENGTHS.category,
        description: listOptions(HAIRLENGTHS),
        commands: commands
    },
    '003': {
        params: HAIRSTYLES.category,
        description: listOptions(HAIRSTYLES),
        commands: commands
    },
    '004': {
        params: HAIRCOLORS.category,
        description: listOptions(HAIRCOLORS),
        commands: commands
    }
}

export {
    ROOMS
}