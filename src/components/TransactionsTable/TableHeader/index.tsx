import React from "react";

interface TableHeaderProps {
  sortOptions: {
    dateSort: "asc" | "desc" | "none";
    categorySort: "asc" | "desc" | "none";
  };
  onSortOptionChange: (option: "date" | "category") => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({
  sortOptions,
  onSortOptionChange,
}) => {
  const renderSortButton = (
    label: string,
    sortOption: "asc" | "desc" | "none",
    onClick: () => void
  ) => (
    <button onClick={onClick} className="flex items-center justify-center">
      {label}{" "}
      {sortOption === "asc" ? (
        <span className="text-blue-700 font-black pl-4">&#8593;</span>
      ) : (
        <span className="text-blue-700 font-black pl-4">&#8595;</span>
      )}
    </button>
  );

  return (
    <thead className="bg-th-color">
      <tr>
        <th data-testid="transaction-header" className="w-4/12">
          Transaction
        </th>
        <th data-testid="date-header" className="w-2/12">
          {renderSortButton("Date", sortOptions.dateSort, () =>
            onSortOptionChange("date")
          )}
        </th>
        <th data-testid="category-header" className="w-2/12">
          {renderSortButton("Category", sortOptions.categorySort, () =>
            onSortOptionChange("category")
          )}
        </th>
        <th data-testid="debit-header" className="w-1/12">
          Debit
        </th>
        <th data-testid="credit-header" className="w-1/12">
          Credit
        </th>
        <th data-testid="balance-header" className="w-1/12">
          Balance
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
