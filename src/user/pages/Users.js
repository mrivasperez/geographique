import UsersList from "../components/UsersList";

const Users = (props) => {
  const USERS = [
    {
      id: "u1",
      name: "Mikayla",
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
