
import HeroSection from "../featuredproducts/HeroSection/herosection";
import FeaturedProducts from "../featuredproducts/featuredproduct";
import TopCategories from "../Topcategories/topcategories";
import OurProducts from "../ourproduct/ourproduct";
import Chairgallery from "../chairgallery/chairgallery";


export default function Home () {
    return(
      <div>
      
          <HeroSection/>
          <FeaturedProducts/> 
          <TopCategories />
          <Chairgallery/>
          <OurProducts/>
         
      </div>
    )
  }