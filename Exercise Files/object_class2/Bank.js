const Bank = class {
  constructor(
    firstName,
    lastName,
    DOB,
    address,
    checkingAccount,
    savingAccount,
    tradingAccount,
    RRSP,
    edgeFund
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = DOB;
    this.address = address;
    this.account = {
      checkingAccount: checkingAccount,
      savingAccount: savingAccount,
      tradingAccount: tradingAccount,
      RRSP: RRSP,
      edgeFund: edgeFund,
    };
  }
  changeName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  addFund(newCheckAmount, newSaveAmount) {
    this.checkingAccount = newCheckAmount;
    this.savingAccount = newSaveAmount;
  }

  modifyAccount(newCAccountName, newSAccountName, newTAccountName){
    this.checkingAccount = newCAccountName;
    this.savingAccount = newSAccountName;
    this.tradingAccount = newTAccountName;
  }
};

export default Bank;
