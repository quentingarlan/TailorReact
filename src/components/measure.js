import { functions } from '../api/ClothesApiCalls'
import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { YourCloths } from './yourCloths'
import { CartContext } from '../contexts/cartContext';
import styles from './measure.module.scss';
import { useTranslation } from 'react-i18next';
import { sizesList } from './sizesList';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Measure = () => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { t } = useTranslation();

  const [waistSize, updateWaistSize] = useState("68");
  const [hipSize, updateHipSize] = useState("92");
  const [crotchSize, updateCrotchSize] = useState("23.2");
  const [thighSize, updateThighSize] = useState("57");
  const [length, updateLength] = useState("95");
  const [clothImageName, updateClothImageName] = useState("");
  const [autoSize, updateAutoSize] = useState("L");
  const [sex, updateSex] = useState("F");

  const changeSizes = (sizeValue, sexValue) => {
    if (sexValue === "F") {
      switch (sizeValue) {
        case "S": {
          updateWaistSize("68");
          updateHipSize("92");
          updateThighSize("57");
          updateLength("95");
          updateCrotchSize("32.5");
          break;
        }
        case "M": {
          updateWaistSize("72");
          updateHipSize("96");
          updateThighSize("32.7");
          updateLength("96");
          updateCrotchSize("33");
          break;
        } case "L": {
          updateWaistSize("76");
          updateHipSize("100");
          updateThighSize("33.7");
          updateLength("97");
          updateCrotchSize("33.5");
          break;
        } case "XL": {
          updateWaistSize("80");
          updateHipSize("104");
          updateThighSize("34.7");
          updateLength("98");
          updateCrotchSize("34");
          break;
        }
        default: { }
      }
    }
    else {
      switch (sizeValue) {
        case "S": {
          updateWaistSize("66");
          updateHipSize("94");
          updateThighSize("31.7");
          updateLength("102");
          updateCrotchSize("32.5");
          break;
        }
        case "M": {
          updateWaistSize("76");
          updateHipSize("99");
          updateThighSize("32.7");
          updateLength("104");
          updateCrotchSize("33");
          break;
        } case "L": {
          updateWaistSize("81");
          updateHipSize("104");
          updateThighSize("33.7");
          updateLength("107");
          updateCrotchSize("33.5");
          break;
        } case "XL": {
          updateWaistSize("91");
          updateHipSize("109");
          updateThighSize("34.7");
          updateLength("112");
          updateCrotchSize("34");
          break;
        }
        default: { }
      }
    };
  }

  const handleAutoSizeChange = (target) => {
    updateAutoSize(target.value);
    changeSizes(target.value, sex);
  }
  const handleSexChange = ({ target }) => {
    updateSex(target.value);
    changeSizes(autoSize, target.value);
  };
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
  const handleClothImageNameChange = (target) => {
    updateClothImageName(target);
  };

  const handleSubmit = () => {
    var validationErrorTxt = document.getElementById("validationError");
    if (!waistSize || !hipSize || !crotchSize || !thighSize || !length) {
      if (validationErrorTxt) { validationErrorTxt.innerHTML = 'All sizes must be filled with numbers only'; }
      return;
    } else {
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
      sex: sex
    };

    if (isInCart(product)) {
      increase(product);
    } else {
      addProduct(product);
    }
    functions.postPant(waistSize, hipSize, crotchSize, thighSize, length, clothImageName, sex);
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
          <Row className={styles.centerBottomMargin}><h5>{t('autoSize')}</h5></Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <input type="radio" id="F" name="sex" value="F" onChange={handleSexChange} checked={sex === "F"} />
                    <label htmlFor="F">{t('female')}</label>
                  </Col> 
                  <Col>
                    <input type="radio" id="M" name="sex" value="M" onChange={handleSexChange} checked={sex === "M"} />
                    <label htmlFor="M">{t('male')}</label>
                  </Col>
                </Row>
              </Col>
              <Col><Dropdown className={styles.drowDown} options={sizesList} onChange={handleAutoSizeChange}
                value={autoSize} /></Col>
            </Row>
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
            <YourCloths onClothChange={evt => handleClothImageNameChange(evt)} onClothLoad={val => handleClothImageNameChange(val)} ></YourCloths>
          </Col>
        </Row>
      </Container>
      <div className={styles.centeredError} id="validationError" />
      <input className={styles.center} type="button" value={t('addCart')} title="Add to cart" onClick={handleSubmit}></input>
    </div >
  );
}

export default Measure;
