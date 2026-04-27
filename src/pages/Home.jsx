import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero">
        <h1>Welcome to Our React Application</h1>
        <p>This multi-page application demonstrates React Router features.</p>
        <br />
        <button className="btn" onClick={() => navigate('/users')}>
          Explore Users List
        </button>
      </section>
      
      <div>
        <h2>Featured Content</h2>
        <p>This is a sample project for Assignment 11 focusing on Router setup, navigation hooks, and dynamic routing.</p>
      </div>
    </div>
  );
};

export default Home;