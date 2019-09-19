export class bankAccount {
    owner: string;
    balance: number;
    transactions: Array<number> = [];

    constructor(owner: string, balance: number, transactions: Array<number>) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }

    getBalance() {
        return this.balance;
    }

    withdrawal(withdrawalAmt: number) {
        this.balance -= withdrawalAmt;
        return withdrawalAmt;
    }

    deposit(depositAmt: number) {
        this.balance += depositAmt;
        return depositAmt;
    }
}

let harry = new bankAccount('Harry Potter', 1000, [2,3]);

export { harry };

console.log(harry.transactions);
