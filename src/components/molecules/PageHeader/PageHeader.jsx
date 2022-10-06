import React from 'react';
import Button from '../../atoms/Button/Button';

const PageHeader = () => {
    return (
        <div id="header" className='header'>
            <h2>A brand build on the love of craftmanship, quality and outstanding customer service</h2>
            <div>
                <Button
                    radius={0}
                    color= '#2A254B'
                    fontSize={16}
                    content= 'View out products'
                    borderColor= 'transparent'
                ></Button>
            </div>
        </div>

    );
}

export default PageHeader;