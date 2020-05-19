var button = document.getElementById('add');
button.addEventListener('click',save);
var row = 1;
var employees = []
function save(){
    var name = document.getElementById('name').value
    var department = document.getElementById('department').value
    var sales1 = document.getElementById('sales1').value
    var sales2 = document.getElementById('sales2').value
    var average = document.getElementById('average').value

    var employee  = {
        name:name,
        department:department,
        sales1: sales1,
        sales2: sales2,
        average:(parseInt(sale1.value) + parseInt(sale2.value)) / 2
    }
    employees.push(employee);
    display(employees);
   
}
function display(employees){
    var tbody = document.querySelector("tbody");
    tbody.textContent = "";
    for(var i = 0;  i<employees.length; i++){
    var tr = document.createElement('tr')
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4= document.createElement('td');
    var td5 =document.createElement('td');
    td1.textContent = employees[i].name;
    td2.textContent = employees[i].department;
    td3.textContent = employees[i].sales1;
    td4.textContent = employees[i].sales2;
    td5.textContent = employees[i].average;
    tr.append(td1,td2,td3,td4,td5)
    display.append(tr)
    }
}
var ascending = document.getElementById("ascending");
ascending.addEventListener("click", sortAs);
function sortAs() {
    var arr = employees.sort(function (a, b) {
      return a.average - b.average;
    });
    display(arr);
}
var descending = document.getElementById("descending");
descending.addEventListener("click", sortDes);
function sortDes() {
    var arr = employees.sort(function (a, b) {
      return a.average - b.average;
    });
    display(arr);
}