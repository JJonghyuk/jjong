const taskInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("todo-list");

// 새 할 일을 추가하는 함수
function addTask() {
  const taskText = taskInput.value.trim();

  // 입력 내용이 비어있으면 함수를 종료합니다.
  if (taskText === "") return;

  // 새로운 목록 아이템(<li>)을 만듭니다.
  const listItem = document.createElement("li");
  listItem.classList.add("todo-item");
  listItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">삭제</button>
  `;

  // 할 일 목록(<ul>)에 새 아이템을 추가합니다.
  taskList.appendChild(listItem);

  // 입력창을 비웁니다.
  taskInput.value = "";

  // 새로 만들어진 아이템에 이벤트 리스너를 추가합니다.
  // 클릭하면 완료 상태를 토글합니다.
  listItem.addEventListener("click", toggleComplete);

  // 삭제 버튼에 이벤트 리스너를 추가합니다.
  listItem.querySelector(".delete-btn").addEventListener("click", deleteTask);
}

// 할 일의 완료 상태를 토글하는 함수
function toggleComplete(e) {
  // 클릭된 요소가 삭제 버튼이 아닐 경우에만 토글합니다.
  if (e.target.tagName !== "BUTTON") {
    e.currentTarget.classList.toggle("completed");
  }
}

// 할 일을 삭제하는 함수
function deleteTask(e) {
  e.stopPropagation(); // 이벤트 버블링 방지
  e.target.parentNode.remove();
}

// "추가" 버튼에 클릭 이벤트 리스너를 연결합니다.
addBtn.addEventListener("click", addTask);

// 입력창에서 'Enter' 키를 누르면 할 일이 추가되도록 이벤트 리스너를 연결합니다.
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
