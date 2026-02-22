const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("rejected-count");
const filterSection = document.getElementById('filter-section')
const noSubject = document.getElementById('no-subject')
// removeHidden(noSubject)
// noSubject.classList.remove('hidden')
console.log(noSubject)
const allCards = document.getElementById("card-section");
totalCount.innerText = allCards.children.length;

const bnt_all = document.getElementById("btn-all");
const btn_interview = document.getElementById("btn-interview");
const btn_rejected = document.getElementById("btn-Rejected");

// toggle styles
function toggleBtn(id) {
  bnt_all.classList.add('btn',"btn-soft");
  btn_interview.classList.add("btn","btn-soft");
  btn_rejected.classList.add("btn","btn-soft");

  const addNewClass = document.getElementById(id);
  addNewClass.classList.remove('btn-soft')
  addNewClass.classList.add("btn-primary");
  if(id === 'btn-interview'){
    allCards.classList.add('hidden')
    console.log(id)
  }else if(id === 'btn-all'){
    noSubject.classList.add('hidden')
    allCards.classList.remove('hidden')
  }else{
    allCards.classList.add('hidden')
    noSubject.classList.remove('hidden')

  }
}

// remove hidden
function removeHidden(id){
id.classList.remove('hidden')
}

btn_interview.addEventListener('click', function(){
    removeHidden(noSubject)
})

