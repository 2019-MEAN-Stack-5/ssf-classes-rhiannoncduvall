export class bankAccount {
    owner: string;
    balance: number;
    transactions: Array<number> = [];

    constructor(owner: string, balance: number) {
        this.owner = owner;
        this.balance = balance;
    }

    getBalance() {
        return this.balance;
    }

    withdrawal(withdrawalAmt: number) {
        this.balance -= withdrawalAmt;
        this.transactions.push(withdrawalAmt);
        return withdrawalAmt;
    }

    deposit(depositAmt: number) {
        this.balance += depositAmt;
        this.transactions.push(depositAmt);
        return depositAmt;
    }
}