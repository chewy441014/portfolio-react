const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Preston Hill',
  role: 'Full Stack Web Developer',
  description:
    'Full Stack Web Dev with experience in the MERN stack and JavaScript through the UT Austin Coding Bootcamp. With a background in mechanical engineering, I have ample experience with analytic problem solving, team projects and mechanical design. My recent work experiences have polished my communication, customer service, time management and learning ability both at Anton Paar and Starship Technology. During my first month at Starship, I pushed the Houston location to 100% robot health. At Anton Paar, I regularly provided consultations to peers when they were in the field and in need of root cause analysis and deeper technical knowledge. Finally, during the UT Austin Coding Bootcamp, one of the projects I contributed to was a website which can coordinate national parks data, location data, directions and weather data in a convenient format for planning nature outings; feel free to reach out for details. With these experiences and skills I have helped bring dozens of team projects to fruition, in undergrad, grad school, during employment and during the UT Austin Coding Bootcamp.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/hillpreston/',
    github: 'https://github.com/chewy441014',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Park Picker',
    description:
      'Finding resources in one place for planning camping, hiking or other trips to the US National Parks can be a challenge, so we created Park Picker to give National Parks, weather data, and directions in once place. This full stack web app boasts a fully hosted backend, and database. The backend is hosted on Heroku, and the database is hosted by MongoDB Atlas. The webpage utilizes a React front end, Axios API calls, fully integrated user login and signup with options to save results when logged in. Enter a location and select an activity (camping, hiking, swimming, etc...) to view the closest parks where that activity is available. After searching, the 10 closest National Parks where the chosen activity is available are displayed. Click on the resulting park cards to view more information, including a driving route, park details and forecast. During this project, my role was Full Stack Web Developer integrating the front and back end together, setting up the express server, routes, building several components and structuring the project.',
    stack: ["Javascript", "National Parks API", "Mapquest API", "Weatherbit API", "Express", "Node", "Apollo", "GraphQL", "MongoDB", "JWT", "React", "Mongoose", "Bootstrap", "Heroku"],
    sourceCode: 'https://github.com/chewy441014/park-picker',
    livePreview: 'https://park-picker-react.herokuapp.com/',
  },
  {
    name: 'Park Picker',
    description:
      'Finding resources in one place for planning camping, hiking or other trips to the US National Parks can be a challenge, so we created Park Picker to give National Parks, weather data, and directions in once place. This full stack web app boasts a fully hosted backend, and database. The backend is hosted on Heroku, and the database is hosted by MongoDB Atlas. The webpage utilizes a React front end, Axios API calls, fully integrated user login and signup with options to save results when logged in. Enter a location and select an activity (camping, hiking, swimming, etc...) to view the closest parks where that activity is available. After searching, the 10 closest National Parks where the chosen activity is available are displayed. Click on the resulting park cards to view more information, including a driving route, park details and forecast. During this project, my role was Full Stack Web Developer integrating the front and back end together, setting up the express server, routes, building several components and structuring the project.',
    stack: ["Javascript", "National Parks API", "Mapquest API", "Weatherbit API", "Express", "Node", "Apollo", "GraphQL", "MongoDB", "JWT", "React", "Mongoose", "Bootstrap", "Heroku"],
    sourceCode: 'https://github.com/chewy441014/park-picker',
    livePreview: 'https://park-picker-react.herokuapp.com/',
  },
  {
    name: 'Park Picker',
    description:
      'Finding resources in one place for planning camping, hiking or other trips to the US National Parks can be a challenge, so we created Park Picker to give National Parks, weather data, and directions in once place. This full stack web app boasts a fully hosted backend, and database. The backend is hosted on Heroku, and the database is hosted by MongoDB Atlas. The webpage utilizes a React front end, Axios API calls, fully integrated user login and signup with options to save results when logged in. Enter a location and select an activity (camping, hiking, swimming, etc...) to view the closest parks where that activity is available. After searching, the 10 closest National Parks where the chosen activity is available are displayed. Click on the resulting park cards to view more information, including a driving route, park details and forecast. During this project, my role was Full Stack Web Developer integrating the front and back end together, setting up the express server, routes, building several components and structuring the project.',
    stack: ["Javascript", "National Parks API", "Mapquest API", "Weatherbit API", "Express", "Node", "Apollo", "GraphQL", "MongoDB", "JWT", "React", "Mongoose", "Bootstrap", "Heroku"],
    sourceCode: 'https://github.com/chewy441014/park-picker',
    livePreview: 'https://park-picker-react.herokuapp.com/',
  },
  {
    name: 'Park Picker',
    description:
      'Finding resources in one place for planning camping, hiking or other trips to the US National Parks can be a challenge, so we created Park Picker to give National Parks, weather data, and directions in once place. This full stack web app boasts a fully hosted backend, and database. The backend is hosted on Heroku, and the database is hosted by MongoDB Atlas. The webpage utilizes a React front end, Axios API calls, fully integrated user login and signup with options to save results when logged in. Enter a location and select an activity (camping, hiking, swimming, etc...) to view the closest parks where that activity is available. After searching, the 10 closest National Parks where the chosen activity is available are displayed. Click on the resulting park cards to view more information, including a driving route, park details and forecast. During this project, my role was Full Stack Web Developer integrating the front and back end together, setting up the express server, routes, building several components and structuring the project.',
    stack: ["Javascript", "National Parks API", "Mapquest API", "Weatherbit API", "Express", "Node", "Apollo", "GraphQL", "MongoDB", "JWT", "React", "Mongoose", "Bootstrap", "Heroku"],
    sourceCode: 'https://github.com/chewy441014/park-picker',
    livePreview: 'https://park-picker-react.herokuapp.com/',
  },
  {
    name: 'Park Picker',
    description:
      'Finding resources in one place for planning camping, hiking or other trips to the US National Parks can be a challenge, so we created Park Picker to give National Parks, weather data, and directions in once place. This full stack web app boasts a fully hosted backend, and database. The backend is hosted on Heroku, and the database is hosted by MongoDB Atlas. The webpage utilizes a React front end, Axios API calls, fully integrated user login and signup with options to save results when logged in. Enter a location and select an activity (camping, hiking, swimming, etc...) to view the closest parks where that activity is available. After searching, the 10 closest National Parks where the chosen activity is available are displayed. Click on the resulting park cards to view more information, including a driving route, park details and forecast. During this project, my role was Full Stack Web Developer integrating the front and back end together, setting up the express server, routes, building several components and structuring the project.',
    stack: ["Javascript", "National Parks API", "Mapquest API", "Weatherbit API", "Express", "Node", "Apollo", "GraphQL", "MongoDB", "JWT", "React", "Mongoose", "Bootstrap", "Heroku"],
    sourceCode: 'https://github.com/chewy441014/park-picker',
    livePreview: 'https://park-picker-react.herokuapp.com/',
  },
  {
    name: 'Park Picker',
    description:
      'Finding resources in one place for planning camping, hiking or other trips to the US National Parks can be a challenge, so we created Park Picker to give National Parks, weather data, and directions in once place. This full stack web app boasts a fully hosted backend, and database. The backend is hosted on Heroku, and the database is hosted by MongoDB Atlas. The webpage utilizes a React front end, Axios API calls, fully integrated user login and signup with options to save results when logged in. Enter a location and select an activity (camping, hiking, swimming, etc...) to view the closest parks where that activity is available. After searching, the 10 closest National Parks where the chosen activity is available are displayed. Click on the resulting park cards to view more information, including a driving route, park details and forecast. During this project, my role was Full Stack Web Developer integrating the front and back end together, setting up the express server, routes, building several components and structuring the project.',
    stack: ["Javascript", "National Parks API", "Mapquest API", "Weatherbit API", "Express", "Node", "Apollo", "GraphQL", "MongoDB", "JWT", "React", "Mongoose", "Bootstrap", "Heroku"],
    sourceCode: 'https://github.com/chewy441014/park-picker',
    livePreview: 'https://park-picker-react.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'MongoDB',
  'Express',
  'Node',
  'CSS',
  'JavaScript',
  'React',
  'Git',
  'Python',
  'Matlab',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'preston.leon.hill@gmail.com',
}

export { header, about, projects, skills, contact }
