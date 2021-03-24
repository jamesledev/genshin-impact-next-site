function myFunction() {
  console.log('osdkfods');
}

export default function GoogleSheets(attributes) {
  console.log(attributes);
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
            {/* {{#each characterNames}} */}
            {/* <option value={{ this }}>{{ this }}</option> */}
            {/* {{/each}} */}
          </select>
        </div>
        <div className="weaponReco gridareab"></div>
        <div className="artiSetApi gridareac"></div>
        <div className="sgcApi gridaread"></div>
        <div className="substatsApi gridareae"></div>
      </div>
    </>
  );
}
