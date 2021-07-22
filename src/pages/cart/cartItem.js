import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../components/icons'
import { CartContext } from '../../contexts/cartContext';
import { formatNumber } from '../../helpers/utils';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './cartItem.module.scss';

const CartItem = ({ product }) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);

    return (
        <Container>
            <Row className={styles.rowProduct}>
                <Col>
                    <img
                        className={styles.imageProduct}
                        alt={product?.name}
                        key={product?.name}
                        src={product?.photo} />
                </Col>
                <Col className={styles.colCentered}>
                    <h5>{product?.name}</h5>
                    <p>Price: {formatNumber(product?.price)} </p>

                </Col>
                <Col className={styles.colCentered}>
                    <p className="mb-0">Qty: {product?.quantity}</p>
                </Col>
                <Col>
                    <button
                        onClick={() => increase(product)}
                        className="btn btn-primary btn-sm">
                        <PlusCircleIcon width={"20px"} />
                    </button>
                    {
                        product?.quantity > 1 &&
                        <button
                            onClick={() => decrease(product)}
                            className="btn btn-danger btn-sm">
                            <MinusCircleIcon width={"20px"} />
                        </button>
                    }
                    {
                        product?.quantity === 1 &&
                        <button
                            onClick={() => removeProduct(product)}
                            className="btn btn-danger btn-sm">
                            <TrashIcon width={"20px"} />
                        </button>
                    }
                </Col>
            </Row>
        </Container>
    );
}
export default CartItem;