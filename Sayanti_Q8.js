const name ={ 
  firstName: 'Philip',
lastName: 'Fry'
};
const details= {
job: 'Delivery Boy',
employer: 'Planet Expres'};
//Merge and Print 
const information=Object.assign(name,details);
console.log(information);
