const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];//end employee array

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

//bonus Array
const personBonus = [];

function bonusCalculator(person) {
  console.log(person);

  //establish calculated bonus %
  let totalBonus = 0;

  //bonus % calculator
  if (person.reviewRating <= 2) {
    totalBonus = (0);
  } else if (person.reviewRating === 3) {
    totalBonus = .04;
  } else if (person.reviewRating === 4) {
    totalBonus = .06;
  } else if (person.reviewRating === 5) {
    totalBonus = .1;
  }
  //employee number bonus 
  if (person.employeeNumber.length === 4) {
    totalBonus = totalBonus + .05;
  }
  //above 65,000 adjust down 1%
  if (person.annualSalary > 65000) {
    totalBonus -= .01;
  }
  if (totalBonus < 0) {
    totalBonus = 0;
  }
  if (totalBonus > .13) {
    totalBonus = .13;
  }
}
//make the object
let newPerson = {
  name: employees.name,
  bonusPercentage: totalBonus,
  totalCompensation: (person.annualSalary * totalBonus) + person.annualSalary,
  totalBonus: person.annualSalary * totalBonus
}

console.log(totalBonus);
console.log('employee bonus is:', bonusCalculator(employees[0]));
console.log('employee bonus is:', bonusCalculator('Mayella'));