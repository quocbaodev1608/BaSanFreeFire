// LOADING
setTimeout(() => {
  document.getElementById("loading").style.display = "none";

  let savedKey = localStorage.getItem("ff_key");
  if (savedKey) {
    checkKey(savedKey);
  } else {
    document.getElementById("keyPopup").style.display = "flex";
  }
}, 2000);

// FAKE DATABASE KEY
let keys = {
  "FF-1234": { expires: Date.now() + 3600000, active: true },
  "FF-9999": { expires: Date.now() + 999999999, active: true }
};

// SUBMIT KEY
function submitKey() {
  let key = document.getElementById("keyInput").value;
  checkKey(key);
}

// CHECK KEY
function checkKey(key) {
  let data = keys[key];

  if (data && data.active && Date.now() < data.expires) {
    localStorage.setItem("ff_key", key);

    document.getElementById("keyPopup").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");

    flash("green");
  } else {
    flash("red");
    document.getElementById("keyStatus").innerText = "Key sai hoặc hết hạn!";
  }
}

// GET KEY
function getKey() {
  alert("Chuyển sang link lấy key...");
  window.location.href = "https://your-link.com";
}

// EFFECT
function toggleEffect(el) {
  if (el.checked) toast("ON");
  else toast("OFF");
}

// FOV
function updateFOV(value) {
  let fov = document.getElementById("fovCircle");
  fov.style.width = value + "px";
  fov.style.height = value + "px";
}

// BOOST
function boost() {
  toast("FPS BOOSTED 🚀");
}

// TOAST
function toast(msg) {
  let t = document.getElementById("toast");
  t.innerText = msg;
  t.style.display = "block";
  setTimeout(() => t.style.display = "none", 2000);
}

// FLASH
function flash(color) {
  document.body.style.background = color;
  setTimeout(() => {
    document.body.style.background = "#0a0a0f";
  }, 200);
}
