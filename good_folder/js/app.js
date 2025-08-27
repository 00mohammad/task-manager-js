const tasks = {
  ali: ["html", "css", "Js"],
  reza: ["react", "vue", "angular"],
  mohammad: ["seo", "link building"],
  amir: ["admin", "contact"],
};
let newTaskName = prompt("لطفا اسم تسک جدید را وارد نمایید :");
let employeName = prompt("لطفا اسم کارمند مربوطه را وارد نمایید :");

const employeTasks = tasks[employeName];

if (employeTasks === undefined) {
  alert("همچین کارمندی یافت نشد ؟");
} else {
  employeTasks.push(newTaskName);
  console.log(tasks);
}
