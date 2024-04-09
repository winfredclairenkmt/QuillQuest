import './Home.css';
import KLLogo from '../../Assets/KLLogo.png';

const Home = () => {
  console.log('home');
  return (
    <div>
      <h1>Library Management System</h1>
      <img src={KLLogo} alt="KLLogo" className="KLLogo" />
    </div>
  );
};

export default Home;