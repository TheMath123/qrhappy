import { firebase, auth } from '../services/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export function SignIn() {

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',

    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/home',

    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      'microsoft.com',
      'yahoo.com'
    ],

    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => true,
    },
  };

  return (
    <StyledFirebaseAuth 
      uiConfig={uiConfig}
      firebaseAuth={auth}
    />
  )
}
