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
      samples: [
        "s'arrêter",
        'arrêter',
        'arrête',
        'stop',
        'fin',
        'cesser',
        'mettre fin',
        'stopper',
        'mettre un terme',
        'interrompre',
      ],
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
      samples: [
        'stornieren',
        'aufheben',
        'kündigen',
        'annullieren',
        'beenden',
        'absagen',
        'abbestellen',
        'abmelden',
        'auflösen',
        'zurücknehmen',
      ],
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
        'स्टॉप्',
      ],
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

  [Language.BG]: [
    { name: IntentName.NO, samples: ['не', 'няма', 'никак', 'не става', 'негативно'] },
    {
      name: IntentName.YES,
      samples: ['да', 'сигурно', 'окей', 'добре', 'дали', 'със сигурност'],
    },
    {
      name: IntentName.STOP,
      samples: ['спри', 'стоп'],
    },
    {
      name: IntentName.NEXT,
      samples: ['следващо', 'напред', 'наред'],
    },
    {
      name: IntentName.HELP,
      samples: ['помощ', 'помогни ми', 'трябва ми помощ'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['пауза', 'спри'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['отмени', 'отказ'],
    },
    {
      name: IntentName.RESUME,
      samples: ['продължи', 'възобнови'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['повтори', 'отново', 'повтори отначало'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['предишно', 'назад', 'обратно'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['започни отначало', 'рестартирай'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],

  // ca-ES
  [Language.CA]: [
    { name: IntentName.NO, samples: ['no', 'no', 'no', 'no', 'de cap manera', 'negatiu'] },
    {
      name: IntentName.YES,
      samples: ['sí', 'sí', "d'acord", "d'acord", 'sí', 'sí', 'clar'],
    },
    {
      name: IntentName.STOP,
      samples: ['atura'],
    },
    {
      name: IntentName.NEXT,
      samples: ['següent'],
    },
    {
      name: IntentName.HELP,
      samples: ['ajuda', 'ajuda', 'necessito ajuda'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pausa'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['cancel·la'],
    },
    {
      name: IntentName.RESUME,
      samples: ['continua'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['repeteix', 'una altra vegada', 'digues-ho una altra vegada'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['anterior'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['comença de nou', 'reinicia'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
  // 'cs-CZ'
  [Language.CS]: [
    {
      name: IntentName.NO,
      samples: ['ne', 'nechci', 'nic', 'nikoliv', 'nebylo by vhodné'],
    },
    {
      name: IntentName.YES,
      samples: ['ano', 'jistě', 'dobře', 'jo', 'určitě'],
    },
    {
      name: IntentName.STOP,
      samples: ['zastavit', 'přestat', 'skončit'],
    },
    {
      name: IntentName.NEXT,
      samples: ['další', 'dál', 'pokračovat'],
    },
    {
      name: IntentName.HELP,
      samples: ['pomoc', 'potřebuji pomoc', 'nápověda'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pauza', 'pozastavit', 'zastavit na chvíli'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['zrušit', 'zrušení', 'odvolat'],
    },
    {
      name: IntentName.RESUME,
      samples: ['obnovit', 'pokračovat', 'znovu spustit'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['opakovat', 'znovu', 'říci znovu'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['předchozí', 'zpět', 'zpět na předchozí'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['začít znovu', 'restartovat'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
  // 'da-DK'
  [Language.DA]: [
    {
      name: IntentName.NO,
      samples: ['nej', 'næ', 'nej tak', 'negative'],
    },
    {
      name: IntentName.YES,
      samples: ['ja', 'jo', 'okay', 'selvfølgelig'],
    },
    {
      name: IntentName.STOP,
      samples: ['stop'],
    },
    {
      name: IntentName.NEXT,
      samples: ['næste'],
    },
    {
      name: IntentName.HELP,
      samples: ['hjælp', 'hjælp mig', 'jeg har brug for hjælp'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pause'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['annuller'],
    },
    {
      name: IntentName.RESUME,
      samples: ['genoptag', 'fortsæt'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['gentag', 'igen', 'sig det igen'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['forrige'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['start forfra', 'genstart'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],

  // et-EE
  [Language.ET]: [
    {
      name: IntentName.NO,
      samples: ['ei', 'ei ole', 'ei taha', 'mitte', 'negatiivne'],
    },
    {
      name: IntentName.YES,
      samples: ['jah', 'okei', 'ok', 'kindlasti', 'jah-jah', 'jah, muidugi'],
    },
    {
      name: IntentName.STOP,
      samples: ['peata', 'lõpeta', 'stopp'],
    },
    {
      name: IntentName.NEXT,
      samples: ['järgmine', 'edasi'],
    },
    {
      name: IntentName.HELP,
      samples: ['abi', 'aita mind', 'vajan abi'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['paus', 'peatus'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['tühista', 'katkesta'],
    },
    {
      name: IntentName.RESUME,
      samples: ['jätka', 'taasalusta'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['korda', 'uuesti', 'ütle uuesti'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['eelmine', 'tagasi'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['alusta otsast', 'alusta uuesti'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
  // he-IL
  [Language.HE]: [
    {
      name: IntentName.NO,
      samples: ['לא', 'לא תודה', 'לא לבא', 'לאה', 'אין דרך', 'שלילי'],
    },
    {
      name: IntentName.YES,
      samples: ['כן', 'כן בוודאי', 'אוקי', 'בסדר', 'אכן', 'כן כן', 'בטח'],
    },
    {
      name: IntentName.STOP,
      samples: ['עצור', 'תפסיק'],
    },
    {
      name: IntentName.NEXT,
      samples: ['הבא', 'הבא בבקשה', 'למעבר'],
    },
    {
      name: IntentName.HELP,
      samples: ['עזרה', 'עזור לי', 'אני צריך עזרה'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['השהה', 'עצור'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['בטל', 'בטל את הפעולה'],
    },
    {
      name: IntentName.RESUME,
      samples: ['המשך', 'חזור לפעולה'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['חזור', 'שוב', 'אמור שוב'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['הקודם', 'הקודם בבקשה', 'חזור אחורה'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['התחל מחדש', 'התחל שוב', 'אתחל'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
  // hu-HU
  [Language.HU]: [
    {
      name: IntentName.NO,
      samples: ['nem', 'nincs', 'nem', 'nem', 'nincs mód', 'negatív'],
    },
    {
      name: IntentName.YES,
      samples: ['igen', 'igen', 'rendben', 'oké', 'igen', 'igen', 'biztos'],
    },
    {
      name: IntentName.STOP,
      samples: ['állj', 'állj le', 'megállás'],
    },
    {
      name: IntentName.NEXT,
      samples: ['következő'],
    },
    {
      name: IntentName.HELP,
      samples: ['segítség', 'segíts nekem', 'segítség kell'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['szünet', 'szüneteltetés'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['mégse', 'mégsem', 'megszüntetés'],
    },
    {
      name: IntentName.RESUME,
      samples: ['folytatás', 'folytat', 'újrakezdés'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['ismételd', 'még egyszer', 'ismételd meg'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['előző'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['újrakezdés', 'újraindítás'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
  // pl-PL
  [Language.PL]: [
    {
      name: IntentName.NO,
      samples: ['nie', 'nie ma', 'nigdy', 'niechęć', 'nie możliwe', 'negatywne'],
    },
    {
      name: IntentName.YES,
      samples: ['tak', 'także', 'ok', 'dobrze', 'oczywiście', 'jasne', 'pewnie'],
    },
    {
      name: IntentName.STOP,
      samples: ['stop', 'zatrzymaj'],
    },
    {
      name: IntentName.NEXT,
      samples: ['następne', 'dalej'],
    },
    {
      name: IntentName.HELP,
      samples: ['pomoc', 'pomóż mi', 'potrzebuję pomocy'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pauza', 'zatrzymaj'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['anuluj'],
    },
    {
      name: IntentName.RESUME,
      samples: ['wznów', 'kontynuuj'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['powtórz', 'ponów', 'powiedz ponownie'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['poprzednie', 'co było wcześniej'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['zacznij od nowa', 'zrestartuj'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
  // ro-RO
  [Language.RO]: [
    {
      name: IntentName.NO,
      samples: ['nu', 'niciun fel', 'nici o șansă', 'negativ'],
    },
    {
      name: IntentName.YES,
      samples: ['da', 'bine', 'ok', 'bineînțeles', 'sigur'],
    },
    {
      name: IntentName.STOP,
      samples: ['oprește', 'stop'],
    },
    {
      name: IntentName.NEXT,
      samples: ['următorul', 'următor'],
    },
    {
      name: IntentName.HELP,
      samples: ['ajutor', 'ajută-mă', 'am nevoie de ajutor'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['pauză', 'oprește'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['anulează', 'renunță', 'cancel'],
    },
    {
      name: IntentName.RESUME,
      samples: ['continuă', 'reluare'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['repetă', 'iarăși', 'spune din nou'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['anteriorul', 'precedent'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['începe din nou', 'restartează', 'reia de la început'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
  // ru-RU
  [Language.RU]: [
    {
      name: IntentName.NO,
      samples: ['нет', 'неа', 'нетушки', 'ни', 'нисколько', 'отрицание'],
    },
    {
      name: IntentName.YES,
      samples: ['да', 'ага', 'окей', 'ладно', 'угу', 'понятно', 'конечно'],
    },
    {
      name: IntentName.STOP,
      samples: ['стоп', 'прекратить'],
    },
    {
      name: IntentName.NEXT,
      samples: ['следующий', 'далее', 'перейти дальше'],
    },
    {
      name: IntentName.HELP,
      samples: ['помощь', 'помогите', 'мне нужна помощь'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['пауза', 'поставь на паузу'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['отмена', 'отмени'],
    },
    {
      name: IntentName.RESUME,
      samples: ['продолжить', 'возобновить'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['повтори', 'ещё раз', 'повтори снова'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['предыдущий', 'вернуться назад'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['начать заново', 'рестарт'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
  // uk-UA
  [Language.UK]: [
    {
      name: IntentName.NO,
      samples: ['ні', 'немає', 'ніколи', 'ніхто', 'ні в якому разі', 'негативно'],
    },
    {
      name: IntentName.YES,
      samples: ['так', 'ага', 'добре', 'окей', 'йупі', 'так', 'впевнений'],
    },
    {
      name: IntentName.STOP,
      samples: ['зупинити'],
    },
    {
      name: IntentName.NEXT,
      samples: ['далі'],
    },
    {
      name: IntentName.HELP,
      samples: ['допомога', 'допоможіть мені', 'мені потрібна допомога'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['пауза'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['скасувати'],
    },
    {
      name: IntentName.RESUME,
      samples: ['відновити'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['повторити', 'знову', 'повторіть ще раз'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['попередній'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['почати з початку', 'перезапустити'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
  // vi-VN
  [Language.VI]: [
    {
      name: IntentName.NO,
      samples: ['không', 'ko', 'hông', 'không phải', 'no way', 'phủ định'],
    },
    {
      name: IntentName.YES,
      samples: ['có', 'ừ', 'được', 'đúng', 'yup', 'vâng', 'chắc'],
    },
    {
      name: IntentName.STOP,
      samples: ['dừng', 'stop'],
    },
    {
      name: IntentName.NEXT,
      samples: ['tiếp theo', 'next'],
    },
    {
      name: IntentName.HELP,
      samples: ['giúp đỡ', 'giúp tôi', 'tôi cần giúp đỡ'],
    },
    {
      name: IntentName.PAUSE,
      samples: ['tạm dừng', 'pause'],
    },
    {
      name: IntentName.CANCEL,
      samples: ['hủy bỏ', 'cancel'],
    },
    {
      name: IntentName.RESUME,
      samples: ['tiếp tục', 'resume'],
    },
    {
      name: IntentName.REPEAT,
      samples: ['lặp lại', 'lại', 'nói lại'],
    },
    {
      name: IntentName.PREVIOUS,
      samples: ['trước đó', 'previous'],
    },
    {
      name: IntentName.START_OVER,
      samples: ['bắt đầu lại', 'khởi đầu lại'],
    },
    {
      name: IntentName.NONE,
      samples: [],
    },
  ],
};
