function listOptions(options) {
    const c = [];

    for (let i = 0; i < options.options.length; i++) {
        c.push(`
            ${i+1}.) ${options.options[i].description}
            <br>
        `);
    }
    
    return `
        Choose your ${options.category}:
        <br>
        ${c.join('')}
    `
}

function getComplexion() {

}

export {
    listOptions,
    getComplexion
}