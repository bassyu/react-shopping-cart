import React from "react";
import styled from "styled-components";
import { ProductType } from "../types";
import Product from "./Product";

interface ProductListProps {
  products: ProductType[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <$Wrapper>
      {products.map((product) => (
        <Product key={product.id} {...product}></Product>
      ))}
    </$Wrapper>
  );
}

const $Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 282px);
  grid-column-gap: 48px;
  grid-row-gap: 64px;
`;