const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://chewy441014.github.io/portfolio-react/',
  title: 'Preston Hill Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Preston Hill',
  role: 'Full Stack Web Developer',
  description:
    'Full Stack Web Dev with experience in the MERN stack and JavaScript through the UT Austin Coding Bootcamp. With a background in mechanical engineering, I have ample experience with analytic problem solving, team projects and mechanical design. My recent work experiences have polished my communication, customer service, time management and learning ability both at Anton Paar and Starship Technology. During my first month at Starship, I pushed the Houston location to 100% robot health. At Anton Paar, I regularly provided consultations to peers when they were in the field and in need of root cause analysis and deeper technical knowledge. Finally, during the UT Austin Coding Bootcamp, one of the projects I contributed to was a website which can coordinate national parks data, location data, directions and weather data in a convenient format for planning nature outings; feel free to reach out for details. With these experiences and skills I have helped bring dozens of team projects to fruition, in undergrad, grad school, during employment and during the UT Austin Coding Bootcamp.',
  resume: 'https://chewy441014.github.io/portfolio-react/Hill_Preston_Resume_Web_Dev.pdf',
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
    name: 'Note Taker',
    description:
      'View, create and delete notes in this simple web app, hosted on Heroku. To create a new note, click the plus in the top right. To save a note, press the save button in the top right, and to view a note, click the note on the left, and the note will be displayed.',
    stack: ["Node", "Express", "Javascript"],
    sourceCode: 'https://github.com/chewy441014/notes-tracker',
    livePreview: 'https://notes-tracker-preston.herokuapp.com/',
  },
  {
    name: 'Code Quiz',
    description:
      "This quiz will help you polish your vanilla Javascript and jQuery knowledge. It is a web app with ten questions on Javascript topics, for each wrong answer, 15 seconds is deducted and with a time limit of 75 seconds, this quiz is quite hard. I recommend doing it multiple times. At the end, your score will be recorded with your name or initials, and you can see high scores from anyone who has done the quiz on your web browser! To use this web app, simply go to the Github pages link and click start or view leaderboard if you'd like to scope out the competition first. If you run out of time, you get a score of zero, if you answer incorrectly and the time deduction reduces the time to zero, you get a score of zero.",
    stack: ["Javascript", "HTML", "CSS"],
    sourceCode: 'https://github.com/chewy441014/Code-Quiz',
    livePreview: 'https://chewy441014.github.io/Code-Quiz/',
  },
  {
    name: 'Tech Blog',
    description:
      'Share your professional ideas on this blog style forum! This full stack web app which allows users to communicate in a blog like format. Hosted on Heroku, the tech blog utilizes MVC (Model, View, Controller) to structure the development files. It also integrates a hosted database to store users, posts, and comments using MySQL and JawsDB hosting service.',
    stack: ["Javascript", "Jquery", "Bootstrap", "Handlebars", "Sequilize", "MySQL", "Node", "Express", "Heroku"],
    sourceCode: 'https://github.com/chewy441014/tech-blog',
    livePreview: 'https://tech-blog-preston.herokuapp.com/',
  },
  {
    name: 'Travel Weather Check',
    description:
    "This web app allows you to search for a five day forecast in any city. Utilizing jQuery, the webpage is dynamically updated with data from a weather API based on the user's input. Using localstorage, a search history column is stored and generated in real time based on user input. Search on the left for the five day forecast and current weather of a city. Hit enter or click the search button. The search is saved underneath the search bar and you can click it to see up to date weather info for that city again.",
    stack: ["Javascript", "JQuery", "Bootstrap", "AJAX"],
    sourceCode: 'https://github.com/chewy441014/Travel-Weather-Check',
    livePreview: 'https://chewy441014.github.io/Travel-Weather-Check/',
  },
  {
    name: 'Lewis Wholesale Co Landing Page',
    description: "This is a Next.js based landing page for Lewis Wholesale Co. ™️ created by hand. I used a simple design, so that information about the company and services are easy to grasp and easy to see. This was my first project using both Next.js and Tailwind CSS and both are effective tools for web development.",
    stack: ["Next.js", "Tailwind CSS", "Javascript", "NPM"],
    sourceCode: 'https://github.com/chewy441014/lewis_wholesale',
    livePreview: 'https://github.com/chewy441014/lewis_wholesale',
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
  'Azure Fundamentals'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'preston.leon.hill@gmail.com',
}

export { header, about, projects, skills, contact }
