import { TabSelector } from "./../components/TabSelector";
import { TransactionsList } from "./../components/TransactionsList";
import { SummariesChart } from "./../components/SummariesChart";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { getUser } from "../api/userApi";
import TransactionForm from "./../components/TransactionForm";

const UserPortal = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("summary");

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
  }, [id]);

  console.log("USER PORTAL user: ", user);
  // Load initial transactions from localStorage or set default ones
  const initialTransactions = JSON.parse(
    localStorage.getItem("transactions")
  ) || [
    { id: 1, date: "2025-03-20", description: "Grocery Shopping", amount: -50 },
    { id: 2, date: "2025-03-18", description: "Salary", amount: 500 },
    { id: 3, date: "2025-03-15", description: "Electric Bill", amount: -75 },
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    amount: "",
  });

  useEffect(() => {
    // Save transactions to localStorage whenever they change
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const balance = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

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

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
      <NavBar />
      {user ? (
        <div className="user-portal">
          <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "summary" && <SummariesChart balance={balance} />}
          {activeTab === "transactions" && (
            <TransactionForm
              newTransaction={newTransaction}
              handleChange={handleChange}
              addTransaction={addTransaction}
            />
          )}
          {activeTab === "addTransaction" && (
            <TransactionsList
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />
          )}
        </div>
      ) : (
        <h1>Loading user...</h1>
      )}
    </>
  );
};

export default UserPortal;
