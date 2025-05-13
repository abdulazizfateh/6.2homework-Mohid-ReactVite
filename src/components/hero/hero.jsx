import HeroImage from "../../assets/images/hero-right-bg.png";
import SearchIcon from "../../assets/images/hero-search.svg";

const Hero = () => {
    return (
        <section className="section_hero bg-[linear-gradient(160deg,rgba(56,54,56),rgba(11,11,11)_40%)]">
            <div className="container">
                <div className="hero_wrapper w-full min-h-dvh grid grid-cols-1 sm:grid-cols-2 gap-[20px] sm:gap-[45px] md:gap-[100px] lg:gap-[184px] pt-[90px] pb-[20px]">
                    <div className="flex flex-col justify-center w-[90%] mx-auto min-[515px]:w-[80%] sm:w-full">
                        <h1 className="title_hero !leading-[125%] text-center sm:text-start mb-[14px]">Discover Most Suitable Watches</h1>
                        <p className="text !leading-[125%] text-center sm:text-start mb-[24px]">Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                        <form className="relative w-full flex items-center h-[50px] md:h-[60px] rounded-[15px] bg-white">
                            <img className="absolute top-[50%] left-[14px] -translate-y-[50%]" src={SearchIcon} alt="Search Icon" />
                            <input className="text w-[65%] md:w-[70%] lg:w-[75%] h-full pl-[46px] md:pl-[56px] outline-none border-none placeholder:text-[#8B8E99B2] !text-primary-text" type="text" placeholder="Find the best brands" />
                            <button className="btn absolute top-[50%] right-[9px] -translate-y-[50%] px-[12px]">Search</button>
                        </form>
                    </div>
                    <div className="flex items-center justify-center">
                        <img className="max-w-[210px] min-[400px]:max-w-[250px] min-[515px]:max-w-[270px] lg:max-w-full" src={HeroImage} alt="Watch" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;