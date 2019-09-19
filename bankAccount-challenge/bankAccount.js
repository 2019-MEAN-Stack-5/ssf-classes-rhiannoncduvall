"use strict";
exports.__esModule = true;
var bankAccount = /** @class */ (function () {
    function bankAccount(owner, balance, transactions) {
        this.transactions = [];
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.withdrawal = function (withdrawalAmt) {
        this.balance -= withdrawalAmt;
        return withdrawalAmt;
    };
    bankAccount.prototype.deposit = function (depositAmt) {
        this.balance += depositAmt;
        return depositAmt;
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
var harry = new bankAccount('Harry Potter', 1000, [2, 3]);
exports.harry = harry;
console.log(harry.transactions);
