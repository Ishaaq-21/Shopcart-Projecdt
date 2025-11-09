"use client";
import React, { useEffect, useState } from "react";
import { Brand, Category, Product } from "../../../../sanity.types";
import Container from "@/components/common/Container";
import Title from "@/components/atoms/Title";
import ShopAside from "./ShopAside";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Loader from "@/components/ui/customUI/Loader";
import NoProductAvailable from "@/components/ui/customUI/NoProductsAvailable";
import ProductCard from "@/components/ui/customUI/ProductCard";

export type ShopProps = {
  categories: Category[];
  brands: Brand[];
  initialProducts: Product[];
};
const Shop = ({ categories, brands, initialProducts }: ShopProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const brandParams = searchParams.get("brand");
  const categoryParams = searchParams.get("category");

  // States
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParams || null
  );
  const [selectedBrand, setSelectedBrand] = useState(brandParams || null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setProducts([]);
      setError(null);
      setLoading(true);

      const params = new URLSearchParams();

      if (selectedCategory) params.set("category", selectedCategory);
      if (selectedBrand) params.set("brand", selectedBrand);
      if (selectedPrice) params.set("price", selectedPrice);

      router.replace(`${pathname}?${params.toString()}`);

      let minPrice = 0;
      let maxPrice = 1000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }
      const query = `
      *[_type == 'product'
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current ==$selectedCategory]._id))
        && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
        && price >= $minPrice && price <= $maxPrice
      ]
      | order(name asc) {
        ...,"categories": categories[]->title
      }
    `;
      const data = await client.fetch(
        query,
        { selectedCategory, selectedBrand, minPrice, maxPrice },
        { next: { revalidate: 0 } }
      );
      setProducts(data);
    } catch (error) {
      console.error("Error -> ", error);
      setError(
        "Something went wrong when trying to fetch products\nPlease try again !!"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [selectedBrand, selectedCategory, selectedPrice]);
  return (
    <Container>
      <div className="sticky flex justify-between items-center border-b border-shop-primary w-full pb-5">
        <Title className="font-bold uppercase !text-lg">
          Get the products based on your needs
        </Title>
        {(selectedCategory !== null ||
          selectedBrand !== null ||
          selectedPrice !== null) && (
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSelectedBrand(null);
              setSelectedPrice(null);
            }}
            className="text-lg text-shop-orange hover:text-orange-500 hover-effect underline"
          >
            Reset Filters
          </button>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-10 ">
        <ShopAside
          categories={categories}
          brands={brands}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
        {error && (
          <p className="text-red-500 text-lg font-semibold flex-center w-full h-full">
            {error}
          </p>
        )}
        {loading ? (
          <Loader />
        ) : !products.length ? (
          <NoProductAvailable selectedTab={""} />
        ) : (
          <div className="scrollbar-hide max-h-[100vh] overflow-y-scroll auto-rows-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5">
            {products.map((product: Product, index) => (
              <ProductCard key={product?._id} product={product} index={index} />
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Shop;
