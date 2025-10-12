// Librairies
import { useState } from "react"
import { SignUp } from "../../api/fetch"

/**
 * Formulaire d'inscription permettant à un utilisateur de créer un compte.
 * Envoie email et mot de passe à l'API et affiche un message de retour.
 *
 * @component
 * @returns {JSX.Element} Composant SignUpForm.
 */

export default function SignUpForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await SignUp(email, password)
      setMessage(data.message || "Compte créé !")
    } catch (err) {
      setMessage(err.message)
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Mot de passe:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <button type="submit">S’inscrire</button>

      {message && <p>{message}</p>}
    </form>
  )
}
