function logout() {
  localStorage.setItem("isLoggedIn", "false");
  window.location.href = "index.html";
}

// Prevent access to dashboard if not logged in
if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}