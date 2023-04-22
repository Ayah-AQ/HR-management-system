'use strict'
let employees = JSON.parse(localStorage.getItem("employees"));


function render() {
//Adminstartion
  let sumAdministration = 0; 
  let salaryAdministration = 0;
  let avgAdministration = 0;
  //Markiting
  let sumMarketing = 0;
  let salaryMarketing = 0;
  let avgMarketing = 0;
  //Development
  let sumDevelopment= 0;
  let salaryDevelopment= 0;
  let avgDevelopment= 0;
  //Finance
  let sumFinance = 0;
  let salaryFinance = 0;
  let avgFinance = 0;
  
  
    for (let i = 0; i < employees.length; i++) {
    if (employees[i].department == "Administration") {
      sumAdministration++;
      salaryAdministration += employees[i].salary;
      avgAdministration = salaryAdministration / sumAdministration;
      console.log(sumAdministration)
    }
    else if (employees[i].department == "Marketing") {
      sumMarketing++;
      salaryMarketing += employees[i].salary;
      avgMarketing = salaryMarketing / sumMarketing;
      
        }
        else if (employees[i].department == "Development") {
          sumDevelopment++;
          salaryDevelopment += employees[i].salary;
          avgDevelopment = salaryDevelopment / sumDevelopment;
        }
        else {
            sumFinance++;
            salaryFinance += employees[i].salary;
            avgFinance = salaryFinance / sumFinance;
          }
    }
    let trElAd = document.getElementById('administrationRow');
    let tdElAd1 = document.createElement('td')
    trElAd.appendChild(tdElAd1);
    tdElAd1.textContent = `${sumAdministration}`;
    let tdElAd2 = document.createElement('td')
    trElAd.appendChild(tdElAd2);
    tdElAd2.textContent = `${salaryAdministration}`;
    let tdElAd3 = document.createElement('td')
    trElAd.appendChild(tdElAd3);
    tdElAd3.textContent = `${avgAdministration}`;

    let trElMarket = document.getElementById('marketingRow');
    let tdElMarket = document.createElement('td')
    trElMarket.appendChild(tdElMarket);
    tdElMarket.textContent = `${sumMarketing}`;
    let tdElMarket2 = document.createElement('td')
    trElMarket.appendChild(tdElMarket2);
    tdElMarket2.textContent = `${salaryMarketing}`;
    let tdElMarket3 = document.createElement('td')
    trElMarket.appendChild(tdElMarket3);
    tdElMarket3.textContent = `${avgMarketing}`;

    let trElDiv = document.getElementById('developmentRow');
    let tdElDiv = document.createElement('td')
    trElDiv.appendChild(tdElDiv);
    tdElDiv.textContent = `${sumDevelopment}`;
    let tdElDiv2 = document.createElement('td')
    trElDiv.appendChild(tdElDiv2);
    tdElDiv2.textContent = `${salaryDevelopment}`;
    let tdElDiv3 = document.createElement('td')
    trElDiv.appendChild(tdElDiv3);
    tdElDiv3.textContent = `${avgDevelopment}`;

    
    let trElFin = document.getElementById('financeRow');
    let tdElFin = document.createElement('td')
    trElFin.appendChild(tdElFin);
    tdElFin.textContent = `${sumFinance}`;
    let tdElFin2 = document.createElement('td')
    trElFin.appendChild(tdElFin2);
    tdElFin2.textContent = `${salaryFinance}`;
    let tdElFin3 = document.createElement('td')
    trElFin.appendChild(tdElFin3);
    tdElFin3.textContent = `${avgFinance}`;

    let trElTotal = document.getElementById('totalRow');
    let tdElTotal = document.createElement('td')
    trElTotal.appendChild(tdElTotal);
    tdElTotal.textContent=`${employees.length}`
    let tdElTotal2 = document.createElement('td')
    trElTotal.appendChild(tdElTotal2);
    tdElTotal2.textContent=`${salaryAdministration+salaryDevelopment+salaryFinance+salaryMarketing}`

    let tdElTotal3 = document.createElement('td')
    trElTotal.appendChild(tdElTotal3);
    tdElTotal3.textContent=`${(salaryAdministration+salaryDevelopment+salaryFinance+salaryMarketing)/employees.length}`
    
};

render();