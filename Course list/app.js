const title = document.querySelector('#title');
const professor = document.querySelector('#professor');
const credits = document.querySelector('#credits');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#course-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  // Basic Validation
  if (title.value == '' && professor.value == '' && credits.value == '') {
    alert('Please input your information.');
  } else {
    const newRow = document.createElement('tr');

    // Creating new title
    const newTitle = document.createElement('th');
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    // Creating new professor
    const newProfessor = document.createElement('th');
    newProfessor.innerHTML = professor.value;
    newRow.appendChild(newProfessor);

    // Creating new credits
    const newcredits = document.createElement('th');
    newcredits.innerHTML = credits.value;
    newRow.appendChild(newcredits);

    // Displaying in UI
    bookList.appendChild(newRow);
  }
});