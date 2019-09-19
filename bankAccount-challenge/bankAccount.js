"use strict";
exports.__esModule = true;
var bankAccount = /** @class */ (function () {
    function bankAccount(owner, balance) {
        this.transactions = [];
        this.owner = owner;
        this.balance = balance;
    }
    bankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    bankAccount.prototype.withdrawal = function (withdrawalAmt) {
        this.balance -= withdrawalAmt;
        this.transactions.push(withdrawalAmt);
        return withdrawalAmt;
    };
    bankAccount.prototype.deposit = function (depositAmt) {
        this.balance += depositAmt;
        this.transactions.push(depositAmt);
        return depositAmt;
    };
    return bankAccount;
}());
exports.bankAccount = bankAccount;
