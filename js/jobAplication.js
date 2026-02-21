const totalCount = document.getElementById('total-count')
const interviewCount = document.getElementById('interview-count')
const rejectCount = document.getElementById('rejected-count')
console.log(totalCount)

const allCards = document.getElementById('card-section')
totalCount.innerText = allCards.children.length

document.getElementById('all-cards')