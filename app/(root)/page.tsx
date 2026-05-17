import { LoadingContainer, LoadingProduct } from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero/>
      <Suspense fallback={<LoadingContainer/>}>
        <FeaturedProducts/>          
      </Suspense>
 
    </>

  
  );
}
