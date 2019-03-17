const Dymo = require('dymojs'),
	   dymo = new Dymo(),
     fs = require('fs');

label = fs.readFileSync('label.xml');

dymo.print('DYMO LabelWriter 450 @ The Beer Spot Mac Mini', label);
