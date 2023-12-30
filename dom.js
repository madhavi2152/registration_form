const body = document.body;
const form = document.getElementById("form-step1");
console.log(form);
const Name = document.getElementById("Name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
console.log(Name, email, phone);
let id = "";
let username;
let useremail;
let userphone;
let priceflag = "monthly";
let finalstring = ["Advanced 120", "onlineservice,storage 10,20"];
let nextstep = document.getElementById("Nextstep");
let back = document.getElementById("back");
function step5fun() {
  let next = document.querySelector("#Nextstepb");
  let prev = document.querySelector("#backb");
  next.style.display = "none";
  prev.style.display = "none";
  let step5 = document.querySelector(".step5");
  step5.style.display = "flex";
}

function step4fun(price, priceflag) {
  console.log(price, priceflag);
  let step5 = document.querySelector(".step5");
  step5.style.display = "none";
  let step2 = document.querySelector(".step2");
  step2.style.display = "none";
  let step3 = document.querySelector(".step3");
  step3.style.display = "none";
  let step1 = document.querySelector(".step1");
  step1.style.display = "none";
  let step4 = document.querySelector(".step4");
  step4.style.display = "flex";
  let stepsmenu = step4.querySelector(".stepsmenu");
  let step4menu = stepsmenu.querySelector(".step4menu");
  let first = step4menu.querySelector(".first");
  first.style.color = "hsl(213, 96%, 18%)";
  first.style.backgroundColor = "hsl(206, 94%, 87%)";
  let plan = document.querySelector(".plan");
  let planv = finalstring[0].split(" ")[0];
  let plancostv = finalstring[0].split(" ")[1];
  let key = document.querySelector(".key");
  let value = document.querySelector(".value");
  let change = document.querySelector(".change");
  change.addEventListener("click", (data) => {
    step4.style.display = "none";
    key.innerHTML = "";
    value.innerHTML = "";
    step2fun();
  });
  key.innerHTML = `<span>${planv}</span>`;
  value.innerHTML = `<span>${plancostv}</span>`;
  value.style.marginLeft = "90%";
  value.style.marginTop = "-5%";

  let addons = document.querySelector(".addons");
  let keys = document.querySelector(".keys");
  let values = document.querySelector(".values");
  addons.style.display = "flex";
  let addonsdata = finalstring[1].split(" ");
  let keysdata = addonsdata[0].split(",");
  addons.style.width = "100%";
  keys.style.float = "left";
  values.style.float = "right";
  let valuesdata = addonsdata[1].split(",");
  if (keysdata.length === 1) {
    keys.innerHTML = `<p>${keysdata[0]} </p>`;
    values.innerHTML = `<p> ${valuesdata[0]}</p>`;
  }
  if (keysdata.length === 2) {
    keys.innerHTML = `<p>${keysdata[0]} </p> <p>${keysdata[1]}</p>`;
    values.innerHTML = `<p> ${valuesdata[0]}</p><p>${valuesdata[1]}</p>`;
  }
  if (keysdata.length === 3) {
    keys.innerHTML = `<p>${keysdata[0]} </p> <p>${keysdata[1]}</p> <p>${keysdata[2]}</p>`;
    values.innerHTML = `<p>${valuesdata[0]}</p><p>${valuesdata[1]}</p><p>${valuesdata[2]}</p>`;
  }
  let total = document.querySelector(".total");
  console.log(total);
  let totvalue = document.querySelector(".totvalue");
  totvalue.innerHTML = `<p> ${price}</p>`;
  total.style.display = "flex";

  step4.addEventListener("click", (data) => {
    if (data.target.id === nextstep.id) {
      step4.style.display = "none";
      step5fun();
    }
    if (data.target.id === back.id) {
      step4.style.display = "none";
      totvalue.innerHTML = "";
      keys.innerHTML = "";
      values.innerHTML = "";
      step3fun(Number(plancostv), priceflag);
    }
  });
  let nextstepb = document.getElementById("Nextstepb");
  let backb = document.getElementById("backb");
  nextstepb.addEventListener("click", () => {
    step4.style.display = "none";
    step5fun();
  });
  backb.addEventListener("click", () => {
    step4.style.display = "none";
    totvalue.innerHTML = "";
    keys.innerHTML = "";
    values.innerHTML = "";
    step3fun(plancostv, priceflag);
  });
}
// step3fun(9);
function step3fun(price, priceflag) {
  let step5 = document.querySelector(".step5");
  step5.style.display = "none";
  let step2 = document.querySelector(".step2");
  step2.style.display = "none";
  let step1 = document.querySelector(".step1");
  step1.style.display = "none";
  let step4 = document.querySelector(".step4");
  step4.style.display = "none";
  let checkonline = document.getElementById("check-onlineservice");
  let checkstorage = document.getElementById("check-storage");
  let checkprofile = document.getElementById("check-profile");
  checkonline.checked = false;
  checkstorage.checked = false;
  checkprofile.checked = false;
  console.log(priceflag);
  if (priceflag === "monthly") {
    let id = document.querySelectorAll("#price-monthly");
    id.forEach((element) => {
      element.style.display = "block";
    });
    id = document.querySelectorAll("#price-yearly");
    id.forEach((element) => {
      element.style.display = "none";
    });
  }
  if (priceflag === "yearly") {
    let id = document.querySelectorAll("#price-yearly");
    id.forEach((element) => {
      element.style.display = "block";
    });
    id = document.querySelectorAll("#price-monthly");
    id.forEach((element) => {
      element.style.display = "none";
    });
  }
  let finalprice = Number(price);
  let step3 = document.querySelector(".step3");
  step3.style.display = "flex";
  let stepsmenu = step3.querySelector(".stepsmenu");
  let step3menu = stepsmenu.querySelector(".step3menu");
  let first = step3menu.querySelector(".first");

  first.style.color = "hsl(213, 96%, 18%)";
  first.style.backgroundColor = "hsl(206, 94%, 87%)";

  let obj = {};
  step3.addEventListener("change", (data) => {
    delete obj;
    let id = data.target.id;
    id = id.split("-");
    id = id[1];
    console.log(id);
    let price = step3.getElementsByClassName(id)[0];
    price = price.childNodes;
    console.log(price);
    if (priceflag === "monthly") {
      price = price[7].innerText;
    } else if (priceflag === "yearly") {
      price = price[9].innerText;
    }
    price = price.split("/");
    price = price[0];
    price = Number(price.split("$")[1]);
    console.log(price);
    if (data.target.checked === true) {
      obj[id] = price;
      finalprice += price;
    } else if (data.target.checked !== true) {
      delete obj[id];
      finalprice -= price;
    }
    console.log(obj);
    console.log(finalprice);
  });
  step3.addEventListener("click", (data) => {
    if (data.target.id === nextstep.id) {
      finalstring[1] = `${Object.keys(obj)} ${Object.values(obj)}`;
      step3.style.display = "none";
      step4fun(finalprice, priceflag);
    }
    if (data.target.id === back.id) {
      step3.style.display = "none";
      step2fun();
    }
  });
  let nextstepb = document.getElementById("Nextstepb");
  let backb = document.getElementById("backb");
  nextstepb.addEventListener("click", (data) => {
    finalstring[1] = `${Object.keys(obj)} ${Object.values(obj)}`;
    step3.style.display = "none";
    step4fun(finalprice, priceflag);
  });
  backb.addEventListener("click", (data) => {
    step3.style.display = "none";
    step2fun();
  });
}
function step2fun() {
  let step5 = document.querySelector(".step5");
  step5.style.display = "none";
  let step1 = document.querySelector(".step1");
  step1.style.display = "none";
  let step3 = document.querySelector(".step3");
  step3.style.display = "none";
  let step4 = document.querySelector(".step4");
  step4.style.display = "none";
  let step2 = document.querySelector(".step2");
  step2.style.display = "flex";
  let stepsmenu = step2.querySelector(".stepsmenu");
  let step2menu = stepsmenu.querySelector(".step2menu");
  let first = step2menu.querySelector(".first");

  first.style.color = "hsl(213, 96%, 18%)";
  first.style.backgroundColor = "hsl(206, 94%, 87%)";

  let finalprice = 0;
  let yearly = document.querySelectorAll(".priceyearly");
  let monthly = document.querySelectorAll(".pricemonthly");
  let check = document.getElementById("check");
  let circle = document.getElementById("circle");
  priceflag = "monthly";
  check.addEventListener("change", () => {
    if (check.checked) {
      console.log("hey checked");
      priceflag = "yearly";
      circle.style.marginLeft = "50%";
      circle.style.marginRight = "0px";
      yearly.forEach((element) => {
        element.style.display = "block";
      });
      monthly.forEach((element) => {
        element.style.display = "none";
      });
    } else {
      priceflag = "monthly";
      circle.style.marginLeft = "0px";
      circle.style.marginRight = "50%";
      monthly.forEach((element) => {
        element.style.display = "block";
      });
      yearly.forEach((element) => {
        element.style.display = "none";
      });
    }
  });
  let details = document.querySelector(".details");
  details.addEventListener("click", (data) => {
    if (id !== "") {
      id.style.border = "2px solid hsl(231, 11%, 63%) ";
    }
    console.log(data);
    console.log(data.target);
    console.log(data.target.id);
    id = data.target.id;
    id = document.getElementById(id);
    console.log(id);
    id.style.border = "5px solid hsl(213, 96%, 18%)";
    if (priceflag === "yearly") {
      let price = id.querySelector(".priceyearly");
      price = price.innerHTML;
      price = price.split("/");
      price = price[0].split("$");
      price = Number(price[1]);
      finalprice = price;
      console.log(finalprice);
    }
    if (priceflag === "monthly") {
      let price = id.querySelector(".pricemonthly");
      price = price.innerHTML;
      price = price.split("/");
      price = price[0].split("$");
      price = Number(price[1]);
      finalprice = price;
    }
    finalstring[0] = `${id.id} ${finalprice}`;
  });
  step2.addEventListener("click", (data) => {
    if (data.target.id === nextstep.id) {
      if (id === "") {
        alert("select any option");
      } else {
        step2.style.display = "none";
        check.checked = false;
        step3fun(finalprice, priceflag);
      }
    }
    if (data.target.id === back.id) {
      check.checked = false;
      step2.style.display = "none";
      step1fun();
    }
  });
  let nextstepb = document.getElementById("Nextstepb");
  let backb = document.getElementById("backb");
  nextstepb.addEventListener("click", (data) => {
    if (id === "") {
      alert("select any option");
    } else {
      step2.style.display = "none";
      check.checked = false;
      step3fun(finalprice, priceflag);
    }
  });
  backb.addEventListener("click", (data) => {
    check.checked = false;
    step2.style.display = "none";
    step1fun();
  });
}

function step1fun() {
  let step5 = document.querySelector(".step5");
  step5.style.display = "none";
  let step1 = document.querySelector(".step1");
  step1.style.display = "flex";
  let step2 = document.querySelector(".step2");
  step2.style.display = "none";
  let step3 = document.querySelector(".step3");
  step3.style.display = "none";
  let step4 = document.querySelector(".step4");
  step4.style.display = "none";

  let stepsmenu = step1.querySelector(".stepsmenu");
  let step1menu = stepsmenu.querySelector(".step1menu");
  let first = step1menu.querySelector(".first");

  first.style.color = "hsl(213, 96%, 18%)";
  first.style.backgroundColor = "hsl(206, 94%, 87%)";

  form.addEventListener("keydown", (data) => {
    console.log(data.target.id);
    if (data.target.id === "Name" && data.key === "Enter") {
      username = data.target.value;
      console.log(username);
    }
    if (data.target.id === "email" && data.key === "Enter") {
      useremail = data.target.value;
      console.log(useremail);
    }
    if (data.target.id === "phone" && data.key === "Enter") {
      userphone = data.target.value;
      console.log(userphone);
    }
  });
  nextstep.addEventListener("click", (data) => {
    console.log(data);
    if (username !== "" && useremail !== undefined && userphone !== undefined) {
      step1.style.display = "none";
      step2fun();
    } else {
      alert("enter all details properly");
    }
  });
  let nextstepb = document.getElementById("Nextstepb");
  nextstepb.addEventListener("click", (data) => {
    console.log(data);
    if (username !== "" && useremail !== undefined && userphone !== undefined) {
      step1.style.display = "none";
      step2fun();
    } else {
      alert("enter all details properly");
    }
  });
}

step1fun();
