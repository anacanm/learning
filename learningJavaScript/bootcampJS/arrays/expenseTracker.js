const account = {
    name: 'Anacan',
    expenses: [],
    addExpense: function (description,amount){
        this.expenses.push({
            description: description,
            expense: amount
        })
    },

    printSummary: function(){
        sum = 0;
        this.expenses.forEach(element=>{
            sum += element.expense;
        })
        console.log(`${this.name} has $${sum} in expenses`)

    }
}


account.addExpense("Food",15);
account.addExpense("Food",40);
account.addExpense("Income", -5);
account.printSummary();