import chalk from "chalk";
import Table from "cli-table";
import loadVerbFromLib from "../utils/load-verb-from-library.js";

const proNouns = [
  'Je',
  'Tu',
  'Il/Elle/On',
  'Nous',
  'Vous',
  'Ils/Elles'
]

const tenses: Record<string, string> = {
  'present': 'Present',
  'future-simple': "Future Simple"
}

export default function table(verb: string, tense?: string) {
  const verbDef = loadVerbFromLib(verb);

  const table = new Table({
    head: ['Pronoun', tenses[tense ?? 'present']]
    , colWidths: [30, 40]
  });

  for (const [ind, conj] of verbDef.tenses[tense ?? 'present'].entries()) {
    table.push([chalk.blue(proNouns[ind]), chalk.green(conj)]);
  }

  console.log(table.toString());
}
