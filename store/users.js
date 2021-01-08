const users = [
  {
    id: 1,
    name: "Matthew",
    email: "mmalecki4@gmail.com",
    password: "password",
  },
  {
    id: 2,
    name: "Cody",
    email: "cody@email.com",
    password: "password",
  },
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const addUser = (user) => {
  user.id = users.length + 1;
  users.push(user);
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser,
};
