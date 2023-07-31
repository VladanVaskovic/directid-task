import { useEffect, useState } from "react";
import "./App.css";
import TransactionsTable from "./components/TransactionsTable";
import { fetchTransactions } from "./services/api";
import { Transaction, Identifiers, TransactionsData } from "./types";
import Header from "./components/Header";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [holderName, setHolderName] = useState<string>("");
  const [currencyCode, setCurrencyCode] = useState<string>("");
  const [balance, setBalance] = useState<number>(0);
  const [identifiers, setIdentifiers] = useState<Identifiers>({});

  useEffect(() => {
    (async () => {
      try {
        const data: TransactionsData = await fetchTransactions();
        const {
          holderName: accountHolderName,
          currencyCode: currencyUnit,
          balance: initialBalance,
          transactions: fetchedTransactions,
          identifiers: dataIdentifiers,
        } = data;

        let tempBalance = initialBalance;
        const updatedTransactions = fetchedTransactions.map((item, index) => {
          const updated = { ...item, balance: tempBalance };
          tempBalance =
            item.creditDebitIndicator === "Debit"
              ? tempBalance + item.amount
              : tempBalance - item.amount;
          return updated;
        });

        setHolderName(accountHolderName);
        setCurrencyCode(currencyUnit);
        setBalance(initialBalance);
        setIdentifiers(dataIdentifiers);
        setTransactions(updatedTransactions);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div className="py-12 px-4 lg:p-24">
      <Header
        holderName={holderName}
        currencyCode={currencyCode}
        balance={balance}
        identifiers={identifiers}
      />
      <TransactionsTable
        currencyCode={currencyCode}
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
