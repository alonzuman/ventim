import { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
const Users = db.collection('users');

const useProfile = () => {
  const user = auth.currentUser;
  const [error, setError] = useState('');
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const createProfile = () => {
    const { uid, displayName, photoURL, phoneNumber, email } = user;

    Users.doc(uid).set({
      displayName,
      photoURL,
      phoneNumber,
      email,
      createdAt: Date.now()
    }, { merge: true }).then(() => {
      fetchProfile();
    })
  }

  const fetchProfile = () => {
    const { uid } = user;
    setIsLoading(true);

    Users.doc(uid).get()
      .then(snapshot => {
        if (snapshot.exists) {
          const fetchedUser = {
            id: snapshot.id,
            ...snapshot.data()
          }
          setIsLoading(false)
          return setProfile(fetchedUser);
        } else {
          return createProfile();
        }
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      })
  }

  useEffect(() => {
    if (user && !profile) {
      return fetchProfile();
    }
  }, [user])

  return { isLoading, profile, error, fetchProfile }
}

export default useProfile;
