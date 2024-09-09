import "./style.css";
import { setupWallet } from "./wallet.js";

document.querySelector("#app").innerHTML = `
  <div>
    <p">
      Hello from Kalp Wallet
    </p>
    <button id="create-wallet" type="button">Create Wallet</button>
  </div>
`;

setupWallet(document.querySelector("#create-wallet"));
