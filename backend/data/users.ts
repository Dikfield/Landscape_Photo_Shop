import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: true,
  },
  {
    name: 'Perola',
    email: 'perola@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
  {
    name: 'Capetita',
    email: 'capetita@outlook.com',
    password: bcrypt.hashSync('1234', 10),
    isAdmin: false,
  },
];

export default users;
