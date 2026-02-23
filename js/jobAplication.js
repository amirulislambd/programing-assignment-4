let interViewList = [];
let rejectedList = [];
let currentStatus = "All";
const mainContainer = document.querySelector("main");
const allCards = document.getElementById("card-section");
const filterSection = document.getElementById("filter-section");
const totalCount = document.getElementById("total-count");
const totalJob = document.getElementById("totalJob");
const interviewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("rejected-count");
const noSubject = document.getElementById("no-subject");
const totalInterview = document.querySelector(".total-interview");
const totalRejected = document.querySelector(".total-rejected");
const totalInterviewCount = document.getElementById("interview-job");
const totalRejectedCount = document.getElementById("rejected-job");

function allCounts() {
  interviewCount.innerText = interViewList.length;
  rejectCount.innerText = rejectedList.length;
  totalCount.innerText = allCards.children.length;
  totalJob.innerText = allCards.children.length;
  totalInterviewCount.innerText = interViewList.length;
  totalRejectedCount.innerText = rejectedList.length;
}
allCounts();

const bnt_all = document.getElementById("btn-all");
const btn_interview = document.getElementById("btn-interview");
const btn_rejected = document.getElementById("btn-Rejected");

// toggle styles
function toggleBtn(id) {
  bnt_all.classList.add("btn-soft");
  btn_interview.classList.add("btn-soft");
  btn_rejected.classList.add("btn-soft");

  const selectBtn = document.getElementById(id);
  currentStatus = id;
  selectBtn.classList.remove("btn-soft");
  selectBtn.classList.add("btn-primary");
  totalInterview.classList.add("hidden");
  totalRejected.classList.add("hidden");

  if (id === "btn-all") {
    allCards.classList.remove("hidden");
    filterSection.classList.add("hidden");
    if (allCards.children.length === 0) {
      noSubject.classList.remove("hidden");
    }else{
      noSubject.classList.add("hidden");
    }
  } else {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
  }
  if (id === "btn-interview") {
    if (totalInterviewCount.innerText === "0") {
      totalInterview.classList.add("hidden");
    } else {
      totalInterview.classList.remove("hidden");
    }
    renderApplication();
  } else if (id === "btn-Rejected") {
    if (totalRejectedCount.innerText === "0") {
      totalRejected.classList.add("hidden");
    } else {
      totalRejected.classList.remove("hidden");
    }
    renderRejected();
  }
}
function checkEmptyStatus() {
  if (currentStatus !== "btn-all") {
    if (allCards.children.length === 0) {
      noSubject.classList.remove("hidden");
    } else {
      noSubject.classList.add("hidden");
    }
  } else {
    if(filterSection.children.length ===0){
      noSubject.classList.remove('hidden')
    }else{
      noSubject.classList.add("hidden");
    }
  }
}

