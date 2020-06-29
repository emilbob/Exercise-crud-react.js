import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function EditAccount(props) {
  const [account, setAccount] = useState(
    props.accounts.filter((acc) => acc.id == props.match.params.id)[0]
  );

  const editAccount = () => {
    props.editAccount(account);
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 ofssete-1">
          <h2>Edit account</h2>
          <div className="row">
            <div className="col-10 offset-1">
              <input
                type="text"
                onChange={(e) => {
                  setAccount({ ...account, name: e.target.value });
                }}
                id="name"
                placeholder="name"
                className="form-control"
                value={account.name}
              />
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setAccount({ ...account, lastName: e.target.value });
                }}
                id="lastName"
                placeholder="last name"
                className="form-control"
                value={account.lastName}
              />
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setAccount({ ...account, phone: e.target.value });
                }}
                id="phone"
                placeholder="phone"
                className="form-control"
                value={account.phone}
              />
              <br />
              <input
                type="text"
                onChange={(e) => {
                  setAccount({ ...account, email: e.target.value });
                }}
                id="email"
                placeholder="email"
                className="form-control"
                value={account.email}
              />
              <br />
              <button
                onClick={editAccount}
                className="btn btn-info form-control"
              >
                Edit
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(EditAccount);
