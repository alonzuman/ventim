import { useEffect, useState } from 'react';
import { db } from '../firebase';
import useAuth from './useAuth';
const Users = db.collection('users');

const useProfile = () => {
  const { user } = useAuth();
  const [error, setError] = useState('');
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const createProfile = (user) => {
    const { uid, displayName, photoURL, phoneNumber, email } = user;

    Users.doc(uid).set({
      displayName,
      photoURL,
      phoneNumber,
      email,
      createdAt: Date.now()
    }, { merge: true }).then(() => {
      fetchProfile(user);
    })
  }

  const fetchProfile = (user) => {
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
          return createProfile(user);
        }
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
      })
  }

  useEffect(() => {
    if (user && !profile) {
      return fetchProfile(user);
    }
  }, [user])

  return { isLoading, profile, error, fetchProfile }
}

export default useProfile;
