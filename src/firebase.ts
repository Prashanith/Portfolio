// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage();

async function download_resume() {
  getDownloadURL(ref(storage, "/prashanith_resume.pdf"))
    .then((url) => {
      fetch(url)
        .then((res) => res.blob())
        .then((file) => {
          const tempUrl = URL.createObjectURL(file);
          const aTag = document.createElement("a");
          aTag.href = tempUrl;
          aTag.download = url.replace(/^.*[\\\/]/, "");
          document.body.appendChild(aTag);
          aTag.click();

          URL.revokeObjectURL(tempUrl);
          aTag.remove();
        })
        .catch(() => {
          alert("Failed to download file!");
        });
    })
    .catch((error) => {
      console.log(error);

      // Handle any errors
    });
}

export { db, download_resume };
