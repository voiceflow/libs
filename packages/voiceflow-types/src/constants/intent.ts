import { Language } from './base';

export enum IntentName {
  NO = 'VF.NO',
  YES = 'VF.YES',
  STOP = 'VF.STOP',
  NEXT = 'VF.NEXT',
  HELP = 'VF.HELP',
  PAUSE = 'VF.PAUSE',
  CANCEL = 'VF.CANCEL',
  RESUME = 'VF.RESUME',
  REPEAT = 'VF.REPEAT',
  PREVIOUS = 'VF.PREVIOUS',
  START_OVER = 'VF.START_OVER',
  NONE = 'None',
}

export interface DefaultIntent {
  name: string;
  samples: string[];
}

export const findDefaultIntent = (language: Language, name: string): DefaultIntent | undefined =>
  DEFAULT_INTENTS_MAP?.[language]?.find((intent) => intent.name === name);

export const DEFAULT_INTENTS_MAP: Record<string, DefaultIntent[]> = {
  // English (AU,CA,US,UK,IN)
  [Language.EN]: [
    {
      name: IntentName.NO,
      samples: ['no', 'nope', 'nay', 'nah', 'no way', 'negative'],
    },
    {
      name: IntentName.YES,
      samples: ['yes', 'yea', 'ok', 'okay', 'yup', 'ya', 'sure'],
    },
    {
      name: IntentName.STOP,
      samples: ['stop'],
    },
    {
      name: IntentName.NEXT,
      samples: ['next'],
    },
    {
      name: IntentName.HELP,
      samples: ['help', 'help me', 'i need help'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pause'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['cancel'],
    },
    {
      name: IntentName.RESUME,
      samples: ['resume'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['repeat', 'again', 'say again'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['previous'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['start over', 'restart'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],

  // French (CA,FR)
  [Language.FR]: [
    {
      name: IntentName.NO,
      samples: ['non', 'nan', 'absolument pas', 'hors de question', 'bien sûr que non'],
    },
    {
      name: IntentName.YES,
      samples: ['oui', 'yep', 'ok', 'bien sûr', 'ouais', 'ouaip', 'exactement', 'correct', 'okay', "d'accord"],
    },
    {
      name: IntentName.STOP,
      samples: ["s'arrêter", 'arrêter', 'arrête', 'stop', 'fin', 'cesser', 'mettre fin', 'stopper', 'mettre un terme', 'interrompre'],
    },
    {
      name: IntentName.HELP,
      samples: ['aidez-moi', "l'assistance", 'aider'],
    },
    {
      name: IntentName.NEXT,
      samples: ['prochaine', 'prochain', 'suivant'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pause'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['annuler', 'annule'],
    },
    {
      name: IntentName.RESUME,
      samples: ['reprendre'],
    },
    {
      name: IntentName.REPEAT,
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
    {
      name: IntentName.PREVIOUS,
      samples: ['précédente', 'précédent'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['recommencer', 'redémarrer'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],

  // Japanese (JA)
  [Language.JA]: [
    {
      name: IntentName.NO,
      samples: ['no', 'いいえ', 'そうだはない', 'いやそれどころか', 'ノン', '否', '否や'],
    },
    {
      name: IntentName.YES,
      samples: ['yes', 'はい', 'ええ', 'そうです'],
    },
    {
      name: IntentName.STOP,
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
      name: IntentName.NEXT,
      samples: ['次に', '次'],
    },
    {
      name: IntentName.HELP,
      samples: ['助けて', '手助け', 'アシスト'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['一時停止', '休止'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['取り消す', 'キャンセル', '取り消し', '取消'],
    },
    {
      name: IntentName.RESUME,
      samples: ['再開する'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['repeat', '繰り返す', '引き返す', '折れ返る', '返す'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['前', '以前'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['最初からやり直す', '再起動'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],

  // Italian (IT)
  [Language.IT]: [
    {
      name: IntentName.NO,
      samples: ['no', 'il no', 'il rifiuto', 'la negazione', 'nessuno'],
    },
    {
      name: IntentName.YES,
      samples: ['yes', 'si', 'certo'],
    },
    {
      name: IntentName.STOP,
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
      name: IntentName.NEXT,
      samples: ['prossimo', 'seguente', 'succesivo'],
    },
    {
      name: IntentName.HELP,
      samples: ['aiuto', 'la assistenza', 'aiutami'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pausa', 'la pausa'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['cancellare', 'annullare', 'disdire', 'sopprimere', 'rescindre', 'chiudere', 'abrogare', 'obliterare'],
    },
    {
      name: IntentName.RESUME,
      samples: ['riprendere'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['ripetere', 'la ripetizione'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['precedente'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['ricominciare', 'ricomincia'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],

  // Spanish (ES,MX)
  [Language.ES]: [
    {
      name: IntentName.NO,
      samples: ['no', 'ninguno', 'imposible', 'prohibido', 'la negativa', 'el voto negativo', 'el voto en contra'],
    },
    {
      name: IntentName.YES,
      samples: ['yes', 'si', 'sí', 'decir si'],
    },
    {
      name: IntentName.STOP,
      samples: ['detener', 'dejar', 'parar', 'suspender', 'cesar', 'pararse', 'terminar', 'de alto'],
    },
    {
      name: IntentName.NEXT,
      samples: ['siguiente', 'próximo'],
    },
    {
      name: IntentName.HELP,
      samples: ['ayuda', 'ayuadame'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pausa', 'la pausa'],
    },
    {
      name: IntentName.CANCEL,
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
      name: IntentName.RESUME,
      samples: ['reanudar'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['repeat', 'repetir', 'repetirse', 'reiterar', 'recitar', 'volver a dar'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['previa', 'previo'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['reiniciar'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],

  // German (DE)
  [Language.DE]: [
    {
      name: IntentName.NO,
      samples: ['no', 'nein', 'kein', 'nicht'],
    },
    {
      name: IntentName.YES,
      samples: ['yes', 'ja', 'doch', 'jawohl'],
    },
    {
      name: IntentName.STOP,
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
      name: IntentName.NEXT,
      samples: ['nächster', 'nächste', 'neben'],
    },
    {
      name: IntentName.HELP,
      samples: ['hilfe', 'hilf mir', 'helfen'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pause', 'pausieren', 'die pause'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['stornieren', 'aufheben', 'kündigen', 'annullieren', 'beenden', 'absagen', 'abbestellen', 'abmelden', 'auflösen', 'zurücknehmen'],
    },
    {
      name: IntentName.RESUME,
      samples: ['wieder aufnehmen', 'fortsetzen', 'fortfahren'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['repeat', 'wiederholen', 'wiedergeben', 'repetieren', 'weitersagen'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['bisherige', 'früher'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['Von vorn anfangen', 'Neustart', 'wieder starten'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],

  // Portuguese (PT)
  [Language.PT]: [
    {
      name: IntentName.NO,
      samples: ['no', 'não', 'negativa'],
    },
    {
      name: IntentName.YES,
      samples: ['yes', 'sim', 'o sim', 'dizer sim'],
    },
    {
      name: IntentName.STOP,
      samples: ['parar', 'terminar', 'impedir', 'fazer parar'],
    },
    {
      name: IntentName.NEXT,
      samples: ['próxima', 'próximo', 'seguinte', 'seguida'],
    },
    {
      name: IntentName.HELP,
      samples: ['socorro', 'me ajude'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pausa', 'pausar'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['cancelar', 'anular', 'suspender'],
    },
    {
      name: IntentName.RESUME,
      samples: ['retomar'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['repeat', 'repetir', 'reiterar', 'refazer', 'amiudar', 'recitar de cor'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['anterior'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['recomeçar', 'reiniciar'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],

  // Hindi (IN)
  [Language.HI]: [
    {
      name: IntentName.NO,
      samples: ['नहीं', 'ना', 'नेगटिव़्', 'नो', 'नोप्'],
    },
    {
      name: IntentName.YES,
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
        'ऑल राइट्',
        'डेफ़िनिट्ली',
        'येस्',
        'येअ',
        'यप्',
        'येप्',
        'शुअ',
        'ओके',
      ],
    },
    {
      name: IntentName.STOP,
      samples: ['रुकें', 'रोकना', 'विराम', 'रुको', 'रुक', 'रुकना', 'रुक जाना', 'बंद', 'बंद करो', 'बंद कर दो', 'बंद करना', 'स्टॉप्'],
    },
    {
      name: IntentName.NEXT,
      samples: ['आगे', 'अगला', 'आगामी', 'बाद'],
    },
    {
      name: IntentName.HELP,
      samples: ['मदद', 'मेरी मदद करो'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['ठहराव', 'विराम'],
    },
    {
      name: IntentName.CANCEL,
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
        'कैन्सल्',
        'कैन्सल् करो',
        'कैन्सल् करना',
        'कैन्सल् कर दो',
      ],
    },
    {
      name: IntentName.RESUME,
      samples: ['दुबारा आरम्भ करना', 'फिर शुरू से करना', 'फिर से शुरू करने के लिए'],
    },
    {
      name: IntentName.REPEAT,
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
        'रिपीट्',
        'रिपीट् करना',
      ],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['पिछला', 'पूर्व'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['प्रारंभ करें', 'पुनर्प्रारंभ करें'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
};
