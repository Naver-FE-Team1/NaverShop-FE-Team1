import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '../../atoms/Button/Button';

const AssignFooter = () => {
    return(
        <div className='assignFooter' id='assignFooter'>
            <div>
                <h4>
                    Join the club get the benefits
                </h4>
                <p>Sign up for out newsletters and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                <div className='containerInputEmail'>
                <TextField 
                    id='emailInputField' 
                    className='emailInputField'
                    variant="outlined" 
                    label='your@email.com'></TextField>
                <Button
                    content='Sign up'
                    color='#FFF'
                    backgroundColor='#2A254B'
                    fontSize={15}
                    width={'30%'}
                    className='btnSignUp'
                ></Button>
                </div>
            </div>
        </div>
    );
}

export default AssignFooter;