import Container from "@/components/common/Container";
import HomeBanner from "@/components/sections/Home/HomeBanner";
import HomeCategories from "@/components/sections/Home/HomeCategories";
import LatestBlogs from "@/components/sections/Home/LatestBlogs";
import ProductGrid from "@/components/sections/Home/ProductGrid";
import ShopByBrands from "@/components/sections/Home/ShopByBrands";

const Home = () => {
  return (
    <Container>
      <HomeBanner />
      <ProductGrid />
      <HomeCategories />
      <ShopByBrands />
      <LatestBlogs />
    </Container>
  );
};

export default Home;
