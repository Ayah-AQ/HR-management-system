'use strict';
function Employee(id, fullName, department, level, imageUrl, salary) {
  this.id = id;
  this.imageUrl = imageUrl;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  // this.salary = salary;
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
  return netSal
}
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
// let Ghazi  =   new Employee(1000,"ghazi samer","Administration","Senior", "https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true" );
// let Lana   =   new Employee(1001,"Lana Ali","Finance","Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true");
// let Tamara =   new Employee(1002,"Tamara Ayoub","Marketing","Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true");
// let Safi   =   new Employee(1003,"Safi Walid","Administration","Mid-Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true");
// let Omar   =   new Employee(1004,"Omar Zaid	","Development","Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true");
// let Rana   =   new Employee(1005,"Rana Saleh	","Development","Junior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true");
// let Hadi   =   new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true");

// Ghazi.render();
// Lana.render()
// Tamara.render();
// Safi.render()
// Omar.render()
// Rana.render()
// Hadi.render()

function randId(){
  let randomId=Math.floor(1000 + Math.random() * 9000);
    return randomId;
}

Employee.prototype.render = function () {
  
  // let employee= (this.department === 'Administration'? document.getElementById('Administration') : this.department === 'Marketing'? document.getElementById('Marketing') )
  if (this.department === 'Administration'){
  let employee = document.getElementById('Administration');

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
  
  if (this.department === 'Marketing'){
    // let  employee = document.getElementById('container');
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
    
    
    const salEle = document.createElement('p');
    salEle.textContent = this.calculate();
    divEle.appendChild(salEle)

      const levelEle = document.createElement('p')
    levelEle.textContent = `Department: ${this.department} - Level: ${this.level}`;
    divEle.appendChild(levelEle);
  
    const ulEl = document.createElement('ul');
    employee.appendChild(ulEl);
    }
    if (this.department === 'Development'){
      // let  employee = document.getElementById('container');
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
        // let  employee = document.getElementById('container');
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

}
const add =document.getElementById("employee-form")
add.addEventListener("submit", addEmployee)