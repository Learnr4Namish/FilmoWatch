import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, HomeApp} from './App.js';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getStorage, ref } from "firebase/storage"
  import {doc, getDoc, getFirestore, exists} from "firebase/firestore"
  const firebaseConfig = {
    apiKey: "AIzaSyAGHLJ9I7OFzSFrllguQOUFV01Qkg-y8eY",
    authDomain: "filmowatch-793d3.firebaseapp.com",
    projectId: "filmowatch-793d3",
    storageBucket: "filmowatch-793d3.appspot.com",
    messagingSenderId: "507433204772",
    appId: "1:507433204772:web:09f1d3b826c905dbf52cb1",
    measurementId: "G-60BF76H4P7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const storage = getStorage();
  const storageRef = ref(storage, 'images/space.jpeg');
  const db = getFirestore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < App/>
);
const homePage = ReactDOM.createRoot(document.getElementById("homePage"));
homePage.render(
  <HomeApp/>
)
getDoc(doc(db, "allVideos", "allVideos")).then(docSnap => {
  if (docSnap.exists()) {
    for (var keyDat in docSnap.data()) {
      if (docSnap.data().hasOwnProperty(keyDat)) {
          console.log(docSnap.data()[keyDat]);
          var everyVideoSource = docSnap.data()[keyDat];
          var tokenFor = keyDat;
          console.log(tokenFor)
          getDoc(doc(db, "FilmoWatchVideos", keyDat)).then(docSnapNew => {
            if (docSnapNew.exists()) {
              const everyVideoPoster = docSnapNew.data().videoPoster;
              const everyVideoText = docSnapNew.data().videoTitle;
             /* return (
                <div className='homePageFragment'>
                  <p className='brandText'>{String(brandName)}</p>
                  <div id="videoZone" className='videoZone'>
                  </div>
                </div>
             )*/;
        document.getElementById("videoZone").innerHTML += "<video poster='" + String(everyVideoPoster) + "'" + " controls>" + "<source src='" + String(everyVideoSource) + "'</source>" + "</video>" + "<p>" + String(everyVideoText) + "</p>";
             document.getElementById("circluarProgressVideoLoading").style.display = "none";
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
       }
      
  }
  } else {
    console.log("No such document!");
  }
  })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
