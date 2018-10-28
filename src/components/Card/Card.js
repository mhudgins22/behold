import React from "react";

import classes from "./Card.css";

import ReactMarkdown from "react-markdown";

import Spinner from "../UI/Spinner/Spinner";


const card = props => {
	let card = null;

	let cardClasses = [classes.Card];
	switch(props.cardStyle) {
		case "Classic": cardClasses.push(classes.ClassicCard);
	}

	if (props.cardType === "item") {
		card = (
			<div className = {cardClasses.join(" ")}>
				<div className = {classes.Header}>
					<h3>{props.itemName}</h3>
					<div className = {classes.Subheader}>
						<p>{props.itemRarity} {props.itemType} {props.itemProperties ? "- " + props.itemProperties : null}</p>
					</div>
				</div>
				{/*Item Image Here*/}
				<div className = {classes.ImageBox} style = {{backgroundImage: "url(" + props.itemImage + ")"}}>
					{props.loading === true && props.itemImage === "" ? <Spinner /> : null}
				</div>
				{/*Item Stats and FlavorText here*/}
				<div className = {classes.Stats}>
					<div className = {classes.FlavorText}>
						<p>{props.itemFlavorText}</p>
					</div>
					{props.itemFlavorText ? <div className = {classes.XDivider}>
					</div> : null}
					<div className = {classes.Attributes}>
						{props.damageDieOne || props.damageTypeOne|| props.numberOfDamageDiceOne || props.damageBonusOne ? <h4>Damage: </h4> : null}
						<p>{props.numberOfDamageDiceOne}{props.damageDieOne}{props.damageBonusOne} {props.damageTypeOne}</p>
						{props.damageDieTwo || props.numberOfDamageDiceTwo || props.damageBonusTwo || props.damageTypeTwo ?
							<p>{props.numberOfDamageDiceTwo}{props.damageDieTwo}{props.damageBonusTwo} {props.damageTypeTwo}</p>
						: null}
						{props.numberOfDamageDiceThree || props.damageDieThree || props.damageBonusThree || props.damageTypeThree ?
							<p>{props.numberOfDamageDiceThree}{props.damageDieThree}{props.damageBonusThree} {props.damageTypeThree}</p>
						: null}
					</div>
					<div className = {classes.Attributes}>
						{props.armorClass || props.armorClassBonus ? <h4>Armor Class: </h4> : null}
						<p>{props.armorClass ? "AC = " + props.armorClass : null}</p>
						<p>{props.armorClassBonus ? props.armorClassBonus + " to AC" : null}</p>
					</div>
					<div className = {classes.Attributes}>
						{props.numberOfHealingDice || props.healingDie || props.healingBonus ? <h4>Healing: </h4> : null}
						<p>{props.numberOfHealingDice}{props.healingDie}{props.healingBonus}</p>
					</div>
				</div>
				{/*Item Abilities here*/}
				{props.itemAbilities ?
					<div>
						<h4 style = {{margin: "0px 2.5%"}}>Ablities:</h4>
						<div className = {classes.Abilities}>
							<ReactMarkdown source = {props.itemAbilities} />
						</div>
					</div>
				: null}
			</div>
		)
	} else if (props.cardType === "expandedItem") {
		card = (
			<div className = {classes.ExpandedCard}>
				<div className = {classes.Header}>
					<h3>{props.itemName}</h3>
					<div className = {classes.Subheader}>
						<p>{props.itemRarity} {props.itemType} {props.itemProperties ? "- " + props.itemProperties : null}</p>
					</div>
				</div>
				{/*Item Image Here*/}
				<div className = {classes.ImageBox} style = {{backgroundImage: "url(" + props.itemImage + ")"}}>
					{props.loading === true && props.itemImage === "" ? <Spinner /> : null}
				</div>
				{/*Item Stats and FlavorText here*/}
				<div className = {classes.Stats}>
					<div className = {classes.FlavorText}>
						<p>{props.itemFlavorText}</p>
					</div>
					{props.itemFlavorText ? <div className = {classes.XDivider}>
					</div> : null}
					<div className = {classes.Attributes}>
						{props.damageDieOne || props.damageTypeOne|| props.numberOfDamageDiceOne || props.damageBonusOne ? <h4>Damage: </h4> : null}
						<p>{props.numberOfDamageDiceOne}{props.damageDieOne}{props.damageBonusOne} {props.damageTypeOne}</p>
						{props.damageDieTwo || props.numberOfDamageDiceTwo || props.damageBonusTwo || props.damageTypeTwo ?
							<p>{props.numberOfDamageDiceTwo}{props.damageDieTwo}{props.damageBonusTwo} {props.damageTypeTwo}</p>
						: null}
						{props.numberOfDamageDiceThree || props.damageDieThree || props.damageBonusThree || props.damageTypeThree ?
							<p>{props.numberOfDamageDiceThree}{props.damageDieThree}{props.damageBonusThree} {props.damageTypeThree}</p>
						: null}
					</div>
					<div className = {classes.Attributes}>
						{props.armorClass || props.armorClassBonus ? <h4>Armor Class: </h4> : null}
						<p>{props.armorClass ? "AC = " + props.armorClass : null}</p>
						<p>{props.armorClassBonus ? props.armorClassBonus + " to AC" : null}</p>
					</div>
					<div className = {classes.Attributes}>
						{props.numberOfHealingDice || props.healingDie || props.healingBonus ? <h4>Healing: </h4> : null}
						<p>{props.numberOfHealingDice}{props.healingDie}{props.healingBonus}</p>
					</div>
				</div>
				{/*Item Abilities here*/}
				{props.itemAbilities ?
					<div>
						<div className = {classes.AbilitiesExpanded}>
							<h4>Ablities:</h4>
							<ReactMarkdown source = {props.itemAbilities} />
						</div>
					</div>
				: null}
			</div>
		)
	} else if (props.cardType === "abilityCard") {
		card = (
			<div className={classes.AbilityCard}>
				<div className = {classes.AbilityHeader}>
					<h4>{props.name}</h4>
					<div className = {classes.Subheader}>
						<p>Level: {props.level}</p>
					</div>
				</div>
				<div>
					<div className = {classes.AbilityDescription}>
						<h5>Description:</h5>
						<ReactMarkdown source = {props.description} />
					</div>
				</div>
			</div>
		);
	}
	return(
		<div>
			{card}
		</div>
	)
}

export default card;
