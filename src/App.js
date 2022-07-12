// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Pets, NavBar, Footer, AddPet } from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ user, signOut }) {
  const [showForm, setShowForm] = useState(false);
  const formOvveride = {
    Icon: {
      style: { cursor: "pointer" },
      onClick: () => {
        setShowForm(false);
      },
    },
  };

  const NavBarOverrides = {
    Button: {
      style: { cursor: "pointer" },
      onClick: signOut,
    },
    image: {
      src: user.attributes.profile,
    },

    "Add Pet": {
      style: { cursor: "pointer" },
      onClick: () => {
        setShowForm(!showForm);
      },
    },
  };

  return (
    <div className="App">
      <NavBar width={"100%"} overrides={NavBarOverrides} />{" "}
      <h1>Hello! {user.attributes.name}</h1>
      <header className="App-header">
        {showForm && (
          <AddPet
            overrides={formOvveride}
            style={{ textAlign: "left", margin: "1rem" }}
          ></AddPet>
        )}

        <Pets
          overrideItems={({ item, index }) => ({
            overrides: {
              Breed: { color: "blue" },
              Button29766907: {
                onClick: () => alert(`${item.id}`),
              },
            },
          })}
        />
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default withAuthenticator(App);
