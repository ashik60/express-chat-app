// Get login page
function getInbox(req, res, next) {
  res.render('inbox', {
    title: 'Inbox - Chat application',
  });
}

module.exports = {
  getInbox,
};
