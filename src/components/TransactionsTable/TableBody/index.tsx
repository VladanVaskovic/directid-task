import React from "react";
import { Transaction } from "../../../types";

interface TableBodyProps {
  showData: Transaction[];
}

const TableBody: React.FC<TableBodyProps> = ({ showData }) => {
  return (
    <tbody>
      {showData.map((transaction: Transaction) => {
        const bookingDate = transaction.bookingDate.split("T")[0];
        const [year, month, day] = bookingDate.split("-");
        const formattedDate = `${day}/${month}/${year}`;
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
              {isDebit ? "£" : ""}
              {isDebit ? transaction.amount : "-"}
            </td>
            <td>
              {isCredit ? "£" : ""}
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
