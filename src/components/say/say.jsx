import UserImage1 from "../../assets/images/say-1.png";
import UserImage2 from "../../assets/images/say-2.png";
import StarIcon from "../../assets/images/say-star.svg";

const Say = () => {
    return (
        <section className="section_say">
            <div className="container">
                <div className="say_wrapper pt-[40px] pb-[80px] md:pt-[50px] md:pb-[100px] lg:pt-[73px] lg:pb-[135px]">
                    <p className="subtitle text-center mb-[5px]">Here are our some of the best clients.</p>
                    <h2 className="title text-center mb-[25px] sm:mb-[35px] md:mb-[45px] lg:mb-[55px]">What People Say About Us</h2>
                    <div className="say_cards grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-2 gap-[8px] md:gap-[30px] lg:gap-[47px] mb-[22px] sm:mb-[30px] lg:mb-[43px]">
                        <div className="say_card bg-primary-bg rounded-[22px] flex flex-col items-center justify-center md:flex-row gap-[14px] md:gap-[20px] lg:gap-[28px] p-[20px] md:p-[24px] lg:px-[35px] lg:py-[30px]">
                            <div className="say_card_image md:w-full">
                                <img className="w-[100px] md:w-auto" src={UserImage1} alt="User" />
                            </div>
                            <div className="say_card_body">
                                <h5 className="mb-[4px] text-center md:text-start md:mb-[9px] font-Inter text-[16px] font-bold text-[#1E1D1D] sm:text-[18px] md:text-[20px] lg:text-[24px]">Hamza Faizi</h5>
                                <p className="desc text-center mb-[9px] min-[500px]:w-[80%] mx-auto md:w-full md:text-start">Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                <div className="flex items-center justify-center md:justify-start gap-[7px]">
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                </div>
                            </div>
                        </div>
                        <div className="say_card bg-primary-bg rounded-[22px] flex flex-col items-center justify-center md:flex-row gap-[14px] md:gap-[20px] lg:gap-[28px] p-[20px] md:p-[24px] lg:px-[35px] lg:py-[30px]">
                            <div className="say_card_image md:w-full">
                                <img className="w-[100px] md:w-auto" src={UserImage2} alt="User" />
                            </div>
                            <div className="say_card_body">
                                <h5 className="mb-[4px] text-center md:text-start md:mb-[9px] font-Inter text-[16px] font-bold text-[#1E1D1D] sm:text-[18px] md:text-[20px] lg:text-[24px]">Hamza Faizi</h5>
                                <p className="desc text-center mb-[9px] min-[500px]:w-[80%] mx-auto md:w-full md:text-start">Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                                <div className="flex items-center justify-center md:justify-start gap-[7px]">
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                    <img className="w-[13px] md:w-[15px]" src={StarIcon} alt="Star" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full hidden md:flex items-center justify-center gap-[11px]">
                        <div className="bg-[#D9D9D9] size-[14px] lg:size-[18px] rounded-full"></div>
                        <div className="bg-[#D9D9D9] size-[14px] lg:size-[18px] rounded-full"></div>
                        <div className="bg-[#D9D9D9] size-[14px] lg:size-[18px] rounded-full"></div>
                        <div className="bg-[#3858D6] size-[14px] lg:size-[18px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Say;