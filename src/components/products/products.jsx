import { PRODUCTS } from "../../static/index.js";
import StarIcon from "../../assets/images/say-star.svg";

const Products = () => {
    return (
        <section className='section_products'>
            <div className='container'>
                <div className='products_wrapper py-[35px] md:py-[45px] lg:py-[62px]'>
                    <p className='subtitle text-center mb-[5px]'>Find your favourite smart watch.</p>
                    <h2 className='title text-center mb-[30px] md:mb-[40px] lg:mb-[65px]'>Our Latest Products</h2>
                    <div className='products_cards grid grid-cols-2 sm:grid-cols-3 gap-[10px] sm:gap-x-[24px] sm:gap-y-[30px] lg:gap-x-[50px] lg:gap-y-[64px] mb-[35px] sm:mb-[45px] md:mb-[55px] lg:mb-[69px]'>
                        {
                            PRODUCTS?.map((product) => (
                                <div className="products_card flex flex-col gap-[11px]">
                                    <div className="products_image min-h-[160px] md:min-h-[337px] bg-primary-bg flex items-center justify-center">
                                        <img className="w-[120px] md:w-[200px] lg:w-auto object-cover" src={product.image} alt={product.modelName} />
                                    </div>
                                    <div className="products_body flex flex-col items-center">
                                        <h4 className="font-Poppins600 text-[16px] text-primary-text sm:text-[18px] md:text-[20px] lg:text-[24px] mb-[4px] md:mb-[8px] line-clamp-1">{product.modelName}</h4>
                                        <div className="flex items-center gap-[6.9px] mb-[4px] md:mb-[8px]">
                                            <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star Icon" />
                                            <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star Icon" />
                                            <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star Icon" />
                                            <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star Icon" />
                                            <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star Icon" />
                                        </div>
                                        <div className="flex items-end gap-[2px]">
                                            <del className="font-Poppins600 text-[14px] text-secondary-text sm:text-[16px] md:text-[18px] lg:text-[20px]">${product.originalPrice}</del>
                                            <span className="font-Poppins600 text-[16px] text-primary-text sm:text-[18px] md:text-[20px] lg:text-[24px]">${product.discountedPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="products_view_more_btn_wrapper flex items-center justify-center">
                        <button className="btn px-[20px] sm:px-[26px] md:px-[34px] lg:px-[42px] !rounded-[15px]">View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Products;