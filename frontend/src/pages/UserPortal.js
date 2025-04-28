import { TabSelector } from "./../components/TabSelector";
import { TransactionsList } from "../components/TransactionsList";
import TransactionsFilter from "../components/TransactionsFilter";
import SummariesChart from "../components/SummariesChart";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { getUser } from "../api/userApi";
import {
  getTransactionsList,
  createTransaction,
  getFilteredTransactions,
} from "../api/transactionApi";
import TransactionForm from "../components/TransactionForm";
import { deleteTransactionById } from "../api/transactionApi";
import TransactionModal from "../components/TransactionModal";

const UserPortal = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("summaries-chart");
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        //console.log("FETCH USER id: ", id);
        const response = await getUser(id);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user: ", error);
      }
    };
    fetchUser();
  }, [id]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await getTransactionsList();
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    };
    fetchTransactions();
  }, []);

  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const deleteTransaction = async (id) => {
    try {
      await deleteTransactionById(id);
      setTransactions(
        transactions.filter((transaction) => transaction.transactionID !== id)
      );
    } catch (error) {
      console.error("Error deleting transaction: ", error);
    }
  };

  const handleAddTransaction = async (transactionToSend) => {
    try {
      const response = await createTransaction(transactionToSend);
      setTransactions([...transactions, response.data]);
    } catch (error) {
      console.error("Error adding transaction: ", error);
    }
  };

  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        let response;
        if (Object.keys(filters).length > 0) {
          response = await getFilteredTransactions(filters);
        } else {
          response = await getTransactionsList();
        }
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions: ", error);
      }
    };
    fetchTransactions();
  }, [filters]);

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };
  return (
    <>
      {user ? (
        <div className="user-portal">
          <NavBar />
          <div className="main-content">
            <TabSelector
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              username={user.name}
              onOpenModal={() => setIsModalOpen(true)}
            />
            <div className="tab-content">
              {activeTab === "summaries-chart" && (
                <div className="summaries-chart">
                  <SummariesChart balance={balance} />
                </div>
              )}
              {activeTab === "transactions-list" && (
                <div className="transactions-list">
                  <TransactionsFilter onFilter={handleFilter} />
                  <TransactionsList
                    transactions={transactions}
                    deleteTransaction={deleteTransaction}
                    filters={filters}
                  />
                </div>
              )}
            </div>
          </div>
          <TransactionModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <TransactionForm
              userID={user.userID}
              onAddTransaction={handleAddTransaction}
            />
          </TransactionModal>
        </div>
      ) : (
        <h1>Loading user...</h1>
      )}
    </>
  );
};

export default UserPortal;
