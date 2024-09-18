const isProduction = process.env.NODE_ENV === "production";

const getCallbackURL = () =>
  isProduction ? "http://3.109.2.38:3000" : "http://localhost:3000";

export async function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  if (req.originalUrl.startsWith("/api")) {
    return res.status(401).json({ error: "Unauthorized. Please log in." });
  }

  res.redirect(getCallbackURL() + "/login");
}
