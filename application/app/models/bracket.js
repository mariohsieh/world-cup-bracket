var mongoose = require('mongoose');

module.exports = mongoose.model('Bracket', {
	//_id: String,
	name: String,
	date: String,
	group: { 
		A1: { 
			code: String,
			name: String
		},
		A2: { 
			code: String,
			name: String
		},
		B1: { 
			code: String,
			name: String
		},				
		B2: { 
			code: String,
			name: String
		},
		C1: { 
			code: String,
			name: String
		},				
		C2: { 
			code: String,
			name: String
		},
		D1: { 
			code: String,
			name: String
		},
		D2: { 
			code: String,
			name: String
		},								
		E1: { 
			code: String,
			name: String
		},
		E2: { 
			code: String,
			name: String
		},
		F1: { 
			code: String,
			name: String
		},						
		F2: { 
			code: String,
			name: String
		},
		G1: { 
			code: String,
			name: String
		},
		G2: { 
			code: String,
			name: String
		},
		H1: { 
			code: String,
			name: String
		},
		H2: { 
			code: String,
			name: String
		}
	},			
	ko: {
		QF1: { 
			code: String,
			name: String
		},
		QF2: { 
			code: String,
			name: String
		},				
		QF3: { 
			code: String,
			name: String
		},
		QF4: { 
			code: String,
			name: String
		},
		QF5: { 
			code: String,
			name: String
		},				
		QF6: { 
			code: String,
			name: String
		},
		QF7: { 
			code: String,
			name: String
		},
		QF8: { 
			code: String,
			name: String
		},
		SF1: { 
			code: String,
			name: String
		},				 
		SF2: { 
			code: String,
			name: String
		},				
		SF3: { 
			code: String,
			name: String
		},				
		SF4: { 
			code: String,
			name: String
		},
		F1: { 
			code: String,
			name: String
		},				
		F2: { 
			code: String,
			name: String
		}
	},			
	finals: {
		CHAMPS:	{
			code: String,
			name: String
		},
		SECOND: {
			code: String,
			name: String
		}, 
		THIRD: {
			code: String,
			name: String
		}
	}
});
