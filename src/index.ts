import { Command } from 'commander';
import challenge from './commands/challenge.js';
import table from './commands/table.js';

const program = new Command();

program
  .name('french-challenge-engine')
  .description('A simple CLI that generates challenges for a french learner based on a library of known verbs')
  .version('0.0.1');

program.command('challenge')
  .description('Generate scentences construction challenges')
  .argument('[number]', 'Number of challenges to generate. If left blank will generate a challenge for every pronoun')
  .action(challenge);

program.command('table')
  .description('Display the conjigation table for a specified verb')
  .argument('<verb>', 'The name of the verb to display')
  .argument('[tense]', 'The tense of the table to display, Defaults to "present"')
  .action(table);

program.parse();
