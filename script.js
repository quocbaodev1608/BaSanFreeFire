// LOADING
setTimeout(() => {
  document.getElementById("loading").style.display = "none";

  let key = localStorage.getItem("ff_key");
  if (key) checkKey(key);
  else document.getElementById("keyPopup").style.display = "flex";

}, 2000);

// KEY DATABASE
let keys = {
  "FF-1111": { exp: Date.now() + 3600000, active: true },
  "FF-PRO": { exp: Date.now() + 999999999, active: true }
};

// SUBMIT
function submitKey() {
  let key = document.getElementById("keyInput").value;
  checkKey(key);
}

// CHECK
function checkKey(key) {
  let k = keys[key];

  if (k && k.active && Date.now() < k.exp) {
    localStorage.setItem("ff_key", key);

    document.getElementById("keyPopup").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");

    flash("green");
    toast("KEY ACTIVE");
  } else {
    flash("red");
    toast("KEY SAI!");
  }
}

// GET KEY
function getKey() {
  fakeLoad(() => {
    window.location.href = "https://your-link.com";
  });
}

// TOGGLE
function toggle(el, name) {
  playSound();

  if (el.checked) {
    toast(name + " ON");
  } else {
    toast(name + " OFF");
  }
}

// SOUND
function playSound() {
  document.getElementById("clickSound").play();
}

// SENS
function setSens(type) {
  let s = document.getElementById("sens");

  if (type === "low") {
    s.innerHTML = "DPI 300 | Fire 60";
  }

  if (type === "mid") {
    s.innerHTML = "DPI 400 | Fire 70";
  }

  if (type === "high") {
    s.innerHTML = "DPI 600 | Fire 80";
  }

  toast("Đã set độ nhạy");
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
  setTimeout(() => document.body.style.background = "#0d0d12", 200);
}

// FAKE LOAD
function fakeLoad(cb) {
  toast("Đang lấy key...");
  setTimeout(cb, 2000);
}
