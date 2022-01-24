import React from "react";
import Navigation from "./Navigation";
import "../style/styles.scss";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react/cjs/react.development";
const Contact = () => {
	const [rempli, setRempli] = useState(false);
	return (
		<div className="contact-wrapper">
			<Header />
			<Navigation />
			<form className="contact-form">
				<label>Nom :</label>
				<input type="text" name="nom" />
				<label>Prénom :</label> <input type="text" name="prénom" />
				<label>Votre message : </label>
				<textarea placeholder="écrivez votre message ici"></textarea>
				<input type="submit" value="Envoyer" className="envoyer" />
			</form>
			<Footer />
		</div>
	);
};
//email js !
// https://www.youtube.com/watch?v=OCHsZuq7WRk
export default Contact;
