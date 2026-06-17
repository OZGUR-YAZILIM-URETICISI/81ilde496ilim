var ILLER = [
  {
    id: 1, ad: "Adana", plaka: "01", bolge: "Akdeniz",
    nufus: "2.265.022", yuzolcum: "14.030 km²", slogan: "Güneyin incisi",
    bilgiler: [
      "Türkiye'nin 4. büyük şehridir.",
      "Seyhan ve Ceyhan nehirleri şehirden geçer.",
      "Adana kebabı dünya genelinde ünlüdür.",
      "Taş Köprü, Roma döneminden kalma tarihi bir köprüdür.",
      "Portakal ve narenciye üretiminde Türkiye'nin önde gelen şehridir.",
      "Adana Demirspor ve Adanaspor köklü futbol kulüplerine ev sahipliği yapar.",
      "Karataş ilçesi Akdeniz'in en güzel plajlarından birine sahiptir.",
      "Çukurova Üniversitesi bölgenin en büyük üniversitesidir."
    ],
    ilceler: ["Seyhan","Çukurova","Yüreğir","Sarıçam","Ceyhan","Kozan","İmamoğlu","Karataş","Pozantı","Aladağ","Feke","Karaisalı","Saimbeyli","Tufanbeyli","Yumurtalık"]
  },
  {
    id: 2, ad: "Adıyaman", plaka: "02", bolge: "Güneydoğu Anadolu",
    nufus: "636.401", yuzolcum: "7.614 km²", slogan: "Nemrut'un kenti",
    bilgiler: [
      "Nemrut Dağı UNESCO Dünya Mirası Listesi'ndedir.",
      "Dağın zirvesindeki dev kral heykelleri antik dönemden kalmadır.",
      "Atatürk Barajı ile Fırat Nehri üzerinde büyük bir baraj gölüne sahiptir.",
      "Kahta ilçesi Nemrut turizmi için ana üs noktasıdır.",
      "Diyarbakır'dan gelen kültürel etkiler mutfağını şekillendirmiştir.",
      "Besni ilçesi bağcılık ve üzümüyle ünlüdür."
    ],
    ilceler: ["Merkez","Besni","Gölbaşı","Kahta","Sincik","Tut","Çelikhan","Gerger","Samsat"]
  },
  {
    id: 3, ad: "Afyonkarahisar", plaka: "03", bolge: "Ege",
    nufus: "752.191", yuzolcum: "14.230 km²", slogan: "Kaymak ve şarabın kenti",
    bilgiler: [
      "Türkiye'nin termal turizm merkezi olarak öne çıkar.",
      "Sandıklı ve Gazlıgöl kaplıcaları Türkiye'nin en iyileri arasındadır.",
      "Afyon sucuğu ve pastırması coğrafi işaretli ürünlerdir.",
      "Kaymak tatlıları ve lokumu dünyaca bilinir.",
      "Kurtuluş Savaşı'nın kritik Büyük Taarruz muharebelerine sahne olmuştur.",
      "Marmara mermer ocakları Türkiye mermer üretiminin büyük bölümünü karşılar.",
      "Afyonkarahisar Kalesi şehir üzerinde yüksek bir kayalıkta yer alır."
    ],
    ilceler: ["Merkez","Bolvadin","Çay","Dinar","Emirdağ","Sandıklı","Sultandağı","Sincanlı","Başmakçı","Bayat","Evciler","Hocalar","İhsaniye","İscehisar","Kızılören","Şuhut"]
  },
  {
    id: 4, ad: "Ağrı", plaka: "04", bolge: "Doğu Anadolu",
    nufus: "538.148", yuzolcum: "11.376 km²", slogan: "Ağrı Dağı'nın gölgesinde",
    bilgiler: [
      "Türkiye'nin en yüksek dağı Ağrı Dağı (5.137 m) burada yer alır.",
      "Nuh'un Gemisi efsanesiyle Ağrı Dağı dünya mitolojisinde önemli bir yere sahiptir.",
      "İran ve Ermenistan sınırına yakınlığıyla stratejik konumdadır.",
      "Doğubayazıt ilçesindeki İshak Paşa Sarayı UNESCO adayı tarihi yapılardandır.",
      "Hayvancılık ilin temel geçim kaynağıdır.",
      "Çıldır Gölü ile kış turizminde önemli bir destinasyondur."
    ],
    ilceler: ["Merkez","Doğubayazıt","Eleşkirt","Hamur","Patnos","Taşlıçay","Tutak","Diyadin","Tendürek"]
  },
  {
    id: 5, ad: "Amasya", plaka: "05", bolge: "Karadeniz",
    nufus: "332.930", yuzolcum: "5.702 km²", slogan: "Prensler şehri",
    bilgiler: [
      "Osmanlı şehzadelerinin sancağa çıktığı tarihi şehirdir.",
      "Yeşilırmak kıyısına kurulu şehirde Pontus krallığından kalma kaya mezarları vardır.",
      "Amasya elması coğrafi işaretli ürünler arasındadır.",
      "Sabuncuoğlu Şerefeddin, ilk illüstrasyonlu tıp kitabını burada yazmıştır.",
      "Osmanlı mimarisi örnekleri olan tarihi ahşap evleriyle ünlüdür.",
      "Hazeranlar Konağı şehrin en güzel tarihi yapılarındandır."
    ],
    ilceler: ["Merkez","Göynücek","Gümüşhacıköy","Hamamözü","Merzifon","Suluova","Taşova"]
  },
  {
    id: 6, ad: "Ankara", plaka: "06", bolge: "İç Anadolu",
    nufus: "5.803.482", yuzolcum: "25.706 km²", slogan: "Türkiye'nin kalbi",
    bilgiler: [
      "Türkiye Cumhuriyeti'nin başkentidir.",
      "Türkiye'nin ikinci en kalabalık şehridir.",
      "Anıtkabir, Mustafa Kemal Atatürk'ün türbesidir ve her yıl milyonlarca kişi ziyaret eder.",
      "Ankara kedisi dünyaca ünlü tüylü bir kedi ırkıdır.",
      "Angora keçisinden elde edilen tiftik (mohair) dünya çapında değer görür.",
      "ODTÜ, Hacettepe, Ankara ve Bilkent gibi köklü üniversitelere ev sahipliği yapar.",
      "Kızılay meydanı şehrin kalbi ve ticaret merkezidir.",
      "Gordion Müzesi Frig medeniyetine ait eserleri barındırır."
    ],
    ilceler: ["Çankaya","Keçiören","Mamak","Yenimahalle","Altındağ","Etimesgut","Sincan","Pursaklar","Akyurt","Ayaş","Bala","Beypazarı","Çamlıdere","Çubuk","Elmadağ","Evren","Gölbaşı","Güdül","Haymana","Kahramankazan","Kalecik","Kızılcahamam","Nallıhan","Polatlı","Şereflikoçhisar"]
  },
  {
    id: 7, ad: "Antalya", plaka: "07", bolge: "Akdeniz",
    nufus: "2.688.004", yuzolcum: "20.591 km²", slogan: "Türkiye'nin turizm başkenti",
    bilgiler: [
      "Türkiye'nin en çok turist çeken şehridir, yılda 15 milyondan fazla ziyaretçi ağırlar.",
      "Kaleiçi tarihi yarımadası Romalılar döneminden kalma surlarıyla çevrilidir.",
      "Dünyaca ünlü Konyaaltı ve Lara plajları şehir içindedir.",
      "Perge, Aspendos ve Side antik kentleri şehir sınırları içindedir.",
      "Dünyannın en yoğun kullanılan turizm koridoru 'Türkiye Rivierası' burada yer alır.",
      "Aspendos Antik Tiyatrosu hâlâ opera ve bale gösterileri için kullanılır.",
      "Antalya Müzesi Türkiye'nin en zengin arkeoloji müzelerinden biridir.",
      "Toros dağlarından inen Düden Şelalesi şehir içinde denize dökülür."
    ],
    ilceler: ["Muratpaşa","Kepez","Konyaaltı","Döşemealtı","Aksu","Akseki","Alanya","Demre","Elmalı","Finike","Gazipaşa","Gündoğmuş","İbradı","Kaş","Kemer","Korkuteli","Kumluca","Manavgat","Serik"]
  },
  {
    id: 8, ad: "Artvin", plaka: "08", bolge: "Karadeniz",
    nufus: "169.587", yuzolcum: "7.367 km²", slogan: "Doğanın sanatı",
    bilgiler: [
      "Kaçkar Dağları ve derin vadileriyle eşsiz doğal güzelliklere sahiptir.",
      "Batum'a yakınlığıyla Gürcistan sınırındadır.",
      "Borçka Karagöl yüksek rakımlı orman gölüyle ünlüdür.",
      "Fırtına Vadisi yürüyüş ve kano tutkunlarının gözdesidir.",
      "Artvin Kafkasör Kültür Sanat ve Turizm Festivali her yıl düzenlenir.",
      "Çayın çok kaliteli yetiştiği Doğu Karadeniz'in iklimine sahiptir."
    ],
    ilceler: ["Merkez","Ardanuç","Arhavi","Borçka","Hopa","Murgul","Şavşat","Yusufeli"]
  },
  {
    id: 9, ad: "Aydın", plaka: "09", bolge: "Ege",
    nufus: "1.148.241", yuzolcum: "8.007 km²", slogan: "İncir ve zeytinin şehri",
    bilgiler: [
      "Türkiye'nin en fazla incir ihraç eden ilidir.",
      "Efes Antik Kenti ve Meryem Ana Evi önemli turizm destinasyonlarıdır.",
      "Didim (Didyma) antik tapınağı Apollon'a adanmıştır.",
      "Büyük Menderes Havzası'nın bereketli topraklarına sahiptir.",
      "Kuşadası, Ege'nin popüler yat limanlarından biridir.",
      "Ortaklar zeytinyağı üretiminde Türkiye'nin önde gelen ilçelerindendir.",
      "Tralleis Antik Kenti bugünkü Aydın şehrinin yanındaydı."
    ],
    ilceler: ["Efeler","Nazilli","Söke","Kuşadası","Didim","İncirliova","Köşk","Bozdoğan","Buharkent","Çine","Germencik","Karacasu","Karpuzlu","Koçarlı","Sultanhisar","Yenipazar"]
  },
  {
    id: 10, ad: "Balıkesir", plaka: "10", bolge: "Marmara",
    nufus: "1.265.700", yuzolcum: "14.292 km²", slogan: "Zeytinin başkenti",
    bilgiler: [
      "Türkiye'nin en büyük zeytin üretim havzalarından birindedir.",
      "Ayvalık zeytinyağısı ve salamura zeytini dünyaca ünlüdür.",
      "Erdek ve Gönen termal turizmde önemli merkezlerdir.",
      "Edremit Körfezi'nde Türkiye'nin en güzel plajlarından bazıları bulunur.",
      "Kaz Dağları (İda Dağı) mitolojide Paris'in elmasını verdiği yerdir.",
      "Gönen kaplıcaları Türkiye'nin en gözde termal tesisleri arasındadır.",
      "Bozcaada ve Marmara adalarına komşudur."
    ],
    ilceler: ["Altıeylül","Karesi","Bandırma","Bigadiç","Burhaniye","Dursunbey","Edremit","Erdek","Gömeç","Gönen","Havran","İvrindi","Kepsut","Manyas","Marmara","Savaştepe","Sındırgı","Susurluk","Ayvalık"]
  },
  {
    id: 11, ad: "Bilecik", plaka: "11", bolge: "Marmara",
    nufus: "224.595", yuzolcum: "4.307 km²", slogan: "Osmanlı'nın beşiği",
    bilgiler: [
      "Osmanlı İmparatorluğu'nun kuruluş yeri olan Söğüt ilçesi buradadır.",
      "Osman Gazi ve Orhan Gazi türbeleri Söğüt ve Bursa'dadır.",
      "Mermercilikte Türkiye'nin önde gelen illerinden biridir.",
      "Bozüyük ilçesi sanayisiyle öne çıkar.",
      "Sakarya Nehri ili boydan boya geçer."
    ],
    ilceler: ["Merkez","Bozüyük","Gölpazarı","İnhisar","Osmaneli","Pazaryeri","Söğüt","Yenipazar"]
  },
  {
    id: 12, ad: "Bingöl", plaka: "12", bolge: "Doğu Anadolu",
    nufus: "280.814", yuzolcum: "8.002 km²", slogan: "Bin göl",
    bilgiler: [
      "Adını bölgedeki çok sayıda göl ve bataklıktan almaktadır.",
      "Hayvancılık ilin ekonomisinin temelini oluşturur.",
      "Genç Çayı ve Peri Suyu önemli su kaynaklarıdır.",
      "Yüksek yaylalar kültürü yaşayan bir ildir.",
      "Bingöl Üniversitesi şehrin akademik yaşamını canlandırmaktadır."
    ],
    ilceler: ["Merkez","Adaklı","Genç","Karlıova","Kiğı","Solhan","Yayladere","Yedisu"]
  },
  {
    id: 13, ad: "Bitlis", plaka: "13", bolge: "Doğu Anadolu",
    nufus: "341.397", yuzolcum: "6.707 km²", slogan: "Van Gölü'nün kapısı",
    bilgiler: [
      "Van Gölü kıyısındaki Tatvan ilçesi ilin önemli yerleşim merkezidir.",
      "Nemrut Kalderası, dünyada ender rastlanan bir volkanik göl içerir.",
      "Bitlis Kalesi Ortaçağ'dan kalma önemli bir mimari eserdir.",
      "Ahlat ilçesindeki Selçuklu mezar taşları UNESCO listesinde koruma altındadır.",
      "Muş ovasının güney kesimlerine hâkimiyet sağlar.",
      "Şerefhan, tarihi Kürt beyi ve tarihçisi bu şehirdendir."
    ],
    ilceler: ["Merkez","Adilcevaz","Ahlat","Güroymak","Hizan","Mutki","Tatvan"]
  },
  {
    id: 14, ad: "Bolu", plaka: "14", bolge: "Batı Karadeniz",
    nufus: "347.185", yuzolcum: "11.051 km²", slogan: "Aşçıların şehri",
    bilgiler: [
      "Türk mutfak kültürünün doğduğu yer olarak kabul edilir, Mengen ilçesi aşçılığıyla ünlüdür.",
      "Abant Gölü ve çevresi doğa turizmi için en önemli destinasyonlardandır.",
      "Yedigöller Milli Parkı yedi küçük gölüyle büyüleyici bir doğa harikasıdır.",
      "Kartalkaya kayak merkezi İstanbul ve Ankara'ya yakınlığıyla popülerdir.",
      "Göynük ilçesi tarihi Osmanlı evleriyle ünlüdür.",
      "Mudurnu, Türkiye'nin 'Sakin Şehir' (Cittaslow) listesindedir."
    ],
    ilceler: ["Merkez","Gerede","Göynük","Kıbrıscık","Mengen","Mudurnu","Seben","Dörtdivan","Yeniçağa"]
  },
  {
    id: 15, ad: "Burdur", plaka: "15", bolge: "Akdeniz",
    nufus: "277.476", yuzolcum: "7.175 km²", slogan: "Gölün kenti",
    bilgiler: [
      "Burdur Gölü Türkiye'nin tuzlu gölleri arasındadır ve flamingo popülasyonuyla ünlüdür.",
      "Sagalassos antik kenti Türkiye'nin en iyi korunmuş antik kentlerinden biridir.",
      "Salda Gölü 'Türkiye'nin Maldivleri' olarak tanınır.",
      "Gülkurusu rengiyle ünlü gül bahçeleri ildedir.",
      "Isparta'ya yakınlığıyla gül yağı üretim bölgesinin içindedir."
    ],
    ilceler: ["Merkez","Ağlasun","Altınyayla","Bucak","Çavdır","Çeltikçi","Gölhisar","Karamanlı","Kemer","Tefenni","Yeşilova"]
  },
  {
    id: 16, ad: "Bursa", plaka: "16", bolge: "Marmara",
    nufus: "3.194.720", yuzolcum: "11.043 km²", slogan: "Osmanlı'nın ilk başkenti",
    bilgiler: [
      "Osmanlı İmparatorluğu'nun ilk iki başkentinden biridir.",
      "Uludağ Türkiye'nin en popüler kayak ve dağ turizm merkezidir.",
      "Bursa kebabı (İskender kebabı) dünya mutfaklarında tanınan bir lezzettir.",
      "İpek böceği ve dokuma geleneğiyle ipekçiliğin merkezidir.",
      "Kaplıca kültürü ve termal turizmde öncü şehirlerden biridir.",
      "Orhan Gazi Camii ve Ulu Cami Osmanlı mimarisinin ilk örneklerindendir.",
      "Türkiye'nin ilk elektrikli tramvayı Bursa'da açıldı.",
      "Çelik otomotiv sanayi ve tekstil ülkenin önemli üretim merkezlerinden biridir."
    ],
    ilceler: ["Osmangazi","Nilüfer","Yıldırım","Büyükorhan","Gemlik","Gürsu","Harmancık","İnegöl","İznik","Karacabey","Keles","Kestel","Mudanya","Mustafakemalpaşa","Orhaneli","Orhangazi","Yenişehir"]
  },
  {
    id: 17, ad: "Çanakkale", plaka: "17", bolge: "Marmara",
    nufus: "568.388", yuzolcum: "9.887 km²", slogan: "Destanların şehri",
    bilgiler: [
      "Çanakkale Savaşları (1915) dünya tarihinin dönüm noktalarından birini oluşturur.",
      "Gelibolu Yarımadası anıtlar ve Anzak mezarlıklarıyla her yıl ziyaret edilir.",
      "Truva Antik Kenti (Troya) UNESCO Dünya Mirası'ndadır.",
      "Çanakkale Boğazı (Dardaneller) Karadeniz ile Ege'yi birleştirir.",
      "Gökçeada ve Bozcaada Ege'nin en büyük adalarıdır.",
      "Savaşta Mustafa Kemal'in kahramanlığıyla kuruluş mitosu şekillenen yerdir.",
      "Ezine peyniri coğrafi işaretli bir ürün olarak dünyaca ünlüdür."
    ],
    ilceler: ["Merkez","Ayvacık","Bayramiç","Biga","Bozcaada","Çan","Eceabat","Ezine","Gelibolu","Gökçeada","Lapseki","Yenice"]
  },
  {
    id: 18, ad: "Çankırı", plaka: "18", bolge: "İç Anadolu",
    nufus: "196.515", yuzolcum: "7.388 km²", slogan: "Tuzun şehri",
    bilgiler: [
      "Tuz mağarası ve tuz madenleriyle ünlüdür.",
      "Ilgaz Dağı Milli Parkı kayak ve doğa sporları için tercih edilir.",
      "Tarihte Galatya bölgesinin önemli merkezlerinden biriydi.",
      "Kızılırmak Nehri ilin doğusundan geçer.",
      "Çankırı Karatekin Üniversitesi'ne ev sahipliği yapar."
    ],
    ilceler: ["Merkez","Atkaracalar","Bayramören","Çerkeş","Eldivan","Ilgaz","Kızılırmak","Korgun","Kurşunlu","Orta","Şabanözü","Yapraklı"]
  },
  {
    id: 19, ad: "Çorum", plaka: "19", bolge: "Karadeniz",
    nufus: "526.143", yuzolcum: "12.820 km²", slogan: "Hititlerin başkenti",
    bilgiler: [
      "Hitit İmparatorluğu'nun başkenti Hattuşa (Boğazköy) buradadır.",
      "Hattuşa UNESCO Dünya Mirası Listesi'ndedir.",
      "Yazılıkaya Hitit kaya tapınağı olağanüstü kabartmalarıyla ünlüdür.",
      "Alacahöyük, Tunç Çağı'na ait kraliyet mezarlarıyla dikkat çeker.",
      "Çorum leblebi (nohut) ve Çorum simidi geleneksel lezzetlerdir.",
      "İskilip topu ve tahini yöresel ürünler arasındadır."
    ],
    ilceler: ["Merkez","Alaca","Bayat","Boğazkale","Dodurga","İskilip","Kargı","Laçin","Mecitözü","Oğuzlar","Ortaköy","Osmancık","Sungurlu","Uğurludağ"]
  },
  {
    id: 20, ad: "Denizli", plaka: "20", bolge: "Ege",
    nufus: "1.062.692", yuzolcum: "11.868 km²", slogan: "Horoz ve travertenler",
    bilgiler: [
      "Pamukkale travertenleri (beyaz kireç taşı terrası) UNESCO Dünya Mirası'ndadır.",
      "Hierapolis antik kenti Pamukkale üzerinde kurulmuştur.",
      "Tekstil ve havlu üretiminde Türkiye'nin lider şehirlerinden biridir.",
      "Denizli horozu ünlüdür ve ilin simgesi haline gelmiştir.",
      "Laodikeia antik kenti Yeni Ahit'teki yedi kiliseden biridir.",
      "Babadağ ilçesi yamaç paraşütçülüğünün dünya merkezlerinden biridir.",
      "Karahayıt kırmızı sulu kaplıcaları turistlerin ilgisini çeker."
    ],
    ilceler: ["Merkezefendi","Pamukkale","Acıpayam","Babadağ","Baklan","Bekilli","Beyağaç","Bozkurt","Buldan","Çal","Çameli","Çardak","Çivril","Güney","Honaz","Kale","Sarayköy","Serinhisar","Tavas"]
  },
  {
    id: 21, ad: "Diyarbakır", plaka: "21", bolge: "Güneydoğu Anadolu",
    nufus: "1.804.880", yuzolcum: "15.272 km²", slogan: "Kara surların şehri",
    bilgiler: [
      "Bazalt surları ve iç kale UNESCO Dünya Mirası'ndadır.",
      "Dicle Nehri şehrin hemen yanından geçer.",
      "Karpuzu dünyaca ünlüdür; özellikle Diyarbakır karpuzu coğrafi işaretlidir.",
      "Hevsel Bahçeleri Dicle kıyısında binlerce yıllık tarım geleneğini sürdürür.",
      "Ermeni ve Süryani kiliseleri tarihi mirasın parçasıdır.",
      "Çermik ve Çüngüş kaplıcaları termal turizme katkı sağlar.",
      "Güneydoğu Anadolu'nun kültür ve ticaret merkezidir."
    ],
    ilceler: ["Bağlar","Kayapınar","Sur","Yenişehir","Bismil","Çermik","Çınar","Çüngüş","Dicle","Eğil","Ergani","Hani","Hazro","Kocaköy","Kulp","Lice","Silvan"]
  },
  {
    id: 22, ad: "Edirne", plaka: "22", bolge: "Marmara",
    nufus: "416.914", yuzolcum: "6.099 km²", slogan: "Osmanlı'nın kapısı",
    bilgiler: [
      "Osmanlı İmparatorluğu'nun ikinci başkentidir.",
      "Selimiye Camii Mimar Sinan'ın en büyük eseri olarak kabul edilir ve UNESCO listesindedir.",
      "Tarihi Kırkpınar Yağlı Güreş Turnuvası 650 yılı aşkın geçmişiyle dünyanın en eski spor organizasyonudur.",
      "Üç nehrin (Meriç, Tunca, Arda) kesiştiği noktada kurulmuştur.",
      "Yunanistan ve Bulgaristan'a sınırı olan tek Türk ilidir.",
      "Edirne ciğeri ve badem ezmesi yöresel lezzetlerdir.",
      "Eski Cami, Üç Şerefeli Cami Osmanlı erken dönem mimari şaheserleridir."
    ],
    ilceler: ["Merkez","Enez","Havsa","İpsala","Keşan","Lalapaşa","Meriç","Süloğlu","Uzunköprü"]
  },
  {
    id: 23, ad: "Elazığ", plaka: "23", bolge: "Doğu Anadolu",
    nufus: "592.708", yuzolcum: "9.153 km²", slogan: "Keban'ın şehri",
    bilgiler: [
      "Keban Barajı Türkiye'nin ilk büyük barajlarından biridir.",
      "Hazar Gölü yüksek rakımlı bir krater gölüdür.",
      "Elazığ üzümü ve bağcılığıyla ünlüdür.",
      "Harput tarihi kalesiyle önemli bir antik yerleşimdir.",
      "Fırat Üniversitesi bölgenin köklü eğitim kurumlarındandır.",
      "Elazığ demiri ve yöresel el sanatları üretimi önemlidir."
    ],
    ilceler: ["Merkez","Ağın","Alacakaya","Arıcak","Baskil","Karakoçan","Keban","Kovancılar","Maden","Palu","Sivrice"]
  },
  {
    id: 24, ad: "Erzincan", plaka: "24", bolge: "Doğu Anadolu",
    nufus: "239.335", yuzolcum: "11.903 km²", slogan: "Fırat'ın kaynağı",
    bilgiler: [
      "Fırat Nehri'nin kollarının birleştiği havzada yer alır.",
      "Tulum peyniri ve şelale balı yörenin coğrafi işaretli ürünleridir.",
      "Munzur Vadisi Milli Parkı eşsiz doğal güzelliklere sahiptir.",
      "Kemah Kalesi Fırat kenarında kayalık bir yapıdır.",
      "İliç altın madeni Türkiye'nin önemli maden kaynaklarından biridir.",
      "Yıldızeli termal kaplıcaları bölgede bilinir."
    ],
    ilceler: ["Merkez","Çayırlı","İliç","Kemah","Kemaliye","Otlukbeli","Refahiye","Tercan","Üzümlü"]
  },
  {
    id: 25, ad: "Erzurum", plaka: "25", bolge: "Doğu Anadolu",
    nufus: "763.848", yuzolcum: "25.066 km²", slogan: "Doğu'nun kalesi",
    bilgiler: [
      "Türkiye'nin en yüksek rakımlı büyük şehirlerinden biridir (yaklaşık 1.950 m).",
      "Palandöken kayak merkezi Türkiye'nin en iyi pistlerine sahiptir.",
      "Tescilli Çifte Minareli Medrese Anadolu Selçuklu mimarisinin zirvesidir.",
      "Erzurum Kongresi (1919) Türkiye Kurtuluş Savaşı'nın temel adımlarından biridir.",
      "Oltu taşı (jet) işlemeciliği ve amber bileklik sanatı ünlüdür.",
      "Erzurum cağ kebabı yöreye özgü bir lezzettir.",
      "Tortum Şelalesi ve gölü doğa turizmi açısından değerlidir."
    ],
    ilceler: ["Yakutiye","Palandöken","Aziziye","Oltu","Horasan","İspir","Narman","Olur","Pazaryolu","Şenkaya","Tekman","Tortum","Uzundere","Karaçoban","Karayazı","Köprüköy","Aşkale","Çat","Hınıs","Karayazı"]
  },
  {
    id: 26, ad: "Eskişehir", plaka: "26", bolge: "İç Anadolu",
    nufus: "906.611", yuzolcum: "13.925 km²", slogan: "Gençlerin şehri",
    bilgiler: [
      "Porsuk Çayı ve ahşap köprüleri şehrin simgesi haline gelmiştir.",
      "Türkiye'nin en yoğun üniversite nüfusuna sahip şehirlerinden biridir.",
      "Lületaşı (meerschaum) işlemeciliğinde Türkiye'nin tek merkezi Eskişehir'dir.",
      "Sazova Parkı ve Bilim, Sanat ve Kültür Parkı uluslararası standartlardadır.",
      "Odunpazarı tarihi kent dokusu UNESCO Geçici Listesi'ndedir.",
      "Türkiye'nin en kaliteli tramvay ağlarından birine sahiptir.",
      "Çini ve seramik üretiminde önemli bir merkezdir."
    ],
    ilceler: ["Odunpazarı","Tepebaşı","Alpu","Beylikova","Çifteler","Günyüzü","Han","İnönü","Mahmudiye","Mihalgazi","Mihallıçcık","Sarıcakaya","Seyitgazi","Sivrihisar"]
  },
  {
    id: 27, ad: "Gaziantep", plaka: "27", bolge: "Güneydoğu Anadolu",
    nufus: "2.154.051", yuzolcum: "7.642 km²", slogan: "Mutfağın başkenti",
    bilgiler: [
      "Gaziantep mutfağı UNESCO Yaratıcı Şehirler Ağı'nda Gastronomi alanında listelenmiştir.",
      "Fıstıklı baklava Gaziantep'in dünyaca ünlü simgesidir.",
      "Zeugma Mozaik Müzesi dünyanın en büyük mozaik müzelerinden biridir.",
      "Kuzey Suriye sınırına yakın stratejik konumu vardır.",
      "Türkiye'nin en hızlı büyüyen sanayi şehirlerinden biridir.",
      "Antep fıstığı dünya fıstık pazarında söz sahibidir.",
      "Yüzlerce çeşit tatlı tarifi ile Türk tatlı kültürünün merkezidir.",
      "Gaziantep Kalesi şehrin silüetine hâkimdir."
    ],
    ilceler: ["Şahinbey","Şehitkamil","Araban","İslahiye","Karkamış","Nurdağı","Oğuzeli","Nizip","Yavuzeli"]
  },
  {
    id: 28, ad: "Giresun", plaka: "28", bolge: "Karadeniz",
    nufus: "432.253", yuzolcum: "6.934 km²", slogan: "Fındığın anavatanı",
    bilgiler: [
      "Kirazın anavatanı olduğuna inanılır; adı Latince 'Cerasus'tan gelir.",
      "Giresun Adası Karadeniz'in tek adası ve Amazonlar efsanesiyle ilişkilendirilir.",
      "Türkiye'nin fındık üretiminde lider illeri arasındadır.",
      "Bulancak ve Tirebolu balıkçılıkla geçimini sağlayan ilçelerdir.",
      "Giresun Üniversitesi şehrin gelişimine katkı sağlamaktadır.",
      "Kümbet yaylası kültürü bölgede canlı biçimde yaşatılmaktadır."
    ],
    ilceler: ["Merkez","Alucra","Bulancak","Çamoluk","Çanakçı","Dereli","Doğankent","Espiye","Eynesil","Görele","Güce","Keşap","Piraziz","Şebinkarahisar","Tirebolu","Yağlıdere"]
  },
  {
    id: 29, ad: "Gümüşhane", plaka: "29", bolge: "Karadeniz",
    nufus: "135.981", yuzolcum: "6.575 km²", slogan: "Gümüşün şehri",
    bilgiler: [
      "Adını gümüş madenciliğinden alır; tarihte önemli bir gümüş merkezi olmuştur.",
      "Karanlık Dere Kanyonu doğa meraklılarının ilgisini çeker.",
      "Zigana geçidi tarihte İpek Yolu'nun önemli bir noktasıydı.",
      "Torul ilçesindeki baraj gölü ekoturizm için değerlidir.",
      "Trabzon'un komşusu olarak Karadeniz iklimine sahiptir."
    ],
    ilceler: ["Merkez","Kelkit","Köse","Kürtün","Şiran","Torul"]
  },
  {
    id: 30, ad: "Hakkari", plaka: "30", bolge: "Doğu Anadolu",
    nufus: "279.353", yuzolcum: "7.729 km²", slogan: "Dağların zirvesi",
    bilgiler: [
      "Türkiye'nin en engebeli coğrafyasına sahip ilidir.",
      "Cilo ve Sat dağları yüksek dağcılık için ideal bölgelerdir.",
      "İran ve Irak sınırlarına komşudur.",
      "Yüksekova ovası hayvancılıkla geçimini sağlar.",
      "Şemdinli ilçesi dağ doğası ve manzarasıyla turistlerin dikkatini çeker."
    ],
    ilceler: ["Merkez","Çukurca","Şemdinli","Yüksekova"]
  },
  {
    id: 31, ad: "Hatay", plaka: "31", bolge: "Akdeniz",
    nufus: "1.685.988", yuzolcum: "5.403 km²", slogan: "Medeniyetlerin beşiği",
    bilgiler: [
      "Antakya (Antioch) İlk Hristiyanların ilk örgütlendiği şehirdir.",
      "St. Pierre Kilisesi dünyanın bilinen ilk Hristiyan kilisesidir.",
      "Hatay mutfağı Türkiye'nin en zengin ve çeşitli mutfaklarından biridir.",
      "Samandağ sahilleri ve Asi Nehri ekoturizm için idealdir.",
      "Hatay, Suriye sınırında kültürel köprü görevi görür.",
      "İskenderun körfezi önemli bir deniz ticareti merkezi olmuştur.",
      "Mozaik Müzesi Zeugma ile birlikte Türkiye'nin en büyük mozaik koleksiyonlarına sahiptir.",
      "Harbiye şelaleleri ve defne ormanları eşsiz doğa güzelliklerindendir."
    ],
    ilceler: ["Antakya","İskenderun","Defne","Dörtyol","Erzin","Hassa","Kırıkhan","Kumlu","Payas","Reyhanlı","Samandağ","Yayladağı","Altınözü","Belen"]
  },
  {
    id: 32, ad: "Isparta", plaka: "32", bolge: "Akdeniz",
    nufus: "443.593", yuzolcum: "8.933 km²", slogan: "Gül bahçeleri",
    bilgiler: [
      "Türkiye ve dünyanın en büyük gül yağı üreticisi olarak Isparta öne çıkar.",
      "Her yıl Gül Festivali düzenlenir.",
      "Eğirdir Gölü Türkiye'nin en büyük tatlı su göllerinden biridir.",
      "Süleyman Demirel Üniversitesi şehrin akademik yaşamının merkezidir.",
      "Kovada Gölü Milli Parkı ve Yazılı Kanyon doğal güzelliklerdir.",
      "Davraz Dağı kayak merkezi kış turizminde önemlidir."
    ],
    ilceler: ["Merkez","Aksu","Atabey","Eğirdir","Gelendost","Gönen","Keçiborlu","Senirkent","Sütçüler","Şarkikaraağaç","Uluborlu","Yalvaç","Yenişarbademli"]
  },
  {
    id: 33, ad: "İçel (Mersin)", plaka: "33", bolge: "Akdeniz",
    nufus: "1.971.387", yuzolcum: "15.853 km²", slogan: "Limonun şehri",
    bilgiler: [
      "Türkiye'nin en büyük limanlarından Mersin Limanı buradadır.",
      "Tarsus, Aziz Pavlus'un doğum yeridir ve tarihi Cleopatra Kapısı orada yer alır.",
      "Silifke ve Anamur antik kalıntıları ile ünlüdür.",
      "Kızkalesi deniz içindeki kalesiyle peri masalı manzarası sunar.",
      "Cennet ve Cehennem obruğu jeolojik açıdan benzersiz doğa harikasıdır.",
      "Narenciye üretiminde Türkiye'nin önde gelen illeri arasındadır.",
      "Kapadokya'nın güneye açılan kapısı konumundadır."
    ],
    ilceler: ["Akdeniz","Mezitli","Toroslar","Yenişehir","Anamur","Aydıncık","Bozyazı","Çamlıyayla","Erdemli","Gülnar","Mut","Silifke","Tarsus"]
  },
  {
    id: 34, ad: "İstanbul", plaka: "34", bolge: "Marmara",
    nufus: "15.907.951", yuzolcum: "5.343 km²", slogan: "Dünyanın merkezi",
    bilgiler: [
      "İki kıtayı (Avrupa ve Asya) birleştiren tek büyük şehirdir.",
      "Türkiye'nin en kalabalık şehri ve ekonomik başkentidir.",
      "Ayasofya hem kilise hem cami hem müze olarak kullanılmış eşsiz bir yapıdır.",
      "Topkapı Sarayı yaklaşık 400 yıl Osmanlı padişahlarına ev sahipliği yaptı.",
      "Boğaz Köprüleri (FSM ve Boğaziçi) dünyaca ünlü mühendislik şaheserleridir.",
      "Kapalıçarşı dünyanın en büyük kapalı pazarlarından biridir.",
      "İstanbul Film Festivali, Bienal ve Caz Festivali gibi uluslararası kültürel etkinliklere ev sahipliği yapar.",
      "1453'te Fatih Sultan Mehmet tarafından fethedilmesi tarihin seyrini değiştirdi."
    ],
    ilceler: ["Adalar","Arnavutköy","Ataşehir","Avcılar","Bağcılar","Bahçelievler","Bakırköy","Başakşehir","Bayrampaşa","Beşiktaş","Beykoz","Beylikdüzü","Beyoğlu","Büyükçekmece","Çatalca","Çekmeköy","Esenler","Esenyurt","Eyüpsultan","Fatih","Gaziosmanpaşa","Güngören","Kadıköy","Kağıthane","Kartal","Küçükçekmece","Maltepe","Pendik","Sancaktepe","Sarıyer","Silivri","Sultanbeyli","Sultangazi","Şile","Şişli","Tuzla","Ümraniye","Üsküdar","Zeytinburnu"]
  },
  {
    id: 35, ad: "İzmir", plaka: "35", bolge: "Ege",
    nufus: "4.394.694", yuzolcum: "11.891 km²", slogan: "Ege'nin incisi",
    bilgiler: [
      "Türkiye'nin üçüncü büyük şehri ve Ege'nin en önemli limanıdır.",
      "Efes Antik Kenti Türkiye'nin en ziyaret edilen arkeoloji alanlarından biridir.",
      "İzmir Uluslararası Fuarı 1923'ten bu yana düzenlenmektedir.",
      "Bergama (Pergamon) antik kenti ve kütüphanesi UNESCO listesindedir.",
      "Alsancak ve Kordon sahili şehrin sosyal hayatının merkezidir.",
      "Türkiye'nin en fazla çay içen şehri olduğu söylenir.",
      "İzmir boyozuyla başlayan kahvaltı kültürü ünlüdür.",
      "Ege mutfağı zeytinyağlı yemekleriyle sağlıklı beslenmenin sembolüdür."
    ],
    ilceler: ["Konak","Bornova","Karşıyaka","Buca","Çiğli","Gaziemir","Balçova","Narlıdere","Güzelbahçe","Aliağa","Bayındır","Bayraklı","Bergama","Beydağ","Çeşme","Dikili","Foça","Karaburun","Kemalpaşa","Kınık","Kiraz","Menderes","Menemen","Ödemiş","Selçuk","Seferihisar","Tire","Torbalı","Urla"]
  },
  {
    id: 36, ad: "Kars", plaka: "36", bolge: "Doğu Anadolu",
    nufus: "286.580", yuzolcum: "9.587 km²", slogan: "Kars'ın karları",
    bilgiler: [
      "Orhan Pamuk'un 'Kar' romanına konu olan şehirdir.",
      "Ani harabeleri, Ermeni döneminden kalma büyük bir antik kenttir ve UNESCO listesindedir.",
      "Kars gravyeri peyniri Avrupa'dan ilham alınarak üretilen ve coğrafi işaretli bir üründür.",
      "Akdoğan ve Kars köy balı Türkiye'nin en kaliteli balları arasındadır.",
      "Sarıkamış kayak merkezi doğal çam ormanlarındadır.",
      "Rusya ile uzun bir sınıra sahiptir."
    ],
    ilceler: ["Merkez","Akyaka","Arpaçay","Digor","Kağızman","Sarıkamış","Selim","Susuz"]
  },
  {
    id: 37, ad: "Kastamonu", plaka: "37", bolge: "Karadeniz",
    nufus: "371.907", yuzolcum: "13.108 km²", slogan: "Taşköprü'nün sarımsağı",
    bilgiler: [
      "Kastamonu sarımsağı ve pastırması coğrafi işaretli ürünlerdir.",
      "Ilgaz Dağı Milli Parkı yaban hayatıyla zengin bir ekosisteme sahiptir.",
      "Safranbolu'ya yakınlığıyla tarihi kentler bölgesinde yer alır.",
      "Pınarbaşı ve Küre ilçeleri ekoturizm potansiyeline sahiptir.",
      "Kastamonu Kalesi tarihi şehrin tepesinde yer almaktadır."
    ],
    ilceler: ["Merkez","Abana","Ağlı","Araç","Azdavay","Bozkurt","Çatalzeytin","Cide","Daday","Devrekani","Doğanyurt","Hanönü","İhsangazi","İnebolu","Küre","Pınarbaşı","Şenpazar","Taşköprü","Tosya"]
  },
  {
    id: 38, ad: "Kayseri", plaka: "38", bolge: "İç Anadolu",
    nufus: "1.441.523", yuzolcum: "16.917 km²", slogan: "Pastırmanın şehri",
    bilgiler: [
      "Pastırma ve sucuk Kayseri'nin dünyaca tanınan lezzetleridir.",
      "Erciyes Dağı (3.917 m) yanında kurulan kayak merkezi Türkiye'nin en büyüklerindendir.",
      "Kapadokya'nın kapısı konumundadır.",
      "Gevher Nesibe Tıp Tarihi Müzesi Selçuklu döneminden kalma bir şifahanededir.",
      "Kayseri mantısı yörenin vazgeçilmez lezzetidir.",
      "Himmet Dede Camii ve Hunat Hatun Külliyesi önemli tarihi yapılardır.",
      "Büyük bir mobilya ve tekstil sanayi merkezidir."
    ],
    ilceler: ["Kocasinan","Melikgazi","Talas","Akkışla","Bünyan","Develi","Felahiye","Hacılar","İncesu","Özvatan","Pınarbaşı","Sarıoğlan","Sarız","Tomarza","Yahyalı","Yeşilhisar"]
  },
  {
    id: 39, ad: "Kırklareli", plaka: "39", bolge: "Marmara",
    nufus: "367.568", yuzolcum: "6.550 km²", slogan: "Trakya'nın ormanı",
    bilgiler: [
      "Türkiye'nin en ormanlık illerinden biridir.",
      "Istranca Dağları (Yıldız Dağları) ilin büyük bölümünü kaplar.",
      "Bulgaristan ile sınır komşusudur.",
      "Pehlivanköy ve Babaeski kasabaları Trakya kültürünü yaşatır.",
      "Kıyıköy Karadeniz kıyısında küçük ama güzel bir balıkçı kasabasıdır.",
      "Şarap üretiminde Trakya'nın değerli illeri arasındadır."
    ],
    ilceler: ["Merkez","Babaeski","Demirköy","Kofçaz","Lüleburgaz","Pehlivanköy","Pınarhisar","Vize"]
  },
  {
    id: 40, ad: "Kırşehir", plaka: "40", bolge: "İç Anadolu",
    nufus: "241.062", yuzolcum: "6.570 km²", slogan: "Ahilerin şehri",
    bilgiler: [
      "Ahi Evran'ın türbesi burada bulunur; esnaf teşkilatı Ahilik'in merkezi sayılır.",
      "Kırşehir'in Hacıbektaş ilçesi Alevi-Bektaşi kültürünün merkezidir.",
      "Mucur üzüm bağlarıyla tanınır.",
      "Terme Çayı Kızılırmak Nehri'ne kavuşur.",
      "El sanatları ve kilim dokumacılığıyla öne çıkar."
    ],
    ilceler: ["Merkez","Akçakent","Akpınar","Boztepe","Çiçekdağı","Kaman","Mucur"]
  },
  {
    id: 41, ad: "Kocaeli", plaka: "41", bolge: "Marmara",
    nufus: "2.044.072", yuzolcum: "3.626 km²", slogan: "Sanayin kalbi",
    bilgiler: [
      "Türkiye'nin en büyük sanayi ve üretim merkezlerinden biridir.",
      "Gebze, Dilovası ve Körfez ilçeleri OSB'leriyle öne çıkar.",
      "İzmit Körfezi petrol rafinerisine ve büyük limanlara ev sahipliği yapar.",
      "İstanbul'a yakınlığıyla lojistik açıdan stratejik konumdadır.",
      "2001 Marmara Depremi sonrası yeniden yapılanan şehir altyapısıyla öne çıkar.",
      "Sapanca Gölü İstanbul ve çevre illerin içme suyu kaynağıdır."
    ],
    ilceler: ["İzmit","Gebze","Körfez","Dilovası","Gölcük","Kandıra","Karamürsel","Kartepe","Başiskele","Çayırova","Darıca","Derince"]
  },
  {
    id: 42, ad: "Konya", plaka: "42", bolge: "İç Anadolu",
    nufus: "2.320.624", yuzolcum: "38.257 km²", slogan: "Mevlana'nın şehri",
    bilgiler: [
      "Türkiye yüzölçümünce en büyük ilidir.",
      "Mevlana Celaleddin Rumi'nin makamı ve Sema töreninin anavatanıdır.",
      "Türkiye tahıl üretiminde birinci sıradadır.",
      "Çatalhöyük, dünyanın en eski Neolitik yerleşim merkezlerinden biridir ve UNESCO listesindedir.",
      "Konya'nın etli ekmeği ve fırın kebabı ünlüdür.",
      "Karapınar, Ereğli ve Beyşehir ilçeleri tarım ve hayvancılıkla öne çıkar.",
      "Mevlana Müzesi yılda 3 milyondan fazla ziyaretçi çeker."
    ],
    ilceler: ["Selçuklu","Karatay","Meram","Akşehir","Beyşehir","Bozkır","Cihanbeyli","Çumra","Derbent","Derebucak","Doğanhisar","Emirgazi","Ereğli","Güneysınır","Hadim","Halkapınar","Hüyük","Ilgın","Kadınhanı","Karapınar","Kulu","Sarayönü","Seydişehir","Taşkent","Tuzlukçu","Yalıhüyük","Yunak"]
  },
  {
    id: 43, ad: "Kütahya", plaka: "43", bolge: "Ege",
    nufus: "571.765", yuzolcum: "11.875 km²", slogan: "Çininin başkenti",
    bilgiler: [
      "Türk çini sanatının merkezi olarak dünyaca tanınır.",
      "Kütahya çinisi ve seramiği Osmanlı döneminden bu yana üretilmektedir.",
      "Simav kaplıcaları bölgede termal turizmin gözdesindedir.",
      "Atatürk Evleri Kütahya'yı kültürel turizm haritasına almaktadır.",
      "Germiyanoğulları Beyliği bu topraklarda hüküm sürmüştür.",
      "Dumlupınar, Kurtuluş Savaşı'nın final meydan muharebesi burada gerçekleşti."
    ],
    ilceler: ["Merkez","Altıntaş","Aslanapa","Çavdarhisar","Domaniç","Dumlupınar","Emet","Gediz","Hisarcık","Pazarlar","Simav","Şaphane","Tavşanlı"]
  },
  {
    id: 44, ad: "Malatya", plaka: "44", bolge: "Doğu Anadolu",
    nufus: "831.756", yuzolcum: "12.313 km²", slogan: "Kayısının başkenti",
    bilgiler: [
      "Türkiye kayısı üretiminin yüzde 60'ını karşılar; dünya ihracatında lider.",
      "Aslan Dede kayısısı dünyada tek şehrin adıyla anılan meyvelerdendir.",
      "Arslantepe höyüğü yakın dönemde UNESCO Dünya Mirası'na girmiştir.",
      "Eski Malatya'da Battalgazi Külliyesi Selçuklu eserleri barındırır.",
      "Tohma Kanyonu doğa sporları için tercih edilir.",
      "Malatya halısı ve el sanatları yörenin önemli kültürel ürünleridir."
    ],
    ilceler: ["Battalgazi","Yeşilyurt","Akçadağ","Arapgir","Arguvan","Darende","Doğanyol","Doğanşehir","Hekimhan","Kale","Kuluncak","Pütürge","Yazıhan"]
  },
  {
    id: 45, ad: "Manisa", plaka: "45", bolge: "Ege",
    nufus: "1.480.569", yuzolcum: "13.810 km²", slogan: "Üzümün başkenti",
    bilgiler: [
      "Türkiye'nin en büyük üzüm üretim merkezlerinden biridir.",
      "Sardes antik kenti Lidya Krallığı'nın başkentiydi.",
      "Lydialıların parayı icat ettiğine inanılır.",
      "Mesir macunu festivaline ev sahipliği yapar; macun halka dağıtılır.",
      "Spil Dağı Milli Parkı eşsiz manzarası ve flora çeşitliliğiyle öne çıkar.",
      "Ege sanayisinin önemli illerinden biridir.",
      "Turgutlu ve Salihli bölge sanayisine katkı sağlar."
    ],
    ilceler: ["Yunusemre","Şehzadeler","Ahmetli","Akhisar","Alaşehir","Demirci","Gölmarmara","Gördes","Kırkağaç","Köprübaşı","Kula","Sarıgöl","Saruhanlı","Selendi","Soma","Turgutlu","Salihli"]
  },
  {
    id: 46, ad: "Kahramanmaraş", plaka: "46", bolge: "Akdeniz",
    nufus: "1.177.436", yuzolcum: "14.327 km²", slogan: "Dondurmalar ve biberler",
    bilgiler: [
      "Maraş dondurması uzayan ve esneyebilen dokusuyla dünyaca ünlüdür.",
      "Maraş biberi (kırmızı pul biber) Türk mutfağının vazgeçilmezleri arasındadır.",
      "Maraş tahin helvası ve pastırması coğrafi işaretli ürünlerdir.",
      "Türkoğlu ilçesi Türkiye tekstil sektörünün önemli merkezlerinden biridir.",
      "Kahramanmaraş Kalesi şehir tarihinin simgesidir.",
      "Atatürk Barajı Göl'ü şehrin güneyinde yer alır."
    ],
    ilceler: ["Dulkadiroğlu","Onikişubat","Afşin","Andırın","Çağlayancerit","Ekinözü","Elbistan","Göksun","Nurhak","Pazarcık","Türkoğlu"]
  },
  {
    id: 47, ad: "Mardin", plaka: "47", bolge: "Güneydoğu Anadolu",
    nufus: "865.508", yuzolcum: "8.891 km²", slogan: "Taş evlerin şehri",
    bilgiler: [
      "Mardin tarihi kent dokusu UNESCO Geçici Listesi'ndedir.",
      "Mezopotamya ovasına bakan kayalık yamaçta kurulu eşsiz bir tarihi şehirdir.",
      "Farklı din ve kültürlerin bir arada yaşadığı çokkültürlü bir şehirdir.",
      "Deyrul Zafaran Manastırı aktif Süryani Hristiyan cemaatine ev sahipliği yapar.",
      "Mardin beyaz taşı mimari sanatının başlıca hammaddesidir.",
      "Midyat ilçesi Süryani altın ve gümüş işçiliğiyle ünlüdür.",
      "Hasankeyf'te Türkiye'nin en eski sürekli yerleşim izleri bulunmuştur."
    ],
    ilceler: ["Artuklu","Kızıltepe","Dargeçit","Derik","Mazıdağı","Midyat","Nusaybin","Ömerli","Savur","Yeşilli"]
  },
  {
    id: 48, ad: "Muğla", plaka: "48", bolge: "Ege",
    nufus: "1.054.904", yuzolcum: "13.338 km²", slogan: "Mavi yolculuğun merkezi",
    bilgiler: [
      "Türk Rivierası'nın kalbi olarak Bodrum, Marmaris ve Fethiye gibi dünyaca ünlü tatil beldelerini barındırır.",
      "Mavi Yolculuk (mavi tur) Türkiye'de Muğla kıyılarında doğan bir kavramdır.",
      "Ölüdeniz Mavi Lagün dünyanın en güzel sahilleri listelerine girer.",
      "Bodrum Kalesi Rodos Şövalyeleri döneminden kalma önemli bir yapıdır.",
      "Türkiye bal üretiminde Muğla'nın kekik balı dünya ödülü almıştır.",
      "Datça yarımadası, Knidos antik kenti ve tertemiz koyları ile öne çıkar.",
      "Göcek koyları lüks yatçılık için dünyanın sayılı noktaları arasındadır."
    ],
    ilceler: ["Menteşe","Bodrum","Dalaman","Datça","Fethiye","Kavaklıdere","Köyceğiz","Marmaris","Milas","Ortaca","Seydikemer","Ula","Yatağan"]
  },
  {
    id: 49, ad: "Muş", plaka: "49", bolge: "Doğu Anadolu",
    nufus: "404.309", yuzolcum: "8.022 km²", slogan: "Muş ovasının bereketi",
    bilgiler: [
      "Geniş Muş ovası tarım ve hayvancılığın merkezidir.",
      "Malazgirt Meydan Muharebesi (1071) bu bölgede yaşandı.",
      "Muş sarımsağı coğrafi işaretli bir üründür.",
      "Muradiye Camii Osmanlı erken dönem mimarisinin nadide örneklerindendir.",
      "Bingöl sınırındaki Çelikli Dağları dağcılar için ilgi çekicidir."
    ],
    ilceler: ["Merkez","Bulanık","Hasköy","Korkut","Malazgirt","Varto"]
  },
  {
    id: 50, ad: "Nevşehir", plaka: "50", bolge: "İç Anadolu",
    nufus: "307.243", yuzolcum: "5.467 km²", slogan: "Kapadokya'nın kalbi",
    bilgiler: [
      "Kapadokya peri bacaları, yeraltı şehirleri ve kaya kiliseleriyle UNESCO listesindedir.",
      "Sıcak hava balonu turlarıyla dünyada en ünlü destinasyonlardan biridir.",
      "Derinkuyu ve Kaymaklı yeraltı şehirleri binlerce kişiyi barındıracak büyüklüktedir.",
      "Göreme Açık Hava Müzesi Bizans döneminden kalma kaya kiliselerini barındırır.",
      "Ürgüp ve Avanos kültür turizmi için popüler merkezlerdir.",
      "Avanos çömlekçiliği Kızılırmak kiline dayanan köklü bir gelenektir."
    ],
    ilceler: ["Merkez","Acıgöl","Avanos","Derinkuyu","Gülşehir","Hacıbektaş","Kozaklı","Ürgüp"]
  },
  {
    id: 51, ad: "Niğde", plaka: "51", bolge: "İç Anadolu",
    nufus: "389.424", yuzolcum: "7.312 km²", slogan: "Patatesin başkenti",
    bilgiler: [
      "Türkiye patates üretiminin lideri Niğde'dir.",
      "Aladağlar Milli Parkı dağcılık ve trekking için ideal bir ortam sunar.",
      "Kemerhisar ilçesinde Tyana antik kenti kalıntıları bulunmaktadır.",
      "Ömer Dülkadiroğlu Türbesinden başlayan tarihi miras zengindir.",
      "Çiftlik ilçesi meyve bahçeleriyle tanınır."
    ],
    ilceler: ["Merkez","Altunhisar","Bor","Çamardı","Çiftlik","Ulukışla"]
  },
  {
    id: 52, ad: "Ordu", plaka: "52", bolge: "Karadeniz",
    nufus: "771.614", yuzolcum: "6.001 km²", slogan: "Fındığın kalbi",
    bilgiler: [
      "Türkiye fındık üretiminde Giresun ile birlikte lider iller arasındadır.",
      "Boztepe tepesi şehre ve Karadeniz'e panoramik manzara sunar.",
      "Perşembe yaylası ve Çambaşı yaylası yaz turizmi için popülerdir.",
      "Gaga Gölü nadir doğal bir deniz gölüdür.",
      "Ulubey ilçesindeki Ulubey Kanyonu Türkiye'nin ikinci en büyük kanyonudur.",
      "Korgan bıçağı yöreye özgü bir el sanatıdır."
    ],
    ilceler: ["Altınordu","Akkuş","Aybastı","Çamaş","Çatalpınar","Çaybaşı","Fatsa","Gölköy","Gülyalı","Gürgentepe","İkizce","Kabadüz","Kabataş","Korgan","Kumru","Mesudiye","Perşembe","Ulubey","Ünye"]
  },
  {
    id: 53, ad: "Rize", plaka: "53", bolge: "Karadeniz",
    nufus: "352.072", yuzolcum: "3.920 km²", slogan: "Çayın anavatanı",
    bilgiler: [
      "Türk çayının üretim merkezi olan Rize, Türkiye'nin tek çay ili sayılır.",
      "Kaçkar Dağları Türkiye'nin en yüksek Pontus sıradağlarıdır.",
      "Sal Köprüler, yayla kültürü ve ahşap mimarisiyle ünlüdür.",
      "Ayder Yaylası kaplıcaları ve eşsiz doğasıyla popüler bir destinasyondur.",
      "Rize hançeri el sanatlarının geleneksel ürünüdür.",
      "Her evde çay bahçesi bulunan yeşillikler içindeki bir şehirdir."
    ],
    ilceler: ["Merkez","Ardeşen","Çamlıhemşin","Çayeli","Derepazarı","Fındıklı","Güneysu","Hemşin","İkizdere","İyidere","Kalkandere","Pazar"]
  },
  {
    id: 54, ad: "Sakarya", plaka: "54", bolge: "Marmara",
    nufus: "1.059.686", yuzolcum: "4.879 km²", slogan: "Adapazarı'nın şehri",
    bilgiler: [
      "Sakarya Muharebesi Kurtuluş Savaşı'nın önemli bir dönüm noktasıdır.",
      "Mekece ve civarı Avrupa'ya Doğu sebzeleri ihracatında kritik bir merkezdir.",
      "Sapanca Gölü'nün kıyısında konuşlanan şehir içme suyu açısından şanslıdır.",
      "Hendek sanayi bölgesi ilde otomotiv ve elektronik imalatının merkezidir.",
      "Karasu, Karadeniz'in güzel bir kıyı ilçesidir.",
      "Sakarya Nehri ilin doğu sınırından geçer."
    ],
    ilceler: ["Adapazarı","Akyazı","Arifiye","Erenler","Ferizli","Geyve","Hendek","Karapürçek","Karasu","Kaynarca","Kocaali","Pamukova","Sapanca","Serdivan","Söğütlü","Taraklı"]
  },
  {
    id: 55, ad: "Samsun", plaka: "55", bolge: "Karadeniz",
    nufus: "1.358.919", yuzolcum: "9.579 km²", slogan: "Karadeniz'in büyük şehri",
    bilgiler: [
      "Mustafa Kemal Atatürk, 19 Mayıs 1919'da Kurtuluş Savaşı'nı Samsun'dan başlattı.",
      "Karadeniz'in en büyük limanına ev sahipliği yapar.",
      "Türkiye tütün üretiminin tarihi merkezi olarak bilinir.",
      "Amisos Tepesi'ndeki höyük Samsun'un antik tarihini gözler önüne serer.",
      "Bafra ilçesi havyar kalitesiyle ünlüdür.",
      "Ladik Gölü ve çevresi doğa turizminin merkezidir."
    ],
    ilceler: ["Atakum","Canik","İlkadım","Tekkeköy","Alaçam","Asarcık","Ayvacık","Bafra","Çarşamba","Havza","Kavak","Ladik","Ondokuz Mayıs","Salıpazarı","Terme","Vezirköprü","Yakakent"]
  },
  {
    id: 56, ad: "Siirt", plaka: "56", bolge: "Güneydoğu Anadolu",
    nufus: "343.658", yuzolcum: "5.406 km²", slogan: "Büryanın şehri",
    bilgiler: [
      "Siirt büryan kebabı (kuyuda pişen kuzu) dünyaca ünlüdür.",
      "Siirt battaniyesi ve ipekli dokumalar geleneksel el sanatlarıdır.",
      "Billoris Şelalesi ilin doğal güzelliklerinden biridir.",
      "Veysel Karani Türbesi önemli bir ziyaret yeridir.",
      "Batman iline sınırı olan Botan Vadisi ekoturizm potansiyeline sahiptir."
    ],
    ilceler: ["Merkez","Baykan","Eruh","Kurtalan","Pervari","Şirvan","Tillo"]
  },
  {
    id: 57, ad: "Sinop", plaka: "57", bolge: "Karadeniz",
    nufus: "201.901", yuzolcum: "5.862 km²", slogan: "Kuzey'in ucu",
    bilgiler: [
      "Türkiye'nin Karadeniz'e en kuzey noktasıdır.",
      "Diyojen (Diogenes) burada doğmuştur.",
      "Sinop Kalesi ve tarihi cezaevi önemli kültürel mekânlardır.",
      "Türkiye'nin el değmemiş en güzel koylarına sahiptir.",
      "Boyabat ve Gerze balıkçılık ve tarımla geçimini sürdüren ilçelerdir.",
      "Sinop, Türkiye'nin 'Kuzey Burnu' olarak anılır."
    ],
    ilceler: ["Merkez","Ayancık","Boyabat","Dikmen","Durağan","Erfelek","Gerze","Saraydüzü","Türkeli"]
  },
  {
    id: 58, ad: "Sivas", plaka: "58", bolge: "İç Anadolu",
    nufus: "627.727", yuzolcum: "28.488 km²", slogan: "Kongrenin şehri",
    bilgiler: [
      "Sivas Kongresi (1919) Kurtuluş Savaşı'nın yönünü belirledi.",
      "Divriği Ulu Camii ve Darüşşifası UNESCO Dünya Mirası'ndadır.",
      "Kangal balıklı kaplıcaları dünyaca ünlüdür; doktor balıklar cilt hastalığı tedavisinde kullanılır.",
      "Kangal köpeği Türkiye'nin sembolik çoban ırkıdır.",
      "Gürlevik Şelalesi ve Kızılırmak vadisi doğa turizminin parçasıdır.",
      "Zara ve Şarkışla ilçeleri halk müziğiyle öne çıkar."
    ],
    ilceler: ["Merkez","Akıncılar","Altınyayla","Divriği","Doğanşar","Gemerek","Gölova","Gürun","Hafik","İmranlı","Kangal","Koyulhisar","Suşehri","Şarkışla","Ulaş","Yıldızeli","Zara"]
  },
  {
    id: 59, ad: "Tekirdağ", plaka: "59", bolge: "Marmara",
    nufus: "1.112.419", yuzolcum: "6.313 km²", slogan: "Trakya'nın şarabı",
    bilgiler: [
      "Türkiye şarap üretiminin merkezi olan Trakya'nın öncü ilidir.",
      "Tekirdağ köftesi coğrafi işaretli bir lezzettir.",
      "Marmara kıyısı boyunca uzanan tarihî şehir sahili caziptir.",
      "Rakı üretiminde Türkiye'nin tarihsel merkezlerinden biridir.",
      "Namık Kemal'in doğduğu şehirdir.",
      "Marmara Ereğlisi tarihî Perinthos antik kentidir."
    ],
    ilceler: ["Süleymanpaşa","Çerkezköy","Çorlu","Ergene","Hayrabolu","Kapaklı","Malkara","Marmara Ereğlisi","Muratlı","Saray","Şarköy","Marmaraereğlisi"]
  },
  {
    id: 60, ad: "Tokat", plaka: "60", bolge: "Karadeniz",
    nufus: "595.044", yuzolcum: "9.958 km²", slogan: "Bezin şehri",
    bilgiler: [
      "Türk el dokumacılığı ve Tokat bezi tarihte dünyaca meşhurdu.",
      "Ballıca Mağarası Türkiye'nin uzunluğuyla öne çıkan sarkıt-dikit mağaralarındandır.",
      "Sebasteia (Sivas) kadar köklü bir tarihe sahiptir.",
      "Komana Pontica antik kenti'nde arkeolojik kazılar sürmektedir.",
      "Niksar ilçesi tarihi zenginlikleriyle turistlerin ilgisini çeker.",
      "Erbaa ve Turhal şeker fabrikasıyla şeker pancarı üretim merkezidir."
    ],
    ilceler: ["Merkez","Almus","Artova","Başçiftlik","Erbaa","Niksar","Pazar","Reşadiye","Sulusaray","Turhal","Yeşilyurt","Zile"]
  },
  {
    id: 61, ad: "Trabzon", plaka: "61", bolge: "Karadeniz",
    nufus: "812.099", yuzolcum: "4.685 km²", slogan: "Sümela'nın şehri",
    bilgiler: [
      "Sümela Manastırı dik kayalıklara oyulmuş olağanüstü Bizans yapısıdır.",
      "Trabzonspor Türkiye'nin en güçlü futbol kulüplerinden biridir.",
      "Atatürk Köşkü şehre hâkim güzel bir tarihi yapıdır.",
      "Maçka, Rize ve çevresinin hamsi balığı kültürüne ortak olan şehirdir.",
      "Trabzon tereyağı ve kaymağı dünyaca ünlüdür.",
      "Uzungöl yüksek dağlarda konumlanan ünlü bir yayla gölüdür.",
      "Ortahisar Kalesi tarihi yarımadanın kalbindedir."
    ],
    ilceler: ["Ortahisar","Akçaabat","Araklı","Arsin","Beşikdüzü","Çarşıbaşı","Çaykara","Dernekpazarı","Düzköy","Hayrat","Köprübaşı","Maçka","Of","Sürmene","Şalpazarı","Tonya","Vakfıkebir","Yomra"]
  },
  {
    id: 62, ad: "Tunceli", plaka: "62", bolge: "Doğu Anadolu",
    nufus: "82.498", yuzolcum: "7.774 km²", slogan: "Munzur'un doğası",
    bilgiler: [
      "Türkiye'nin en seyrek nüfuslu ilidir.",
      "Munzur Vadisi Milli Parkı eşsiz biyolojik çeşitliliğiyle korunmaktadır.",
      "Pülümür ve Munzur ırmakları rafting için idealdir.",
      "Alevi kültürünün güçlü biçimde yaşatıldığı bir ildir.",
      "Mercan Dağları bölgenin yüksek zirvelerini oluşturur.",
      "Şehrin eski adı Dersim'dir."
    ],
    ilceler: ["Merkez","Çemişgezek","Hozat","Mazgirt","Nazımiye","Ovacık","Pertek","Pülümür"]
  },
  {
    id: 63, ad: "Şanlıurfa", plaka: "63", bolge: "Güneydoğu Anadolu",
    nufus: "2.178.761", yuzolcum: "18.584 km²", slogan: "Peygamberlerin şehri",
    bilgiler: [
      "Göbekli Tepe, insanlığın bilinen en eski tapınak kompleksidir ve dünyanın sekizinci harikası olarak anılır.",
      "Hz. İbrahim'in doğup ateşe atıldığı efsanesiyle 'Halilürrahman Gölü' kutsal sayılır.",
      "Harran ovası, tarih öncesi çağlardan beri tarımın yapıldığı en eski yerleşim yerlerinden biridir.",
      "Göbekli Tepe MÖ 10.000 öncesine tarihlenen tapınak taşlarıyla büyük önem taşır.",
      "Şanlıurfa mutfağı içli köfte, çiğ köfte ve kebap çeşitleriyle zengindir.",
      "GAP Projesi kapsamında sulama altyapısı büyük ölçüde geliştirilmiştir.",
      "Balıklı Göl ve Rızvaniye Camii şehrin simgesidir."
    ],
    ilceler: ["Karaköprü","Eyyübiye","Haliliye","Akçakale","Birecik","Bozova","Ceylanpınar","Halfeti","Harran","Hilvan","Siverek","Suruç","Viranşehir"]
  },
  {
    id: 64, ad: "Uşak", plaka: "64", bolge: "Ege",
    nufus: "371.897", yuzolcum: "5.341 km²", slogan: "Halıcılığın kenti",
    bilgiler: [
      "Uşak halısı yüzyıllardır dünyaya ihraç edilen önemli bir el sanatıdır.",
      "Uşak Müzesi'nde sergilenen Karun Hazinesi efsanevi zenginliktedir.",
      "Tekstil ve deri sektöründe Türkiye'nin önemli üretim merkezlerinden biridir.",
      "Banaz Çayı ve çevresi doğal peyzaj güzellikleriyle bilinir.",
      "Atatürk Komuta Dairesi ziyarete açık tarihi mekânlar arasındadır."
    ],
    ilceler: ["Merkez","Banaz","Eşme","Karahallı","Sivaslı","Ulubey"]
  },
  {
    id: 65, ad: "Van", plaka: "65", bolge: "Doğu Anadolu",
    nufus: "1.133.392", yuzolcum: "19.069 km²", slogan: "Van Gölü'nün incisi",
    bilgiler: [
      "Van Gölü Türkiye'nin en büyük ve dünyanın en büyük soda göllerinden biridir.",
      "Akdamar Kilisesi Ortaçağ'dan kalma Ermeni yapısı olup ada üzerinde yer alır.",
      "Van kedisi ve Van balığı (inci kefali) dünyaca ünlüdür.",
      "Van kahvaltısı Türk mutfağının en zengin kahvaltı sofralarından biridir.",
      "Urartu uygarlığının başkenti Tuşpa bugünkü Van şehrinin yanındaydı.",
      "Çarpanak ve Adır adaları Van Gölü'nde yer alır.",
      "Van Kalesi ve Urartu kazı alanları turistlerin ilgisini çeker."
    ],
    ilceler: ["İpekyolu","Tuşba","Edremit","Erciş","Başkale","Çaldıran","Çatak","Gevaş","Gürpınar","Muradiye","Özalp","Saray","Bahçesaray"]
  },
  {
    id: 66, ad: "Yozgat", plaka: "66", bolge: "İç Anadolu",
    nufus: "399.167", yuzolcum: "14.123 km²", slogan: "Çapanoğullarının şehri",
    bilgiler: [
      "Çapanoğulları Hanedanı'nın merkezi olmuştur.",
      "Boğazköy'e komşu olduğundan Hitit tarihi mirası bölgede hissedilir.",
      "Yozgat Bozok Üniversitesi şehrin eğitim merkezi konumundadır.",
      "Alacahöyük Yozgat sınırı içindeki önemli arkeoloji alanlarındandır.",
      "El dokuması halı ve kilim sanatçıları için üretim merkezidir."
    ],
    ilceler: ["Merkez","Akdağmadeni","Aydıncık","Boğazlıyan","Çandır","Çayıralan","Çekerek","Kadışehri","Saraykent","Sarıkaya","Sorgun","Şefaatli","Yenifakılı","Yerköy"]
  },
  {
    id: 67, ad: "Zonguldak", plaka: "67", bolge: "Karadeniz",
    nufus: "594.476", yuzolcum: "3.338 km²", slogan: "Kömürün şehri",
    bilgiler: [
      "Türkiye'nin taşkömürü rezervlerinin büyük bölümünü barındırır.",
      "Türkiye Taşkömürü Kurumu merkezini Zonguldak'ta konuşlandırmıştır.",
      "Karadeniz kıyısına sarp kayalıklar ve temiz su koyları serper.",
      "Bartın ve Kastamonu komşuluğuyla ormanlık bir coğrafyaya sahiptir.",
      "Amasra ilçesi tarihi surları ve şahinlere ev sahipliğiyle ünlüdür.",
      "Maden işçisi kültürü ve grevlerin tarihi şehrin sosyal dokusunu biçimlendirmiştir."
    ],
    ilceler: ["Merkez","Alaplı","Çaycuma","Devrek","Ereğli","Gökçebey","Kilimli","Kozlu"]
  },
  {
    id: 68, ad: "Aksaray", plaka: "68", bolge: "İç Anadolu",
    nufus: "433.952", yuzolcum: "7.626 km²", slogan: "İpek Yolu'nun kavşağı",
    bilgiler: [
      "İpek Yolu üzerinde tarihi bir konak noktasıydı.",
      "Ihlara Vadisi kayalara oyulmuş kiliseleri ve derin kanyonuyla UNESCO adayıdır.",
      "Tuz Gölü'ne kıyısı olan illerden biridir.",
      "Hasandağ volkanik zirve, Kapadokya'nın simgelerinden biridir.",
      "Ağzıkara Han ve Sultanhanı tarihi kervansarayları ilçe sınırları içindedir.",
      "Güzelyurt ilçesi Rum-Türk kültür mirasını barındırır."
    ],
    ilceler: ["Merkez","Ağaçören","Eskil","Gülağaç","Güzelyurt","Ortaköy","Sarıyahşi"]
  },
  {
    id: 69, ad: "Bayburt", plaka: "69", bolge: "Karadeniz",
    nufus: "83.193", yuzolcum: "3.652 km²", slogan: "Çoruh'un şehri",
    bilgiler: [
      "Türkiye'nin en küçük yüzölçümlü ikinci ilidir.",
      "Çoruh Nehri vadisi adrenalin sporları için tercih edilir.",
      "Bayburt Kalesi Anadolu'nun en büyük kalelerinden biridir.",
      "Hayvancılık temel geçim kaynağıdır.",
      "Uzun kış mevsimiyle bilinir ve yüksek rakımı vardır."
    ],
    ilceler: ["Merkez","Aydıntepe","Demirözü"]
  },
  {
    id: 70, ad: "Karaman", plaka: "70", bolge: "İç Anadolu",
    nufus: "255.731", yuzolcum: "9.163 km²", slogan: "Türkçenin ilk şehri",
    bilgiler: [
      "Türkçenin ilk resmi dil olarak ilan edildiği Karamanoğlu Mehmet Bey'in fermanı 1277'de burada çıkarıldı.",
      "Karamanoğulları Beyliği Anadolu Selçuklu sonrası önemli bir Türk devletiydi.",
      "Binbirkilise (Karadağ) bölgesinde erken Hristiyan kaya kiliseleri vardır.",
      "Mut ilçesi narenciye üretimiyle Anadolu'nun güneyinin bereketli bahçesidir.",
      "Kozağaç (Kazımkarabekir) ilçesindeki tarihi kalıntılar ilgi çekicidir."
    ],
    ilceler: ["Merkez","Ayrancı","Başyayla","Ermenek","Kazımkarabekir","Mut","Sarıveliler"]
  },
  {
    id: 71, ad: "Kırıkkale", plaka: "71", bolge: "İç Anadolu",
    nufus: "286.381", yuzolcum: "4.365 km²", slogan: "Savunma sanayii merkezi",
    bilgiler: [
      "Türkiye Makina ve Kimya Endüstrisi Kurumu (MKEK) merkezleri burada yer alır.",
      "Savunma sanayii ve silah imalatında Türkiye'nin en önemli üretim merkezidir.",
      "Kızılırmak Nehri ilden geçer.",
      "Ankara'ya yakınlığıyla sanayi bölgesi olarak gelişmiştir.",
      "Keskin ilçesi köy peyniri ve yöresel lezzetleriyle bilinir."
    ],
    ilceler: ["Merkez","Bahşili","Balışeyh","Çelebi","Delice","Karakeçili","Keskin","Sulakyurt","Yahşihan"]
  },
  {
    id: 72, ad: "Batman", plaka: "72", bolge: "Güneydoğu Anadolu",
    nufus: "630.832", yuzolcum: "4.694 km²", slogan: "Petrolün kenti",
    bilgiler: [
      "Türkiye'nin ilk petrol üretim merkezi Batman'dır.",
      "Türkiye Petrolleri (TPAO) operasyonları buradan yönetilir.",
      "Hasankeyf, Türkiye'nin en köklü yerleşimlerinden biri olarak tarihi öneme sahiptir.",
      "Ilısu Barajı inşası sırasında Hasankeyf'in bir bölümü sular altında kaldı.",
      "Dicle Nehri ilin güneyinden akar.",
      "Mor Gabriel Manastırı Süryani Ortodoks kilisesine bağlı kadim bir yapıdır."
    ],
    ilceler: ["Merkez","Beşiri","Gercüş","Hasankeyf","Kozluk","Sason"]
  },
  {
    id: 73, ad: "Şırnak", plaka: "73", bolge: "Güneydoğu Anadolu",
    nufus: "527.085", yuzolcum: "7.172 km²", slogan: "Cudi'nin gölgesinde",
    bilgiler: [
      "Cudi Dağı Hz. Nuh'un Gemisi efsanesiyle bağdaştırılan dağdır.",
      "Irak ve Suriye sınırlarına komşu stratejik bir ildir.",
      "Uludere ilçesi dağlık yapısıyla sınır ticaretinin merkezindedir.",
      "İdil ilçesinde Süryani tarihi miras ve manastırlar bulunur.",
      "Dicle Nehri'nin kolları ilde önemli su kaynakları oluşturur."
    ],
    ilceler: ["Merkez","Beytüşşebap","Cizre","Güçlükonak","İdil","Silopi","Uludere"]
  },
  {
    id: 74, ad: "Bartın", plaka: "74", bolge: "Karadeniz",
    nufus: "197.592", yuzolcum: "2.143 km²", slogan: "Amasra'nın incisi",
    bilgiler: [
      "Amasra ilçesi antik Amaseia kalıntıları ve deniz manzarasıyla ünlüdür.",
      "Bartın Nehri üzerinde tarihi taş köprüler yer almaktadır.",
      "Türkiye'nin en küçük yüzölçümlü illeri arasındadır.",
      "Küre Dağları Milli Parkı doğa turizminin yükselen destinasyonudur.",
      "Orman ürünleri ve balıkçılık ekonominin önemli parçalarıdır."
    ],
    ilceler: ["Merkez","Amasra","Kurucaşile","Ulus"]
  },
  {
    id: 75, ad: "Ardahan", plaka: "75", bolge: "Doğu Anadolu",
    nufus: "101.690", yuzolcum: "5.583 km²", slogan: "Çıldır'ın kenti",
    bilgiler: [
      "Çıldır Gölü kışın donan ve at kızakları için kullanılan büyüleyici bir göldür.",
      "Türkiye'nin en soğuk illerinden biridir.",
      "Göle ilçesi koyunu ve Göle peyniriyle tanınır.",
      "Gürcistan sınırına komşudur.",
      "Posof ilçesinde Osmanlı-Rus savaşlarından kalma tarihi kalıntılar vardır."
    ],
    ilceler: ["Merkez","Çıldır","Damal","Göle","Hanak","Posof"]
  },
  {
    id: 76, ad: "Iğdır", plaka: "76", bolge: "Doğu Anadolu",
    nufus: "196.463", yuzolcum: "3.539 km²", slogan: "Ağrı'nın eteğinde",
    bilgiler: [
      "Ağrı Dağı'nın dibinde konuşlanan bu il Ermenistan, İran ve Nahçıvan'a sınır komşusudur.",
      "Ağrı Dağı zirvesi açık havalarda şehrin hemen her noktasından görülebilir.",
      "Iğdır ovası meyvecilik (özellikle kayısı) ve tarım için elverişlidir.",
      "Azerbaycan-Nahçıvan koridoruna açılan kapı konumundadır.",
      "Tuzluca ilçesi tarihsel tuz madenleriyle bilinir."
    ],
    ilceler: ["Merkez","Aralık","Karakoyunlu","Tuzluca"]
  },
  {
    id: 77, ad: "Yalova", plaka: "77", bolge: "Marmara",
    nufus: "280.255", yuzolcum: "854 km²", slogan: "Çiçeklerin şehri",
    bilgiler: [
      "Türkiye'nin en küçük yüzölçümlü illerinden biridir.",
      "Termal kaplıcaları İstanbul'a olan yakınlığıyla popülerdir.",
      "Atatürk, şehirde yaşamını sürdürmüştür; Atatürk Köşkü ziyarete açıktır.",
      "Çiçek ve fidan üretiminde Türkiye'nin en önemli merkezlerinden biridir.",
      "İstanbul ve Bursa'ya hızlı feribot bağlantısı vardır."
    ],
    ilceler: ["Merkez","Altınova","Armutlu","Çınarcık","Çiftlikköy","Termal"]
  },
  {
    id: 78, ad: "Karabük", plaka: "78", bolge: "Karadeniz",
    nufus: "241.724", yuzolcum: "2.956 km²", slogan: "Demir çeliğin şehri",
    bilgiler: [
      "Türkiye'nin ilk modern entegre demir-çelik tesisi (Karabük Demir Çelik) 1937'de kuruldu.",
      "Safranbolu UNESCO Dünya Mirası'ndaki Osmanlı şehir dokusuyla ünlüdür.",
      "Safranbolu'nun Osmanlı konakları ve çarşısı tarihi kimliğini korumaktadır.",
      "Safranbolu lokumu ülkede tanınan bir lezzettir.",
      "Yenice ilçesindeki ormanlar Türkiye'nin el değmemiş alanları arasındadır."
    ],
    ilceler: ["Merkez","Eflani","Eskipazar","Ovacık","Safranbolu","Yenice"]
  },
  {
    id: 79, ad: "Kilis", plaka: "79", bolge: "Güneydoğu Anadolu",
    nufus: "145.001", yuzolcum: "1.428 km²", slogan: "Zeytinin kenti",
    bilgiler: [
      "Türkiye'nin en küçük yüzölçümlü ilidir.",
      "Suriye sınırındaki stratejik konumuyla öne çıkar.",
      "Zeytinyağı ve sabun üretiminde bölgesel öneme sahiptir.",
      "Kilis'in soğanı ve mercimeği yöresel ürünler arasındadır.",
      "Ravanda Kalesi tarihi surlarıyla dikkat çeker."
    ],
    ilceler: ["Merkez","Elbeyli","Musabeyli","Polateli"]
  },
  {
    id: 80, ad: "Osmaniye", plaka: "80", bolge: "Akdeniz",
    nufus: "548.108", yuzolcum: "3.274 km²", slogan: "Nur Dağlarının şehri",
    bilgiler: [
      "Karatepe-Aslantaş Açık Hava Müzesi Geç Hitit dönemine ait kabartmalarla tarihi bir mekândır.",
      "Toprakkale tarihi kalesi şehrin simgesidir.",
      "Nur Dağları (Amanos Dağları) zengin biyolojik çeşitliliğiyle öne çıkar.",
      "Ceyhan Nehri ilden geçer ve sulama alanında büyük katkı sağlar.",
      "Düziçi ilçesi pamuk üretimiyle ünlüdür."
    ],
    ilceler: ["Merkez","Bahçe","Düziçi","Hasanbeyli","Kadirli","Sumbas","Toprakkale"]
  },
  {
    id: 81, ad: "Düzce", plaka: "81", bolge: "Batı Karadeniz",
    nufus: "410.679", yuzolcum: "2.492 km²", slogan: "Doğanın kenti",
    bilgiler: [
      "1999 Düzce Depremi büyük yıkıma yol açmış, şehir yeniden inşa edilmiştir.",
      "Melen Çayı İstanbul'un içme suyuna katkı sağlar.",
      "Akçakoca deniz kıyısı Karadeniz'de tercih edilen bir yaz destinasyonudur.",
      "Düzce Üniversitesi şehrin genç ve dinamik yapısına katkıda bulunur.",
      "Fındık ve mısır tarımı ilin ekonomisinin belkemiğidir.",
      "Ormanlık arazileri ve yaylalarıyla eko-turizm potansiyeline sahiptir."
    ],
    ilceler: ["Merkez","Akçakoca","Cumayeri","Çilimli","Gölyaka","Gümüşova","Kaynaşlı","Yığılca"]
  }
];
