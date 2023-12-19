import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navside = () => {
  const [isUser, setIsUser] = useState(true)
  const [isRequest, setIsRequest] = useState(true)

  const handleUserToggle = () => {
    setIsUser(!isUser);
  };

  const handleRequestToggle = () => {
    setIsRequest(!isRequest);
  };

  return (
      <nav className="sidebar">
        <div className="logo d-flex justify-content-between">
          <a className="large_logo" href="#">
            <img src="../img/logo.png" alt="" />
          </a>
          <a className="small_logo" href="#">
            <img src="../img/mini_logo.png" alt="" />
          </a>
          <div className="sidebar_close_icon d-lg-none">
            <i className="ti-close"></i>
          </div>
        </div>
        <ul id="sidebar_menu" class="metismenu">
          {isUser ? (<li className="" onClick={handleUserToggle}>
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/dashboard.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>User Management </span>
              </div>
            </a>
          </li>) : (<li className="" onClick={handleUserToggle}>
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/dashboard.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>User Management </span>
              </div>
            </a>
            <ul>
              <li>
                <Link to='/Create'>Create</Link>
              </li>
             
              <li>
                <Link to='/maintransaction'>wallet</Link>
              </li>
              <li>
                <a href="#">Light Sidebar</a>
              </li>

            </ul>
          </li>)}

          {isRequest ? (<li className="" onClick={handleRequestToggle}>
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/dashboard.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Request </span>
              </div>
            </a>
          </li>) : (<li className="" onClick={handleRequestToggle}>
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/dashboard.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Request </span>
              </div>
            </a>
            <ul>
              <li>
                <Link to='/agentDelete'>Agent Delete</Link>
              </li>

            </ul>
          
          </li>)}
          <li>
                <Link to='/Createsub'>CreateSub</Link>
              </li>
          
          {/* <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/2.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Application </span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">editor</a>
              </li>
              <li>
                <a href="#">Mail Box</a>
              </li>
              <li>
                <a href="#">Chat</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/3.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Pages</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Error 404</a>
              </li>
              <li>
                <a href="#">Error 500</a>
              </li>
              <li>
                <a href="#">Forgot Password</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/4.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Admins</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Admin List</a>
              </li>
              <li>
                <a href="#">Add New Admin</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/11.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Role & Permissions</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Module Setting</a>
              </li>
              <li>
                <a href="#">Role & Permissions</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/12.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Navs</span>
              </div>
            </a>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/5.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Users</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Users List</a>
              </li>
              <li>
                <a href="#">Add New User</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/6.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Builder </span>
              </div>
            </a>
          </li>
          <li className="">
            <a href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/7.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Invoice</span>
              </div>
            </a>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/8.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>forms</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Basic Elements</a>
              </li>
              <li>
                <a href="#">Groups</a>
              </li>
              <li>
                <a href="#">Max Length</a>
              </li>
              <li>
                <a href="#">Layouts</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/9.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Board</span>
              </div>
            </a>
          </li>
          <li className="">
            <a href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/10.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Calander</span>
              </div>
            </a>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/11.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Themes</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Dark Sidebar</a>
              </li>
              <li>
                <a href="#">light Sidebar</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/12.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>General</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="Minimized_Aside.html">Minimized Aside</a>
              </li>
              <li>
                <a href="empty_page.html">Empty page</a>
              </li>
              <li>
                <a href="fixed_footer.html">Fixed Footer</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/13.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Products</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Product Details</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Checkout</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/14.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Icons</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Fontawesome Icon</a>
              </li>
              <li>
                <a href="#">themefy icon</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/15.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Animations</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Animate</a>
              </li>
              <li>
                <a href="#">Scroll Reveal</a>
              </li>
              <li>
                <a href="#">Tilt Animation</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/16.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Components</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Accordions</a>
              </li>
              <li>
                <a href="#">Scrollable</a>
              </li>
              <li>
                <a href="#">Notifications</a>
              </li>
              <li>
                <a href="#">Carousel</a>
              </li>
              <li>
                <a href="#">Pagination</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/17.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Table</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Data Tables</a>
              </li>
              <li>
                <a href="#">Bootstrap</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/18.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Cards</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Basic Card</a>
              </li>
              <li>
                <a href="#">Theme Card</a>
              </li>
              <li>
                <a href="#">Draggable Card</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/19.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Charts</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">ChartJS</a>
              </li>
              <li>
                <a href="#">Apex Charts</a>
              </li>
              <li>
                <a href="#">Chart sparkline</a>
              </li>
              <li>
                <a href="#">am-charts</a>
              </li>
              <li>
                <a href="#">nvd3 charts.</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/20.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>UI Kits </span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">colors</a>
              </li>
              <li>
                <a href="#">Alerts</a>
              </li>
              <li>
                <a href="#">Buttons</a>
              </li>
              <li>
                <a href="#">modal</a>
              </li>
              <li>
                <a href="#">Droopdowns</a>
              </li>
              <li>
                <a href="#">Badges</a>
              </li>
              <li>
                <a href="#">Loading Indicators</a>
              </li>
              <li>
                <a href="#">Color Plate</a>
              </li>
              <li>
                <a href="#">Typography</a>
              </li>
              <li>
                <a href="#">Date Picker</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/21.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Widgets</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Chart Boxes 1</a>
              </li>
              <li>
                <a href="#">Profile Box</a>
              </li>
            </ul>
          </li>
          <li className="">
            <a className="has-arrow" href="#" aria-expanded="false">
              <div className="nav_icon_small">
                <img src="../img/menu-icon/12.svg" alt="" />
              </div>
              <div className="nav_title">
                <span>Maps</span>
              </div>
            </a>
            <ul>
              <li>
                <a href="#">Maps JS</a>
              </li>
              <li>
                <a href="#">Vector Maps</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
  );
};

export default Navside;
