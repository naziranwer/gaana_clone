import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  smartphone: {
    breakpoint: { max: 824, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SlidingCaraousel = () => {
  return (
    <>
      <div>
        <ul id="banner_carousel" class="inner animate">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px custom-carousel-item"
          >
            <li class="slide animate">
              <a
                class="_a default_bg"
                aria-label="banner images"
                href="/playlist/gaana-dj-bollywood-drive"
              >
                <picture>
                  <source
                    srcset="https://a10.gaanacdn.com/gn_img/showcase/Bp1bAnK029/p1bADvJW02/size_l_1663939645.webp"
                    media="(min-width: 1420px)"
                  />
                  <source
                    srcset="https://a10.gaanacdn.com/gn_img/showcase/Bp1bAnK029/p1bADvJW02/size_m_1663939645.webp"
                    media="(min-width: 992px)"
                  />
                  <source srcset="https://a10.gaanacdn.com/gn_img/showcase/Bp1bAnK029/p1bADvJW02/size_s_1663939645.webp" />
                  <img
                    srcset="https://a10.gaanacdn.com/images/showcase/1663939645_12419.jpg"
                    alt="Ultimate Drive"
                    title="Ultimate Drive"
                  />
                </picture>
              </a>
            </li>
            <li class="slide animate">
              <a
                class="_a default_bg"
                aria-label="banner images"
                href="/playlist/gaana-dj-punjabi-love-anthems"
              >
                <picture>
                  <source
                    srcset="https://a10.gaanacdn.com/gn_img/showcase/81l3Mye3rM/1l3MyXD3rM/size_l_1654091953.webp"
                    media="(min-width: 1420px)"
                  />
                  <source
                    srcset="https://a10.gaanacdn.com/gn_img/showcase/81l3Mye3rM/1l3MyXD3rM/size_m_1654091953.webp"
                    media="(min-width: 992px)"
                  />
                  <source srcset="https://a10.gaanacdn.com/gn_img/showcase/81l3Mye3rM/1l3MyXD3rM/size_s_1654091953.webp" />
                  <img
                    srcset="https://a10.gaanacdn.com/images/showcase/1654091953_2573.jpeg"
                    alt="Love Anthems Punjabi"
                    title="Love Anthems Punjabi"
                  />
                </picture>
              </a>
            </li>
            <li class="slide animate">
              <a
                class="_a default_bg"
                aria-label="banner images"
                href="/playlist/gaana-dj-indiefest-2023"
              >
                <picture>
                  <source
                    srcset="https://a10.gaanacdn.com/gn_img/showcase/jBr3gybR1m/Br3gNjYKR1/size_l_1693202247.webp"
                    media="(min-width: 1420px)"
                  />
                  <source
                    srcset="https://a10.gaanacdn.com/gn_img/showcase/jBr3gybR1m/Br3gNjYKR1/size_m_1693202247.webp"
                    media="(min-width: 992px)"
                  />
                  <source srcset="https://a10.gaanacdn.com/gn_img/showcase/jBr3gybR1m/Br3gNjYKR1/size_s_1693202247.webp" />
                  <img
                    srcset="https://a10.gaanacdn.com/images/showcase/1693202247_13935.jpg"
                    alt="IndieFest 2023"
                    title="IndieFest 2023"
                  />
                </picture>
              </a>
            </li>
            <li class="slide animate">
              <a
                class="_a default_bg"
                aria-label="banner images"
                href="/playlist/gaana-dj-workout-on-punjabi-beat"
              >
                <picture>
                  <source
                    srcset="https://a10.gaanacdn.com/gn_img/showcase/ZaP374RWDy/ZaP372BKDy/size_l_1641541612.webp"
                    media="(min-width: 1420px)"
                  />
                  <source
                    srcset="https://a10.gaanacdn.com/gn_img/showcase/ZaP374RWDy/ZaP372BKDy/size_m_1641541612.webp"
                    media="(min-width: 992px)"
                  />
                  <source srcset="https://a10.gaanacdn.com/gn_img/showcase/ZaP374RWDy/ZaP372BKDy/size_s_1641541612.webp" />
                  <img
                    srcset="https://a10.gaanacdn.com/images/showcase/1641541612_199.jpg"
                    alt="Workout Punjabi Beat"
                    title="Workout Punjabi Beat"
                  />
                </picture>
              </a>
            </li>
            <li class="slide animate">
              <a
                class="_a default_bg"
                aria-label="banner images"
                href="/playlist/gaana-dj-smashin-100"
              >
                <div class="LazyLoad"></div>
              </a>
            </li>
            <li class="slide animate">
              <a
                class="_a default_bg"
                aria-label="banner images"
                href="/playlist/gaana-dj-slow-romantic-hindi"
              >
                <div class="LazyLoad"></div>
              </a>
            </li>
            <li class="slide animate">
              <a
                class="_a default_bg"
                aria-label="banner images"
                href="/playlist/gaana-dj-this-singh-is-so-stylish-diljit-dosanjh"
              >
                <div class="LazyLoad"></div>
              </a>
            </li>
            <li class="slide animate">
              <a
                class="_a default_bg"
                aria-label="banner images"
                href="/playlist/gaana-dj-chilled-out-days"
              >
                <div class="LazyLoad"></div>
              </a>
            </li>
          </Carousel>
        </ul>
      </div>
    </>
  );
};

export default SlidingCaraousel;
