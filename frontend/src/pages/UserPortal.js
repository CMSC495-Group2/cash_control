import { TabSelector } from "./../components/TabSelector";
import { TransactionsList } from "./../components/TransactionsList";
import { SummariesChart } from "./../components/SummariesChart";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { getUser } from "../api/userApi";
import AddTransaction from "../components/AddTransaction";

const UserPortal = () => {
  //Extract the user ID from the route parameters
  const { id } = useParams();
  //State to store the user data that was fetched from API
  const [user, setUser] = useState(null);
  //State to keep track of the currently active tab
  const [activeTab, setActiveTab] = useState("summaries-chart");

  // Effect to fetch user data from API on mount || when user ID changes
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("FETCH USER id: ", id);
        const response = await getUser(id);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user: ", error);
      }
    };
    fetchUser();
  }, [id]); //Dependency Array

  console.log("USER PORTAL user: ", user);
  // Load initial transactions from localStorage or set default ones
  const initialTransactions = JSON.parse(
    localStorage.getItem("transactions")
  ) || [
    { id: 1, date: "2025-03-20", description: "Grocery Shopping", amount: -50 },
    { id: 2, date: "2025-03-18", description: "Salary", amount: 500 },
    { id: 3, date: "2025-03-15", description: "Electric Bill", amount: -75 },
  ];
  // State to store the list of transactions from local storage
  const [transactions, setTransactions] = useState(initialTransactions);
  // State to store the data for new transactions
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    amount: "",
  });

  useEffect(() => {
    // Save transactions to localStorage whenever they change
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  //used to update the running total
  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  // Handle input changes for the new transaction form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };
  // Add a new transaction to the list
  const addTransaction = () => {
    if (
      newTransaction.date &&
      newTransaction.description &&
      newTransaction.amount
    ) {
      setTransactions([
        ...transactions,
        {
          ...newTransaction,
          id: transactions.length + 1,
          amount: parseFloat(newTransaction.amount),
        },
      ]);
      setNewTransaction({ date: "", description: "", amount: "" });
    }
  };
  //delete transaction by its ID
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
      {user ? (
        <div className="user-portal">
          {/*Restructured the container to hold NavBar, TabSelector and its content */}
          <NavBar />
          {/*Tab selector for switching views */}
          <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
          {/*Tab content & active tab*/}
          <div className="tab-content">
            {/*Render summaries chart if activated */}
            {activeTab === "summaries-chart" && (
              <div className="summaries-chart">
                <SummariesChart balance={balance} />
              </div>
            )}
            {/*Render transaction list if activated */}
            {activeTab === "transactions-list" && (
              <div className="transactions-list">
                <TransactionsList
                  transactions={transactions}
                  deleteTransaction={deleteTransaction}
                />
              </div>
            )}
            {/*Render transaction form if activated */}
            {activeTab === "add-transaction" && (
              <div className="add-transaction">
                <AddTransaction
                  newTransaction={newTransaction}
                  handleChange={handleChange}
                  addTransaction={addTransaction}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <h1>Loading user...</h1>
      )}
    </>
  );
};

export default UserPortal;
