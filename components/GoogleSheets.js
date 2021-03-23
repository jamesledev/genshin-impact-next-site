export const GoogleSheets = () => {
  return (
    <div>
      <div className="apiBox">
        <div className="gridarea">
          <label for="chars">
            Recommended Build:
            <br />
            Select a character!:
          </label>
          <select name="chars" onchange=" myFunction()" className="charName">
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
    </div>
  );
};
