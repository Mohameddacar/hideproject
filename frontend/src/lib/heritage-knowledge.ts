import { ARCHIVE_ITEMS } from "@/lib/constants";

export interface KnowledgeEntry {
  keywords: string[];
  responseSo: string;
  responseEn?: string;
}

const HERITAGE_KNOWLEDGE: KnowledgeEntry[] = [
  {
    keywords: [
      "araweelo", "awarkaba", "ebla", "boqorad", "queen",
      "ii sheeg araweelo", "sheekada araweelo", "yaa ahayd araweelo",
    ],
    responseSo: `**Araweelo** (Ebla Awarkaba) waa mid ka mid ah jilayaasha ugu caansan ee sheekooyinka afka lagu dhawaaqo ee Soomaalida iyo Geeska Afrika.

**Yaa ahayd?**
Sida sheekooyinka dadweynuhu sheegeen, Araweelo waxay ahayd boqorad xoog badan, caqli badan, oo si adag u maamushay bulshadeeda. Waxaa la sheegaa inay dejisay xeerar caddaalad iyo sinnaan ka dhexeeya ragga iyo dumarka, taasoo ka dhigtay astaan joogto ah oo ka mid ah xoogga haweenka Soomaaliyeed.

**Muhiimadeeda dhaqanka**
- Sheekadeeda waxaa loo gudbiyay jiilal badan iyadoo loo marayo *sheekooyin* iyo *maanso*
- Waxay matashaa hoggaan, adkaysi, iyo geesinimo dumar
- Waa tusaale laga hadlo marka laga hadlayo taariikhda haweenka Soomaalida

**Xusuusin:** Sheekada Araweelo waa *dhaqan afka lagu dhawaaqo* — qaybaha kala duwan ee bulshadu waxay ku darayaan faahfaahin kala duwan, laakiin asalka sheekadu waa mid la wadaago.

Ma rabtaa inaan kuu sheego sheekooyin kale oo Soomaaliyeed ama boqorro kale oo taariikhda ku jira?`,
    responseEn: `**Araweelo** (Ebla Awarkaba) is one of the most famous figures in Somali oral tradition — a powerful queen celebrated across the Horn of Africa.

According to storytellers, she was a wise and formidable ruler who established laws promoting justice and gender equity. Her legend has been passed down for generations through folktales and remains a symbol of female strength in Somali culture.

Would you like to know more about Somali folktales or other legendary figures?`,
  },
  {
    keywords: [
      "laas geel", "laasgeel", "laas geel", "dhagax", "farshaxan",
      "rock art", "cave", "hargeisa", "somaliland", "pastoralist",
      "waa maxay laas geel", "ii sheeg laas geel",
    ],
    responseSo: `**Laas Geel** waa goob qadiimiga ah oo ka mid ah kuwa ugu muhiimsan Geeska Afrika — waxay ku taal meel u dhow Hargeysa, waxaana lagu qiyaasaa in farshaxankeeda uu jiro **5,000 ilaa 10,000 sano**.

**Maxaa laga helay?**
- Sawirro dhagaxa lagu rinjiyeeyay oo muujinaya lo'da, eeyaha, iyo xaflado
- Caddeyn muujinaysa noloshii **dadkii xoolo-dhaqatada ahaa** ee gobolka ku noolaa qarniyo badan ka hor qoraalka

**Muhiimadeeda**
- Waxaa loo yaqaan "Sistine Chapel of Africa"
- Waxay caddeyn u tahay in dhaqanka Soomaalidu uu leeyahay asal qadiim ah oo qoto dheer
- Waa hanti qaran oo u baahan ilaalin iyo kaydin

**Xiriirka taariikhda**
Laas Geel waxay xiriir la leedahay ganacsigii hore ee Berbera iyo dhaqankii xoolo-dhaqatada ee gobolka oo dhan.

Ma rabtaa inaan kuu faahfaahiyo waddooyinkii ganacsiga ee Berbera ama noloshii xoolo-dhaqatada?`,
    responseEn: `**Laas Geel** is one of the most remarkable archaeological sites in the Horn of Africa — rock shelters near Hargeisa with vivid paintings estimated to be 5,000–10,000 years old, depicting cattle, dogs, and ceremonial scenes of early Somali pastoralists.`,
  },
  {
    keywords: [
      "gabay", "maanso", "maansada", "abwaan", "shiir", "geeraar",
      "jiifto", "hees", "poetry", "poet", "hadraawi", "gaarriye",
      "waa maxay gabay", "ii sheeg gabay", "gabayga soomaalida",
    ],
    responseSo: `**Maansada Soomaalida** waxaa badanaa loo yaqaan nolosha dhaqanka — waa farshaxan afka lagu dhawaaqo oo leh qawaaniin dheer, masawirro hodan ah, iyo saameyn siyaasadeed iyo dareen.

**Noocyada ugu waaweyn**
- **Gabay** — maanso dheer oo rasmi ah; taariikh, siyaasad, iyo falsafad
- **Geeraar** — maanso gaaban oo xoog leh
- **Jiifto** — maanso jacayl iyo dareen
- **Hees** — muusig iyo maanso isku dhafan
- **Shiir** — maanso gaaban oo xasuusin ah

**Abwaanno caan ah**
- **Hadraawi** — abwaankii ugu weynaa ee qarnigii 20aad
- **Gaarriye** — abwaan siyaasadeed oo saameyn weyn lahaa
- **Cilmi Boodhari**, **Salaan Carrabey** — abwaanno taariikhi ah

**Astaamaha gabayga**
Gabaygu wuxuu inta badan isticmaalaa masawirro laga soo qaatay geela, badda, cidlada, iyo sharafta qabiilka. Waa qalab loo isticmaalo in lagu sheekeeyo, lagu baro, looguna dooddo.

Ma rabtaa inaan kuu sharxo hal abwaan gaar ah ama nooc maanso gaar ah?`,
    responseEn: `**Somali poetry** (*maansada*) is the lifeblood of Somali culture — with forms like Gabay, Geeraar, Jiifto, and Hees. Great poets like Hadraawi and Gaarriye shaped national consciousness through verse rich in metaphor from camel herding, the sea, and desert landscapes.`,
  },
  {
    keywords: [
      "maahmaah", "maahmaahyo", "maahmaahda", "proverb", "xikmad",
      "odhaah", "hal maahmaah", "ii sheeg maahmaah", "turjum maahmaah",
    ],
    responseSo: `**Maahmaahyada Soomaalida** waa xikmad jiilal lagu ururiyay oo ku jirta weedho kooban laakiin macne qoto dheer leh.

**Tusaalooyin caan ah**

> *"Guri aan buulo ahayn, biyo laguma dhaansado."*
> **Macnaha:** Haddii aad aasaas sax ah dhisto, uma baahnid inaad waxyaabaha aasaasiga ah ka raadiso meel fog.

> *"Nin aan wax bartay, waa nin aan wax cunay."*
> **Macnaha:** Aqoontu waa nafaqo — barashadu waa sida cuntada oo kale.

> *"Geel dhalay, geel dhashay."*
> **Macnaha:** Dhaqanku wuu is-soo celiyaa; waxa aabbayaashu sameeyeen ayaa jiilka cusub ku dayan.

> *"Af macaan, garac macaan baa ka dambeeya."*
> **Macnaha:** Hadalka macaan mararka qaarkood wuxuu qariyaa ujeeddo kale.

> *"Nin kastaa shaqadiisa ayuu yaqaan."*
> **Macnaha:** Qof kastaa wuxuu leeyahay kartidiisa iyo aqoontiisa gaarka ah.

**Muhiimadda maahmaahda**
Maahmaahyadu waxay baraan: bulshonimada, adkaysiga, martigelinta (*martisoor*), iyo xikmadda nolosha.

Ma haysaa maahmaah aad rabto inaan kuu sharxo ama turjumo?`,
    responseEn: `**Somali proverbs** (*maahmaahyo*) pack generations of wisdom into concise phrases teaching community, resilience, and hospitality. Share a proverb you'd like explained!`,
  },
  {
    keywords: [
      "berbera", "ganacsi", "deked", "ganacsiga", "trade", "port",
      "badda cas", "ii sheeg berbera", "waddooyinka ganacsiga",
    ],
    responseSo: `**Berbera** waa deked muhiim u ahayd Badda Cas kumanaan sano — waxay isku xirtay xeebta Soomaalida iyo Carabta, Faaris, Hindiya, iyo dalal kale.

**Taariikhda ganacsiga**
- Waxaa laga ganacsan jiray: foox, mur, xoolo, harag, iyo cusbo
- Berbera waxay xiriir ka dhigtay dhaqaalaha gudaha iyo shabakadaha ganacsiga Badweynta Hindiya
- Waxay qayb ka ahayd hantidii ganacsiga ee Geeska Afrika

**Dekedaha kale ee taariikhiga ah**
- **Saylac** (Zeila) — deked qadiim ah oo ganacsi
- **Muqdisho** — caasimad taariikhi ah oo ganacsi

**Muhiimadda maanta**
Berbera wali waa astaan muujinaysa in Soomaalidu ay leedahay taariikh ganacsi badeed oo qadiim ah.

Ma rabtaa inaan kuu sheego Boqortooyadii Ajuran ama ganacsigii Saylac?`,
    responseEn: `**Berbera** has been a vital Red Sea port for millennia, connecting the Somali coast to Arabia, Persia, and India through trade in frankincense, livestock, and salt.`,
  },
  {
    keywords: [
      "dirac", "guntiino", "garbasaar", "dharka", "dhar", "alindi",
      "dharka dhaqanka", "textile", "clothing", "dress", "weaving",
      "waa maxay dirac", "dharka soomaalida",
    ],
    responseSo: `**Dharka dhaqanka Soomaalida** waa qurux iyo astaan labadaba — waxay muujinayaan gobol, munaasabadda, iyo aqoonsiga qofka.

**Noocyada ugu waaweyn**
- **Guntiino** — dhar la isku duubto, farsamo gaar ah leh
- **Dirac** — dhar dheer oo qurux badan, gaar ahaan aroosyada iyo xafladaha
- **Garbasaar** — maro madaxa lagu xidho
- **Alindi** — dharka la tolo oo leh naqshado jiilal soo taxnaa

**Macnaha astaamaha**
- Midabka iyo naqshadda waxay sheegi karaan gobolka qofka
- Dharka aroosku waa mid ka mid ah waxyaabaha ugu muhiimsan ee xafladda
- Farsamada tolida waa hanti dhaqameed oo la ilaaliyo

**Ilaalinta dhaqanka**
Farsamayaqaannada tolida ayaa ilaaliya naqshado qarniyo jiray, taasoo muujinaysa in dharku yahay qayb nool oo ka mid ah dhaxalka.

Ma rabtaa inaan kuu sheego dhaqanka arooska ama kala duwanaanshaha gobolka?`,
    responseEn: `**Somali traditional dress** includes Guntiino, Dirac, Garbasaar, and Alindi woven textiles — each carrying regional and ceremonial symbolism passed down through generations.`,
  },
  {
    keywords: [
      "muusig", "hees", "heesaha", "heesaha dhaqanka", "buraanbur",
      "music", "song", "saar", "hees jacayl", "ii sheeg hees",
    ],
    responseSo: `**Muusiga iyo heesaha Soomaalida** waxay daboolaan nolosha oo dhan — aroos, jacayl, dhaqan, iyo waddaniyad.

**Noocyada heesaha**
- **Buraanbur** — heeso haweenku qaadaan, gaar ahaan aroosyada; waa maanso iyo qoob-ka-ciyaar
- **Hees dhaqameed** — heeso ilaalinaya taariikhda iyo qiimaha
- **Hees jacayl** — heeso jacayl
- **Saar** — heeso dhaqameed iyo ruuxi ah
- **Hees wadani** — heeso waddaniyad

**Qalabka muusiga**
- **Kaban** (oud) — qalabka ugu caansan
- **Durbaan** iyo garaacis gacmaha

**Xiriirka maansada**
Heesaha badankoodu waa maanso la dhagaystay — maansada iyo muusiggu waa isku xiran yihiin dhaqanka Soomaalida.

Ma rabtaa inaan kuu sheego heesaha arooska ama fanaaniinta caanka ah?`,
    responseEn: `**Somali music** includes Buraanbur (women's wedding poetry-songs), hees dhaqameed, and hees jacayl — inseparable from the oral poetry tradition.`,
  },
  {
    keywords: [
      "geel", "geela", "raacatada", "xoolo", "xoolo-dhaqato",
      "camel", "nomad", "pastoral", "dhaqan", "caano geel",
      "noloshii xoolo-dhaqatada", "waa maxay geel",
    ],
    responseSo: `**Geelu** wuxuu udub-dhexaad u yahay dhaqanka xoolo-dhaqatada Soomaalida — taariikh ahaan wuxuu ahaa cabbirka hodantinimada, badbaadada, iyo sharafta bulshada.

**Muhiimadda geela**
- **Caano geel** — cunto iyo cabitaan muhiim ah
- **Hanti** — geelu wuxuu matalaa hodantinimada
- **Maansada** — geelu waa isha ugu weyn ee masawirrada gabayga

**Noloshii xoolo-dhaqatada**
- Dhaqdhaqaaq iyo aqoon dhul, cimilo, iyo xoolo
- **Martigelin** (*martisoor*) — martidu waa sharaf
- Xeer iyo heshiis qabiil oo ku salaysan nolosha reer guuraaga

**Saameynta maanta**
In kasta oo magaalooyinka ay balaareen, qiimaha xoolo-dhaqatada wali waa qayb weyn oo ka mid ah aqoonsiga Soomaalida adduunka oo dhan.

Ma rabtaa inaan kuu sheego xeerka Soomaalida ama martigelinta?`,
    responseEn: `The **camel** (*geel*) is central to Somali pastoral culture — a measure of wealth, survival, and the source of rich metaphors in poetry, diet, and daily life.`,
  },
  {
    keywords: [
      "xeer", "xeerka", "sharciga dhaqanka", "diya", "mag", "cadaalad",
      "law", "customary", "justice", "qabiil", "waa maxay xeer",
    ],
    responseSo: `**Xeerku** waa nidaamka sharciga dhaqanka ee Soomaalida — waa nidaam heshiis iyo is-afgarad ku salaysan, aan ahayn sharciga dowladda oo keliya.

**Sida uu u shaqeeyo**
- Xeerka waxaa lagu dejiyaa heshiis bulsho iyo qabiil
- Waa la isku waafaqaa, la cusboonaysiiyaa, looguna habeeyaa xaaladda
- Wuxuu daboolaa: mag-dhiska (*diya*), guurka, khilaafaadka, iyo anshaxa bulshada

**Tusaalooyin**
- **Mag-dhiska** — mag lagu bixiyo dhaawac ama dil
- **Guurka** — heshiisyada qoysaska
- **Khayraadka** — biyo, daaq, iyo dhul

**Muhiimadda**
Xeerku wuxuu muujinayaa sida bulshada Soomaalidu ay u maamushay nidaam caddaalad ah meel ballaaran ka hor dowladaha casriga ah. Qaybo ka mid ah wali waxay saameyn ku leeyihiin xallinta khilaafaadka maanta.

Ma rabtaa inaan kuu faahfaahiyo mag-dhiska ama guurka dhaqanka?`,
    responseEn: `**Xeer** is the traditional Somali customary law — a decentralized, consensus-based framework covering blood compensation (*diya*), marriage, and community disputes.`,
  },
  {
    keywords: [
      "aroos", "arooska", "guur", "guurka", "nisba", "meher",
      "wedding", "marriage", "buraanbur", "dhaqanka arooska",
      "ii sheeg aroos", "sida loo arooso",
    ],
    responseSo: `**Arooska Soomaalida** waa xaflad maalmo socota oo isku dhafan diinta Islaamka iyo dhaqanka Soomaalida.

**Tillaabooyinka arooska**
1. **Nisba** — heshiiska guurka ee qoysaska (ballanqaadka rasmiga ah)
2. **Meher** — qandaraaska guurka Islaamiga ah iyo hadiyadda aroosadda
3. **Arooska** — xafladda weyn ee bulshada
4. **Buraanbur** — haweenku waxay qaadaan heeso maanso iyo qoob-ka-ciyaar

**Dharka arooska**
- **Dirac** iyo **garbasaar** qurxoon
- Midabyo nool iyo dhar tayo sare leh

**Muhiimadda bulshada**
Aroosku ma aha oo kaliya guurka laba qof — waa isku xirka qoysaska iyo qabiilada. Cuntada, muusiga, iyo isu imaatinka bulshadu waa udub-dhexaad.

Ma rabtaa inaan kuu sheego buraanburka ama dharka arooska?`,
    responseEn: `**Somali weddings** (*aroos*) blend Islamic ceremony with cultural traditions — Nisba, Meher, Buraanbur performances, and stunning Dirac attire over multi-day celebrations.`,
  },
  {
    keywords: [
      "salaanada soomaalida", "salaanada caanka ah", "noocyada salaanta",
      "somali greetings", "how to greet in somali", "sida loo salaamo",
    ],
    responseSo: `**Salaanada Soomaalida** ee ugu caansan:

- **Assalaamu calaykum** — Nabadgelyo korkiin ha ahaato
- **Calaykum assalaam** — Jawaabta salaanta
- **Iska warran?** — Sidee tahay? (aan rasmi ahayn)
- **Sidee tahay?** — Su'aasha caadiga ah
- **Subax wanaagsan** / **Galab wanaagsan** — Salaan waqti
- **Nabad gelyo** — Nabad ku tag (iska dhaafid)

Wax kale ma ku qaban karaa?`,
    responseEn: `Common Somali greetings: Assalaamu calaykum, Iska warran?, Sidee tahay?, Nabad gelyo. What else can I help with?`,
  },
  {
    keywords: [
      "taariikh", "taariikhda", "soomaaliya", "soomaalida", "history",
      "horn of africa", "geeska afrika", "ii sheeg taariikh",
      "waa maxay taariikhda soomaaliya",
    ],
    responseSo: `**Taariikhda Soomaalida** waxay ku fidisaa kumanaan sano Geeska Afrika.

**Qarniyadii hore**
- Farshaxanka dhagaxa ee **Laas Geel** (5,000–10,000 sano)
- Ganacsigii badda ee **Berbera**, **Saylac**, iyo **Muqdisho**
- Xiriirka ganacsatada Masar, Faaris, iyo Carabta

**Qarnigii dhexe**
- **Boqortooyadii Ajuran** — xoog ganacsi iyo siyaasad
- Isku xirka gudaha iyo ganacsiga caalamiga ah

**Dhaqankii xoolo-dhaqatada**
- Reer guuraaga, xeerka, iyo maansada afka lagu dhawaaqo
- Nolol ku salaysan geela, adkaysi, iyo martigelin

**Xilligii casriga**
- Qaybsigii gumaysiga (Ingiriis, Talyaani, Faransiis)
- Madaxbannaanida 1960 (Waqooyi & Koonfur isku biir)
- Qaxootiga caalamiga ah iyo ilaalinta dhaqanka dibadda

**Kaydka HiddoAI**
Waxaan haynaa qoraallo ku saabsan Laas Geel, Berbera, gabayada, sheekooyinka, iyo wax badan oo kale.

Waa kuwee xilliga aad rabto inaan kuu faahfaahiyo?`,
    responseEn: `**Somali history** spans ancient rock art at Laas Geel, medieval sultanates like Ajuran, pastoral civilization, colonial divisions, 1960 independence, and a vibrant global diaspora.`,
  },
  {
    keywords: [
      "qurbajoog", "diaspora", "dibadda", "dalka dibadiisa",
      "soomaalida dibadda", "abroad", "immigrant", "community",
    ],
    responseSo: `**Qurbajoogta Soomaalida** waa mid ka mid ah kuwa ugu firfircoon adduunka — waxay ku kala firirsan yihiin Ameerika, Yurub, Bariga Dhexe, iyo Bariga Afrika.

**Sida dhaqanka loo ilaaliyo**
- **Dugsiyada Soomaaliga** — barashada luqadda carruurta
- **Xafladaha dhaqanka** — maanso, muusig, iyo dhar
- **Kaydka dijitaalka ah** — mashruucyo sida HiddoAI
- **Ururada dhalinyarada** — isku xirka jiilka cusub iyo dhaqanka

**Saameynta wanaagsan**
Qurbajoogtu waxay noqotay buundada u dhaxaysa dhaqanka dhaqameedka iyo tignoolajiyada casriga ah — waxay sii wadaan sheekooyinka, gabayada, iyo ganacsiga.

Ma rabtaa inaan kuu sheego sida luqadda loo baro ama mashaariicda dhaxalka?`,
    responseEn: `The **Somali diaspora** preserves heritage through language schools, cultural festivals, digital archives, and youth organizations bridging tradition and modern identity.`,
  },
  {
    keywords: [
      "sheeko", "sheekooyin", "folktale", "halyeey", "geedka sheekooyinka",
      "sheeko dhaqameed", "ii sheeg sheeko",
    ],
    responseSo: `**Sheekooyinka Soomaalida** waa habka ugu weyn ee xikmadda iyo taariikhda loo gudbiyo jiilalka.

**Noocyada sheekooyinka**
- **Sheekooyin halyeey** — sida Araweelo, Cigaal Shidaad
- **Sheekooyin xayawaan** — dugaag iyo xoolo leh jilayo
- **Sheekooyin cashir** — waxbarasho iyo anshax

**Geedka Sheekooyinka**
Waxaa caan ah in sheekooyinka lagu sheekeeyo hoosta geedka geedka (*geedka sheekooyinka*) — goob bulsho isku timaaddo.

**Muhiimadda**
Sheekooyinku waxay baraan: geesinimo, caddaalad, ixtiraam, iyo xikmad. Waa qayb muhiim ah oo ka mid ah dhaxalka afka lagu dhawaaqo.

Ma rabtaa sheeko gaar ah sida Araweelo ama sheekooyinka geedka?`,
    responseEn: `**Somali folktales** are passed down orally under the acacia tree (*geedka sheekooyinka*), teaching courage, justice, and wisdom through legends like Araweelo.`,
  },
  {
    keywords: [
      "luqadda", "luuqada", "af soomaali", "af-soomaali", "barashada afka",
      "language", "somali language", "sida loo barto soomaali",
    ],
    responseSo: `**Af-Soomaaliga** waa luqad Kaushitik ah oo ka mid ah kuwa ugu qadiimsan Geeska Afrika — luqad leh maanso hodan ah iyo naxwac adag.

**Astaamaha afka**
- **Hadal-maahmaah** — maahmaahyo badan oo maalinle ah
- **Maanso** — afku wuxuu ku habboon yahay gabayga
- **Lahjadaha** — kala duwanaansho gobolleed (Waqooyi, Koonfur, Jabuuti, iwm.)

**Erayo aasaasi ah**
- **Waan fiicanahay** — I am fine
- **Mahadsanid** — Thank you
- **Fadlan** — Please
- **Waan ka xumahay** — I am sorry
- **Walaal** — Brother/sister (saaxiib)

**Barashada afka**
Carruurta qurbajoogta waxaa lagu baraa dugsiyada Soomaaliga iyo guriga. HiddoAI wuxuu kaa caawin karaa erayada, maahmaahyada, iyo dhaqanka.

Ma rabtaa erayo gaar ah ama maahmaah aad rabto inaan kuu sharxo?`,
    responseEn: `**Af-Soomaaliga** is a Cushitic language with rich poetry and regional dialects. I can help you learn basic words, proverbs, and cultural expressions.`,
  },
];

