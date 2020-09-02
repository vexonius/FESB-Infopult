'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [
      {
        firstName: 'Sven',
        lastName: 'Gotovac',
        email: 'Sven.Gotovac@fesb.hr',
        function: 'dekan',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/gotovac.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305771',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 218',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/gotovac',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Vladan',
        lastName: 'Papić',
        email: 'Vladan.Papic@fesb.hr',
        function: 'prodekan za poslovanje',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/vpapic.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305773',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 215',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vpapic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Dinko',
        lastName: 'Begušić',
        email: 'Dinko.Begusic@fesb.hr',
        function: 'predstojnik zavoda',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/begusic.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305637',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 514',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/begusic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Tihomir',
        lastName: 'Betti',
        email: 'Tihomir.Betti@fesb.hr',
        function: 'šef katedre za nanoelek. i fotonapon. pretvorbu',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/betti.jpg',
        position: 'izvanredni profesor',
        phone: '305889',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 407',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/betti',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Tamara',
        lastName: 'Grujić',
        email: 'Tamara.Grujic@fesb.hr',
        function: 'šef katedre za automat. i sustave',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/tada.jpg',
        position: 'redoviti profesor',
        phone: '305642',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 412',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tada',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ivan',
        lastName: 'Marinović',
        email: 'Ivan.Marinovic@fesb.hr',
        function: 'šef katedre za radiokom. sust. i sklop.',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/imarin.jpg',
        position: 'redoviti profesor',
        phone: '305845',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 505',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/imarin',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Julije',
        lastName: 'Ožegović',
        email: 'Julije.Ozegovic@fesb.hr',
        function: 'šef katedre za digitalne sustave i mreže',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/julije.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305825',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 405',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/julije',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Dragan',
        lastName: 'Poljak',
        email: 'Dragan.Poljak@fesb.hr',
        function: 'šef katedre za elektr. kompat. i num. met. u elek.',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dpoljak.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305698',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 708',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dpoljak',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Mladen',
        lastName: 'Russo',
        email: 'Mladen.Russo@fesb.hr',
        function: 'šef katedre za komunik. i informac. sustave',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mrusso.jpg',
        position: 'izvanredni profesor',
        phone: '305844',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 504',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mrusso',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Darko',
        lastName: 'Stipaničev',
        email: 'Darko.Stipanicev@fesb.hr',
        function: 'šef katedre za mod. i int. račun. sustave',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dstip.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305643',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 413',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dstip',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Antonio',
        lastName: 'Šarolić',
        email: 'Antonio.Sarolic@fesb.hr',
        function: 'šef katedre za primj. elektr. polja',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/asarolic.jpg',
        position: 'redoviti profesor',
        phone: '305700',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 710',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/asarolic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Mihaela',
        lastName: 'Živković',
        email: 'Mihaela.Zivkovic@fesb.hr',
        function: 'Tajnica zavoda',
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mzivkovi.jpg',
        position: null,
        phone: '305853',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 513',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mzivkovi',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Zoran',
        lastName: 'Blažević',
        email: 'Zoran.Blazevic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/zblaz.jpg',
        position: 'redoviti profesor',
        phone: '305676',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 606',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zblaz',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Mirjana',
        lastName: 'Bonković',
        email: 'mirjana.bonkovic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mirjana.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305641',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 411',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mirjana',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Spomenka',
        lastName: 'Bovan',
        email: 'Spomenka.Bovan@fesb.hr',
        function: null,
        title: 'Mr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/spomenka.jpg',
        position: 'viši predavač',
        phone: '305697',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 409',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/spomenka',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Dunja',
        lastName: 'Božić-Štulić',
        email: 'dunja.gotovac@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dgotovac.jpg',
        position: 'asistent',
        phone: '305646',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 501',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dgotovac',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Maja',
        lastName: 'Braović',
        email: 'maja.braovic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mbraovic.jpg',
        position: 'poslijedoktorand',
        phone: '305601',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 501',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbraovic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Marin',
        lastName: 'Bugarić',
        email: 'Marin.Bugaric@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mbugaric.jpg',
        position: 'docent',
        phone: '305660',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 420',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbugaric',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Nediljko',
        lastName: 'Bugarin',
        email: 'Nediljko.Bugarin@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/nbugarin.jpg',
        position: null,
        phone: null,
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 414',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/nbugarin',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Mojmil',
        lastName: 'Cecić',
        email: 'Mojmil.Cecic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mcecic.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305828',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 408',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mcecic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Mario',
        lastName: 'Čagalj',
        email: 'Mario.Cagalj@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mcagalj.jpg',
        position: 'redoviti profesor',
        phone: '305663',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 503',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mcagalj',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Stipo',
        lastName: 'Čelar',
        email: 'Stipo.Celar@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/scelar.jpg',
        position: 'izvanredni profesor',
        phone: '305843',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 503',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/scelar',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Duje',
        lastName: 'Čoko',
        email: 'Duje.Coko@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dcoko.jpg',
        position: 'docent',
        phone: '305640',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 410',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dcoko',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ana',
        lastName: 'Čulić',
        email: 'aculic00@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: null,
        phone: null,
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 427',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/aculic00',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ante',
        lastName: 'Dagelić',
        email: 'Ante.Dagelic@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/adagelic.jpg',
        position: 'asistent',
        phone: '305669',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 502',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/adagelic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Vicko',
        lastName: 'Dorić',
        email: 'Vicko.Doric@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/vdoric.jpg',
        position: 'izvanredni profesor',
        phone: '305694',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 704',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vdoric',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Lea',
        lastName: 'Dujić Rodić',
        email: 'lea.dujic@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent-doktorand',
        phone: null,
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 427',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dujic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Jurica',
        lastName: 'Đerek',
        email: 'jurica.djerek@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jdjere00.jpg',
        position: 'asistent',
        phone: '305860',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 520',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jdjere00',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Željko',
        lastName: 'Kerošević',
        email: 'Zeljko.Kerosevic@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/keko.jpg',
        position: null,
        phone: '305673',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 603',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/keko',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Luka',
        lastName: 'Kraljević',
        email: 'Luka.Kraljevic@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent-doktorand',
        phone: null,
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 511',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/lkraljev',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ante',
        lastName: 'Kristić',
        email: 'Ante.Kristic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/akristic.jpg',
        position: 'docent',
        phone: '305824',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 404',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akristic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Damir',
        lastName: 'Krstinić',
        email: 'damir.krstinic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dkrst.jpg',
        position: 'izvanredni profesor',
        phone: '305895',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 502',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dkrst',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Stanko',
        lastName: 'Kružić',
        email: 'Stanko.Kruzic@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/skruzi00.jpg',
        position: 'asistent',
        phone: '305648',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 417',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/skruzi00',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ana',
        lastName: 'Kuzmanić Skelin',
        email: 'Ana.Kuzmanic.Skelin@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/akuzmani.jpg',
        position: 'docent',
        phone: '305652',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 422',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akuzmani',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ante',
        lastName: 'Lojić Kapetanović',
        email: 'Ante.Lojic.Kapetanovic@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: null,
        phone: '305695',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 702',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/alojicka',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Petra',
        lastName: 'Lončar',
        email: 'Petra.Loncar@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent',
        phone: null,
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 524',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ploncar',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Josip',
        lastName: 'Lörincz',
        email: 'Josip.Lorincz@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jlerinc.jpg',
        position: 'izvanredni profesor',
        phone: '305665',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 505',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jlerinc',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ivan',
        lastName: 'Marasović',
        email: 'Ivan.Marasovic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ivamaras.jpg',
        position: 'docent',
        phone: '305826',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 406',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ivamaras',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Jadranka',
        lastName: 'Marasović',
        email: 'Jadranka.Marasovic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jmar.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305830',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 410',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jmar',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Tea',
        lastName: 'Marasović',
        email: 'Tea.Marasovic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/tmarasov.jpg',
        position: 'docent',
        phone: '305647',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 414',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tmarasov',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Anđela',
        lastName: 'Matković',
        email: 'Andjela.Matkovic.01@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent',
        phone: '305690',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 705',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/amatko01',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ante',
        lastName: 'Milan',
        email: 'Ante.Milan.00@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: null,
        phone: null,
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 422',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/amilan00',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Mario',
        lastName: 'Miličević',
        email: 'mamilice@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: null,
        phone: null,
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 414',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mamilice',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Eugen',
        lastName: 'Mudnić',
        email: 'Eugen.Mudnic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/emudnic.jpg',
        position: 'izvanredni profesor',
        phone: '305848',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 508',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/emudnic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Josip',
        lastName: 'Musić',
        email: 'Josip.Music@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jmusic.jpg',
        position: 'izvanredni profesor',
        phone: '305829',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 409',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jmusic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Matija',
        lastName: 'Pauković',
        email: 'Matija.Paukovic.00@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent',
        phone: '305657',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 511',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mpauko00',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Vesna',
        lastName: 'Pekić',
        email: 'Vesna.Pekic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/vpekic.jpg',
        position: 'poslijedoktorand',
        phone: '305815',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 404',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vpekic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Toni',
        lastName: 'Perković',
        email: 'Toni.Perkovic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/toperkov.jpg',
        position: 'izvanredni profesor',
        phone: '305662',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 502',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/toperkov',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Marina',
        lastName: 'Prvan',
        email: 'mprvan@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mprvan.jpg',
        position: 'asistent',
        phone: '305635',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 604',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mprvan',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Kaja',
        lastName: 'Radić',
        email: 'Kaja.Radic@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/kaja.jpg',
        position: null,
        phone: '305645',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 415',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/kaja',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Joško',
        lastName: 'Radić',
        email: 'Josko.Radic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/radic.jpg',
        position: 'izvanredni profesor',
        phone: '305634',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 404',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/radic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Katarina',
        lastName: 'Radoš',
        email: 'Katarina.Rados@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/krados.jpg',
        position: null,
        phone: '305795',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 425',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/krados',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Žarko',
        lastName: 'Rnjak',
        email: 'Zarko.Rnjak@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/zare.jpg',
        position: null,
        phone: '305864',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 524',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zare',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Antonia',
        lastName: 'Senta',
        email: 'Antonia.Senta.00@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: null,
        phone: null,
        departemnt: 'elektronika i računarstvo',
        officeID: null,
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/asenta00',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Marjan',
        lastName: 'Sikora',
        email: 'Marjan.Sikora@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/sikora.jpg',
        position: 'izvanredni profesor',
        phone: '305859',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 519',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/sikora',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ivo',
        lastName: 'Stančić',
        email: 'Ivo.Stancic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/istancic.jpg',
        position: 'docent',
        phone: '305879',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 413',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/istancic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Maja',
        lastName: 'Stella',
        email: 'Maja.Stella@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mstella.jpg',
        position: 'izvanredni profesor',
        phone: '305664',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 504',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mstella',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Matko',
        lastName: 'Šarić',
        email: 'Matko.Saric@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/msaric.jpg',
        position: 'izvanredni profesor',
        phone: '305633',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 403',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/msaric',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ljiljana',
        lastName: 'Šerić',
        email: 'Ljiljana.Seric@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ljiljana.jpg',
        position: 'izvanredni profesor',
        phone: '305651',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 401',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ljiljana',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ivan',
        lastName: 'Škalic',
        email: 'Ivan.Skalic@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent',
        phone: '305672',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 602',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/iskalic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Maja',
        lastName: 'Škiljo',
        email: 'Maja.Skiljo@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/msekelja.jpg',
        position: 'docent',
        phone: '305675',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 608',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/msekelja',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Petar',
        lastName: 'Šolić',
        email: 'Petar.Solic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/psolic.jpg',
        position: 'docent',
        phone: '305632',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 402',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/psolic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Maja',
        lastName: 'Štula',
        email: 'Maja.Stula@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/kiki.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305852',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 512',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/kiki',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Anna',
        lastName: 'Šušnjara',
        email: 'Anna.Susnjara@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ansusnja.jpg',
        position: 'asistent',
        phone: '305693',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 703',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ansusnja',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Linda',
        lastName: 'Vicković',
        email: 'Linda.Vickovic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/linda.jpg',
        position: 'izvanredni profesor',
        phone: '305849',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 509',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/linda',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Marin Stefan',
        lastName: 'Vidović',
        email: 'Marin.Stefan.Vidovic@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: null,
        phone: null,
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 423',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mvidovic',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ivan',
        lastName: 'Zoraja',
        email: 'Ivan.Zoraja@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/zoraja.jpg',
        position: 'izvanredni profesor',
        phone: '305858',
        departemnt: 'elektronika i računarstvo',
        officeID: 'B 518',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/zoraja',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      },
      {
        firstName: 'Ivana',
        lastName: 'Zulim',
        email: 'Ivana.Zulim@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/izulim.jpg',
        position: 'poslijedoktorand',
        phone: '305695',
        departemnt: 'elektronika i računarstvo',
        officeID: 'A 705',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/izulim',
        createdAt: '2020-09-01T19:56:50.564Z',
        updatedAt: '2020-09-01T19:56:50.564Z'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
}
