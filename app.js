const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#tasks");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const modul = document.getElementById("modul");
const getDiv = JSON.parse(localStorage.getItem("tasksDiv"));

const make_div = JSON.parse(localStorage.getItem("tasksDiv"))
  ? JSON.parse(localStorage.getItem("tasksDiv"))
  : [];

// function add_task(dives) {
//   dives.forEach((dive) => {
//     const divv = document.createElement("div");
//     divv.innerHTML = dive;
//     list.appendChild(divv);
//   });
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value.trim();
  make_div.push(task);
  localStorage.setItem("tasksDiv", JSON.stringify(make_div));
  addDiv(task);

  function addDiv() {
    const task_div = document.createElement("div");
    task_div.classList.add("task");
    list.appendChild(task_div);

    const task_main_div = document.createElement("div");
    task_main_div.classList.add("mainly");
    task_div.appendChild(task_main_div);

    const task_content_div = document.createElement("div");
    task_content_div.classList.add("content");
    task_main_div.appendChild(task_content_div);

    const task_input = document.createElement("input");
    task_input.classList.add("text");
    task_input.type = "textarea";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");
    task_content_div.appendChild(task_input);

    const task_actions_div = document.createElement("div");
    task_actions_div.classList.add("actions");
    task_main_div.appendChild(task_actions_div);

    const task_edit_botton = document.createElement("button");
    task_edit_botton.classList.add("Edit");
    task_edit_botton.innerHTML = "<img src='./images/edit.png'  width='20px'/>";

    const task_delete_button = document.createElement("button");
    task_delete_button.classList.add("Delete");
    task_delete_button.innerHTML =
      " <img src='./images/delate.png'  width='20px'/>";
    let x = 0;
    const task_completed_button = document.createElement("button");
    task_completed_button.classList.add("Completed");
    task_completed_button.innerHTML =
      " <img src='./images/done.png'  width='20px'/>";

    task_actions_div.appendChild(task_edit_botton);
    task_actions_div.appendChild(task_completed_button);
    task_actions_div.appendChild(task_delete_button);

    const task_time = document.createElement("p");
    task_time.classList.add("time");
    task_div.appendChild(task_time);
    let date = new Date();
    let seconds = date.toLocaleString();
    task_time.innerHTML = `${seconds};`;

    task_edit_botton.addEventListener("click", () => {
      switch (x) {
        case 0:
          task_input.removeAttribute("readOnly");
          task_input.focus();
          task_edit_botton.innerHTML =
            "<img src='./images/clipboard.png'  width='20px'/>";
          task_input.style.textDecoration = "none";
          x = 1;
          break;
        case 1:
          task_edit_botton.innerHTML =
            "<img src='./images/edit.png'  width='20px'/>";
          task_input.setAttribute("readOnly", "readOnly");
          let date = new Date();
          let seconds = date.toLocaleString();
          task_time.innerHTML = `${seconds};`;
          x = 0;
      }
    });
    task_delete_button.addEventListener("click", () => {
      modul.classList.remove("hidden");
      button1.addEventListener("click", () => {
        list.removeChild(task_div);
        modul.classList.add("hidden");
      });
      button2.addEventListener("click", () => {
        modul.classList.add("hidden");
      });
      modul.addEventListener("click", () => {
        modul.classList.add("hidden");
      });
    });

    task_completed_button.addEventListener("click", () => {
      task_input.style.textDecoration = "line-through";
      task_input.setAttribute("readonly", "readonly");
    });

    input.value = "";
  }
});
