import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    status: 'Active',
    isAdmin: true,
    confirmationCode: 'teste',
  },
  {
    name: 'Perola',
    email: 'perola@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    status: 'Active',
    isAdmin: false,
    confirmationCode: 'teste2',
  },
  {
    name: 'Capetita',
    email: 'capetita@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    status: 'Active',
    isAdmin: false,
    confirmationCode: 'teste3',
  },
];

export default users;
