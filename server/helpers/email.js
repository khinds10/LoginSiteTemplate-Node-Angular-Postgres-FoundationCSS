/**
 * Generic helper for sending user's emails
 *
 * @author khinds
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * @copyright Kevin Hinds @ KevinHinds.com
 */

// email user a message
exports.emailUser = function(req, address, subject, message) {
	var server = req.emailService.server.connect({
		user : req.appSettings.SMTPConfig.fromAddress,
		password : req.appSettings.SMTPConfig.sendMailPassword,
		host : req.appSettings.SMTPConfig.mailHost,
		ssl : true
	});
	server.send({
		from : req.siteEnvironment.websiteConfig.websiteEmailFromName + " <" + req.appSettingsSMTPConfig.fromAddress + ">",
		to : address,
		subject : subject,
		text : message,
	}, function(err, message) {
		console.log(err || message);
	});
}
