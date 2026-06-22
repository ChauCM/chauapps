import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

// Firebase web config is public by design (it identifies the project, it is not
// a secret). Access is controlled by Firestore security rules + App Check.
const firebaseConfig = {
  apiKey: 'AIzaSyDwMuK11CoUypWpp_WEkv1E7gOKiBz4EWs',
  authDomain: 'chauapps-com.firebaseapp.com',
  projectId: 'chauapps-com',
  storageBucket: 'chauapps-com.firebasestorage.app',
  messagingSenderId: '851049257691',
  appId: '1:851049257691:web:541b51fb52d92ba10e0afe',
  measurementId: 'G-819MW9RXNX',
}

export const app = initializeApp(firebaseConfig)

// --- App Check (anti-abuse) -------------------------------------------------
// reCAPTCHA v3 site key is also public (it's meant for the browser). Leaving
// this empty disables App Check so the counter still works before enrollment.
// Set it once App Check is enabled in the Firebase console (Phase 2), then flip
// Firestore enforcement on. See SETUP notes.
const RECAPTCHA_SITE_KEY = ''

if (RECAPTCHA_SITE_KEY) {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
    isTokenAutoRefreshEnabled: true,
  })
}

export const db = getFirestore(app)
