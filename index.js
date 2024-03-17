let radios = document.querySelectorAll("input[type='radio']");

function changeImg() {
  document.getElementById(this.name).src = this.value;
}

function random() {
  let categories = [
    "backgrounds",
    "ears",
    "eyes",
    "hair",
    "mouth",
    "neck",
    "leg",
    "accessories"
  ];
  for (let x of categories) {
    let list = document.querySelectorAll(
      "input[type='radio'][name='" + x + "']"
    );
    console.log(list);
    let randnum = Math.floor(Math.random() * list.length);
    list[randnum].checked = true;
    list[randnum].click();
  }
}

for (let x of radios) {
  x.addEventListener("change", changeImg);
  x.addEventListener("click", changeImg);
}

function download() {
  let node = document.getElementById("image");
  new Promise((resolve, reject) => {
    node.style.borderRadius = "0px";
  }).then(
    html2canvas(node, { scale: 2 }).then(function (canvas) {
      document.body.appendChild(canvas);
      let a = document.createElement("a");
      a.href = canvas.toDataURL();
      a.download = "alpaca";
      a.id = "download-link";
      document.body.appendChild(a);
      a.click();
      node.style.borderRadius = "16px";
    })
  );
}

random();
