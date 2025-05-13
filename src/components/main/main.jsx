import Hero from "../hero/hero";
import Category from "../category/cateogry";
import Products from "../products/products";
import Say from "../say/say";
import Subscribe from "../subscribe/subscribe";

const Main = () => {
    return (
        <main className="site_main">
            <Hero />
            <Category />
            <Products />
            <Say />
            <Subscribe />
        </main>
    )
}
export default Main;