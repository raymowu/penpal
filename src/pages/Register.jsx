import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import "../style.scss";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import logo from '../img/logo.png'; // Adjust the path as needed

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!agreeToTerms) {
      alert("Please agree to the terms and conditions.");
      setLoading(false);
      return;
    }
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    if (displayName.length === 0) {
      alert("Please input all fields!");
      setLoading(false);
      return;
    }
    if (password.length <= 6) {
      alert("Password must be at least 6 characters!");
      setLoading(false);
      return;
    }
    // create user in firebase
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // upload profile picture
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      await uploadBytesResumable(storageRef, file).then(() => {
        // 404 here 🤔
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // users firebase
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            // conversations firebase
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
            window.location.reload();
          } catch (err) {
            setErr(true);
            setLoading(false);
            console.log(err);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> <img src={logo} alt="PenPal Connect Logo"style={{ width: '50px', height: 'auto' }}></img>PenPal Connect</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="add avatar" />
            <span>Add an avatar</span>
          </label>
            <input type="checkbox" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} />
            <p>I have received parental consent to use PenPals. </p>
          <button>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
