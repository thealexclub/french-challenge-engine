import generateChallenge from "../utils/generate-challenge.js";
import loadConfig from "../utils/load-config.js";
import proNouns from "../utils/pro-nouns.js";

export default function challenge(number: string) {
  const config = loadConfig();

  if (!!number) {
    for (let i = 0; i < +number; i++) {
      console.log(generateChallenge(config));
    }
    return;
  }

  for (const proNoun of proNouns) {
    console.log(generateChallenge(config, proNoun));
  }
}

