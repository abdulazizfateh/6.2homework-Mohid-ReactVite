import { CATEGORY } from "../../static/index.js";

const Category = () => {
    return (
        <section className="section_category">
            <div className="container">
                <div className="category_wrapper grid grid-cols-1 gap-[20px] sm:grid-cols-3 sm:gap-[8px] md:gap-[20px] py-[40px] md:py-[50px] lg:py-[73px]">
                    {
                        CATEGORY?.map((category) => (
                            <div key={category.id} className="category_card min-[500px]:mx-auto min-[500px]:w-[70%] sm:w-full bg-primary-bg p-[20px] sm:p-[26px] rounded-[22px] flex flex-col gap-[16px] lg:gap-[27px] lg:flex-row lg:pt-[46px] lg:pb-[43px] lg:pl-[40px] lg:pr-[28px]">
                                <div className="category_card_image flex items-center justify-center w-full">
                                    <img className="lg:w-[85px]" src={category.image} alt="Watch" />
                                </div>
                                <div className="category_card_body flex flex-col justify-center gap-[9px]">
                                    <h3 className="title text-center lg:text-start">{category.title}</h3>
                                    <p className="desc text-center lg:text-start">{category.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Category;