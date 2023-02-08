import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../contexts/cartContext"
import { CartIcon } from "../../components/icons"
import styles from "./header.module.scss"
import LanguageToggle from "../../components/languageToggle"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { itemCount } = useContext(CartContext)
  const { t } = useTranslation()
  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.homeLink} to="/">
          <h3>GHANA TAILOR</h3>
        </Link>
      </div>
      <Link className={styles.tabLink} to="/store">
        {t("store")}
      </Link>
      <Link className={styles.tabLink} to="/cart">
        {" "}
        <CartIcon /> {t("cart")} ({itemCount})
      </Link>
      <LanguageToggle></LanguageToggle>
    </header>
  )
}

export default Header
