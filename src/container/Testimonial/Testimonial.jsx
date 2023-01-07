import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../Wrapper";

import "./Testimonial.scss";

const Testimonial = () => {
	const [brands, setBrands] = useState([]);
	const [testimonials, setTestimonials] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index)=>{
    setCurrentIndex(index)
  }


	useEffect(() => {
		const query = '*[_type == "testimonials"]';
		const brandsQuery = '*[_type == "brands"]';

		client.fetch(query).then((data) => {
			setTestimonials(data);
		});
		client.fetch(brandsQuery).then((data) => {
			setBrands(data);
		});
	}, []);

	const qoute = testimonials[currentIndex];

	return (
		<>
			{testimonials.length && (
				<>
					<article className="app__testimonial-item app__flex">
          <img src={urlFor(qoute.imgurl)} alt="testimonial" />
						<div className="app__testimonial-content">
							<p className="p-text">{qoute.feedback}</p>
							<div>
								<h4 className="bold-text">{qoute.name}</h4>
								<h5 className="p-text">{qoute.company}</h5>
							</div>
						</div>
					</article>
					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								)
							}
						>
              <HiChevronLeft/>
            </div>
            <div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === testimonials.length - 1
										? 0
										: currentIndex + 1
								)
							}
						>
              <HiChevronRight/>
            </div>
					</div>
				</>
			)}
      <div className="app__testimonials-brands app__flex">
        {brands.map((brand)=>(
          <motion.div
            whileInView={{ opacity:[0,1] }}
            transition={{ duratio: 0.5, type: 'tween' }}
            key={brand.id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Testimonial, "app__testimonial"),
	"testimonial",
	"app__primarybg"
);