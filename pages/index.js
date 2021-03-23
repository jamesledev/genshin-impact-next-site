import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className="wholeBox">
        <div className="background">
          <div style="display: flex;">
            <h1 className="title">
              Genshin Impact plan!
              <img className="paimon2" src="/moreImages/picture.jpg" />
            </h1>
          </div>
          <div className="myWeapon">
            Current Weapon: <textarea className="weaponText"></textarea>
          </div>
        </div>

        <main>
          <div className="mainContainer">
            <div className="mainBox parent">
              <div className="myFlower draggable border" data-artifact="flower">
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Current Flower"
                ></div>
              </div>
              <div className="myPlume draggable border" data-artifact="plume">
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Current Plume"
                ></div>
              </div>
              <div className="mySands draggable border" data-artifact="sands">
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Current Sandstorm"
                ></div>
              </div>
              <div className="myGoblet draggable border" data-artifact="goblet">
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Current Golbet"
                ></div>
              </div>
              <div
                className="myCirclet draggable border"
                data-artifact="circlet"
              >
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Current Circlet"
                ></div>
              </div>
              <div className="flower draggable  border" data-artifact="flower">
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Desired Flower"
                ></div>
              </div>
              <div className="plume draggable border" data-artifact="plume">
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Desired Plume"
                ></div>
              </div>
              <div className="sands draggable border" data-artifact="sands">
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Desired Sandstorm"
                ></div>
              </div>
              <div className="goblet draggable border" data-artifact="goblet">
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Desired Golbet"
                ></div>
              </div>
              <div className="circlet draggable border" data-artifact="circlet">
                <div
                  className="preText"
                  contentEditable="true"
                  data-texting="Desired Circlet"
                ></div>
              </div>

              <div className="flowerText border">
                <textarea className="textBoxSize textBox" rows="5">
                  Main Stat:
                </textarea>
              </div>
              <div className="plumeText border">
                <textarea className="textBoxSize textBox" rows="5">
                  Main Stat:
                </textarea>
              </div>
              <div className="sandsText border">
                <textarea className="textBoxSize textBox" rows="5">
                  Main Stat:
                </textarea>
              </div>
              <div className="gobletText border">
                <textarea className="textBoxSize textBox" rows="5">
                  Main Stat:
                </textarea>
              </div>
              <div className="circletText border">
                <textarea className="textBoxSize textBox" rows="5">
                  Main Stat:
                </textarea>
              </div>

              <div className="tickbox1 center border">
                <input type="checkbox" className="checkBox" />
              </div>
              <div className="tickbox2 center border">
                <input type="checkbox" className="checkBox" />
              </div>
              <div className="tickbox3 center border">
                <input type="checkbox" className="checkBox" />
              </div>
              <div className="tickbox4 center border">
                <input type="checkbox" className="checkBox" />
              </div>
              <div className="tickbox5  center border">
                <input type="checkbox" className="checkBox" />
              </div>

              <div className="artifactImgs draggableTwo border child2">
                {/* {{#each imgNames}} */}
                <div
                  className="artifactImgBox"
                  data-artifact="{{this.artifactType}}"
                >
                  {{ artifactSet }}
                  <img src="/images/{{this.file}}" className="artifactImg" />
                </div>
                {/* {{/each}} */}
              </div>
            </div>
            <div style="padding: 20px">
              <button className="clear btn border">Clear</button>
            </div>
            <div className="apiBox">
              <div className="gridarea">
                <label for="chars">
                  Recommended Build:
                  <br />
                  Select a character!:
                </label>
                <select
                  name="chars"
                  onchange=" myFunction()"
                  className="charName"
                >
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
        </main>
      </div>
    </div>
  );
}
