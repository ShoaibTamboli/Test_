import { useState } from "react";
import "./styles.css";

// var ShoppingList = [
//   "Oil",
//   "Book",
//   "Grains",
//   "Spices",
//   "Snacks",
//   "Oil",
//   "Soft Drinks",
//   "Dryfruits",
//   "Vegetables",
//   "biscuit"
// ];

var username = "Shoaib";
var userLoggedIn = false;

export default function App() {
  function getUserMessage() {
    if (userLoggedIn) {
      return username;
    }
    return "user";
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <ul>
        {ShoppingList.map((item) => {
          console.log(item);
          return <li> {item}</li>;
        })}
      </ul> */}

      <h2> Welcome {username} </h2>

      <h2> Hi {getUserMessage()} </h2>
    </div>
  );
}
