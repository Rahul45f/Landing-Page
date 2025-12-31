"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMsg("Enter a valid email");
    } else {
      setMsg("Thanks! We will reach out soon.");
      setEmail("");
    }
  };

  return (
    <main style={{ fontFamily: "Arial" }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
        <h2>WebLaunch</h2>
        <button>Login</button>
      </header>

      <section style={{ textAlign: "center", padding: "100px 20px", background: "#f4f4f4" }}>
        <h1>Launch Your Website Faster</h1>
        <p>Modern web landing page using React and Next.js</p>
        <button style={{ padding: "10px 20px" }}>Get Started</button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: 20, padding: 50 }}>
        <div style={{ border: "1px solid #ddd", padding: 20, width: 250 }}>
          <h3>Fast</h3>
          <p>Optimized web performance.</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: 20, width: 250 }}>
          <h3>Responsive</h3>
          <p>Works on all screen sizes.</p>
        </div>
        <div style={{ border: "1px solid #ddd", padding: 20, width: 250 }}>
          <h3>SEO Ready</h3>
          <p>Built with Next.js.</p>
        </div>
      </section>

      <section style={{ textAlign: "center", padding: 50 }}>
        <h2>Contact</h2>
        <form onSubmit={submit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{ padding: 10 }}
          />
          <button style={{ marginLeft: 10, padding: 10 }}>Submit</button>
        </form>
        {msg && <p>{msg}</p>}
      </section>

      <footer style={{ textAlign: "center", padding: 20, background: "#eee" }}>
        © 2025 WebLaunch
      </footer>
    </main>
  );
}
