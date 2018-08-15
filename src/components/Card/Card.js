import React from "react";

const card = props => {
	let card = null;
	
	if (props.cardType === "item") {
		card = (
			<div>
				<div>
					<h3>{props.itemName}</h3>
					<div>
						<h5>{props.itemRarity} {props.itemType} {props.itemProperties ? "- " + props.itemProperties : null}</h5>
					</div>
				</div>
				<div>
					<h6>{props.numberOfDamageDice}{props.damageDie} {props.damageType}</h6>
					<p>{props.itemFlavorText}</p>
					<h4>Attributes:</h4>
					<p>{props.itemAttributes}</p>
				</div>
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