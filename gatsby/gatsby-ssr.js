import React from 'react';
import Layout from './src/components/Layout';
import { OrderPrivider } from './src/components/OrderContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <OrderPrivider>{element}</OrderPrivider>;
}
