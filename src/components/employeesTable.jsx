
import Table from "react-bootstrap/Table";

const EmployeesTable = ({ users }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EmployeesTable;
