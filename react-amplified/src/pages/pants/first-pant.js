import Measure from '../../components/measure'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from '../shared/layout';
import React, { Component }  from 'react';

export default function FirstPant() {
  return <Layout title="Mesures" description="Store">
    <Measure></Measure>
  </Layout>
}