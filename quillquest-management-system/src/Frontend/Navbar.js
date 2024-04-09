import { Link, Outlet } from "react-router-dom";
import './Navbar.css';


function Layout() {
  const leftStyle = {
    float: "left"
  };
  console.log("Hi");
  return (   
    <div>
    <header className="App-header">
        <div className="main-page">
          <img src="../Assets" className="bookshelf-image" alt="Bbookshelf"/>
          <div className="nav">
            <ul>
              {/* <li>
                <Link to="/all-transactions">All Transactions</Link>
              </li> */}
              <li>
                <Link to="/Checkout">Check Out</Link>
              </li>
              <li>
                <Link to="/AddUser">Add User</Link>
              </li>
              <li>
                <Link to="/GetUser">Get User</Link>
              </li>
              <li>
                <Link to="/addbook">Add Book</Link>
              </li>
              <li>
                <Link to="/GetBook">Get Book</Link>
              </li>
              <li style={leftStyle }>
                <Link to="/">Home</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </header>  
  </div>
  
  );
}

export default Layout;