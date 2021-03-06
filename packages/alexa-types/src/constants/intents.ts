import { BuiltinIntent } from '@voiceflow/common';
import { VoiceflowConstants } from '@voiceflow/voiceflow-types';
import { v1 } from 'ask-smapi-model';

export type InterfaceType = v1.skill.Manifest.Interface['type'];

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

export enum IntentPrefix {
  AMAZON = 'AMAZON',
  CUSTOM = 'CUSTOM',
  CAPTURE = 'CAPTURE',
}

export interface DefaultIntent extends VoiceflowConstants.DefaultIntent {
  keep?: string[];
}

export const INTERFACE_INTENTS: Partial<Record<InterfaceType, { name: AmazonIntent }[]>> = {
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

export const BUILT_IN_INTENTS: BuiltinIntent[] = [
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

export const DEFAULT_INTENTS: Record<string, { defaults: DefaultIntent[]; builtIns: DefaultIntent[] }> = {
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
    builtIns: [
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
        samples: ["s'arr??ter", 'arr??ter', 'arr??te', 'stop', 'fin', 'cesser', 'mettre fin', 'stopper', 'mettre un terme', 'interrompre'],
      },
      {
        name: AmazonIntent.YES,
        samples: ['oui', 'yep', 'ok', 'bien s??r', 'ouais', 'ouaip', 'exactement', 'correct', 'okay', "d'accord"],
        keep: ['oui'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['non', 'nan', 'absolument pas', 'hors de question', 'bien s??r que non'],
      },
    ],
    builtIns: [
      {
        name: AmazonIntent.REPEAT,
        samples: [
          'repeat',
          'est-ce que tu peux r??p??ter',
          'r??p??te',
          'tu peux r??p??ter',
          'dis-le ?? nouveau',
          'tu peux le redire',
          'redire ??a',
          'r??p??ter ??a',
        ],
      },
    ],
  },
  // Japanese (JA)
  ja: {
    defaults: [
      {
        name: AmazonIntent.CANCEL,
        samples: ['????????????', '???????????????', '????????????', '??????'],
      },
      {
        name: AmazonIntent.HELP,
        samples: [
          '?????????',
          '?????????',
          '????????????',
          '????????????',
          '?????????',
          '?????????',
          '??????',
          '??????',
          '???',
          '??????',
          '??????',
          '?????????',
          '??????',
          '??????',
          '??????',
          '???',
          '?????????',
        ],
      },
      {
        name: AmazonIntent.STOP,
        samples: [
          '?????????',
          '???????????????',
          '??????',
          '????????????',
          '?????????',
          '?????????',
          '??????',
          '????????????',
          '?????????',
          '?????????',
          '????????????',
          '??????',
          '??????',
          '???????????????',
        ],
      },
      {
        name: AmazonIntent.YES,
        samples: ['yes', '??????', '??????', '????????????'],
        keep: ['??????'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['no', '?????????', '??????????????????', '????????????????????????', '??????', '???', '??????'],
      },
    ],
    builtIns: [
      {
        name: AmazonIntent.REPEAT,
        samples: ['repeat', '????????????', '????????????', '????????????', '??????'],
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
          'aiuto',
          'la assistenza',
          'il aiuto',
          'il soccorso',
          'lo manforte',
          'la persona di servizio',
          'aiutare',
          'aiutami',
          'fare a meno di',
          'contribuire a',
          'assistere',
          'servire',
        ],
      },
      {
        name: AmazonIntent.STOP,
        samples: [
          'stop',
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
        samples: ['no', 'il no', 'il rifiuto', 'la negazione', 'nessuno'],
      },
    ],
    builtIns: [
      {
        name: AmazonIntent.REPEAT,
        samples: ['ripetere', 'la ripetizione'],
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
          'dar anulaci??n',
          'realizar anulaci??n',
          'hacer anulaci??n',
          'hacer dar anulaci??n',
          'noun la cancelaci??n',
          'la anulaci??n',
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
        samples: ['yes', 'si', 's??', 'decir si'],
        keep: ['s??'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['no', 'ninguno', 'imposible', 'prohibido', 'la negativa', 'el voto negativo', 'el voto en contra'],
      },
    ],
    builtIns: [
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
        samples: ['stornieren', 'aufheben', 'k??ndigen', 'annullieren', 'beenden', 'absagen', 'abbestellen', 'abmelden', 'aufl??sen', 'zur??cknehmen'],
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
          'aufh??ren',
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
    builtIns: [
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
        samples: ['no', 'n??o', 'negativa'],
      },
    ],
    builtIns: [
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
          '???????????? ?????????',
          '???????????? ????????????',
          '???????????? ?????? ??????',
          '?????????????????? ?????????',
          '?????????????????? ????????????',
          '?????????????????? ?????? ??????',
          '????????? ??????',
          '????????? ??????',
          '????????? ????????????',
          '???????????? ??????',
          '???????????? ??????',
          '???????????? ????????????',
          '?????????????????????', // cancel and variations below
          '????????????????????? ?????????',
          '????????????????????? ????????????',
          '????????????????????? ?????? ??????',
        ],
      },
      {
        name: AmazonIntent.HELP,
        samples: [
          '?????????',
          '????????? ?????????',
          '????????? ????????????',
          '????????? ?????? ??????',
          '??????????????????',
          '?????????????????? ?????????',
          '?????????????????? ????????????',
          '?????????????????? ?????? ??????',
          '???????????????',
          '??????????????? ?????????',
          '??????????????? ????????????',
          '??????????????? ?????? ??????',
          '??????????????????', // help and variations below
          '?????????????????? ?????????',
          '?????????????????? ????????????',
        ],
      },
      {
        name: AmazonIntent.STOP,
        samples: [
          '???????????????',
          '???????????????',
          '???????????????',
          '????????????',
          '?????????',
          '???????????????',
          '????????? ????????????',
          '?????????',
          '????????? ?????????',
          '????????? ?????? ??????',
          '????????? ????????????',
          '??????????????????', // stop
        ],
      },
      {
        name: AmazonIntent.YES,
        samples: [
          '?????????',
          '?????????',
          '???????????????',
          '???????????????',
          '????????? ??????',
          '?????????',
          '??????????????? ??????',
          '???????????????',
          '????????? ??????',
          '?????????',
          '??????????????? ????????? ??????',
          '???????????????',
          '?????????????????????',
          '?????? ???????????????', // alright
          '?????????????????????????????????', // definitely
          '????????????', // yes
          '?????????', // yeah
          '?????????', // yup
          '????????????', // yep
          '?????????', // sure
          '?????????', // okay
        ],
        keep: ['?????????'],
      },
      {
        name: AmazonIntent.NO,
        samples: ['????????????', '??????', '????????????????????????', '??????', '????????????'], // negative, no, nope
      },
    ],
    builtIns: [
      {
        name: AmazonIntent.REPEAT,
        samples: [
          '????????? ??????',
          '????????? ??????????????????',
          '????????? ?????? ??????????????????',
          '????????? ????????????',
          '????????? ?????? ????????????',
          '????????? ?????????',
          '????????? ?????? ????????????',
          '?????????????????? ??????',
          '?????????????????? ?????????',
          '?????????????????? ?????? ?????????',
          '?????????????????? ????????????',
          '?????????????????? ?????? ????????????',
          '?????????????????? ????????????',
          '?????????????????? ?????? ????????????',
          '?????????????????? ??????????????????',
          '?????????????????? ?????? ??????????????????',
          '?????????????????????',
          '?????? ????????? ??????',
          '??????????????????', // repeat and variations below
          '?????????????????? ????????????',
        ],
      },
    ],
  },
};

export const CATCH_ALL_INTENT: Record<string, DefaultIntent> = {
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
    samples: ['???????????????'],
  },
  pt: {
    name: 'VoiceFlowIntent',
    samples: ['Fluxo de voz'],
  },
  hi: {
    name: 'VoiceFlowIntent',
    samples: ['???????????? ?????? ??????????????????'],
  },
};
