class Humanoid {
    constructor() {
        this.dna = {
            'race': [{gene: 'Humanoid'}],
            'complexion': [
                {gene: 'fair'},
                {gene: 'healthy'},
                {gene: 'white'},
                {gene: 'wan'},
                {gene: 'pasty'},
                {gene: 'blanched'},
                {gene: 'tanned'},
                {gene: 'blushing'},
                {gene: 'flushed'},
                {gene: 'freckled'}
            ],
            'eye color': [
                {gene: 'blue'},
                {gene: 'brown'},
                {gene: 'green'},
                {gene: 'gray'},
                {gene: 'white'},
                {gene: 'multihued'}
            ],
            'hair length': [
                {gene: 'bald'},
                {gene: 'balding'},
                {gene: 'short'},
                {gene: 'medium-length'},
                {gene: 'shoulder-length'},
                {gene: 'long'},
                {gene: 'ankle-length'}
            ],
            'hair style': [
                {gene: 'straight'},
                {gene: 'unkempt'},
                {gene: 'shaggy'},
                {gene: 'unruly'},
                {gene: 'loose'},
                {gene: 'fluffy'},
                {gene: 'wispy'}
            ],
            'hair color': [
                {gene: 'black'},
                {gene: 'blue-black'},
                {gene: 'jet-black'},
                {gene: 'brown'},
                {gene: 'light-brown'},
                {gene: 'umber'},
                {gene: 'dark-brown'},
                {gene: 'auburn'},
                {gene: 'chestnut'},
                {gene: 'russet'},
                {gene: 'brunette'},
                {gene: 'white'},
                {gene: 'gray'},
                {gene: 'steel-gray'},
                {gene: 'hoar-gray'}
            ]
        }
    }
    appearance = {
        'complexion': null,
        'eye color': null,
        'hair length': null,
        'hair style': null,
        'hair color': null
    };
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

class Human extends Humanoid {
    constructor() {
        super();
        this.dna['race'] = [{gene: 'Human'}];
        this.dna['complexion'].push(...[
            {gene: 'lily-white'},
            {gene: 'ivory'},
            {gene: 'alabaster'},
            {gene: 'ashen'},
            {gene: 'pallid'},
            {gene: 'pale'},
            {gene: 'snow-white'},
            {gene: 'porcelain'},
            {gene: 'rosy'},
            {gene: 'ruddy'},
            {gene: 'swarthy'},
            {gene: 'tawny'},
            {gene: 'bronzed'},
            {gene: 'leathery'},
            {gene: 'dun'},
            {gene: 'dusky'},
            {gene: 'ebony'},
            {gene: 'sable'},
            {gene: 'sallow'},
            {gene: 'coppery'}
        ]);
        this.dna['eye color'].push(...[
            {gene: 'crystal blue'},
            {gene: 'sky blue'},
            {gene: 'pale blue'},
            {gene: 'cobalt blue'},
            {gene: 'hazel'},
            {gene: 'dark-brown'},
            {gene: 'ale-brown'},
            {gene: 'milky-white'},
            {gene: 'steely'},
            {gene: 'steel-gray'},
            {gene: 'dusky-gray'},
            {gene: 'silver'},
            {gene: 'emerald'},
            {gene: 'viridian'},
            {gene: 'purple'},
            {gene: 'violet'},
            {gene: 'lilac'},
            {gene: 'wine-dark'}
        ]);
        this.dna['hair style'].push(...[
            {gene: 'wavy'},
            {gene: 'braided'},
            {gene: 'plaited'},
            {gene: 'cropped'},
            {gene: 'tied-back'},
            {gene: 'curly'},
            {gene: 'frazzled'},
            {gene: 'slicked-back'},
            {gene: 'tonsured'},
            {gene: 'bobbed'},
            {gene: 'silky'},
            {gene: 'downy'}
        ]);
        this.dna['hair color'].push(...[
            {gene: 'amber'},
            {gene: 'blonde'},
            {gene: 'strawberry-blonde'},
            {gene: 'honey-blonde'},
            {gene: 'sandy-blonde'},
            {gene: 'golden'},
            {gene: 'midnight-black'},
            {gene: 'chocolate-brown'},
            {gene: 'ochre'},
            {gene: 'ginger'},
            {gene: 'platinum'},
            {gene: 'red'},
            {gene: 'titian'},
            {gene: 'scarlet'},
            {gene: 'fiery red'}
        ]);
    }
}

const Races = [
    {title: 'Human', race: Human}
]

export {
    Humanoid,
    Human,
    Races
}