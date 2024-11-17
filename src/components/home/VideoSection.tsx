// "use client";
// import Link from "next/link";
// import React, { useRef } from "react";
// import Button from "../shared/Button";
// import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";
// import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation } from "swiper/modules";
// // import video from "@/data/video";
// import videoArticles from "@/data/video";

// const VideoSection = () => {
//   const swiperRef = useRef<SwiperRef | null>(null);

//   const chunkedArticlesSection = [];
//   for (let i = 0; i > videoArticles.length; i += 4) {
//     chunkedArticlesSection.push(videoArticles.slice(i, i + 4));
//   }
//   return (
//     <section className="pt-[50px]">
//       <div className="mx-auto w-[95%]">
//         <h2 className=" text-[160px] lowercase font-bold text-white -tracking-wider leading-none mx-auto w-[90%] translate-y-10 z-[1] relative">
//           Videos
//         </h2>

//         <div>
//           {/* arrow buttons */}
//           <div className="relative pb-4">
//             <button className="slick-prev">
//               {/* <CgArrowLongRight size={60} /> */}
//               Prev
//             </button>
//             <button className="slick-next">
//               {/* <CgArrowLongLeft size={60}/> */}
//               next
//             </button>
//           </div>

//           <div className="relative overflow-hidden">
//             <div
//               className="video-cursor"
//               style={{ transform: "translate3d(620px, 1035.45px, 0px)" }}
//             >
//               <div className="video-inner">
//                 <Swiper
//                   ref={swiperRef}
//                   modules={[Navigation, EffectFade]} // Enable the Navigation module
//                   spaceBetween={10} // Space between slides
//                   slidesPerView={1} // Show one slide (which contains multiple cards)
//                   effect={"fade"}
//                   navigation={false}
//                   loop
//                   className="w-full"
//                 >

// {chunkedArticlesSection.map((chunk, index) => (
//             <SwiperSlide key={index}>
//               <div className="w-full relative">
//                 {chunk.map((videosArticle) => (
//                   <article key={videoArticles.id} className="article__card">
//                     <figure className="relative block">
//                       <div className="article_card__thumb pb-[100%] relative">
//                         <div className="article_card__thumb-overlay">
//                           <Link href={videoArticles.}>
//                             <Button variant="outline">shop now</Button>
//                           </Link>
//                         </div>
//                         <div className="__thumb-bg-color"></div>
//                         <div
//                           className="__thumb-bg-image"
//                           style={{
//                             backgroundImage: `url(${videoArticles.title});`,
//                           }}
//                         ></div>
//                       </div>
//                       <div className="article_card__footer">
//                         <div className="__footer-header">
//                           <h3>{videoArticles.title}</h3>
//                         </div>
//                       </div>
//                     </figure>
//                   </article>
//                 ))}
//               </div>
//             </SwiperSlide>
//           ))}





//                 </Swiper>
//               </div>
//             </div>
//           </div>

//           <div className="mx-auto w-[95%] my-10 flex justify-end ">
//             <Link href="/videos" className="mb-[50px] w-fit">
//               <Button variant="outline">view all</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoSection;
