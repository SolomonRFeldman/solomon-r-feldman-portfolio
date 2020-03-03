import GoodWritesBackground from '../backgrounds/goodwrites.png'
import Ck2CharacterBuilderBackground from '../backgrounds/ck2_character_builder.png'
import StockyBackground from '../backgrounds/stocky.png'

const DOMAIN_NAME = 'solomonfeldman.dev'
const GIT_HUB = 'https://github.com/SolomonRFeldman/'

const GOOD_WRITES = {
  id: 1,
  name: 'Good Writes',
  repo: `${GIT_HUB}good-writes`,
  website: `https://goodwrites.${DOMAIN_NAME}`,
  background: GoodWritesBackground,
  description: 'Writers workshop Rails/React App where users can share and workshop their writing',
  bullets: [
    "Developed a Rails API backend with endpoints for users, groups, and pieces",
    "Enabled alternative login through Github OAuth",
    "Implemented React / Redux frontend user interface with bootstrap styling",
    "Utilized JSON web tokens and localStorage to encrypt and store user information",
    "Converted full Rails front/back end app to Rails/React app",
    "Utilized Test Driven Development with RSpec for backend"
  ]
}

const CK2_CHARACTER_BUILDER = {
  id: 2,
  name: 'CKII Character Builder',
  repo: `${GIT_HUB}ck2-character-builder`,
  website: `https://ck2characterbuilder.${DOMAIN_NAME}`,
  background: Ck2CharacterBuilderBackground,
  description: 'Character Builder/Planner for persisting Crusader Kings 2 custom character builds',
  bullets: [
    "Utilized ES6 Vanilla Javascript syntax to program frontend interactions",
    "Converted Vanilla Javascript front end to React",
    "Created a docker container out of both the front and backend",
    "Stylized and scripted user interface using bootstrap, bootstrap-native, and react-bootstrap",
    "Built Rails API backend to fetch and store character data",
    "Utilized Jest and React-Testing-Library to test the frontend",
    "Containerized using docker-compose",
    "Directed traffic to the right port using Haproxy on the website’s server",
    "Built UI and controls to be compatible with mobile"
  ]
}

const STOCKY = {
  id: 3,
  name: 'Stocky',
  repo: `${GIT_HUB}stocky`,
  website: `https://stocky.${DOMAIN_NAME}`,
  background: StockyBackground,
  description: 'Rails/React app for simulation stock buying/selling',
  bullets: [
    'Utilized 3rd party api to provide up to date stock information'
  ]
}

const PROJECTS = [
  GOOD_WRITES,
  CK2_CHARACTER_BUILDER,
  STOCKY
]

export default PROJECTS