
function clear() {
    /**
     * Clear the terminal
     */

    const terminal = document.getElementById('terminal');
    
    terminal.innerHTML = '';
}

function print(content) {
    /**
     * Print content from an action
     */

    const terminal = document.getElementById('terminal');
    const oldContent = terminal.innerHTML;
    const RETURN = '<br>';
    const newContent = content + RETURN;

    terminal.innerHTML = oldContent + newContent;
    terminal.scrollTop = terminal.scrollHeight;
}

function command(event) {
    const enterClicked = event.srcElement?.innerHTML == 'ENTER';
    
    if (enterClicked) print('enter was clicked')

}

export {
    clear,
    print,
    command
}