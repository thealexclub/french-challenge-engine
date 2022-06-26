export type TProNouns = "Je" | "Tu" | "Il" | "Elle" | "On" | "Nous" | "Vous" | "Ils" | "Elles";

export interface IQualifier {
  symbol: string;
  description: string;
  example: string;
}

export interface IFCEConfig {
  verbs: string;
  qualifiers: IQualifier[]
}

export interface IVerb {
  infinitive: string;
  translation: string;
  tenses: Record<string, string[]>;
}
