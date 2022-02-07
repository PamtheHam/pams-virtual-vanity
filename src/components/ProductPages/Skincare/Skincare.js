import React from "react";
import GlowScreen from "../../../assets/images/skincare/GlowScreen.JPG";
import LipSleepingMask from "../../../assets/images/skincare/LipSleepingMask.JPG";
import RoseHipSeedOil from "../../../assets/images/skincare/RosehipSeedOil.JPG";
import TheOrdinary from "../../../assets/images/skincare/TheOrdinaryProduct.jpg";

const skincare = () => {
  return (
    <>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>Supergoop! Glowscreen Sunscreen SPF 40</h3>
            <p>1.7oz for $36USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.sephora.com/product/supergoop-glowscreen-sunscreen-spf-40-P456218?skuId=2315158&icid2=products%20grid:p456218:product">
                Sephora
              </a>
              <br />
              <a href="https://supergoop.com/products/glowscreen-spf-40">
                Supergoop!
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={GlowScreen}
              className="product-images"
            />
          </figure>
        </div>
      </div>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>
              Laneige Lip Sleeping Mask in Sweet Tea (Limited Edition Flavor)
            </h3>
            <p>.7oz for $22USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.sephora.com/product/lip-sleeping-mask-P420652?skuId=2133528&icid2=products%20grid:p420652:product">
                Sephora
              </a>
              <br />
              <a href="https://us.laneige.com/products/lip-sleeping-mask">
                Laneige
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={LipSleepingMask}
              className="product-images"
            />
          </figure>
        </div>
      </div>
      <div className="intro-container">
        <div className="my-story">
          <div className="text-center about-right">
            <h3>The Ordinary 100% Organic Cold-Pressed Rosehip Seed Oil</h3>
            <p>1oz for $9.80USD</p>
            <p>
              Buy it here: <br />
              <a href="https://www.sephora.com/product/the-ordinary-deciem-100-organic-cold-pressed-rose-hip-seed-oil-P427415?skuId=2031417&icid2=products%20grid:p427415:product">
                Sephora
              </a>
              <br />
              <a href="https://www.ulta.com/p/100-organic-cold-pressed-rose-hip-seed-oil-pimprod2007100">
                Ulta
              </a>
            </p>
          </div>
          <figure>
            <img
              alt="Pamela Hammond"
              src={RoseHipSeedOil}
              className="product-images"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

export default skincare;
