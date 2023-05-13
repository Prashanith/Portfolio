// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwFv9niFSyX1ttRA2TMxidN5lP8MVPOs8",
  authDomain: "portfolio007-75ef2.firebaseapp.com",
  projectId: "portfolio007-75ef2",
  storageBucket: "portfolio007-75ef2.appspot.com",
  messagingSenderId: "1054014881296",
  appId: "1:1054014881296:web:273ec0a1b0a8f5b54dd495",
  measurementId: "G-GZ9YND4GWF",
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