mainContainer.addEventListener("click", function (e) {
  const currentCard = e.target.closest(".job-card");
  if (!currentCard) return;
  //   INTERVIEW
  if (currentCard) {
    if (e.target.classList.contains("inv-btn")) {
      const title = currentCard.querySelector(".job-title").innerText;
      const subtitle = currentCard.querySelector(".job-subTitle").innerText;
      const category = currentCard.querySelector(".job-category").innerText;
      const status = currentCard.querySelector(".job-status").innerText;
      const description =
        currentCard.querySelector(".job-description").innerText;
      currentCard.querySelector(".job-status").innerText = "INTERVIEW";
      const cardInfo = {
        title,
        subtitle,
        category,
        status: "INTERVIEW",
        description,
      };
      const existTitle = interViewList.find(
        (item) => item.title === cardInfo.title,
      );

      if (!existTitle) {
        interViewList.push(cardInfo);
      }
      rejectedList = rejectedList.filter(
        (item) => item.title != cardInfo.title,
      );
      if (currentStatus === "btn-Rejected") {
        renderRejected();
      }
      if (currentStatus === "btn-interview") {
        renderApplication();
      }
      allCounts();
    } else if (e.target.classList.contains("rjc-btn")) {
      const title = currentCard.querySelector(".job-title").innerText;
      const subtitle = currentCard.querySelector(".job-subTitle").innerText;
      const category = currentCard.querySelector(".job-category").innerText;
      const status = currentCard.querySelector(".job-status").innerText;
      const description =
        currentCard.querySelector(".job-description").innerText;
      // interview
      currentCard.querySelector(".job-status").innerText = "REJECTED";
      const cardInfo = {
        title,
        subtitle,
        category,
        status: "REJECTED",
        description,
      };
      const existTitle = rejectedList.find(
        (item) => item.title === cardInfo.title,
      );

      if (!existTitle) {
        rejectedList.push(cardInfo);
      }
      interViewList = interViewList.filter(
        (item) => item.title !== cardInfo.title,
      );
      if (currentStatus === "btn-interview") {
        renderApplication();
      }
      if (currentStatus === "btn-Rejected") {
        renderRejected();
      }
      allCounts();
    } else if (e.target.closest(".delete-btn")) {
      if (currentCard) {
        const titleDelete = currentCard.querySelector(".job-title").innerText;
        currentCard.remove();
        interViewList = interViewList.filter(
          (item) => item.title !== titleDelete,
        );
        rejectedList = rejectedList.filter(
          (item) => item.title !== titleDelete,
        );
        allCounts();
        checkEmptyStatus();
        if (currentStatus === "btn-interview") {
          renderApplication();
        }
        if (currentStatus === "btn-Rejected") {
          renderRejected();
        }
      }

      // if(currentCard){
      //   const titleDelete = currentCard.querySelector('.job-title').innerText
      //   currentCard.remove()
      //   interViewList = interViewList.filter(item=> item.title !== titleDelete)
      //   rejectedList = rejectedList.filter(item=> item.title !== titleDelete)
      //   allCounts()
      //   checkEmptyStatus()
      //   if(currentStatus === 'btn-interview'){
      //     renderApplication()
      //   }
      //   if(currentStatus === 'btn-Rejected'){
      //     renderRejected()
      //   }
      // }
    }
  }
  //   REJECTED
});

function renderApplication() {
  filterSection.innerHTML = "";
  for (let item of interViewList) {
    let div = document.createElement("div");
    div.className =
      "job-card p-2 mx-3 md:mx-0 md:space-y-2 shadow-sm md:p-6 flex justify-between";

    div.innerHTML = ` 
    <div class="left-side">
    <div class="md:space-y-2">
      <h1 class="job-title text-xl font-semibold">${item.title}</h1>
      <p class="job-subTitle text-lg md:text-lg">${item.subtitle}</p>
    </div>
    <div class="space-y-2">
      <p  class="job-category text-gray-500 text-xs md:text-lg">
        ${item.category}
      </p>
      <button class="job-status shadow-lg py-2 px-4 bg-blue-100">
        ${item.status}
      </button>
      <p class="job-description">
        Build cross-platform mobile applications using React Native.
        Work on products used by millions of users worldwide.
      </p>
      <div class="flex gap-2">
        <button class="inv-btn btn btn-outline btn-primary">INTERVIEW</button>
        <button class="rjc-btn btn btn-outline btn-error">REJECTED</button>
      </div>
    </div>
  </div>
  <div class="right-side text-red-500">
    <button class="delete-btn btn btn-circle">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  </div>
`;
    filterSection.append(div);
  }
  checkEmptyStatus();
}
function renderRejected() {
  filterSection.innerHTML = "";
  for (let item of rejectedList) {
    let div = document.createElement("div");
    div.className =
      "job-card p-2 mx-3 md:mx-0 md:space-y-2 shadow-sm md:p-6 flex justify-between";

    div.innerHTML = ` 
    <div class="left-side">
    <div class="md:space-y-2">
      <h1 class="job-title text-xl font-semibold">${item.title}</h1>
      <p class="job-subTitle text-lg md:text-lg">${item.subtitle}</p>
    </div>
    <div class="space-y-2">
      <p  class="job-category text-gray-500 text-xs md:text-lg">
        ${item.category}
      </p>
      <button class="job-status shadow-lg py-2 px-4 bg-blue-100">
        ${item.status}
      </button>
      <p class="job-description">
        Build cross-platform mobile applications using React Native.
        Work on products used by millions of users worldwide.
      </p>
      <div class="flex gap-2">
        <button class="inv-btn btn btn-outline btn-primary">INTERVIEW</button>
        <button class="rjc-btn btn btn-outline btn-error">REJECTED</button>
      </div>
    </div>
  </div>
  <div class="right-side text-red-500">
    <button class="delete-btn btn btn-circle">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  </div>
`;
    filterSection.append(div);
  }
  checkEmptyStatus();
}
