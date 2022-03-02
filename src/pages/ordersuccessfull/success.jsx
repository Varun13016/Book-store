import React from 'react';
import Header from '../../components/header/header';
import './success.css';
import { Box, Button } from '@mui/material';
import placeOrder from './placeOrder.png'
import Footer from '../../components/footer/footer';

function Success() {
    return (
        <div>
            <Header />
            <Box className='successbox'>
                <box className="successimg">
                    <img src={placeOrder} alt="img" id='successimg' />
                    <h4>
                        hurray!!! your order is confirmed<br /> the order id is #123456 save the order id for<br /> further
                        communication..
                    </h4>
                </box>
                <Box className='tablebox'>
                    <table >
                        <tr >
                            <th >Email</th>
                            <th >Contact us</th>
                            <th >Address</th>

                        </tr>

                        <td >admin@bookstore.com</td>
                        <td >+91 8163475881</td>
                        <td >42, 14th Main, 15th Cross, Sector4, opp to BDA<br/>complex, near kumarakom
                            restaurant, HSR Layout.</td>


                    </table>

                    <Button  variant='contained'>Continue Shopping</Button>
                </Box>
            </Box>
            <Footer  />

        </div>
    )
}

export default Success;