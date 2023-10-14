import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
// import recipePic from '../../assets/images/prescriptions/Recipe.svg'
// import recipePicjpg from '../../assets/images/prescriptions/7944895.jpg'
import PrescriptionSingleCard from './PrescriptionSingleCard';
export default function PrescriptionCard({ prescription, setPrescription }) {
    
    // eslint-disable-next-line no-unused-vars
    let descending = prescription?.sort((a, b) => b.id - a.id)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // adaptiveHeight: true,
        lazyLoad: true,
        responsive: [
            // {
            //     breakpoint: 1024,
            //     settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //     }
            // },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 924,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
        ]
    };
    return (
        <>

            <Slider {...settings} >
                {prescription?.map((slide, index) => (
                    <PrescriptionSingleCard slide={slide} index={index} setPrescription={setPrescription} prescription={prescription} />
                ))}
            </Slider>
        </>
    )
}
