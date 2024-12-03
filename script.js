function saveDetails(event) {
    event.preventDefault()
    const name = document.getElementById('student-name').value;
    const age = document.getElementById('student-age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById('student-course').value;
    const email = document.getElementById('student-email').value;
    const displayNames = document.getElementById('display-names');
    const row = displayNames.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const cell3 = row.insertCell();
    const cell4 = row.insertCell();
    const cell5 = row.insertCell();
    const cell6 = row.insertCell();
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = gender;
    cell4.innerHTML = course;
    cell5.innerHTML = email;
    cell6.innerHTML = '<button class="delete-btn" onclick="deleteRow(this)">Delete</button>';
    document.getElementById('student-name').value = '';
    document.getElementById('student-age').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById('student-course').value = '';
    document.getElementById('student-email').value = '';
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}








