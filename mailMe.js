const express = require('express')
const mailMeRouter = express.Router()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

mailMeRouter.post('/', async (req, res) => {
	const msg = {
		to: 'dorangeoflyf@gmail.com',
		from: 'oladotunlawal7@gmail.com',
		subject: `${req.body.subject}`,
		text: `
	  name: ${req.body.name}	
	  message:  ${req.body.message}`,
	}

	try {
		await sgMail.send(msg)
		res.json({
			status: 'success',
		})
		console.log('Message sent Successfully')
	} catch (error) {
		res.json({
			status: 'failure to send mail',
		})
		console.error(error)
		if (error.response) {
			console.log(error.response.body)
		}
	}
})

// const nodemailer = require('nodemailer')

// const transport = {
// 	host: 'smtp.gmail.com',
// 	port: 465,
// 	secure: true,
// 	auth: {
// 		user: process.env.THE_EMAIL,
// 		pass: process.env.thePassword,
// 	},
// 	// debug: true,
// 	// logger: true,
// }

// const transporter = nodemailer.createTransport(transport)
// transporter.verify((error, success) => {
// 	if (error) {
// 		console.error(error)
// 	} else {
// 		console.log('users ready to mail myself')
// 	}
// })

// mailMeRouter.post('/', (req, res, next) => {
// 	const mail = {
// 		from: process.env.THE_EMAIL,
// 		to: 'oladotunlawal7@gmail.com',
// 		text: `

//       from: ${req.body.email}

//       name: ${req.body.name}

//       subject: ${req.body.subject}

//       message:  ${req.body.message}`,
// 	}

// 	transporter.sendMail(mail, (err, data) => {
// 		if (err) {
// 			res.json({
// 				status: 'failure to send mail',
// 			})
// 		} else {
// 			res.json({
// 				status: 'success',
// 			})
// 		}
// 	})
// })

// console.log('from sendToMe')

module.exports = mailMeRouter
