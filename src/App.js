import React from "react";
import { Layout, Row, Col } from "antd";
import "./App.css";
import Products from "features/products/Products";
import ShoppingCart from "features/shopping-cart/ShoppingCart";

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout.Header>
        <div className="site-layout-header">
          <span>Shopping commerce</span>
        </div>
      </Layout.Header>
      <Layout.Content className="site-layout-content">
        <Row>
          <Col span={1} offset={23}>
            <ShoppingCart />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Products />
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Footer>{new Date().getFullYear()} Fabio Oliveira</Layout.Footer>
    </Layout>
  );
}

export default App;
