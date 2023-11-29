import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const UpdateProduct = () => {
    const {user} = useContext(AuthContext);


    const {id} = useParams()

    const updatedProducts = e => {
        e.preventDefault();
        
    }




    return (
        <div>
            <div className="mt-10 space-y-2">
                <h2 className="text-4xl font-semibold text-center py-2">Update Product</h2>
            <form onSubmit={updatedProducts} className="bg-slate-300 max-w-screen-md mx-auto p-10 rounded-md">

                <input className="p-3 mt-2 py-3 border-2 border-black w-full rounded-md" placeholder="Product name" type="text" name="productName" required /> <br />


                <input className="p-3 mt-2 py-3 border-2 border-black w-full rounded-md " placeholder="Product image" type="text" name="productImage" required/> <br />
                
                <input className="p-3 mt-2 py-3 border-2 border-black w-full rounded-md " defaultValue={user?.displayName} readOnly type="text" name="ownerName" /> <br />
                <input className="p-3 mt-2 py-3 border-2 border-black w-full rounded-md " defaultValue={user?.photoURL} readOnly type="text" name="ownerImage" /> <br />
                <input className="p-3 mt-2 py-3 border-2 border-black w-full rounded-md " defaultValue={user?.email} readOnly type="text" name="ownerEmail" /> <br />

                <input className="p-3 mt-2 py-3 border-2 border-black w-full rounded-md" placeholder="tags" type="text" name="tags" />

                <input  className="p-3 mt-2 py-3 border-2 border-black w-full rounded-md" type="text" name="externallinks" placeholder="external links" />

                <textarea className="p-3 mt-2 py-3 border-2 border-black w-full rounded-md" name="description" id="" cols="30" placeholder="description" required ></textarea>

                <input className="btn btn-accent w-full rounded-md space-y-2" type="submit" value="Submit" />
            </form>

        </div>
        </div>
    );
};

export default UpdateProduct;