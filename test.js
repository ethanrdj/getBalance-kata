const getBalance = require("./index");

describe("getBalance", () => {
    it("returns 0 if there are no transactions", () => {
        const mockTransaction = [{
            id: 123,
            sourceAccount: 'my_account',
            targetAccount: 'coffee_shop',
            amount: -30,
            category: 'eating_out',
            time: '2018-03-12T12:34:00Z'
        },
        {
            id: 200,
            sourceAccount: 'my_account',
            targetAccount: 'bakery',
            amount: -100,
            category: 'take_away',
            time: '2018-06-12T12:34:00Z'
        },
        {
            id: 300,
            sourceAccount: 'my_account',
            targetAccount: 'pub',
            amount: -60,
            category: 'drinking',
            time: '2018-02-12T12:34:00Z'
        },
        {
            id: 400,
            sourceAccount: 'my_account',
            targetAccount: 'tesco',
            amount: 120,
            category: 'food_shop',
            time: '2018-11-12T12:34:00Z'
        }];

        expect(getBalance([], "eating_out", new Date("2018-03-01"), new Date("2018-03-31"))).toEqual(0);

        expect(getBalance(mockTransaction, "take_away", new Date("2018-05-01"), new Date("2018-06-25"))).toEqual(-100);

        expect(getBalance(mockTransaction, "drinking", new Date("2018-01-01"), new Date("2018-02-25"))).toEqual(-60);

        expect(getBalance(mockTransaction, "food_shop", new Date("2018-11-01"), new Date("2018-12-25"))).toEqual(120);

        expect(getBalance(mockTransaction, "food_shop", new Date("2018-11-01"), new Date("2018-11-10"))).toEqual(0);

    });
});