import { useContext } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import { MdBrowserUpdated, MdOutlineDeleteForever } from "react-icons/md";



const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const [myproducts, setMyproducts] = useState([])

    const myAxios = useAxiosPublic()
    useEffect(() => {
            myAxios.get('/tranding')
            .then(res => {
                const alldata = res.data
               const findEmail = alldata.filter(item => item?.ownerEmail == user?.email )
               setMyproducts(findEmail)
            })
    }, [myAxios, user?.email])
    return (
        <div>
            <h3>My Product</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Product Name</th>
                            <th>Number of votes</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            myproducts?.map((item) => <tr key={item._id}>
                                <th>
                                    {item?.productName}
                                </th>
                                <td>
                                   0
                                </td>
                                <td>
                                   <button className="btn btn-outline btn-warning btn-sm">Pending</button>
                                </td>
                                <td><button className="btn btn-outline btn-sm"><MdBrowserUpdated></MdBrowserUpdated> Update</button></td>
                                <th>

                                    <button
                                       
                                        className="btn btn-outline btn-sm"> <MdOutlineDeleteForever></MdOutlineDeleteForever>  Delete</button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProduct;