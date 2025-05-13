import WatchImage from "../../assets/images/subscribe.png";

const Subscribe = () => {
    return (
        <section className='section_subscribe'>
            <div className='container'>
                <div className='subscribe_wrapper mb-[50px] md:mb-[70px] lg:mb-[90px] bg-primary-bg flex flex-col gap-[30px] md:flex-row md:justify-between md:gap-[60px] sm:w-[80%] sm:mx-auto lg:gap-[150px] md:w-full rounded-[22px] py-[40px] px-[20px] md:px-[80px] md:py-[30px] lg:px-[105px] lg:py-[40px]'>
                    <div className='subscribe_content flex flex-col justify-center'>
                        <h3 className="title text-center mb-[10px] md:text-start lg:mb-[12px]">Subscribe To Newsletter</h3>
                        <p className="desc text-center md:text-start mb-[12px] lg:mb-[16px]">Get free guide about smart watches daily.</p>
                        <form className="relative bg-white rounded-[15px] h-[50px] md:h-[55px] lg:h-[60px] w-full min-[390px]:w-[80%] mx-auto min-[520px]:w-[443px] md:w-full">
                            <input className="text w-[60%] min-[450px]:w-[65%] sm:w-[75%] md:w-[59%] lg:w-[62%] outline-none placeholder:!text-[#8B8E99B2] !text-primary-text h-full pl-[20px] lg:pl-[30px]" type="text" placeholder='Enter Email Address' />
                            <button className='btn absolute top-[50%] right-[9px] px-[10px] md:px-[16px] lg:px-[20px] -translate-y-[50%]'>Subscribe</button>
                        </form>
                    </div>
                    <div className='subscribe_image flex items-center justify-center'>
                        <img className="w-[70%] min-[400px]:w-auto" src={WatchImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Subscribe;