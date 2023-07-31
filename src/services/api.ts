import data from '../mock/Apollo-Carter.json';

export const fetchTransactions = () => {
  const { accountHolderNames: holderName, currencyCode, balances, transactions, identifiers } = data.accounts[0];
  const { current: { amount: balance } } = balances;

  return {
    holderName,
    currencyCode,
    balance,
    transactions,
    identifiers,
  };
};
