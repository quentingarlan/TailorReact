// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../shared/layout';
import styles from './explanation.module.scss';
import { GhanaCarousel } from './carousel.js';

export default function Explanation() {
  return <Layout title="Explanation" description="Explanation">
    <div className={styles.center}>
      <h3>La démarche</h3>
      <div>Le but de Ghana Tailor est d'aider les tailleurs ghanéens ainsi que la filière textile ghanéenne.</div>
      <div>Le problème de cette industrie relevé par
        <a href="https://www.lemonde.fr/afrique/article/2019/10/08/au-ghana-l-industrie-du-textile-a-l-agonie-face-a-la-concurrence-chinoise_6014680_3212.html" target="_blank" rel="noopener noreferrer">
        le monde en 2019 </a> a été exacerbé par l'épidémie de 2020.</div>
    </div>
    <GhanaCarousel/>
  </Layout>
}