new Vue({
  el: '#app',
  data: {
    jumboIDX: 0,
    studentReviewIDX: 0,
    choiceLearningIDX: 0,
    coursesIDX: 0,
    menuNav:['HOME', 'COURSES', 'INSTRUCTORS', 'EVENTS', 'PAGES', 'ELEMENTS'],
    textJumbotron: [
      {
        title: 'Conteporary Ideas',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        textButton: 'REGISTER NOW',
        imgBg: '9',
      },
      {
        title: 'Lesson Where You Want',
        text: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
        textButton: 'FIND OUT',
        imgBg: '4',
      },
      {
        title: 'Top Teacher',
        text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        textButton: 'MORE INFO',
        imgBg: '10',
      }
    ],
    courses: [
      {
        icon: '-1',
        name: 'Languages'
      },
      {
        icon: '-2',
        name: 'Software'
      },
      {
        icon: '-3',
        name: 'Business'
      },
      {
        icon: '-4',
        name: 'Chemistry'
      },
      {
        icon: '-5',
        name: 'Science'
      },
      {
        icon: '-6',
        name: 'DIY&Craft'
      },
    ],
    studentsReview: [
      {
        studentImg: '2',
        review: `"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."`,
        name: 'Joan Collins',
        grade: 'STUDENT'
      },
      {
        studentImg: '4',
        review: `"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."`,
        name: 'Pina Sinalefe',
        grade: 'NEW GRADUATE'
      },
      {
        studentImg: '3',
        review: `"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"`,
        name: 'Herbert Ballerina',
        grade: 'TEACHER'
      },
    ],

    possibilitiesChoices: [
      {
        tabName: 'What We Do',
        title: 'Learning Possibilities',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        flagList: true,
        listItem: [
          'We enrich lives through learning.',
          'Maximizing potential through individual attention.',
          'The trusted name for specialized training.',
          'People teach. People learn. This is where they connect.'
        ],
        imgPath: '-4'
      },
      {
        tabName: 'Degree Programme',
        title: 'The Future Is Now',
        description: 'Lorem ipsum dolor sit amet. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        flagList: true,
        listItem: [
          'Duis aute irure dolor in reprehenderit.',
          'Esse cillum dolore eu fugiat nulla pariatur.',
          'Fugiat nulla pariatur lorem ipsum dolor sit amet ullamco.',
        ],
        imgPath: '-1'
      },
      {
        tabName: 'Career Achievements',
        title: 'Professionals Of Tomorrow',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet. ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        flagList: true,
        listItem: [
          'Ut enim ad minim veniam, quis nostrud exercitation.',
          'Duis aute irure dolor in reprehenderit in voluptate.',
          'Adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          'Incididunt ut labore et dolore magna aliqua.',
          'Ipsum dolor sit amet.'
        ],
        imgPath: '-2'
      },
      {
        tabName: 'Personal Management',
        title: 'Your Tutor. Your Way.',
        description: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        flagList: true,
        listItem: [
          'Duis aute irure dolor in reprehenderit.',
          'Esse cillum dolore eu fugiat nulla pariatur.'
        ],
        imgPath: '-3'
      },
      {
        tabName: 'Steps To Success',
        title: 'Hit Your Goals',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        flagList: true,
        listItem: [
          'Ipsum dolor sit amet',
          'Duis aute irure dolor in reprehenderit in voluptate.',
          'Adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          'Duis aute irure dolor in reprehenderit.'
        ],
        imgPath: '-5'
      },
      {
        tabName: 'Knowledge Transfer',
        title: 'Learn By Doing',
        description: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        flagList: true,
        listItem: [
          'Fugiat nulla pariatur lorem ipsum dolor sit amet ullamco.',
          'Duis aute irure dolor in reprehenderit.',
          'Esse cillum dolore eu fugiat nulla pariatur.',
        ],
        imgPath: '-6'
      },
    ],

    popularCourses: [
      {
        arrayCourses: [
          {
          img: '5',
          name: 'Android Developer',
          teacher: 'David Sanders',
          price: 'FREE',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          placeAvailable: '1',
          typeOfCourse: 'PROGRAMMING',
          },
          {
            img: '6',
            name: 'Web Designing',
            teacher: 'Jennifer Powell',
            price: 'FREE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            placeAvailable: '1',
            typeOfCourse: 'PROGRAMMING',
          },
          {
            img: '12',
            name: 'Financial Modelling',
            teacher: 'David Sanders',
            price: '$20',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            placeAvailable: '1',
            typeOfCourse: 'BUSINESS',
          }
        ]
      },

      {
        arrayCourses: [
          {
            img: '2',
            name: 'Business English',
            teacher: 'Preston Marshall',
            price: '30$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            placeAvailable: '1',
            typeOfCourse: 'LANGUAGES',
          },
          {
            img: '7',
            name: 'Social Computing',
            teacher: 'David Sanders',
            price: 'FREE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            placeAvailable: '1',
            typeOfCourse: 'PROGRAMMING',
          },
          {
            img: '11',
            name: 'Learn Spanish',
            teacher: 'Jennifer King',
            price: '30$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            placeAvailable: '1',
            typeOfCourse: 'LANGUAGES',
          }
        ]
      },

      {
        arrayCourses: [
          {
            img: '1',
            name: 'Basic Marketing',
            teacher: 'Edward Woodman',
            price: '20$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            placeAvailable: '1',
            typeOfCourse: 'PROGRAMMING',
          },
          {
            img:'3',
            name: 'Academic English',
            teacher: 'John Doe',
            price: 'FREE',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            placeAvailable: '1',
            typeOfCourse: 'LANGUAGES',
          },
          {
            img: '9',
            name: 'Economics of financial markets',
            teacher: 'Mario Draghi',
            price: '30$',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            placeAvailable: '1',
            typeOfCourse: 'BUSINESS',
          },
        ]
      },
    ],
  },

  methods: {
    imageJumbo: function() {
      const icon = this.textJumbotron[this.jumboIDX].imgBg;
      const imageString = `img/course-${icon}-f-img.jpg`;
      return imageString;
    },

    imageStudent: function() {
      const icon = this.studentsReview[this.studentReviewIDX].studentImg;
      const imageString = `img/testimonials-standard-${icon}.png`;
      return imageString;
    },

    imagePossChoice: function() {
      const icon = this.possibilitiesChoices[this.choiceLearningIDX].imgPath;
      const imageString = `img/h3-custom-icon${icon}.png`;
      return imageString;
    },

    imagePopularCourses: function(index) {
      const icon = this.popularCourses[this.coursesIDX].arrayCourses[index].img;
      const imageString = `img/course-${icon}-f-img.jpg`;
      return imageString;
    },

    imageCourse: function(index) {
      const icon = this.courses[index].icon;
      const imageString = `img/h5-custom-icon${icon}.png`;
      return imageString;
    },

    classTab: function(index) {
      if (index === this.choiceLearningIDX) {
        return 'choice selected';
      } else {
        return 'choice';
      }
    },

    coloraPallino: function(index, idx) {
      if(index === idx) {
        return 'fas fa-circle active';
      } else {
        return 'fas fa-circle';
      }
    }
  }
});//end vue app

Vue.config.devtools = true;
