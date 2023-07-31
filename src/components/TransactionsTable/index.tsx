import React, { useState, useEffect } from "react";
import PaginationComponent from "./PaginationComponent";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { Transaction } from "../../types";
import "./transactionsTable.css";

interface TransactionsTableProps {
  currencyCode: string;
  transactions: Transaction[];
  setTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  currencyCode,
  transactions,
  setTransactions,
}) => {
  const transactionsPerPage: number = 8;

  const [sortOptions, setSortOptions] = useState<{
    dateSort: "asc" | "desc" | "none";
    categorySort: "asc" | "desc" | "none";
  }>({
    dateSort: "none",
    categorySort: "none",
  });

  const [showData, setShowData] = useState<Transaction[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [simple, setSimple] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSimple(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction =
      indexOfLastTransaction - transactionsPerPage;
    const data = transactions.slice(
      indexOfFirstTransaction,
      indexOfLastTransaction
    );
    setShowData(data);
  }, [transactions, currentPage, transactionsPerPage]);

  const handleSortOptionChange = (option: "date" | "category") => {
    const sortedTransactions = [...transactions];

    const newDateSort: "asc" | "desc" | "none" =
      option === "date"
        ? sortOptions.dateSort === "asc"
          ? "desc"
          : "asc"
        : sortOptions.dateSort;

    const newCategorySort: "asc" | "desc" | "none" =
      option === "category"
        ? sortOptions.categorySort === "asc"
          ? "desc"
          : "asc"
        : sortOptions.categorySort;

    if (option === "date") {
      sortedTransactions.sort((a, b) =>
        newDateSort === "asc"
          ? new Date(a.bookingDate).getTime() -
            new Date(b.bookingDate).getTime()
          : new Date(b.bookingDate).getTime() -
            new Date(a.bookingDate).getTime()
      );
    } else if (option === "category") {
      sortedTransactions.sort((a, b) =>
        newCategorySort === "asc"
          ? a.enrichedData.category.name.localeCompare(
              b.enrichedData.category.name
            )
          : b.enrichedData.category.name.localeCompare(
              a.enrichedData.category.name
            )
      );
    }

    setSortOptions({ dateSort: newDateSort, categorySort: newCategorySort });
    setTransactions(sortedTransactions);
  };

  const handlePaginationChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (value: number): void => {
    const newPerPage = Math.ceil(transactions.length / value);
    setCurrentPage((currentPage) => Math.min(currentPage, newPerPage));
  };

  return (
    <div className="mt-10">
      <div className="overflow-auto">
        <table className="min-w-full">
          <TableHeader
            sortOptions={sortOptions}
            onSortOptionChange={handleSortOptionChange}
          />
          <TableBody currencyCode={currencyCode} showData={showData} />
        </table>
      </div>
      <div className="pagination-container mt-8 flex justify-center">
        <PaginationComponent
          totalItems={transactions.length}
          itemsPerPage={transactionsPerPage}
          currentPage={currentPage}
          simple={simple}
          onChangePage={handlePaginationChange}
          onShowSizeChange={handlePerPageChange}
        />
      </div>
    </div>
  );
};

export default TransactionsTable;
