const pass = document.getElementById("pass");
const sym = document.getElementById("sym");
const num = document.getElementById("num");
const lchar = document.getElementById("lchar");
const uchar = document.getElementById("uchar");
const btn = document.getElementById("btn");
const inp = document.getElementById("inp");

for (let i = 1; i <= 20; i++) {
  const option = document.createElement("option");
  option.textContent = i;
  pass.append(option);
}

btn.addEventListener("click", function () {
  const selectedOption = pass.querySelector("option:checked");
  const password = generatePassword(Number(selectedOption.textContent));
  inp.value = password;
});

sym.addEventListener('change', () => {
    const selectedOption = pass.querySelector('option:checked');
    const password = generatePassword(Number(selectedOption.textContent));
    inp.value = password
})

function generatePassword(passwordLength) {
  let s = "";

  if (sym.checked) {
    s += "@#$%";
  }

  if (num.checked) {
    s += "0123456789";
  }

  if (lchar.checked) {
    s += "abcdefghijklmnopqrstuvwxyz";
  }

  if (uchar.checked) {
    s += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  let npass = "";
  for (let i = 0; i < passwordLength; i++) {
    let rand = Math.floor(Math.random() * s.length);
    npass += s[rand];
  }

  return npass;
}
