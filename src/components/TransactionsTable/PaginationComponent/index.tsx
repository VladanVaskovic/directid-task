import React from "react";
import Pagination from "rc-pagination";

interface PaginationComponentProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  simple: boolean;
  onChangePage: (page: number) => void;
  onShowSizeChange: (value: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  simple,
  onChangePage,
  onShowSizeChange,
}) => {
  const renderPrevNextArrow = (
    current: number,
    type: "jump-prev" | "jump-next" | "prev" | "next" | "page",
    originalElement: React.ReactNode
  ): React.ReactNode => {
    if (type === "prev") {
      return (
        <button>
          <i className="fa fa-angle-double-left"></i>
        </button>
      );
    }
    if (type === "next") {
      return (
        <button>
          <i className="fa fa-angle-double-right"></i>
        </button>
      );
    }
    return originalElement;
  };

  return (
    <Pagination
      className="pagination-data text-white"
      onChange={onChangePage}
      total={totalItems}
      current={currentPage}
      pageSize={itemsPerPage}
      showSizeChanger={false}
      simple={simple}
      locale={{
        items_per_page: "Items per page",
        jump_to: "Jump to",
        jump_to_confirm: "Jump to confirm",
        page: "page",
        prev_page: "Previous page",
        next_page: "Next page",
        prev_5: "Previos 5 pages",
        next_5: "Next 5 pages",
        prev_3: "Previos 3 pages",
        next_3: "Next 3 pages",
      }}
      showQuickJumper={true}
      itemRender={renderPrevNextArrow}
      onShowSizeChange={onShowSizeChange}
    />
  );
};

export default PaginationComponent;
