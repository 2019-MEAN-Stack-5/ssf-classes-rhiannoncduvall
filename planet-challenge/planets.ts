export class planet {
    width: number;
    color: string;

    constructor(width: number, color: string) {
        this.width = width;
        this.color = color;
    }
}

let krypton = new planet(200, 'blue');
let omicronPersei8 = new planet(300, 'red');
let nemesis = new planet(100, 'yellow');

export { krypton };
export { omicronPersei8 };
export { nemesis };