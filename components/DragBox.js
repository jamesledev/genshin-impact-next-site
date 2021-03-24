import TextArea from '../components/TextArea';

export default function Dragbox() {
  return (
    <>
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
          <div className="myCirclet draggable border" data-artifact="circlet">
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

          <TextArea />

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
      </div>
    </>
  );
}
