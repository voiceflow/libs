export enum AmazonIntent {
  CANCEL = 'AMAZON.CancelIntent',
  FALLBACK = 'AMAZON.FallbackIntent',
  HELP = 'AMAZON.HelpIntent',
  LOOP_OFF = 'AMAZON.LoopOffIntent',
  LOOP_ON = 'AMAZON.LoopOnIntent',
  MORE = 'AMAZON.MoreIntent',
  NAVIGATE_HOME = 'AMAZON.NavigateHomeIntent',
  NAVIGATE_SETTINGS = 'AMAZON.NavigateSettingsIntent',
  NEXT = 'AMAZON.NextIntent',
  NO = 'AMAZON.NoIntent',
  YES = 'AMAZON.YesIntent',
  STOP = 'AMAZON.StopIntent',
  RESUME = 'AMAZON.ResumeIntent',
  REPEAT = 'AMAZON.RepeatIntent',
  PREVIOUS = 'AMAZON.PreviousIntent',
  PAUSE = 'AMAZON.PauseIntent',
  PAGE_UP = 'AMAZON.PageUpIntent',
  PAGE_DOWN = 'AMAZON.PageDownIntent',
  START_OVER = 'AMAZON.StartOverIntent',
  SHUFFLE_ON = 'AMAZON.ShuffleOnIntent',
  SHUFFLE_OFF = 'AMAZON.ShuffleOffIntent',
  SCROLL_UP = 'AMAZON.ScrollUpIntent',
  SCROLL_RIGHT = 'AMAZON.ScrollRightIntent',
  SCROLL_LEFT = 'AMAZON.ScrollLeftIntent',
  SCROLL_DOWN = 'AMAZON.ScrollDownIntent',
  SELECT = 'AMAZON.SelectIntent',
  VOICEFLOW = 'VoiceFlowIntent',
}

export const VALID_UTTERANCES =
  "a-zA-Z\xC0-\xFF\u0100-\u017F\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFF9F\u4E00-\u9FAF\u3400-\u4DBF._'\\- \\[\\]";

export const INTERFACE_INTENTS = {
  // Reference: https://developer.amazon.com/docs/custom-skills/audioplayer-interface-reference.html#intents
  AUDIO_PLAYER: [
    {
      name: AmazonIntent.LOOP_OFF,
    },
    {
      name: AmazonIntent.LOOP_ON,
    },
    {
      name: AmazonIntent.NEXT,
    },
    {
      name: AmazonIntent.PAUSE,
    },
    {
      name: AmazonIntent.PREVIOUS,
    },
    {
      name: AmazonIntent.RESUME,
    },
    {
      name: AmazonIntent.SHUFFLE_OFF,
    },
    {
      name: AmazonIntent.SHUFFLE_ON,
    },
    {
      name: AmazonIntent.START_OVER,
    },
  ],
};

export const BUILT_IN_INTENTS_ALEXA = [
  {
    name: AmazonIntent.CANCEL,
    slots: [],
  },
  {
    name: AmazonIntent.FALLBACK,
    slots: [],
  },
  {
    name: AmazonIntent.HELP,
    slots: [],
  },
  {
    name: AmazonIntent.LOOP_OFF,
    slots: [],
  },
  {
    name: AmazonIntent.LOOP_ON,
    slots: [],
  },
  {
    name: AmazonIntent.MORE,
    slots: [],
  },
  {
    name: AmazonIntent.NAVIGATE_HOME,
    slots: [],
  },
  {
    name: AmazonIntent.NAVIGATE_SETTINGS,
    slots: [],
  },
  {
    name: AmazonIntent.NEXT,
    slots: [],
  },
  {
    name: AmazonIntent.NO,
    slots: [],
  },
  {
    name: AmazonIntent.PAGE_DOWN,
    slots: [],
  },
  {
    name: AmazonIntent.PAGE_UP,
    slots: [],
  },
  {
    name: AmazonIntent.PAUSE,
    slots: [],
  },
  {
    name: AmazonIntent.PREVIOUS,
    slots: [],
  },
  {
    name: AmazonIntent.REPEAT,
    slots: [],
  },
  {
    name: AmazonIntent.RESUME,
    slots: [],
  },
  {
    name: AmazonIntent.SCROLL_DOWN,
    slots: [],
  },
  {
    name: AmazonIntent.SCROLL_LEFT,
    slots: [],
  },
  {
    name: AmazonIntent.SCROLL_RIGHT,
    slots: [],
  },
  {
    name: AmazonIntent.SCROLL_UP,
    slots: [],
  },
  {
    name: AmazonIntent.SELECT,
    slots: ['Anaphor', 'ListPosition', 'PositionRelation', 'VisualModeTrigger'],
  },
  {
    name: AmazonIntent.SHUFFLE_OFF,
    slots: [],
  },
  {
    name: AmazonIntent.SHUFFLE_ON,
    slots: [],
  },
  {
    name: AmazonIntent.START_OVER,
    slots: [],
  },
  {
    name: AmazonIntent.STOP,
    slots: [],
  },
  {
    name: AmazonIntent.YES,
    slots: [],
  },
];

