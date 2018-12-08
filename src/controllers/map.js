const map = (req, res) => {
  res.status(200).render('map', {
    colorMap: true,
  });
}
module.exports = {
  map
}
