// Egyptian National Media Authority (Maspero) directory.
// Station identities and official URLs are catalogued independently from playable streams.
// Frequencies below are Cairo-area examples, not national coverage.
// A candidate source is NEVER considered verified until HTMLAudioElement reaches playback.
export const masperoStations=[
  {id:"eg:maspero:quran", name:"Holy Quran Radio", ar:"إذاعة القرآن الكريم", alias:"quran koran koran kareem قرآن القران الكريم 98.2", band:"FM", freq:982, genre:"Quran · Religion", frequencies:{FM:[982]}, official:"https://www.maspero.eg/stream/7", urls:["https://stream.radiojar.com/8s5u5tpdtwzuv"],sourceNote:"Third-party stream candidate; verify that it carries the Maspero broadcast"},
  {id:"eg:maspero:radio-masr", name:"Radio Masr", ar:"إذاعة راديو مصر", alias:"masr مصر 88.7", band:"FM", freq:887, genre:"News · Talk", frequencies:{FM:[887]}, official:"https://www.maspero.eg/stream/8", urls:[]},
  {id:"eg:maspero:voice-arabs", name:"Voice of the Arabs", ar:"إذاعة صوت العرب", alias:"sawt al arab صوت العرب 106.3 621", band:"FM", freq:1063, genre:"News · Culture", frequencies:{FM:[1063],AM:[621]}, official:"https://www.maspero.eg/stream/9", urls:[]},
  {id:"eg:maspero:general", name:"General Programme", ar:"إذاعة البرنامج العام", alias:"general programme program 107.4 819 البرنامج العام", band:"FM", freq:1074, genre:"General · News", frequencies:{FM:[1074],AM:[819]}, official:"https://www.maspero.eg/stream/10", urls:[]},
  {id:"eg:maspero:youth-sports", name:"Youth & Sports", ar:"إذاعة الشباب والرياضة", alias:"shabab sports شباب رياضة 108", band:"FM", freq:1080, genre:"Sports · Talk", frequencies:{FM:[1080]}, official:"https://www.maspero.eg/stream/11", urls:[]},
  {id:"eg:maspero:cultural", name:"Cultural Programme", ar:"إذاعة البرنامج الثقافي", alias:"cultural thakafi ثقافي دراما 91.5", band:"FM", freq:915, genre:"Culture · Drama", frequencies:{FM:[915]}, official:"https://www.maspero.eg/stream/12", urls:[]},
  {id:"eg:maspero:songs", name:"Egyptian Songs Radio", ar:"إذاعة الأغاني", alias:"aghani alaghani songs الاغاني أغاني 105.8", band:"FM", freq:1058, genre:"Egyptian Classics", frequencies:{FM:[1058]}, official:"https://www.maspero.eg/stream/13", urls:[]},
  {id:"eg:maspero:cairo", name:"Greater Cairo Radio", ar:"إذاعة القاهرة الكبرى", alias:"cairo alqahera القاهرة الكبرى 102.2", band:"FM", freq:1022, genre:"Local · News", frequencies:{FM:[1022]}, official:"https://www.maspero.eg/stream/14", urls:[]},
  {id:"eg:maspero:middle-east", name:"Middle East Radio", ar:"إذاعة الشرق الأوسط", alias:"middle east sharq awsat الشرق الاوسط 89.5", band:"FM", freq:895, genre:"Entertainment · Talk", frequencies:{FM:[895]}, official:"https://www.maspero.eg/stream/16", urls:[]},
  {id:"eg:maspero:european", name:"European Programme", ar:"إذاعة البرنامج الأوروبي", alias:"european programme البرنامج الاوروبي", band:"WEB", freq:null, genre:"European Languages", frequencies:{}, official:"https://www.maspero.eg/stream/18", urls:[]},
  {id:"eg:maspero:directed-2", name:"External Services 2", ar:"الإذاعات الموجهة ٢", alias:"directed broadcasting الموجهة", band:"WEB", freq:null, genre:"International Service", frequencies:{}, official:"https://www.maspero.eg/stream/22", urls:[]},
  {id:"eg:maspero:directed-1", name:"External Services 1", ar:"الإذاعات الموجهة ١", alias:"directed broadcasting الموجهة", band:"WEB", freq:null, genre:"International Service", frequencies:{}, official:"https://www.maspero.eg/stream/23", urls:[]},
  {id:"eg:maspero:educational", name:"Educational Radio", ar:"إذاعة التعليمية", alias:"educational ta3leem تعليمية", band:"WEB", freq:null, genre:"Education", frequencies:{}, official:"https://www.maspero.eg/stream/24", urls:[]},
  {id:"eg:maspero:music", name:"Music Programme", ar:"إذاعة البرنامج الموسيقي", alias:"egyptian music programme 98.8 music موسيقى", band:"FM", freq:988, genre:"Classical · Music", frequencies:{FM:[988]}, official:"https://www.maspero.eg/stream", urls:[]}
];