export const DEFAULT_INTENTS = {
  // English (AU,CA,US,UK,IN)
  en: {
    defaults: [
      {
        name: AmazonIntent.CANCEL,
        samples: ['cancel'],
      },
      {
        name: AmazonIntent.HELP,
        samples: ['help'],
      },
      {
        name: AmazonIntent.STOP,
        samples: ['stop'],
      },
      {
        name: AmazonIntent.YES,
        samples: ['yes', 'yea', 'ok', 'okay', 'yup', 'ya', 'sure'],
        keep: ['yes'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['no', 'nope', 'nay', 'nah', 'no way', 'negative'],
      },
    ],
    built_ins: [
      {
        name: AmazonIntent.REPEAT,
        samples: ['repeat', 'again', 'say again'],
      },
    ],
  },
  // French (CA,FR)
  fr: {
    defaults: [
      {
        name: AmazonIntent.CANCEL,
        samples: ['annuler', 'annule'],
      },
      {
        name: AmazonIntent.HELP,
        samples: ['aidez-moi', 'aider', 'aide', 'aide moi', 'assistance', "j'ai besoin d'aide", 'je ne comprends pas'],
      },
      {
        name: AmazonIntent.STOP,
        samples: ["s'arrêter", 'arrêter', 'arrête', 'stop', 'fin', 'cesser', 'mettre fin', 'stopper', 'mettre un terme', 'interrompre'],
      },
      {
        name: AmazonIntent.YES,
        samples: ['oui', 'yep', 'ok', 'bien sûr', 'ouais', 'ouaip', 'exactement', 'correct', 'okay', "d'accord"],
        keep: ['oui'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['non', 'nan', 'absolument pas', 'hors de question', 'bien sûr que non'],
      },
    ],
    built_ins: [
      {
        name: AmazonIntent.REPEAT,
        samples: [
          'repeat',
          'est-ce que tu peux répéter',
          'répète',
          'tu peux répéter',
          'dis-le à nouveau',
          'tu peux le redire',
          'redire ça',
          'répéter ça',
        ],
      },
    ],
  },
  // Japanese (JA)
  ja: {
    defaults: [
      {
        name: AmazonIntent.CANCEL,
        samples: ['取り消す', 'キャンセル', '取り消し', '取消'],
      },
      {
        name: AmazonIntent.HELP,
        samples: [
          '助ける',
          '手伝う',
          'アシスト',
          '裏付ける',
          '手助け',
          '手伝い',
          '救済',
          '応援',
          '助',
          '手伝',
          '救い',
          '力添え',
          '扶助',
          '加勢',
          '援護',
          '佐',
          '介添え',
        ],
      },
      {
        name: AmazonIntent.STOP,
        samples: [
          '止める',
          '立ち止まる',
          '止む',
          '打ち切る',
          '停める',
          '留める',
          '阻む',
          '途絶える',
          '句切る',
          '停まる',
          'ストップ',
          '終止',
          '停留',
          '止まること',
        ],
      },
      {
        name: AmazonIntent.YES,
        samples: ['yes', 'はい', 'ええ', 'そうです'],
        keep: ['はい'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['no', 'いいえ', 'そうだはない', 'いやそれどころか', 'ノン', '否', '否や'],
      },
    ],
    built_ins: [
      {
        name: AmazonIntent.REPEAT,
        samples: ['repeat', '繰り返す', '引き返す', '折れ返る', '返す'],
      },
    ],
  },
  // Italian (IT)
  it: {
    defaults: [
      {
        name: AmazonIntent.CANCEL,
        samples: ['cancellare', 'annullare', 'disdire', 'sopprimere', 'rescindre', 'chiudere', 'abrogare', 'obliterare'],
      },
      {
        name: AmazonIntent.HELP,
        samples: [
          'la assistenza',
          'il aiuto',
          'il soccorso',
          'lo manforte',
          'la persona di servizio',
          'aiutare',
          'fare a meno di',
          'contribuire a',
          'assistere',
          'servire',
        ],
      },
      {
        name: AmazonIntent.STOP,
        samples: [
          'la fermata',
          'il fermo',
          'lo stop',
          'la sosta',
          'la tappa',
          'fermare',
          'interrompere',
          'smettere',
          'fermarsi',
          'arrestare',
          'cessare',
          'sostare',
          'finire',
          'stoppare',
          'fare una fermata',
        ],
      },
      {
        name: AmazonIntent.YES,
        samples: ['yes', 'si', 'certo'],
        keep: ['si'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['il no', 'no', 'il rifiuto', 'la negazione', 'nessuno'],
      },
    ],
    built_ins: [
      {
        name: AmazonIntent.REPEAT,
        samples: ['repeat', '繰り返す', '引き返す', '折れ返る', '返す'],
      },
    ],
  },
  // Spanish (ES,MX)
  es: {
    defaults: [
      {
        name: AmazonIntent.CANCEL,
        samples: [
          'cancelar',
          'anular',
          'suprimir',
          'abolir',
          'dar anulación',
          'realizar anulación',
          'hacer anulación',
          'hacer dar anulación',
          'noun la cancelación',
          'la anulación',
        ],
      },
      {
        name: AmazonIntent.HELP,
        samples: ['la ayuda', 'el favor', 'ei auxilio', 'el socorro', 'el empleado', 'la criada', 'ayudar', 'servir', 'auxiliar', 'socorrer'],
      },
      {
        name: AmazonIntent.STOP,
        samples: ['detener', 'dejar', 'parar', 'suspender', 'cesar', 'pararse', 'terminar', 'de alto'],
      },
      {
        name: AmazonIntent.YES,
        samples: ['yes', 'si', 'sí', 'decir si'],
        keep: ['sí'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['no', 'ninguno', 'imposible', 'prohibido', 'la negativa', 'el voto negativo', 'el voto en contra'],
      },
    ],
    built_ins: [
      {
        name: AmazonIntent.REPEAT,
        samples: ['repeat', 'repetir', 'repetirse', 'reiterar', 'recitar', 'volver a dar'],
      },
    ],
  },
  // German (DE)
  de: {
    defaults: [
      {
        name: AmazonIntent.CANCEL,
        samples: ['stornieren', 'aufheben', 'kündigen', 'annullieren', 'beenden', 'absagen', 'abbestellen', 'abmelden', 'auflösen', 'zurücknehmen'],
      },
      {
        name: AmazonIntent.HELP,
        samples: ['die hilfe', 'der beistand', 'die aushilfe', 'helfen', 'beitragen', 'behilflich sein', 'hilfe leisten'],
      },
      {
        name: AmazonIntent.STOP,
        samples: [
          'der stopp',
          'der anschlag',
          'die haltestelle',
          'der registerzug',
          'stoppen',
          'aufhören',
          'beenden',
          'anhalten',
          'halten',
          'verhindern',
          'aufhalten',
          'unterbrechen',
          'abbrechen',
          'unterbinden',
          'einstellen',
          'abbestellen',
          'absetzen',
        ],
      },
      {
        name: AmazonIntent.YES,
        samples: ['yes', 'ja', 'doch', 'jawohl'],
        keep: ['ja'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['no', 'nein', 'kein', 'nicht'],
      },
    ],
    built_ins: [
      {
        name: AmazonIntent.REPEAT,
        samples: ['repeat', 'wiederholen', 'wiedergeben', 'repetieren', 'weitersagen'],
      },
    ],
  },
  // Portuguese (PT)
  pt: {
    defaults: [
      {
        name: AmazonIntent.CANCEL,
        samples: ['cancelar', 'anular', 'suspender'],
      },
      {
        name: AmazonIntent.HELP,
        samples: ['ajudar', 'socorrer', 'auxiliar'],
      },
      {
        name: AmazonIntent.STOP,
        samples: ['parar', 'terminar', 'impedir', 'fazer parar'],
      },
      {
        name: AmazonIntent.YES,
        samples: ['yes', 'sim', 'o sim', 'dizer sim'],
        keep: ['sim'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['no', 'não', 'negativa'],
      },
    ],
    built_ins: [
      {
        name: AmazonIntent.REPEAT,
        samples: ['repeat', 'repetir', 'reiterar', 'refazer', 'amiudar', 'recitar de cor'],
      },
    ],
  },
  // Hindi (IN)
  hi: {
    defaults: [
      {
        name: AmazonIntent.CANCEL,
        samples: [
          'रद्द करो',
          'रद्द करना',
          'रद्द कर दो',
          'निरस्त करो',
          'निरस्त करना',
          'निरस्त कर दो',
          'काट दे',
          'काट दो',
          'काट देना',
          'वापस ले',
          'वापस लो',
          'वापस लेना',
          'कैन्सल्', // cancel and variations below
          'कैन्सल् करो',
          'कैन्सल् करना',
          'कैन्सल् कर दो',
        ],
      },
      {
        name: AmazonIntent.HELP,
        samples: [
          'मदद',
          'मदद करो',
          'मदद करना',
          'मदद कर दो',
          'सहायता',
          'सहायता करो',
          'सहायता करना',
          'सहायता कर दो',
          'सहयोग',
          'सहयोग करो',
          'सहयोग करना',
          'सहयोग कर दो',
          'हेल्प्', // help and variations below
          'हेल्प् करो',
          'हेल्प् करना',
        ],
      },
      {
        name: AmazonIntent.STOP,
        samples: [
          'रुकें',
          'रोकना',
          'विराम',
          'रुको',
          'रुक',
          'रुकना',
          'रुक जाना',
          'बंद',
          'बंद करो',
          'बंद कर दो',
          'बंद करना',
          'स्टॉप्', // stop
        ],
      },
      {
        name: AmazonIntent.YES,
        samples: [
          'हां',
          'हाँ',
          'ज़रूर',
          'अवश्य',
          'ठीक है',
          'ठीक',
          'अच्छा है',
          'अच्छा',
          'सही है',
          'सही',
          'अच्छी बात है',
          'पक्का',
          'बिल्कुल',
          'ऑल राइट्', // alright
          'डेफ़िनिट्ली', // definitely
          'येस्', // yes
          'येअ', // yeah
          'यप्', // yup
          'येप्', // yep
          'शुअ', // sure
          'ओके', // okay
        ],
        keep: ['हां'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['नहीं', 'ना', 'नेगटिव़्', 'नो', 'नोप्'], // negative, no, nope
      },
    ],
    built_ins: [
      {
        name: AmazonIntent.REPEAT,
        samples: [
          'फिर से',
          'फिर बोलाना',
          'फिर से बोलाना',
          'फिर बोलो',
          'फिर से बोलो',
          'फिर कहो',
          'फिर से कहना',
          'दुबारा से',
          'दुबारा कहो',
          'दुबारा से कहो',
          'दुबारा कहना',
          'दुबारा से कहना',
          'दुबारा बोलो',
          'दुबारा से बोलो',
          'दुबारा बोलाना',
          'दुबारा से बोलाना',
          'दुहराना',
          'एक बार और',
          'रिपीट्', // repeat and variations below
          'रिपीट् करना',
        ],
      },
    ],
  },
};

export const CATCH_ALL_INTENT = {
  en: {
    name: 'VoiceFlowIntent',
    samples: ['voice flow'],
  },
  fr: {
    name: 'VoiceFlowIntent',
    samples: ['Flux de voix'],
  },
  es: {
    name: 'VoiceFlowIntent',
    samples: ['Flujo de voz'],
  },
  de: {
    name: 'VoiceFlowIntent',
    samples: ['Sprachfluss'],
  },
  it: {
    name: 'VoiceFlowIntent',
    samples: ['Flusso vocale'],
  },
  ja: {
    name: 'VoiceFlowIntent',
    samples: ['音声フロー'],
  },
  pt: {
    name: 'VoiceFlowIntent',
    samples: ['Fluxo de voz'],
  },
  hi: {
    name: 'VoiceFlowIntent',
    samples: ['आवाज का प्रवाह'],
  },
};
