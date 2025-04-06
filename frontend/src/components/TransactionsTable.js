import { TransactionsList } from '../components/TransactionsList';

//temp data
const sampleTransactions = [
  {
    id: 1,
    date: '3/17/25',
    type: 'income',
    category: 'salary',
    description: 'salary',
    amount: 750,
  },
  {
    id: 2,
    date: '3/14/25',
    type: 'expense',
    category: 'groceries',
    description: 'harris teetr',
    amount: -250,
  },
];

const deleteTransaction = (id) => {
  console.log("Deleting transaction with ID:", id);
};

<TransactionsList
  transactions={sampleTransactions}
  deleteTransaction={deleteTransaction}
/>;
