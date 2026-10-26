"use client";

import { useState } from "react";

export default function PassWordGeneratorPage() {
  
     const [password, setPassword] = useState("");

const Generatepassword = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let newPassword = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomIndex];
  }

  setPassword(newPassword);
};


     

    return(
        <main>
            <div>
                <h1>PassWord Generator</h1>
                <button onClick={Generatepassword}>Generate</button>
                <p>{password}</p>
            </div>
        </main>
    )
}