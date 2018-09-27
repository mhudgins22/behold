import React from 'react';

const BackgroundDisplay = (props) => {
  let description = "";
  let skillProficiencies = "";
  let toolProficiencies = "";
  let languages = "";
  let equipment = "";

  switch (props.background) {
    case "Acolyte":
      description = "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric—performing sacred rites is not the same thing as channeling divine power.";
      skillProficiencies = "Insight, Religion";
      toolProficiencies = "None";
      languages = "Two of your choice";
      equipment = "A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gold";
      break;
    case "Charlatan":
      description = "You have always had a way with people. You know what makes them tick, you can tease out their hearts’ desires after a few minutes of conversation, and with a few leading questions you can read them like they were children’s books. It’s a useful talent, and one that you’re perfectly willing to use for your advantage.";
      skillProficiencies = "Deception, Sleight of Hand";
      toolProficiencies = "Disguise kit, forgery kit";
      languages = "No additional languages";
      equipment = "A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a pouch containing 15 gold";
      break;
    case "Criminal/Spy":
      description = "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.";
      skillProficiencies = "Deception, Stealth";
      toolProficiencies = "One type of gaming set, thieves’ tools";
      languages = "No additional languages";
      equipment = "A crowbar, a set of dark common clothes including a hood, and a pouch containing 15 gold";
      break;
    case "Entertainer":
      description = "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.";
      skillProficiencies = "Acrobatics, Performance";
      toolProficiencies = "Disguise kit, one musical instrument of your choice";
      languages = "No additional languages";
      equipment = "A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a pouch containing 15 gold";
      break;
    case "Folk Hero":
      description = "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.";
      skillProficiencies = "Animal Handling, Survival";
      toolProficiencies = "One type of artisan’s tools, vehicles (land)";
      languages = "No additional languages";
      equipment = "A set of artisan’s tools (one of your choice), a shovel, an iron pot, a set of common clothes, and a pouch containing 10 gold";
      break;
    case "Gladiator":
      description = "A gladiator is much an Entertainer as any minstrel or circus performer, trained to make the arts of combat into a spectacle the crowd can enjoy. This kind of flashy combat is your entertainer routine, though you might also have some skills as a tumbler or actor.";
      skillProficiencies = "Acrobatics, Performance";
      toolProficiencies = "Disguise kit, an inexpensive but unusal weapon (such as a trident or net)";
      languages = "No additional languages";
      equipment = "An inexpensive but unusal weapon (such as a trident or net), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a pouch containing 15 gold";
      break;
    case "Guild Artisan/Guild Merchant":
      description = "You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.";
      skillProficiencies = "Insight, Persuasion";
      toolProficiencies = "One type of artisan’s tools";
      languages = "One of your choice";
      equipment = "A set of artisan’s tools (one of your choice), a letter of introduction from your guild, a set of traveler’s clothes, and a pouch containing 15 gold";
      break;
    case "Hermit":
      description = "You lived in seclusion - either in a sheltered community such as a monastary, or entirely alone - for a formative part of your life. In your time apart from the clamor of society you found quiet, solitude, and perhaps some of the answers you were looking for.";
      skillProficiencies = "Medicine, Religion";
      toolProficiencies = "Herbalism kit";
      languages = "One of your choice";
      equipment = "A scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, an herbalism kit, and 5 gold";
      break;
    case "Knight":
      description = "A knighthood is among the lowest Noble titles in most societies, but it can be a path to higher status.";
      skillProficiencies = "History, Persuasion";
      toolProficiencies = "One type of gaming set";
      languages = "One of your choice";
      equipment = "A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gold, a banner or or other token from a noble lord or lady to whom you have given your heart (optional)";
      break;
    case "Noble":
      description = "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them.";
      skillProficiencies = "History, Persuasion";
      toolProficiencies = "One type of gaming set";
      languages = "One of your choice";
      equipment = "A set of fine clothes, a signet ring, a scroll of pedigree, and a purse containing 25 gp";
      break;
    case "Outlander":
      description = "You grew up in the wilds, far from civilization and the comforts of town and technology. You’ve witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don’t know the specific features of the terrain, you know the ways of the wild.";
      skillProficiencies = "Athletics, Survival";
      toolProficiencies = "One type of musical instrument";
      languages = "One of your choice";
      equipment = "A staff, a hunting trap, a trophy from an animal you killed, a set of traveler’s clothes, and a pouch containing 10 gold.";
      break;
    case "Pirate":
      description = "You spent your youth under the sway of a dread pirate, a ruthless cutthroat who taught you how to survive in a world of sharks and savages. You’ve indulged in larceny on the high seas and sent more than one deserving soul to a briny grave. Fear and bloodshed are no strangers to you, and you’ve garnered a somewhat unsavory reputation in many a port town.";
      skillProficiencies = "Athletics, Perception";
      toolProficiencies = "Navigator’s tools, vehicles (water)";
      languages = "No additional languages";
      equipment = "A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or small stone with a hole in the center (or you may roll for a random trinket from the Trinket Table), a set of common clothes, and a pouch containing 10 gold.";
      break;
    case "Sage":
      description = "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.";
      skillProficiencies = "Arcana, History";
      toolProficiencies = "Two of your choice";
      languages = "No additional languages";
      equipment = "A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a question you have not yet been able to answer, a set of common clothes, and a pouch containing 10 gold";
      break;
    case "Sailor":
      description = "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new.";
      skillProficiencies = "Athletics, Perception";
      toolProficiencies = "Navigator’s tools, vehicles (water)";
      languages = "No additional languages";
      equipment = "A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or small stone with a hole in the center (or you may roll for a random trinket from the Trinket Table), a set of common clothes, and a pouch containing 10 gold";
      break;
    case "Soldier":
      description = "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war.";
      skillProficiencies = "Athletics, Intimidation";
      toolProficiencies = "One type of gaming set, vehicles (land)";
      languages = "No additional languages";
      equipment = "An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or piece of a banner), a set of bone dice or deck of cards, a set of common clothes, and a pouch containing 10 gold";
      break;
    case "Urchin":
      description = "You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recouperate. You’ve survived despite all odds, and did so through cunning, strength, speed, or some combination of each.";
      skillProficiencies = "Sleight of Hand, Stealth";
      toolProficiencies = "Disguise kit, thieve’s tools";
      languages = "No additional languages";
      equipment = "A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a pouch containing 10 gold";
      break;
  }



  return (
    <div>
      <hr />
      <p><strong>Background Description: </strong></p>
      <p>
        <em>{description}</em>
      </p>
      <p><strong>Skill Proficiencies: </strong> <em>{skillProficiencies}</em></p>
      <p><strong>Tool Proficiencies: </strong> <em>{toolProficiencies}</em></p>
      <p><strong>Languages: </strong> <em>{languages}</em></p>
      <p><strong>Equipment: </strong> <em>{equipment}</em></p>
    </div>
  );
};

export default BackgroundDisplay;
