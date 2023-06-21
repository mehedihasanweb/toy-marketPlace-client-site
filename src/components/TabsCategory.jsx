import React, { useContext, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import SingleItem from './SingleItem';
import { MotionAnimate } from 'react-motion-animate';

const TabsCategory = () => {
    const [datas, setDatas] = useState([])

    const { users } = useContext(AuthContext)

    const handle = (category) => {
        const url = `https://toy-marketplace-server-eta-three.vercel.app/tabs?CategoryName=${category}`

        fetch(url)
            .then(res => res.json())
            .then(data => setDatas(data))
    }

    return (
        <MotionAnimate animation='fadeInUp' reset={true}>
            <div className='text-center'>
                <h2 className='font-bold text-teal-300 text-xl'>Out Products</h2>
                <h2 className='text-3xl pb-4 font-bold '>Shop By Category</h2>

            </div>
            <Tabs className='text-center  mx-auto'>
                <TabList>
                    <Tab onClick={() => handle('teddy')}>Teddy Bear</Tab>
                    <Tab onClick={() => handle('horse')}>Horse</Tab>
                    <Tab onClick={() => handle('dogs')}>dogs</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 w-full md:grid-cols-3 gap-4'>
                        {
                            datas.map(data => <SingleItem key={data.id} data={data} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            datas.map(data => <SingleItem key={data.id} data={data} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            datas.map(data => <SingleItem key={data.id} data={data} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            <ToastContainer />
        </MotionAnimate>
    );
};

export default TabsCategory
