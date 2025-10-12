const apiUrl = import.meta.env.VITE_API_URL;


export async function getWork() {
    const res = await fetch(`${apiUrl}/api/work`)

    if(!res) throw new Error('Erreur lors du chargement des travaux')
    return res.json();
}

export async function createWork(formData) {
  const token = localStorage.getItem('token');

  const res = await fetch(`${apiUrl}/api/work`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || err.message || 'Erreur upload');
  }

  return res.json();
}

export async function loginUser(email, password) {
  try {
    const res = await fetch(`${apiUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw new Error(errBody.message || "Identifiants invalides");
    }

    const data = await res.json();
    if (!data.token) throw new Error("Réponse serveur invalide");
    return data.token;
    
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function SignUp(email, password){
try {
    const res = await fetch(`${apiUrl}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || data.message || "Création de compte impossible");
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message || "Erreur réseau");
  }
}

export async function deleteWork(id, token) {
  try{
    const response = await fetch(`${apiUrl}/api/work/${id}`, {
      method: "DELETE",
      headers: { 
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Erreur serveur : ${response.status}`);
    }

    return await response.json();
  } catch (err){
    console.error(err);
    throw err;
  }
}