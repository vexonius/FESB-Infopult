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
        departemnt: 'dekanat',
        officeID: 'A 218',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/gotovac',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Branimir',
        lastName: 'Lela',
        email: 'Branimir.Lela@fesb.hr',
        function: 'prodekan za nastavu',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/blela.jpg',
        position: 'izvanredni profesor',
        phone: '305772',
        departemnt: 'dekanat',
        officeID: 'A 216',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/blela',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Boris',
        lastName: 'Ljubenkov',
        email: 'Boris.Ljubenkov@fesb.hr',
        function: 'prodekan za znanost, istraživanje i stručni rad',
        title: 'Dr.sc.',
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/ljubenkov.jpg',
        position: 'izvanredni profesor',
        phone: '305774',
        departemnt: 'dekanat',
        officeID: 'A 202',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/ljubenkov',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
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
        departemnt: 'dekanat',
        officeID: 'A 215',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/vpapic',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Merica',
        lastName: 'Milković',
        email: 'Merica.Milkovic@fesb.hr',
        function: 'Tajnica fakulteta',
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/merica.jpg',
        position: null,
        phone: '305756',
        departemnt: 'dekanat',
        officeID: 'A 206',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/merica',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Mirjana',
        lastName: 'Simunić',
        email: 'Mirjana.Simunic@fesb.hr',
        function: 'Tajnica dekana',
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/msimunic.jpg',
        position: null,
        phone: '305770',
        departemnt: 'dekanat',
        officeID: 'A 217',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/msimunic',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Nada',
        lastName: 'Tokić',
        email: 'Nada.Tokic@fesb.hr',
        function: 'Voditeljica javne nabave',
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/tokic.jpg',
        position: null,
        phone: '305762',
        departemnt: 'dekanat',
        officeID: 'A 212',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/tokic',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Ana',
        lastName: 'Bakota Juginović',
        email: 'Ana.Bakota@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: null,
        phone: '305792',
        departemnt: 'dekanat',
        officeID: 'A 208',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/abakota',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Mirela',
        lastName: 'Bašić',
        email: 'Mirela.Basic@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/mbasic.jpg',
        position: null,
        phone: '305738',
        departemnt: 'dekanat',
        officeID: 'A 238',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/mbasic',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Ivona',
        lastName: 'Jadrijević-Cvrlje',
        email: 'goja@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/goja.jpg',
        position: null,
        phone: '305758',
        departemnt: 'dekanat',
        officeID: 'A 208',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/goja',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Milena',
        lastName: 'Radonić',
        email: 'Milena.Radonic@fesb.hr',
        function: null,
        title: null,
        photoUrl: null,
        position: null,
        phone: '305760',
        departemnt: 'dekanat',
        officeID: 'A 210',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/miradoni',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Snježana',
        lastName: 'Rizvan',
        email: 'Snjezana.Rizvan@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/snjezana.jpg',
        position: null,
        phone: '305759',
        departemnt: 'dekanat',
        officeID: 'A 209',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/snjezana',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
      },
      {
        firstName: 'Josip',
        lastName: 'Vukušić',
        email: 'Josip.Vukusic@fesb.hr',
        function: null,
        title: null,
        photoUrl: 'https://korisnik.fesb.unist.hr/slika/velika/jvukusic.jpg',
        position: null,
        phone: '305769',
        departemnt: 'dekanat',
        officeID: 'A 210',
        profilePage:
          'https://nastava.fesb.unist.hr/nastava/nastavnici/detalji/jvukusic',
        createdAt: '2020-09-01T15:21:32.190Z',
        updatedAt: '2020-09-01T15:21:32.190Z'
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
