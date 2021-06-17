// Add authorized domain:
// https://www.skies.dev/firebase-auth-domain#add-authorized-domains-to-firebase-auth

import './styles/Canban.css';
import { useState } from 'react';
import Back from './Back';

// Firebase SDK
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function Canban() {

  const [user] = useAuthState(auth);

  return <>
		<Back to="/" />
		<section id="canban">
			{ user ? <> <Dashboard /> <SignOut /> </> : <SignIn /> }
		</section>
		<i id="brand">Made by Francisco Elfers</i>
  </>
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button className="signin" onClick={signInWithGoogle}>
      <img src={process.env.PUBLIC_URL + '/google.svg'} alt="google logo" />
    </button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button className="signout" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function Dashboard() {
  const { uid } = auth.currentUser;
  const notesRef = firestore.collection('notes');
  const query = notesRef.orderBy('createdAt');
  
  let [notes] = useCollectionData(query, {idField: 'id'});

  if (notes) {
    // This thing right here is bad
    // It should filter before making the data request, but .where('','','') isn't working
    // When the db gets too big, it will be slower over time
    notes = notes.filter(i => i.uid == uid);
  }

  const [formValue, setFormValue] = useState('');

  const sendNote = async(e) => {
    e.preventDefault();

    await notesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid
    })

    setFormValue('');
  }

  return (
    <>
      <div>
        {notes && notes.map(note => <NoteList key={note.id} data={note} />) || '⏳'}
      </div>
      <form onSubmit={sendNote}>
        <input value={formValue} onChange={e => setFormValue(e.target.value)} />
        <button type="submit" title="Subir nota">📝</button>
      </form>
    </>
  )
}

function NoteList(props) {
  const { id, text, uid } = props.data;
  // const noteClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  const deleteNote = () => {
    firestore.collection('notes').doc(id).delete()
      .then(() => console.log('Document siccessfully deleted!'))
      .catch(error => console.error('Error removing document: ', error))
  }

  return (
    <div className='nota'>
      <p>{text}</p>
      <button onClick={deleteNote} title="Borrar nota">🗑️</button>
    </div>
  );
}

export default Canban;