const ISLAMIC_GREETING_PATTERNS = [
  /^(assalaamu?\s*calaykum|asalaamu?\s*calaykum|salaam\s*calaykum|salaamu?\s*calaykum)[\s!.?,]*$/i,
  /^(asc|ascm|aslm|asalam|assalam|asalamu?\s*alikum?|assalamu?\s*alaikum?)[\s!.?,]*$/i,
  /^(salaam\s*calaykum|salaamu?\s*calaykum)[\s!.?,]*$/i,
];

const CASUAL_GREETING_PATTERNS = [
  /^(salaam|salaan|salaamu?|asalaamu?|calaykum)[\s!.?,]*$/i,
  /^(hi|hey|hye|hiya|hello|helo|heyy|hii|yo|ey|ei)[\s!.?,]*$/i,
  /^(iska\s*warran|sidee\s*tahay|sideetahay|nabad\s*gelyo|nabad)[\s!.?,]*$/i,
  /^(subax\s*wanaagsan|galab\s*wanaagsan|habeen\s*wanaagsan)[\s!.?,]*$/i,
  /^(good\s*(morning|afternoon|evening|night))[\s!.?,]*$/i,
  /^(what'?s\s*up|wassup|sup)[\s!.?,]*$/i,
  /^(how\s*are\s*you|how\s*r\s*u)[\s!.?,]*$/i,
];

const IDENTITY_PATTERNS = [
  /^(kumaa|kuma)\s*tahay[\s?!.]*$/i,
  /^yaa\s*tahay[\s?!.]*$/i,
  /^adigu\s*kumaa\s*tahay[\s?!.]*$/i,
  /^who\s*are\s*you[\s?!.]*$/i,
  /^what\s*are\s*you[\s?!.]*$/i,
  /^(magacaa|magacaaga|magaca\s*aad)\b/i,
  /^what(?:'s|\s+is)\s+your\s+name[\s?!.]*$/i,
  /^maxaad\s*tahay[\s?!.]*$/i,
  /^maxaad\s+samaysaa[\s?!.]*$/i,
  /^what\s+do\s+you\s+do[\s?!.]*$/i,
  /^sidee\s+buu\s+u\s+shaqeeyaa[\s?!.]*$/i,
  /^waxaad\s+tahay[\s?!.]*$/i,
];

const ISLAMIC_GREETING_RESPONSES_SO = [
  "Wa calaykum assalaam iyo raxmadda Alle iyo barakaatuhu! Maxaa ku qabta?",
  "Wa calaykum assalaam! Nabadgelyo korkiin ha ahaato. Maxaan kuu qabtaa?",
  "Wa calaykum assalaam wr wb! Sidee kuu caawin karaa?",
];

const GREETING_RESPONSES_SO = [
  "So dhawoow! Maxaa ku qabta?",
  "Nabad! Sidee kuu caawin karaa?",
  "Iska warran! Maxaad rabtaa inaad ogaato?",
  "Waan fiicanahay, adigana? Maxaan kuu qabtaa?",
];

const IDENTITY_RESPONSE_SO = `Waxaan ahay **HiddoAI** — kaaliyahaaga dhaxalka dhaqanka Soomaalida.

Waxaan kaa caawiyaa:
- Taariikhda iyo sheekooyinka Soomaalida
- Gabayga, maahmaahyada, iyo muusiga
- Dharka, arooska, xeerka, iyo dhaqanka

Weydii su'aal toos ah — anigaa kuu jawaabi doona!`;

const IDENTITY_RESPONSE_EN = `I'm **HiddoAI** — your Somali cultural heritage assistant.

I help with Somali history, poetry, proverbs, music, traditions, and more. Ask me anything!`;

const GREETING_RESPONSES_EN = [
  "Hey! Welcome to HiddoAI. What can I help you with?",
  "Hi there! Ask me anything about Somali heritage.",
  "Hello! How can I help you today?",
];

const CLARIFY_RESPONSE_SO =
  "Ma hubo mawduuca aad rabto. Fadlan weydii su'aal toos ah — tusaale: **'Ii sheeg Araweelo'** ama **'Waa maxay gabayga?'**";

const CLARIFY_RESPONSE_EN =
  "I'm not sure what you're looking for. Try a direct question — e.g. **'Tell me about Araweelo'** or **'What is Somali poetry?'**";

const ARCHIVE_TRANSLATIONS: Record<string, { titleSo: string; descSo: string }> = {
  "1": {
    titleSo: "Taariikhda Afka ee Laas Geel",
    descSo:
      "Farshaxanka dhagaxa ee qadiimiga ah iyo sheekooyinka xoolo-dhaqatadii ugu horreysay ee Soomaalida ee godadka Somaliland ka tagay.",
  },
  "2": {
    titleSo: "Sheekada Araweelo",
    descSo:
      "Boqorad xoog iyo caqli leh — mid ka mid ah sheekooyinka ugu waarta ee Soomaalida.",
  },
  "3": {
    titleSo: "Naqshadaha Tolida Alindi",
    descSo:
      "Naqshado dharka dhaqameed oo jiilal laga soo gudbiyay farsamayaqaannada Soomaalida.",
  },
  "4": {
    titleSo: "DNA-ga Gabayga",
    descSo:
      "Baadhista qaab-dhismeedka gabayga iyo masawirrada qeexaya maansada Soomaalida qarniyo badan.",
  },
  "5": {
    titleSo: "Heesaha Dhaqanka",
    descSo:
      "Heeso dhaqameed oo afka lagu dhawaaqo lagu ilaaliyay — laga bilaabo heesaha arooska ilaa heesaha shaqada.",
  },
  "6": {
    titleSo: "Waddooyinka Ganacsiga Berbera",
    descSo:
      "Taariikhda ganacsigii badda ee qadiimiga ahaa ee Geeska Afrika ku xiray adduunka.",
  },
  "7": {
    titleSo: "Geedka Sheekooyinka",
    descSo:
      "Sheekooyinka hoosta geedka lagu sheekeeyo — ururin sheekooyin tuulooyinka Soomaalida.",
  },
  "8": {
    titleSo: "Dirac & Guntiino",
    descSo:
      "Farshaxanka iyo astaamaha dharka dhaqanka Soomaalida — laga bilaabo maalinlaha ilaa xafladaha.",
  },
};

const SOMALI_MARKERS =
  /\b(waa|maxay|maxaa|sidee|kee|yaa|miyaa|ma|ii|sheeg|sheekee|wax|aad|ugu|ka|ku|iyo|ama|haddii|sida|waa maxay|ii sheeg|maahmaah|gabay|taariikh|dhaqan|aroos|geel|sheeko|soomaal|af soomaali|sharax|turjum|faahfaahi)\b/i;

const ENGLISH_MARKERS =
  /\b(the|what|who|how|why|when|where|tell|about|explain|share|is|are|was|were|can|could|would|should)\b/i;

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function isIslamicGreeting(query: string): boolean {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return false;

  if (/^(asc|ascm|aslm)$/i.test(trimmed)) return true;

  return ISLAMIC_GREETING_PATTERNS.some((pattern) => pattern.test(trimmed));
}

export function isIdentityQuestion(query: string): boolean {
  const trimmed = query.trim().toLowerCase();
  return IDENTITY_PATTERNS.some((pattern) => pattern.test(trimmed));
}

export function isGreetingOnly(query: string): boolean {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return false;

  if (isIslamicGreeting(trimmed)) return true;

  if (trimmed.length <= 5 && /^(hi|hey|hye|hii|yo|hej|ey)$/i.test(trimmed)) {
    return true;
  }

  return CASUAL_GREETING_PATTERNS.some((pattern) => pattern.test(trimmed));
}

function getIslamicGreetingResponse(lang: "so" | "en"): string {
  if (lang === "en") {
    return "Wa alaikum assalam! Peace be upon you too. How can I help you?";
  }
  return pickRandom(ISLAMIC_GREETING_RESPONSES_SO);
}

function getIdentityResponse(lang: "so" | "en"): string {
  return lang === "so" ? IDENTITY_RESPONSE_SO : IDENTITY_RESPONSE_EN;
}

export function isRealQuestion(query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return false;
  if (q.includes("?")) return true;

  const questionPatterns =
    /\b(waa maxay|maxaa|maxay|sidee|kee|yaa|miyaa|goorma|immisa|ii sheeg|sharax|sheeg|turjum|faahfaahi|wax ii|ma ogtahay|what|who|how|why|when|where|tell me|explain|describe|about)\b/i;

  if (questionPatterns.test(q)) return true;
  if (q.split(/\s+/).length >= 4) return true;

  return false;
}

export function detectLanguage(query: string): "so" | "en" {
  const normalized = query.toLowerCase();
  const somaliScore = (normalized.match(SOMALI_MARKERS) || []).length;
  const englishScore = (normalized.match(ENGLISH_MARKERS) || []).length;

  if (englishScore > somaliScore && englishScore >= 2) return "en";
  if (somaliScore > 0) return "so";
  if (englishScore > 0) return "en";
  return "so";
}

function scoreEntry(query: string, entry: KnowledgeEntry): number {
  const normalized = query.toLowerCase();
  let score = 0;

  for (const keyword of entry.keywords) {
    const kw = keyword.toLowerCase();
    if (normalized.includes(kw)) {
      score += kw.split(" ").length > 1 ? 4 : 2;
    }
  }

  return score;
}

function searchArchive(query: string, lang: "so" | "en"): string | null {
  const normalized = query.toLowerCase();

  for (const item of ARCHIVE_ITEMS) {
    const translation = ARCHIVE_TRANSLATIONS[item.id];
    const titleSo = translation?.titleSo ?? item.title;
    const descSo = translation?.descSo ?? item.description;
    const searchable = `${item.title} ${item.description} ${titleSo} ${descSo} ${item.category}`.toLowerCase();
    const titleWords = `${item.title} ${titleSo}`.toLowerCase().split(/\s+/);

    const matchCount = titleWords.filter(
      (word) => word.length > 3 && normalized.includes(word)
    ).length;

    if (matchCount >= 2 || normalized.includes(item.title.toLowerCase())) {
      if (lang === "so") {
        return `**${titleSo}** (${item.category})\n\n${descSo}\n\n*Waxaa diiwaangeliyay ${item.author} — qayb ka mid ah Kaydka Dhaqanka HiddoAI.*\n\nMa rabtaa inaan kuu sheego mawduucyo la xiriira?`;
      }
      return `**${item.title}** (${item.category})\n\n${item.description}\n\n*Recorded by ${item.author} — part of the HiddoAI Cultural Archive.*`;
    }

    if (titleWords.some((word) => word.length > 4 && searchable.includes(normalized))) {
      if (lang === "so") {
        return `**${titleSo}** (${item.category})\n\n${descSo}\n\n*Waxaa diiwaangeliyay ${item.author}.*`;
      }
      return `**${item.title}** (${item.category})\n\n${item.description}\n\n*Recorded by ${item.author}.*`;
    }
  }

  return null;
}

function findBestKnowledge(query: string): {
  entry: KnowledgeEntry;
  score: number;
} | null {
  let bestEntry: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of HERITAGE_KNOWLEDGE) {
    const score = scoreEntry(query, entry);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  return bestEntry && bestScore > 0 ? { entry: bestEntry, score: bestScore } : null;
}

function getGreetingResponse(lang: "so" | "en"): string {
  return lang === "so"
    ? pickRandom(GREETING_RESPONSES_SO)
    : pickRandom(GREETING_RESPONSES_EN);
}

export interface HeritageResponseMeta {
  text: string;
  lang: "so" | "en";
  matchType: "greeting" | "identity" | "knowledge" | "archive" | "clarify" | "fallback";
  knowledgeScore: number;
}

function buildHeritageResponse(trimmed: string, lang: "so" | "en"): HeritageResponseMeta {
  if (!trimmed) {
    return {
      text:
        lang === "so"
          ? "Qor wax aad rabto inaad ogaato — waan kuu jawaabi doonaa!"
          : "Type your question — I'm ready to help!",
      lang,
      matchType: "fallback",
      knowledgeScore: 0,
    };
  }

  if (isIslamicGreeting(trimmed)) {
    return {
      text: getIslamicGreetingResponse(lang),
      lang,
      matchType: "greeting",
      knowledgeScore: 0,
    };
  }

  if (isGreetingOnly(trimmed)) {
    return {
      text: getGreetingResponse(lang),
      lang,
      matchType: "greeting",
      knowledgeScore: 0,
    };
  }

  if (isIdentityQuestion(trimmed)) {
    return {
      text: getIdentityResponse(lang),
      lang,
      matchType: "identity",
      knowledgeScore: 0,
    };
  }

  const knowledge = findBestKnowledge(trimmed);
  const archiveMatch = searchArchive(trimmed, lang);

  if (knowledge && (!archiveMatch || knowledge.score >= 2)) {
    return {
      text:
        lang === "en" && knowledge.entry.responseEn
          ? knowledge.entry.responseEn
          : knowledge.entry.responseSo,
      lang,
      matchType: "knowledge",
      knowledgeScore: knowledge.score,
    };
  }

  if (archiveMatch) {
    return {
      text: archiveMatch,
      lang,
      matchType: "archive",
      knowledgeScore: knowledge?.score ?? 0,
    };
  }

  if (knowledge) {
    return {
      text:
        lang === "en" && knowledge.entry.responseEn
          ? knowledge.entry.responseEn
          : knowledge.entry.responseSo,
      lang,
      matchType: "knowledge",
      knowledgeScore: knowledge.score,
    };
  }

  if (isRealQuestion(trimmed)) {
    return {
      text: lang === "so" ? CLARIFY_RESPONSE_SO : CLARIFY_RESPONSE_EN,
      lang,
      matchType: "clarify",
      knowledgeScore: 0,
    };
  }

  return {
    text: getGreetingResponse(lang),
    lang,
    matchType: "greeting",
    knowledgeScore: 0,
  };
}

export function getHeritageResponseMeta(query: string): HeritageResponseMeta {
  const trimmed = query.trim();
  const lang = detectLanguage(trimmed);
  return buildHeritageResponse(trimmed, lang);
}

export function getHeritageResponse(query: string): string {
  return getHeritageResponseMeta(query).text;
}

export const SUGGESTED_PROMPTS = [
  "Ii sheeg Araweelo",
  "Waa maxay Laas Geel?",
  "Sharax gabayga Soomaalida",
  "Hal maahmaah ii sheeg",
  "Dhaqanka arooska Soomaalida",
] as const;

export const SYSTEM_PROMPT = `Waxaad tahay HiddoAI — kaaliye dhaqameed oo aqoon u leh dhaxalka Soomaalida.

Tilmaamaha muhiimka ah:
- Haddii isticmaaluhu KALIYA salaamo (hi, hey, salaam, iska warran) → ku jawaab si CAADI ah oo GAABAN: "So dhawoow! Maxaa ku qabta?" — HA BILAABIN liis mawduucyo dheer
- Haddii isticmaaluhu su'aal TOOS ah weydiiyo → si toos ah ugu jawaab, FAAH-FAAHISAN, oo SAX ah
- HAD iyo JEER ku jawaab AF-SOOMAALIGA haddii isticmaaluhu Soomaali ku qoro
- Haddii isticmaaluhu Ingiriis ku qoro, ku jawaab Ingiriis
- Ha been abuurin xaqiiqooyin — haddii aadan hubin, si daacad ah u sheeg
- Ha ku darin liisaska mawduucyada haddii su'aaltu tahay mid gaar ah
- Ku hadal si dabiici ah sida qof dhaqan yaqaan ah, ma aha sida robot`;
