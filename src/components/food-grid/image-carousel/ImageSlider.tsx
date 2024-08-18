"use client";
import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.scss";
import { LeftArrow, RightArrow } from "./arrows/Arrows";
import Link from "next/link";
import { ImageAndUrl } from "../FoodGrid";

type ImageSliderProps = {
  images: ImageAndUrl[];
  names: string[];
};

export const ImageSlider = ({ images, names }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const name = names.map((e) => e.replace("-", " "));
  const setNextImage = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };
  const setPreviousImage = () => {
    setImageIndex((imageIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <div className={styles.imageSliderContainer}>
      <div className={styles.imageContainer}>
        {images.map((image) => (
          <img
            key={image.url}
            src={image.url}
            style={{ translate: `${-100 * imageIndex}%` }}
            alt={image.alt}
            className={styles.images}
            loading="lazy"
          />
        ))}
      </div>
      <span className={styles.imageText}>
        <Link href={`/${names[imageIndex]}`}>{name[imageIndex]}</Link>
      </span>
      <button
        aria-label="View Previous Image"
        className={styles.imageButton}
        style={{ left: 0 }}
        onClick={() => setPreviousImage()}
      >
        <LeftArrow />
      </button>
      <button
        aria-label="View Next Image"
        className={styles.imageButton}
        style={{ right: 0 }}
        onClick={() => setNextImage()}
      >
        <RightArrow />
      </button>
      <div className={styles.sliderButtonContainer}>
        {images.map((_, index) => (
          <button
            aria-label={`View Image ${index}`}
            key={index}
            className={`${
              index == imageIndex ? styles.activeBtn : styles.notActiveBtn
            }`}
            onClick={() => setImageIndex(index)}
          >
            <span>{index == imageIndex && "●"}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
