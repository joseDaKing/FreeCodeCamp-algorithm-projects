"use strict";

var getCashTotal = function getCashTotal(cash) {
  return Math.round(cash.map(function (currency) {
    return currency[1];
  }).reduce(function (sum, currencyTotal) {
    return sum += currencyTotal;
  }, 0) * 100) / 100;
};

var checkCashRegister = function checkCashRegister(price, cash, cashInDrawer) {
  var registerStatus = {
    open: "OPEN",
    closed: "CLOSED",
    insufficientFunds: "INSUFFICIENT_FUNDS"
  };
  var register = {
    status: null,
    change: null
  };
  var currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.10,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  };
  var cashInDrawerTotalValue = getCashTotal(cashInDrawer);
  var changeValue = cash - price;
  var changeValueReduction = changeValue;
  var change = cashInDrawer.reverse().reduce(function (array, item) {
    var name = item[0];
    var total = item[1];
    var value = currency[name];
    var amount = Math.round(total / value);
    var amountToReturn = 0;
    var amountToReturnValue = value;

    for (var i = amount; i > 0 && changeValueReduction >= value; i--) {
      amount--;
      changeValueReduction -= value;
      changeValueReduction = Math.round(changeValueReduction * 100) / 100;
      amountToReturn++;
    }

    amountToReturnValue *= amountToReturn;
    if (amountToReturn > 0) array.push([name, amountToReturnValue]);
    return array;
  }, []);
  var changeTotal = getCashTotal(change);

  if (cashInDrawerTotalValue === changeValue) {
    register.change = cashInDrawer.reverse();
    register.status = registerStatus.closed;
  } else if (changeTotal === changeValue) {
    register.change = change;
    register.status = registerStatus.open;
  } else {
    register.change = [];
    register.status = registerStatus.insufficientFunds;
  }

  return register;
};