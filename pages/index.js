import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Dragbox from '../components/DragBox';
import GoogleSheets from '../components/GoogleSheets';

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
          <Dragbox />
        </main>

        <GoogleSheets />
      </div>
    </div>
  );
}
