import { useEffect, useState } from "react";
import "./App.css";
import TransactionsTable from "./components/TransactionsTable";
import { fetchTransactions } from "./services/api";
import { Transaction, Identifiers, TransactionsData } from "./types";
import Header from "./components/Header";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(0);
  const [identifiers, setIdentifiers] = useState<Identifiers | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: TransactionsData = await fetchTransactions();
        const {
          balance: initialBalance,
          transactions: fetchedTransactions,
          identifiers: dataIdentifiers,
        } = data;

        const updatedTransactions = fetchedTransactions.map(
          (item: Transaction, index: number) => {
            const prevBalance =
              index > 0
                ? fetchedTransactions[index - 1].balance
                : initialBalance;
            const current =
              prevBalance !== undefined
                ? prevBalance +
                  (item.creditDebitIndicator === "Credit"
                    ? -item.amount
                    : item.amount)
                : initialBalance;
            return { ...item, balance: current };
          }
        );

        setBalance(initialBalance);
        setIdentifiers(dataIdentifiers);
        setTransactions(updatedTransactions);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-12 px-4 lg:p-24">
      <Header balance={balance} identifiers={identifiers} />
      <TransactionsTable
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default App;
