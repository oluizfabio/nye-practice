import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, removeCartItems } from "app/slices/cartSlice";
import { Typography, Divider, List, Badge, Drawer } from "antd";
import { ShoppingCartOutlined, DeleteFilled } from "@ant-design/icons";
import { addProducts } from "app/slices/productSlice";
import formatCurrency from "utils/formatCurrency";
import "./ShoppingCart.css";
const { Title } = Typography;

export default function ShoppingCart() {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleDeleteClick = (item) => {
    dispatch(removeCartItems([item]));
    dispatch(addProducts([item]));
  };

  return (
    <>
      <Badge count={cartItems.length} onClick={() => setShow(true)}>
        <ShoppingCartOutlined style={{ fontSize: "36px" }} />
      </Badge>
      <Drawer visible={show} onClose={() => setShow(false)} width={500}>
        <>
          <Title level={3}>Order</Title>
          <Divider />
          <List
            dataSource={cartItems}
            className="cart-list"
            renderItem={(item) => (
              <List.Item
                actions={[
                  <DeleteFilled onClick={() => handleDeleteClick(item)} />,
                ]}
              >
                <List.Item.Meta title={item.name} />
                {formatCurrency(item.price)}
              </List.Item>
            )}
          />
          <Divider />
          <Title level={4}>Total</Title>
          {formatCurrency(
            cartItems.reduce((a, item) => a + Number(item.price), 0)
          )}
        </>
      </Drawer>
    </>
  );
}
