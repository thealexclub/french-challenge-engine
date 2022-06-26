import { readFileSync } from 'fs';
import YAML from 'yaml';
import type { IFCEConfig } from '../types.js';

export default function loadConfig(path?: string): IFCEConfig {
  const configFile = readFileSync(path ?? '/home/lx/.config/fce/config.yml', 'utf8');
  const config = YAML.parse(configFile);
  return config;
}
