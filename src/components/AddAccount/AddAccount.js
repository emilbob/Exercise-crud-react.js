import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";

function AddAccount(props) {
  const idInput = useRef();

  useEffect(() => {
    idInput.current.focus();
  }, []);

  const [newAccount, setNewAccount] = useState({
    id: "",
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const addNewAccount = () => {
    props.addNewAccountToState(newAccount);
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h2 className="display-4 m-4">Add account</h2>
          <div className="row">
            <div className="col-10 offset-1">
              <input
                type="text"
                ref={idInput}
                onChange={(e) => {
                  setNewAccount({ ...newAccount, id: e.target.value });
                }}
                id="id"
                placeholder="id"
                className="form-control"
              />
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setNewAccount({ ...newAccount, name: e.target.value });
                }}
                id="name"
                placeholder="name"
                className="form-control"
              />
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setNewAccount({ ...newAccount, lastName: e.target.value });
                }}
                id="lastName"
                placeholder="last name"
                className="form-control"
              />
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setNewAccount({ ...newAccount, phone: e.target.value });
                }}
                id="phone"
                placeholder="phone"
                className="form-control"
              />
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setNewAccount({ ...newAccount, email: e.target.value });
                }}
                id="email"
                placeholder="email"
                className="form-control"
              />
              <br />
              <button
                onClick={addNewAccount}
                className="btn btn-primary form-control"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AddAccount);
