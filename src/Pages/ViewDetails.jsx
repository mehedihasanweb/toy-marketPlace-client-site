import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const loadedData = useLoaderData()
    console.log(loadedData);
    const { Picture, Name, Price, Rating, SellerName, description, quantity, sellerMail } = loadedData

    return (
        <div className="card w-96 my-20 mx-auto glass">
            <figure><img src={Picture} alt="car!" /></figure>
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
    );
};

export default ViewDetails;