import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { images } from "../../constants";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: "contact",
			name: name,
			email: email,
			message: message,
		};

		client.create(contact).then(() => {
			setLoading(false);
			setIsFormSubmitted(true);
		});
	};

	return (
		<>
			<h2 className="head-text">Sit back, relax & chat with me</h2>
			<div className="app__footer-cards">
				<div className="app__footer-card">
					<img src={images.email} alt="" />
					<a href="mailto:hello@aman.com" className="p-text">
						hello@aman.com
					</a>
				</div>
				<div className="app__footer-card">
					<img src={images.mobile} alt="" />
					<a href="tel:+255xxxxxxxx" className="p-text">
						+255xxxxxxxx
					</a>
				</div>
			</div>

			{!isFormSubmitted ? (
				<div className="app__footer-form app__flex">
					<div className="app__flex">
						<input
							type="text"
							className="p-text"
							placeholder="Your Name"
							name="name"
							value={name}
							onChange={handleChangeInput}
						/>
					</div>
					<div className="app__flex">
						<input
							type="email"
							className="p-text"
							placeholder="Your Email"
							name="email"
							value={email}
							onChange={handleChangeInput}
						/>
					</div>
					<div>
						<textarea
							className="p-text"
							name="message"
							value={message}
							placeholder="Your Message"
							onChange={handleChangeInput}
						></textarea>
					</div>
					<button type="button" className="p-text" onClick={handleSubmit}>
						{loading ? "Sending" : "Send Message"}
					</button>
				</div>
			) : (
				<div>
					<h3 className="head-text">Thank you for getting in touch!</h3>
				</div>
			)}
		</>
	);
};

export default AppWrap(
	MotionWrap(Footer, "app__footer"),
	"contact",
	"app__whitebg"
);
