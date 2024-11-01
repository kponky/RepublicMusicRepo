import Link from "next/link";
import React from "react";
import Button from "../shared/Button";

const ShopSection = () => {
  return (
    <section className="pt-[50px]">
      <div className="mx-auto w-[95%]">
        <h2 className=" text-[160px] lowercase font-bold text-white -tracking-wider leading-none mx-auto w-[90%] translate-y-10 z-[2] relative">
          Shop
        </h2>

        <div>
          {/* arrow buttons */}
          <div className="relative">
            <button className="absolute w-20 h-[22px] text-primary top[-50px] right-[calc(5%+130px)] cursor-pointer">
              prev
            </button>
            <button className="absolute w-20 h-[22px] text-primary top[-50px] right-[5%] cursor-pointer">
              next
            </button>
          </div>

          <div className="relative overflow-hidden">
            <div className="w-full relative h-full">
              <article className="article__card">
                <figure className="relative block">
                  <div className="article_card__thumb pb-[100%] relative">
                    <div className="article_card__thumb-overlay">
                      <Link href="#">
                        <Button variant="outline">shop now</Button>
                      </Link>
                    </div>
                    <div className="__thumb-bg-color"></div>
                    <div className="__thumb-bg-image"></div>
                  </div>
                  <div className="article_card__footer">
                    <div className="__footer-header">
                      <h3>Wicked: The Soundtrack (Picture Disc Vinyl)</h3>
                      <h4>$51.00</h4>
                    </div>
                  </div>
                </figure>
              </article>
              <article className="article__card">
                <figure className="relative block">
                  <div className="article_card__thumb pb-[100%] relative">
                    <div className="article_card__thumb-overlay">
                      <Link href="#">
                        <Button variant="outline">shop now</Button>
                      </Link>
                    </div>
                    <div className="__thumb-bg-color"></div>
                    <div className="__thumb-bg-image"></div>
                  </div>
                  <div className="article_card__footer">
                    <div className="__footer-header">
                      <h3>Wicked: The Soundtrack (Picture Disc Vinyl)</h3>
                      <h4>$51.00</h4>
                    </div>
                  </div>
                </figure>
              </article>
              <article className="article__card">
                <figure className="relative block">
                  <div className="article_card__thumb pb-[100%] relative">
                    <div className="article_card__thumb-overlay">
                      <Link href="#">
                        <Button variant="outline">shop now</Button>
                      </Link>
                    </div>
                    <div className="__thumb-bg-color"></div>
                    <div className="__thumb-bg-image"></div>
                  </div>
                  <div className="article_card__footer">
                    <div className="__footer-header">
                      <h3>Wicked: The Soundtrack (Picture Disc Vinyl)</h3>
                      <h4>$51.00</h4>
                    </div>
                  </div>
                </figure>
              </article>
              <article className="article__card">
                <figure className="relative block">
                  <div className="article_card__thumb pb-[100%] relative">
                    <div className="article_card__thumb-overlay">
                      <Link href="#">
                        <Button variant="outline">shop now</Button>
                      </Link>
                    </div>
                    <div className="__thumb-bg-color"></div>
                    <div
                      className="__thumb-bg-image"
                      // style={{
                      //   backgroundImage:
                      //     "url(https://www.republicrecords.com/files/2024/10/wicked-picturediscvinyl.png)",
                      // }}
                    ></div>
                  </div>
                  <div className="article_card__footer">
                    <div className="__footer-header">
                      <h3>Wicked: The Soundtrack (Picture Disc Vinyl)</h3>
                      <h4>$51.00</h4>
                    </div>
                  </div>
                </figure>
              </article>
              <article className="article__card">
                <figure className="relative block">
                  <div className="article_card__thumb pb-[100%] relative">
                    <div className="article_card__thumb-overlay">
                      <Link href="#">
                        <Button variant="outline">shop now</Button>
                      </Link>
                    </div>
                    <div className="__thumb-bg-color"></div>
                    <div className="__thumb-bg-image"></div>
                  </div>
                  <div className="article_card__footer">
                    <div className="__footer-header">
                      <h3>Wicked: The Soundtrack (Picture Disc Vinyl)</h3>
                      <h4>$51.00</h4>
                    </div>
                  </div>
                </figure>
              </article>
            </div>
          </div>

          <div className="mx-auto w-[95%] my-10 flex justify-end ">
            <Link href="/artists" className="mb-[50px] w-fit">
              <Button variant="outline">shop all</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;

{
  /* <HiOutlineArrowNarrowRight /> */
}
