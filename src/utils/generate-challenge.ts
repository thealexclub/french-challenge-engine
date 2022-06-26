import type { IFCEConfig, TProNouns } from '../types.js';
import randomNumberInRange from './random-number-in-range.js';
import randomVerbFromLibrary from './random-verb-from-library.js';
import chalk from 'chalk';
import proNouns from './pro-nouns.js';

export default function generateChallenge(config: IFCEConfig, proNoun?: TProNouns): string {

  const verbDef = randomVerbFromLibrary(config.verbs);

  const verbTenses = Object.entries(verbDef.tenses)

  const tense = verbTenses[randomNumberInRange(verbTenses.length - 1)][0];

  const subject = proNouns[randomNumberInRange(proNouns.length - 1)];

  const verb = verbDef.infinitive;

  let qualifier = config.qualifiers[randomNumberInRange(config.qualifiers.length - 1)].symbol;

  if (qualifier.includes('verb')) {
    const qVerb = randomVerbFromLibrary(config.verbs, verb);

    qualifier = qVerb.infinitive;
  }

  const arrow = chalk.cyan(' -> ');

  return chalk.blue(tense) + arrow + chalk.red(proNoun ?? subject) + arrow + chalk.green(verb) + arrow + chalk.yellow(qualifier)
}

