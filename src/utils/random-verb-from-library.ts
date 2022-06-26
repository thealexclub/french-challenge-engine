import type { IVerb } from '../types.js';
import randomNumberInRange from './random-number-in-range.js';
import { readdirSync, readFileSync } from 'fs';
import YAML from 'yaml';

/** 
 * Random Verb From Library
 *
 * Returns a random verb definition from the library at the supplied path.
 *
 * @param verbsPath {string} - The path to the verb library i.e. `"/home/lx/french/verbs"`
 * @param exclude {string} optional - A string used to exclude verbs from the random selection
 *
 * @returns verbDef {IVerb}
 */
export default function randomVerbFromLibrary(verbsPath: string, exclude?: string): IVerb {
  let verbs = readdirSync(verbsPath, 'utf8');

  if (!!exclude) {
    verbs = verbs.filter(v => !v.includes(exclude));
  }

  const verbInd = randomNumberInRange(verbs.length - 1);

  const verbPath = verbsPath + verbs[verbInd];

  const verbFile = readFileSync(verbPath, 'utf8');

  const verb: IVerb = YAML.parse(verbFile);

  return verb;
}
