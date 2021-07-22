import { functions } from '../api/ClothesApiCalls'
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { YourCloths } from './yourCloths'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../contexts/cartContext';
import styles from './measure.module.scss';

const Measure = () => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  let waistSize = 0;
  let hipSize = 0;
  let crotchSize = 0;
  let thighSize = 0;
  let length = 0;
  let clothImageName = '';
  const baseUrl = "https://api.mytaylor.org/";
  //const baseUrl = "http://localhost:2000/"

  const imgUrl = baseUrl + 'images/';

  const updateWaistSize = (evt) => {
    waistSize = evt.target.value;
  }
  const updateHipSize = (evt) => {
    hipSize = evt.target.value;
  }
  const updateCrotchSize = (evt) => {
    crotchSize = evt.target.value;
  }
  const updateThighSize = (evt) => {
    thighSize = evt.target.value;
  }
  const updateLength = (evt) => {
    length = evt.target.value;
  }
  const updateSelectedCloth = (selectedCloth) => {
    clothImageName = selectedCloth;
  }
  const updateClothLoad = (defaultCloth) => {
    clothImageName = defaultCloth;
  }

  const handleSubmit = () => {
    const product = {
      id: cartItems.length,
      price: 50,
      quantity: 1,
      name: 'pant',
      photo: imgUrl + clothImageName,
      waistSize: waistSize,
      hipSize: hipSize,
      crotchSize: crotchSize,
      thighSize: thighSize,
      length: length,
      imageName: clothImageName
    };

    if (isInCart(product)) {
      increase(product);
    } else {
      addProduct(product);
    }

    functions.postPant(waistSize, hipSize, crotchSize, thighSize, length, clothImageName);
  }

  const isInCart = product => {
    return !!cartItems.find(item => item.imageName === product.imageName
                && item.waistSize === product.waistSize
                && item.hipSize === product.hipSize
                && item.crotchSize === product.crotchSize
                && item.thighSize === product.thighSize
                && item.length === product.length);
  }

  return (
    <div>
      <Container className={styles.contain}>
        <Row className="align-items-center">
          <Col lg='3'><img src="/measurePant.jpg" alt="mesure pantalon"/></Col>
          <Col lg='5'>
            <Row >
              <Col>1 Tour de taille (cm)</Col><Col><input type="text" aria-label="tour de taille" onChange={evt => updateWaistSize(evt)}></input></Col>
            </Row>
            <Row>
              <Col>2 Tour de hanche (cm)</Col><Col><input type="text" aria-label="tour de hanche" onChange={evt => updateHipSize(evt)}></input></Col>
            </Row>
            <Row>
              <Col>3 Fourche avant (cm)</Col><Col><input type="text" aria-label="fourche avant" onChange={evt => updateCrotchSize(evt)}></input></Col>
            </Row>
            <Row>
              <Col>4 Cuisse (cm)</Col><Col><input type="text" aria-label="Cuisse" onChange={evt => updateThighSize(evt)}></input></Col>
            </Row>
            <Row>
              <Col>5 Longueur (cm)</Col><Col><input type="text" aria-label="Longueur" onChange={evt => updateLength(evt)}></input></Col>
            </Row>
          </Col>
          <Col>
            <YourCloths onClothChange={evt => updateSelectedCloth(evt)} onClothLoad={val => updateClothLoad(val)} ></YourCloths>
          </Col>
        </Row>
      </Container>
      <input className={styles.center} type="button" value="Ajouter" title="Add" onClick={handleSubmit}></input>
    </div >
  );
}

export default Measure;
