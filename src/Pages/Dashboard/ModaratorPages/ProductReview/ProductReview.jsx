import { useEffect } from "react";
import { useState } from "react";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';


const ProductReview = () => {
    const [reviews, setReviews] = useState([])
    const myAxios = useAxiosPublic()
    useEffect(() => {
        myAxios.get('/review')
            .then(res => {
                setReviews(res?.data)
            })
    }, [myAxios])
    return (
        <div>
            {/* review part */}
            <div className="grid lg:grid-cols-2 gap-10 max-w-screen-md mx-auto">
                {
                    reviews?.map(review => <div key={review._id}>
                        <div className="bg-slate-100 shadow-md rounded-lg w-96 ">
                            <img className="w-24 h-24 rounded-full m-5 flex justify-center items-center" src={review.image} alt="" />
                            <div className=" text-center ">
                                <div className="flex text-5xl text-[#CD9003]"><Rating
                                    style={{ maxWidth: 180 }}
                                    value={review?.rating}
                                    readOnly
                                /></div>
                                <p>{review.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ProductReview;