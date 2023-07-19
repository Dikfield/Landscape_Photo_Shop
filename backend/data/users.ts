import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    status: 'Active',
    isAdmin: true,
    products: [],
    confirmationCode: 'teste',
  },
  {
    name: 'Perola',
    email: 'perola@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    status: 'Active',
    isAdmin: false,
    products: [],
    confirmationCode: 'teste2',
  },
  {
    name: 'Capetita',
    email: 'capetita@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    status: 'Active',
    isAdmin: false,
    products: [],
    confirmationCode: 'teste3',
  },
  {
    name: 'Dikfield',
    email: 'dinash@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    status: 'Active',
    isAdmin: false,
    products: [],
    confirmationCode: 'teste4',
  },
];

export default users;
