import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import Thumb from './Button';
import { GenericLoader } from '../skeleton';
const Thumb = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./Button')), 2000);
  });
});

const UsersCarousel = (props) => {
  const { slides, options } = props
  const [images, setImages] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })


  const fetchImages = async () => {
    const response = await fetch("https://finalspaceapi.com/api/v0/character/");
    if (!response.ok) {
      throw new Error("Error while fetching users");
    }
    const data = await response.json();
    const limitedUsers = data.slice(0, 10);
    const imagesOnly = limitedUsers.map((image) => image.img_url)
    return setImages(imagesOnly);
  };

  useEffect(() => {
    fetchImages();
  }, []);


  const onThumbClick = useCallback(
    (index) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <>
      <h3>Final Space API</h3>
      <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__number">
                  <span>{index + 1}</span>
                </div>
                <img
                  className="embla__slide__img"
                  src={images[index]}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              <div className="embla-thumbs__container">
                {slides.map((index) => (

                  <Suspense fallback={<GenericLoader />} key={index}>
                    <Thumb
                      // key={index}
                      onClick={() => onThumbClick(index)}
                      selected={index === selectedIndex}
                      index={index}
                      imgSrc={images[index]}
                    />
                  </Suspense>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UsersCarousel
