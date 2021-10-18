import React, { useState } from 'react';
import Navbar from './Navbar';

function MyOrders(props){

    const orders = props.ordersData;

    return (
        <div>
            {/* Container */}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead className="text-center">
                                <tr>
                                    <th>Coffee Type</th>
                                    <th>Coffee Box Type</th>
                                    <th>Boxes Amount</th>
                                    <th>Delivery Date</th>
                                    <th style={{width: '9%'}}>Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {orders?.map(row=>(
                                    <tr key={row.id}>
                                        <td>{row.type}</td>
                                        <td>{row.boxType}</td>
                                        <td>{row.amount}</td>
                                        <td>{row.date}</td>
                                        <td><button className="btn btn-primary btn-sm text-light">Check Status</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyOrders;