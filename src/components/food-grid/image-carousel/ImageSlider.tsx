"use client";
import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.scss";
import Link from "next/link";
import { ImageAndUrl } from "../FoodGrid";
import { Buttons } from "./buttons/Buttons";
import Image from "next/image";

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
    const interval = setInterval(setNextImage, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageIndex]);

  return (
    <div className={styles.imageSliderContainer}>
      <div className={styles.imageContainer}>
        {images.map((image) => (
          <Image
            key={image.url}
            src={image.url}
            style={{ translate: `${-100 * imageIndex}%` }}
            alt={image.alt}
            className={styles.images}
            loading="lazy"
            width={500}
            height={500}
          />
        ))}
      </div>
      <span className={styles.imageText}>
        <Link href={`/${names[imageIndex]}`}>{name[imageIndex]}</Link>
      </span>
      <Buttons
        setPreviousImage={setPreviousImage}
        setNextImage={setNextImage}
      />
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
