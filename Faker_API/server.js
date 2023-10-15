const faker = require('faker');

const express = require ('express')
const app = express();
const port = 8000;

const User = () => ({
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
})

const Company = () => ({
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address:{
    street: faker.address.streetAdress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  }
})

app.get('/api/users/new', (req, res) => {
  const newUser = User();
  res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
  const newCompany = Company ();
  res.json(newCompany);
});

app.get('/api/user/company', (req, res) =>{
  const newUser = User();
  const newCompany = Company();
  const respone = {
    user: newUser,
    company: newCompany,
  };
  res.json(respone);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );