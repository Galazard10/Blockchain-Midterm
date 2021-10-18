import React, { useState } from 'react';
import MyOrders from './MyOrders';
import {Link, Route} from "react-router-dom"; 

function HomeContainer(props){

    const [coffeeType, setCoffeeType] = useState("Ethiopean Coffee");
    const [coffeeBoxType, setCoffeeBoxType] = useState("1-kilo");
    const [coffeeAmount, setCoffeeAmount] = useState(0);
    const [coffeeDeliveryDate, setCoffeeDeliveryDate] = useState("");

    const [data, setData] = useState([]);
    const [id, setId] = useState(1);

    const handleCoffeeTypeChange = event =>{
        setCoffeeType(event.target.value);
    }

    const handleBoxTypeChange = event =>{
        setCoffeeBoxType(event.target.value);
    }

    const handleCoffeeAmountChange = event =>{
        setCoffeeAmount(event.target.value);
    }

    const handleCoffeeDeliveryDate = event =>{
        setCoffeeDeliveryDate(event.target.value);
    }

    const handleFormSubmit = event =>{
        event.preventDefault();
        data.push({"id": id, "type": coffeeType, "boxType": coffeeBoxType, "amount": coffeeAmount, "date": coffeeDeliveryDate});
        setCoffeeType("Ethiopean Coffee");
        setCoffeeBoxType("1-kilo");
        setCoffeeAmount(0);
        setCoffeeDeliveryDate("");
        setData(data);
        setId(id + 1);
        console.log(data);
    }

    return(
        <div className="container mt-5">
            <Route path="/" exact>
            <div className="row">
                <div className="col-12 d-flex justify-content-around">
                    {/* Ethiopean Coffee */}
                    <div className="card" style={{width: '22rem'}}>
                    <img src="https://leagueofcoffee.ru/assets/cache_image/products/62/ethiopia_768x768_174.jpg" className="card-img-top" style={{backgroundPosition: 'center', height: '250px', objectFit: 'cover'}} />
                        <div className="card-body">
                            <h5 className="card-title">Ethiopian Coffee</h5>
                            <p className="card-text" style={{minHeight: '100px'}}>Ethiopia (formerly Abyssinia) is the birthplace of Arabica, coffee beans have been grown here for over a thousand years.</p>
                            {/* Button triger modal */}
                            <button type="button" className="btn btn-success form-control" data-bs-toggle="modal" data-bs-target="#orderCoffee">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* Columbian Coffee */}
                    <div className="card" style={{width: '22rem'}}>
                        <img src="https://kofegood.ru/wp-content/uploads/2017/06/Kolumbijskij-kofe.jpg" className="card-img-top" style={{backgroundPosition: 'center', height: '250px', objectFit: 'cover'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Colombian Coffee</h5>
                            <p className="card-text" style={{minHeight: '100px'}}>Colombia is famous for growing some of the best coffee beans in the world; the plants thrive under the shade of banana trees in the tropical climate.</p>
                            {/* Button triger modal */}
                            <button type="button" className="btn btn-success form-control" data-bs-toggle="modal" data-bs-target="#orderCoffee">
                                Order Now
                            </button>                    
                        </div>
                    </div>

                    {/* Unroasted coffee */}
                    <div className="card" style={{width: '22rem'}}>
                        <img src="https://www.shopquesthealth.com/wp-content/uploads/2019/10/Green-Coffee-Bean-Extract.jpg  " className="card-img-top" style={{backgroundPosition: 'center', height: '250px', objectFit: 'cover'}}/>
                        <div className="card-body">
                            <h5 className="card-title">Unroasted Coffee</h5>
                            <p className="card-text" style={{minHeight: '100px'}}>Many of our customers prefer to roast their own coffee at home. Roasting your own coffee allows you to roast your coffee to the exact degree of darkness that you desire.</p>
                            {/* Button trigger modal */}
                            <button type="button" className="btn btn-success form-control" data-bs-toggle="modal" data-bs-target="#orderCoffee">
                                Order now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order COFFEE MODAL */}
            <div className="modal fade" id="orderCoffee" tabindex="-1" aria-labelledby="orderCoffee" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{color: '#6F4E37'}}>Order Coffee</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form method="post" onSubmit={handleFormSubmit}>
                            <div className="modal-body">
                                <label>Choose the Coffee type:</label>
                                <select className="form-select mt-2" aria-label="Default select example" value={coffeeType} onChange={handleCoffeeTypeChange} required>
                                    <option value="Ethiopean Coffee" selected>Ethiopean Coffee</option>
                                    <option value="Colombian Coffee">Colombian Coffee</option>
                                    <option value="Unroasted Coffee">Unroasted Coffee</option>
                                </select>
                                <label className="mt-2">Choose the Box type:</label>
                                <select className="form-select mt-2" aria-label="Default select example" value={coffeeBoxType} onChange={handleBoxTypeChange} required>
                                    <option value="1-kilo" selected>1-kilo Coffee Box</option>
                                    <option value="2-kilo">2-kilo Coffee Box</option>
                                    <option value="3-kilo">3-kilo Coffee Box</option>
                                </select>
                                <label className="mt-2">Type the amount:</label>
                                <input type="number" className="form-control mt-2" min="1" max="100" value={coffeeAmount} onChange={handleCoffeeAmountChange} required />
                                <label className="mt-2">Insert the Date:</label>
                                <input type="date" className="form-control mt-2" value={coffeeDeliveryDate} onChange={handleCoffeeDeliveryDate} required />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-success" data-bs-dismiss="modal">Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </Route>
            <Route path="/orders" exact>
                {/* My Orders List */}
                <MyOrders ordersData = {data} />
            </Route>
        </div>       
    );
}

export default HomeContainer;