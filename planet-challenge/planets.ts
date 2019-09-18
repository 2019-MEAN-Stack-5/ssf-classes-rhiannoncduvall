export class Planet {
    width: number;
    color: string;

    constructor(width: number, color: string) {
        this.width = width;
        this.color = color;
    }
}

let krypton = new Planet(200, 'blue');
let omicronPersei8 = new Planet(300, 'red');
let nemesis = new Planet(100, 'yellow');

export { krypton, omicronPersei8, nemesis };