"use client";

import { useRef } from "react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
	interface SwiperRef {
		swiper: {
			slidePrev: () => void;
			slideNext: () => void;
		};
	}
	const swiperRef = useRef<SwiperRef | null>(null);
	const handlePrev = () => {
		if (swiperRef.current) {
			const ele = swiperRef.current;
			ele.swiper.slidePrev();
		}
	};

	const handleNext = () => {
		if (swiperRef.current) {
			const ele = swiperRef.current;
			ele.swiper.slideNext();
		}
	};

	const totalSlides = 5;
	const virtualData = [];
	for (let i = 0; i < totalSlides; i++) {
		virtualData.push(`Virtual Slide ${i}`);
	}

	return (
		<>
			<div className='flex flex-col  h-screen  bg-slate-50'>
				<div className='flex items-end  h-20 px-32 '>
					<div className='channelList flex-1'>
						<button className='btn btn-outline m-3'>推荐</button>
						<button className='btn btn-outline  m-3'>体育频道</button>
						<button className='btn btn-outline  m-3'>音乐频道</button>
					</div>
					<div className='login'>
						<button className='btn btn-outline  '>登录</button>
					</div>
				</div>
				<div className='flex-1 h-4/5  px-32 py-16 '>
					<div className='w-full h-full  bg-gray-300 relative rounded-3xl'>
						<div className='flex flex-col justify-between w-16 h-44 -right-20 top-1/2 -translate-y-2/4  absolute'>
							<button
								className='w-full h-2/5 rounded-full  bg-gray-300 btn btn-outline'
								onClick={handlePrev}
							>
								⬆
							</button>
							<button
								className='w-full h-2/5 rounded-full  bg-gray-300 btn btn-outline'
								onClick={handleNext}
							>
								⬇
							</button>
						</div>
						<div className='absolute w-full h-full '>
							<Swiper
								className={"w-full h-full"}
								ref={swiperRef}
								cache='true'
								direction='vertical'
								slidesPerView={1}
								modules={[Navigation, Pagination, Virtual]}
							>
								{virtualData.map((slide, index) => (
									<SwiperSlide key={index}>{slide}</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
