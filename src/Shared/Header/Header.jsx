import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {

    const { users, logOut } = useContext(AuthContext)

    const handleLogOut =()=>{

        logOut()
        .then()
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        <li><Link to='/myToys'>My Toys</Link></li>
                        <li><Link to='/addToys'>Add A Toys</Link></li>
                        <li><Link to='/blog'>Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/'><img src="https://bw-petito-demo2.bzotech.com/wp-content/uploads/2023/03/logo-1.svg" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/allToys'>All Toys</Link></li>
                    {users && <li><Link to='/myToys'>My Toys</Link></li>}
                    {users && <li><Link to='/addToys'>Add A Toys</Link></li>}
                    <li><Link to='/blog'>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {users ? <>
                    <img src={users?.photoURL} className='mr-4 h-10 w-10 rounded-full' title={users.displayName} alt="" />
                    <button onClick={handleLogOut} className="btn btn-error">LogOut</button>
                </>
                    : <Link to='/login'><button className="btn btn-error">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Header;