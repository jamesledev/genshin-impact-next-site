import fs from 'fs';

export function forLoop(response) {
  const characterDeet = {};
  const characterNames = [];
  const charNamePos = 0;
  const charWeaponPos = 1;
  const charartiPos = 2;
  const charSGCPos = 3;
  const charSubstatPos = 4;
  const shortcut = response.data.values;
  for (var i = 1; i < shortcut.length; i++) {
    const characterDetail = shortcut[i];
    const name = characterDetail[charNamePos].replace(' ', '');
    const weapon = characterDetail[charWeaponPos] || '';
    const arti = characterDetail[charartiPos] || '';
    const sgc = characterDetail[charSGCPos] || '';
    const substat = characterDetail[charSubstatPos] || '';
    const characterDetails = {
      name,
      weapon,
      arti,
      sgc,
      substat,
    };
    characterDeet[name] = characterDetails;
    characterNames.push(name);
  }
  return { characterDeet, characterNames };
}

export function imgNameGetter(directory) {
  const files = fs.readdirSync(directory);
  const artifactImages = [];
  files.forEach((file) => {
    const artifactType = file.split('-')[2].replace('.png', '');
    const artifactSet = file.split('-')[0];
    artifactImages.push({
      file,
      artifactType,
      artifactSet,
    });
  });
  return artifactImages;
}
