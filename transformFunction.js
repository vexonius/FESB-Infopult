const fs = require('fs')

const raw = [
  {
    id: 'gotovac',
    firstName: 'Sven',
    lastName: 'Gotovac',
    mail: 'Sven.Gotovac@fesb.hr',
    telephone: '305771',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: 'dekan',
    officeLocation: 'A 218',
    department_abbreviation: 'DEK',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/gotovac.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/gotovac',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/gotovac#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/gotovac#curriculum-tab'
  },
  {
    id: 'vpapic',
    firstName: 'Vladan',
    lastName: 'Papić',
    mail: 'Vladan.Papic@fesb.hr',
    telephone: '305773',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: 'prodekan za poslovanje',
    officeLocation: 'A 215',
    department_abbreviation: 'DEK',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/vpapic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vpapic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vpapic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vpapic#curriculum-tab'
  },
  {
    id: 'begusic',
    firstName: 'Dinko',
    lastName: 'Begušić',
    mail: 'Dinko.Begusic@fesb.hr',
    telephone: '305637',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: 'predstojnik zavoda',
    officeLocation: 'B 514',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/begusic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/begusic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/begusic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/begusic#curriculum-tab'
  },
  {
    id: 'betti',
    firstName: 'Tihomir',
    lastName: 'Betti',
    mail: 'Tihomir.Betti@fesb.hr',
    telephone: '305889',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: 'šef katedre za nanoelek. i fotonapon. pretvorbu',
    officeLocation: 'B 407',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/betti.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/betti',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/betti#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/betti#curriculum-tab'
  },
  {
    id: 'tada',
    firstName: 'Tamara',
    lastName: 'Grujić',
    mail: 'Tamara.Grujic@fesb.hr',
    telephone: '305642',
    title: 'Dr.sc.',
    position: 'redoviti profesor',
    function: 'šef katedre za automat. i sustave',
    officeLocation: 'A 412',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/tada.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tada',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tada#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tada#curriculum-tab'
  },
  {
    id: 'imarin',
    firstName: 'Ivan',
    lastName: 'Marinović',
    mail: 'Ivan.Marinovic@fesb.hr',
    telephone: '305845',
    title: 'Dr.sc.',
    position: 'redoviti profesor',
    function: 'šef katedre za radiokom. sust. i sklop.',
    officeLocation: 'B 505',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/imarin.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/imarin',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/imarin#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/imarin#curriculum-tab'
  },
  {
    id: 'julije',
    firstName: 'Julije',
    lastName: 'Ožegović',
    mail: 'Julije.Ozegovic@fesb.hr',
    telephone: '305825',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: 'šef katedre za digitalne sustave i mreže',
    officeLocation: 'B 405',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/julije.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/julije',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/julije#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/julije#curriculum-tab'
  },
  {
    id: 'dpoljak',
    firstName: 'Dragan',
    lastName: 'Poljak',
    mail: 'Dragan.Poljak@fesb.hr',
    telephone: '305698',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: 'šef katedre za elektr. kompat. i num. met. u elek.',
    officeLocation: 'A 708',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dpoljak.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dpoljak',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dpoljak#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dpoljak#curriculum-tab'
  },
  {
    id: 'mrusso',
    firstName: 'Mladen',
    lastName: 'Russo',
    mail: 'Mladen.Russo@fesb.hr',
    telephone: '305844',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: 'šef katedre za komunik. i informac. sustave',
    officeLocation: 'B 504',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mrusso.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mrusso',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mrusso#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mrusso#curriculum-tab'
  },
  {
    id: 'dstip',
    firstName: 'Darko',
    lastName: 'Stipaničev',
    mail: 'Darko.Stipanicev@fesb.hr',
    telephone: '305643',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: 'šef katedre za mod. i int. račun. sustave',
    officeLocation: 'A 413',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dstip.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dstip',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dstip#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dstip#curriculum-tab'
  },
  {
    id: 'asarolic',
    firstName: 'Antonio',
    lastName: 'Šarolić',
    mail: 'Antonio.Sarolic@fesb.hr',
    telephone: '305700',
    title: 'Dr.sc.',
    position: 'redoviti profesor',
    function: 'šef katedre za primj. elektr. polja',
    officeLocation: 'A 710',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/asarolic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/asarolic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/asarolic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/asarolic#curriculum-tab'
  },
  {
    id: 'mzivkovi',
    firstName: 'Mihaela',
    lastName: 'Živković',
    mail: 'Mihaela.Zivkovic@fesb.hr',
    telephone: '305853',
    title: null,
    position: null,
    function: 'Tajnica zavoda',
    officeLocation: 'B 513',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mzivkovi.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mzivkovi',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mzivkovi#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mzivkovi#curriculum-tab'
  },
  {
    id: 'zblaz',
    firstName: 'Zoran',
    lastName: 'Blažević',
    mail: 'Zoran.Blazevic@fesb.hr',
    telephone: '305676',
    title: 'Dr.sc.',
    position: 'redoviti profesor',
    function: null,
    officeLocation: 'A 606',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/zblaz.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zblaz',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zblaz#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zblaz#curriculum-tab'
  },
  {
    id: 'mirjana',
    firstName: 'Mirjana',
    lastName: 'Bonković',
    mail: 'mirjana.bonkovic@fesb.hr',
    telephone: '305641',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: null,
    officeLocation: 'A 411',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mirjana.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mirjana',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mirjana#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mirjana#curriculum-tab'
  },
  {
    id: 'spomenka',
    firstName: 'Spomenka',
    lastName: 'Bovan',
    mail: 'Spomenka.Bovan@fesb.hr',
    telephone: '305697',
    title: 'Mr.sc.',
    position: 'viši predavač',
    function: null,
    officeLocation: 'A 409',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/spomenka.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/spomenka',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/spomenka#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/spomenka#curriculum-tab'
  },
  {
    id: 'dgotovac',
    firstName: 'Dunja',
    lastName: 'Božić-Štulić',
    mail: 'dunja.gotovac@fesb.hr',
    telephone: '305646',
    title: 'Dr.sc.',
    position: 'asistent',
    function: null,
    officeLocation: 'B 501',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dgotovac.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dgotovac',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dgotovac#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dgotovac#curriculum-tab'
  },
  {
    id: 'mbraovic',
    firstName: 'Maja',
    lastName: 'Braović',
    mail: 'maja.braovic@fesb.hr',
    telephone: '305601',
    title: 'Dr.sc.',
    position: 'poslijedoktorand',
    function: null,
    officeLocation: 'B 501',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mbraovic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbraovic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbraovic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbraovic#curriculum-tab'
  },
  {
    id: 'mbugaric',
    firstName: 'Marin',
    lastName: 'Bugarić',
    mail: 'Marin.Bugaric@fesb.hr',
    telephone: '305660',
    title: 'Dr.sc.',
    position: 'docent',
    function: null,
    officeLocation: 'A 420',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mbugaric.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbugaric',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbugaric#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbugaric#curriculum-tab'
  },
  {
    id: 'nbugarin',
    firstName: 'Nediljko',
    lastName: 'Bugarin',
    mail: 'Nediljko.Bugarin@fesb.hr',
    telephone: null,
    title: null,
    position: null,
    function: null,
    officeLocation: 'B 414',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/nbugarin.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/nbugarin',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/nbugarin#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/nbugarin#curriculum-tab'
  },
  {
    id: 'mcecic',
    firstName: 'Mojmil',
    lastName: 'Cecić',
    mail: 'Mojmil.Cecic@fesb.hr',
    telephone: '305828',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: null,
    officeLocation: 'B 408',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mcecic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mcecic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mcecic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mcecic#curriculum-tab'
  },
  {
    id: 'mcagalj',
    firstName: 'Mario',
    lastName: 'Čagalj',
    mail: 'Mario.Cagalj@fesb.hr',
    telephone: '305663',
    title: 'Dr.sc.',
    position: 'redoviti profesor',
    function: null,
    officeLocation: 'A 503',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mcagalj.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mcagalj',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mcagalj#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mcagalj#curriculum-tab'
  },
  {
    id: 'scelar',
    firstName: 'Stipo',
    lastName: 'Čelar',
    mail: 'Stipo.Celar@fesb.hr',
    telephone: '305843',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'B 503',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/scelar.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/scelar',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/scelar#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/scelar#curriculum-tab'
  },
  {
    id: 'dcoko',
    firstName: 'Duje',
    lastName: 'Čoko',
    mail: 'Duje.Coko@fesb.hr',
    telephone: '305640',
    title: 'Dr.sc.',
    position: 'docent',
    function: null,
    officeLocation: 'A 410',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dcoko.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dcoko',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dcoko#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dcoko#curriculum-tab'
  },
  {
    id: 'aculic00',
    firstName: 'Ana',
    lastName: 'Čulić',
    mail: 'aculic00@fesb.hr',
    telephone: null,
    title: null,
    position: null,
    function: null,
    officeLocation: 'A 427',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/aculic00',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/aculic00#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/aculic00#curriculum-tab'
  },
  {
    id: 'adagelic',
    firstName: 'Ante',
    lastName: 'Dagelić',
    mail: 'Ante.Dagelic@fesb.hr',
    telephone: '305669',
    title: null,
    position: 'asistent',
    function: null,
    officeLocation: 'A 502',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/adagelic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/adagelic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/adagelic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/adagelic#curriculum-tab'
  },
  {
    id: 'vdoric',
    firstName: 'Vicko',
    lastName: 'Dorić',
    mail: 'Vicko.Doric@fesb.hr',
    telephone: '305694',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'A 704',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/vdoric.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vdoric',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vdoric#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vdoric#curriculum-tab'
  },
  {
    id: 'dujic',
    firstName: 'Lea',
    lastName: 'Dujić Rodić',
    mail: 'lea.dujic@fesb.hr',
    telephone: null,
    title: null,
    position: 'asistent-doktorand',
    function: null,
    officeLocation: 'A 427',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dujic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dujic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dujic#curriculum-tab'
  },
  {
    id: 'jdjere00',
    firstName: 'Jurica',
    lastName: 'Đerek',
    mail: 'jurica.djerek@fesb.hr',
    telephone: '305860',
    title: null,
    position: 'asistent',
    function: null,
    officeLocation: 'B 520',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jdjere00.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jdjere00',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jdjere00#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jdjere00#curriculum-tab'
  },
  {
    id: 'keko',
    firstName: 'Željko',
    lastName: 'Kerošević',
    mail: 'Zeljko.Kerosevic@fesb.hr',
    telephone: '305673',
    title: null,
    position: null,
    function: null,
    officeLocation: 'A 603',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/keko.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/keko',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/keko#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/keko#curriculum-tab'
  },
  {
    id: 'lkraljev',
    firstName: 'Luka',
    lastName: 'Kraljević',
    mail: 'Luka.Kraljevic@fesb.hr',
    telephone: null,
    title: null,
    position: 'asistent-doktorand',
    function: null,
    officeLocation: 'B 511',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/lkraljev',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/lkraljev#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/lkraljev#curriculum-tab'
  },
  {
    id: 'akristic',
    firstName: 'Ante',
    lastName: 'Kristić',
    mail: 'Ante.Kristic@fesb.hr',
    telephone: '305824',
    title: 'Dr.sc.',
    position: 'docent',
    function: null,
    officeLocation: 'B 404',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/akristic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akristic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akristic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akristic#curriculum-tab'
  },
  {
    id: 'dkrst',
    firstName: 'Damir',
    lastName: 'Krstinić',
    mail: 'damir.krstinic@fesb.hr',
    telephone: '305895',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'B 502',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dkrst.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dkrst',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dkrst#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dkrst#curriculum-tab'
  },
  {
    id: 'skruzi00',
    firstName: 'Stanko',
    lastName: 'Kružić',
    mail: 'Stanko.Kruzic@fesb.hr',
    telephone: '305648',
    title: null,
    position: 'asistent',
    function: null,
    officeLocation: 'A 417',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/skruzi00.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/skruzi00',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/skruzi00#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/skruzi00#curriculum-tab'
  },
  {
    id: 'akuzmani',
    firstName: 'Ana',
    lastName: 'Kuzmanić Skelin',
    mail: 'Ana.Kuzmanic.Skelin@fesb.hr',
    telephone: '305652',
    title: 'Dr.sc.',
    position: 'docent',
    function: null,
    officeLocation: 'A 422',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/akuzmani.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akuzmani',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akuzmani#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akuzmani#curriculum-tab'
  },
  {
    id: 'alojicka',
    firstName: 'Ante',
    lastName: 'Lojić Kapetanović',
    mail: 'Ante.Lojic.Kapetanovic@fesb.hr',
    telephone: '305695',
    title: null,
    position: null,
    function: null,
    officeLocation: 'A 702',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/alojicka',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/alojicka#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/alojicka#curriculum-tab'
  },
  {
    id: 'ploncar',
    firstName: 'Petra',
    lastName: 'Lončar',
    mail: 'Petra.Loncar@fesb.hr',
    telephone: null,
    title: null,
    position: 'asistent',
    function: null,
    officeLocation: 'B 524',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ploncar',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ploncar#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ploncar#curriculum-tab'
  },
  {
    id: 'jlerinc',
    firstName: 'Josip',
    lastName: 'Lörincz',
    mail: 'Josip.Lorincz@fesb.hr',
    telephone: '305665',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'A 505',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jlerinc.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jlerinc',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jlerinc#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jlerinc#curriculum-tab'
  },
  {
    id: 'ivamaras',
    firstName: 'Ivan',
    lastName: 'Marasović',
    mail: 'Ivan.Marasovic@fesb.hr',
    telephone: '305826',
    title: 'Dr.sc.',
    position: 'docent',
    function: null,
    officeLocation: 'B 406',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ivamaras.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ivamaras',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ivamaras#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ivamaras#curriculum-tab'
  },
  {
    id: 'jmar',
    firstName: 'Jadranka',
    lastName: 'Marasović',
    mail: 'Jadranka.Marasovic@fesb.hr',
    telephone: '305830',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: null,
    officeLocation: 'B 410',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jmar.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jmar',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jmar#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jmar#curriculum-tab'
  },
  {
    id: 'tmarasov',
    firstName: 'Tea',
    lastName: 'Marasović',
    mail: 'Tea.Marasovic@fesb.hr',
    telephone: '305647',
    title: 'Dr.sc.',
    position: 'docent',
    function: null,
    officeLocation: 'B 414',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/tmarasov.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tmarasov',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tmarasov#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tmarasov#curriculum-tab'
  },
  {
    id: 'amatko01',
    firstName: 'Anđela',
    lastName: 'Matković',
    mail: 'Andjela.Matkovic.01@fesb.hr',
    telephone: '305690',
    title: null,
    position: 'asistent',
    function: null,
    officeLocation: 'A 705',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/amatko01',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/amatko01#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/amatko01#curriculum-tab'
  },
  {
    id: 'amilan00',
    firstName: 'Ante',
    lastName: 'Milan',
    mail: 'Ante.Milan.00@fesb.hr',
    telephone: null,
    title: null,
    position: null,
    function: null,
    officeLocation: 'A 422',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/amilan00',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/amilan00#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/amilan00#curriculum-tab'
  },
  {
    id: 'mamilice',
    firstName: 'Mario',
    lastName: 'Miličević',
    mail: 'mamilice@fesb.hr',
    telephone: null,
    title: null,
    position: null,
    function: null,
    officeLocation: 'B 414',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mamilice',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mamilice#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mamilice#curriculum-tab'
  },
  {
    id: 'emudnic',
    firstName: 'Eugen',
    lastName: 'Mudnić',
    mail: 'Eugen.Mudnic@fesb.hr',
    telephone: '305848',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'B 508',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/emudnic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/emudnic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/emudnic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/emudnic#curriculum-tab'
  },
  {
    id: 'jmusic',
    firstName: 'Josip',
    lastName: 'Musić',
    mail: 'Josip.Music@fesb.hr',
    telephone: '305829',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'B 409',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jmusic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jmusic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jmusic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jmusic#curriculum-tab'
  },
  {
    id: 'mpauko00',
    firstName: 'Matija',
    lastName: 'Pauković',
    mail: 'Matija.Paukovic.00@fesb.hr',
    telephone: '305657',
    title: null,
    position: 'asistent',
    function: null,
    officeLocation: 'B 511',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mpauko00',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mpauko00#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mpauko00#curriculum-tab'
  },
  {
    id: 'vpekic',
    firstName: 'Vesna',
    lastName: 'Pekić',
    mail: 'Vesna.Pekic@fesb.hr',
    telephone: '305815',
    title: 'Dr.sc.',
    position: 'poslijedoktorand',
    function: null,
    officeLocation: 'B 404',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/vpekic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vpekic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vpekic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vpekic#curriculum-tab'
  },
  {
    id: 'toperkov',
    firstName: 'Toni',
    lastName: 'Perković',
    mail: 'Toni.Perkovic@fesb.hr',
    telephone: '305662',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'A 502',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/toperkov.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/toperkov',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/toperkov#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/toperkov#curriculum-tab'
  },
  {
    id: 'mprvan',
    firstName: 'Marina',
    lastName: 'Prvan',
    mail: 'mprvan@fesb.hr',
    telephone: '305635',
    title: null,
    position: 'asistent',
    function: null,
    officeLocation: 'A 604',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mprvan.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mprvan',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mprvan#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mprvan#curriculum-tab'
  },
  {
    id: 'kaja',
    firstName: 'Kaja',
    lastName: 'Radić',
    mail: 'Kaja.Radic@fesb.hr',
    telephone: '305645',
    title: null,
    position: null,
    function: null,
    officeLocation: 'A 415',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/kaja.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/kaja',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/kaja#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/kaja#curriculum-tab'
  },
  {
    id: 'radic',
    firstName: 'Joško',
    lastName: 'Radić',
    mail: 'Josko.Radic@fesb.hr',
    telephone: '305634',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'A 404',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/radic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/radic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/radic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/radic#curriculum-tab'
  },
  {
    id: 'krados',
    firstName: 'Katarina',
    lastName: 'Radoš',
    mail: 'Katarina.Rados@fesb.hr',
    telephone: '305795',
    title: null,
    position: null,
    function: null,
    officeLocation: 'A 425',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/krados.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/krados',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/krados#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/krados#curriculum-tab'
  },
  {
    id: 'zare',
    firstName: 'Žarko',
    lastName: 'Rnjak',
    mail: 'Zarko.Rnjak@fesb.hr',
    telephone: '305864',
    title: null,
    position: null,
    function: null,
    officeLocation: 'B 524',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/zare.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zare',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zare#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zare#curriculum-tab'
  },
  {
    id: 'asenta00',
    firstName: 'Antonia',
    lastName: 'Senta',
    mail: 'Antonia.Senta.00@fesb.hr',
    telephone: null,
    title: null,
    position: null,
    function: null,
    officeLocation: null,
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/asenta00',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/asenta00#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/asenta00#curriculum-tab'
  },
  {
    id: 'sikora',
    firstName: 'Marjan',
    lastName: 'Sikora',
    mail: 'Marjan.Sikora@fesb.hr',
    telephone: '305859',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'B 519',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/sikora.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/sikora',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/sikora#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/sikora#curriculum-tab'
  },
  {
    id: 'istancic',
    firstName: 'Ivo',
    lastName: 'Stančić',
    mail: 'Ivo.Stancic@fesb.hr',
    telephone: '305879',
    title: 'Dr.sc.',
    position: 'docent',
    function: null,
    officeLocation: 'B 413',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/istancic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/istancic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/istancic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/istancic#curriculum-tab'
  },
  {
    id: 'mstella',
    firstName: 'Maja',
    lastName: 'Stella',
    mail: 'Maja.Stella@fesb.hr',
    telephone: '305664',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'A 504',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mstella.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mstella',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mstella#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mstella#curriculum-tab'
  },
  {
    id: 'msaric',
    firstName: 'Matko',
    lastName: 'Šarić',
    mail: 'Matko.Saric@fesb.hr',
    telephone: '305633',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'A 403',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/msaric.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/msaric',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/msaric#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/msaric#curriculum-tab'
  },
  {
    id: 'ljiljana',
    firstName: 'Ljiljana',
    lastName: 'Šerić',
    mail: 'Ljiljana.Seric@fesb.hr',
    telephone: '305651',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'A 401',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ljiljana.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ljiljana',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ljiljana#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ljiljana#curriculum-tab'
  },
  {
    id: 'iskalic',
    firstName: 'Ivan',
    lastName: 'Škalic',
    mail: 'Ivan.Skalic@fesb.hr',
    telephone: '305672',
    title: null,
    position: 'asistent',
    function: null,
    officeLocation: 'A 602',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/iskalic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/iskalic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/iskalic#curriculum-tab'
  },
  {
    id: 'msekelja',
    firstName: 'Maja',
    lastName: 'Škiljo',
    mail: 'Maja.Skiljo@fesb.hr',
    telephone: '305675',
    title: 'Dr.sc.',
    position: 'docent',
    function: null,
    officeLocation: 'A 608',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/msekelja.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/msekelja',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/msekelja#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/msekelja#curriculum-tab'
  },
  {
    id: 'psolic',
    firstName: 'Petar',
    lastName: 'Šolić',
    mail: 'Petar.Solic@fesb.hr',
    telephone: '305632',
    title: 'Dr.sc.',
    position: 'docent',
    function: null,
    officeLocation: 'A 402',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/psolic.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/psolic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/psolic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/psolic#curriculum-tab'
  },
  {
    id: 'kiki',
    firstName: 'Maja',
    lastName: 'Štula',
    mail: 'Maja.Stula@fesb.hr',
    telephone: '305852',
    title: 'Dr.sc.',
    position: 'redoviti profesor - trajno zvanje',
    function: null,
    officeLocation: 'B 512',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/kiki.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/kiki',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/kiki#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/kiki#curriculum-tab'
  },
  {
    id: 'ansusnja',
    firstName: 'Anna',
    lastName: 'Šušnjara',
    mail: 'Anna.Susnjara@fesb.hr',
    telephone: '305693',
    title: null,
    position: 'asistent',
    function: null,
    officeLocation: 'A 703',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ansusnja.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ansusnja',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ansusnja#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ansusnja#curriculum-tab'
  },
  {
    id: 'linda',
    firstName: 'Linda',
    lastName: 'Vicković',
    mail: 'Linda.Vickovic@fesb.hr',
    telephone: '305849',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'B 509',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/linda.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/linda',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/linda#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/linda#curriculum-tab'
  },
  {
    id: 'mvidovic',
    firstName: 'Marin Stefan',
    lastName: 'Vidović',
    mail: 'Marin.Stefan.Vidovic@fesb.hr',
    telephone: null,
    title: null,
    position: null,
    function: null,
    officeLocation: 'A 423',
    department_abbreviation: 'ZER',
    pictureUrl: null,
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mvidovic',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mvidovic#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mvidovic#curriculum-tab'
  },
  {
    id: 'zoraja',
    firstName: 'Ivan',
    lastName: 'Zoraja',
    mail: 'Ivan.Zoraja@fesb.hr',
    telephone: '305858',
    title: 'Dr.sc.',
    position: 'izvanredni profesor',
    function: null,
    officeLocation: 'B 518',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/zoraja.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zoraja',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zoraja#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zoraja#curriculum-tab'
  },
  {
    id: 'izulim',
    firstName: 'Ivana',
    lastName: 'Zulim',
    mail: 'Ivana.Zulim@fesb.hr',
    telephone: '305695',
    title: 'Dr.sc.',
    position: 'poslijedoktorand',
    function: null,
    officeLocation: 'A 705',
    department_abbreviation: 'ZER',
    pictureUrl: 'https://korisnik.fesb.unist.hr/slika/velika/izulim.jpg',
    signatureUrl: null,
    personalPageUrl_cv:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/izulim',
    personalPageUrl_research:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/izulim#science-tab',
    personalPageUrl_lecturing:
      'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/izulim#curriculum-tab'
  }
]

let persons = []

raw.forEach(el => {
  let person = {}

  person.firstName = el.firstName
  person.lastName = el.lastName
  person.email = el.mail
  person.function = el.function
  person.title = el.title
  person.photoUrl = el.pictureUrl
  person.position = el.position
  person.phone = el.telephone
  person.departemnt = 'elektronika i računarstvo'
  person.officeID = el.officeLocation
  person.profilePage = el.personalPageUrl_cv
  person.createdAt = new Date()
  person.updatedAt = new Date()

  persons.push(person)
})


let data = JSON.stringify(persons, null, 2)
fs.writeFileSync('./server/elektronikairacunarstvo.json', data)