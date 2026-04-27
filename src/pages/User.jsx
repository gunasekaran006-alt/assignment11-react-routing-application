import { users } from '../data/users';
import UserCard from '../components/UserCard';

const User = () => {
  return (
    <div>
      <h1>Users Directory</h1>
      <div className="users-grid">
        {/* Mapping through users array */}
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;