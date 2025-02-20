export default async function handler(req, res) {
    const redirectUrl = `https://xijymfxnqijlskmpkzrd.supabase.co/auth/v1/callback`;
  
    // Forward all query params from Google to Supabase
    const query = new URLSearchParams(req.query).toString();
    res.redirect(`${redirectUrl}?${query}`);
  }
  