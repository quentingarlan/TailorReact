import { functions } from '../api/ClothesApiCalls'
import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { YourCloths } from './yourCloths'
import { CartContext } from '../contexts/cartContext';
import styles from './measure.module.scss';
import { useTranslation } from 'react-i18next';

const Measure = () => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { t } = useTranslation();

  let clothImageName = '';

  const [waistSize, updateWaistSize] = useState("");
  const [hipSize, updateHipSize] = useState("");
  const [crotchSize, updateCrotchSize] = useState("");
  const [thighSize, updateThighSize] = useState("");
  const [length, updateLength] = useState("");

  const handleWaistSizeChange = ({ target }) => {
    updateWaistSize(target.value);
  };
  const handleHipSizeChange = ({ target }) => {
    updateHipSize(target.value);
  };
  const handleCrotchSizeChange = ({ target }) => {
    updateCrotchSize(target.value);
  };
  const handleThighSizeChange = ({ target }) => {
    updateThighSize(target.value);
  };
  const handleLengthChange = ({ target }) => {
    updateLength(target.value);
  };

  const updateSelectedCloth = (selectedCloth) => {
    clothImageName = selectedCloth;
  }
  const updateClothLoad = (defaultCloth) => {
    clothImageName = defaultCloth;
  }

  const handleSubmit = () => {

    if (!waistSize || !hipSize || !crotchSize || !thighSize || !length) {
      var validationErrorTxt = document.getElementById("validationError");
      if (validationErrorTxt) { validationErrorTxt.innerHTML = 'All sizes must be filled with numbers only'; }
      return;
    } else {
      var validationErrorTxt = document.getElementById("validationError");
      if (validationErrorTxt) { validationErrorTxt.innerHTML = ''; }
    }

    const product = {
      id: cartItems.length,
      price: 50,
      quantity: 1,
      name: t('pant'),
      waistSize: waistSize,
      hipSize: hipSize,
      crotchSize: crotchSize,
      thighSize: thighSize,
      length: length,
      clothImageName: clothImageName,
    };

    if (isInCart(product)) {
      increase(product);
    } else {
      addProduct(product);
    }

    functions.postPant(waistSize, hipSize, crotchSize, thighSize, length, clothImageName);
  }

  const isInCart = product => {
    return !!cartItems.find(item => item.clothImageName === product.clothImageName
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
          <Col lg='3'><img src="/measurePant.jpg" alt="mesure pantalon" /></Col>
          <Col lg='5'>
            <Row >
              <Col>1 {t('waistSize')} (cm)</Col>
              <Col><input type="text" aria-label="tour de taille" onChange={evt => handleWaistSizeChange(evt)} value={waistSize}></input></Col>
            </Row>
            <Row>
              <Col>2 {t('hipSize')} (cm)</Col>
              <Col><input type="text" aria-label="tour de hanche" onChange={evt => handleHipSizeChange(evt)} value={hipSize}></input></Col>
            </Row>
            <Row>
              <Col>3 {t('crotchSize')} (cm)</Col>
              <Col><input type="text" aria-label="fourche avant" onChange={evt => handleCrotchSizeChange(evt)} value={crotchSize}></input></Col>
            </Row>
            <Row>
              <Col>4 {t('thighSize')} (cm)</Col>
              <Col><input type="text" aria-label="Cuisse" onChange={evt => handleThighSizeChange(evt)} value={thighSize}></input></Col>
            </Row>
            <Row>
              <Col>5 {t('length')} (cm)</Col>
              <Col><input type="text" aria-label="Longueur" onChange={evt => handleLengthChange(evt)} value={length}></input></Col>
            </Row>
          </Col>
          <Col>
            <YourCloths onClothChange={evt => updateSelectedCloth(evt)} onClothLoad={val => updateClothLoad(val)} ></YourCloths>
          </Col>
        </Row>
      </Container>
      <div className={styles.centeredError} id="validationError" />
      <input className={styles.center} type="button" value={t('addCart')} title="Add to cart" onClick={handleSubmit}></input>
    </div >
  );
}

export default Measure;
