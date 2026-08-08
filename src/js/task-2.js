const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");
const container = document.querySelector("#formApp");

const handleLoad = () => {
  const savedUsername = localStorage.getItem("formData_username");
  const savedPassword = localStorage.getItem("formData_password");

  if (savedUsername) {
    usernameInput.value = savedUsername;
  }
  if (savedPassword) {
    passwordInput.value = savedPassword;
  }
};

handleLoad();

const handleBtnClick = () => {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  localStorage.setItem("formData_username", username);
  localStorage.setItem("formData_password", password);

  alert("Дані успішно збережено!");
};

saveBtn.addEventListener("click", handleBtnClick);
