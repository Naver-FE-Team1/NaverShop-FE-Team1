import React from 'react';
import ManageOrderHeader from '../../molecules/ManageOrderHeader/ManageOrderHeader';
import TabManagerOrder from '../../molecules/TabManagerOrder/TabManagerOrder';
const ManageOrder = () => {
    return (
        <div className='manageOrder'>
            <ManageOrderHeader></ManageOrderHeader>
            <TabManagerOrder></TabManagerOrder>
        </div>
    );
}
export default ManageOrder;