export interface Transaction {
    transactionId: string
    description: string
    amount: number
    creditDebitIndicator: string
    status: string
    transactionCode: {
        code: string
        subCode: string
    }
    proprietaryTransactionCode: null | string,
    bookingDate: string
    merchantDetails?: {
        merchantName?: null | string
        merchantCategoryCode?: string | null
    },
    enrichedData: {
        category: {
            id: number
            name: string
            confidence: number
        }
        class: {
            id: number
            name: string
            confidence: number
        }
        predictedMerchantName?: string | null
    },
    balance?: number
}

export interface Identifiers {
    accountNumber: string
    bankCode: string
    iban: string | null
    secondaryIdentification: string | null
}

export interface TransactionsData {
    balance: number;
    transactions: Transaction[];
    identifiers: Identifiers;
}