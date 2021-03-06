import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/analytics'

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()
const analytics = firebase.analytics()

export interface RoomQuestionType {
  key: string
  content: string
  isAnswered: boolean
  isHighlighted: boolean
  author: {
    name: string
    photoURL: string
  }
  likeCount: number
  likeID: string | null
}

export interface RoomType {
  title: string
  authorID: string
  key: string
  questions: RoomQuestionType[]
}

export { app, auth, database, firebase, analytics }
