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
    <div className="App">
      <div className="sidebar">
        <img src="../Assets" className="bookshelf-image" alt="Bbookshelf"/>
            <ul>
            <li>
            <Link to="/Checkout">Check Out</Link>
          </li>
          <li>
            <Link to="/AddUser">Add User</Link>
          </li>
          <li>
            <Link to="/addbook">Add Book</Link>
          </li>
          <li>
            <Link to="/getbook">Get Book</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

              {/* <li>
                <Link to="/all-transactions">All Transactions</Link>
              </li> */}
            </ul>
            <Outlet />
          </div>
        </div>
      </header>  
  </div>
  
  );
}
 // <div className="content">
      // </div>
     
export default Layout;
