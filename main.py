class TransactionHistory():
    '''
        Handles the transaction history. Format of the transaction_history dict is as follows:
        key -> numeric sequence of transactions. If the entry is the first, it would be expected 
        to have the ID of 0.
            The second entry would have the key of 1, and so on. 
        value -> A list with the format [category, cost]

        Therefore, a correct entry into the dict would be 
        transaction_history[0] = ["groceries", 10.95]
    '''
    transaction_history = {}

    def add_transaction(self):
        '''
        Adds transaction to running transaction history
        '''
        transaction_to_add = []
        get_category = input("What category is this transaction? ")
        transaction_to_add.append(get_category)
        get_cost = input("What is the cost of this tranaction? ")
        transaction_to_add.append(float(get_cost))
        self.transaction_history[len(self.transaction_history) + 0] = transaction_to_add
        print("Transaction Added!")

    def delete_transaction(self):
        '''
        Deletes the transaction specified by its ID.
        '''
        get_id_to_delete = int(input("What is the ID of the transaction you wish to delete? "))
        self.transaction_history.pop(get_id_to_delete)
        print("Transaction Deleted!")

    def view_transactions(self):
        '''
        Prints out all transactions in the transaction_history dict.
        '''
        if len(self.transaction_history) == 0:
            print("No transactions found!")
        else:
            for transaction in self.transaction_history.items():
                print("")
                print(f"ID: {transaction[0]}")
                print(f"Category: {self.transaction_history[transaction[0]][0]}")
                print(f"Cost: {self.transaction_history[transaction[0]][1]}")
                print("")

def main():
    ''' 
    Entry point of the application
    '''
    transaction_history = TransactionHistory()
    running = True
    while running:
        print("1. Add Transaction")
        print("2. Delete Transaction")
        print("3. View Transactions")
        print("4. Exit")
        choice = int(input("What would you like to do? (Enter the number of your choice): "))
        match choice:
            case 1:
                transaction_history.add_transaction()
            case 2:
                transaction_history.delete_transaction()
            case 3:
                transaction_history.view_transactions()
            case 4:
                running = False
                break



if __name__ == "__main__":
    main()
