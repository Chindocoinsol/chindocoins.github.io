// js/script.js
// Handles homepage logic for CHINDO
// Firebase: Reads votes, wallet connects

import { db } from './firebase-init.js';

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("loader").style.display = "none";
  }, 4000);
});

// Copy Contract
function copyContract() {
  const contractText = document.getElementById("contract").textContent;
  navigator.clipboard.writeText(contractText.trim());
  alert("Contract Address Copied!");
}

// Connect Wallet
function connectWallet() {
  if (window.solana && window.solana.isPhantom) {
    window.solana.connect().then(({ publicKey }) => {
      alert(`Phantom Connected: ${publicKey}`);
    });
  } else {
    alert("Phantom Wallet not found!");
  }
}

// Vote Submission
document.getElementById("vote-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const choice = this.vote.value;
  alert(`Thank you for voting: ${choice}`);
});
