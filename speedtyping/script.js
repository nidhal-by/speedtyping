var temp = document.querySelector('.time');
var button = document.querySelector(".start-button");
var words = document.querySelector(".words");
var timerDiv = document.querySelector(".time");
var scoreDiv = document.querySelector(".score");
var points = 0;
var spans;
var typed;
var list = [];
var seconds = 60;

 	function countdown() {
 		points = 0;
 		var timer = setInterval(function(){
 			button.disabled = true;
    		seconds--;
    		temp.innerHTML = seconds;
    		if (seconds === 0) {
    			alert("Game over! Your score is " + points);
    			scoreDiv.innerHTML = "0";
    			words.innerHTML = "";
    			button.disabled = false;
    			clearInterval(timer);
    			seconds = 60;
    			timerDiv.innerHTML = "60";
    			button.disabled = false;	
    		}
 		}, 1000);
  	}

  	function random() {
  		words.innerHTML = "";
        var random = Math.floor(Math.random() * (list.length + 1));
  		var wordArray = list[random].split("");
  		for (var i = 0; i < wordArray.length; i++) {
  			var span = document.createElement("span");
  			span.classList.add("span");
  			span.innerHTML = wordArray[i];
  			words.appendChild(span);
  		}
  		spans = document.querySelectorAll(".span");
  	}

   const easy = ["ACT", "ADD", "AGE", "AGO", "AIR", "ALL", "AND", "ANY", "ARE", "ARM", "ART", "ASK", "BAD", "BAG", "BIG",
    "BIT", "BOX", "BOY", "BUS", "BUT", "BUY", "CAN", "CAP", "CAR", "CAT", "CRY", "CUP", "CUT", "DAY", "DIE", "DOG", "DRY",
     "EAR", "EAT", "EGG", "END", "EYE", "FAR", "FAT", "FEW", "FIT", "FIX", "FLY", "FOR", "FOX", "FUN", "GET", "GOD", "GUN", 
     "HAT", "HEN", "HER", "HIM", "HIS", "HIT", "HOT", "HOW", "ICE", "ITS", "JOB", "KEY", "LEG", "LET", "LIE", "LIP", "LOT", 
     "LOW", "MAN", "MAP", "MAY", "MIX", "NET", "NEW", "NOR", "NOT", "NOW", "OFF", "OIL", "OLD", "ONE", "OUR", "OUT", "OWN", 
     "PAN", "PAY", "PEN", "PER", "PIG", "PIN", "PUT", "RED", "ROB", "RUN", "SAD", "SAY", "SEE", "SHE", "SIT", "SIX", "SKY", 
     "SON", "SUN", "TEA", "TEN", "THE", "TIE", "TOE", "TOO", "TOP", "TRY", "USE", "WAS", "WAY", "WET", "WHO", "WHY", "WIN", 
     "YET", "YOU", "ZOO","MIME","SULKS","FRIZZ","ELKS","FILLS","CAST","ICED","METES","PULP","RAPT","ECHO","TUTUS","UNTO",
     "JAPE","SALT","CODAS","WISPY","IDLE","BOUT","HALLO","TELEX","BARK","WIDTH","FARMS","CUTIE","GISMO","KNEEL","LIARS",
     "DRAW","PARED","WERE","FIZZY","FABLE","ROMAN","PINKS","TUSH","NADIR","CUTEY","SNAGS","DOGMA","HASP","TREAT","TWOS",
     "BRAG","UNMET","LUGS","COGS","TRIER","FRIG","POUT","SECS","TRIBE","FEND","LOFTS","HAVOC","DEANS","DITCH","MEEK","YOGA",
     "FJORD","PARTS","HONED","PLOYS","SHANK","HOCKS","BANG","SHARK","GENII","BURNT","PAGE","JOUST","PROXY","FILTH","LURK","LOOS",
     "SAYS","FEAT","PEARS","DWELL","SCRAM","BOAR","BETEL","REELS","PUFFS","LYRIC","FROWN","ANNOY","WADI","BLIP","SLAP","RUMBA","MADE",
     "SNUG","DRILL","TYPE","BLAME","RAMS","HAIR","SPAM","COCOA","HAMMY","HOBS","FLOOR","PITON","SHIRE","VISES","CRIES","GLORY","COLOR",
     "KICK","SAGA","PARRY","GIDDY","CURIO","WAXY","BROW","SUITE","ASHY","AKIN","PESO","PLANE","LEAVE","WATCH","PLIES","LEGIT","DENS",
     "LESS","BACKS","QUIZ","PLEBE","JUNK","TERNS","GILTS","REHAB","EYING","RATE","FLIRT","GIVES","CRAFT","RANK","AIMS","MINDS","DUCT",
     "LIPS","QUIFF","BISON","DECRY","DESK","AGISM","SWIGS","AURAL","FETA","JUDO","PECKS","CHIRP","FORCE","BUFFS","STUMP","VISOR","LIME",
     "MORNS","BEARS","OAKEN","WANDS","RETRO","STINT","BEAT","ROADS","LAMB","ALONE","TACKY","DIVE","AWARD","ORBIT","MERRY","TWEED",
     "TYPO","NAPE","FLEX","FEARS","AHEM","RIOTS","FAILS","SWEAT","IBEX","STOCK","ATOLL","SAXES","LODGE","FECAL","JAMB","FUNGI",
     "QUEUE","GLAZE","CARGO","IKON","SCRIP","VOWS","HAWED","STUNS"];
    
     const medium = ["CROCKED","GULLIES","OXIDIZES","INSPECTS","ATROCITY","ELATION","LEERED","KHALIFS","UNPACKED","JAUNTS",
     "INACTIVE","SERAPHIM","CANYON","COMPERES","PERTAINS","SPINNEYS","FATTER","TRIMMER","SCROLLS","CADGERS","ONIONS","FREEHOLD",
     "VOLTAGES","CAVIARE","CRINGES","GENETICS","TOPPING","THERMS","PASTURES","UPTURNED","DRIFTER","EXILES","TITTERS","ZOOMING",
     "EXECUTE","BORSCHT","SEAFRONT","MEANIES","UNCURLS","MISLEAD","TWINSET","RAZZED","AIRING","PUNTER","BOULES","TUNICS","GANGLY",
     "COCCYX","CHEDDAR","RIDDED","OLDIES","CABINET","ADIEUS","BRIERS","REOPEN","CASHIERS","RISOTTOS","SCREEDS","USHERS","NAFFEST",
     "HELLOS","SAPPIER","PHONIEST","WEATHER","CHEERILY","FELONIES","FAGGED","DEFIED","ANTENNAS","RUBELLA","REMAND","LITIGANT",
     "BUSTING","THROAT","TRIALED","SHINDIGS","LUNCHED","TECTONIC","DONKEY","TOPEES","HOARDING","WHEREOF","COMPLIED","FELONS",
     "FUTILE","MONOLITH","DEFACED","TRUSTED","HACKER","MASTHEAD","VALUER","TAVERNS","DEMOBS","WHINED","SCUTTLES","COLLIDED",
     "STRIFE","MARQUE","PREPPIES","WORSEN","ERRANDS","IMPARTED","INFUSION","TWELVES","SOLVES","BEADED","REIGNED","RATTLED",
     "EMPIRE","FOULING","CARREL","IMPETUS","PLAQUE","DYSLEXIA","INSTINCT","DIMWITS","SHREWD","MURDER","SHINER","PRECOOK",
     "MAGPIES","HAPPENS","ENDEARED","CHIPPY","GLARES","WRONGS","BEGGARS","SPAYED","CUTOUTS","MIGRATED","UNEASIER","REGIMES",
     "SLURRED","LOUDEST","PRODIGY","OILIER","SIZZLER","AMPULES","REGION","ROADIES","PEAHENS","GAZUMPED","RAPPERS","VALENCY",
     "VOIDED","CESSPIT","PHONIER","CURIOS","GETAWAYS","PIFFLE","CORNROWS","THINKING","FLASHGUN","HOAXING","SPECTRUM","FALCONRY",
     "DECISIVE","AIRSPACE","CARPET","CREAKING","WHORLS","WELLED","CURTSEYS","PUSHCART","VITIATE","FORWENT","COLLUDED","TRAMPS",
     "SHUTEYE","BURIED","CHARMERS","THRUWAY","TERRAPIN","SOLVENCY","UNVEILED","SCOURERS","ABJECTLY","ISLANDER","BEFALLEN",
     "OVERDID","FEDERAL","SURELY","RESELL","CRUSADE","MANURED","DABBLES","FLESHED","NOBLEST","GUIDING","INFLUX","MINUTING",
     "CLANGOR","HEROISM","SPEECH","BEATERS","RUBIES","MEZZOS","SHEARED","CAUGHT","WHINGERS","REACTANT","MEDICOS","MESSIAH",
     "YARMULKE","SUPREME","PONIED","MAJESTY","SCHEMING","CLAYEY","PICKERS","TROUBLE","PROCTORS","DEPOSES","CLARITY","ARIGHT",
     "ENTRANT","RENOWNED","YAKKING","RODEOS","APHASIA","HEATERS","LANKIER","ROYALTY","BARGAIN","MISSILE","SEVENTH","RUDENESS",
     "CALYXES","RAGGEDLY","MANNERS","ENCHANTS","DATEBOOK","OVERUSE","TRUISMS","SAVIOUR","GRANDADS","PUNISHED","BACKSIDE",
     "BREAKING","BABIES","THRUSH","POWDERY","PRANCES","TRUANCY","REALISES","FLUBBED","PATROLS","STUMPED","SMIRKS","INJURED",
     "SABRES","FELLING","CONDOS","POPLAR","VOCATION","TERROR","RISKING","AERATION","HORNED","UTILISES","HUMANLY","CONFESS"];
     
     const hard = ["PICNICKED","ADMONITIONS","EXCULPATE","HOSPITABLY","VORACIOUS","PUNCTUATION","LUDICROUS",
     "ENORMOUSLY","QUALIFYING","DISLOCATES","KNOCKOUTS","CAMPANILES","BROADSWORDS","DEMONIACAL","GENERALISTS",
     "PARENTHESES","INFANTRYMEN","PHONETICIAN","LABELLING","FORGETTING","SOBRIQUETS","OUTWEIGHING","INTIMATIONS",
     "SPACEWALKS","DEPRESSANT","PARALYZES","COMBATING","GOALPOSTS","SHOEMAKER","HARDCOVER","CHEMICALLY","STRATEGIES",
     "EXUBERANTLY","DAYDREAMS","PLUPERFECT","WEEKNIGHT","GLOSSINESS","SANITARIUMS","ANAESTHESIA","TENDERIZED",
     "ABDOMINAL","PROPAGATE","SOUNDINGS","CHANCELLORS","PRESSURISE","QUIZZICAL","OUTRUNNING","ANGLICISM","REPELLENT",
     "PEDALLING","RIDICULING","AFTERNOON","PALPITATES","PUNGENTLY","SUCCOURED","CASTRATED","GREENGAGES","PRESIDENT",
     "TRELLISES","JUSTIFIED","UNEARTHING","PHYSIOLOGY","PAUNCHIEST","SYNDICATED","ENSLAVEMENT","INNOCENCE","KINGMAKER",
     "FLABBIEST","SHEIKHDOM","FULMINATE","SUBMISSIONS","HESITATIONS","RESERVING","DEFINITELY","PURCHASED","CARAMELISED",
     "ADRENALINE","DRESSIEST","UPSETTING","WICKEDEST","ENTITLEMENT","POPULARLY","INNUENDOS","BILBERRIES","SHORELINE",
     "ATTAINING","DISCOURAGE","MARTINETS","REMOUNTED","NOBLEWOMEN","OMBUDSMEN","CANCEROUS","FARMLANDS","OVERRULING",
     "GRENADIERS","UNDERSIZED","REVEALING","SKITTISHLY","EVANGELISM","REPUDIATED","ANNEALING","POLICYMAKER","BARRACUDA",
     "CASELOADS","PERMANENCY","PATHOGENS","POLITICALLY","MESMERIZES","DISORDERS","MEGASTARS","ADVERSARY","SEAMANSHIP",
     "BIVOUACKING","BANDSTANDS","APPROBATION","COURTSHIP","OPTICIANS","HAIRSTYLE","PROCLAIMS","FLYWEIGHT","FORGATHERED",
     "UNDERCLASS","CAREGIVER","DISAPPEARS","REDCURRANT","MOBILISING","OVERRATES","CORPUSCLES","SYNAGOGUE","BELABORED",
     "DISPARAGING","IRRITATES","INSANITARY","CREATIONIST","CASTRATING","BUTTONHOLES","ARMADILLOS","FRONTBENCH","CHAINSAWS",
     "REHEARSING","FLAKINESS","PRESUMING","HANDCUFFING","FORTIETHS","CHECKLIST","SPECULATE","SUNDERING","REMOVABLE","BUBBLEGUM",
     "CORPOREAL","THRASHING","MOTIVATIONS","DISLOYALTY","DIGNITARIES","DIRECTIONAL","BYSTANDERS","PORTIONING","IMMIGRATION",
     "REALIGNING","RESTORATIVE","CENTENNIALS","SOCIALITE","PSYCHIATRY","STIGMATIZED","YAMMERING","ELECTRICITY","DATELINES",
     "COLOURIZING","PAROCHIAL","STRANGLED","DISQUALIFY","NANOSECOND","REFERABLE","MAJESTIES","RESPONDING","RESONATED","EGGSHELLS",
     "EXCORIATING","INTOLERANT","CATALYZES","TRIUMPHAL","SALIVATED","REPENTING","INQUIRINGLY","IMMORALLY","BANDLEADERS",
     "SCALLYWAGS","EXPECTORATE","TIMESERVERS","REMINDERS","CATALOGUE","TERMINATION","BLANCMANGE","BESIEGING","SPORTSWEAR",
     "REALIZATION","VIRULENCE","TRAGICALLY","FLOGGINGS","VIBRAPHONE"];

  	button.addEventListener("click", function(e){
        let radiobuttons= document.querySelectorAll("input[name = 'btnradio']");
        let findselected = () => {
            let selected = document.querySelector("input[name = 'btnradio']:checked").value;   
            console.log(selected);
            return selected;
        } 
        radiobuttons.forEach(radiobtn => {
            radiobtn.addEventListener("change", findselected)
        });
        let selected = findselected();
        if (selected == 1){
            list=[...easy];
        }
        else if (selected == 2){
            list=[...medium];
        }
        else list=[...hard];

  		countdown();
  		random();
  		button.disabled = true;	
  	});


  	function typing(e) {
  			typed = String.fromCharCode(e.which);
  			for (var i = 0; i < spans.length; i++) {
  				if (spans[i].innerHTML === typed) { 
  					if (spans[i].classList.contains("bg")) { 
  						continue;
  					} else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) {
  						spans[i].classList.add("bg");
  						break;
  					}
  				}
  			}
  			var checker = 0;
  			for (var j = 0; j < spans.length; j++) {
  				if (spans[j].className === "span bg") {
  					checker++;
  				}
  				if (checker === spans.length) {
  					points++;
  					scoreDiv.innerHTML = points;
  					document.removeEventListener("keydown", typing, false);
  					setTimeout(function(){
  						words.className = "words";
  						random();
  						document.addEventListener("keydown", typing, false);
  					}, 400);
  				}

  			}
  	}

  	document.addEventListener("keydown", typing, false);