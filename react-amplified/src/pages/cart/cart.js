import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import Layout from '../shared/layout';
import CartProducts from './cartProduct';
import { CartContext } from '../../contexts/cartContext';
import { formatNumber } from '../../helpers/utils';
import { PayPalButton } from "react-paypal-button-v2";
import { functions } from '../../api/MailApiCall'
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { countryList } from '../../components/countryList';
import '@progress/kendo-theme-default/dist/all.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cart() {
    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [mail, setEmail] = useState("");
    const [country, setCountry] = useState("France");
    const handleSend = () => {
        functions.postMail(cartItems, firstName, lastName, address, zipCode, mail, country);
    }
    const handleFirstNameChange = ({ target }) => {
        setFirstName(target.value);
    };
    const handleLastNameChange = ({ target }) => {
        setLastName(target.value);
    };
    const handleAddressChange = ({ target }) => {
        setAddress(target.value);
    };
    const handleZipCodeChange = ({ target }) => {
        setZipCode(target.value);
    };
    const handleEmailChange = ({ target }) => {
        setEmail(target.value);
    };
    const handleCountryChange = ({ target }) => {
        setCountry(target.value);
    };
    return <Layout title="Cart" description="This is the Cart page">
        <Container>
            <Row>
                <Col lg='10'>
                    <Row>
                        <Col>
                            <Row>
                                <Col lg='5'>Country</Col><Col lg='3'><DropDownList data={countryList} onChange={handleCountryChange}
                                    value={country} /></Col>
                            </Row>
                            <Row>
                                <Col lg='5'>First Name</Col><Col lg='3'><input type="text"
                                    onChange={handleFirstNameChange}
                                    value={firstName} autoFocus="autofocus" /></Col>
                            </Row>
                            <Row>
                                <Col lg='5'>Last Name</Col><Col lg='3'><input onChange={handleLastNameChange}
                                    value={lastName} type="text" /></Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col lg='5'>Address</Col><Col lg='3'><input onChange={handleAddressChange}
                                    value={address} type="text" /></Col>
                            </Row>
                            <Row>
                                <Col lg='5'>Zip code</Col><Col lg='3'><input onChange={handleZipCodeChange}
                                    value={zipCode} type="text" /></Col>
                            </Row>
                            <Row>
                                <Col lg='5'>Email</Col><Col lg='3'><input onChange={handleEmailChange}
                                    value={mail} type="text" /></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row lg='8'>
                        {cartItems?.length > 0 ?
                            <CartProducts items={cartItems} /> : <div className="p-3 text-center text-muted">Your cart is empty</div>
                        }
                        {checkout &&
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                            </div>
                        }
                    </Row>
                </Col>
                <Col lg='2'>
                    <Row>
                        {
                            cartItems?.length > 0 &&
                            <div className="totalEncart">
                                <div className="card card-body">
                                    <p className="mb-1">Total Items</p>
                                    <h4 className="mb-3 txt-right">{itemCount}</h4>
                                    <p className="mb-1">Total Payment</p>
                                    <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                    <hr className="my-4" />
                                    <div className="text-center">
                                        <PayPalButton
                                            forceReRender
                                            options={{
                                                clientId: "Afzfteg4p3l2fx7k_QJgwQKiNUFMp2EDNRk3Pw5jf52inYxuLHlPCt0IhFjVeof-LJ9Y8LZL31D_Pvng"
                                            }}
                                            amount={total}
                                            onSuccess={handleCheckout}
                                            onClick={handleSend} />
                                        <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR CART</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    </Layout>
}