import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to='./add' className="sidebar-option">
                    <img src={assets.add_icon} alt="" />
                    <p>Add items</p>
                </NavLink >
                <NavLink to='./list' className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>List food</p>
                </NavLink>
                <NavLink to='./orders' className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>order</p>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;