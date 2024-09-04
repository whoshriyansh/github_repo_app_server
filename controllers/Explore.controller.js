export const getReposWithLanguage = async (req, res) => {
  const { language } = req.params;

  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`
    );
    const repos = await response.json();
    res.status(200).send(repos.items);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};
