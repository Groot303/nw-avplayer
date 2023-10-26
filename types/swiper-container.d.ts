declare module "swiper/react" {
     interface SwiperContainerProps {
        className?: string;
        ref?:any;
        slidesPerView?: number;
        navigation?: object;
        children?: React.ReactNode,
        modules?:object;
        direction?:string;
        onSlideChange?:object
        onSwiper?:object;
        cache?
    }
    let Swiper: React.FC<SwiperContainerProps>;
    exports.Swiper = Swiper
}
declare module "swiper/react" {
    interface SwiperSlideProps {
        children?: string 
    }
    let SwiperSlide: React.FC<SwiperSlideProps>
    exports.SwiperSlide = SwiperSlide
}