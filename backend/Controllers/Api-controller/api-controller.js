const testApi = (req, res) => {
    res.status(200).json({ message: 'API Test Success!' });
}

module.exports = {
    testApi,
};