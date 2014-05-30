// load Brackets model
var Bracket = require('./models/bracket');
	//Counter = require('./models/counter');

module.exports = function(app) {
	
	// define RESTful api   ***********************************
	
	// get all brackets
	app.get('/api/brackets', function(req,res) {
		// use find() to get all docs from db
		Bracket.find(function(err,doc) {
			if (err) throw err;
			//console.log(doc);
			res.json(doc);
		});
	});
	
	// get one bracket
	// write code for one bracket
	
	// create new brackets
	app.post('/api/brackets', function(req,res) {
		
		// get next id from counters db
		function getNextCounter(id) {
			var nextid = Counter.findAndModify(
				{
					query: { _id: id },
					update: { $inc: { seq: 1 } },
					new: true
				}
			);
			return nextid.seq;
		}
		
		console.log(req.body);
		var reqBody = req.body;
		var bracketObj = {
			//_id: getNextCounter("userid"),
			name: reqBody.name,
			date: reqBody.date,
			group: { 
				A1: { 
					code: reqBody.group.A1.code,
					name: reqBody.group.A1.name
				},
				A2: { 
					code: reqBody.group.A2.code,
					name: reqBody.group.A2.name
				},
				B1: { 
					code: reqBody.group.B1.code,
					name: reqBody.group.B1.name
				},				
				B2: { 
					code: reqBody.group.B2.code,
					name: reqBody.group.B2.name
				},
				C1: { 
					code: reqBody.group.C1.code,
					name: reqBody.group.C1.name
				},				
				C2: { 
					code: reqBody.group.C2.code,
					name: reqBody.group.C2.name
				},
				D1: { 
					code: reqBody.group.D1.code,
					name: reqBody.group.D1.name
				},
				D2: { 
					code: reqBody.group.D2.code,
					name: reqBody.group.D2.name
				},								
				E1: { 
					code: reqBody.group.E1.code,
					name: reqBody.group.E1.name
				},
				E2: { 
					code: reqBody.group.E2.code,
					name: reqBody.group.E2.name
				},
				F1: { 
					code: reqBody.group.F1.code,
					name: reqBody.group.F1.name
				},						
				F2: { 
					code: reqBody.group.F2.code,
					name: reqBody.group.F2.name
				},
				G1: { 
					code: reqBody.group.G1.code,
					name: reqBody.group.G1.name
				},
				G2: { 
					code: reqBody.group.G2.code,
					name: reqBody.group.G2.name
				},
				H1: { 
					code: reqBody.group.H1.code,
					name: reqBody.group.H1.name
				},
				H2: { 
					code: reqBody.group.H2.code,
					name: reqBody.group.H2.name
				}
			},			
			ko: {
				QF1: { 
					code: reqBody.ko.QF1.code,
					name: reqBody.ko.QF1.name
				},
				QF2: { 
					code: reqBody.ko.QF2.code,
					name: reqBody.ko.QF2.name
				},				
				QF3: { 
					code: reqBody.ko.QF3.code,
					name: reqBody.ko.QF3.name
				},
				QF4: { 
					code: reqBody.ko.QF4.code,
					name: reqBody.ko.QF4.name
				},
				QF5: { 
					code: reqBody.ko.QF5.code,
					name: reqBody.ko.QF5.name
				},				
				QF6: { 
					code: reqBody.ko.QF6.code,
					name: reqBody.ko.QF6.name
				},
				QF7: { 
					code: reqBody.ko.QF7.code,
					name: reqBody.ko.QF7.name
				},
				QF8: { 
					code: reqBody.ko.QF8.code,
					name: reqBody.ko.QF8.name
				},
				SF1: { 
					code: reqBody.ko.SF1.code,
					name: reqBody.ko.SF1.name
				},				 
				SF2: { 
					code: reqBody.ko.SF2.code,
					name: reqBody.ko.SF2.name
				},				
				SF3: { 
					code: reqBody.ko.SF3.code,
					name: reqBody.ko.SF3.name
				},				
				SF4: { 
					code: reqBody.ko.SF4.code,
					name: reqBody.ko.SF4.name
				},
				F1: { 
					code: reqBody.ko.F1.code,
					name: reqBody.ko.F1.name
				},				
				F2: { 
					code: reqBody.ko.F2.code,
					name: reqBody.ko.F2.name
				}
			},			
			finals: {
				CHAMPS:	{
					code: reqBody.finals.CHAMPS.code,
					name: reqBody.finals.CHAMPS.name
				},
				SECOND:	{
					code: reqBody.finals.SECOND.code,
					name: reqBody.finals.SECOND.name
				},
				THIRD:	{
					code: reqBody.finals.THIRD.code,
					name: reqBody.finals.THIRD.name
				}									
			}
		};
		
		var bracket = new Bracket(bracketObj);
		
		bracket.save(function(err,doc) {
			if (err || !doc)
				throw err;
			else
				res.json(doc);
		});
		
	});	

	// send all routes to angular front end to be defined
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
/*
	//	error page
	app.use(function(req, res){
		res.type('text/plain');
		res.send(404, 'Page Not Found');
	});
*/
}

