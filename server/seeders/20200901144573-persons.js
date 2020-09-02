'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [
      {
        firstName: 'Goran',
        lastName: 'Petrović',
        email: 'Goran.Petrovic@fesb.hr',
        function: 'predstojnik zavoda',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/petrovic.jpg',
        position: 'redoviti profesor',
        phone: '305731',
        departemnt: 'elektroenergetika',
        officeID: 'A 236',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/petrovic',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Nikša',
        lastName: 'Kovač',
        email: 'Niksa.Kovac@fesb.hr',
        function: 'šef katedre za osnove elektrotehnike',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/nkovac.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305732',
        departemnt: 'elektroenergetika',
        officeID: 'A 232',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/nkovac',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Petar',
        lastName: 'Sarajčev',
        email: 'petar.sarajcev@fesb.hr',
        function: 'šef katedre za elek.mreže i postrojenja',
        title: 'Dr.sc.',
        photoUrl: null,
        position: 'redoviti profesor',
        phone: '305806',
        departemnt: 'elektroenergetika',
        officeID: 'B 306',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/psarajce',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Elis',
        lastName: 'Sutlović',
        email: 'Elis.Sutlovic@fesb.hr',
        function: 'šef katedre za električna postrojenja i sustave',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/sutlovic.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305730',
        departemnt: 'elektroenergetika',
        officeID: 'A 230',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/sutlovic',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Božo',
        lastName: 'Terzić',
        email: 'Bozo.Terzic@fesb.hr',
        function: 'šef katedre za elek.pog. i indus. automatatizaciju',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/bterzic.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305609',
        departemnt: 'elektroenergetika',
        officeID: 'A 309',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/bterzic',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Slavko',
        lastName: 'Vujević',
        email: 'Slavko.Vujevic@fesb.hr',
        function: 'šef katedre za teor.elek.i inž.modeliranje',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/vujevic.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305613',
        departemnt: 'elektroenergetika',
        officeID: 'A 313',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vujevic',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Dinko',
        lastName: 'Vukadinović',
        email: 'Dinko.Vukadinovic@fesb.hr',
        function: 'šef katedre za energ. elektr. i autom.',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dvukad.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305614',
        departemnt: 'elektroenergetika',
        officeID: 'A 314',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dvukad',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Ivanka',
        lastName: 'Bonači',
        email: 'Ivanka.Bonaci@fesb.hr',
        function: 'Tajnica zavoda',
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ibonaci.jpg',
        position: null,
        phone: '305735',
        departemnt: 'elektroenergetika',
        officeID: 'A 235',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ibonaci',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Mateo',
        lastName: 'Bašić',
        email: 'Mateo.Basic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mabasic.jpg',
        position: 'izvanredni profesor',
        phone: '305615',
        departemnt: 'elektroenergetika',
        officeID: 'A 315',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mabasic',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Ozren',
        lastName: 'Bego',
        email: 'Ozren.Bego@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/obego.jpg',
        position: 'izvanredni profesor',
        phone: '305605',
        departemnt: 'elektroenergetika',
        officeID: 'A 305',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/obego',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Matija',
        lastName: 'Bubalo',
        email: 'Matija.Bubalo@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent-doktorand',
        phone: null,
        departemnt: 'elektroenergetika',
        officeID: 'B 310',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbubalo',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Mario',
        lastName: 'Cvetković',
        email: 'Mario.Cvetkovic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mcvetkov.jpg',
        position: 'docent',
        phone: '305812',
        departemnt: 'elektroenergetika',
        officeID: 'B 312',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mcvetkov',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Marin',
        lastName: 'Despalatović',
        email: 'Marin.Despalatovic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/despi.jpg',
        position: 'izvanredni profesor',
        phone: '305813',
        departemnt: 'elektroenergetika',
        officeID: 'B 313',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/despi',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Tonko',
        lastName: 'Garma',
        email: 'Tonko.Garma@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/garma.jpg',
        position: 'izvanredni profesor',
        phone: '305803',
        departemnt: 'elektroenergetika',
        officeID: 'A 234',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/garma',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Željko',
        lastName: 'Gladina',
        email: 'Zeljko.Gladina@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/glad.jpg',
        position: null,
        phone: '305742',
        departemnt: 'elektroenergetika',
        officeID: 'A 252',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/glad',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Ranko',
        lastName: 'Goić',
        email: 'Ranko.Goic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: null,
        position: 'redoviti profesor',
        phone: '305604',
        departemnt: 'elektroenergetika',
        officeID: 'A 304',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/rgoic',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Ivan',
        lastName: 'Grgić',
        email: 'Ivan.Grgic.00@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent',
        phone: '305612',
        departemnt: 'elektroenergetika',
        officeID: 'A 312',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/igrgic00',
        createdAt: '2020-09-01T19:53:16.872Z',
        updatedAt: '2020-09-01T19:53:16.872Z'
      },
      {
        firstName: 'Mile',
        lastName: 'Grulović',
        email: 'Mile.Grulovic@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/grulovic.jpg',
        position: null,
        phone: '305817',
        departemnt: 'elektroenergetika',
        officeID: 'B 317',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/grulovic',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Nedjeljka',
        lastName: 'Grulović-Plavljanić',
        email: 'Nedjeljka.Grulovic-Plavljanic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/gneda.jpg',
        position: 'docent',
        phone: '305727',
        departemnt: 'elektroenergetika',
        officeID: 'A 306',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/gneda',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Damir',
        lastName: 'Jakus',
        email: 'Damir.Jakus@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dajakus.jpg',
        position: 'izvanredni profesor',
        phone: '305807',
        departemnt: 'elektroenergetika',
        officeID: 'B 307',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dajakus',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Danijel',
        lastName: 'Jolevski',
        email: 'Danijel.Jolevski@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/djolevsk.jpg',
        position: 'docent',
        phone: '305804',
        departemnt: 'elektroenergetika',
        officeID: 'B 304',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/djolevsk',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Ivica',
        lastName: 'Jurić-Grgić',
        email: 'Ivica.Juric-Grgic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ijuricgr.jpg',
        position: 'izvanredni profesor',
        phone: '305811',
        departemnt: 'elektroenergetika',
        officeID: 'B 311',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ijuricgr',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Ante',
        lastName: 'Kriletić',
        email: 'Ante.Kriletic@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: null,
        phone: '305744',
        departemnt: 'elektroenergetika',
        officeID: 'A 254',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akrileti',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Ivan',
        lastName: 'Krolo',
        email: 'Ivan.Krolo@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ikrolo.jpg',
        position: 'asistent',
        phone: '305603',
        departemnt: 'elektroenergetika',
        officeID: 'A 303',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ikrolo',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Antonijo',
        lastName: 'Kunac',
        email: 'Antonijo.Kunac.00@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent-doktorand',
        phone: '305745',
        departemnt: 'elektroenergetika',
        officeID: 'B 303',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/akunac00',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Dino',
        lastName: 'Lovrić',
        email: 'Dino.Lovric@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/dlovric.jpg',
        position: 'docent',
        phone: '305805',
        departemnt: 'elektroenergetika',
        officeID: 'B 305',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/dlovric',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Rino',
        lastName: 'Lucić',
        email: 'Rino.Lucic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/rlucic.jpg',
        position: 'redoviti profesor - trajno zvanje',
        phone: '305611',
        departemnt: 'elektroenergetika',
        officeID: 'A 311',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/rlucic',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Goran',
        lastName: 'Majić',
        email: 'Goran.Majic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/gomajic.jpg',
        position: 'docent',
        phone: '305610',
        departemnt: 'elektroenergetika',
        officeID: 'A 310',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/gomajic',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Marin',
        lastName: 'Mandić',
        email: 'Marin.Mandic.00@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent',
        phone: '305915',
        departemnt: 'elektroenergetika',
        officeID: 'A 228',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mmandi00',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Tonći',
        lastName: 'Modrić',
        email: 'Tonci.Modric@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/tmodric.jpg',
        position: 'izvanredni profesor',
        phone: '305630',
        departemnt: 'elektroenergetika',
        officeID: 'A 307',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tmodric',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Ivica',
        lastName: 'Penga',
        email: 'Ivica.Penga@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ipenga.jpg',
        position: null,
        phone: '305616',
        departemnt: 'elektroenergetika',
        officeID: 'A 316',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ipenga',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Ivan',
        lastName: 'Penović',
        email: 'Ivan.Penovic@fesb.hr  penović.ivan@gmail.com',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ipenovic.jpg',
        position: null,
        phone: '305620',
        departemnt: 'elektroenergetika',
        officeID: 'A 320',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ipenovic',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Ante',
        lastName: 'Rubić',
        email: 'Ante.Rubic@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: 'asistent',
        phone: null,
        departemnt: 'elektroenergetika',
        officeID: 'B 303',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/arubic',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Dražen',
        lastName: 'Rubinić',
        email: 'Drazen.Rubinic@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/drubinic.jpg',
        position: null,
        phone: '305704',
        departemnt: 'elektroenergetika',
        officeID: 'A 244',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/drubinic',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Silvestar',
        lastName: 'Šesnić',
        email: 'Silvestar.Sesnic@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ssesnic.jpg',
        position: 'izvanredni profesor',
        phone: '305814',
        departemnt: 'elektroenergetika',
        officeID: 'B 314',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ssesnic',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Josip',
        lastName: 'Vasilj',
        email: 'Josip.Vasilj@fesb.hr',
        function: null,
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jvasilj.jpg',
        position: 'docent',
        phone: '305696',
        departemnt: 'elektroenergetika',
        officeID: 'A 227',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jvasilj',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
      },
      {
        firstName: 'Stipe',
        lastName: 'Vodopija',
        email: 'Stipe.Vodopija@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/svodopij.jpg',
        position: 'asistent',
        phone: '305629',
        departemnt: 'elektroenergetika',
        officeID: 'B 302',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/svodopij',
        createdAt: '2020-09-01T19:53:16.873Z',
        updatedAt: '2020-09-01T19:53:16.873Z'
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
