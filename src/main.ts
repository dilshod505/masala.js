let root: HTMLDivElement | null = document.querySelector("#root > .row");
import { questionSet } from "./questionSet";

const typeQuestion = Object.values(questionSet);
console.log(typeQuestion);

const renderDepartment = () => {
  if (root) {
    root.innerHTML = "";

    questionSet.map((item) => {
      if (root) {
        root.innerHTML += `
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="department-card">
                    <h2>${item.title}</h2>
                </div>
            </div>
        `;
      }
    });
  }
};

window.onload = () => {
  renderDepartment();
};
