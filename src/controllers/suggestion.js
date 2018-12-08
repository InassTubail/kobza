const queries = require('../model/query/queries');

const suggestion = (req, res) => {
  res.status(200).render('suggestion', {
    colorSuggestion: true
  });
}

const makesuggestion = (req, res) => {
  const {
    suggestion
  } = req.body;
  queries.makesuggestion(req.user.id, suggestion, (errorConnectingToDB, Result) => {
    if (errorConnectingToDB) {
      res.redirect('/err');
    } else {
      res.status(200).render('suggestion', {
        mssg: 'Your suggestion send Thx you about your suggestion',
        colorSuggestion: true
      });
    }
  });

}

module.exports = {
  suggestion,
  makesuggestion
};
