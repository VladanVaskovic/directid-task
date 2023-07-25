import data from '../mock/Apollo-Carter.json'

export const fetchTransactions = () => {
    return {balance: data.accounts[0].balances.current.amount, transactions: data.accounts[0].transactions, identifiers: data.accounts[0].identifiers}
}