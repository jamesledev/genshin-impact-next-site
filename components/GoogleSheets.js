function disaplayCharacterData(event, characterDetails) {
  const characterName = event.target.value;
  console.log(characterDetails[characterName]);
  const selectedCharacter = characterDetails[characterName];

  document.querySelector('.weaponReco').innerHTML =
    "<div class='fontColor'>Recommended Weapons: </div>" +
    selectedCharacter.weapon;
  document.querySelector('.artiSetApi').innerHTML =
    "<div class='fontColor'>Recommended Artifact Sets: </div>" +
    selectedCharacter.arti;
  document.querySelector('.sgcApi').innerHTML =
    "<div class='fontColor'>Recommended SGC Stats: </div>" +
    selectedCharacter.sgc;
  document.querySelector('.substatsApi').innerHTML =
    "<div class='fontColor'>Recommended Substats: </div>" +
    selectedCharacter.substat;
}
function displayNames(characterDeets) {
  return Object.keys(characterDeets).map((character) => {
    return (
      <option key={character} value={character}>
        {character}
      </option>
    );
  });
}
export default function GoogleSheets(attributes) {
  const { characterDeets } = attributes;

  return (
    <>
      <div className="apiBox">
        <div className="gridarea">
          <label htmlFor="chars">
            Recommended Build:
            <br />
            Select a character!:
          </label>
          <select
            id="chars"
            name="chars"
            onChange={(e) => {
              disaplayCharacterData(e, characterDeets);
            }}
            className="charName"
          >
            {displayNames(characterDeets)}
          </select>
        </div>
        <div className="weaponReco gridareab">Recommended Weapons: </div>
        <div className="artiSetApi gridareac">Recommended Artifact Set: </div>
        <div className="sgcApi gridaread">Recommended SGC Stats: </div>
        <div className="substatsApi gridareae">Recommended Subsstats: </div>
      </div>
    </>
  );
}
