import { auth } from './firebaseAuth.js';
import { onAuthStateChanged } from 'firebase/auth';

export const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const token = await user.getIdToken();
          resolve({ uid: user.uid, token });
        } catch (error) {
          reject(new Error('Не удалось получить token'));
        }
      } else {
        reject(new Error('Пользователь не авторизован'));
      }
    });
  });
};
