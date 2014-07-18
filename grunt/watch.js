module.exports = {
	express: {
		options: {
			spawn: false,
			atBegin: true,
			livereload: true
		},
		files: ['*.js'],
		tasks: [
			'express:dev:stop',
			'express'
		]
	}
};