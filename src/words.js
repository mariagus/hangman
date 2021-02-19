export const generateWord = () => {
  const words =
    "DAYLIGHT,AVAILABLE,CONSPIRACY,BRILLIANT,GAUNTLET,HOAX,HIDEAWAY,BLISS,CHISEL,DECODE,REBEL,RACOON,COUNTRY,ACADEMIC,FALLS,ATTIC,LANDS,MINDLESS,DEBATE,KNUCKLES,SPONGE,PAGEANT,HARPLIKE,FERTILE,AMONGST,OVERT,ROBBERY,ABANDON,BLACKMAIL,BLOKE,TOTAL,ARMY,WAX,BINDING,BADLANDS,DYNAMITE,AMMONIA,FAKE,ENGINE,EUNUCH,COLUMN,VIOLENCE,RABBIT,HONORARY,EXILE,HOGWASH,ABUSE,PILGRIM,ORTHODOX,FAMILY,BAYONET,LOOPHOLE,LUMINOUS,HARPOON,CHARISMATIC,MONGREL,ARCHER,LOVE,HELMET,CIRCUS,EQUATION,ANONYMOUS,PROPOSAL,ABSORBABLE,FIGUREHEAD,BEEKEEPER,PLANTATION,MEMORY,HERMIT,ELIMINATE,PERCUSSIVE,BECOMING,ELSEWHERE,LICKER,ASSEMBLY,BENEVOLENT,GLOSSY,SYMBOLIC,TERRIFIC,BLANKNESS,DISRUPT,PAPER,GUIDELINE,AMULET,CHEMICAL,FILTH,HEADQUARTERS,DISMISSAL,RAW,GENETIC,SONG,DEEPWATER,FAITH,DEVELOP,MOLTEN,ELEVATOR,CRIMINAL,AMUSEMENT,BATTERY,AMMONIA";
  const wordsArray = words.split(",");
  const randomIndex = () => {
    return Math.floor(Math.random() * Math.floor(100));
  };
  return wordsArray[randomIndex()];
};

console.log(generateWord());
