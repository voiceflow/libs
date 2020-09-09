export enum GoogleIntent {
  CANCEL = 'actions.intent.CANCEL',
  MAIN = 'actions.intent.MAIN',
  MEDIA_PAUSE = 'actions.intent.MEDIA_STATUS_PAUSED',
  MEDIA_STOP = 'actions.intent.MEDIA_STATUS_STOPPED',

  VOICEFLOW = 'VoiceFlowIntent',
}

export const VALID_UTTERANCES =
  "a-zA-Z\xC0-\xFF\u0100-\u017F\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFF9F\u4E00-\u9FAF\u3400-\u4DBF._'\\- \\[\\]";

export const BUILT_IN_INTENTS_GOOGLE = [
  {
    name: GoogleIntent.CANCEL,
    slots: [],
  },
  {
    name: GoogleIntent.MAIN,
    slots: [],
  },
  {
    name: GoogleIntent.MEDIA_PAUSE,
    slots: [],
  },
  {
    name: GoogleIntent.MEDIA_STOP,
    slots: [],
  },
];

export const DEFAULT_INTENTS = {
  // English (AU,CA,US,UK,IN)
  en: {
    defaults: [
      {
        name: GoogleIntent.CANCEL,
        samples: ['cancel'],
      },
    ],
  },
  // French (CA,FR)
  fr: {
    defaults: [
      {
        name: GoogleIntent.CANCEL,
        samples: ['annuler', 'annule'],
      },
    ],
  },
  // Japanese (JA)
  ja: {
    defaults: [
      {
        name: GoogleIntent.CANCEL,
        samples: ['取り消す', 'キャンセル', '取り消し', '取消'],
      },
    ],
  },
  // Italian (IT)
  it: {
    defaults: [
      {
        name: GoogleIntent.CANCEL,
        samples: ['cancellare', 'annullare', 'disdire', 'sopprimere', 'rescindre', 'chiudere', 'abrogare', 'obliterare'],
      },
    ],
  },
  // Spanish (ES,MX)
  es: {
    defaults: [
      {
        name: GoogleIntent.CANCEL,
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
    ],
  },
  // German (DE)
  de: {
    defaults: [
      {
        name: GoogleIntent.CANCEL,
        samples: ['stornieren', 'aufheben', 'kündigen', 'annullieren', 'beenden', 'absagen', 'abbestellen', 'abmelden', 'auflösen', 'zurücknehmen'],
      },
    ],
  },
  // Portuguese (PT)
  pt: {
    defaults: [
      {
        name: GoogleIntent.CANCEL,
        samples: ['cancelar', 'anular', 'suspender'],
      },
    ],
  },
  // Hindi (IN)
  hi: {
    defaults: [
      {
        name: GoogleIntent.CANCEL,
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
