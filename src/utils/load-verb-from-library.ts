import { readFileSync } from "fs";
import { IVerb } from "../types.js";
import loadConfig from "./load-config.js";
import YAML from 'yaml';

export default function loadVerbFromLib(verb: string) {
  const config = loadConfig();

  const verbFile = readFileSync(config.verbs + verb + '.yml', 'utf8');

  const verbDef = YAML.parse(verbFile);

  return verbDef as IVerb;
}
