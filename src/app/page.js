"use client";

import React from 'react';
import ProductsGrid from '@/app/components/ProductsGrid/ProductsGrid';
import HomeHero from '@/app/components/HomeHero/HomeHero';
import { useAppContext } from '@/app/contexts/AppContext';
import Marker from '@/app/components/Marker/Marker';

export default function Home() {

const { cart, cartLength } = useAppContext();
console.log(cart)

  return (
    <div>
      <HomeHero />
      { <ProductsGrid /> }
      {<Marker />}
    </div>
  );
}
