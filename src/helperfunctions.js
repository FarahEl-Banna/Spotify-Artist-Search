export function generateRandomString(length) {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
}

export async function fetchWebApi(endpoint, method, token, body) {
  const data = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((err) => {
      if (err.message === "401") {
        // Redirect to the login page
        alert(err.message + ": Access token has expired!!");
        window.location.href = "/";
      } else {
        // Handle other errors
        console.error("Error:", err);
      }
    });

  return await data;
}
