export default async function handler(req, res) {
  try {
    const redirectUrl = `https://xijymfxnqijlskmpkzrd.supabase.co/auth/v1/callback`;

    // Validate and forward all query params from Google to Supabase
    const query = new URLSearchParams(req.query).toString();
    if (!query) {
      throw new Error("Invalid query parameters");
    }
    res.redirect(`${redirectUrl}?${query}`);
  } catch (error) {
    console.error("Error during authentication callback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
