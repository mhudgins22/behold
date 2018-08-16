import React from "react";

import classes from "./Card.css";

const card = props => {
	let card = null;
	
	if (props.cardType === "item") {
		card = (
			<div className = {classes.Card}>
				<div className = {classes.Header}>
					<h3>{props.itemName}</h3>
					<div className = {classes.Subheader}>
						<p>{props.itemRarity} {props.itemType} {props.itemProperties ? "- " + props.itemProperties : null}</p>
					</div>
				</div>
				<div className = {classes.ItemImage}>
					<img src = "" alt = "" />
				</div>
				<div className = {classes.Stats}>
					<div className = {classes.FlavorText}>	
						<p>{props.itemFlavorText}</p>
					</div>
					<div className = {classes.XDivider}>
					</div>
					<div className = {classes.Damage}>
						{props.damageDie || props.damageType|| props.numberOfDamageDice ? <h4>Damage: </h4> : null}
						<p>{props.numberOfDamageDice}{props.damageDie} {props.damageType}</p>
					</div>
					<div className = {classes.XDivider}>
					</div>
					<div className = {classes.Attribute}>
						{props.itemAttributes ? <h4>Attributes:</h4> : null}
						<p>{props.itemAttributes}</p>
					</div>
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