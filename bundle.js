(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _randomWords = require('random-words');

var _randomWords2 = _interopRequireDefault(_randomWords);

var _draggable = require('./src/draggable');

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wordcount = 5000;

function createBox() {
  var box = document.createElement("div");
  box.setAttribute("class", "box");
  return (0, _draggable2.default)(box);
}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.getElementsByTagName("body")[0];
  var container = document.createElement("div");
  var words = (0, _randomWords2.default)({ exactly: wordcount, join: ' ' });
  var shape = document.createElement("div");

  var box = createBox();

  var textContainer = document.createTextNode(words);
  container.appendChild(box);
  container.appendChild(textContainer);
  body.appendChild(container);
});

},{"./src/draggable":3,"random-words":2}],2:[function(require,module,exports){
var wordList = [
  // Borrowed from xkcd password generator which borrowed it from wherever
  "ability","able","aboard","about","above","accept","accident","according",
  "account","accurate","acres","across","act","action","active","activity",
  "actual","actually","add","addition","additional","adjective","adult","adventure",
  "advice","affect","afraid","after","afternoon","again","against","age",
  "ago","agree","ahead","aid","air","airplane","alike","alive",
  "all","allow","almost","alone","along","aloud","alphabet","already",
  "also","although","am","among","amount","ancient","angle","angry",
  "animal","announced","another","answer","ants","any","anybody","anyone",
  "anything","anyway","anywhere","apart","apartment","appearance","apple","applied",
  "appropriate","are","area","arm","army","around","arrange","arrangement",
  "arrive","arrow","art","article","as","aside","ask","asleep",
  "at","ate","atmosphere","atom","atomic","attached","attack","attempt",
  "attention","audience","author","automobile","available","average","avoid","aware",
  "away","baby","back","bad","badly","bag","balance","ball",
  "balloon","band","bank","bar","bare","bark","barn","base",
  "baseball","basic","basis","basket","bat","battle","be","bean",
  "bear","beat","beautiful","beauty","became","because","become","becoming",
  "bee","been","before","began","beginning","begun","behavior","behind",
  "being","believed","bell","belong","below","belt","bend","beneath",
  "bent","beside","best","bet","better","between","beyond","bicycle",
  "bigger","biggest","bill","birds","birth","birthday","bit","bite",
  "black","blank","blanket","blew","blind","block","blood","blow",
  "blue","board","boat","body","bone","book","border","born",
  "both","bottle","bottom","bound","bow","bowl","box","boy",
  "brain","branch","brass","brave","bread","break","breakfast","breath",
  "breathe","breathing","breeze","brick","bridge","brief","bright","bring",
  "broad","broke","broken","brother","brought","brown","brush","buffalo",
  "build","building","built","buried","burn","burst","bus","bush",
  "business","busy","but","butter","buy","by","cabin","cage",
  "cake","call","calm","came","camera","camp","can","canal",
  "cannot","cap","capital","captain","captured","car","carbon","card",
  "care","careful","carefully","carried","carry","case","cast","castle",
  "cat","catch","cattle","caught","cause","cave","cell","cent",
  "center","central","century","certain","certainly","chain","chair","chamber",
  "chance","change","changing","chapter","character","characteristic","charge","chart",
  "check","cheese","chemical","chest","chicken","chief","child","children",
  "choice","choose","chose","chosen","church","circle","circus","citizen",
  "city","class","classroom","claws","clay","clean","clear","clearly",
  "climate","climb","clock","close","closely","closer","cloth","clothes",
  "clothing","cloud","club","coach","coal","coast","coat","coffee",
  "cold","collect","college","colony","color","column","combination","combine",
  "come","comfortable","coming","command","common","community","company","compare",
  "compass","complete","completely","complex","composed","composition","compound","concerned",
  "condition","congress","connected","consider","consist","consonant","constantly","construction",
  "contain","continent","continued","contrast","control","conversation","cook","cookies",
  "cool","copper","copy","corn","corner","correct","correctly","cost",
  "cotton","could","count","country","couple","courage","course","court",
  "cover","cow","cowboy","crack","cream","create","creature","crew",
  "crop","cross","crowd","cry","cup","curious","current","curve",
  "customs","cut","cutting","daily","damage","dance","danger","dangerous",
  "dark","darkness","date","daughter","dawn","day","dead","deal",
  "dear","death","decide","declared","deep","deeply","deer","definition",
  "degree","depend","depth","describe","desert","design","desk","detail",
  "determine","develop","development","diagram","diameter","did","die","differ",
  "difference","different","difficult","difficulty","dig","dinner","direct","direction",
  "directly","dirt","dirty","disappear","discover","discovery","discuss","discussion",
  "disease","dish","distance","distant","divide","division","do","doctor",
  "does","dog","doing","doll","dollar","done","donkey","door",
  "dot","double","doubt","down","dozen","draw","drawn","dream",
  "dress","drew","dried","drink","drive","driven","driver","driving",
  "drop","dropped","drove","dry","duck","due","dug","dull",
  "during","dust","duty","each","eager","ear","earlier","early",
  "earn","earth","easier","easily","east","easy","eat","eaten",
  "edge","education","effect","effort","egg","eight","either","electric",
  "electricity","element","elephant","eleven","else","empty","end","enemy",
  "energy","engine","engineer","enjoy","enough","enter","entire","entirely",
  "environment","equal","equally","equator","equipment","escape","especially","essential",
  "establish","even","evening","event","eventually","ever","every","everybody",
  "everyone","everything","everywhere","evidence","exact","exactly","examine","example",
  "excellent","except","exchange","excited","excitement","exciting","exclaimed","exercise",
  "exist","expect","experience","experiment","explain","explanation","explore","express",
  "expression","extra","eye","face","facing","fact","factor","factory",
  "failed","fair","fairly","fall","fallen","familiar","family","famous",
  "far","farm","farmer","farther","fast","fastened","faster","fat",
  "father","favorite","fear","feathers","feature","fed","feed","feel",
  "feet","fell","fellow","felt","fence","few","fewer","field",
  "fierce","fifteen","fifth","fifty","fight","fighting","figure","fill",
  "film","final","finally","find","fine","finest","finger","finish",
  "fire","fireplace","firm","first","fish","five","fix","flag",
  "flame","flat","flew","flies","flight","floating","floor","flow",
  "flower","fly","fog","folks","follow","food","foot","football",
  "for","force","foreign","forest","forget","forgot","forgotten","form",
  "former","fort","forth","forty","forward","fought","found","four",
  "fourth","fox","frame","free","freedom","frequently","fresh","friend",
  "friendly","frighten","frog","from","front","frozen","fruit","fuel",
  "full","fully","fun","function","funny","fur","furniture","further",
  "future","gain","game","garage","garden","gas","gasoline","gate",
  "gather","gave","general","generally","gentle","gently","get","getting",
  "giant","gift","girl","give","given","giving","glad","glass",
  "globe","go","goes","gold","golden","gone","good","goose",
  "got","government","grabbed","grade","gradually","grain","grandfather","grandmother",
  "graph","grass","gravity","gray","great","greater","greatest","greatly",
  "green","grew","ground","group","grow","grown","growth","guard",
  "guess","guide","gulf","gun","habit","had","hair","half",
  "halfway","hall","hand","handle","handsome","hang","happen","happened",
  "happily","happy","harbor","hard","harder","hardly","has","hat",
  "have","having","hay","he","headed","heading","health","heard",
  "hearing","heart","heat","heavy","height","held","hello","help",
  "helpful","her","herd","here","herself","hidden","hide","high",
  "higher","highest","highway","hill","him","himself","his","history",
  "hit","hold","hole","hollow","home","honor","hope","horn",
  "horse","hospital","hot","hour","house","how","however","huge",
  "human","hundred","hung","hungry","hunt","hunter","hurried","hurry",
  "hurt","husband","ice","idea","identity","if","ill","image",
  "imagine","immediately","importance","important","impossible","improve","in","inch",
  "include","including","income","increase","indeed","independent","indicate","individual",
  "industrial","industry","influence","information","inside","instance","instant","instead",
  "instrument","interest","interior","into","introduced","invented","involved","iron",
  "is","island","it","its","itself","jack","jar","jet",
  "job","join","joined","journey","joy","judge","jump","jungle",
  "just","keep","kept","key","kids","kill","kind","kitchen",
  "knew","knife","know","knowledge","known","label","labor","lack",
  "lady","laid","lake","lamp","land","language","large","larger",
  "largest","last","late","later","laugh","law","lay","layers",
  "lead","leader","leaf","learn","least","leather","leave","leaving",
  "led","left","leg","length","lesson","let","letter","level",
  "library","lie","life","lift","light","like","likely","limited",
  "line","lion","lips","liquid","list","listen","little","live",
  "living","load","local","locate","location","log","lonely","long",
  "longer","look","loose","lose","loss","lost","lot","loud",
  "love","lovely","low","lower","luck","lucky","lunch","lungs",
  "lying","machine","machinery","mad","made","magic","magnet","mail",
  "main","mainly","major","make","making","man","managed","manner",
  "manufacturing","many","map","mark","market","married","mass","massage",
  "master","material","mathematics","matter","may","maybe","me","meal",
  "mean","means","meant","measure","meat","medicine","meet","melted",
  "member","memory","men","mental","merely","met","metal","method",
  "mice","middle","might","mighty","mile","military","milk","mill",
  "mind","mine","minerals","minute","mirror","missing","mission","mistake",
  "mix","mixture","model","modern","molecular","moment","money","monkey",
  "month","mood","moon","more","morning","most","mostly","mother",
  "motion","motor","mountain","mouse","mouth","move","movement","movie",
  "moving","mud","muscle","music","musical","must","my","myself",
  "mysterious","nails","name","nation","national","native","natural","naturally",
  "nature","near","nearby","nearer","nearest","nearly","necessary","neck",
  "needed","needle","needs","negative","neighbor","neighborhood","nervous","nest",
  "never","new","news","newspaper","next","nice","night","nine",
  "no","nobody","nodded","noise","none","noon","nor","north",
  "nose","not","note","noted","nothing","notice","noun","now",
  "number","numeral","nuts","object","observe","obtain","occasionally","occur",
  "ocean","of","off","offer","office","officer","official","oil",
  "old","older","oldest","on","once","one","only","onto",
  "open","operation","opinion","opportunity","opposite","or","orange","orbit",
  "order","ordinary","organization","organized","origin","original","other","ought",
  "our","ourselves","out","outer","outline","outside","over","own",
  "owner","oxygen","pack","package","page","paid","pain","paint",
  "pair","palace","pale","pan","paper","paragraph","parallel","parent",
  "park","part","particles","particular","particularly","partly","parts","party",
  "pass","passage","past","path","pattern","pay","peace","pen",
  "pencil","people","per","percent","perfect","perfectly","perhaps","period",
  "person","personal","pet","phrase","physical","piano","pick","picture",
  "pictured","pie","piece","pig","pile","pilot","pine","pink",
  "pipe","pitch","place","plain","plan","plane","planet","planned",
  "planning","plant","plastic","plate","plates","play","pleasant","please",
  "pleasure","plenty","plural","plus","pocket","poem","poet","poetry",
  "point","pole","police","policeman","political","pond","pony","pool",
  "poor","popular","population","porch","port","position","positive","possible",
  "possibly","post","pot","potatoes","pound","pour","powder","power",
  "powerful","practical","practice","prepare","present","president","press","pressure",
  "pretty","prevent","previous","price","pride","primitive","principal","principle",
  "printed","private","prize","probably","problem","process","produce","product",
  "production","program","progress","promised","proper","properly","property","protection",
  "proud","prove","provide","public","pull","pupil","pure","purple",
  "purpose","push","put","putting","quarter","queen","question","quick",
  "quickly","quiet","quietly","quite","rabbit","race","radio","railroad",
  "rain","raise","ran","ranch","range","rapidly","rate","rather",
  "raw","rays","reach","read","reader","ready","real","realize",
  "rear","reason","recall","receive","recent","recently","recognize","record",
  "red","refer","refused","region","regular","related","relationship","religious",
  "remain","remarkable","remember","remove","repeat","replace","replied","report",
  "represent","require","research","respect","rest","result","return","review",
  "rhyme","rhythm","rice","rich","ride","riding","right","ring",
  "rise","rising","river","road","roar","rock","rocket","rocky",
  "rod","roll","roof","room","root","rope","rose","rough",
  "round","route","row","rubbed","rubber","rule","ruler","run",
  "running","rush","sad","saddle","safe","safety","said","sail",
  "sale","salmon","salt","same","sand","sang","sat","satellites",
  "satisfied","save","saved","saw","say","scale","scared","scene",
  "school","science","scientific","scientist","score","screen","sea","search",
  "season","seat","second","secret","section","see","seed","seeing",
  "seems","seen","seldom","select","selection","sell","send","sense",
  "sent","sentence","separate","series","serious","serve","service","sets",
  "setting","settle","settlers","seven","several","shade","shadow","shake",
  "shaking","shall","shallow","shape","share","sharp","she","sheep",
  "sheet","shelf","shells","shelter","shine","shinning","ship","shirt",
  "shoe","shoot","shop","shore","short","shorter","shot","should",
  "shoulder","shout","show","shown","shut","sick","sides","sight",
  "sign","signal","silence","silent","silk","silly","silver","similar",
  "simple","simplest","simply","since","sing","single","sink","sister",
  "sit","sitting","situation","six","size","skill","skin","sky",
  "slabs","slave","sleep","slept","slide","slight","slightly","slip",
  "slipped","slope","slow","slowly","small","smaller","smallest","smell",
  "smile","smoke","smooth","snake","snow","so","soap","social",
  "society","soft","softly","soil","solar","sold","soldier","solid",
  "solution","solve","some","somebody","somehow","someone","something","sometime",
  "somewhere","son","song","soon","sort","sound","source","south",
  "southern","space","speak","special","species","specific","speech","speed",
  "spell","spend","spent","spider","spin","spirit","spite","split",
  "spoken","sport","spread","spring","square","stage","stairs","stand",
  "standard","star","stared","start","state","statement","station","stay",
  "steady","steam","steel","steep","stems","step","stepped","stick",
  "stiff","still","stock","stomach","stone","stood","stop","stopped",
  "store","storm","story","stove","straight","strange","stranger","straw",
  "stream","street","strength","stretch","strike","string","strip","strong",
  "stronger","struck","structure","struggle","stuck","student","studied","studying",
  "subject","substance","success","successful","such","sudden","suddenly","sugar",
  "suggest","suit","sum","summer","sun","sunlight","supper","supply",
  "support","suppose","sure","surface","surprise","surrounded","swam","sweet",
  "swept","swim","swimming","swing","swung","syllable","symbol","system",
  "table","tail","take","taken","tales","talk","tall","tank",
  "tape","task","taste","taught","tax","tea","teach","teacher",
  "team","tears","teeth","telephone","television","tell","temperature","ten",
  "tent","term","terrible","test","than","thank","that","thee",
  "them","themselves","then","theory","there","therefore","these","they",
  "thick","thin","thing","think","third","thirty","this","those",
  "thou","though","thought","thousand","thread","three","threw","throat",
  "through","throughout","throw","thrown","thumb","thus","thy","tide",
  "tie","tight","tightly","till","time","tin","tiny","tip",
  "tired","title","to","tobacco","today","together","told","tomorrow",
  "tone","tongue","tonight","too","took","tool","top","topic",
  "torn","total","touch","toward","tower","town","toy","trace",
  "track","trade","traffic","trail","train","transportation","trap","travel",
  "treated","tree","triangle","tribe","trick","tried","trip","troops",
  "tropical","trouble","truck","trunk","truth","try","tube","tune",
  "turn","twelve","twenty","twice","two","type","typical","uncle",
  "under","underline","understanding","unhappy","union","unit","universe","unknown",
  "unless","until","unusual","up","upon","upper","upward","us",
  "use","useful","using","usual","usually","valley","valuable","value",
  "vapor","variety","various","vast","vegetable","verb","vertical","very",
  "vessels","victory","view","village","visit","visitor","voice","volume",
  "vote","vowel","voyage","wagon","wait","walk","wall","want",
  "war","warm","warn","was","wash","waste","watch","water",
  "wave","way","we","weak","wealth","wear","weather","week",
  "weigh","weight","welcome","well","went","were","west","western",
  "wet","whale","what","whatever","wheat","wheel","when","whenever",
  "where","wherever","whether","which","while","whispered","whistle","white",
  "who","whole","whom","whose","why","wide","widely","wife",
  "wild","will","willing","win","wind","window","wing","winter",
  "wire","wise","wish","with","within","without","wolf","women",
  "won","wonder","wonderful","wood","wooden","wool","word","wore",
  "work","worker","world","worried","worry","worse","worth","would",
  "wrapped","write","writer","writing","written","wrong","wrote","yard",
  "year","yellow","yes","yesterday","yet","you","young","younger",
  "your","yourself","youth","zero","zoo"
];

function words(options) {
  function word() {
    return wordList[randInt(wordList.length)];
  }

  function randInt(lessThan) {
    return Math.floor(Math.random() * lessThan);
  }

  // No arguments = generate one word
  if (typeof(options) === 'undefined') {
    return word();
  }

  // Just a number = return that many words
  if (typeof(options) === 'number') {
    options = { exactly: options };
  }

  // options supported: exactly, min, max, join

  if (options.exactly) {
    options.min = options.exactly;
    options.max = options.exactly;
  }
  var total = options.min + randInt(options.max + 1 - options.min);
  var results = [];
  for (var i = 0; (i < total); i++) {
    results.push(word());
  }
  if (options.join) {
    results = results.join(options.join);
  }
  return results;
}

module.exports = words;
// Export the word list as it is often useful
words.wordList = wordList;


},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = draggable;
function draggable(element) {
  element.addEventListener("mousedown", function (event) {
    event.preventDefault();
    element.dragOffset = {
      left: event.clientX - element.offsetLeft,
      top: event.clientY - element.offsetTop
    };
  });

  element.addEventListener("mouseup", function (event) {
    event.preventDefault();
    element.dragOffset = null;
  });

  element.addEventListener("mousemove", function (event) {
    if (element.dragOffset) {
      element.style.left = event.clientX - element.dragOffset.left;
      element.style.top = event.clientY - element.dragOffset.top;
    }
  });

  return element;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmFuZG9tLXdvcmRzL2luZGV4LmpzIiwic3JjL2RyYWdnYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxZQUFZLElBQVo7O0FBRUosU0FBUyxTQUFULEdBQXFCO0FBQ25CLE1BQUksTUFBTSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBTixDQURlO0FBRW5CLE1BQUksWUFBSixDQUFpQixPQUFqQixFQUEwQixLQUExQixFQUZtQjtBQUduQixTQUFPLHlCQUFVLEdBQVYsQ0FBUCxDQUhtQjtDQUFyQjs7QUFNQSxTQUFTLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELE1BQUksT0FBTyxTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQVAsQ0FEOEM7QUFFbEQsTUFBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFaLENBRjhDO0FBR2xELE1BQUksUUFBUSwyQkFBWSxFQUFFLFNBQVMsU0FBVCxFQUFvQixNQUFNLEdBQU4sRUFBbEMsQ0FBUixDQUg4QztBQUlsRCxNQUFJLFFBQVEsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVIsQ0FKOEM7O0FBTWxELE1BQUksTUFBTSxXQUFOLENBTjhDOztBQVFsRCxNQUFJLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBaEIsQ0FSOEM7QUFTbEQsWUFBVSxXQUFWLENBQXNCLEdBQXRCLEVBVGtEO0FBVWxELFlBQVUsV0FBVixDQUFzQixhQUF0QixFQVZrRDtBQVdsRCxPQUFLLFdBQUwsQ0FBaUIsU0FBakIsRUFYa0Q7Q0FBTixDQUE5Qzs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7a0JDaFN3QjtBQUFULFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QjtBQUN6QyxVQUFRLGdCQUFSLENBQXlCLFdBQXpCLEVBQXNDLFVBQUMsS0FBRCxFQUFXO0FBQy9DLFVBQU0sY0FBTixHQUQrQztBQUUvQyxZQUFRLFVBQVIsR0FBcUI7QUFDbkIsWUFBTSxNQUFNLE9BQU4sR0FBZ0IsUUFBUSxVQUFSO0FBQ3RCLFdBQUssTUFBTSxPQUFOLEdBQWdCLFFBQVEsU0FBUjtLQUZ2QixDQUYrQztHQUFYLENBQXRDLENBRHlDOztBQVN6QyxVQUFRLGdCQUFSLENBQXlCLFNBQXpCLEVBQW9DLFVBQUMsS0FBRCxFQUFXO0FBQzdDLFVBQU0sY0FBTixHQUQ2QztBQUU3QyxZQUFRLFVBQVIsR0FBcUIsSUFBckIsQ0FGNkM7R0FBWCxDQUFwQyxDQVR5Qzs7QUFjekMsVUFBUSxnQkFBUixDQUF5QixXQUF6QixFQUFzQyxVQUFDLEtBQUQsRUFBVztBQUMvQyxRQUFJLFFBQVEsVUFBUixFQUFvQjtBQUN0QixjQUFRLEtBQVIsQ0FBYyxJQUFkLEdBQXFCLE1BQU0sT0FBTixHQUFnQixRQUFRLFVBQVIsQ0FBbUIsSUFBbkIsQ0FEZjtBQUV0QixjQUFRLEtBQVIsQ0FBYyxHQUFkLEdBQW9CLE1BQU0sT0FBTixHQUFnQixRQUFRLFVBQVIsQ0FBbUIsR0FBbkIsQ0FGZDtLQUF4QjtHQURvQyxDQUF0QyxDQWR5Qzs7QUFxQnpDLFNBQU8sT0FBUCxDQXJCeUM7Q0FBNUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHJhbmRvbVdvcmRzIGZyb20gJ3JhbmRvbS13b3Jkcyc7XG5pbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vc3JjL2RyYWdnYWJsZSc7XG5cbmxldCB3b3JkY291bnQgPSA1MDAwO1xuXG5mdW5jdGlvbiBjcmVhdGVCb3goKSB7XG4gIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3hcIik7XG4gIHJldHVybiBkcmFnZ2FibGUoYm94KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB3b3JkcyA9IHJhbmRvbVdvcmRzKHsgZXhhY3RseTogd29yZGNvdW50LCBqb2luOiAnICd9KTtcbiAgbGV0IHNoYXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBsZXQgYm94ID0gY3JlYXRlQm94KCk7XG5cbiAgbGV0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn0pO1xuXG5cbiIsInZhciB3b3JkTGlzdCA9IFtcbiAgLy8gQm9ycm93ZWQgZnJvbSB4a2NkIHBhc3N3b3JkIGdlbmVyYXRvciB3aGljaCBib3Jyb3dlZCBpdCBmcm9tIHdoZXJldmVyXG4gIFwiYWJpbGl0eVwiLFwiYWJsZVwiLFwiYWJvYXJkXCIsXCJhYm91dFwiLFwiYWJvdmVcIixcImFjY2VwdFwiLFwiYWNjaWRlbnRcIixcImFjY29yZGluZ1wiLFxuICBcImFjY291bnRcIixcImFjY3VyYXRlXCIsXCJhY3Jlc1wiLFwiYWNyb3NzXCIsXCJhY3RcIixcImFjdGlvblwiLFwiYWN0aXZlXCIsXCJhY3Rpdml0eVwiLFxuICBcImFjdHVhbFwiLFwiYWN0dWFsbHlcIixcImFkZFwiLFwiYWRkaXRpb25cIixcImFkZGl0aW9uYWxcIixcImFkamVjdGl2ZVwiLFwiYWR1bHRcIixcImFkdmVudHVyZVwiLFxuICBcImFkdmljZVwiLFwiYWZmZWN0XCIsXCJhZnJhaWRcIixcImFmdGVyXCIsXCJhZnRlcm5vb25cIixcImFnYWluXCIsXCJhZ2FpbnN0XCIsXCJhZ2VcIixcbiAgXCJhZ29cIixcImFncmVlXCIsXCJhaGVhZFwiLFwiYWlkXCIsXCJhaXJcIixcImFpcnBsYW5lXCIsXCJhbGlrZVwiLFwiYWxpdmVcIixcbiAgXCJhbGxcIixcImFsbG93XCIsXCJhbG1vc3RcIixcImFsb25lXCIsXCJhbG9uZ1wiLFwiYWxvdWRcIixcImFscGhhYmV0XCIsXCJhbHJlYWR5XCIsXG4gIFwiYWxzb1wiLFwiYWx0aG91Z2hcIixcImFtXCIsXCJhbW9uZ1wiLFwiYW1vdW50XCIsXCJhbmNpZW50XCIsXCJhbmdsZVwiLFwiYW5ncnlcIixcbiAgXCJhbmltYWxcIixcImFubm91bmNlZFwiLFwiYW5vdGhlclwiLFwiYW5zd2VyXCIsXCJhbnRzXCIsXCJhbnlcIixcImFueWJvZHlcIixcImFueW9uZVwiLFxuICBcImFueXRoaW5nXCIsXCJhbnl3YXlcIixcImFueXdoZXJlXCIsXCJhcGFydFwiLFwiYXBhcnRtZW50XCIsXCJhcHBlYXJhbmNlXCIsXCJhcHBsZVwiLFwiYXBwbGllZFwiLFxuICBcImFwcHJvcHJpYXRlXCIsXCJhcmVcIixcImFyZWFcIixcImFybVwiLFwiYXJteVwiLFwiYXJvdW5kXCIsXCJhcnJhbmdlXCIsXCJhcnJhbmdlbWVudFwiLFxuICBcImFycml2ZVwiLFwiYXJyb3dcIixcImFydFwiLFwiYXJ0aWNsZVwiLFwiYXNcIixcImFzaWRlXCIsXCJhc2tcIixcImFzbGVlcFwiLFxuICBcImF0XCIsXCJhdGVcIixcImF0bW9zcGhlcmVcIixcImF0b21cIixcImF0b21pY1wiLFwiYXR0YWNoZWRcIixcImF0dGFja1wiLFwiYXR0ZW1wdFwiLFxuICBcImF0dGVudGlvblwiLFwiYXVkaWVuY2VcIixcImF1dGhvclwiLFwiYXV0b21vYmlsZVwiLFwiYXZhaWxhYmxlXCIsXCJhdmVyYWdlXCIsXCJhdm9pZFwiLFwiYXdhcmVcIixcbiAgXCJhd2F5XCIsXCJiYWJ5XCIsXCJiYWNrXCIsXCJiYWRcIixcImJhZGx5XCIsXCJiYWdcIixcImJhbGFuY2VcIixcImJhbGxcIixcbiAgXCJiYWxsb29uXCIsXCJiYW5kXCIsXCJiYW5rXCIsXCJiYXJcIixcImJhcmVcIixcImJhcmtcIixcImJhcm5cIixcImJhc2VcIixcbiAgXCJiYXNlYmFsbFwiLFwiYmFzaWNcIixcImJhc2lzXCIsXCJiYXNrZXRcIixcImJhdFwiLFwiYmF0dGxlXCIsXCJiZVwiLFwiYmVhblwiLFxuICBcImJlYXJcIixcImJlYXRcIixcImJlYXV0aWZ1bFwiLFwiYmVhdXR5XCIsXCJiZWNhbWVcIixcImJlY2F1c2VcIixcImJlY29tZVwiLFwiYmVjb21pbmdcIixcbiAgXCJiZWVcIixcImJlZW5cIixcImJlZm9yZVwiLFwiYmVnYW5cIixcImJlZ2lubmluZ1wiLFwiYmVndW5cIixcImJlaGF2aW9yXCIsXCJiZWhpbmRcIixcbiAgXCJiZWluZ1wiLFwiYmVsaWV2ZWRcIixcImJlbGxcIixcImJlbG9uZ1wiLFwiYmVsb3dcIixcImJlbHRcIixcImJlbmRcIixcImJlbmVhdGhcIixcbiAgXCJiZW50XCIsXCJiZXNpZGVcIixcImJlc3RcIixcImJldFwiLFwiYmV0dGVyXCIsXCJiZXR3ZWVuXCIsXCJiZXlvbmRcIixcImJpY3ljbGVcIixcbiAgXCJiaWdnZXJcIixcImJpZ2dlc3RcIixcImJpbGxcIixcImJpcmRzXCIsXCJiaXJ0aFwiLFwiYmlydGhkYXlcIixcImJpdFwiLFwiYml0ZVwiLFxuICBcImJsYWNrXCIsXCJibGFua1wiLFwiYmxhbmtldFwiLFwiYmxld1wiLFwiYmxpbmRcIixcImJsb2NrXCIsXCJibG9vZFwiLFwiYmxvd1wiLFxuICBcImJsdWVcIixcImJvYXJkXCIsXCJib2F0XCIsXCJib2R5XCIsXCJib25lXCIsXCJib29rXCIsXCJib3JkZXJcIixcImJvcm5cIixcbiAgXCJib3RoXCIsXCJib3R0bGVcIixcImJvdHRvbVwiLFwiYm91bmRcIixcImJvd1wiLFwiYm93bFwiLFwiYm94XCIsXCJib3lcIixcbiAgXCJicmFpblwiLFwiYnJhbmNoXCIsXCJicmFzc1wiLFwiYnJhdmVcIixcImJyZWFkXCIsXCJicmVha1wiLFwiYnJlYWtmYXN0XCIsXCJicmVhdGhcIixcbiAgXCJicmVhdGhlXCIsXCJicmVhdGhpbmdcIixcImJyZWV6ZVwiLFwiYnJpY2tcIixcImJyaWRnZVwiLFwiYnJpZWZcIixcImJyaWdodFwiLFwiYnJpbmdcIixcbiAgXCJicm9hZFwiLFwiYnJva2VcIixcImJyb2tlblwiLFwiYnJvdGhlclwiLFwiYnJvdWdodFwiLFwiYnJvd25cIixcImJydXNoXCIsXCJidWZmYWxvXCIsXG4gIFwiYnVpbGRcIixcImJ1aWxkaW5nXCIsXCJidWlsdFwiLFwiYnVyaWVkXCIsXCJidXJuXCIsXCJidXJzdFwiLFwiYnVzXCIsXCJidXNoXCIsXG4gIFwiYnVzaW5lc3NcIixcImJ1c3lcIixcImJ1dFwiLFwiYnV0dGVyXCIsXCJidXlcIixcImJ5XCIsXCJjYWJpblwiLFwiY2FnZVwiLFxuICBcImNha2VcIixcImNhbGxcIixcImNhbG1cIixcImNhbWVcIixcImNhbWVyYVwiLFwiY2FtcFwiLFwiY2FuXCIsXCJjYW5hbFwiLFxuICBcImNhbm5vdFwiLFwiY2FwXCIsXCJjYXBpdGFsXCIsXCJjYXB0YWluXCIsXCJjYXB0dXJlZFwiLFwiY2FyXCIsXCJjYXJib25cIixcImNhcmRcIixcbiAgXCJjYXJlXCIsXCJjYXJlZnVsXCIsXCJjYXJlZnVsbHlcIixcImNhcnJpZWRcIixcImNhcnJ5XCIsXCJjYXNlXCIsXCJjYXN0XCIsXCJjYXN0bGVcIixcbiAgXCJjYXRcIixcImNhdGNoXCIsXCJjYXR0bGVcIixcImNhdWdodFwiLFwiY2F1c2VcIixcImNhdmVcIixcImNlbGxcIixcImNlbnRcIixcbiAgXCJjZW50ZXJcIixcImNlbnRyYWxcIixcImNlbnR1cnlcIixcImNlcnRhaW5cIixcImNlcnRhaW5seVwiLFwiY2hhaW5cIixcImNoYWlyXCIsXCJjaGFtYmVyXCIsXG4gIFwiY2hhbmNlXCIsXCJjaGFuZ2VcIixcImNoYW5naW5nXCIsXCJjaGFwdGVyXCIsXCJjaGFyYWN0ZXJcIixcImNoYXJhY3RlcmlzdGljXCIsXCJjaGFyZ2VcIixcImNoYXJ0XCIsXG4gIFwiY2hlY2tcIixcImNoZWVzZVwiLFwiY2hlbWljYWxcIixcImNoZXN0XCIsXCJjaGlja2VuXCIsXCJjaGllZlwiLFwiY2hpbGRcIixcImNoaWxkcmVuXCIsXG4gIFwiY2hvaWNlXCIsXCJjaG9vc2VcIixcImNob3NlXCIsXCJjaG9zZW5cIixcImNodXJjaFwiLFwiY2lyY2xlXCIsXCJjaXJjdXNcIixcImNpdGl6ZW5cIixcbiAgXCJjaXR5XCIsXCJjbGFzc1wiLFwiY2xhc3Nyb29tXCIsXCJjbGF3c1wiLFwiY2xheVwiLFwiY2xlYW5cIixcImNsZWFyXCIsXCJjbGVhcmx5XCIsXG4gIFwiY2xpbWF0ZVwiLFwiY2xpbWJcIixcImNsb2NrXCIsXCJjbG9zZVwiLFwiY2xvc2VseVwiLFwiY2xvc2VyXCIsXCJjbG90aFwiLFwiY2xvdGhlc1wiLFxuICBcImNsb3RoaW5nXCIsXCJjbG91ZFwiLFwiY2x1YlwiLFwiY29hY2hcIixcImNvYWxcIixcImNvYXN0XCIsXCJjb2F0XCIsXCJjb2ZmZWVcIixcbiAgXCJjb2xkXCIsXCJjb2xsZWN0XCIsXCJjb2xsZWdlXCIsXCJjb2xvbnlcIixcImNvbG9yXCIsXCJjb2x1bW5cIixcImNvbWJpbmF0aW9uXCIsXCJjb21iaW5lXCIsXG4gIFwiY29tZVwiLFwiY29tZm9ydGFibGVcIixcImNvbWluZ1wiLFwiY29tbWFuZFwiLFwiY29tbW9uXCIsXCJjb21tdW5pdHlcIixcImNvbXBhbnlcIixcImNvbXBhcmVcIixcbiAgXCJjb21wYXNzXCIsXCJjb21wbGV0ZVwiLFwiY29tcGxldGVseVwiLFwiY29tcGxleFwiLFwiY29tcG9zZWRcIixcImNvbXBvc2l0aW9uXCIsXCJjb21wb3VuZFwiLFwiY29uY2VybmVkXCIsXG4gIFwiY29uZGl0aW9uXCIsXCJjb25ncmVzc1wiLFwiY29ubmVjdGVkXCIsXCJjb25zaWRlclwiLFwiY29uc2lzdFwiLFwiY29uc29uYW50XCIsXCJjb25zdGFudGx5XCIsXCJjb25zdHJ1Y3Rpb25cIixcbiAgXCJjb250YWluXCIsXCJjb250aW5lbnRcIixcImNvbnRpbnVlZFwiLFwiY29udHJhc3RcIixcImNvbnRyb2xcIixcImNvbnZlcnNhdGlvblwiLFwiY29va1wiLFwiY29va2llc1wiLFxuICBcImNvb2xcIixcImNvcHBlclwiLFwiY29weVwiLFwiY29yblwiLFwiY29ybmVyXCIsXCJjb3JyZWN0XCIsXCJjb3JyZWN0bHlcIixcImNvc3RcIixcbiAgXCJjb3R0b25cIixcImNvdWxkXCIsXCJjb3VudFwiLFwiY291bnRyeVwiLFwiY291cGxlXCIsXCJjb3VyYWdlXCIsXCJjb3Vyc2VcIixcImNvdXJ0XCIsXG4gIFwiY292ZXJcIixcImNvd1wiLFwiY293Ym95XCIsXCJjcmFja1wiLFwiY3JlYW1cIixcImNyZWF0ZVwiLFwiY3JlYXR1cmVcIixcImNyZXdcIixcbiAgXCJjcm9wXCIsXCJjcm9zc1wiLFwiY3Jvd2RcIixcImNyeVwiLFwiY3VwXCIsXCJjdXJpb3VzXCIsXCJjdXJyZW50XCIsXCJjdXJ2ZVwiLFxuICBcImN1c3RvbXNcIixcImN1dFwiLFwiY3V0dGluZ1wiLFwiZGFpbHlcIixcImRhbWFnZVwiLFwiZGFuY2VcIixcImRhbmdlclwiLFwiZGFuZ2Vyb3VzXCIsXG4gIFwiZGFya1wiLFwiZGFya25lc3NcIixcImRhdGVcIixcImRhdWdodGVyXCIsXCJkYXduXCIsXCJkYXlcIixcImRlYWRcIixcImRlYWxcIixcbiAgXCJkZWFyXCIsXCJkZWF0aFwiLFwiZGVjaWRlXCIsXCJkZWNsYXJlZFwiLFwiZGVlcFwiLFwiZGVlcGx5XCIsXCJkZWVyXCIsXCJkZWZpbml0aW9uXCIsXG4gIFwiZGVncmVlXCIsXCJkZXBlbmRcIixcImRlcHRoXCIsXCJkZXNjcmliZVwiLFwiZGVzZXJ0XCIsXCJkZXNpZ25cIixcImRlc2tcIixcImRldGFpbFwiLFxuICBcImRldGVybWluZVwiLFwiZGV2ZWxvcFwiLFwiZGV2ZWxvcG1lbnRcIixcImRpYWdyYW1cIixcImRpYW1ldGVyXCIsXCJkaWRcIixcImRpZVwiLFwiZGlmZmVyXCIsXG4gIFwiZGlmZmVyZW5jZVwiLFwiZGlmZmVyZW50XCIsXCJkaWZmaWN1bHRcIixcImRpZmZpY3VsdHlcIixcImRpZ1wiLFwiZGlubmVyXCIsXCJkaXJlY3RcIixcImRpcmVjdGlvblwiLFxuICBcImRpcmVjdGx5XCIsXCJkaXJ0XCIsXCJkaXJ0eVwiLFwiZGlzYXBwZWFyXCIsXCJkaXNjb3ZlclwiLFwiZGlzY292ZXJ5XCIsXCJkaXNjdXNzXCIsXCJkaXNjdXNzaW9uXCIsXG4gIFwiZGlzZWFzZVwiLFwiZGlzaFwiLFwiZGlzdGFuY2VcIixcImRpc3RhbnRcIixcImRpdmlkZVwiLFwiZGl2aXNpb25cIixcImRvXCIsXCJkb2N0b3JcIixcbiAgXCJkb2VzXCIsXCJkb2dcIixcImRvaW5nXCIsXCJkb2xsXCIsXCJkb2xsYXJcIixcImRvbmVcIixcImRvbmtleVwiLFwiZG9vclwiLFxuICBcImRvdFwiLFwiZG91YmxlXCIsXCJkb3VidFwiLFwiZG93blwiLFwiZG96ZW5cIixcImRyYXdcIixcImRyYXduXCIsXCJkcmVhbVwiLFxuICBcImRyZXNzXCIsXCJkcmV3XCIsXCJkcmllZFwiLFwiZHJpbmtcIixcImRyaXZlXCIsXCJkcml2ZW5cIixcImRyaXZlclwiLFwiZHJpdmluZ1wiLFxuICBcImRyb3BcIixcImRyb3BwZWRcIixcImRyb3ZlXCIsXCJkcnlcIixcImR1Y2tcIixcImR1ZVwiLFwiZHVnXCIsXCJkdWxsXCIsXG4gIFwiZHVyaW5nXCIsXCJkdXN0XCIsXCJkdXR5XCIsXCJlYWNoXCIsXCJlYWdlclwiLFwiZWFyXCIsXCJlYXJsaWVyXCIsXCJlYXJseVwiLFxuICBcImVhcm5cIixcImVhcnRoXCIsXCJlYXNpZXJcIixcImVhc2lseVwiLFwiZWFzdFwiLFwiZWFzeVwiLFwiZWF0XCIsXCJlYXRlblwiLFxuICBcImVkZ2VcIixcImVkdWNhdGlvblwiLFwiZWZmZWN0XCIsXCJlZmZvcnRcIixcImVnZ1wiLFwiZWlnaHRcIixcImVpdGhlclwiLFwiZWxlY3RyaWNcIixcbiAgXCJlbGVjdHJpY2l0eVwiLFwiZWxlbWVudFwiLFwiZWxlcGhhbnRcIixcImVsZXZlblwiLFwiZWxzZVwiLFwiZW1wdHlcIixcImVuZFwiLFwiZW5lbXlcIixcbiAgXCJlbmVyZ3lcIixcImVuZ2luZVwiLFwiZW5naW5lZXJcIixcImVuam95XCIsXCJlbm91Z2hcIixcImVudGVyXCIsXCJlbnRpcmVcIixcImVudGlyZWx5XCIsXG4gIFwiZW52aXJvbm1lbnRcIixcImVxdWFsXCIsXCJlcXVhbGx5XCIsXCJlcXVhdG9yXCIsXCJlcXVpcG1lbnRcIixcImVzY2FwZVwiLFwiZXNwZWNpYWxseVwiLFwiZXNzZW50aWFsXCIsXG4gIFwiZXN0YWJsaXNoXCIsXCJldmVuXCIsXCJldmVuaW5nXCIsXCJldmVudFwiLFwiZXZlbnR1YWxseVwiLFwiZXZlclwiLFwiZXZlcnlcIixcImV2ZXJ5Ym9keVwiLFxuICBcImV2ZXJ5b25lXCIsXCJldmVyeXRoaW5nXCIsXCJldmVyeXdoZXJlXCIsXCJldmlkZW5jZVwiLFwiZXhhY3RcIixcImV4YWN0bHlcIixcImV4YW1pbmVcIixcImV4YW1wbGVcIixcbiAgXCJleGNlbGxlbnRcIixcImV4Y2VwdFwiLFwiZXhjaGFuZ2VcIixcImV4Y2l0ZWRcIixcImV4Y2l0ZW1lbnRcIixcImV4Y2l0aW5nXCIsXCJleGNsYWltZWRcIixcImV4ZXJjaXNlXCIsXG4gIFwiZXhpc3RcIixcImV4cGVjdFwiLFwiZXhwZXJpZW5jZVwiLFwiZXhwZXJpbWVudFwiLFwiZXhwbGFpblwiLFwiZXhwbGFuYXRpb25cIixcImV4cGxvcmVcIixcImV4cHJlc3NcIixcbiAgXCJleHByZXNzaW9uXCIsXCJleHRyYVwiLFwiZXllXCIsXCJmYWNlXCIsXCJmYWNpbmdcIixcImZhY3RcIixcImZhY3RvclwiLFwiZmFjdG9yeVwiLFxuICBcImZhaWxlZFwiLFwiZmFpclwiLFwiZmFpcmx5XCIsXCJmYWxsXCIsXCJmYWxsZW5cIixcImZhbWlsaWFyXCIsXCJmYW1pbHlcIixcImZhbW91c1wiLFxuICBcImZhclwiLFwiZmFybVwiLFwiZmFybWVyXCIsXCJmYXJ0aGVyXCIsXCJmYXN0XCIsXCJmYXN0ZW5lZFwiLFwiZmFzdGVyXCIsXCJmYXRcIixcbiAgXCJmYXRoZXJcIixcImZhdm9yaXRlXCIsXCJmZWFyXCIsXCJmZWF0aGVyc1wiLFwiZmVhdHVyZVwiLFwiZmVkXCIsXCJmZWVkXCIsXCJmZWVsXCIsXG4gIFwiZmVldFwiLFwiZmVsbFwiLFwiZmVsbG93XCIsXCJmZWx0XCIsXCJmZW5jZVwiLFwiZmV3XCIsXCJmZXdlclwiLFwiZmllbGRcIixcbiAgXCJmaWVyY2VcIixcImZpZnRlZW5cIixcImZpZnRoXCIsXCJmaWZ0eVwiLFwiZmlnaHRcIixcImZpZ2h0aW5nXCIsXCJmaWd1cmVcIixcImZpbGxcIixcbiAgXCJmaWxtXCIsXCJmaW5hbFwiLFwiZmluYWxseVwiLFwiZmluZFwiLFwiZmluZVwiLFwiZmluZXN0XCIsXCJmaW5nZXJcIixcImZpbmlzaFwiLFxuICBcImZpcmVcIixcImZpcmVwbGFjZVwiLFwiZmlybVwiLFwiZmlyc3RcIixcImZpc2hcIixcImZpdmVcIixcImZpeFwiLFwiZmxhZ1wiLFxuICBcImZsYW1lXCIsXCJmbGF0XCIsXCJmbGV3XCIsXCJmbGllc1wiLFwiZmxpZ2h0XCIsXCJmbG9hdGluZ1wiLFwiZmxvb3JcIixcImZsb3dcIixcbiAgXCJmbG93ZXJcIixcImZseVwiLFwiZm9nXCIsXCJmb2xrc1wiLFwiZm9sbG93XCIsXCJmb29kXCIsXCJmb290XCIsXCJmb290YmFsbFwiLFxuICBcImZvclwiLFwiZm9yY2VcIixcImZvcmVpZ25cIixcImZvcmVzdFwiLFwiZm9yZ2V0XCIsXCJmb3Jnb3RcIixcImZvcmdvdHRlblwiLFwiZm9ybVwiLFxuICBcImZvcm1lclwiLFwiZm9ydFwiLFwiZm9ydGhcIixcImZvcnR5XCIsXCJmb3J3YXJkXCIsXCJmb3VnaHRcIixcImZvdW5kXCIsXCJmb3VyXCIsXG4gIFwiZm91cnRoXCIsXCJmb3hcIixcImZyYW1lXCIsXCJmcmVlXCIsXCJmcmVlZG9tXCIsXCJmcmVxdWVudGx5XCIsXCJmcmVzaFwiLFwiZnJpZW5kXCIsXG4gIFwiZnJpZW5kbHlcIixcImZyaWdodGVuXCIsXCJmcm9nXCIsXCJmcm9tXCIsXCJmcm9udFwiLFwiZnJvemVuXCIsXCJmcnVpdFwiLFwiZnVlbFwiLFxuICBcImZ1bGxcIixcImZ1bGx5XCIsXCJmdW5cIixcImZ1bmN0aW9uXCIsXCJmdW5ueVwiLFwiZnVyXCIsXCJmdXJuaXR1cmVcIixcImZ1cnRoZXJcIixcbiAgXCJmdXR1cmVcIixcImdhaW5cIixcImdhbWVcIixcImdhcmFnZVwiLFwiZ2FyZGVuXCIsXCJnYXNcIixcImdhc29saW5lXCIsXCJnYXRlXCIsXG4gIFwiZ2F0aGVyXCIsXCJnYXZlXCIsXCJnZW5lcmFsXCIsXCJnZW5lcmFsbHlcIixcImdlbnRsZVwiLFwiZ2VudGx5XCIsXCJnZXRcIixcImdldHRpbmdcIixcbiAgXCJnaWFudFwiLFwiZ2lmdFwiLFwiZ2lybFwiLFwiZ2l2ZVwiLFwiZ2l2ZW5cIixcImdpdmluZ1wiLFwiZ2xhZFwiLFwiZ2xhc3NcIixcbiAgXCJnbG9iZVwiLFwiZ29cIixcImdvZXNcIixcImdvbGRcIixcImdvbGRlblwiLFwiZ29uZVwiLFwiZ29vZFwiLFwiZ29vc2VcIixcbiAgXCJnb3RcIixcImdvdmVybm1lbnRcIixcImdyYWJiZWRcIixcImdyYWRlXCIsXCJncmFkdWFsbHlcIixcImdyYWluXCIsXCJncmFuZGZhdGhlclwiLFwiZ3JhbmRtb3RoZXJcIixcbiAgXCJncmFwaFwiLFwiZ3Jhc3NcIixcImdyYXZpdHlcIixcImdyYXlcIixcImdyZWF0XCIsXCJncmVhdGVyXCIsXCJncmVhdGVzdFwiLFwiZ3JlYXRseVwiLFxuICBcImdyZWVuXCIsXCJncmV3XCIsXCJncm91bmRcIixcImdyb3VwXCIsXCJncm93XCIsXCJncm93blwiLFwiZ3Jvd3RoXCIsXCJndWFyZFwiLFxuICBcImd1ZXNzXCIsXCJndWlkZVwiLFwiZ3VsZlwiLFwiZ3VuXCIsXCJoYWJpdFwiLFwiaGFkXCIsXCJoYWlyXCIsXCJoYWxmXCIsXG4gIFwiaGFsZndheVwiLFwiaGFsbFwiLFwiaGFuZFwiLFwiaGFuZGxlXCIsXCJoYW5kc29tZVwiLFwiaGFuZ1wiLFwiaGFwcGVuXCIsXCJoYXBwZW5lZFwiLFxuICBcImhhcHBpbHlcIixcImhhcHB5XCIsXCJoYXJib3JcIixcImhhcmRcIixcImhhcmRlclwiLFwiaGFyZGx5XCIsXCJoYXNcIixcImhhdFwiLFxuICBcImhhdmVcIixcImhhdmluZ1wiLFwiaGF5XCIsXCJoZVwiLFwiaGVhZGVkXCIsXCJoZWFkaW5nXCIsXCJoZWFsdGhcIixcImhlYXJkXCIsXG4gIFwiaGVhcmluZ1wiLFwiaGVhcnRcIixcImhlYXRcIixcImhlYXZ5XCIsXCJoZWlnaHRcIixcImhlbGRcIixcImhlbGxvXCIsXCJoZWxwXCIsXG4gIFwiaGVscGZ1bFwiLFwiaGVyXCIsXCJoZXJkXCIsXCJoZXJlXCIsXCJoZXJzZWxmXCIsXCJoaWRkZW5cIixcImhpZGVcIixcImhpZ2hcIixcbiAgXCJoaWdoZXJcIixcImhpZ2hlc3RcIixcImhpZ2h3YXlcIixcImhpbGxcIixcImhpbVwiLFwiaGltc2VsZlwiLFwiaGlzXCIsXCJoaXN0b3J5XCIsXG4gIFwiaGl0XCIsXCJob2xkXCIsXCJob2xlXCIsXCJob2xsb3dcIixcImhvbWVcIixcImhvbm9yXCIsXCJob3BlXCIsXCJob3JuXCIsXG4gIFwiaG9yc2VcIixcImhvc3BpdGFsXCIsXCJob3RcIixcImhvdXJcIixcImhvdXNlXCIsXCJob3dcIixcImhvd2V2ZXJcIixcImh1Z2VcIixcbiAgXCJodW1hblwiLFwiaHVuZHJlZFwiLFwiaHVuZ1wiLFwiaHVuZ3J5XCIsXCJodW50XCIsXCJodW50ZXJcIixcImh1cnJpZWRcIixcImh1cnJ5XCIsXG4gIFwiaHVydFwiLFwiaHVzYmFuZFwiLFwiaWNlXCIsXCJpZGVhXCIsXCJpZGVudGl0eVwiLFwiaWZcIixcImlsbFwiLFwiaW1hZ2VcIixcbiAgXCJpbWFnaW5lXCIsXCJpbW1lZGlhdGVseVwiLFwiaW1wb3J0YW5jZVwiLFwiaW1wb3J0YW50XCIsXCJpbXBvc3NpYmxlXCIsXCJpbXByb3ZlXCIsXCJpblwiLFwiaW5jaFwiLFxuICBcImluY2x1ZGVcIixcImluY2x1ZGluZ1wiLFwiaW5jb21lXCIsXCJpbmNyZWFzZVwiLFwiaW5kZWVkXCIsXCJpbmRlcGVuZGVudFwiLFwiaW5kaWNhdGVcIixcImluZGl2aWR1YWxcIixcbiAgXCJpbmR1c3RyaWFsXCIsXCJpbmR1c3RyeVwiLFwiaW5mbHVlbmNlXCIsXCJpbmZvcm1hdGlvblwiLFwiaW5zaWRlXCIsXCJpbnN0YW5jZVwiLFwiaW5zdGFudFwiLFwiaW5zdGVhZFwiLFxuICBcImluc3RydW1lbnRcIixcImludGVyZXN0XCIsXCJpbnRlcmlvclwiLFwiaW50b1wiLFwiaW50cm9kdWNlZFwiLFwiaW52ZW50ZWRcIixcImludm9sdmVkXCIsXCJpcm9uXCIsXG4gIFwiaXNcIixcImlzbGFuZFwiLFwiaXRcIixcIml0c1wiLFwiaXRzZWxmXCIsXCJqYWNrXCIsXCJqYXJcIixcImpldFwiLFxuICBcImpvYlwiLFwiam9pblwiLFwiam9pbmVkXCIsXCJqb3VybmV5XCIsXCJqb3lcIixcImp1ZGdlXCIsXCJqdW1wXCIsXCJqdW5nbGVcIixcbiAgXCJqdXN0XCIsXCJrZWVwXCIsXCJrZXB0XCIsXCJrZXlcIixcImtpZHNcIixcImtpbGxcIixcImtpbmRcIixcImtpdGNoZW5cIixcbiAgXCJrbmV3XCIsXCJrbmlmZVwiLFwia25vd1wiLFwia25vd2xlZGdlXCIsXCJrbm93blwiLFwibGFiZWxcIixcImxhYm9yXCIsXCJsYWNrXCIsXG4gIFwibGFkeVwiLFwibGFpZFwiLFwibGFrZVwiLFwibGFtcFwiLFwibGFuZFwiLFwibGFuZ3VhZ2VcIixcImxhcmdlXCIsXCJsYXJnZXJcIixcbiAgXCJsYXJnZXN0XCIsXCJsYXN0XCIsXCJsYXRlXCIsXCJsYXRlclwiLFwibGF1Z2hcIixcImxhd1wiLFwibGF5XCIsXCJsYXllcnNcIixcbiAgXCJsZWFkXCIsXCJsZWFkZXJcIixcImxlYWZcIixcImxlYXJuXCIsXCJsZWFzdFwiLFwibGVhdGhlclwiLFwibGVhdmVcIixcImxlYXZpbmdcIixcbiAgXCJsZWRcIixcImxlZnRcIixcImxlZ1wiLFwibGVuZ3RoXCIsXCJsZXNzb25cIixcImxldFwiLFwibGV0dGVyXCIsXCJsZXZlbFwiLFxuICBcImxpYnJhcnlcIixcImxpZVwiLFwibGlmZVwiLFwibGlmdFwiLFwibGlnaHRcIixcImxpa2VcIixcImxpa2VseVwiLFwibGltaXRlZFwiLFxuICBcImxpbmVcIixcImxpb25cIixcImxpcHNcIixcImxpcXVpZFwiLFwibGlzdFwiLFwibGlzdGVuXCIsXCJsaXR0bGVcIixcImxpdmVcIixcbiAgXCJsaXZpbmdcIixcImxvYWRcIixcImxvY2FsXCIsXCJsb2NhdGVcIixcImxvY2F0aW9uXCIsXCJsb2dcIixcImxvbmVseVwiLFwibG9uZ1wiLFxuICBcImxvbmdlclwiLFwibG9va1wiLFwibG9vc2VcIixcImxvc2VcIixcImxvc3NcIixcImxvc3RcIixcImxvdFwiLFwibG91ZFwiLFxuICBcImxvdmVcIixcImxvdmVseVwiLFwibG93XCIsXCJsb3dlclwiLFwibHVja1wiLFwibHVja3lcIixcImx1bmNoXCIsXCJsdW5nc1wiLFxuICBcImx5aW5nXCIsXCJtYWNoaW5lXCIsXCJtYWNoaW5lcnlcIixcIm1hZFwiLFwibWFkZVwiLFwibWFnaWNcIixcIm1hZ25ldFwiLFwibWFpbFwiLFxuICBcIm1haW5cIixcIm1haW5seVwiLFwibWFqb3JcIixcIm1ha2VcIixcIm1ha2luZ1wiLFwibWFuXCIsXCJtYW5hZ2VkXCIsXCJtYW5uZXJcIixcbiAgXCJtYW51ZmFjdHVyaW5nXCIsXCJtYW55XCIsXCJtYXBcIixcIm1hcmtcIixcIm1hcmtldFwiLFwibWFycmllZFwiLFwibWFzc1wiLFwibWFzc2FnZVwiLFxuICBcIm1hc3RlclwiLFwibWF0ZXJpYWxcIixcIm1hdGhlbWF0aWNzXCIsXCJtYXR0ZXJcIixcIm1heVwiLFwibWF5YmVcIixcIm1lXCIsXCJtZWFsXCIsXG4gIFwibWVhblwiLFwibWVhbnNcIixcIm1lYW50XCIsXCJtZWFzdXJlXCIsXCJtZWF0XCIsXCJtZWRpY2luZVwiLFwibWVldFwiLFwibWVsdGVkXCIsXG4gIFwibWVtYmVyXCIsXCJtZW1vcnlcIixcIm1lblwiLFwibWVudGFsXCIsXCJtZXJlbHlcIixcIm1ldFwiLFwibWV0YWxcIixcIm1ldGhvZFwiLFxuICBcIm1pY2VcIixcIm1pZGRsZVwiLFwibWlnaHRcIixcIm1pZ2h0eVwiLFwibWlsZVwiLFwibWlsaXRhcnlcIixcIm1pbGtcIixcIm1pbGxcIixcbiAgXCJtaW5kXCIsXCJtaW5lXCIsXCJtaW5lcmFsc1wiLFwibWludXRlXCIsXCJtaXJyb3JcIixcIm1pc3NpbmdcIixcIm1pc3Npb25cIixcIm1pc3Rha2VcIixcbiAgXCJtaXhcIixcIm1peHR1cmVcIixcIm1vZGVsXCIsXCJtb2Rlcm5cIixcIm1vbGVjdWxhclwiLFwibW9tZW50XCIsXCJtb25leVwiLFwibW9ua2V5XCIsXG4gIFwibW9udGhcIixcIm1vb2RcIixcIm1vb25cIixcIm1vcmVcIixcIm1vcm5pbmdcIixcIm1vc3RcIixcIm1vc3RseVwiLFwibW90aGVyXCIsXG4gIFwibW90aW9uXCIsXCJtb3RvclwiLFwibW91bnRhaW5cIixcIm1vdXNlXCIsXCJtb3V0aFwiLFwibW92ZVwiLFwibW92ZW1lbnRcIixcIm1vdmllXCIsXG4gIFwibW92aW5nXCIsXCJtdWRcIixcIm11c2NsZVwiLFwibXVzaWNcIixcIm11c2ljYWxcIixcIm11c3RcIixcIm15XCIsXCJteXNlbGZcIixcbiAgXCJteXN0ZXJpb3VzXCIsXCJuYWlsc1wiLFwibmFtZVwiLFwibmF0aW9uXCIsXCJuYXRpb25hbFwiLFwibmF0aXZlXCIsXCJuYXR1cmFsXCIsXCJuYXR1cmFsbHlcIixcbiAgXCJuYXR1cmVcIixcIm5lYXJcIixcIm5lYXJieVwiLFwibmVhcmVyXCIsXCJuZWFyZXN0XCIsXCJuZWFybHlcIixcIm5lY2Vzc2FyeVwiLFwibmVja1wiLFxuICBcIm5lZWRlZFwiLFwibmVlZGxlXCIsXCJuZWVkc1wiLFwibmVnYXRpdmVcIixcIm5laWdoYm9yXCIsXCJuZWlnaGJvcmhvb2RcIixcIm5lcnZvdXNcIixcIm5lc3RcIixcbiAgXCJuZXZlclwiLFwibmV3XCIsXCJuZXdzXCIsXCJuZXdzcGFwZXJcIixcIm5leHRcIixcIm5pY2VcIixcIm5pZ2h0XCIsXCJuaW5lXCIsXG4gIFwibm9cIixcIm5vYm9keVwiLFwibm9kZGVkXCIsXCJub2lzZVwiLFwibm9uZVwiLFwibm9vblwiLFwibm9yXCIsXCJub3J0aFwiLFxuICBcIm5vc2VcIixcIm5vdFwiLFwibm90ZVwiLFwibm90ZWRcIixcIm5vdGhpbmdcIixcIm5vdGljZVwiLFwibm91blwiLFwibm93XCIsXG4gIFwibnVtYmVyXCIsXCJudW1lcmFsXCIsXCJudXRzXCIsXCJvYmplY3RcIixcIm9ic2VydmVcIixcIm9idGFpblwiLFwib2NjYXNpb25hbGx5XCIsXCJvY2N1clwiLFxuICBcIm9jZWFuXCIsXCJvZlwiLFwib2ZmXCIsXCJvZmZlclwiLFwib2ZmaWNlXCIsXCJvZmZpY2VyXCIsXCJvZmZpY2lhbFwiLFwib2lsXCIsXG4gIFwib2xkXCIsXCJvbGRlclwiLFwib2xkZXN0XCIsXCJvblwiLFwib25jZVwiLFwib25lXCIsXCJvbmx5XCIsXCJvbnRvXCIsXG4gIFwib3BlblwiLFwib3BlcmF0aW9uXCIsXCJvcGluaW9uXCIsXCJvcHBvcnR1bml0eVwiLFwib3Bwb3NpdGVcIixcIm9yXCIsXCJvcmFuZ2VcIixcIm9yYml0XCIsXG4gIFwib3JkZXJcIixcIm9yZGluYXJ5XCIsXCJvcmdhbml6YXRpb25cIixcIm9yZ2FuaXplZFwiLFwib3JpZ2luXCIsXCJvcmlnaW5hbFwiLFwib3RoZXJcIixcIm91Z2h0XCIsXG4gIFwib3VyXCIsXCJvdXJzZWx2ZXNcIixcIm91dFwiLFwib3V0ZXJcIixcIm91dGxpbmVcIixcIm91dHNpZGVcIixcIm92ZXJcIixcIm93blwiLFxuICBcIm93bmVyXCIsXCJveHlnZW5cIixcInBhY2tcIixcInBhY2thZ2VcIixcInBhZ2VcIixcInBhaWRcIixcInBhaW5cIixcInBhaW50XCIsXG4gIFwicGFpclwiLFwicGFsYWNlXCIsXCJwYWxlXCIsXCJwYW5cIixcInBhcGVyXCIsXCJwYXJhZ3JhcGhcIixcInBhcmFsbGVsXCIsXCJwYXJlbnRcIixcbiAgXCJwYXJrXCIsXCJwYXJ0XCIsXCJwYXJ0aWNsZXNcIixcInBhcnRpY3VsYXJcIixcInBhcnRpY3VsYXJseVwiLFwicGFydGx5XCIsXCJwYXJ0c1wiLFwicGFydHlcIixcbiAgXCJwYXNzXCIsXCJwYXNzYWdlXCIsXCJwYXN0XCIsXCJwYXRoXCIsXCJwYXR0ZXJuXCIsXCJwYXlcIixcInBlYWNlXCIsXCJwZW5cIixcbiAgXCJwZW5jaWxcIixcInBlb3BsZVwiLFwicGVyXCIsXCJwZXJjZW50XCIsXCJwZXJmZWN0XCIsXCJwZXJmZWN0bHlcIixcInBlcmhhcHNcIixcInBlcmlvZFwiLFxuICBcInBlcnNvblwiLFwicGVyc29uYWxcIixcInBldFwiLFwicGhyYXNlXCIsXCJwaHlzaWNhbFwiLFwicGlhbm9cIixcInBpY2tcIixcInBpY3R1cmVcIixcbiAgXCJwaWN0dXJlZFwiLFwicGllXCIsXCJwaWVjZVwiLFwicGlnXCIsXCJwaWxlXCIsXCJwaWxvdFwiLFwicGluZVwiLFwicGlua1wiLFxuICBcInBpcGVcIixcInBpdGNoXCIsXCJwbGFjZVwiLFwicGxhaW5cIixcInBsYW5cIixcInBsYW5lXCIsXCJwbGFuZXRcIixcInBsYW5uZWRcIixcbiAgXCJwbGFubmluZ1wiLFwicGxhbnRcIixcInBsYXN0aWNcIixcInBsYXRlXCIsXCJwbGF0ZXNcIixcInBsYXlcIixcInBsZWFzYW50XCIsXCJwbGVhc2VcIixcbiAgXCJwbGVhc3VyZVwiLFwicGxlbnR5XCIsXCJwbHVyYWxcIixcInBsdXNcIixcInBvY2tldFwiLFwicG9lbVwiLFwicG9ldFwiLFwicG9ldHJ5XCIsXG4gIFwicG9pbnRcIixcInBvbGVcIixcInBvbGljZVwiLFwicG9saWNlbWFuXCIsXCJwb2xpdGljYWxcIixcInBvbmRcIixcInBvbnlcIixcInBvb2xcIixcbiAgXCJwb29yXCIsXCJwb3B1bGFyXCIsXCJwb3B1bGF0aW9uXCIsXCJwb3JjaFwiLFwicG9ydFwiLFwicG9zaXRpb25cIixcInBvc2l0aXZlXCIsXCJwb3NzaWJsZVwiLFxuICBcInBvc3NpYmx5XCIsXCJwb3N0XCIsXCJwb3RcIixcInBvdGF0b2VzXCIsXCJwb3VuZFwiLFwicG91clwiLFwicG93ZGVyXCIsXCJwb3dlclwiLFxuICBcInBvd2VyZnVsXCIsXCJwcmFjdGljYWxcIixcInByYWN0aWNlXCIsXCJwcmVwYXJlXCIsXCJwcmVzZW50XCIsXCJwcmVzaWRlbnRcIixcInByZXNzXCIsXCJwcmVzc3VyZVwiLFxuICBcInByZXR0eVwiLFwicHJldmVudFwiLFwicHJldmlvdXNcIixcInByaWNlXCIsXCJwcmlkZVwiLFwicHJpbWl0aXZlXCIsXCJwcmluY2lwYWxcIixcInByaW5jaXBsZVwiLFxuICBcInByaW50ZWRcIixcInByaXZhdGVcIixcInByaXplXCIsXCJwcm9iYWJseVwiLFwicHJvYmxlbVwiLFwicHJvY2Vzc1wiLFwicHJvZHVjZVwiLFwicHJvZHVjdFwiLFxuICBcInByb2R1Y3Rpb25cIixcInByb2dyYW1cIixcInByb2dyZXNzXCIsXCJwcm9taXNlZFwiLFwicHJvcGVyXCIsXCJwcm9wZXJseVwiLFwicHJvcGVydHlcIixcInByb3RlY3Rpb25cIixcbiAgXCJwcm91ZFwiLFwicHJvdmVcIixcInByb3ZpZGVcIixcInB1YmxpY1wiLFwicHVsbFwiLFwicHVwaWxcIixcInB1cmVcIixcInB1cnBsZVwiLFxuICBcInB1cnBvc2VcIixcInB1c2hcIixcInB1dFwiLFwicHV0dGluZ1wiLFwicXVhcnRlclwiLFwicXVlZW5cIixcInF1ZXN0aW9uXCIsXCJxdWlja1wiLFxuICBcInF1aWNrbHlcIixcInF1aWV0XCIsXCJxdWlldGx5XCIsXCJxdWl0ZVwiLFwicmFiYml0XCIsXCJyYWNlXCIsXCJyYWRpb1wiLFwicmFpbHJvYWRcIixcbiAgXCJyYWluXCIsXCJyYWlzZVwiLFwicmFuXCIsXCJyYW5jaFwiLFwicmFuZ2VcIixcInJhcGlkbHlcIixcInJhdGVcIixcInJhdGhlclwiLFxuICBcInJhd1wiLFwicmF5c1wiLFwicmVhY2hcIixcInJlYWRcIixcInJlYWRlclwiLFwicmVhZHlcIixcInJlYWxcIixcInJlYWxpemVcIixcbiAgXCJyZWFyXCIsXCJyZWFzb25cIixcInJlY2FsbFwiLFwicmVjZWl2ZVwiLFwicmVjZW50XCIsXCJyZWNlbnRseVwiLFwicmVjb2duaXplXCIsXCJyZWNvcmRcIixcbiAgXCJyZWRcIixcInJlZmVyXCIsXCJyZWZ1c2VkXCIsXCJyZWdpb25cIixcInJlZ3VsYXJcIixcInJlbGF0ZWRcIixcInJlbGF0aW9uc2hpcFwiLFwicmVsaWdpb3VzXCIsXG4gIFwicmVtYWluXCIsXCJyZW1hcmthYmxlXCIsXCJyZW1lbWJlclwiLFwicmVtb3ZlXCIsXCJyZXBlYXRcIixcInJlcGxhY2VcIixcInJlcGxpZWRcIixcInJlcG9ydFwiLFxuICBcInJlcHJlc2VudFwiLFwicmVxdWlyZVwiLFwicmVzZWFyY2hcIixcInJlc3BlY3RcIixcInJlc3RcIixcInJlc3VsdFwiLFwicmV0dXJuXCIsXCJyZXZpZXdcIixcbiAgXCJyaHltZVwiLFwicmh5dGhtXCIsXCJyaWNlXCIsXCJyaWNoXCIsXCJyaWRlXCIsXCJyaWRpbmdcIixcInJpZ2h0XCIsXCJyaW5nXCIsXG4gIFwicmlzZVwiLFwicmlzaW5nXCIsXCJyaXZlclwiLFwicm9hZFwiLFwicm9hclwiLFwicm9ja1wiLFwicm9ja2V0XCIsXCJyb2NreVwiLFxuICBcInJvZFwiLFwicm9sbFwiLFwicm9vZlwiLFwicm9vbVwiLFwicm9vdFwiLFwicm9wZVwiLFwicm9zZVwiLFwicm91Z2hcIixcbiAgXCJyb3VuZFwiLFwicm91dGVcIixcInJvd1wiLFwicnViYmVkXCIsXCJydWJiZXJcIixcInJ1bGVcIixcInJ1bGVyXCIsXCJydW5cIixcbiAgXCJydW5uaW5nXCIsXCJydXNoXCIsXCJzYWRcIixcInNhZGRsZVwiLFwic2FmZVwiLFwic2FmZXR5XCIsXCJzYWlkXCIsXCJzYWlsXCIsXG4gIFwic2FsZVwiLFwic2FsbW9uXCIsXCJzYWx0XCIsXCJzYW1lXCIsXCJzYW5kXCIsXCJzYW5nXCIsXCJzYXRcIixcInNhdGVsbGl0ZXNcIixcbiAgXCJzYXRpc2ZpZWRcIixcInNhdmVcIixcInNhdmVkXCIsXCJzYXdcIixcInNheVwiLFwic2NhbGVcIixcInNjYXJlZFwiLFwic2NlbmVcIixcbiAgXCJzY2hvb2xcIixcInNjaWVuY2VcIixcInNjaWVudGlmaWNcIixcInNjaWVudGlzdFwiLFwic2NvcmVcIixcInNjcmVlblwiLFwic2VhXCIsXCJzZWFyY2hcIixcbiAgXCJzZWFzb25cIixcInNlYXRcIixcInNlY29uZFwiLFwic2VjcmV0XCIsXCJzZWN0aW9uXCIsXCJzZWVcIixcInNlZWRcIixcInNlZWluZ1wiLFxuICBcInNlZW1zXCIsXCJzZWVuXCIsXCJzZWxkb21cIixcInNlbGVjdFwiLFwic2VsZWN0aW9uXCIsXCJzZWxsXCIsXCJzZW5kXCIsXCJzZW5zZVwiLFxuICBcInNlbnRcIixcInNlbnRlbmNlXCIsXCJzZXBhcmF0ZVwiLFwic2VyaWVzXCIsXCJzZXJpb3VzXCIsXCJzZXJ2ZVwiLFwic2VydmljZVwiLFwic2V0c1wiLFxuICBcInNldHRpbmdcIixcInNldHRsZVwiLFwic2V0dGxlcnNcIixcInNldmVuXCIsXCJzZXZlcmFsXCIsXCJzaGFkZVwiLFwic2hhZG93XCIsXCJzaGFrZVwiLFxuICBcInNoYWtpbmdcIixcInNoYWxsXCIsXCJzaGFsbG93XCIsXCJzaGFwZVwiLFwic2hhcmVcIixcInNoYXJwXCIsXCJzaGVcIixcInNoZWVwXCIsXG4gIFwic2hlZXRcIixcInNoZWxmXCIsXCJzaGVsbHNcIixcInNoZWx0ZXJcIixcInNoaW5lXCIsXCJzaGlubmluZ1wiLFwic2hpcFwiLFwic2hpcnRcIixcbiAgXCJzaG9lXCIsXCJzaG9vdFwiLFwic2hvcFwiLFwic2hvcmVcIixcInNob3J0XCIsXCJzaG9ydGVyXCIsXCJzaG90XCIsXCJzaG91bGRcIixcbiAgXCJzaG91bGRlclwiLFwic2hvdXRcIixcInNob3dcIixcInNob3duXCIsXCJzaHV0XCIsXCJzaWNrXCIsXCJzaWRlc1wiLFwic2lnaHRcIixcbiAgXCJzaWduXCIsXCJzaWduYWxcIixcInNpbGVuY2VcIixcInNpbGVudFwiLFwic2lsa1wiLFwic2lsbHlcIixcInNpbHZlclwiLFwic2ltaWxhclwiLFxuICBcInNpbXBsZVwiLFwic2ltcGxlc3RcIixcInNpbXBseVwiLFwic2luY2VcIixcInNpbmdcIixcInNpbmdsZVwiLFwic2lua1wiLFwic2lzdGVyXCIsXG4gIFwic2l0XCIsXCJzaXR0aW5nXCIsXCJzaXR1YXRpb25cIixcInNpeFwiLFwic2l6ZVwiLFwic2tpbGxcIixcInNraW5cIixcInNreVwiLFxuICBcInNsYWJzXCIsXCJzbGF2ZVwiLFwic2xlZXBcIixcInNsZXB0XCIsXCJzbGlkZVwiLFwic2xpZ2h0XCIsXCJzbGlnaHRseVwiLFwic2xpcFwiLFxuICBcInNsaXBwZWRcIixcInNsb3BlXCIsXCJzbG93XCIsXCJzbG93bHlcIixcInNtYWxsXCIsXCJzbWFsbGVyXCIsXCJzbWFsbGVzdFwiLFwic21lbGxcIixcbiAgXCJzbWlsZVwiLFwic21va2VcIixcInNtb290aFwiLFwic25ha2VcIixcInNub3dcIixcInNvXCIsXCJzb2FwXCIsXCJzb2NpYWxcIixcbiAgXCJzb2NpZXR5XCIsXCJzb2Z0XCIsXCJzb2Z0bHlcIixcInNvaWxcIixcInNvbGFyXCIsXCJzb2xkXCIsXCJzb2xkaWVyXCIsXCJzb2xpZFwiLFxuICBcInNvbHV0aW9uXCIsXCJzb2x2ZVwiLFwic29tZVwiLFwic29tZWJvZHlcIixcInNvbWVob3dcIixcInNvbWVvbmVcIixcInNvbWV0aGluZ1wiLFwic29tZXRpbWVcIixcbiAgXCJzb21ld2hlcmVcIixcInNvblwiLFwic29uZ1wiLFwic29vblwiLFwic29ydFwiLFwic291bmRcIixcInNvdXJjZVwiLFwic291dGhcIixcbiAgXCJzb3V0aGVyblwiLFwic3BhY2VcIixcInNwZWFrXCIsXCJzcGVjaWFsXCIsXCJzcGVjaWVzXCIsXCJzcGVjaWZpY1wiLFwic3BlZWNoXCIsXCJzcGVlZFwiLFxuICBcInNwZWxsXCIsXCJzcGVuZFwiLFwic3BlbnRcIixcInNwaWRlclwiLFwic3BpblwiLFwic3Bpcml0XCIsXCJzcGl0ZVwiLFwic3BsaXRcIixcbiAgXCJzcG9rZW5cIixcInNwb3J0XCIsXCJzcHJlYWRcIixcInNwcmluZ1wiLFwic3F1YXJlXCIsXCJzdGFnZVwiLFwic3RhaXJzXCIsXCJzdGFuZFwiLFxuICBcInN0YW5kYXJkXCIsXCJzdGFyXCIsXCJzdGFyZWRcIixcInN0YXJ0XCIsXCJzdGF0ZVwiLFwic3RhdGVtZW50XCIsXCJzdGF0aW9uXCIsXCJzdGF5XCIsXG4gIFwic3RlYWR5XCIsXCJzdGVhbVwiLFwic3RlZWxcIixcInN0ZWVwXCIsXCJzdGVtc1wiLFwic3RlcFwiLFwic3RlcHBlZFwiLFwic3RpY2tcIixcbiAgXCJzdGlmZlwiLFwic3RpbGxcIixcInN0b2NrXCIsXCJzdG9tYWNoXCIsXCJzdG9uZVwiLFwic3Rvb2RcIixcInN0b3BcIixcInN0b3BwZWRcIixcbiAgXCJzdG9yZVwiLFwic3Rvcm1cIixcInN0b3J5XCIsXCJzdG92ZVwiLFwic3RyYWlnaHRcIixcInN0cmFuZ2VcIixcInN0cmFuZ2VyXCIsXCJzdHJhd1wiLFxuICBcInN0cmVhbVwiLFwic3RyZWV0XCIsXCJzdHJlbmd0aFwiLFwic3RyZXRjaFwiLFwic3RyaWtlXCIsXCJzdHJpbmdcIixcInN0cmlwXCIsXCJzdHJvbmdcIixcbiAgXCJzdHJvbmdlclwiLFwic3RydWNrXCIsXCJzdHJ1Y3R1cmVcIixcInN0cnVnZ2xlXCIsXCJzdHVja1wiLFwic3R1ZGVudFwiLFwic3R1ZGllZFwiLFwic3R1ZHlpbmdcIixcbiAgXCJzdWJqZWN0XCIsXCJzdWJzdGFuY2VcIixcInN1Y2Nlc3NcIixcInN1Y2Nlc3NmdWxcIixcInN1Y2hcIixcInN1ZGRlblwiLFwic3VkZGVubHlcIixcInN1Z2FyXCIsXG4gIFwic3VnZ2VzdFwiLFwic3VpdFwiLFwic3VtXCIsXCJzdW1tZXJcIixcInN1blwiLFwic3VubGlnaHRcIixcInN1cHBlclwiLFwic3VwcGx5XCIsXG4gIFwic3VwcG9ydFwiLFwic3VwcG9zZVwiLFwic3VyZVwiLFwic3VyZmFjZVwiLFwic3VycHJpc2VcIixcInN1cnJvdW5kZWRcIixcInN3YW1cIixcInN3ZWV0XCIsXG4gIFwic3dlcHRcIixcInN3aW1cIixcInN3aW1taW5nXCIsXCJzd2luZ1wiLFwic3d1bmdcIixcInN5bGxhYmxlXCIsXCJzeW1ib2xcIixcInN5c3RlbVwiLFxuICBcInRhYmxlXCIsXCJ0YWlsXCIsXCJ0YWtlXCIsXCJ0YWtlblwiLFwidGFsZXNcIixcInRhbGtcIixcInRhbGxcIixcInRhbmtcIixcbiAgXCJ0YXBlXCIsXCJ0YXNrXCIsXCJ0YXN0ZVwiLFwidGF1Z2h0XCIsXCJ0YXhcIixcInRlYVwiLFwidGVhY2hcIixcInRlYWNoZXJcIixcbiAgXCJ0ZWFtXCIsXCJ0ZWFyc1wiLFwidGVldGhcIixcInRlbGVwaG9uZVwiLFwidGVsZXZpc2lvblwiLFwidGVsbFwiLFwidGVtcGVyYXR1cmVcIixcInRlblwiLFxuICBcInRlbnRcIixcInRlcm1cIixcInRlcnJpYmxlXCIsXCJ0ZXN0XCIsXCJ0aGFuXCIsXCJ0aGFua1wiLFwidGhhdFwiLFwidGhlZVwiLFxuICBcInRoZW1cIixcInRoZW1zZWx2ZXNcIixcInRoZW5cIixcInRoZW9yeVwiLFwidGhlcmVcIixcInRoZXJlZm9yZVwiLFwidGhlc2VcIixcInRoZXlcIixcbiAgXCJ0aGlja1wiLFwidGhpblwiLFwidGhpbmdcIixcInRoaW5rXCIsXCJ0aGlyZFwiLFwidGhpcnR5XCIsXCJ0aGlzXCIsXCJ0aG9zZVwiLFxuICBcInRob3VcIixcInRob3VnaFwiLFwidGhvdWdodFwiLFwidGhvdXNhbmRcIixcInRocmVhZFwiLFwidGhyZWVcIixcInRocmV3XCIsXCJ0aHJvYXRcIixcbiAgXCJ0aHJvdWdoXCIsXCJ0aHJvdWdob3V0XCIsXCJ0aHJvd1wiLFwidGhyb3duXCIsXCJ0aHVtYlwiLFwidGh1c1wiLFwidGh5XCIsXCJ0aWRlXCIsXG4gIFwidGllXCIsXCJ0aWdodFwiLFwidGlnaHRseVwiLFwidGlsbFwiLFwidGltZVwiLFwidGluXCIsXCJ0aW55XCIsXCJ0aXBcIixcbiAgXCJ0aXJlZFwiLFwidGl0bGVcIixcInRvXCIsXCJ0b2JhY2NvXCIsXCJ0b2RheVwiLFwidG9nZXRoZXJcIixcInRvbGRcIixcInRvbW9ycm93XCIsXG4gIFwidG9uZVwiLFwidG9uZ3VlXCIsXCJ0b25pZ2h0XCIsXCJ0b29cIixcInRvb2tcIixcInRvb2xcIixcInRvcFwiLFwidG9waWNcIixcbiAgXCJ0b3JuXCIsXCJ0b3RhbFwiLFwidG91Y2hcIixcInRvd2FyZFwiLFwidG93ZXJcIixcInRvd25cIixcInRveVwiLFwidHJhY2VcIixcbiAgXCJ0cmFja1wiLFwidHJhZGVcIixcInRyYWZmaWNcIixcInRyYWlsXCIsXCJ0cmFpblwiLFwidHJhbnNwb3J0YXRpb25cIixcInRyYXBcIixcInRyYXZlbFwiLFxuICBcInRyZWF0ZWRcIixcInRyZWVcIixcInRyaWFuZ2xlXCIsXCJ0cmliZVwiLFwidHJpY2tcIixcInRyaWVkXCIsXCJ0cmlwXCIsXCJ0cm9vcHNcIixcbiAgXCJ0cm9waWNhbFwiLFwidHJvdWJsZVwiLFwidHJ1Y2tcIixcInRydW5rXCIsXCJ0cnV0aFwiLFwidHJ5XCIsXCJ0dWJlXCIsXCJ0dW5lXCIsXG4gIFwidHVyblwiLFwidHdlbHZlXCIsXCJ0d2VudHlcIixcInR3aWNlXCIsXCJ0d29cIixcInR5cGVcIixcInR5cGljYWxcIixcInVuY2xlXCIsXG4gIFwidW5kZXJcIixcInVuZGVybGluZVwiLFwidW5kZXJzdGFuZGluZ1wiLFwidW5oYXBweVwiLFwidW5pb25cIixcInVuaXRcIixcInVuaXZlcnNlXCIsXCJ1bmtub3duXCIsXG4gIFwidW5sZXNzXCIsXCJ1bnRpbFwiLFwidW51c3VhbFwiLFwidXBcIixcInVwb25cIixcInVwcGVyXCIsXCJ1cHdhcmRcIixcInVzXCIsXG4gIFwidXNlXCIsXCJ1c2VmdWxcIixcInVzaW5nXCIsXCJ1c3VhbFwiLFwidXN1YWxseVwiLFwidmFsbGV5XCIsXCJ2YWx1YWJsZVwiLFwidmFsdWVcIixcbiAgXCJ2YXBvclwiLFwidmFyaWV0eVwiLFwidmFyaW91c1wiLFwidmFzdFwiLFwidmVnZXRhYmxlXCIsXCJ2ZXJiXCIsXCJ2ZXJ0aWNhbFwiLFwidmVyeVwiLFxuICBcInZlc3NlbHNcIixcInZpY3RvcnlcIixcInZpZXdcIixcInZpbGxhZ2VcIixcInZpc2l0XCIsXCJ2aXNpdG9yXCIsXCJ2b2ljZVwiLFwidm9sdW1lXCIsXG4gIFwidm90ZVwiLFwidm93ZWxcIixcInZveWFnZVwiLFwid2Fnb25cIixcIndhaXRcIixcIndhbGtcIixcIndhbGxcIixcIndhbnRcIixcbiAgXCJ3YXJcIixcIndhcm1cIixcIndhcm5cIixcIndhc1wiLFwid2FzaFwiLFwid2FzdGVcIixcIndhdGNoXCIsXCJ3YXRlclwiLFxuICBcIndhdmVcIixcIndheVwiLFwid2VcIixcIndlYWtcIixcIndlYWx0aFwiLFwid2VhclwiLFwid2VhdGhlclwiLFwid2Vla1wiLFxuICBcIndlaWdoXCIsXCJ3ZWlnaHRcIixcIndlbGNvbWVcIixcIndlbGxcIixcIndlbnRcIixcIndlcmVcIixcIndlc3RcIixcIndlc3Rlcm5cIixcbiAgXCJ3ZXRcIixcIndoYWxlXCIsXCJ3aGF0XCIsXCJ3aGF0ZXZlclwiLFwid2hlYXRcIixcIndoZWVsXCIsXCJ3aGVuXCIsXCJ3aGVuZXZlclwiLFxuICBcIndoZXJlXCIsXCJ3aGVyZXZlclwiLFwid2hldGhlclwiLFwid2hpY2hcIixcIndoaWxlXCIsXCJ3aGlzcGVyZWRcIixcIndoaXN0bGVcIixcIndoaXRlXCIsXG4gIFwid2hvXCIsXCJ3aG9sZVwiLFwid2hvbVwiLFwid2hvc2VcIixcIndoeVwiLFwid2lkZVwiLFwid2lkZWx5XCIsXCJ3aWZlXCIsXG4gIFwid2lsZFwiLFwid2lsbFwiLFwid2lsbGluZ1wiLFwid2luXCIsXCJ3aW5kXCIsXCJ3aW5kb3dcIixcIndpbmdcIixcIndpbnRlclwiLFxuICBcIndpcmVcIixcIndpc2VcIixcIndpc2hcIixcIndpdGhcIixcIndpdGhpblwiLFwid2l0aG91dFwiLFwid29sZlwiLFwid29tZW5cIixcbiAgXCJ3b25cIixcIndvbmRlclwiLFwid29uZGVyZnVsXCIsXCJ3b29kXCIsXCJ3b29kZW5cIixcIndvb2xcIixcIndvcmRcIixcIndvcmVcIixcbiAgXCJ3b3JrXCIsXCJ3b3JrZXJcIixcIndvcmxkXCIsXCJ3b3JyaWVkXCIsXCJ3b3JyeVwiLFwid29yc2VcIixcIndvcnRoXCIsXCJ3b3VsZFwiLFxuICBcIndyYXBwZWRcIixcIndyaXRlXCIsXCJ3cml0ZXJcIixcIndyaXRpbmdcIixcIndyaXR0ZW5cIixcIndyb25nXCIsXCJ3cm90ZVwiLFwieWFyZFwiLFxuICBcInllYXJcIixcInllbGxvd1wiLFwieWVzXCIsXCJ5ZXN0ZXJkYXlcIixcInlldFwiLFwieW91XCIsXCJ5b3VuZ1wiLFwieW91bmdlclwiLFxuICBcInlvdXJcIixcInlvdXJzZWxmXCIsXCJ5b3V0aFwiLFwiemVyb1wiLFwiem9vXCJcbl07XG5cbmZ1bmN0aW9uIHdvcmRzKG9wdGlvbnMpIHtcbiAgZnVuY3Rpb24gd29yZCgpIHtcbiAgICByZXR1cm4gd29yZExpc3RbcmFuZEludCh3b3JkTGlzdC5sZW5ndGgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJhbmRJbnQobGVzc1RoYW4pIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVzc1RoYW4pO1xuICB9XG5cbiAgLy8gTm8gYXJndW1lbnRzID0gZ2VuZXJhdGUgb25lIHdvcmRcbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gd29yZCgpO1xuICB9XG5cbiAgLy8gSnVzdCBhIG51bWJlciA9IHJldHVybiB0aGF0IG1hbnkgd29yZHNcbiAgaWYgKHR5cGVvZihvcHRpb25zKSA9PT0gJ251bWJlcicpIHtcbiAgICBvcHRpb25zID0geyBleGFjdGx5OiBvcHRpb25zIH07XG4gIH1cblxuICAvLyBvcHRpb25zIHN1cHBvcnRlZDogZXhhY3RseSwgbWluLCBtYXgsIGpvaW5cblxuICBpZiAob3B0aW9ucy5leGFjdGx5KSB7XG4gICAgb3B0aW9ucy5taW4gPSBvcHRpb25zLmV4YWN0bHk7XG4gICAgb3B0aW9ucy5tYXggPSBvcHRpb25zLmV4YWN0bHk7XG4gIH1cbiAgdmFyIHRvdGFsID0gb3B0aW9ucy5taW4gKyByYW5kSW50KG9wdGlvbnMubWF4ICsgMSAtIG9wdGlvbnMubWluKTtcbiAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IChpIDwgdG90YWwpOyBpKyspIHtcbiAgICByZXN1bHRzLnB1c2god29yZCgpKTtcbiAgfVxuICBpZiAob3B0aW9ucy5qb2luKSB7XG4gICAgcmVzdWx0cyA9IHJlc3VsdHMuam9pbihvcHRpb25zLmpvaW4pO1xuICB9XG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRzO1xuLy8gRXhwb3J0IHRoZSB3b3JkIGxpc3QgYXMgaXQgaXMgb2Z0ZW4gdXNlZnVsXG53b3Jkcy53b3JkTGlzdCA9IHdvcmRMaXN0O1xuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmFnZ2FibGUoZWxlbWVudCkge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBlbGVtZW50LmRyYWdPZmZzZXQgPSB7XG4gICAgICBsZWZ0OiBldmVudC5jbGllbnRYIC0gZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgICAgdG9wOiBldmVudC5jbGllbnRZIC0gZWxlbWVudC5vZmZzZXRUb3BcbiAgICB9O1xuICB9KTtcblxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWxlbWVudC5kcmFnT2Zmc2V0ID0gbnVsbDtcbiAgfSk7XG5cbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmRyYWdPZmZzZXQpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGV2ZW50LmNsaWVudFggLSBlbGVtZW50LmRyYWdPZmZzZXQubGVmdDtcbiAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gZXZlbnQuY2xpZW50WSAtIGVsZW1lbnQuZHJhZ09mZnNldC50b3A7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4iXX0=
