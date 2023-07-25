import React from "react";
import { Identifiers } from "../../types";

interface HeaderProps {
  balance?: number;
  identifiers?: Identifiers;
}

const Header: React.FC<HeaderProps> = ({ balance, identifiers }) => {
  const renderIdentifiers = () => {
    if (!identifiers) return null;

    return (
      <div>
        <p className="text-lg font-semibold">
          Account Number: {identifiers.accountNumber}
        </p>
        <p className="text-lg font-semibold">
          Branch Code: {identifiers.bankCode}
        </p>
      </div>
    );
  };

  return (
    <div className="items-center justify-between xl:grid grid-cols-2">
      <div className="lg:mb-5">
        <img className="w-48 sm:w-64" src="/img/logo.png" alt="logo" />
        <p className="text-2xl font-bold text-main-color pt-5 sm:text-3xl">
          User Transactions (GBP)
        </p>
      </div>
      <div className="justify-between bg-account-back rounded-xl px-4 py-3 mt-8 lg:mt-0 sm:px-9 sm:flex sm:py-6">
        <div className="flex flex-col">
          <p className="text-main-color font-bold text-xl sm:text-2xl mb-4">
            Ms Barbara Lawns
          </p>
          {renderIdentifiers()}
        </div>
        <div className="flex-col justify-between items-end mt-6 md:mt-0 sm:ml-6 sm:flex">
          <p className="text-main-color text-2xl sm:text-3xl mb-4">Balance</p>
          {balance && (
            <p className="text-3xl sm:text-4xl md:text-5xl">£{balance}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
