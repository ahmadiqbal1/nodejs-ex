

	const newman = require('newman');


	newman.run({
		 collection: require('./../public/tests/iem.json'),
		 reporters: ['cli','html']

		},		function(err) {
            if (err) {


                throw err;
            }

            exports.err = (err) => err;

										console.log('collection run complete!');
				});