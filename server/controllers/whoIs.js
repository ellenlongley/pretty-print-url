const API_KEY = "at_ZWvTYszWn66C1JvAevD1xW15Bc81O";

export const getWhoIs = async (req, res) => {
  const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${API_KEY}&domainName=${req.query.domainName}`;

  try {
    const results = await fetch(url);
    const resultsJSON = await results.json();
    res.status(200).json(resultsJSON);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
