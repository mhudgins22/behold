import React from "react";

const card = props => {
	let card = null;
	
	if (props.cardType === "item") {
		card = (
			<div>
				<h3>{props.itemName}</h3>
				<h5>{props.itemRarity}: {props.itemType}</h5>
				<h6>{props.itemProperties}</h6>
				<h6>{props.numberOfDamageDice}{props.damageDie}</h6>
				<p>{props.itemFlavorText}</p>
				<h4>Attributes:</h4>
				<p>{props.itemAttributes}</p>
			</div>
		)
	}
	return(
		<div>
			{card}
		</div>
	)
}

export default card;