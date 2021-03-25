function myFunction() {
  console.log('osdkfods');
}

export default function GoogleSheets(atributes) {
  console.log(atributes);

  // for (var i = 0; i < atributes.characterNames.length; i++) {
  //   const { charNameList } = atributes.characterNames[i];
  //   console.log(charNameList);
  // }

  const { name, arti, sgc, substat, weapon } = atributes;

  return (
    <>
      <div className="apiBox">
        <div className="gridarea">
          <label htmlFor="chars">
            Recommended Build:
            <br />
            Select a character!:
          </label>
          <select name="chars" onChange={myFunction} className="charName">
            <option>{name}</option>
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
