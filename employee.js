'use strict';

const add =document.getElementById("employee-form")
add.addEventListener("submit", addEmployee)

let employees = [];
function Employee(id, fullName, department, level, imageUrl) {
  this.id = id;
  this.imageUrl = imageUrl;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = 0;
  employees.push(this)
}

Employee.prototype.calculate= function () {
  let min
  let max
  const tax= 7.5/100
  let randomSalary 
  
  if(this.level == 'Junior'){
    min= 500
    max = 1000
    randomSalary=  Math.round(Math.floor(Math.random() * (max - min + 1) + min));
  }
  
  if(this.level == 'Mid-Senior'){
    min= 1000 
    max= 1500
    randomSalary=  Math.round(Math.floor(Math.random() * (max - min + 1) + min));
    
  }
  
  if(this.level == 'Senior'){
    min= 1500
    max= 2000
    randomSalary=  Math.round(Math.floor(Math.random() * (max - min + 1) + min));
    
  }
  let netSal= Math.floor(randomSalary - (randomSalary * tax ))
  return this.salary=netSal
}

Employee.prototype.render = function () {
  let employee=document.getElementById('container')
  const imgEl = document.createElement('img');
    const imgdiv=document.createElement('div');
    imgdiv.setAttribute('class','img-content');
    employee.appendChild(imgdiv);
    imgdiv.appendChild(imgEl);
    imgEl.src =this.imageUrl;
    
    const divEle = document.createElement('div');
    employee.appendChild(divEle);
    
    
    const depEle = document.createElement('p')
    depEle.textContent = `Name: ${this.fullName} - ID: ${this.id}`;
    divEle.appendChild(depEle);
    
    const levelEle = document.createElement('p')
    levelEle.textContent = `Department: ${this.department} - Level: ${this.level}`;
    divEle.appendChild(levelEle);
    
    const salEle = document.createElement('p');
    salEle.textContent = this.calculate();
    divEle.appendChild(salEle)
    const ulEl = document.createElement('ul');
    employee.appendChild(ulEl);
  
  }
  
