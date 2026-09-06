/**
 * Türkiye Futbol Ligleri (Trendyol 1. Lig, Nesine 2. Lig, Nesine 3. Lig)
 * Doğrulanmış Kulüp IDleri ve Mackolik CDN Logo Veritabanı
 * CDN: https://file.mackolikfeeds.com/teams/${id}?w=s
 */

export interface TeamLogoEntry {
  id: number;
  name: string;
  shortName?: string;
  logo: string;
}

const mackolikLogo = (id: number) => `https://file.mackolikfeeds.com/teams/${id}?w=s`;

export const TURKISH_TEAMS_DATABASE: Record<string, TeamLogoEntry> = {
  // === Nesine 2. Lig - Beyaz Grup ===
  "68 aksaray bld": { id: 11998, name: "68 Aksaray Bld", logo: mackolikLogo(11998) },
  "68 aksaray beledi̇yespor": { id: 11998, name: "68 Aksaray Bld", logo: mackolikLogo(11998) },
  "ali̇ağa fk": { id: 39461, name: "Aliağa FK", logo: mackolikLogo(39461) },
  "ali̇ağa futbol a.ş.": { id: 39461, name: "Aliağa FK", logo: mackolikLogo(39461) },
  "ali̇ağa": { id: 39461, name: "Aliağa FK", logo: mackolikLogo(39461) },
  "ankaraspor": { id: 2232, name: "Ankaraspor", logo: mackolikLogo(2232) },
  "arnavutköy bld": { id: 41558, name: "Arnavutköy Bld", logo: mackolikLogo(41558) },
  "arnavutköy beledi̇yespor": { id: 41558, name: "Arnavutköy Bld", logo: mackolikLogo(41558) },
  "çorluspor 1947": { id: 39511, name: "Çorluspor 1947", logo: mackolikLogo(39511) },
  "çorlu spor 1947": { id: 39511, name: "Çorluspor 1947", logo: mackolikLogo(39511) },
  "erbaaspor": { id: 36654, name: "Erbaaspor", logo: mackolikLogo(36654) },
  "erbaa spor": { id: 36654, name: "Erbaaspor", logo: mackolikLogo(36654) },
  "kastamonuspor": { id: 12009, name: "Kastamonuspor", logo: mackolikLogo(12009) },
  "gmg kastamonuspor": { id: 12009, name: "Kastamonuspor", logo: mackolikLogo(12009) },
  "gebzespor": { id: 40074, name: "Gebzespor", logo: mackolikLogo(40074) },
  "isparta 32 spor": { id: 39439, name: "Isparta 32 Spor", logo: mackolikLogo(39439) },
  "i̇negöl kafkasspor": { id: 53200, name: "İnegöl Kafkasspor", logo: mackolikLogo(53200) },
  "i̇negöl kafkas sk": { id: 53200, name: "İnegöl Kafkasspor", logo: mackolikLogo(53200) },
  "i̇negöl kafkas": { id: 53200, name: "İnegöl Kafkasspor", logo: mackolikLogo(53200) },
  "şanliurfaspor": { id: 9166, name: "Şanlıurfaspor", logo: mackolikLogo(9166) },
  "kizilkaya tarim şanliurfaspor": { id: 9166, name: "Şanlıurfaspor", logo: mackolikLogo(9166) },
  "menemen fk": { id: 11992, name: "Menemen FK", logo: mackolikLogo(11992) },
  "muşspor": { id: 44752, name: "Muşspor", logo: mackolikLogo(44752) },
  "muş spor": { id: 44752, name: "Muşspor", logo: mackolikLogo(44752) },
  "muş spor kulübü": { id: 44752, name: "Muşspor", logo: mackolikLogo(44752) },
  "sebatspor": { id: 54017, name: "Sebatspor", logo: mackolikLogo(54017) },
  "sebat": { id: 54017, name: "Sebatspor", logo: mackolikLogo(54017) },
  "sebat gençli̇kspor": { id: 54017, name: "Sebatspor", logo: mackolikLogo(54017) },
  "elaziğspor": { id: 2228, name: "Elazığspor", logo: mackolikLogo(2228) },
  "çi̇mentaş elaziğspor": { id: 2228, name: "Elazığspor", logo: mackolikLogo(2228) },
  "somaspor": { id: 39474, name: "Somaspor", logo: mackolikLogo(39474) },
  "hatayspor": { id: 2883, name: "Hatayspor", logo: mackolikLogo(2883) },
  "adana demi̇rspor": { id: 2348, name: "Adana Demirspor", logo: mackolikLogo(2348) },

  // === Nesine 2. Lig - Kırmızı Grup ===
  "12 bi̇ngölspor": { id: 31043, name: "12 Bingölspor", logo: mackolikLogo(31043) },
  "12 bi̇ngöl spor": { id: 31043, name: "12 Bingölspor", logo: mackolikLogo(31043) },
  "1461 trabzon fk": { id: 24813, name: "1461 Trabzon FK", logo: mackolikLogo(24813) },
  "1461 trabzon": { id: 24813, name: "1461 Trabzon FK", logo: mackolikLogo(24813) },
  "52 orduspor fk": { id: 39791, name: "52 Orduspor FK", logo: mackolikLogo(39791) },
  "52 orduspor": { id: 39791, name: "52 Orduspor FK", logo: mackolikLogo(39791) },
  "adana 01 fk": { id: 56993, name: "Adana 01 FK", logo: mackolikLogo(56993) },
  "adana 01 fk sk": { id: 56993, name: "Adana 01 FK", logo: mackolikLogo(56993) },
  "erzi̇ncanspor": { id: 9160, name: "Erzincanspor", logo: mackolikLogo(9160) },
  "24 erzi̇ncanspor": { id: 9160, name: "Erzincanspor", logo: mackolikLogo(9160) },
  "ankara demi̇rspor": { id: 2245, name: "Ankara Demirspor", logo: mackolikLogo(2245) },
  "ankara demi̇r": { id: 2245, name: "Ankara Demirspor", logo: mackolikLogo(2245) },
  "beyoğlu yeni̇ çarşi": { id: 29063, name: "Beyoğlu Yeni Çarşı", logo: mackolikLogo(29063) },
  "beyoğlu y.çarşi": { id: 29063, name: "Beyoğlu Yeni Çarşı", logo: mackolikLogo(29063) },
  "fethi̇yespor": { id: 9146, name: "Fethiyespor", logo: mackolikLogo(9146) },
  "i̇skenderunspor": { id: 29069, name: "İskenderunspor", logo: mackolikLogo(29069) },
  "i̇skenderunspor a.ş.": { id: 29069, name: "İskenderunspor", logo: mackolikLogo(29069) },
  "kahramanmaraş i̇sti̇klalspor": { id: 60677, name: "Kahramanmaraş İstiklalspor", logo: mackolikLogo(60677) },
  "kahramanmaraş i̇sti̇klal": { id: 60677, name: "Kahramanmaraş İstiklalspor", logo: mackolikLogo(60677) },
  "karacabey beledi̇yespor": { id: 11994, name: "Karacabey Belediyespor", logo: mackolikLogo(11994) },
  "karacabey beledi̇ye spor": { id: 11994, name: "Karacabey Belediyespor", logo: mackolikLogo(11994) },
  "kirklareli̇spor": { id: 16471, name: "Kırklarelispor", logo: mackolikLogo(16471) },
  "kütahyaspor": { id: 22775, name: "Kütahyaspor", logo: mackolikLogo(22775) },
  "beledi̇ye kütahyaspor": { id: 22775, name: "Kütahyaspor", logo: mackolikLogo(22775) },
  "ankaragücü": { id: 2218, name: "Ankaragücü", logo: mackolikLogo(2218) },
  "ankragücü": { id: 2218, name: "Ankaragücü", logo: mackolikLogo(2218) },
  "mke ankaragücü": { id: 2218, name: "Ankaragücü", logo: mackolikLogo(2218) },
  "sakaryaspor": { id: 2230, name: "Sakaryaspor", logo: mackolikLogo(2230) },
  "seri̇kspor": { id: 39444, name: "Serikspor", logo: mackolikLogo(39444) },
  "seri̇k beledi̇yespor": { id: 39444, name: "Serikspor", logo: mackolikLogo(39444) },
  "i̇negölspor": { id: 6039, name: "İnegölspor", logo: mackolikLogo(6039) },
  "sultan su i̇negölspor": { id: 6039, name: "İnegölspor", logo: mackolikLogo(6039) },

  // === Nesine 3. Lig - 1. Grup ===
  "amasyaspor": { id: 22789, name: "Amasyaspor", logo: mackolikLogo(22789) },
  "amasyaspor fk": { id: 22789, name: "Amasyaspor", logo: mackolikLogo(22789) },
  "beykoz anadoluspor": { id: 24815, name: "Beykoz Anadoluspor", logo: mackolikLogo(24815) },
  "beykoz anadolu spor": { id: 24815, name: "Beykoz Anadoluspor", logo: mackolikLogo(24815) },
  "beykoz a.ş.": { id: 24815, name: "Beykoz Anadoluspor", logo: mackolikLogo(24815) },
  "beykoz i̇shaklispor": { id: 25330, name: "Beykoz İshaklıspor", logo: mackolikLogo(25330) },
  "beykoz i̇shakli spor": { id: 25330, name: "Beykoz İshaklıspor", logo: mackolikLogo(25330) },
  "bulvarspor": { id: 39514, name: "Bulvarspor", logo: mackolikLogo(39514) },
  "düzcespor": { id: 12000, name: "Düzcespor", logo: mackolikLogo(12000) },
  "fatsa beledi̇yespor": { id: 39242, name: "Fatsa Belediyespor", logo: mackolikLogo(39242) },
  "fatsa bld": { id: 39242, name: "Fatsa Belediyespor", logo: mackolikLogo(39242) },
  "galataspor": { id: 40860, name: "Galataspor", logo: mackolikLogo(40860) },
  "galata spor": { id: 40860, name: "Galataspor", logo: mackolikLogo(40860) },
  "galata": { id: 40860, name: "Galataspor", logo: mackolikLogo(40860) },
  "gölcükspor": { id: 11869, name: "Gölcükspor", logo: mackolikLogo(11869) },
  "i̇nkilap fk": { id: 53193, name: "İnkılap FK", logo: mackolikLogo(53193) },
  "i̇nkilap fsk": { id: 53193, name: "İnkılap FK", logo: mackolikLogo(53193) },
  "karabük i̇dmanyurdu": { id: 60509, name: "Karabük İdmanyurdu", logo: mackolikLogo(60509) },
  "karabük i̇dman yurdu": { id: 60509, name: "Karabük İdmanyurdu", logo: mackolikLogo(60509) },
  "karabük i̇.y.": { id: 60509, name: "Karabük İdmanyurdu", logo: mackolikLogo(60509) },
  "kdz.ereğli̇": { id: 39502, name: "Kdz.Ereğli", logo: mackolikLogo(39502) },
  "kdz. ereğli̇": { id: 39502, name: "Kdz.Ereğli", logo: mackolikLogo(39502) },
  "kdz. ereğli̇ bld": { id: 39502, name: "Kdz.Ereğli", logo: mackolikLogo(39502) },
  "kdz.ereğli̇ 1980": { id: 39502, name: "Kdz.Ereğli", logo: mackolikLogo(39502) },
  "küçükçekmece si̇nopspor": { id: 53194, name: "Küçükçekmece Sinopspor", logo: mackolikLogo(53194) },
  "küçükçekmece si̇nop spor": { id: 53194, name: "Küçükçekmece Sinopspor", logo: mackolikLogo(53194) },
  "küçükçekmece si̇nop": { id: 53194, name: "Küçükçekmece Sinopspor", logo: mackolikLogo(53194) },
  "k.ç si̇nopspor": { id: 53194, name: "Küçükçekmece Sinopspor", logo: mackolikLogo(53194) },
  "orduspor 1967": { id: 54016, name: "Orduspor 1967", logo: mackolikLogo(54016) },
  "pazarspor": { id: 6044, name: "Pazarspor", logo: mackolikLogo(6044) },
  "si̇li̇vri̇spor": { id: 21771, name: "Silivrispor", logo: mackolikLogo(21771) },
  "tokat bld": { id: 100000120, name: "Tokat Bld", logo: mackolikLogo(100000120) },
  "tokat beledi̇ye plevne": { id: 100000120, name: "Tokat Bld", logo: mackolikLogo(100000120) },
  "yalova fk": { id: 63802, name: "Yalova FK", logo: mackolikLogo(63802) },
  "yalova fk 77": { id: 63802, name: "Yalova FK", logo: mackolikLogo(63802) },
  "zonguldakspor": { id: 25497, name: "Zonguldakspor", logo: mackolikLogo(25497) },
  "zonguldak spor fk": { id: 25497, name: "Zonguldakspor", logo: mackolikLogo(25497) },
  "zonguldakspor fk": { id: 25497, name: "Zonguldakspor", logo: mackolikLogo(25497) },

  // === Nesine 3. Lig - 2. Grup ===
  "bursa yildirimspor": { id: 45024, name: "Bursa Yıldırımspor", logo: mackolikLogo(45024) },
  "bursa yildirim sk": { id: 45024, name: "Bursa Yıldırımspor", logo: mackolikLogo(45024) },
  "bursa yildirim": { id: 45024, name: "Bursa Yıldırımspor", logo: mackolikLogo(45024) },
  "1922 akşehi̇rspor": { id: 39446, name: "1922 Akşehirspor", logo: mackolikLogo(39446) },
  "1922 akşehi̇r spor": { id: 39446, name: "1922 Akşehirspor", logo: mackolikLogo(39446) },
  "alanya 1221": { id: 48749, name: "Alanya 1221", logo: mackolikLogo(48749) },
  "alanya 1221 fsk": { id: 48749, name: "Alanya 1221", logo: mackolikLogo(48749) },
  "altay": { id: 2239, name: "Altay", logo: mackolikLogo(2239) },
  "ayvalikgücü beledi̇yespor": { id: 24814, name: "Ayvalıkgücü Belediyespor", logo: mackolikLogo(24814) },
  "ayvalikgücü bld": { id: 24814, name: "Ayvalıkgücü Belediyespor", logo: mackolikLogo(24814) },
  "balikesi̇rspor": { id: 11985, name: "Balıkesirspor", logo: mackolikLogo(11985) },
  "bi̇gaspor": { id: 40312, name: "Bigaspor", logo: mackolikLogo(40312) },
  "bucaspor 1928": { id: 29059, name: "Bucaspor 1928", logo: mackolikLogo(29059) },
  "deni̇zli̇ i̇dmanyurdu": { id: 2215, name: "Denizli İdmanyurdu", logo: mackolikLogo(2215) },
  "deni̇zli̇ i̇dman yurdu": { id: 2215, name: "Denizli İdmanyurdu", logo: mackolikLogo(2215) },
  "deni̇zli̇spor": { id: 2215, name: "Denizli İdmanyurdu", logo: mackolikLogo(2215) },
  "eski̇şehi̇r anadoluspor": { id: 40069, name: "Eskişehir Anadoluspor", logo: mackolikLogo(40069) },
  "eski̇şehi̇r anadolu spor": { id: 40069, name: "Eskişehir Anadoluspor", logo: mackolikLogo(40069) },
  "eski̇şehi̇rspor": { id: 2347, name: "Eskişehirspor", logo: mackolikLogo(2347) },
  "eti̇mesgutspor": { id: 29067, name: "Etimesgutspor", logo: mackolikLogo(29067) },
  "eti̇mesgut spor": { id: 29067, name: "Etimesgutspor", logo: mackolikLogo(29067) },
  "gazi̇emi̇r gsk": { id: 57043, name: "Gaziemir GSK", logo: mackolikLogo(57043) },
  "gazi̇emi̇r g.o.g. spor": { id: 57043, name: "Gaziemir GSK", logo: mackolikLogo(57043) },
  "gazi̇emi̇r": { id: 57043, name: "Gaziemir GSK", logo: mackolikLogo(57043) },
  "gemli̇k sümerbey fk": { id: 53209, name: "Gemlik Sümerbey FK", logo: mackolikLogo(53209) },
  "gemli̇k sümerbey": { id: 53209, name: "Gemlik Sümerbey FK", logo: mackolikLogo(53209) },
  "bursa ni̇lüfer fk": { id: 53209, name: "Gemlik Sümerbey FK", logo: mackolikLogo(53209) },
  "ni̇lüfer fk": { id: 53209, name: "Gemlik Sümerbey FK", logo: mackolikLogo(53209) },
  "karşiyaka": { id: 2241, name: "Karşıyaka", logo: mackolikLogo(2241) },
  "kepezspor": { id: 16480, name: "Kepezspor", logo: mackolikLogo(16480) },
  "kepez spor": { id: 16480, name: "Kepezspor", logo: mackolikLogo(16480) },
  "uşakspor": { id: 25496, name: "Uşakspor", logo: mackolikLogo(25496) },
  "uşak spor a.ş.": { id: 25496, name: "Uşakspor", logo: mackolikLogo(25496) },
  "söke 1970 spor": { id: 53223, name: "Söke 1970 Spor", logo: mackolikLogo(53223) },
  "söke 1970 sk": { id: 53223, name: "Söke 1970 Spor", logo: mackolikLogo(53223) },

  // === Nesine 3. Lig - 3. Grup ===
  "adanaspor": { id: 2229, name: "Adanaspor", logo: mackolikLogo(2229) },
  "adanaspor a.ş.": { id: 2229, name: "Adanaspor", logo: mackolikLogo(2229) },
  "ağri 1970 spor": { id: 44789, name: "Ağrı 1970 Spor", logo: mackolikLogo(44789) },
  "ağri 1970 sk": { id: 44789, name: "Ağrı 1970 Spor", logo: mackolikLogo(44789) },
  "bi̇tli̇sspor 1916": { id: 40959, name: "Bitlisspor 1916", logo: mackolikLogo(40959) },
  "bi̇tli̇s 1916 fk": { id: 40959, name: "Bitlisspor 1916", logo: mackolikLogo(40959) },
  "bi̇tli̇s spor 1916": { id: 40959, name: "Bitlisspor 1916", logo: mackolikLogo(40959) },
  "di̇yarbeki̇rspor": { id: 25505, name: "Diyarbekirspor", logo: mackolikLogo(25505) },
  "di̇yarbeki̇r spor": { id: 25505, name: "Diyarbekirspor", logo: mackolikLogo(25505) },
  "erci̇yes 38 fsk": { id: 39389, name: "Erciyes 38 FSK", logo: mackolikLogo(39389) },
  "mazidaği fosfatspor": { id: 54023, name: "Mazıdağı Fosfatspor", logo: mackolikLogo(54023) },
  "mazidaği fosfat spor": { id: 54023, name: "Mazıdağı Fosfatspor", logo: mackolikLogo(54023) },
  "karaköprü beledi̇yespor": { id: 39096, name: "Karaköprü Belediyespor", logo: mackolikLogo(39096) },
  "karaköprü bld.": { id: 39096, name: "Karaköprü Belediyespor", logo: mackolikLogo(39096) },
  "karaman fk": { id: 22779, name: "Karaman FK", logo: mackolikLogo(22779) },
  "kirikkale fk": { id: 34701, name: "Kırıkkale FK", logo: mackolikLogo(34701) },
  "kirşehi̇r fsk": { id: 40857, name: "Kırşehir FSK", logo: mackolikLogo(40857) },
  "malatya yeşi̇lyurtspor": { id: 39098, name: "Malatya Yeşilyurtspor", logo: mackolikLogo(39098) },
  "malatya yeşi̇lyurt sk": { id: 39098, name: "Malatya Yeşilyurtspor", logo: mackolikLogo(39098) },
  "yeşi̇lyurtspor": { id: 39098, name: "Malatya Yeşilyurtspor", logo: mackolikLogo(39098) },
  "ni̇ğde bld": { id: 56991, name: "Niğde Bld", logo: mackolikLogo(56991) },
  "ni̇ğde beledi̇yespor": { id: 56991, name: "Niğde Bld", logo: mackolikLogo(56991) },
  "osmani̇yespor": { id: 25501, name: "Osmaniyespor", logo: mackolikLogo(25501) },
  "osmani̇yespor fk": { id: 25501, name: "Osmaniyespor", logo: mackolikLogo(25501) },
  "1964 si̇li̇fkespor": { id: 39376, name: "1964 Silifkespor", logo: mackolikLogo(39376) },
  "si̇li̇fke beledi̇yespor": { id: 39376, name: "1964 Silifkespor", logo: mackolikLogo(39376) },
  "adana adaletgücüspor": { id: 66811, name: "Adana Adaletgücüspor", logo: mackolikLogo(66811) },
  "yaz si̇gorta adaletgücü": { id: 66811, name: "Adana Adaletgücüspor", logo: mackolikLogo(66811) },
  "a.adaletgücü": { id: 66811, name: "Adana Adaletgücüspor", logo: mackolikLogo(66811) },
  "yeni̇ malatyaspor": { id: 11710, name: "Yeni Malatyaspor", logo: mackolikLogo(11710) },
  "yeni̇ mersi̇n i̇dmanyurdu": { id: 2244, name: "Yeni Mersin İdmanyurdu", logo: mackolikLogo(2244) },
  "mersi̇n i̇dmanyurdu": { id: 2244, name: "Yeni Mersin İdmanyurdu", logo: mackolikLogo(2244) },
  "yozgat beledi̇yesi̇ bozokspor": { id: 60685, name: "Yozgat Belediyesi Bozokspor", logo: mackolikLogo(60685) },
  "yozgat bozokspor": { id: 60685, name: "Yozgat Belediyesi Bozokspor", logo: mackolikLogo(60685) },
  "yozgat bl bozok": { id: 60685, name: "Yozgat Belediyesi Bozokspor", logo: mackolikLogo(60685) },

  // === Diğer Ligler ve Takımlar ===
  "altinordu": { id: 11704, name: "Altınordu", logo: mackolikLogo(11704) },
  "antalyaspor": { id: 2236, name: "Antalyaspor", logo: mackolikLogo(2236) },
  "bandirmaspor": { id: 11986, name: "Bandırmaspor", logo: mackolikLogo(11986) },
  "batman petrolspor": { id: 2887, name: "Batman Petrolspor", logo: mackolikLogo(2887) },
  "bodrum fk": { id: 34119, name: "Bodrum FK", logo: mackolikLogo(34119) },
  "boluspor": { id: 8604, name: "Boluspor", logo: mackolikLogo(8604) },
  "bursaspor": { id: 2227, name: "Bursaspor", logo: mackolikLogo(2227) },
  "esenler erokspor": { id: 39486, name: "Esenler Erokspor", logo: mackolikLogo(39486) },
  "f. karagümrük": { id: 3014, name: "F. Karagümrük", logo: mackolikLogo(3014) },
  "iğdir fk": { id: 54027, name: "Iğdır FK", logo: mackolikLogo(54027) },
  "kayseri̇spor": { id: 2235, name: "Kayserispor", logo: mackolikLogo(2235) },
  "keçi̇örengücü": { id: 7284, name: "Keçiörengücü", logo: mackolikLogo(7284) },
  "mani̇sa fk": { id: 34120, name: "Manisa FK", logo: mackolikLogo(34120) },
  "mardi̇n 1969 spor": { id: 44751, name: "Mardin 1969 Spor", logo: mackolikLogo(44751) },
  "muğlaspor": { id: 14051, name: "Muğlaspor", logo: mackolikLogo(14051) },
  "pendi̇kspor": { id: 9153, name: "Pendikspor", logo: mackolikLogo(9153) },
  "sariyer": { id: 2344, name: "Sarıyer", logo: mackolikLogo(2344) },
  "si̇vasspor": { id: 2238, name: "Sivasspor", logo: mackolikLogo(2238) },
  "vanspor fk": { id: 2346, name: "Vanspor FK", logo: mackolikLogo(2346) },
  "ümrani̇yespor": { id: 19664, name: "Ümraniyespor", logo: mackolikLogo(19664) },
  "i̇stanbulspor": { id: 2226, name: "İstanbulspor", logo: mackolikLogo(2226) },
};

