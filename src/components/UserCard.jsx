import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.role}</p>
      {/* Link to dynamic route */}
      <Link to={`/users/${user.id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

export default UserCard;