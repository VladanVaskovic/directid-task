import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { format } from "date-fns";
import { Transaction } from "../../../types";

interface TableBodyProps {
  currencyCode: string;
  showData: Transaction[];
}

const TableBody: React.FC<TableBodyProps> = ({ currencyCode, showData }) => {
  return (
    <tbody>
      {showData.map((transaction: Transaction) => {
        const formattedDate = format(
          new Date(transaction.bookingDate),
          "dd/MM/yyyy"
        );
        const isDebit = transaction.creditDebitIndicator === "Debit";
        const isCredit = transaction.creditDebitIndicator === "Credit";

        return (
          <tr
            className="even:bg-tr-color odd:bg-white"
            key={transaction.transactionId}
          >
            <td>{transaction.description}</td>
            <td>{formattedDate}</td>
            <td>{transaction.enrichedData.category.name}</td>
            <td>
              {isDebit ? getSymbolFromCurrency(currencyCode) : ""}
              {isDebit ? transaction.amount : "-"}
            </td>
            <td>
              {isCredit ? getSymbolFromCurrency(currencyCode) : ""}
              {isCredit ? transaction.amount : "-"}
            </td>
            <td>{transaction.balance?.toFixed(2)}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
