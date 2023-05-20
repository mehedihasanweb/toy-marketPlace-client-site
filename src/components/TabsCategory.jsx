import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import teddy from '../assets/teddy.jpg'
import teddy2 from '../assets/teddy2.jpg'
import horse from '../assets/horse.jpeg'
import horse2 from '../assets/horse2.jpeg'
import dogs from '../assets/dogs.jpeg'
import dogs2 from '../assets/dogs2.jpeg'
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import SingleItem from './SingleItem';

const TabsCategory = () => {
    const [datas, setDatas] = useState([])


    const { users } = useContext(AuthContext)


    const handleViewDetails = (id) => {

        if (!users) {
            return toast("“You have to log in first to view details”");
        }
    }

    const handle = (category) => {
        const url = `http://localhost:5000/tabs?CategoryName=${category}`

        fetch(url)
            .then(res => res.json())
            .then(data => setDatas(data))
    }



    return (
        <div>
            <div className='text-center'>
                <h2 className='font-bold text-teal-300 text-xl'>Out Products</h2>
                <h2 className='text-3xl pb-4 font-bold '>Shop By Category</h2>

            </div>
            <Tabs className='text-center'>
                <TabList>
                    {/* <Tab>All Tedys</Tab> */}
                    <Tab onClick={() => handle('teddy')}>Teddy Bear</Tab>
                    <Tab onClick={() => handle('horse')}>Horse</Tab>
                    <Tab onClick={() => handle('dogs')}>dogs</Tab>
                </TabList>
                
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            datas.map(data => <SingleItem key={data.id} data={data} handleViewDetails={handleViewDetails} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            datas.map(data => <SingleItem key={data.id} data={data} handleViewDetails={handleViewDetails} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            datas.map(data => <SingleItem key={data.id} data={data} handleViewDetails={handleViewDetails} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            <ToastContainer />
        </div>
    );
};

export default TabsCategory
