import Head from 'next/head';
// import styles from '../styles/Home.module.css';

import Dragbox from '../components/DragBox';
import GoogleSheets from '../components/GoogleSheets';
import axios from 'axios';
import { forLoop, imgNameGetter } from '../utils/';

export async function getServerSideProps() {
  const url =
    'https://sheets.googleapis.com/v4/spreadsheets/1Zh88v2hhi6rtkuinKOM2wm3po2WgHEMjHW_96R7Chp8/values/Build%20Options?key=AIzaSyAAuybQ5ZyL2J8VYX0mNUQJcR5qtkUVbqY&majorDimension=ROWS';
  const response = await axios.get(url);
  const { characterDeet, characterNames } = forLoop(response);
  const imgNames = imgNameGetter('./public/images');
  const genshinObject = {
    characterDeet,
    characterNames,
    chracterDeetString: JSON.stringify(characterDeet),
    chracterNamestString: JSON.stringify(characterNames),
    imgNames,
  };
  console.log(genshinObject);
  return {
    props: { genshinObject }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  console.log(props);

  const { characterDeet } = props.genshinObject;
  return (
    <div>
      <div className="wholeBox">
        <div className="background">
          <div>
            <h1 className="title">
              Genshin Impact plan!
              <img className="paimon2" src="/moreImages/picture.jpg" />
            </h1>
          </div>
          <div className="myWeapon">
            Current Weapon: <textarea className="weaponText"></textarea>
          </div>
        </div>

        <main>{/* <Dragbox /> */}</main>

        <GoogleSheets attribute={characterDeet} />
      </div>
    </div>
  );
}
