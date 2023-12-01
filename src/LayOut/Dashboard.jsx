import { FaHome, FaProductHunt, FaShoppingCart } from "react-icons/fa";
import { GiMilkCarton } from "react-icons/gi";
import { LiaOpencart } from "react-icons/lia";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-blue-500">
                <ul className="menu p-4">


                    {
                        !isAdmin ? <>
                        <li>
                        <NavLink to="/dashboard/myProfile">
                            <FaHome></FaHome>
                            My Profile </NavLink>
                    </li>


                    <li className="">
                        <NavLink to="/dashboard/addProduct">
                            <GiMilkCarton></GiMilkCarton>
                            Add product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myproducts">
                            <LiaOpencart ></LiaOpencart>
                            My product</NavLink>
                    </li>
                        
                        </>
                        :
                        ''

                        
                    }









                    {/* admin dashboard */}
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/statisticsPage">
                                    <LiaOpencart ></LiaOpencart>
                                    Statistics </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageUsers">
                                    <LiaOpencart ></LiaOpencart>
                                    Manage Users </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageCoupons">
                                    <LiaOpencart ></LiaOpencart>
                                    Manage Coupons </NavLink>
                            </li>
                        </>
                            :
                            ''

                    }










                    <li>
                        <NavLink to="/">
                            <LiaOpencart ></LiaOpencart>
                            Home</NavLink>
                    </li>


                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;