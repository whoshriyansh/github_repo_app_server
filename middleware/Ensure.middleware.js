export async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  if (req.originalUrl.startsWith("/api")) {
    return res.status(401).json({ error: "Unauthorized. Please log in." });
  }

  res.redirect(process.env.CLIENT_BASE_URL + "/login");
}
