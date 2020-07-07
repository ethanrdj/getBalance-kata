const getBalance = (transactionsList = [], category, startTime, endTime) => {
    let balance = 0;

    transactionsList.forEach(transaction => {
        if (transaction.category === category && new Date(transaction.time) >= new Date(startTime) && new Date(transaction.time) <= new Date(endTime)) {
            balance += transaction.amount;
        }
    });
    return balance;
};


module.exports = getBalance;