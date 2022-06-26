# french-challenge-engine
A very simple script that uses a library of known verbs to generate sentence construction challenges for a person learning french

## Config

A `config.yml` file is required in `/home/$USER/.config/fce`. ~~If one isn't found on first load the user will be prompted to enter a path to their verbs library and one will be generated with the default qualifiers~~

## Usage

### Challenge

Running the `challenge` command without arguments will return a sentence construction challenge for each pro noun. 
Adding the optional `[number]` argument will instead return the specified number of randomised sentence construction challenges.

#### Sentence Construction Challenge Anatomy

> [TENSE] -> [SUBJECT] -> [VERB] -> [QUALIFIER]

Tense: The tense to construct the sentence in. i.e. Present, Future Simple. These tenses are pulled from the verb definition files. This way, only known tenses will be supplied with a verb.

Subject: The subject to use when constructing the sentence. i.e. Je, Tu, Ils. Along with the tense this will inform you how to conjugate the verb.

Verb: The primary verb to use in the sentence. i.e. Aller, Travailler, Devoir. These come from the verb library specified in the config file. 

Qualifier: The qualifier adds an extra bit of challenge to creating the sentence. i.e. Negating the verb, Using Two vebrs.

#### Default Qualifiers

```yml
qualifiers:
  - 
    symbol: "?"
    description: Format as a question using any question word.
    example: Pr -> Tu -> Travailler -> ? = Est-ce que tu travailles?
  - 
    symbol: "!"
    description: Negate the verb.
    example: Pr -> Tu -> Travailler -> ! = Tu ne travailles pas.
  - 
    symbol: "<"
    description: Subject to start scentence.
    example: Pr -> Tu -> Travailler -> < = Tu travailles.
  - 
    symbol: ">"
    description: Subject to NOT start scentence.
    example: Pr -> Tu -> Travailler -> > = Aujourd'hui Tu travailles.
  - 
    symbol: '"verb"'
    description: Use both verbs. Qualifying verb can be conjigated in any way.
    example: Pr -> Tu -> Travailler -> Marcher = Tu travailles maintenant et tu vas marcher à la maison cd soir.
```

The qualifiers can be found in the `config.yml` file. Feel free to add more qualifiers as you progress through your learning. 

#### Verbs

The verbs are pulled from the users verb library. This is library of yaml files with verb definitions and tense conjugations. 

```yml
infinitive: être
translation: 
  - to be
  - being
tenses:
  present:
    - suis
    - es
    - est
    - sommes
    - êtes
    - sont
  future-simple:
    - vais être
    - vas être
    - va être
    - allons être
    - allez être
    - vont être 
```

These will need to be added and maintained by the user as they progress trough their learning journey. 
