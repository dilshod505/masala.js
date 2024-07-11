interface IQuestion {
  id: string;
  title: string;
}

const questionSet: IQuestion[] = [
  {
    id: "1",
    title: "Sonlar",
  },
  {
    id: "2",
    title: "Array-1",
  },
  {
    id: "3",
    title: "Array-2",
  },
  {
    id: "4",
    title: "String-1",
  },
  {
    id: "5",
    title: "String-2",
  },
  {
    id: "6",
    title: "Rekursiya",
  },
];

const renderDepartments = () => {
  const main: HTMLDivElement | null = document.querySelector("#main > .row");
  if (main) {
    questionSet.map((question) => {
      main.innerHTML += `
            <div class="col-md-6 col-md-4 col-lg-3 my-3">
                <div id="card" class="card">
                    <h3>${question.title}</h3>
                </div>
            </div>`;
      const div: HTMLDivElement | null = document.querySelector("#card");
      if (div) {
        const handleClick = (e: Event) => {
          e.preventDefault();
          console.log("Hello");
        };
        div.addEventListener("click", (event) => {
          handleClick(event);
        });
      }
    });
  }
};

window.onload = () => {
  renderDepartments();
};
