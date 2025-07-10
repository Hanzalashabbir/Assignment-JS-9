function generatePassword() {
  const length = document.getElementById("length").value;
  const useUppercase = document.getElementById("uppercase").checked;
  const useLowercase = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789"; 
  const symbols = "!@#$%^&*()_+{}[]|:;<>,.?/";

  let allChars = "";
  if (useUppercase) allChars += upper;
  if (useLowercase) allChars += lower;
  if (useNumbers) allChars += numbers;
  if (useSymbols) allChars += symbols;

  const passwordBox = document.getElementById("password");
  const copyBtn = document.getElementById("copyBtn");

  if (!allChars) {
    passwordBox.value = "❗ Please select at least one option.";
    copyBtn.style.display = "none";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  passwordBox.value = password;
  copyBtn.style.display = "inline";
}

function copyPassword() {
  const passwordBox = document.getElementById("password");
  passwordBox.select();
  passwordBox.setSelectionRange(0, 999);
  document.execCommand("copy"); 
  alert(" Password copied!");
}


