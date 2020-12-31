import client from "services/client";

export const getProductsService = () => client.get("products");
