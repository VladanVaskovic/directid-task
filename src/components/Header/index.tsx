import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import { Identifiers } from "../../types";

interface HeaderProps {
  holderName: string;
  currencyCode: string;
  balance?: number;
  identifiers: Identifiers;
}

const Header: React.FC<HeaderProps> = ({
  holderName,
  currencyCode,
  balance,
  identifiers,
}) => {
  return (
    <div className="items-center justify-between xl:grid grid-cols-2">
      <div className="lg:mb-5">
        <img className="w-48 sm:w-64" src="/img/logo.png" alt="logo" />
        <p className="text-2xl font-bold text-main-color pt-5 sm:text-3xl">
          User Transactions ({currencyCode})
        </p>
      </div>
      <div className="justify-between bg-account-back rounded-xl px-4 py-3 mt-8 lg:mt-0 sm:px-9 sm:flex sm:py-6">
        <div className="flex flex-col">
          <p className="text-main-color font-bold text-xl sm:text-2xl mb-4">
            {holderName}
          </p>
          <p className="text-lg font-semibold">
            Account Number: {identifiers.accountNumber}
          </p>
          <p className="text-lg font-semibold">
            Branch Code: {identifiers.bankCode}
          </p>
        </div>
        <div className="flex-col justify-between items-end mt-6 md:mt-0 sm:ml-6 sm:flex">
          <p className="text-main-color text-2xl sm:text-3xl mb-4">Balance</p>
          {balance && (
            <p className="text-3xl sm:text-4xl md:text-5xl">
              {getSymbolFromCurrency(currencyCode)}
              {balance}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
