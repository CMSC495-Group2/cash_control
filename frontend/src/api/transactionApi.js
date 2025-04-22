import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// Get all transactions
export const getTransactionsList = () => {
  return axios.get(`${BASE_URL}/transactions`);
};

// Get Filtered Transactions
export const getFilteredTransactions = (filter) => {
  return axios.get(`${BASE_URL}/transactions/filter`, { params: filter });
};

// Create a new transaction
export const createTransaction = async (transactionData) => {
  return axios.post(`${BASE_URL}/transactions`, transactionData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Get a single transaction by ID
export const getTransaction = async (id) => {
  return axios.get(`${BASE_URL}/transaction?id=${id}`);
};

export const deleteTransactionById = async (id) => {
  return axios.delete(`${BASE_URL}/transaction?id=${id}`);
};
