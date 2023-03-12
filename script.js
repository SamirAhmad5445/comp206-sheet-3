// Question 1:
const input1 = document.querySelector(".input-1");
const output1 = document.querySelector(".output-1");
const button1 = document.querySelector(".question-1 button");

button1.onclick = function () {
  if (input1.value) {
    let arr = input1.value.split("");
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0) {
        arr[i + 1] = "-" + arr[i + 1];
      }
    }
    output1.value = arr.join("");
  }
};

// Question 2:
const input2 = document.querySelector(".input-2");
const output2 = document.querySelector(".output-2");
const button2 = document.querySelector(".question-2 button");
const arrInput2 = document.querySelector(".question-2 .arr-input");
let arr2 = arrInput2.innerHTML.split(", ");

// second index of
button2.onclick = function () {
  output2.value = arr2.indexOf(input2.value, arr2.indexOf(input2.value) + 1);
};

// to read values from arrInput
arrInput2.addEventListener("blur", () => {
  arr2 = [];
  arrInput2.innerHTML.split(",").forEach((i) => {
    i = i.trim();
    arr2.push(i);
  });
  arrInput2.innerHTML = arr2.join(", ");
});

// Question 3:
const output3 = document.querySelector(".output-3");
const button3 = document.querySelector(".question-3 button");
const arrInput3 = document.querySelector(".question-3 .arr-input");
let arr3 = arrInput3.innerHTML.split(", ");

button3.onclick = function () {
  let mostCount = 1;
  let mostValue = arr3[0];

  for (let i = 0; i < arr3.length; i++) {
    let tempCount = 1;
    let tempValue = arr3[i];
    for (let j = i + 1; j < arr3.length; j++) {
      if (arr3[j] == tempValue) tempCount++;
    }
    if (mostCount < tempCount) {
      mostValue = tempValue;
      mostCount = tempCount;
    }
  }
  output3.value = mostValue + " (" + mostCount + " times)";
};

// to read values from arrInput
arrInput3.addEventListener("blur", () => {
  arr3 = [];
  arrInput3.innerHTML.split(",").forEach((i) => {
    i = i.trim();
    arr3.push(i);
  });
  arrInput3.innerHTML = arr3.join(", ");
});

// Question 4:
const input4 = document.querySelector(".input-4");
const output4 = document.querySelector(".output-4");
const button4 = document.querySelector(".question-4 button");
const arrInput4 = document.querySelector(".question-4 .arr-input");
let arr4 = arrInput4.innerHTML.split(", ");

button4.onclick = function () {
  output4.value = "arr = [ " + [...new Set(arr4)].join(", ") + " ]";
};

// to read values from arrInput
arrInput4.addEventListener("blur", () => {
  arr4 = [];
  arrInput4.innerHTML.split(",").forEach((i) => {
    i = i.trim();
    arr4.push(i);
  });
  arrInput4.innerHTML = arr4.join(", ");
});

// Question 5:
const input5 = document.querySelector(".input-5");
const output5 = document.querySelector(".output-5");
const button5 = document.querySelector(".question-5 button");
const arrInput5 = document.querySelectorAll(".question-5 .arr-input");
let a1 = arrInput5[0].innerHTML.split(", "),
  a2 = arrInput5[1].innerHTML.split(", ");

const union = (x, y) => x.join(", ") + ", " + y.join(", ");

button5.onclick = function () {
  output5.value = [...new Set(union(a1, a2).split(", "))];
};

// to read values from arrInput
arrInput5.forEach((e) => {
  e.addEventListener("blur", () => {
    a1 = [];
    a2 = [];
    arrInput5[0].innerHTML.split(",").forEach((i) => {
      i = i.trim();
      a1.push(i);
    });
    arrInput5[1].innerHTML.split(",").forEach((i) => {
      i = i.trim();
      a2.push(i);
    });
    arrInput5[0].innerHTML = a1.join(", ");
    arrInput5[1].innerHTML = a2.join(", ");
  });
});

// Question 6:
const button6 = document.querySelector(".question-6 button");

const authors = document.querySelectorAll(".library-output .author");
const titles = document.querySelectorAll(".library-output .title");
const libraryIds = document.querySelectorAll(".library-output .library-id");

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryId: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryId: 4264 },
  { author: "Suzanne Collins", title: "Mockingjoy", libraryId: 3245 },
];

const order = () => {
  for (let i = 0; i < library.length; i++) {
    for (let j = i + 1; j < library.length; j++) {
      if (library[i].title.toLowerCase() > library[j].title.toLowerCase()) {
        [library[i], library[j]] = [library[j], library[i]];
      }
    }
  }
};

button6.onclick = function () {
  order();
  for (let i = 0; i < authors.length; i++) {
    authors[i].innerHTML = library[i].author;
    titles[i].innerHTML = library[i].title;
    libraryIds[i].innerHTML = library[i].libraryId;
  }
};
