const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  toDoListBefore = document.querySelector(".js-toDoListBefore");
// const chartDiv = document.getElementById('chart_div')

const TODOS_LS = 'toDos'
let toDos = [];

const toDate = getDate();

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function getDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}/${month}/${day}`;
}

function deleteToDo(event) {
  event.preventDefault();
  const btn = event.target;
  const li = btn.parentNode;
  try { toDoList.removeChild(li) } catch { toDoListBefore.removeChild(li) };
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  })
  toDos = cleanToDos;
  saveToDos();
  drawChart();
}

function paintToDo(_array) {
  // const savedDate = getDate();
  const savedDate = _array.date;
  const todayDate = getDate();
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.addEventListener("click", deleteToDo);
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = _array.text;
  const span2 = document.createElement("span");
  span2.innerText = savedDate;
  const newId = toDos.length + 1;
  li.id = newId;
  li.appendChild(span);
  li.appendChild(delBtn);
  // li.appendChild(span2);

  toDoObj = {};
  if (todayDate !== savedDate) { // 오늘 날짜가 리스트 날짜와 다를때
    li.appendChild(span2);
    toDoListBefore.appendChild(li);
    toDoObj = {
      text: _array.text,
      id: newId,
      date: savedDate
    };
  }
  else { // 오늘 날짜가 리스트 날짜와 같을때
    toDoList.appendChild(li);
    toDoObj = {
      text: _array.text,
      id: newId,
      date: todayDate
    };
  }
  toDos.push(toDoObj);
  saveToDos();
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDos) {
      paintToDo(toDos);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  newObj = { text: null, id: null, date: getDate() };
  newObj.text = toDoInput.value;
  paintToDo(newObj);
  toDoInput.value = "";
  drawChart();
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

init();