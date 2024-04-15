// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12345678, "Rodney Wyman", 1234, 'rodney@company.com', 'Administrative'],
    [23456789, 'Beau Spurling', 2345, 'beau@company.com', 'Engineering'],
    [34567890, 'Masterman North', 3456, 'masterman@company.com', 'Executive'],
    [45678901, 'Erin Davison', 4567, 'erin@company.com', 'Marketing'], 
    [56789012, 'Clifton Ryley', 5678, 'clifton@company.com', 'QA'],
]

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
storage = localStorage.getItem('employees') || ''
if (storage.length > 0) {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS
const $ = id => document.getElementById(id)
let form = $('addForm')
let empTable = $('empTable')
let employeeNum = $('empCount') // SET AN EMPLOYEE COUNT VARIABLE

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value
    let fullName = $('name').value
    let ext = $('extension').value
    let email = $('email').value
    let department = $('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [id, fullName, ext, email, department]

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus()
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (!isNaN(e.target.parentElement.parentElement.rowIndex)) {
        // CONFIRM THE DELETE
        if (confirm(`Are you sure you want to delete employee "${e.target.parentElement.parentElement.children[1].firstChild.nodeValue}" record?`)) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let index = e.target.parentElement.parentElement.rowIndex

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(index - 1, 1)

            // BUILD THE GRID
            buildGrid()
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.removeChild(empTable.children[1])

    // REBUILD THE TBODY FROM SCRATCH
    let tableBody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employees) {
        tableBody.innerHTML += `<tr> 
                                <td> ${employee[0]} </td>
                                <td> ${employee[1]} </td>
                                <td> ${employee[2]} </td>
                                <td> ${employee[3]} </td>
                                <td> ${employee[4]} </td>
                                <td> <input class="btn btn-danger btn-sm float-end" value="X"> </td>
                            </tr>`
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tableBody)

    // UPDATE EMPLOYEE COUNT
    employeeNum.textContent = `(${employees.length})`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
};