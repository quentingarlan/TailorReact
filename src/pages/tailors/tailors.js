// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../shared/layout';
import { TailorCarousel } from './tailorCarousel.js';

export default function Tailors() {
  return <Layout title="Tailors" description="tailors">
    <h3>Nos tailleurs</h3>
    Nos tailleurs
    <TailorCarousel/>
  </Layout>
}