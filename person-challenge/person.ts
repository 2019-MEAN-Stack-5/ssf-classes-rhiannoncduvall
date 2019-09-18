export class person {
    firstName: string;
    lastName: string;
    age: number;
    isAlive: boolean = true;

    constructor(firstName: string, lastName: string, age: number, isAlive: boolean = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isAlive = isAlive;
    }
}

let humanoidA = new person("Fox", "Mulder", 35);

export { humanoidA };