import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../data/users';

const UserDetail = () => {
  const { id } = useParams(); // Get ID from URL parameters
  const navigate = useNavigate();
  
  // Find the specific user from data array
  const user = users.find((u) => u.id === parseInt(id));

  // Handle invalid user IDs
  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>User Not Found!</h2>
        <button className="btn" onClick={() => navigate('/users')}>Back to Users</button>
      </div>
    );
  }

  return (
    <div className="user-detail-card">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <h4>Role: {user.role}</h4>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <br />
      {/* Back button using programmatic navigation */}
      <button className="btn" onClick={() => navigate('/users')}>
        Back to Users List
      </button>
    </div>
  );
};

export default UserDetail;