import './Home.css';
import qqLogo from 'quillquest-management-system/src/Assets/qq.jpg';

const Home = () => {
  console.log('home');
  return (
    <div>
      <h1>Library Management System</h1>
      <img src={qqLogo} alt="KLLogo" className="qqLogo" />
    </div>
  );
};

export default Home;