export function normalizeTeamKey(name: string): string {
  if (!name) return "";
  return name
    .replace(/İ/g, "i")
    .replace(/I/g, "i")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/ı/g, "i")
    .replace(/[^a-z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function findAuthenticTeamLogo(teamName: string, existingId?: number, existingLogo?: string): string {
  const resolvedId = findAuthenticTeamId(teamName, 0);
  if (resolvedId > 0) {
    return mackolikLogo(resolvedId);
  }
  if (existingId && existingId > 0) {
    const match = Object.values(TURKISH_TEAMS_DATABASE).find((e) => e.id === existingId);
    if (match) return match.logo;
    return mackolikLogo(existingId);
  }
  if (existingLogo && existingLogo.includes("mackolikfeeds.com") && !existingLogo.includes("teams/0")) {
    return existingLogo;
  }
  return "";
}

export function findAuthenticTeamId(teamName: string, fallbackId: number = 0): number {
  if (!teamName) return fallbackId;
  const key = normalizeTeamKey(teamName);
  const entries = Object.entries(TURKISH_TEAMS_DATABASE).sort((a, b) => b[0].length - a[0].length);
  for (const [dictKey, entry] of entries) {
    const normDictKey = normalizeTeamKey(dictKey);
    if (key === normDictKey || key.includes(normDictKey) || normDictKey.includes(key)) {
      return entry.id;
    }
  }
  return fallbackId;
}
