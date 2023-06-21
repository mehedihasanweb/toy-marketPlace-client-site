import { useLoaderData } from 'react-router-dom';
import { MotionAnimate } from 'react-motion-animate';

const ViewDetails = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    const { Picture, Name, Price, Rating, SellerName, description, quantity, sellerMail } = loadedData

    return (
        <MotionAnimate animation='fadeInUp' reset={true}>
            <div className="card w-96 my-20 mx-auto ">
            <img src={Picture} alt="car!" />
            <div className="card-body">
                <h2 className="text-2xl font-bold">Name: {Name}</h2>
                <p className='text-xl font-bold'>SellerName: {SellerName}</p>
                <p className='text-gray-600'>Seller Email: {sellerMail}</p>
                <p className='text-gray-600'>Price: ${Price}</p>
                <p className='text-gray-600'>Rating: {Rating}</p>
                <p className='text-gray-600'>Quantity: {quantity}</p>
                <p className='text-gray-600'>Description: {description}</p>
            </div>
        </div>
        </MotionAnimate>
    );
};

export default ViewDetails;