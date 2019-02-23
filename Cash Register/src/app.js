const getCashTotal = cash => (
    Math.round(
        cash.map(currency => currency[1])
        .reduce( (sum, currencyTotal) => sum += currencyTotal, 0)
    * 100) / 100
);

const checkCashRegister = (price, cash, cashInDrawer) => {
    const registerStatus = {
        open: "OPEN",
        closed: "CLOSED",
        insufficientFunds: "INSUFFICIENT_FUNDS"
    }

    const register = {
        status: null,
        change: null
    }

    const currency = {
        PENNY: 0.01,
        NICKEL: 0.05,
        DIME: 0.10,
        QUARTER: 0.25,
        ONE: 1,
        FIVE: 5,
        TEN: 10,
        TWENTY: 20,
        "ONE HUNDRED": 100
    }

    const cashInDrawerTotalValue = getCashTotal(cashInDrawer);
    
    const changeValue = cash - price;

    let changeValueReduction = changeValue

    const change = cashInDrawer.reverse().reduce( (array, item) => {
        const name = item[0];
        const total = item[1];
        const value = currency[name];
        let amount = Math.round(total/value);
        let amountToReturn = 0;
        let amountToReturnValue = value

        for (let i = amount; i > 0 && changeValueReduction >= value; i--) {
            amount --;
            changeValueReduction -= value;
            changeValueReduction = Math.round(changeValueReduction * 100)/100;
            amountToReturn ++;
        }

        amountToReturnValue *= amountToReturn;

        if (amountToReturn > 0) array.push([name, amountToReturnValue]);

        return array;
    }, []);

    const changeTotal = getCashTotal(change);

    if (cashInDrawerTotalValue === changeValue) {
        register.change = cashInDrawer.reverse();
        register.status = registerStatus.closed;
    }

    else if (changeTotal === changeValue) {
        register.change = change;
        register.status = registerStatus.open;
    }

    else {
        register.change = [];
        register.status = registerStatus.insufficientFunds;
    }

    return register;
}