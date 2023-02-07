import React, { useContext } from "react"
import {
  PlusCircleIcon,
  MinusCircleIcon,
  TrashIcon,
} from "../../components/icons"
import { CartContext } from "../../contexts/cartContext"
import { formatNumber } from "../../helpers/utils"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styles from "./cartItem.module.scss"
import { useTranslation } from "react-i18next"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const imgPath = "/pants/"

const CartItem = ({ product }) => {
  const { t } = useTranslation()
  const { increase, decrease, removeProduct } = useContext(CartContext)
  let pantIimgUrl, pantSex
  if (product.sex === "F") {
    pantSex = t("female")
    pantIimgUrl = imgPath + "female/" + product?.clothImageName
  } else {
    pantSex = t("male")
    pantIimgUrl = imgPath + "male/" + product?.clothImageName
  }

  console.log("img", pantIimgUrl)
  return (
    <Container>
      <Row className={styles.rowProduct}>
        <Col>
          <Zoom>
            <img
              className={styles.imageProduct}
              alt={product?.name}
              key={product?.name}
              src={pantIimgUrl}
            />
          </Zoom>
        </Col>
        <Col className={styles.colCentered}>
          <h4>
            {product?.name} {pantSex} {product?.id + 1}{" "}
          </h4>
          <h5>
            {t("price")}: {formatNumber(product?.price)}{" "}
          </h5>
          <div>
            {t("waistSize")}: {product?.waistSize}{" "}
          </div>
          <div>
            {t("hipSize")}: {product?.hipSize}{" "}
          </div>
          <div>
            {t("crotchSize")}: {product?.crotchSize}{" "}
          </div>
          <div>
            {t("thighSize")}: {product?.thighSize}{" "}
          </div>
          <div>
            {t("length")}: {product?.length}{" "}
          </div>
        </Col>
        <Col className={styles.colCentered}>
          <p className="mb-0">
            {t("quantity")}: {product?.quantity}
          </p>
        </Col>
        <Col className={styles.colCentered}>
          <div>
            <button
              onClick={() => increase(product)}
              className="btn btn-primary btn-sm"
            >
              <PlusCircleIcon width={"20px"} />
            </button>
            {product?.quantity > 1 && (
              <button
                onClick={() => decrease(product)}
                className="btn btn-danger btn-sm"
              >
                <MinusCircleIcon width={"20px"} />
              </button>
            )}
            {product?.quantity === 1 && (
              <button
                onClick={() => removeProduct(product)}
                className="btn btn-danger btn-sm"
              >
                <TrashIcon width={"20px"} />
              </button>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default CartItem
