const controller = {
	index: (req, res) => {
		return res.render('index');
	},
	chat: (req, res) => {
		return res.render('chatbot.ejs');
	}
}

module.exports = controller;