import React from "react";
import concealer from "../../../assets/images/base/concealer.jpg";
import liquidBronzer from "../../../assets/images/base/liquidBronzer.JPG";
import liquidHighlight from "../../../assets/images/base/liquidHighlight.jpg";
import macBlush from "../../../assets/images/base/macBlush.JPG";
import MaybellinePerfector from "../../../assets/images/base/MaybellinePerfector.JPG";
import PoresNoMore from "../../../assets/images/base/PoresNoMore.JPG";
import settingSpray from "../../../assets/images/base/settingSpray.JPG";

const Cosmetics = () => {
  return (
    <>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>Dr. Brandt Pores No More pore refiner primer </h3>
            <p>1oz for $45USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.sephora.com/product/pores-no-more-pore-refiner-primer-P139005?skuId=1161629&icid2=products%20grid:p139005:product">
                Sephora
              </a>
              <br />
              <a href="https://www.ulta.com/p/pores-no-more-pore-refiner-primer-xlsImpprod4200231">
                Ulta
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={PoresNoMore}
              className="product-images"
            />
          </figure>
        </div>
      </div>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>
              Maybelline Instant Age Rewind Instant Perfector 4-in-1 Glow Makeup
              in Light
            </h3>
            <p>.68oz for $12.99USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.maybelline.com/face-makeup/foundation-makeup/instant-age-rewind-instant-perfector-4-in-1-glow-makeup/light">
                Maybelline
              </a>
              <br />
              <a href="https://www.ulta.com/p/instant-age-rewind-instant-perfector-4-in-1-glow-makeup-pimprod2025160">
                Ulta
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={MaybellinePerfector}
              className="product-images"
            />
          </figure>
        </div>
      </div>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>Rare Beauty Liquid Touch Brightening Concealer</h3>
            <p>.25oz for $19USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.sephora.com/product/rare-beauty-by-selena-gomez-liquid-touch-brightening-concealer-P64546856?skuId=2362028&icid2=products%20grid:p64546856:product">
                Sephora
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={concealer}
              className="product-images"
            />
          </figure>
        </div>
      </div>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>Iconic London Sheer Bronze Liquid Bronzer in Caramel Glow</h3>
            <p>.42oz for $27USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.sephora.com/product/iconic-london-sheer-bronze-liquid-bronzer-P471035?skuId=2438257&icid2=products%20grid:p471035:product">
                Sephora
              </a>
              <br />
              <a href="https://www.ulta.com/p/sheer-bronze-pimprod2024799">
                Ulta
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={liquidBronzer}
              className="product-images"
            />
          </figure>
        </div>
      </div>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>MAC Cosmetics Sheertone Blush in Gingerly</h3>
            <p>.21oz for $25USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.maccosmetics.com/product/13842/93071/products/makeup/face/blush-bronzer/sheertone-blush?shade=Gingerly">
                MAC
              </a>
              <br />
              <a href="https://www.ulta.com/p/powder-blush-xlsImpprod15921200">
                Ulta
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={macBlush}
              className="product-images"
            />
          </figure>
        </div>
      </div>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>Iconic London Illuminator Liquid Highlight in Original</h3>
            <p>.45oz for $40USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.sephora.com/product/illuminator-P461217?skuId=2380434&icid2=products%20grid:p461217:product">
                Sephora
              </a>
              <br />
              <a href="https://www.ulta.com/p/illuminator-xlsImpprod19021009">
                Ulta
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={liquidHighlight}
              className="product-images"
            />
          </figure>
        </div>
      </div>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>Iconic London Prep Set Glow Hydrating Spray in Original</h3>
            <p>4oz for $29USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.sephora.com/product/the-ordinary-deciem-100-organic-cold-pressed-rose-hip-seed-oil-P427415?skuId=2031417&icid2=products%20grid:p427415:product">
                Sephora
              </a>
              <br />
              <a href="https://www.ulta.com/p/prep-set-glow-xlsImpprod19021007">
                Ulta
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={settingSpray}
              className="product-images"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Cosmetics;
