import { useState } from 'react';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/api/auth/signup', {
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          setMessage(data.message);
        } else if (data.error) {
          setMessage(data.error);
        }
      })
      .catch(err => {
        console.error(err);
        setMessage('Erreur réseau');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Mot de passe:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">S’inscrire</button>

      {message && <p>{message}</p>}
    </form>
  );
}
