import GoodWritesBackground from '../backgrounds/goodwrites.png'
import Ck2CharacterBuilderBackground from '../backgrounds/ck2_character_builder.png'
import StockyBackground from '../backgrounds/stocky.png'

const DOMAIN_NAME = 'solomonfeldman.dev'
const GIT_HUB = 'https://github.com/SolomonRFeldman/'

const GOOD_WRITES = {
  id: 2,
  name: 'Good Writes',
  repo: `${GIT_HUB}good-writes`,
  website: `https://goodwrites.${DOMAIN_NAME}`,
  background: GoodWritesBackground,
  description: 'Writers workshop Rails/React App where users can share and workshop their writing',
  bullets: [
    "Rails API backend with endpoints for users, groups, and pieces",
    "Alternative login through Github OAuth",
    "React / Redux frontend user interface with bootstrap styling",
    "JSON web tokens and localStorage to encrypt and store user information",
    "Converted from full Rails front/back end app to Rails/React app",
    "Test Driven Development with RSpec for backend"
  ]
}

const CK2_CHARACTER_BUILDER = {
  id: 1,
  name: 'CKII Character Builder',
  repo: `${GIT_HUB}ck2-character-builder`,
  website: `https://ck2characterbuilder.${DOMAIN_NAME}`,
  background: Ck2CharacterBuilderBackground,
  description: 'Character Builder/Planner for persisting Crusader Kings II custom character builds',
  bullets: [
    "ES6 Vanilla Javascript syntax to program frontend interactions",
    "Vanilla Javascript front end to React",
    "Dockerized front and back end",
    "Containerized using docker-compose",
    "Stylized and scripted with bootstrap, bootstrap-native, and react-bootstrap",
    "Rails API backend that fetches and stores character data",
    "Fully tested front end with Jest and React-Testing-Library",
    "Directes traffic to the right port using Haproxy on the website’s server",
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
    '3rd party api provides up to date stock information'
  ]
}

const PROJECTS = [
  CK2_CHARACTER_BUILDER,
  GOOD_WRITES,
  STOCKY
]

export default PROJECTS