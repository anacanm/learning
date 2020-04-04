let myAccount = {
    name: "Anacan Mangelsdorf",
    income: 0,
    expenses: 0
}

let addExpense = function(account,amount)
{
    account.expenses+=amount;
}
let addIncome = function(account,amount)
{
    account.income+=amount;
}
let resetAccount = function(account)
{
    account.income = 0
    account.expenses = 0
}
let getAccountSummary = function(account)
{
    if(account.income>=account.expenses){
        string = `${account.name} has $${account.income-account.expenses}, with $${account.income} income and $${account.expenses} expenses`;
    }
    else{
        string = `Yikes, ${account.name} is in $${account.expenses-account.income} of debt, with $${account.income} income and $${account.expenses} expenses`;
    }
    return string;
}
addExpense(myAccount,300);
addIncome(myAccount,500);
console.log(getAccountSummary(myAccount));
addExpense(myAccount,700);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));