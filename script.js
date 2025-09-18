// Default apps list
let apps = JSON.parse(localStorage.getItem("apps")) || [];

function renderApps() {
  const list = document.getElementById("appList");
  list.innerHTML = "";
  apps.forEach(app => {
    list.innerHTML += 
      <div class="app-card">
        <img src="${app.icon}" alt="icon">
        <h3>${app.name}</h3>
        <a href="${app.link}" target="_blank">Download</a>
      </div>
    ;
  });
}
renderApps();

// Search check
function checkSearch() {
  const keyword = document.getElementById("search").value;
  if (keyword === "wai118234") {
    document.getElementById("adminLogin").classList.remove("hidden");
  }
}

// Admin Login
function adminLogin() {
  const name = document.getElementById("adminName").value;
  const pass = document.getElementById("adminPass").value;
  if (name === "WaiYan" && pass === "wai1118234") {
    document.getElementById("adminPanel").classList.remove("hidden");
    document.getElementById("loginMsg").innerText = "Login Success!";
    renderAdminApps();
  } else {
    document.getElementById("loginMsg").innerText = "Invalid login!";
  }
}

// Add new app
function addApp() {
  const icon = document.getElementById("iconLink").value;
  const link = document.getElementById("mediafireLink").value;
  if (icon && link) {
    apps.push({ name: "Custom App", icon: icon, link: link });
    localStorage.setItem("apps", JSON.stringify(apps));
    renderApps();
    renderAdminApps();
  }
}

// Render admin view
function renderAdminApps() {
  const adminDiv = document.getElementById("adminApps");
  adminDiv.innerHTML = "";
  apps.forEach((app, i) => {
    adminDiv.innerHTML += 
      <div>
        ${app.name} 
        <button onclick="deleteApp(${i})">Delete</button>
      </div>
    ;
  });
}

// Delete app
function deleteApp(index) {
  apps.splice(index, 1);
  localStorage.setItem("apps", JSON.stringify(apps));
  renderApps();
  renderAdminApps();
}
