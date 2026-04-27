import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '50px', color: 'red' }}>404</h1>
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