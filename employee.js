'use strict';
  function Employee(id, fullName, department, level, imageUrl, salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;

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
  Employee.prototype.render = function(){
    document.write(`Empolee: ${this.fullName}; his salary: ${this.calculate()} `);
    document.write("<br><br>")
  }

let Ghazi  =   new Employee(1000,"ghazi samer","Administration","Senior","");
let Lana   =   new Employee(1001,"Lana Ali","Finance","Senior","");
let Tamara =   new Employee(1002,"Tamara Ayoub","Markete","Senior","");
let Safi   =   new Employee(1003,"Safi Walid","Administration","Mid-Senior","");
let Omar   =   new Employee(1004,"Omar Zaid	","Development","Senior","");
let Rana   =   new Employee(1005,"Rana Saleh	","Development","Junior","");
let Hadi   =   new Employee(1006,"Hadi Ahmad","Finance","Mid-Senior","");

Ghazi.render();
Lana.render()
Tamara.render();
Safi.render()
Omar.render()
Rana.render()
Hadi.render()