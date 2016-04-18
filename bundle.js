(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _randomWords = require('random-words');

var _randomWords2 = _interopRequireDefault(_randomWords);

var _draggable = require('./src/draggable');

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wordcount = 5000;
var boxcount = 10;

function createBox() {
  var box = document.createElement("div");
  box.setAttribute("class", "box");
  box.style.top = Math.random() * 10000 % (window.innerHeight - 200);
  box.style.left = Math.random() * 10000 % (window.innerWidth - 200);
  var dimension = Math.random() * 1000 % 200;
  dimension = dimension < 50 ? 50 : dimension;
  box.style.height = dimension;
  box.style.width = dimension;
  return (0, _draggable2.default)(box);
}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.getElementsByTagName("body")[0];
  var container = document.createElement("div");
  var words = (0, _randomWords2.default)({ exactly: wordcount, join: ' ' });
  var shape = document.createElement("div");

  for (var i = 0; i < boxcount; i++) {
    var box = createBox();
    container.appendChild(box);
  }

  var textContainer = document.createTextNode(words);
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

  document.addEventListener("mousemove", function (event) {
    if (element.dragOffset) {
      element.style.left = event.clientX - element.dragOffset.left;
      element.style.top = event.clientY - element.dragOffset.top;
    }
  });

  return element;
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmFuZG9tLXdvcmRzL2luZGV4LmpzIiwic3JjL2RyYWdnYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxZQUFZLElBQVo7QUFDSixJQUFJLFdBQVcsRUFBWDs7QUFFSixTQUFTLFNBQVQsR0FBcUI7QUFDbkIsTUFBSSxNQUFNLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUFOLENBRGU7QUFFbkIsTUFBSSxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLEtBQTFCLEVBRm1CO0FBR25CLE1BQUksS0FBSixDQUFVLEdBQVYsR0FBZ0IsS0FBSyxNQUFMLEtBQWdCLEtBQWhCLElBQXlCLE9BQU8sV0FBUCxHQUFxQixHQUFyQixDQUF6QixDQUhHO0FBSW5CLE1BQUksS0FBSixDQUFVLElBQVYsR0FBaUIsS0FBSyxNQUFMLEtBQWdCLEtBQWhCLElBQXlCLE9BQU8sVUFBUCxHQUFvQixHQUFwQixDQUF6QixDQUpFO0FBS25CLE1BQUksWUFBWSxLQUFLLE1BQUwsS0FBZ0IsSUFBaEIsR0FBdUIsR0FBdkIsQ0FMRztBQU1uQixjQUFZLFNBQUMsR0FBWSxFQUFaLEdBQWtCLEVBQW5CLEdBQXdCLFNBQXhCLENBTk87QUFPbkIsTUFBSSxLQUFKLENBQVUsTUFBVixHQUFtQixTQUFuQixDQVBtQjtBQVFuQixNQUFJLEtBQUosQ0FBVSxLQUFWLEdBQWtCLFNBQWxCLENBUm1CO0FBU25CLFNBQU8seUJBQVUsR0FBVixDQUFQLENBVG1CO0NBQXJCOztBQVlBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsTUFBSSxPQUFPLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBUCxDQUQ4QztBQUVsRCxNQUFJLFlBQVksU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQVosQ0FGOEM7QUFHbEQsTUFBSSxRQUFRLDJCQUFZLEVBQUUsU0FBUyxTQUFULEVBQW9CLE1BQU0sR0FBTixFQUFsQyxDQUFSLENBSDhDO0FBSWxELE1BQUksUUFBUSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBUixDQUo4Qzs7QUFNbEQsT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksUUFBSixFQUFjLEdBQTlCLEVBQW1DO0FBQ2pDLFFBQUksTUFBTSxXQUFOLENBRDZCO0FBRWpDLGNBQVUsV0FBVixDQUFzQixHQUF0QixFQUZpQztHQUFuQzs7QUFLQSxNQUFJLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBaEIsQ0FYOEM7QUFZbEQsWUFBVSxXQUFWLENBQXNCLGFBQXRCLEVBWmtEOztBQWNsRCxPQUFLLFdBQUwsQ0FBaUIsU0FBakIsRUFka0Q7Q0FBTixDQUE5Qzs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O2tCQ2hTd0I7QUFBVCxTQUFTLFNBQVQsQ0FBbUIsT0FBbkIsRUFBNEI7QUFDekMsVUFBUSxnQkFBUixDQUF5QixXQUF6QixFQUFzQyxVQUFDLEtBQUQsRUFBVztBQUMvQyxVQUFNLGNBQU4sR0FEK0M7QUFFL0MsWUFBUSxVQUFSLEdBQXFCO0FBQ25CLFlBQU0sTUFBTSxPQUFOLEdBQWdCLFFBQVEsVUFBUjtBQUN0QixXQUFLLE1BQU0sT0FBTixHQUFnQixRQUFRLFNBQVI7S0FGdkIsQ0FGK0M7R0FBWCxDQUF0QyxDQUR5Qzs7QUFTekMsVUFBUSxnQkFBUixDQUF5QixTQUF6QixFQUFvQyxVQUFDLEtBQUQsRUFBVztBQUM3QyxVQUFNLGNBQU4sR0FENkM7QUFFN0MsWUFBUSxVQUFSLEdBQXFCLElBQXJCLENBRjZDO0dBQVgsQ0FBcEMsQ0FUeUM7O0FBY3pDLFdBQVMsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsVUFBQyxLQUFELEVBQVc7QUFDaEQsUUFBSSxRQUFRLFVBQVIsRUFBb0I7QUFDdEIsY0FBUSxLQUFSLENBQWMsSUFBZCxHQUFxQixNQUFNLE9BQU4sR0FBZ0IsUUFBUSxVQUFSLENBQW1CLElBQW5CLENBRGY7QUFFdEIsY0FBUSxLQUFSLENBQWMsR0FBZCxHQUFvQixNQUFNLE9BQU4sR0FBZ0IsUUFBUSxVQUFSLENBQW1CLEdBQW5CLENBRmQ7S0FBeEI7R0FEcUMsQ0FBdkMsQ0FkeUM7O0FBcUJ6QyxTQUFPLE9BQVAsQ0FyQnlDO0NBQTVCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCByYW5kb21Xb3JkcyBmcm9tICdyYW5kb20td29yZHMnO1xuaW1wb3J0IGRyYWdnYWJsZSBmcm9tICcuL3NyYy9kcmFnZ2FibGUnO1xuXG5sZXQgd29yZGNvdW50ID0gNTAwMDtcbmxldCBib3hjb3VudCA9IDEwO1xuXG5mdW5jdGlvbiBjcmVhdGVCb3goKSB7XG4gIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJib3hcIik7XG4gIGJveC5zdHlsZS50b3AgPSBNYXRoLnJhbmRvbSgpICogMTAwMDAgJSAod2luZG93LmlubmVySGVpZ2h0IC0gMjAwKTtcbiAgYm94LnN0eWxlLmxlZnQgPSBNYXRoLnJhbmRvbSgpICogMTAwMDAgJSAod2luZG93LmlubmVyV2lkdGggLSAyMDApO1xuICBsZXQgZGltZW5zaW9uID0gTWF0aC5yYW5kb20oKSAqIDEwMDAgJSAyMDA7XG4gIGRpbWVuc2lvbiA9IChkaW1lbnNpb24gPCA1MCkgPyA1MCA6IGRpbWVuc2lvbjtcbiAgYm94LnN0eWxlLmhlaWdodCA9IGRpbWVuc2lvbjtcbiAgYm94LnN0eWxlLndpZHRoID0gZGltZW5zaW9uO1xuICByZXR1cm4gZHJhZ2dhYmxlKGJveCk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF07XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgd29yZHMgPSByYW5kb21Xb3Jkcyh7IGV4YWN0bHk6IHdvcmRjb3VudCwgam9pbjogJyAnfSk7XG4gIGxldCBzaGFwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBib3hjb3VudDsgaSsrKSB7XG4gICAgbGV0IGJveCA9IGNyZWF0ZUJveCgpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3gpO1xuICB9IFxuXG4gIGxldCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod29yZHMpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufSk7XG5cblxuIiwidmFyIHdvcmRMaXN0ID0gW1xuICAvLyBCb3Jyb3dlZCBmcm9tIHhrY2QgcGFzc3dvcmQgZ2VuZXJhdG9yIHdoaWNoIGJvcnJvd2VkIGl0IGZyb20gd2hlcmV2ZXJcbiAgXCJhYmlsaXR5XCIsXCJhYmxlXCIsXCJhYm9hcmRcIixcImFib3V0XCIsXCJhYm92ZVwiLFwiYWNjZXB0XCIsXCJhY2NpZGVudFwiLFwiYWNjb3JkaW5nXCIsXG4gIFwiYWNjb3VudFwiLFwiYWNjdXJhdGVcIixcImFjcmVzXCIsXCJhY3Jvc3NcIixcImFjdFwiLFwiYWN0aW9uXCIsXCJhY3RpdmVcIixcImFjdGl2aXR5XCIsXG4gIFwiYWN0dWFsXCIsXCJhY3R1YWxseVwiLFwiYWRkXCIsXCJhZGRpdGlvblwiLFwiYWRkaXRpb25hbFwiLFwiYWRqZWN0aXZlXCIsXCJhZHVsdFwiLFwiYWR2ZW50dXJlXCIsXG4gIFwiYWR2aWNlXCIsXCJhZmZlY3RcIixcImFmcmFpZFwiLFwiYWZ0ZXJcIixcImFmdGVybm9vblwiLFwiYWdhaW5cIixcImFnYWluc3RcIixcImFnZVwiLFxuICBcImFnb1wiLFwiYWdyZWVcIixcImFoZWFkXCIsXCJhaWRcIixcImFpclwiLFwiYWlycGxhbmVcIixcImFsaWtlXCIsXCJhbGl2ZVwiLFxuICBcImFsbFwiLFwiYWxsb3dcIixcImFsbW9zdFwiLFwiYWxvbmVcIixcImFsb25nXCIsXCJhbG91ZFwiLFwiYWxwaGFiZXRcIixcImFscmVhZHlcIixcbiAgXCJhbHNvXCIsXCJhbHRob3VnaFwiLFwiYW1cIixcImFtb25nXCIsXCJhbW91bnRcIixcImFuY2llbnRcIixcImFuZ2xlXCIsXCJhbmdyeVwiLFxuICBcImFuaW1hbFwiLFwiYW5ub3VuY2VkXCIsXCJhbm90aGVyXCIsXCJhbnN3ZXJcIixcImFudHNcIixcImFueVwiLFwiYW55Ym9keVwiLFwiYW55b25lXCIsXG4gIFwiYW55dGhpbmdcIixcImFueXdheVwiLFwiYW55d2hlcmVcIixcImFwYXJ0XCIsXCJhcGFydG1lbnRcIixcImFwcGVhcmFuY2VcIixcImFwcGxlXCIsXCJhcHBsaWVkXCIsXG4gIFwiYXBwcm9wcmlhdGVcIixcImFyZVwiLFwiYXJlYVwiLFwiYXJtXCIsXCJhcm15XCIsXCJhcm91bmRcIixcImFycmFuZ2VcIixcImFycmFuZ2VtZW50XCIsXG4gIFwiYXJyaXZlXCIsXCJhcnJvd1wiLFwiYXJ0XCIsXCJhcnRpY2xlXCIsXCJhc1wiLFwiYXNpZGVcIixcImFza1wiLFwiYXNsZWVwXCIsXG4gIFwiYXRcIixcImF0ZVwiLFwiYXRtb3NwaGVyZVwiLFwiYXRvbVwiLFwiYXRvbWljXCIsXCJhdHRhY2hlZFwiLFwiYXR0YWNrXCIsXCJhdHRlbXB0XCIsXG4gIFwiYXR0ZW50aW9uXCIsXCJhdWRpZW5jZVwiLFwiYXV0aG9yXCIsXCJhdXRvbW9iaWxlXCIsXCJhdmFpbGFibGVcIixcImF2ZXJhZ2VcIixcImF2b2lkXCIsXCJhd2FyZVwiLFxuICBcImF3YXlcIixcImJhYnlcIixcImJhY2tcIixcImJhZFwiLFwiYmFkbHlcIixcImJhZ1wiLFwiYmFsYW5jZVwiLFwiYmFsbFwiLFxuICBcImJhbGxvb25cIixcImJhbmRcIixcImJhbmtcIixcImJhclwiLFwiYmFyZVwiLFwiYmFya1wiLFwiYmFyblwiLFwiYmFzZVwiLFxuICBcImJhc2ViYWxsXCIsXCJiYXNpY1wiLFwiYmFzaXNcIixcImJhc2tldFwiLFwiYmF0XCIsXCJiYXR0bGVcIixcImJlXCIsXCJiZWFuXCIsXG4gIFwiYmVhclwiLFwiYmVhdFwiLFwiYmVhdXRpZnVsXCIsXCJiZWF1dHlcIixcImJlY2FtZVwiLFwiYmVjYXVzZVwiLFwiYmVjb21lXCIsXCJiZWNvbWluZ1wiLFxuICBcImJlZVwiLFwiYmVlblwiLFwiYmVmb3JlXCIsXCJiZWdhblwiLFwiYmVnaW5uaW5nXCIsXCJiZWd1blwiLFwiYmVoYXZpb3JcIixcImJlaGluZFwiLFxuICBcImJlaW5nXCIsXCJiZWxpZXZlZFwiLFwiYmVsbFwiLFwiYmVsb25nXCIsXCJiZWxvd1wiLFwiYmVsdFwiLFwiYmVuZFwiLFwiYmVuZWF0aFwiLFxuICBcImJlbnRcIixcImJlc2lkZVwiLFwiYmVzdFwiLFwiYmV0XCIsXCJiZXR0ZXJcIixcImJldHdlZW5cIixcImJleW9uZFwiLFwiYmljeWNsZVwiLFxuICBcImJpZ2dlclwiLFwiYmlnZ2VzdFwiLFwiYmlsbFwiLFwiYmlyZHNcIixcImJpcnRoXCIsXCJiaXJ0aGRheVwiLFwiYml0XCIsXCJiaXRlXCIsXG4gIFwiYmxhY2tcIixcImJsYW5rXCIsXCJibGFua2V0XCIsXCJibGV3XCIsXCJibGluZFwiLFwiYmxvY2tcIixcImJsb29kXCIsXCJibG93XCIsXG4gIFwiYmx1ZVwiLFwiYm9hcmRcIixcImJvYXRcIixcImJvZHlcIixcImJvbmVcIixcImJvb2tcIixcImJvcmRlclwiLFwiYm9yblwiLFxuICBcImJvdGhcIixcImJvdHRsZVwiLFwiYm90dG9tXCIsXCJib3VuZFwiLFwiYm93XCIsXCJib3dsXCIsXCJib3hcIixcImJveVwiLFxuICBcImJyYWluXCIsXCJicmFuY2hcIixcImJyYXNzXCIsXCJicmF2ZVwiLFwiYnJlYWRcIixcImJyZWFrXCIsXCJicmVha2Zhc3RcIixcImJyZWF0aFwiLFxuICBcImJyZWF0aGVcIixcImJyZWF0aGluZ1wiLFwiYnJlZXplXCIsXCJicmlja1wiLFwiYnJpZGdlXCIsXCJicmllZlwiLFwiYnJpZ2h0XCIsXCJicmluZ1wiLFxuICBcImJyb2FkXCIsXCJicm9rZVwiLFwiYnJva2VuXCIsXCJicm90aGVyXCIsXCJicm91Z2h0XCIsXCJicm93blwiLFwiYnJ1c2hcIixcImJ1ZmZhbG9cIixcbiAgXCJidWlsZFwiLFwiYnVpbGRpbmdcIixcImJ1aWx0XCIsXCJidXJpZWRcIixcImJ1cm5cIixcImJ1cnN0XCIsXCJidXNcIixcImJ1c2hcIixcbiAgXCJidXNpbmVzc1wiLFwiYnVzeVwiLFwiYnV0XCIsXCJidXR0ZXJcIixcImJ1eVwiLFwiYnlcIixcImNhYmluXCIsXCJjYWdlXCIsXG4gIFwiY2FrZVwiLFwiY2FsbFwiLFwiY2FsbVwiLFwiY2FtZVwiLFwiY2FtZXJhXCIsXCJjYW1wXCIsXCJjYW5cIixcImNhbmFsXCIsXG4gIFwiY2Fubm90XCIsXCJjYXBcIixcImNhcGl0YWxcIixcImNhcHRhaW5cIixcImNhcHR1cmVkXCIsXCJjYXJcIixcImNhcmJvblwiLFwiY2FyZFwiLFxuICBcImNhcmVcIixcImNhcmVmdWxcIixcImNhcmVmdWxseVwiLFwiY2FycmllZFwiLFwiY2FycnlcIixcImNhc2VcIixcImNhc3RcIixcImNhc3RsZVwiLFxuICBcImNhdFwiLFwiY2F0Y2hcIixcImNhdHRsZVwiLFwiY2F1Z2h0XCIsXCJjYXVzZVwiLFwiY2F2ZVwiLFwiY2VsbFwiLFwiY2VudFwiLFxuICBcImNlbnRlclwiLFwiY2VudHJhbFwiLFwiY2VudHVyeVwiLFwiY2VydGFpblwiLFwiY2VydGFpbmx5XCIsXCJjaGFpblwiLFwiY2hhaXJcIixcImNoYW1iZXJcIixcbiAgXCJjaGFuY2VcIixcImNoYW5nZVwiLFwiY2hhbmdpbmdcIixcImNoYXB0ZXJcIixcImNoYXJhY3RlclwiLFwiY2hhcmFjdGVyaXN0aWNcIixcImNoYXJnZVwiLFwiY2hhcnRcIixcbiAgXCJjaGVja1wiLFwiY2hlZXNlXCIsXCJjaGVtaWNhbFwiLFwiY2hlc3RcIixcImNoaWNrZW5cIixcImNoaWVmXCIsXCJjaGlsZFwiLFwiY2hpbGRyZW5cIixcbiAgXCJjaG9pY2VcIixcImNob29zZVwiLFwiY2hvc2VcIixcImNob3NlblwiLFwiY2h1cmNoXCIsXCJjaXJjbGVcIixcImNpcmN1c1wiLFwiY2l0aXplblwiLFxuICBcImNpdHlcIixcImNsYXNzXCIsXCJjbGFzc3Jvb21cIixcImNsYXdzXCIsXCJjbGF5XCIsXCJjbGVhblwiLFwiY2xlYXJcIixcImNsZWFybHlcIixcbiAgXCJjbGltYXRlXCIsXCJjbGltYlwiLFwiY2xvY2tcIixcImNsb3NlXCIsXCJjbG9zZWx5XCIsXCJjbG9zZXJcIixcImNsb3RoXCIsXCJjbG90aGVzXCIsXG4gIFwiY2xvdGhpbmdcIixcImNsb3VkXCIsXCJjbHViXCIsXCJjb2FjaFwiLFwiY29hbFwiLFwiY29hc3RcIixcImNvYXRcIixcImNvZmZlZVwiLFxuICBcImNvbGRcIixcImNvbGxlY3RcIixcImNvbGxlZ2VcIixcImNvbG9ueVwiLFwiY29sb3JcIixcImNvbHVtblwiLFwiY29tYmluYXRpb25cIixcImNvbWJpbmVcIixcbiAgXCJjb21lXCIsXCJjb21mb3J0YWJsZVwiLFwiY29taW5nXCIsXCJjb21tYW5kXCIsXCJjb21tb25cIixcImNvbW11bml0eVwiLFwiY29tcGFueVwiLFwiY29tcGFyZVwiLFxuICBcImNvbXBhc3NcIixcImNvbXBsZXRlXCIsXCJjb21wbGV0ZWx5XCIsXCJjb21wbGV4XCIsXCJjb21wb3NlZFwiLFwiY29tcG9zaXRpb25cIixcImNvbXBvdW5kXCIsXCJjb25jZXJuZWRcIixcbiAgXCJjb25kaXRpb25cIixcImNvbmdyZXNzXCIsXCJjb25uZWN0ZWRcIixcImNvbnNpZGVyXCIsXCJjb25zaXN0XCIsXCJjb25zb25hbnRcIixcImNvbnN0YW50bHlcIixcImNvbnN0cnVjdGlvblwiLFxuICBcImNvbnRhaW5cIixcImNvbnRpbmVudFwiLFwiY29udGludWVkXCIsXCJjb250cmFzdFwiLFwiY29udHJvbFwiLFwiY29udmVyc2F0aW9uXCIsXCJjb29rXCIsXCJjb29raWVzXCIsXG4gIFwiY29vbFwiLFwiY29wcGVyXCIsXCJjb3B5XCIsXCJjb3JuXCIsXCJjb3JuZXJcIixcImNvcnJlY3RcIixcImNvcnJlY3RseVwiLFwiY29zdFwiLFxuICBcImNvdHRvblwiLFwiY291bGRcIixcImNvdW50XCIsXCJjb3VudHJ5XCIsXCJjb3VwbGVcIixcImNvdXJhZ2VcIixcImNvdXJzZVwiLFwiY291cnRcIixcbiAgXCJjb3ZlclwiLFwiY293XCIsXCJjb3dib3lcIixcImNyYWNrXCIsXCJjcmVhbVwiLFwiY3JlYXRlXCIsXCJjcmVhdHVyZVwiLFwiY3Jld1wiLFxuICBcImNyb3BcIixcImNyb3NzXCIsXCJjcm93ZFwiLFwiY3J5XCIsXCJjdXBcIixcImN1cmlvdXNcIixcImN1cnJlbnRcIixcImN1cnZlXCIsXG4gIFwiY3VzdG9tc1wiLFwiY3V0XCIsXCJjdXR0aW5nXCIsXCJkYWlseVwiLFwiZGFtYWdlXCIsXCJkYW5jZVwiLFwiZGFuZ2VyXCIsXCJkYW5nZXJvdXNcIixcbiAgXCJkYXJrXCIsXCJkYXJrbmVzc1wiLFwiZGF0ZVwiLFwiZGF1Z2h0ZXJcIixcImRhd25cIixcImRheVwiLFwiZGVhZFwiLFwiZGVhbFwiLFxuICBcImRlYXJcIixcImRlYXRoXCIsXCJkZWNpZGVcIixcImRlY2xhcmVkXCIsXCJkZWVwXCIsXCJkZWVwbHlcIixcImRlZXJcIixcImRlZmluaXRpb25cIixcbiAgXCJkZWdyZWVcIixcImRlcGVuZFwiLFwiZGVwdGhcIixcImRlc2NyaWJlXCIsXCJkZXNlcnRcIixcImRlc2lnblwiLFwiZGVza1wiLFwiZGV0YWlsXCIsXG4gIFwiZGV0ZXJtaW5lXCIsXCJkZXZlbG9wXCIsXCJkZXZlbG9wbWVudFwiLFwiZGlhZ3JhbVwiLFwiZGlhbWV0ZXJcIixcImRpZFwiLFwiZGllXCIsXCJkaWZmZXJcIixcbiAgXCJkaWZmZXJlbmNlXCIsXCJkaWZmZXJlbnRcIixcImRpZmZpY3VsdFwiLFwiZGlmZmljdWx0eVwiLFwiZGlnXCIsXCJkaW5uZXJcIixcImRpcmVjdFwiLFwiZGlyZWN0aW9uXCIsXG4gIFwiZGlyZWN0bHlcIixcImRpcnRcIixcImRpcnR5XCIsXCJkaXNhcHBlYXJcIixcImRpc2NvdmVyXCIsXCJkaXNjb3ZlcnlcIixcImRpc2N1c3NcIixcImRpc2N1c3Npb25cIixcbiAgXCJkaXNlYXNlXCIsXCJkaXNoXCIsXCJkaXN0YW5jZVwiLFwiZGlzdGFudFwiLFwiZGl2aWRlXCIsXCJkaXZpc2lvblwiLFwiZG9cIixcImRvY3RvclwiLFxuICBcImRvZXNcIixcImRvZ1wiLFwiZG9pbmdcIixcImRvbGxcIixcImRvbGxhclwiLFwiZG9uZVwiLFwiZG9ua2V5XCIsXCJkb29yXCIsXG4gIFwiZG90XCIsXCJkb3VibGVcIixcImRvdWJ0XCIsXCJkb3duXCIsXCJkb3plblwiLFwiZHJhd1wiLFwiZHJhd25cIixcImRyZWFtXCIsXG4gIFwiZHJlc3NcIixcImRyZXdcIixcImRyaWVkXCIsXCJkcmlua1wiLFwiZHJpdmVcIixcImRyaXZlblwiLFwiZHJpdmVyXCIsXCJkcml2aW5nXCIsXG4gIFwiZHJvcFwiLFwiZHJvcHBlZFwiLFwiZHJvdmVcIixcImRyeVwiLFwiZHVja1wiLFwiZHVlXCIsXCJkdWdcIixcImR1bGxcIixcbiAgXCJkdXJpbmdcIixcImR1c3RcIixcImR1dHlcIixcImVhY2hcIixcImVhZ2VyXCIsXCJlYXJcIixcImVhcmxpZXJcIixcImVhcmx5XCIsXG4gIFwiZWFyblwiLFwiZWFydGhcIixcImVhc2llclwiLFwiZWFzaWx5XCIsXCJlYXN0XCIsXCJlYXN5XCIsXCJlYXRcIixcImVhdGVuXCIsXG4gIFwiZWRnZVwiLFwiZWR1Y2F0aW9uXCIsXCJlZmZlY3RcIixcImVmZm9ydFwiLFwiZWdnXCIsXCJlaWdodFwiLFwiZWl0aGVyXCIsXCJlbGVjdHJpY1wiLFxuICBcImVsZWN0cmljaXR5XCIsXCJlbGVtZW50XCIsXCJlbGVwaGFudFwiLFwiZWxldmVuXCIsXCJlbHNlXCIsXCJlbXB0eVwiLFwiZW5kXCIsXCJlbmVteVwiLFxuICBcImVuZXJneVwiLFwiZW5naW5lXCIsXCJlbmdpbmVlclwiLFwiZW5qb3lcIixcImVub3VnaFwiLFwiZW50ZXJcIixcImVudGlyZVwiLFwiZW50aXJlbHlcIixcbiAgXCJlbnZpcm9ubWVudFwiLFwiZXF1YWxcIixcImVxdWFsbHlcIixcImVxdWF0b3JcIixcImVxdWlwbWVudFwiLFwiZXNjYXBlXCIsXCJlc3BlY2lhbGx5XCIsXCJlc3NlbnRpYWxcIixcbiAgXCJlc3RhYmxpc2hcIixcImV2ZW5cIixcImV2ZW5pbmdcIixcImV2ZW50XCIsXCJldmVudHVhbGx5XCIsXCJldmVyXCIsXCJldmVyeVwiLFwiZXZlcnlib2R5XCIsXG4gIFwiZXZlcnlvbmVcIixcImV2ZXJ5dGhpbmdcIixcImV2ZXJ5d2hlcmVcIixcImV2aWRlbmNlXCIsXCJleGFjdFwiLFwiZXhhY3RseVwiLFwiZXhhbWluZVwiLFwiZXhhbXBsZVwiLFxuICBcImV4Y2VsbGVudFwiLFwiZXhjZXB0XCIsXCJleGNoYW5nZVwiLFwiZXhjaXRlZFwiLFwiZXhjaXRlbWVudFwiLFwiZXhjaXRpbmdcIixcImV4Y2xhaW1lZFwiLFwiZXhlcmNpc2VcIixcbiAgXCJleGlzdFwiLFwiZXhwZWN0XCIsXCJleHBlcmllbmNlXCIsXCJleHBlcmltZW50XCIsXCJleHBsYWluXCIsXCJleHBsYW5hdGlvblwiLFwiZXhwbG9yZVwiLFwiZXhwcmVzc1wiLFxuICBcImV4cHJlc3Npb25cIixcImV4dHJhXCIsXCJleWVcIixcImZhY2VcIixcImZhY2luZ1wiLFwiZmFjdFwiLFwiZmFjdG9yXCIsXCJmYWN0b3J5XCIsXG4gIFwiZmFpbGVkXCIsXCJmYWlyXCIsXCJmYWlybHlcIixcImZhbGxcIixcImZhbGxlblwiLFwiZmFtaWxpYXJcIixcImZhbWlseVwiLFwiZmFtb3VzXCIsXG4gIFwiZmFyXCIsXCJmYXJtXCIsXCJmYXJtZXJcIixcImZhcnRoZXJcIixcImZhc3RcIixcImZhc3RlbmVkXCIsXCJmYXN0ZXJcIixcImZhdFwiLFxuICBcImZhdGhlclwiLFwiZmF2b3JpdGVcIixcImZlYXJcIixcImZlYXRoZXJzXCIsXCJmZWF0dXJlXCIsXCJmZWRcIixcImZlZWRcIixcImZlZWxcIixcbiAgXCJmZWV0XCIsXCJmZWxsXCIsXCJmZWxsb3dcIixcImZlbHRcIixcImZlbmNlXCIsXCJmZXdcIixcImZld2VyXCIsXCJmaWVsZFwiLFxuICBcImZpZXJjZVwiLFwiZmlmdGVlblwiLFwiZmlmdGhcIixcImZpZnR5XCIsXCJmaWdodFwiLFwiZmlnaHRpbmdcIixcImZpZ3VyZVwiLFwiZmlsbFwiLFxuICBcImZpbG1cIixcImZpbmFsXCIsXCJmaW5hbGx5XCIsXCJmaW5kXCIsXCJmaW5lXCIsXCJmaW5lc3RcIixcImZpbmdlclwiLFwiZmluaXNoXCIsXG4gIFwiZmlyZVwiLFwiZmlyZXBsYWNlXCIsXCJmaXJtXCIsXCJmaXJzdFwiLFwiZmlzaFwiLFwiZml2ZVwiLFwiZml4XCIsXCJmbGFnXCIsXG4gIFwiZmxhbWVcIixcImZsYXRcIixcImZsZXdcIixcImZsaWVzXCIsXCJmbGlnaHRcIixcImZsb2F0aW5nXCIsXCJmbG9vclwiLFwiZmxvd1wiLFxuICBcImZsb3dlclwiLFwiZmx5XCIsXCJmb2dcIixcImZvbGtzXCIsXCJmb2xsb3dcIixcImZvb2RcIixcImZvb3RcIixcImZvb3RiYWxsXCIsXG4gIFwiZm9yXCIsXCJmb3JjZVwiLFwiZm9yZWlnblwiLFwiZm9yZXN0XCIsXCJmb3JnZXRcIixcImZvcmdvdFwiLFwiZm9yZ290dGVuXCIsXCJmb3JtXCIsXG4gIFwiZm9ybWVyXCIsXCJmb3J0XCIsXCJmb3J0aFwiLFwiZm9ydHlcIixcImZvcndhcmRcIixcImZvdWdodFwiLFwiZm91bmRcIixcImZvdXJcIixcbiAgXCJmb3VydGhcIixcImZveFwiLFwiZnJhbWVcIixcImZyZWVcIixcImZyZWVkb21cIixcImZyZXF1ZW50bHlcIixcImZyZXNoXCIsXCJmcmllbmRcIixcbiAgXCJmcmllbmRseVwiLFwiZnJpZ2h0ZW5cIixcImZyb2dcIixcImZyb21cIixcImZyb250XCIsXCJmcm96ZW5cIixcImZydWl0XCIsXCJmdWVsXCIsXG4gIFwiZnVsbFwiLFwiZnVsbHlcIixcImZ1blwiLFwiZnVuY3Rpb25cIixcImZ1bm55XCIsXCJmdXJcIixcImZ1cm5pdHVyZVwiLFwiZnVydGhlclwiLFxuICBcImZ1dHVyZVwiLFwiZ2FpblwiLFwiZ2FtZVwiLFwiZ2FyYWdlXCIsXCJnYXJkZW5cIixcImdhc1wiLFwiZ2Fzb2xpbmVcIixcImdhdGVcIixcbiAgXCJnYXRoZXJcIixcImdhdmVcIixcImdlbmVyYWxcIixcImdlbmVyYWxseVwiLFwiZ2VudGxlXCIsXCJnZW50bHlcIixcImdldFwiLFwiZ2V0dGluZ1wiLFxuICBcImdpYW50XCIsXCJnaWZ0XCIsXCJnaXJsXCIsXCJnaXZlXCIsXCJnaXZlblwiLFwiZ2l2aW5nXCIsXCJnbGFkXCIsXCJnbGFzc1wiLFxuICBcImdsb2JlXCIsXCJnb1wiLFwiZ29lc1wiLFwiZ29sZFwiLFwiZ29sZGVuXCIsXCJnb25lXCIsXCJnb29kXCIsXCJnb29zZVwiLFxuICBcImdvdFwiLFwiZ292ZXJubWVudFwiLFwiZ3JhYmJlZFwiLFwiZ3JhZGVcIixcImdyYWR1YWxseVwiLFwiZ3JhaW5cIixcImdyYW5kZmF0aGVyXCIsXCJncmFuZG1vdGhlclwiLFxuICBcImdyYXBoXCIsXCJncmFzc1wiLFwiZ3Jhdml0eVwiLFwiZ3JheVwiLFwiZ3JlYXRcIixcImdyZWF0ZXJcIixcImdyZWF0ZXN0XCIsXCJncmVhdGx5XCIsXG4gIFwiZ3JlZW5cIixcImdyZXdcIixcImdyb3VuZFwiLFwiZ3JvdXBcIixcImdyb3dcIixcImdyb3duXCIsXCJncm93dGhcIixcImd1YXJkXCIsXG4gIFwiZ3Vlc3NcIixcImd1aWRlXCIsXCJndWxmXCIsXCJndW5cIixcImhhYml0XCIsXCJoYWRcIixcImhhaXJcIixcImhhbGZcIixcbiAgXCJoYWxmd2F5XCIsXCJoYWxsXCIsXCJoYW5kXCIsXCJoYW5kbGVcIixcImhhbmRzb21lXCIsXCJoYW5nXCIsXCJoYXBwZW5cIixcImhhcHBlbmVkXCIsXG4gIFwiaGFwcGlseVwiLFwiaGFwcHlcIixcImhhcmJvclwiLFwiaGFyZFwiLFwiaGFyZGVyXCIsXCJoYXJkbHlcIixcImhhc1wiLFwiaGF0XCIsXG4gIFwiaGF2ZVwiLFwiaGF2aW5nXCIsXCJoYXlcIixcImhlXCIsXCJoZWFkZWRcIixcImhlYWRpbmdcIixcImhlYWx0aFwiLFwiaGVhcmRcIixcbiAgXCJoZWFyaW5nXCIsXCJoZWFydFwiLFwiaGVhdFwiLFwiaGVhdnlcIixcImhlaWdodFwiLFwiaGVsZFwiLFwiaGVsbG9cIixcImhlbHBcIixcbiAgXCJoZWxwZnVsXCIsXCJoZXJcIixcImhlcmRcIixcImhlcmVcIixcImhlcnNlbGZcIixcImhpZGRlblwiLFwiaGlkZVwiLFwiaGlnaFwiLFxuICBcImhpZ2hlclwiLFwiaGlnaGVzdFwiLFwiaGlnaHdheVwiLFwiaGlsbFwiLFwiaGltXCIsXCJoaW1zZWxmXCIsXCJoaXNcIixcImhpc3RvcnlcIixcbiAgXCJoaXRcIixcImhvbGRcIixcImhvbGVcIixcImhvbGxvd1wiLFwiaG9tZVwiLFwiaG9ub3JcIixcImhvcGVcIixcImhvcm5cIixcbiAgXCJob3JzZVwiLFwiaG9zcGl0YWxcIixcImhvdFwiLFwiaG91clwiLFwiaG91c2VcIixcImhvd1wiLFwiaG93ZXZlclwiLFwiaHVnZVwiLFxuICBcImh1bWFuXCIsXCJodW5kcmVkXCIsXCJodW5nXCIsXCJodW5ncnlcIixcImh1bnRcIixcImh1bnRlclwiLFwiaHVycmllZFwiLFwiaHVycnlcIixcbiAgXCJodXJ0XCIsXCJodXNiYW5kXCIsXCJpY2VcIixcImlkZWFcIixcImlkZW50aXR5XCIsXCJpZlwiLFwiaWxsXCIsXCJpbWFnZVwiLFxuICBcImltYWdpbmVcIixcImltbWVkaWF0ZWx5XCIsXCJpbXBvcnRhbmNlXCIsXCJpbXBvcnRhbnRcIixcImltcG9zc2libGVcIixcImltcHJvdmVcIixcImluXCIsXCJpbmNoXCIsXG4gIFwiaW5jbHVkZVwiLFwiaW5jbHVkaW5nXCIsXCJpbmNvbWVcIixcImluY3JlYXNlXCIsXCJpbmRlZWRcIixcImluZGVwZW5kZW50XCIsXCJpbmRpY2F0ZVwiLFwiaW5kaXZpZHVhbFwiLFxuICBcImluZHVzdHJpYWxcIixcImluZHVzdHJ5XCIsXCJpbmZsdWVuY2VcIixcImluZm9ybWF0aW9uXCIsXCJpbnNpZGVcIixcImluc3RhbmNlXCIsXCJpbnN0YW50XCIsXCJpbnN0ZWFkXCIsXG4gIFwiaW5zdHJ1bWVudFwiLFwiaW50ZXJlc3RcIixcImludGVyaW9yXCIsXCJpbnRvXCIsXCJpbnRyb2R1Y2VkXCIsXCJpbnZlbnRlZFwiLFwiaW52b2x2ZWRcIixcImlyb25cIixcbiAgXCJpc1wiLFwiaXNsYW5kXCIsXCJpdFwiLFwiaXRzXCIsXCJpdHNlbGZcIixcImphY2tcIixcImphclwiLFwiamV0XCIsXG4gIFwiam9iXCIsXCJqb2luXCIsXCJqb2luZWRcIixcImpvdXJuZXlcIixcImpveVwiLFwianVkZ2VcIixcImp1bXBcIixcImp1bmdsZVwiLFxuICBcImp1c3RcIixcImtlZXBcIixcImtlcHRcIixcImtleVwiLFwia2lkc1wiLFwia2lsbFwiLFwia2luZFwiLFwia2l0Y2hlblwiLFxuICBcImtuZXdcIixcImtuaWZlXCIsXCJrbm93XCIsXCJrbm93bGVkZ2VcIixcImtub3duXCIsXCJsYWJlbFwiLFwibGFib3JcIixcImxhY2tcIixcbiAgXCJsYWR5XCIsXCJsYWlkXCIsXCJsYWtlXCIsXCJsYW1wXCIsXCJsYW5kXCIsXCJsYW5ndWFnZVwiLFwibGFyZ2VcIixcImxhcmdlclwiLFxuICBcImxhcmdlc3RcIixcImxhc3RcIixcImxhdGVcIixcImxhdGVyXCIsXCJsYXVnaFwiLFwibGF3XCIsXCJsYXlcIixcImxheWVyc1wiLFxuICBcImxlYWRcIixcImxlYWRlclwiLFwibGVhZlwiLFwibGVhcm5cIixcImxlYXN0XCIsXCJsZWF0aGVyXCIsXCJsZWF2ZVwiLFwibGVhdmluZ1wiLFxuICBcImxlZFwiLFwibGVmdFwiLFwibGVnXCIsXCJsZW5ndGhcIixcImxlc3NvblwiLFwibGV0XCIsXCJsZXR0ZXJcIixcImxldmVsXCIsXG4gIFwibGlicmFyeVwiLFwibGllXCIsXCJsaWZlXCIsXCJsaWZ0XCIsXCJsaWdodFwiLFwibGlrZVwiLFwibGlrZWx5XCIsXCJsaW1pdGVkXCIsXG4gIFwibGluZVwiLFwibGlvblwiLFwibGlwc1wiLFwibGlxdWlkXCIsXCJsaXN0XCIsXCJsaXN0ZW5cIixcImxpdHRsZVwiLFwibGl2ZVwiLFxuICBcImxpdmluZ1wiLFwibG9hZFwiLFwibG9jYWxcIixcImxvY2F0ZVwiLFwibG9jYXRpb25cIixcImxvZ1wiLFwibG9uZWx5XCIsXCJsb25nXCIsXG4gIFwibG9uZ2VyXCIsXCJsb29rXCIsXCJsb29zZVwiLFwibG9zZVwiLFwibG9zc1wiLFwibG9zdFwiLFwibG90XCIsXCJsb3VkXCIsXG4gIFwibG92ZVwiLFwibG92ZWx5XCIsXCJsb3dcIixcImxvd2VyXCIsXCJsdWNrXCIsXCJsdWNreVwiLFwibHVuY2hcIixcImx1bmdzXCIsXG4gIFwibHlpbmdcIixcIm1hY2hpbmVcIixcIm1hY2hpbmVyeVwiLFwibWFkXCIsXCJtYWRlXCIsXCJtYWdpY1wiLFwibWFnbmV0XCIsXCJtYWlsXCIsXG4gIFwibWFpblwiLFwibWFpbmx5XCIsXCJtYWpvclwiLFwibWFrZVwiLFwibWFraW5nXCIsXCJtYW5cIixcIm1hbmFnZWRcIixcIm1hbm5lclwiLFxuICBcIm1hbnVmYWN0dXJpbmdcIixcIm1hbnlcIixcIm1hcFwiLFwibWFya1wiLFwibWFya2V0XCIsXCJtYXJyaWVkXCIsXCJtYXNzXCIsXCJtYXNzYWdlXCIsXG4gIFwibWFzdGVyXCIsXCJtYXRlcmlhbFwiLFwibWF0aGVtYXRpY3NcIixcIm1hdHRlclwiLFwibWF5XCIsXCJtYXliZVwiLFwibWVcIixcIm1lYWxcIixcbiAgXCJtZWFuXCIsXCJtZWFuc1wiLFwibWVhbnRcIixcIm1lYXN1cmVcIixcIm1lYXRcIixcIm1lZGljaW5lXCIsXCJtZWV0XCIsXCJtZWx0ZWRcIixcbiAgXCJtZW1iZXJcIixcIm1lbW9yeVwiLFwibWVuXCIsXCJtZW50YWxcIixcIm1lcmVseVwiLFwibWV0XCIsXCJtZXRhbFwiLFwibWV0aG9kXCIsXG4gIFwibWljZVwiLFwibWlkZGxlXCIsXCJtaWdodFwiLFwibWlnaHR5XCIsXCJtaWxlXCIsXCJtaWxpdGFyeVwiLFwibWlsa1wiLFwibWlsbFwiLFxuICBcIm1pbmRcIixcIm1pbmVcIixcIm1pbmVyYWxzXCIsXCJtaW51dGVcIixcIm1pcnJvclwiLFwibWlzc2luZ1wiLFwibWlzc2lvblwiLFwibWlzdGFrZVwiLFxuICBcIm1peFwiLFwibWl4dHVyZVwiLFwibW9kZWxcIixcIm1vZGVyblwiLFwibW9sZWN1bGFyXCIsXCJtb21lbnRcIixcIm1vbmV5XCIsXCJtb25rZXlcIixcbiAgXCJtb250aFwiLFwibW9vZFwiLFwibW9vblwiLFwibW9yZVwiLFwibW9ybmluZ1wiLFwibW9zdFwiLFwibW9zdGx5XCIsXCJtb3RoZXJcIixcbiAgXCJtb3Rpb25cIixcIm1vdG9yXCIsXCJtb3VudGFpblwiLFwibW91c2VcIixcIm1vdXRoXCIsXCJtb3ZlXCIsXCJtb3ZlbWVudFwiLFwibW92aWVcIixcbiAgXCJtb3ZpbmdcIixcIm11ZFwiLFwibXVzY2xlXCIsXCJtdXNpY1wiLFwibXVzaWNhbFwiLFwibXVzdFwiLFwibXlcIixcIm15c2VsZlwiLFxuICBcIm15c3RlcmlvdXNcIixcIm5haWxzXCIsXCJuYW1lXCIsXCJuYXRpb25cIixcIm5hdGlvbmFsXCIsXCJuYXRpdmVcIixcIm5hdHVyYWxcIixcIm5hdHVyYWxseVwiLFxuICBcIm5hdHVyZVwiLFwibmVhclwiLFwibmVhcmJ5XCIsXCJuZWFyZXJcIixcIm5lYXJlc3RcIixcIm5lYXJseVwiLFwibmVjZXNzYXJ5XCIsXCJuZWNrXCIsXG4gIFwibmVlZGVkXCIsXCJuZWVkbGVcIixcIm5lZWRzXCIsXCJuZWdhdGl2ZVwiLFwibmVpZ2hib3JcIixcIm5laWdoYm9yaG9vZFwiLFwibmVydm91c1wiLFwibmVzdFwiLFxuICBcIm5ldmVyXCIsXCJuZXdcIixcIm5ld3NcIixcIm5ld3NwYXBlclwiLFwibmV4dFwiLFwibmljZVwiLFwibmlnaHRcIixcIm5pbmVcIixcbiAgXCJub1wiLFwibm9ib2R5XCIsXCJub2RkZWRcIixcIm5vaXNlXCIsXCJub25lXCIsXCJub29uXCIsXCJub3JcIixcIm5vcnRoXCIsXG4gIFwibm9zZVwiLFwibm90XCIsXCJub3RlXCIsXCJub3RlZFwiLFwibm90aGluZ1wiLFwibm90aWNlXCIsXCJub3VuXCIsXCJub3dcIixcbiAgXCJudW1iZXJcIixcIm51bWVyYWxcIixcIm51dHNcIixcIm9iamVjdFwiLFwib2JzZXJ2ZVwiLFwib2J0YWluXCIsXCJvY2Nhc2lvbmFsbHlcIixcIm9jY3VyXCIsXG4gIFwib2NlYW5cIixcIm9mXCIsXCJvZmZcIixcIm9mZmVyXCIsXCJvZmZpY2VcIixcIm9mZmljZXJcIixcIm9mZmljaWFsXCIsXCJvaWxcIixcbiAgXCJvbGRcIixcIm9sZGVyXCIsXCJvbGRlc3RcIixcIm9uXCIsXCJvbmNlXCIsXCJvbmVcIixcIm9ubHlcIixcIm9udG9cIixcbiAgXCJvcGVuXCIsXCJvcGVyYXRpb25cIixcIm9waW5pb25cIixcIm9wcG9ydHVuaXR5XCIsXCJvcHBvc2l0ZVwiLFwib3JcIixcIm9yYW5nZVwiLFwib3JiaXRcIixcbiAgXCJvcmRlclwiLFwib3JkaW5hcnlcIixcIm9yZ2FuaXphdGlvblwiLFwib3JnYW5pemVkXCIsXCJvcmlnaW5cIixcIm9yaWdpbmFsXCIsXCJvdGhlclwiLFwib3VnaHRcIixcbiAgXCJvdXJcIixcIm91cnNlbHZlc1wiLFwib3V0XCIsXCJvdXRlclwiLFwib3V0bGluZVwiLFwib3V0c2lkZVwiLFwib3ZlclwiLFwib3duXCIsXG4gIFwib3duZXJcIixcIm94eWdlblwiLFwicGFja1wiLFwicGFja2FnZVwiLFwicGFnZVwiLFwicGFpZFwiLFwicGFpblwiLFwicGFpbnRcIixcbiAgXCJwYWlyXCIsXCJwYWxhY2VcIixcInBhbGVcIixcInBhblwiLFwicGFwZXJcIixcInBhcmFncmFwaFwiLFwicGFyYWxsZWxcIixcInBhcmVudFwiLFxuICBcInBhcmtcIixcInBhcnRcIixcInBhcnRpY2xlc1wiLFwicGFydGljdWxhclwiLFwicGFydGljdWxhcmx5XCIsXCJwYXJ0bHlcIixcInBhcnRzXCIsXCJwYXJ0eVwiLFxuICBcInBhc3NcIixcInBhc3NhZ2VcIixcInBhc3RcIixcInBhdGhcIixcInBhdHRlcm5cIixcInBheVwiLFwicGVhY2VcIixcInBlblwiLFxuICBcInBlbmNpbFwiLFwicGVvcGxlXCIsXCJwZXJcIixcInBlcmNlbnRcIixcInBlcmZlY3RcIixcInBlcmZlY3RseVwiLFwicGVyaGFwc1wiLFwicGVyaW9kXCIsXG4gIFwicGVyc29uXCIsXCJwZXJzb25hbFwiLFwicGV0XCIsXCJwaHJhc2VcIixcInBoeXNpY2FsXCIsXCJwaWFub1wiLFwicGlja1wiLFwicGljdHVyZVwiLFxuICBcInBpY3R1cmVkXCIsXCJwaWVcIixcInBpZWNlXCIsXCJwaWdcIixcInBpbGVcIixcInBpbG90XCIsXCJwaW5lXCIsXCJwaW5rXCIsXG4gIFwicGlwZVwiLFwicGl0Y2hcIixcInBsYWNlXCIsXCJwbGFpblwiLFwicGxhblwiLFwicGxhbmVcIixcInBsYW5ldFwiLFwicGxhbm5lZFwiLFxuICBcInBsYW5uaW5nXCIsXCJwbGFudFwiLFwicGxhc3RpY1wiLFwicGxhdGVcIixcInBsYXRlc1wiLFwicGxheVwiLFwicGxlYXNhbnRcIixcInBsZWFzZVwiLFxuICBcInBsZWFzdXJlXCIsXCJwbGVudHlcIixcInBsdXJhbFwiLFwicGx1c1wiLFwicG9ja2V0XCIsXCJwb2VtXCIsXCJwb2V0XCIsXCJwb2V0cnlcIixcbiAgXCJwb2ludFwiLFwicG9sZVwiLFwicG9saWNlXCIsXCJwb2xpY2VtYW5cIixcInBvbGl0aWNhbFwiLFwicG9uZFwiLFwicG9ueVwiLFwicG9vbFwiLFxuICBcInBvb3JcIixcInBvcHVsYXJcIixcInBvcHVsYXRpb25cIixcInBvcmNoXCIsXCJwb3J0XCIsXCJwb3NpdGlvblwiLFwicG9zaXRpdmVcIixcInBvc3NpYmxlXCIsXG4gIFwicG9zc2libHlcIixcInBvc3RcIixcInBvdFwiLFwicG90YXRvZXNcIixcInBvdW5kXCIsXCJwb3VyXCIsXCJwb3dkZXJcIixcInBvd2VyXCIsXG4gIFwicG93ZXJmdWxcIixcInByYWN0aWNhbFwiLFwicHJhY3RpY2VcIixcInByZXBhcmVcIixcInByZXNlbnRcIixcInByZXNpZGVudFwiLFwicHJlc3NcIixcInByZXNzdXJlXCIsXG4gIFwicHJldHR5XCIsXCJwcmV2ZW50XCIsXCJwcmV2aW91c1wiLFwicHJpY2VcIixcInByaWRlXCIsXCJwcmltaXRpdmVcIixcInByaW5jaXBhbFwiLFwicHJpbmNpcGxlXCIsXG4gIFwicHJpbnRlZFwiLFwicHJpdmF0ZVwiLFwicHJpemVcIixcInByb2JhYmx5XCIsXCJwcm9ibGVtXCIsXCJwcm9jZXNzXCIsXCJwcm9kdWNlXCIsXCJwcm9kdWN0XCIsXG4gIFwicHJvZHVjdGlvblwiLFwicHJvZ3JhbVwiLFwicHJvZ3Jlc3NcIixcInByb21pc2VkXCIsXCJwcm9wZXJcIixcInByb3Blcmx5XCIsXCJwcm9wZXJ0eVwiLFwicHJvdGVjdGlvblwiLFxuICBcInByb3VkXCIsXCJwcm92ZVwiLFwicHJvdmlkZVwiLFwicHVibGljXCIsXCJwdWxsXCIsXCJwdXBpbFwiLFwicHVyZVwiLFwicHVycGxlXCIsXG4gIFwicHVycG9zZVwiLFwicHVzaFwiLFwicHV0XCIsXCJwdXR0aW5nXCIsXCJxdWFydGVyXCIsXCJxdWVlblwiLFwicXVlc3Rpb25cIixcInF1aWNrXCIsXG4gIFwicXVpY2tseVwiLFwicXVpZXRcIixcInF1aWV0bHlcIixcInF1aXRlXCIsXCJyYWJiaXRcIixcInJhY2VcIixcInJhZGlvXCIsXCJyYWlscm9hZFwiLFxuICBcInJhaW5cIixcInJhaXNlXCIsXCJyYW5cIixcInJhbmNoXCIsXCJyYW5nZVwiLFwicmFwaWRseVwiLFwicmF0ZVwiLFwicmF0aGVyXCIsXG4gIFwicmF3XCIsXCJyYXlzXCIsXCJyZWFjaFwiLFwicmVhZFwiLFwicmVhZGVyXCIsXCJyZWFkeVwiLFwicmVhbFwiLFwicmVhbGl6ZVwiLFxuICBcInJlYXJcIixcInJlYXNvblwiLFwicmVjYWxsXCIsXCJyZWNlaXZlXCIsXCJyZWNlbnRcIixcInJlY2VudGx5XCIsXCJyZWNvZ25pemVcIixcInJlY29yZFwiLFxuICBcInJlZFwiLFwicmVmZXJcIixcInJlZnVzZWRcIixcInJlZ2lvblwiLFwicmVndWxhclwiLFwicmVsYXRlZFwiLFwicmVsYXRpb25zaGlwXCIsXCJyZWxpZ2lvdXNcIixcbiAgXCJyZW1haW5cIixcInJlbWFya2FibGVcIixcInJlbWVtYmVyXCIsXCJyZW1vdmVcIixcInJlcGVhdFwiLFwicmVwbGFjZVwiLFwicmVwbGllZFwiLFwicmVwb3J0XCIsXG4gIFwicmVwcmVzZW50XCIsXCJyZXF1aXJlXCIsXCJyZXNlYXJjaFwiLFwicmVzcGVjdFwiLFwicmVzdFwiLFwicmVzdWx0XCIsXCJyZXR1cm5cIixcInJldmlld1wiLFxuICBcInJoeW1lXCIsXCJyaHl0aG1cIixcInJpY2VcIixcInJpY2hcIixcInJpZGVcIixcInJpZGluZ1wiLFwicmlnaHRcIixcInJpbmdcIixcbiAgXCJyaXNlXCIsXCJyaXNpbmdcIixcInJpdmVyXCIsXCJyb2FkXCIsXCJyb2FyXCIsXCJyb2NrXCIsXCJyb2NrZXRcIixcInJvY2t5XCIsXG4gIFwicm9kXCIsXCJyb2xsXCIsXCJyb29mXCIsXCJyb29tXCIsXCJyb290XCIsXCJyb3BlXCIsXCJyb3NlXCIsXCJyb3VnaFwiLFxuICBcInJvdW5kXCIsXCJyb3V0ZVwiLFwicm93XCIsXCJydWJiZWRcIixcInJ1YmJlclwiLFwicnVsZVwiLFwicnVsZXJcIixcInJ1blwiLFxuICBcInJ1bm5pbmdcIixcInJ1c2hcIixcInNhZFwiLFwic2FkZGxlXCIsXCJzYWZlXCIsXCJzYWZldHlcIixcInNhaWRcIixcInNhaWxcIixcbiAgXCJzYWxlXCIsXCJzYWxtb25cIixcInNhbHRcIixcInNhbWVcIixcInNhbmRcIixcInNhbmdcIixcInNhdFwiLFwic2F0ZWxsaXRlc1wiLFxuICBcInNhdGlzZmllZFwiLFwic2F2ZVwiLFwic2F2ZWRcIixcInNhd1wiLFwic2F5XCIsXCJzY2FsZVwiLFwic2NhcmVkXCIsXCJzY2VuZVwiLFxuICBcInNjaG9vbFwiLFwic2NpZW5jZVwiLFwic2NpZW50aWZpY1wiLFwic2NpZW50aXN0XCIsXCJzY29yZVwiLFwic2NyZWVuXCIsXCJzZWFcIixcInNlYXJjaFwiLFxuICBcInNlYXNvblwiLFwic2VhdFwiLFwic2Vjb25kXCIsXCJzZWNyZXRcIixcInNlY3Rpb25cIixcInNlZVwiLFwic2VlZFwiLFwic2VlaW5nXCIsXG4gIFwic2VlbXNcIixcInNlZW5cIixcInNlbGRvbVwiLFwic2VsZWN0XCIsXCJzZWxlY3Rpb25cIixcInNlbGxcIixcInNlbmRcIixcInNlbnNlXCIsXG4gIFwic2VudFwiLFwic2VudGVuY2VcIixcInNlcGFyYXRlXCIsXCJzZXJpZXNcIixcInNlcmlvdXNcIixcInNlcnZlXCIsXCJzZXJ2aWNlXCIsXCJzZXRzXCIsXG4gIFwic2V0dGluZ1wiLFwic2V0dGxlXCIsXCJzZXR0bGVyc1wiLFwic2V2ZW5cIixcInNldmVyYWxcIixcInNoYWRlXCIsXCJzaGFkb3dcIixcInNoYWtlXCIsXG4gIFwic2hha2luZ1wiLFwic2hhbGxcIixcInNoYWxsb3dcIixcInNoYXBlXCIsXCJzaGFyZVwiLFwic2hhcnBcIixcInNoZVwiLFwic2hlZXBcIixcbiAgXCJzaGVldFwiLFwic2hlbGZcIixcInNoZWxsc1wiLFwic2hlbHRlclwiLFwic2hpbmVcIixcInNoaW5uaW5nXCIsXCJzaGlwXCIsXCJzaGlydFwiLFxuICBcInNob2VcIixcInNob290XCIsXCJzaG9wXCIsXCJzaG9yZVwiLFwic2hvcnRcIixcInNob3J0ZXJcIixcInNob3RcIixcInNob3VsZFwiLFxuICBcInNob3VsZGVyXCIsXCJzaG91dFwiLFwic2hvd1wiLFwic2hvd25cIixcInNodXRcIixcInNpY2tcIixcInNpZGVzXCIsXCJzaWdodFwiLFxuICBcInNpZ25cIixcInNpZ25hbFwiLFwic2lsZW5jZVwiLFwic2lsZW50XCIsXCJzaWxrXCIsXCJzaWxseVwiLFwic2lsdmVyXCIsXCJzaW1pbGFyXCIsXG4gIFwic2ltcGxlXCIsXCJzaW1wbGVzdFwiLFwic2ltcGx5XCIsXCJzaW5jZVwiLFwic2luZ1wiLFwic2luZ2xlXCIsXCJzaW5rXCIsXCJzaXN0ZXJcIixcbiAgXCJzaXRcIixcInNpdHRpbmdcIixcInNpdHVhdGlvblwiLFwic2l4XCIsXCJzaXplXCIsXCJza2lsbFwiLFwic2tpblwiLFwic2t5XCIsXG4gIFwic2xhYnNcIixcInNsYXZlXCIsXCJzbGVlcFwiLFwic2xlcHRcIixcInNsaWRlXCIsXCJzbGlnaHRcIixcInNsaWdodGx5XCIsXCJzbGlwXCIsXG4gIFwic2xpcHBlZFwiLFwic2xvcGVcIixcInNsb3dcIixcInNsb3dseVwiLFwic21hbGxcIixcInNtYWxsZXJcIixcInNtYWxsZXN0XCIsXCJzbWVsbFwiLFxuICBcInNtaWxlXCIsXCJzbW9rZVwiLFwic21vb3RoXCIsXCJzbmFrZVwiLFwic25vd1wiLFwic29cIixcInNvYXBcIixcInNvY2lhbFwiLFxuICBcInNvY2lldHlcIixcInNvZnRcIixcInNvZnRseVwiLFwic29pbFwiLFwic29sYXJcIixcInNvbGRcIixcInNvbGRpZXJcIixcInNvbGlkXCIsXG4gIFwic29sdXRpb25cIixcInNvbHZlXCIsXCJzb21lXCIsXCJzb21lYm9keVwiLFwic29tZWhvd1wiLFwic29tZW9uZVwiLFwic29tZXRoaW5nXCIsXCJzb21ldGltZVwiLFxuICBcInNvbWV3aGVyZVwiLFwic29uXCIsXCJzb25nXCIsXCJzb29uXCIsXCJzb3J0XCIsXCJzb3VuZFwiLFwic291cmNlXCIsXCJzb3V0aFwiLFxuICBcInNvdXRoZXJuXCIsXCJzcGFjZVwiLFwic3BlYWtcIixcInNwZWNpYWxcIixcInNwZWNpZXNcIixcInNwZWNpZmljXCIsXCJzcGVlY2hcIixcInNwZWVkXCIsXG4gIFwic3BlbGxcIixcInNwZW5kXCIsXCJzcGVudFwiLFwic3BpZGVyXCIsXCJzcGluXCIsXCJzcGlyaXRcIixcInNwaXRlXCIsXCJzcGxpdFwiLFxuICBcInNwb2tlblwiLFwic3BvcnRcIixcInNwcmVhZFwiLFwic3ByaW5nXCIsXCJzcXVhcmVcIixcInN0YWdlXCIsXCJzdGFpcnNcIixcInN0YW5kXCIsXG4gIFwic3RhbmRhcmRcIixcInN0YXJcIixcInN0YXJlZFwiLFwic3RhcnRcIixcInN0YXRlXCIsXCJzdGF0ZW1lbnRcIixcInN0YXRpb25cIixcInN0YXlcIixcbiAgXCJzdGVhZHlcIixcInN0ZWFtXCIsXCJzdGVlbFwiLFwic3RlZXBcIixcInN0ZW1zXCIsXCJzdGVwXCIsXCJzdGVwcGVkXCIsXCJzdGlja1wiLFxuICBcInN0aWZmXCIsXCJzdGlsbFwiLFwic3RvY2tcIixcInN0b21hY2hcIixcInN0b25lXCIsXCJzdG9vZFwiLFwic3RvcFwiLFwic3RvcHBlZFwiLFxuICBcInN0b3JlXCIsXCJzdG9ybVwiLFwic3RvcnlcIixcInN0b3ZlXCIsXCJzdHJhaWdodFwiLFwic3RyYW5nZVwiLFwic3RyYW5nZXJcIixcInN0cmF3XCIsXG4gIFwic3RyZWFtXCIsXCJzdHJlZXRcIixcInN0cmVuZ3RoXCIsXCJzdHJldGNoXCIsXCJzdHJpa2VcIixcInN0cmluZ1wiLFwic3RyaXBcIixcInN0cm9uZ1wiLFxuICBcInN0cm9uZ2VyXCIsXCJzdHJ1Y2tcIixcInN0cnVjdHVyZVwiLFwic3RydWdnbGVcIixcInN0dWNrXCIsXCJzdHVkZW50XCIsXCJzdHVkaWVkXCIsXCJzdHVkeWluZ1wiLFxuICBcInN1YmplY3RcIixcInN1YnN0YW5jZVwiLFwic3VjY2Vzc1wiLFwic3VjY2Vzc2Z1bFwiLFwic3VjaFwiLFwic3VkZGVuXCIsXCJzdWRkZW5seVwiLFwic3VnYXJcIixcbiAgXCJzdWdnZXN0XCIsXCJzdWl0XCIsXCJzdW1cIixcInN1bW1lclwiLFwic3VuXCIsXCJzdW5saWdodFwiLFwic3VwcGVyXCIsXCJzdXBwbHlcIixcbiAgXCJzdXBwb3J0XCIsXCJzdXBwb3NlXCIsXCJzdXJlXCIsXCJzdXJmYWNlXCIsXCJzdXJwcmlzZVwiLFwic3Vycm91bmRlZFwiLFwic3dhbVwiLFwic3dlZXRcIixcbiAgXCJzd2VwdFwiLFwic3dpbVwiLFwic3dpbW1pbmdcIixcInN3aW5nXCIsXCJzd3VuZ1wiLFwic3lsbGFibGVcIixcInN5bWJvbFwiLFwic3lzdGVtXCIsXG4gIFwidGFibGVcIixcInRhaWxcIixcInRha2VcIixcInRha2VuXCIsXCJ0YWxlc1wiLFwidGFsa1wiLFwidGFsbFwiLFwidGFua1wiLFxuICBcInRhcGVcIixcInRhc2tcIixcInRhc3RlXCIsXCJ0YXVnaHRcIixcInRheFwiLFwidGVhXCIsXCJ0ZWFjaFwiLFwidGVhY2hlclwiLFxuICBcInRlYW1cIixcInRlYXJzXCIsXCJ0ZWV0aFwiLFwidGVsZXBob25lXCIsXCJ0ZWxldmlzaW9uXCIsXCJ0ZWxsXCIsXCJ0ZW1wZXJhdHVyZVwiLFwidGVuXCIsXG4gIFwidGVudFwiLFwidGVybVwiLFwidGVycmlibGVcIixcInRlc3RcIixcInRoYW5cIixcInRoYW5rXCIsXCJ0aGF0XCIsXCJ0aGVlXCIsXG4gIFwidGhlbVwiLFwidGhlbXNlbHZlc1wiLFwidGhlblwiLFwidGhlb3J5XCIsXCJ0aGVyZVwiLFwidGhlcmVmb3JlXCIsXCJ0aGVzZVwiLFwidGhleVwiLFxuICBcInRoaWNrXCIsXCJ0aGluXCIsXCJ0aGluZ1wiLFwidGhpbmtcIixcInRoaXJkXCIsXCJ0aGlydHlcIixcInRoaXNcIixcInRob3NlXCIsXG4gIFwidGhvdVwiLFwidGhvdWdoXCIsXCJ0aG91Z2h0XCIsXCJ0aG91c2FuZFwiLFwidGhyZWFkXCIsXCJ0aHJlZVwiLFwidGhyZXdcIixcInRocm9hdFwiLFxuICBcInRocm91Z2hcIixcInRocm91Z2hvdXRcIixcInRocm93XCIsXCJ0aHJvd25cIixcInRodW1iXCIsXCJ0aHVzXCIsXCJ0aHlcIixcInRpZGVcIixcbiAgXCJ0aWVcIixcInRpZ2h0XCIsXCJ0aWdodGx5XCIsXCJ0aWxsXCIsXCJ0aW1lXCIsXCJ0aW5cIixcInRpbnlcIixcInRpcFwiLFxuICBcInRpcmVkXCIsXCJ0aXRsZVwiLFwidG9cIixcInRvYmFjY29cIixcInRvZGF5XCIsXCJ0b2dldGhlclwiLFwidG9sZFwiLFwidG9tb3Jyb3dcIixcbiAgXCJ0b25lXCIsXCJ0b25ndWVcIixcInRvbmlnaHRcIixcInRvb1wiLFwidG9va1wiLFwidG9vbFwiLFwidG9wXCIsXCJ0b3BpY1wiLFxuICBcInRvcm5cIixcInRvdGFsXCIsXCJ0b3VjaFwiLFwidG93YXJkXCIsXCJ0b3dlclwiLFwidG93blwiLFwidG95XCIsXCJ0cmFjZVwiLFxuICBcInRyYWNrXCIsXCJ0cmFkZVwiLFwidHJhZmZpY1wiLFwidHJhaWxcIixcInRyYWluXCIsXCJ0cmFuc3BvcnRhdGlvblwiLFwidHJhcFwiLFwidHJhdmVsXCIsXG4gIFwidHJlYXRlZFwiLFwidHJlZVwiLFwidHJpYW5nbGVcIixcInRyaWJlXCIsXCJ0cmlja1wiLFwidHJpZWRcIixcInRyaXBcIixcInRyb29wc1wiLFxuICBcInRyb3BpY2FsXCIsXCJ0cm91YmxlXCIsXCJ0cnVja1wiLFwidHJ1bmtcIixcInRydXRoXCIsXCJ0cnlcIixcInR1YmVcIixcInR1bmVcIixcbiAgXCJ0dXJuXCIsXCJ0d2VsdmVcIixcInR3ZW50eVwiLFwidHdpY2VcIixcInR3b1wiLFwidHlwZVwiLFwidHlwaWNhbFwiLFwidW5jbGVcIixcbiAgXCJ1bmRlclwiLFwidW5kZXJsaW5lXCIsXCJ1bmRlcnN0YW5kaW5nXCIsXCJ1bmhhcHB5XCIsXCJ1bmlvblwiLFwidW5pdFwiLFwidW5pdmVyc2VcIixcInVua25vd25cIixcbiAgXCJ1bmxlc3NcIixcInVudGlsXCIsXCJ1bnVzdWFsXCIsXCJ1cFwiLFwidXBvblwiLFwidXBwZXJcIixcInVwd2FyZFwiLFwidXNcIixcbiAgXCJ1c2VcIixcInVzZWZ1bFwiLFwidXNpbmdcIixcInVzdWFsXCIsXCJ1c3VhbGx5XCIsXCJ2YWxsZXlcIixcInZhbHVhYmxlXCIsXCJ2YWx1ZVwiLFxuICBcInZhcG9yXCIsXCJ2YXJpZXR5XCIsXCJ2YXJpb3VzXCIsXCJ2YXN0XCIsXCJ2ZWdldGFibGVcIixcInZlcmJcIixcInZlcnRpY2FsXCIsXCJ2ZXJ5XCIsXG4gIFwidmVzc2Vsc1wiLFwidmljdG9yeVwiLFwidmlld1wiLFwidmlsbGFnZVwiLFwidmlzaXRcIixcInZpc2l0b3JcIixcInZvaWNlXCIsXCJ2b2x1bWVcIixcbiAgXCJ2b3RlXCIsXCJ2b3dlbFwiLFwidm95YWdlXCIsXCJ3YWdvblwiLFwid2FpdFwiLFwid2Fsa1wiLFwid2FsbFwiLFwid2FudFwiLFxuICBcIndhclwiLFwid2FybVwiLFwid2FyblwiLFwid2FzXCIsXCJ3YXNoXCIsXCJ3YXN0ZVwiLFwid2F0Y2hcIixcIndhdGVyXCIsXG4gIFwid2F2ZVwiLFwid2F5XCIsXCJ3ZVwiLFwid2Vha1wiLFwid2VhbHRoXCIsXCJ3ZWFyXCIsXCJ3ZWF0aGVyXCIsXCJ3ZWVrXCIsXG4gIFwid2VpZ2hcIixcIndlaWdodFwiLFwid2VsY29tZVwiLFwid2VsbFwiLFwid2VudFwiLFwid2VyZVwiLFwid2VzdFwiLFwid2VzdGVyblwiLFxuICBcIndldFwiLFwid2hhbGVcIixcIndoYXRcIixcIndoYXRldmVyXCIsXCJ3aGVhdFwiLFwid2hlZWxcIixcIndoZW5cIixcIndoZW5ldmVyXCIsXG4gIFwid2hlcmVcIixcIndoZXJldmVyXCIsXCJ3aGV0aGVyXCIsXCJ3aGljaFwiLFwid2hpbGVcIixcIndoaXNwZXJlZFwiLFwid2hpc3RsZVwiLFwid2hpdGVcIixcbiAgXCJ3aG9cIixcIndob2xlXCIsXCJ3aG9tXCIsXCJ3aG9zZVwiLFwid2h5XCIsXCJ3aWRlXCIsXCJ3aWRlbHlcIixcIndpZmVcIixcbiAgXCJ3aWxkXCIsXCJ3aWxsXCIsXCJ3aWxsaW5nXCIsXCJ3aW5cIixcIndpbmRcIixcIndpbmRvd1wiLFwid2luZ1wiLFwid2ludGVyXCIsXG4gIFwid2lyZVwiLFwid2lzZVwiLFwid2lzaFwiLFwid2l0aFwiLFwid2l0aGluXCIsXCJ3aXRob3V0XCIsXCJ3b2xmXCIsXCJ3b21lblwiLFxuICBcIndvblwiLFwid29uZGVyXCIsXCJ3b25kZXJmdWxcIixcIndvb2RcIixcIndvb2RlblwiLFwid29vbFwiLFwid29yZFwiLFwid29yZVwiLFxuICBcIndvcmtcIixcIndvcmtlclwiLFwid29ybGRcIixcIndvcnJpZWRcIixcIndvcnJ5XCIsXCJ3b3JzZVwiLFwid29ydGhcIixcIndvdWxkXCIsXG4gIFwid3JhcHBlZFwiLFwid3JpdGVcIixcIndyaXRlclwiLFwid3JpdGluZ1wiLFwid3JpdHRlblwiLFwid3JvbmdcIixcIndyb3RlXCIsXCJ5YXJkXCIsXG4gIFwieWVhclwiLFwieWVsbG93XCIsXCJ5ZXNcIixcInllc3RlcmRheVwiLFwieWV0XCIsXCJ5b3VcIixcInlvdW5nXCIsXCJ5b3VuZ2VyXCIsXG4gIFwieW91clwiLFwieW91cnNlbGZcIixcInlvdXRoXCIsXCJ6ZXJvXCIsXCJ6b29cIlxuXTtcblxuZnVuY3Rpb24gd29yZHMob3B0aW9ucykge1xuICBmdW5jdGlvbiB3b3JkKCkge1xuICAgIHJldHVybiB3b3JkTGlzdFtyYW5kSW50KHdvcmRMaXN0Lmxlbmd0aCldO1xuICB9XG5cbiAgZnVuY3Rpb24gcmFuZEludChsZXNzVGhhbikge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZXNzVGhhbik7XG4gIH1cblxuICAvLyBObyBhcmd1bWVudHMgPSBnZW5lcmF0ZSBvbmUgd29yZFxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB3b3JkKCk7XG4gIH1cblxuICAvLyBKdXN0IGEgbnVtYmVyID0gcmV0dXJuIHRoYXQgbWFueSB3b3Jkc1xuICBpZiAodHlwZW9mKG9wdGlvbnMpID09PSAnbnVtYmVyJykge1xuICAgIG9wdGlvbnMgPSB7IGV4YWN0bHk6IG9wdGlvbnMgfTtcbiAgfVxuXG4gIC8vIG9wdGlvbnMgc3VwcG9ydGVkOiBleGFjdGx5LCBtaW4sIG1heCwgam9pblxuXG4gIGlmIChvcHRpb25zLmV4YWN0bHkpIHtcbiAgICBvcHRpb25zLm1pbiA9IG9wdGlvbnMuZXhhY3RseTtcbiAgICBvcHRpb25zLm1heCA9IG9wdGlvbnMuZXhhY3RseTtcbiAgfVxuICB2YXIgdG90YWwgPSBvcHRpb25zLm1pbiArIHJhbmRJbnQob3B0aW9ucy5tYXggKyAxIC0gb3B0aW9ucy5taW4pO1xuICB2YXIgcmVzdWx0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgKGkgPCB0b3RhbCk7IGkrKykge1xuICAgIHJlc3VsdHMucHVzaCh3b3JkKCkpO1xuICB9XG4gIGlmIChvcHRpb25zLmpvaW4pIHtcbiAgICByZXN1bHRzID0gcmVzdWx0cy5qb2luKG9wdGlvbnMuam9pbik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd29yZHM7XG4vLyBFeHBvcnQgdGhlIHdvcmQgbGlzdCBhcyBpdCBpcyBvZnRlbiB1c2VmdWxcbndvcmRzLndvcmRMaXN0ID0gd29yZExpc3Q7XG5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYWdnYWJsZShlbGVtZW50KSB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVsZW1lbnQuZHJhZ09mZnNldCA9IHtcbiAgICAgIGxlZnQ6IGV2ZW50LmNsaWVudFggLSBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgICB0b3A6IGV2ZW50LmNsaWVudFkgLSBlbGVtZW50Lm9mZnNldFRvcFxuICAgIH07XG4gIH0pO1xuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBlbGVtZW50LmRyYWdPZmZzZXQgPSBudWxsO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LmRyYWdPZmZzZXQpIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGV2ZW50LmNsaWVudFggLSBlbGVtZW50LmRyYWdPZmZzZXQubGVmdDtcbiAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gZXZlbnQuY2xpZW50WSAtIGVsZW1lbnQuZHJhZ09mZnNldC50b3A7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4iXX0=