let Ghazi  =   new Employee(1000,"ghazi samer","Administration","Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true" );
let Lana   =   new Employee(1001,"Lana Ali","Finance","Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
let Tamara =   new Employee(1002,"Tamara Ayoub","Marketing","Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
let Safi   =   new Employee(1003,"Safi Walid","Administration","Mid-Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
let Omar   =   new Employee(1004,"Omar Zaid	","Development","Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
let Rana   =   new Employee(1005,"Rana Saleh	","Development","Junior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
let Hadi   =   new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");

  function companyEmployees (){
    for(let i=0 ; i<employees.length ; i++){
    
        employees[i].calculate();
        employees[i].render();
    }
    }
    
function randId(){
  let randomId=Math.floor(1000 + Math.random() * 9000);
    return randomId;
}

Employee.prototype.render = function () {
  
  if (this.department === 'Administration'){
    // let employee = document.getElementsByClassName('adminstration');
    let employee = document.getElementById('Administration');

    console.log(employee)
    const imgEl = document.createElement('img');
    const imgdiv=document.createElement('div');
    imgdiv.setAttribute('class','img-content');
    console.log(imgEl)

    employee.appendChild(imgdiv);
    imgdiv.appendChild(imgEl);
    imgEl.src =this.imageUrl;
    
    const divEle = document.createElement('div');
    employee.appendChild(divEle);
    
    
    const depEle = document.createElement('p')
    depEle.textContent = `Name: ${this.fullName} - ID: ${this.id}`;
    divEle.appendChild(depEle);
    
    const levelEle = document.createElement('p')
    levelEle.textContent = `Department: ${this.department} - Level: ${this.level}`;
    divEle.appendChild(levelEle);
    
    const salEle = document.createElement('p');
    salEle.textContent = this.calculate();
    divEle.appendChild(salEle)
    const ulEl = document.createElement('ul');
    employee.appendChild(ulEl);
}

if (this.department === 'Marketing'){
  let employee = document.getElementById('Marketing');
  
    const imgEl = document.createElement('img');
    const imgdiv=document.createElement('div');
    imgdiv.setAttribute('class','img-content');
    employee.appendChild(imgdiv);
    imgdiv.appendChild(imgEl);
    imgEl.src =this.imageUrl;
    
    const divEle = document.createElement('div');
    employee.appendChild(divEle);
    const depEle = document.createElement('p')
    depEle.textContent = `Name: ${this.fullName} - ID: ${this.id}`;
    divEle.appendChild(depEle);
    
    
    const levelEle = document.createElement('p')
    levelEle.textContent = `Department: ${this.department} - Level: ${this.level}`;
    divEle.appendChild(levelEle);
    
    const salEle = document.createElement('p');
    salEle.textContent = this.calculate();
    divEle.appendChild(salEle)
    
    const ulEl = document.createElement('ul');
    employee.appendChild(ulEl);
  }
  if (this.department === 'Development'){
    let employee = document.getElementById('Development');
    
    const imgEl = document.createElement('img');
    const imgdiv=document.createElement('div');
    imgdiv.setAttribute('class','img-content');
    employee.appendChild(imgdiv);
          imgdiv.appendChild(imgEl);
          imgEl.src =this.imageUrl;
          
          const divEle = document.createElement('div');
          employee.appendChild(divEle);
          
          const depEle = document.createElement('p')
          depEle.textContent = `Name: ${this.fullName} - ID: ${this.id}`;
          divEle.appendChild(depEle);
          
          const levelEle = document.createElement('p')
          levelEle.textContent = `Department: ${this.department} - Level: ${this.level}`;
          divEle.appendChild(levelEle);
          
          
          const salEle = document.createElement('p');
          salEle.textContent = this.calculate();
          divEle.appendChild(salEle)
          
          const ulEl = document.createElement('ul');
          employee.appendChild(ulEl);
        }
        if (this.department === 'Finance'){
          let employee = document.getElementById('Finance');
          
          const imgEl = document.createElement('img');
          const imgdiv=document.createElement('div');
          imgdiv.setAttribute('class','img-content');
          employee.appendChild(imgdiv);
          imgdiv.appendChild(imgEl);
          imgEl.src =this.imageUrl;
          
          const divEle = document.createElement('div');
          employee.appendChild(divEle);
          
          
          const depEle = document.createElement('p')
          depEle.textContent = `Name: ${this.fullName} - ID: ${this.id}`;
          divEle.appendChild(depEle);
          
          const levelEle = document.createElement('p')
          levelEle.textContent = `Department: ${this.department} - Level: ${this.level}`;
          divEle.appendChild(levelEle);
          
          const salEle = document.createElement('p');
          salEle.textContent = this.calculate();
          divEle.appendChild(salEle)
          
          const ulEl = document.createElement('ul');
          employee.appendChild(ulEl);
        }
      }
      function saveData(employeee){
        let saveArr = JSON.stringify(employeee);
        localStorage.setItem('employees',saveArr);
        em.innerHTML = `<p>${parsedData.someProperty}</p>`
    }
    
    function getData (){
        let getArr = localStorage.getItem('employees');
        let objArr = JSON.parse(getArr);
        // element.innerHTML = `<p>${objArr.this}</p>`
        if (objArr != null){
            for (let i = 7; i < objArr.length; i++) {
                new Employee(objArr[i].id,objArr[i].fullName,objArr[i].department,objArr[i].level,objArr[i].imagrURL);
            }
        }
        
    }
    
      function addEmployee(e){
        e.preventDefault()
        let imageUrl   = e.target.imageUrl.value;
        let fullName   = e.target.fullName.value;
        let department = e.target.department.value;
        let level      = e.target.level.value;
        let id=randId();
        const newEmployee = new Employee(id,fullName,  department, level, imageUrl)
        console.log(newEmployee)
        newEmployee.render()
        newEmployee.calculate()
        saveData(employees)

  }
    
  companyEmployees()
  getData();
  saveData(employees);





// Employee.prototype.render = function(){
//  document.getElementById('container');
//   // if(this.department=== "Administration"){
// // document.getElementById('Administration')
// document.write(`<img src='${this.imageUrl}'>`);
// document.write(`Name: ${this.fullName} - ID: ${this.id}`);
// document.write("<br><br>")
// document.write(`Department: ${this.department} - Level ${this.level}`);
// document.write("<br><br>")
// document.write(`${this.calculate()}`)
// document.write("<br><br>")
// }
// else if(this.department=== "Marketing"){
// document.getElementById('Marketing')
// document.write(`<img src='${this.imageUrl}'>`);
// document.write(`Name: ${this.fullName} - ID: ${this.id}`);
// document.write("<br><br>")
// document.write(`Department: ${this.department} - Level ${this.level}`);
// document.write("<br><br>")
// document.write(`${this.calculate()}`)
// document.write("<br><br>")
// }
// if(this.department=== "Development"){
// document.getElementById('Development')
// document.write(`<img src='${this.imageUrl}'>`);
// document.write(`Name: ${this.fullName} - ID: ${this.id}`);
// document.write("<br><br>")
// document.write(`Department: ${this.department} - Level ${this.level}`);
// document.write("<br><br>")
// document.write(`${this.calculate()}`)
// document.write("<br><br>")
// }
// if(this.department=== "Finance"){
// document.getElementById('Finance')
// document.write(`<img src='${this.imageUrl}'>`);
// document.write(`Name: ${this.fullName} - ID: ${this.id}`);
// document.write("<br><br>")
// document.write(`Department: ${this.department} - Level ${this.level}`);
// document.write("<br><br>")
// document.write(`${this.calculate()}`)
// document.write("<br><br>")
// }
// }

// Ghazi.render();
// Lana.render()
// Tamara.render();
// Safi.render()
// Omar.render()
// Rana.render()
// Hadi.render()