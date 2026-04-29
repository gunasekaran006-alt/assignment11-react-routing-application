import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* 404 Error Image */}
      <img 
        src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" 
        alt="404 Not Found" 
        style={{ maxWidth: '400px', width: '100%', marginBottom: '20px' }}
      />
      
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <br />
      <Link to="/">
        <button className="btn">Return to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;