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
  "12 bi̇ngöl spor": { id: 31043, name: "12 Bingölspor", logo: mackolikLogo(31043) },
  "1461 trabzon fk": { id: 24813, name: "1461 Trabzon FK", logo: mackolikLogo(24813) },
  "1922 akşehi̇r spor": { id: 39446, name: "1922 Akşehirspor", logo: mackolikLogo(39446) },
  "24 erzi̇ncanspor": { id: 9160, name: "Erzincan Spor", logo: mackolikLogo(9160) },
  "52 orduspor fk": { id: 39791, name: "52 Orduspor FK", logo: mackolikLogo(39791) },
  "68 aksaray beledi̇yespor": { id: 11998, name: "68 Aksaray Bld", logo: mackolikLogo(11998) },
  "adana 01 fk sk": { id: 56993, name: "Adana 01 FK", logo: mackolikLogo(56993) },
  "adana demi̇rspor": { id: 2348, name: "Adana Demirspor", logo: mackolikLogo(2348) },
  "adanaspor a.ş.": { id: 2229, name: "Adanaspor", logo: mackolikLogo(2229) },
  "alanya 1221 fsk": { id: 48749, name: "Alanya 1221 FSK", logo: mackolikLogo(48749) },
  "altay": { id: 2239, name: "Altay", logo: mackolikLogo(2239) },
  "altinordu": { id: 11704, name: "Altınordu", logo: mackolikLogo(11704) },
  "ali̇ağa": { id: 39461, name: "Aliağa FK", logo: mackolikLogo(39461) },
  "ali̇ağa futbol a.ş.": { id: 39461, name: "Aliağa FK", logo: mackolikLogo(39461) },
  "amasyaspor fk": { id: 22789, name: "Amasyaspor FK", logo: mackolikLogo(22789) },
  "ankara demi̇rspor": { id: 2245, name: "Ankara Demir", logo: mackolikLogo(2245) },
  "ankaraspor": { id: 2232, name: "Ankaraspor", logo: mackolikLogo(2232) },
  "antalyaspor": { id: 2236, name: "Antalyaspor", logo: mackolikLogo(2236) },
  "arnavutköy bld": { id: 41558, name: "Arnavutköy Bld.", logo: mackolikLogo(41558) },
  "ayvalikgücü beledi̇yespor": { id: 24814, name: "Ayvalıkgücü Bld", logo: mackolikLogo(24814) },
  "ağri 1970 sk": { id: 44789, name: "Ağrı 1970", logo: mackolikLogo(44789) },
  "balikesi̇rspor": { id: 11985, name: "Balıkesirspor", logo: mackolikLogo(11985) },
  "bandirmaspor": { id: 11986, name: "Bandırmaspor", logo: mackolikLogo(11986) },
  "batman petrolspor": { id: 2887, name: "Batman Petrolspor", logo: mackolikLogo(2887) },
  "beledi̇ye kütahyaspor": { id: 22775, name: "Kütahyaspor", logo: mackolikLogo(22775) },
  "beykoz anadolu spor": { id: 24815, name: "Beykoz A.Ş.", logo: mackolikLogo(24815) },
  "beykoz i̇shakli spor": { id: 25330, name: "Beykoz İshaklı A2", logo: mackolikLogo(25330) },
  "beyoğlu yeni̇ çarşi": { id: 29063, name: "Beyoğlu Y.Çarşı", logo: mackolikLogo(29063) },
  "bodrum fk": { id: 34119, name: "Bodrum FK", logo: mackolikLogo(34119) },
  "boluspor": { id: 8604, name: "Boluspor", logo: mackolikLogo(8604) },
  "bucaspor 1928": { id: 29059, name: "Bucaspor 1928", logo: mackolikLogo(29059) },
  "bulvarspor": { id: 39514, name: "Bulvarspor", logo: mackolikLogo(39514) },
  "bursa ni̇lüfer fk": { id: 53209, name: "Bursa Nilüfer FK", logo: mackolikLogo(53209) },
  "bursa yildirim sk": { id: 45024, name: "Bursa Yıldırım", logo: mackolikLogo(45024) },
  "bursaspor": { id: 2227, name: "Bursaspor", logo: mackolikLogo(2227) },
  "bi̇gaspor": { id: 40312, name: "Bigaspor", logo: mackolikLogo(40312) },
  "bi̇tli̇s 1916 fk": { id: 40959, name: "Bitlis Spor 1916 ", logo: mackolikLogo(40959) },
  "deni̇zli̇spor": { id: 2215, name: "Denizlispor", logo: mackolikLogo(2215) },
  "düzcespor": { id: 12000, name: "Düzcespor", logo: mackolikLogo(12000) },
  "di̇yarbeki̇r spor": { id: 25505, name: "Diyarbekirspor", logo: mackolikLogo(25505) },
  "elaziğspor": { id: 2228, name: "Elazığspor", logo: mackolikLogo(2228) },
  "erbaaspor": { id: 36654, name: "Erbaaspor", logo: mackolikLogo(36654) },
  "erci̇yes 38 fsk": { id: 39389, name: "Erciyes 38 FSK", logo: mackolikLogo(39389) },
  "esenler erokspor": { id: 39486, name: "Esenler Erokspor", logo: mackolikLogo(39486) },
  "eski̇şehi̇r anadolu spor": { id: 40069, name: "Eskişehir Anadolu SF", logo: mackolikLogo(40069) },
  "eski̇şehi̇rspor": { id: 2347, name: "Eskişehirspor", logo: mackolikLogo(2347) },
  "eti̇mesgut spor": { id: 29067, name: "Etimesgut Spor ", logo: mackolikLogo(29067) },
  "f. karagümrük": { id: 3014, name: "F. Karagümrük", logo: mackolikLogo(3014) },
  "fatsa beledi̇yespor": { id: 39242, name: "Fatsa Bld", logo: mackolikLogo(39242) },
  "fethi̇yespor": { id: 9146, name: "Fethiyespor", logo: mackolikLogo(9146) },
  "galata": { id: 40860, name: "Galata", logo: mackolikLogo(40860) },
  "galata spor": { id: 40860, name: "Galata", logo: mackolikLogo(40860) },
  "gazi̇emi̇r": { id: 57043, name: "Gaziemir GOG", logo: mackolikLogo(57043) },
  "gazi̇emi̇r g.o.g. spor": { id: 57043, name: "Gaziemir GOG", logo: mackolikLogo(57043) },
  "gebzespor": { id: 40074, name: "G.Gebzespor", logo: mackolikLogo(40074) },
  "gmg kastamonuspor": { id: 12009, name: "GMG Kastamonuspor", logo: mackolikLogo(12009) },
  "gölcükspor": { id: 11869, name: "Gölcükspor", logo: mackolikLogo(11869) },
  "hatayspor": { id: 2883, name: "Hatayspor", logo: mackolikLogo(2883) },
  "isparta 32 spor": { id: 39439, name: "Isparta 32 Spor", logo: mackolikLogo(39439) },
  "iğdir fk": { id: 54027, name: "Iğdır FK", logo: mackolikLogo(54027) },
  "kahramanmaraş i̇sti̇klal": { id: 60677, name: "K.Maraş İstiklal", logo: mackolikLogo(60677) },
  "karabük i̇dman yurdu": { id: 60509, name: "Karabük İ.Y.", logo: mackolikLogo(60509) },
  "karacabey beledi̇ye spor": { id: 11994, name: "Karacabey Bld", logo: mackolikLogo(11994) },
  "karaköprü beledi̇yespor": { id: 39096, name: "Karaköprü Bld.", logo: mackolikLogo(39096) },
  "karaman fk": { id: 22779, name: "Karaman FK", logo: mackolikLogo(22779) },
  "karşiyaka": { id: 2241, name: "Karşıyaka", logo: mackolikLogo(2241) },
  "kayseri̇spor": { id: 2235, name: "Kayserispor", logo: mackolikLogo(2235) },
  "kdz. ereğli̇ bld": { id: 39502, name: "Kdz.Ereğli 1980", logo: mackolikLogo(39502) },
  "kepez spor": { id: 16480, name: "Kepezspor A.Ş ", logo: mackolikLogo(16480) },
  "keçi̇örengücü": { id: 7284, name: "Keçiörengücü", logo: mackolikLogo(7284) },
  "kirikkale fk": { id: 34701, name: "Kırıkkale FK ", logo: mackolikLogo(34701) },
  "kirklareli̇spor": { id: 16471, name: "Kırklarelispor", logo: mackolikLogo(16471) },
  "kirşehi̇r fsk": { id: 40857, name: "Kırşehir FSK", logo: mackolikLogo(40857) },
  "kizilkaya tarim şanliurfaspor": { id: 9166, name: "Şanlıurfaspor", logo: mackolikLogo(9166) },
  "kütahyaspor": { id: 22775, name: "Kütahyaspor", logo: mackolikLogo(22775) },
  "küçükçekmece si̇nop": { id: 53194, name: "K.Ç Sinopspor", logo: mackolikLogo(53194) },
  "küçükçekmece si̇nop spor": { id: 53194, name: "K.Ç Sinopspor", logo: mackolikLogo(53194) },
  "malatya yeşi̇lyurt sk": { id: 39098, name: "Yeşilyurtspor", logo: mackolikLogo(39098) },
  "mani̇sa fk": { id: 34120, name: "Manisa FK", logo: mackolikLogo(34120) },
  "mardi̇n 1969 spor": { id: 44751, name: "Mardin 1969 Spor", logo: mackolikLogo(44751) },
  "mazidaği fosfat spor": { id: 54023, name: "Mazıdağı Fosfat", logo: mackolikLogo(54023) },
  "menemen fk": { id: 11992, name: "Menemen FK", logo: mackolikLogo(11992) },
  "mersi̇n i̇dmanyurdu": { id: 2244, name: "Mersin İ.Y.", logo: mackolikLogo(2244) },
  "mke ankaragücü": { id: 2218, name: "Ankaragücü", logo: mackolikLogo(2218) },
  "muğlaspor": { id: 14051, name: "Muğlaspor", logo: mackolikLogo(14051) },
  "muş spor kulübü": { id: 44752, name: "Muş Spor", logo: mackolikLogo(44752) },
  "ni̇lüfer fk": { id: 53209, name: "Bursa Nilüfer FK", logo: mackolikLogo(53209) },
  "ni̇ğde beledi̇yespor": { id: 56991, name: "Niğde Bld", logo: mackolikLogo(56991) },
  "orduspor 1967": { id: 54016, name: "Orduspor 1967", logo: mackolikLogo(54016) },
  "osmani̇yespor fk": { id: 25501, name: "Osmaniyespor FK", logo: mackolikLogo(25501) },
  "pazarspor": { id: 6044, name: "Pazarspor", logo: mackolikLogo(6044) },
  "pendi̇kspor": { id: 9153, name: "Pendikspor", logo: mackolikLogo(9153) },
  "sakaryaspor": { id: 2230, name: "Sakaryaspor", logo: mackolikLogo(2230) },
  "sariyer": { id: 2344, name: "Sarıyer", logo: mackolikLogo(2344) },
  "sebat": { id: 54017, name: "Sebat Spor", logo: mackolikLogo(54017) },
  "sebat gençli̇kspor": { id: 54017, name: "Sebat Spor", logo: mackolikLogo(54017) },
  "seri̇k beledi̇yespor": { id: 39444, name: "Serik Spor", logo: mackolikLogo(39444) },
  "somaspor": { id: 39474, name: "Somaspor", logo: mackolikLogo(39474) },
  "sultan su i̇negölspor": { id: 6039, name: "İnegölspor", logo: mackolikLogo(6039) },
  "söke 1970 sk": { id: 53223, name: "Söke 1970 Spor", logo: mackolikLogo(53223) },
  "si̇li̇fke beledi̇yespor": { id: 39376, name: "1964 Silifkespor", logo: mackolikLogo(39376) },
  "si̇li̇vri̇spor": { id: 21771, name: "Silivrispor", logo: mackolikLogo(21771) },
  "si̇vasspor": { id: 2238, name: "Sivasspor", logo: mackolikLogo(2238) },
  "tokat beledi̇ye plevne": { id: 100000120, name: "Tokat Bld", logo: mackolikLogo(100000120) },
  "uşak spor a.ş.": { id: 25496, name: "Uşakspor A.Ş.", logo: mackolikLogo(25496) },
  "vanspor fk": { id: 2346, name: "Vanspor FK", logo: mackolikLogo(2346) },
  "yalova fk 77": { id: 63802, name: "Yalova FK", logo: mackolikLogo(63802) },
  "yaz si̇gorta adaletgücü": { id: 66811, name: "A.Adaletgücü", logo: mackolikLogo(66811) },
  "yeni̇ malatyaspor": { id: 11710, name: "Yeni Malatyaspor", logo: mackolikLogo(11710) },
  "yeni̇ mersi̇n i̇dmanyurdu": { id: 2244, name: "Mersin İ.Y.", logo: mackolikLogo(2244) },
  "yozgat bozokspor": { id: 60685, name: "Yozgat Bl Bozok", logo: mackolikLogo(60685) },
  "zonguldak spor fk": { id: 25497, name: "Zonguldakspor FK", logo: mackolikLogo(25497) },
  "çorlu spor 1947": { id: 39511, name: "Çorluspor 1947 ", logo: mackolikLogo(39511) },
  "çi̇mentaş elaziğspor": { id: 2228, name: "Elazığspor", logo: mackolikLogo(2228) },
  "ümrani̇yespor": { id: 19664, name: "Ümraniyespor", logo: mackolikLogo(19664) },
  "i̇negöl kafkas sk": { id: 53200, name: "İnegöl Kafkas", logo: mackolikLogo(53200) },
  "i̇negölspor": { id: 6039, name: "İnegölspor", logo: mackolikLogo(6039) },
  "i̇nkilap fk": { id: 53193, name: "İnkılap FSK", logo: mackolikLogo(53193) },
  "i̇skenderunspor a.ş.": { id: 29069, name: "İskenderunspor A.Ş.", logo: mackolikLogo(29069) },
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
