import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProducts,
  selectProductsLoading,
  fetchProducts,
  removeProducts,
} from "app/slices/productSlice";
import { Table, Button } from "antd";
import { addCartItems } from "app/slices/cartSlice";
import formatCurrency from "utils/formatCurrency";

const Products = () => {
  const loading = useSelector(selectProductsLoading);
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [selectedRows, setselectedRows] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: "10%",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
    },
    {
      title: "Number",
      dataIndex: "number",
      key: "number",
      width: "20%",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "20%",
      render: (value) => formatCurrency(value)
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setselectedRows(selectedRows);
    },
  };

  const addToCart = () => {
    dispatch(removeProducts(selectedRows));
    dispatch(addCartItems(selectedRows));
  };

  return (
    <>
      <Button disabled={selectedRows.length === 0} onClick={addToCart}>
        Add to cart
      </Button>
      <Table
        columns={columns}
        rowKey={(product) => product.id}
        dataSource={products}
        loading={loading}
        scroll={{ y: 240 }}
        rowSelection={{ type: "checkbox", ...rowSelection }}
      />
    </>
  );
};

export default Products;
