import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

function App() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Paja",
      lastName: "Patak",
      phone: "11-11-11",
      email: "paja@gmail.com",
    },
    {
      id: 2,
      name: "Baja",
      lastName: "patak",
      phone: "22-22-22",
      email: "baja@gmail.com",
    },
    {
      id: 3,
      name: "Raja",
      lastName: "patak",
      phone: "33-33-33",
      email: "raja@gmail.com",
    },
  ]);

  const addNewAccountToState = (acc) => {
    setAccounts([...accounts, acc]);
  };

  const deleteAccount = (id) => {
    const newCopyAccounts = accounts.filter((account) => account.id !== id);
    setAccounts(newCopyAccounts);
  };

  const editAccount = (acc) => {
    let accountPosition = accounts.map((account) => account.id).indexOf(acc.id);
    accounts[accountPosition] = acc;
    setAccounts(accounts);
  };

  return (
    <BrowserRouter>
      <Header />;
      <Route path="/" exact>
        <AccountsTable accounts={accounts} />
      </Route>
      <Route path="/add">
        <AddAccount addNewAccountToState={addNewAccountToState} />
      </Route>
      <Switch>
        <Route path="/edit/:id">
          <EditAccount accounts={accounts} editAccount={editAccount} />
        </Route>
        <Route path="/edit">
          <EditTable accounts={accounts} deleteAccount={deleteAccount} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
