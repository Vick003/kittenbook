var projectName = 'kittenbook';
var versionNumber = '0.0.1';
var currentDate = new Date();

/* currentTime will look like '2015-08-28 at 14:45:12' */
var currentTime = currentDate.getFullYear() + '-' + //Set Year 
					(currentDate.getMonth() + 1) + '-' + //Set month 
					currentDate.getDate() + ' at ' + //Set day of the month
					currentDate.getHours() + ':' + //Set hours (military time)
					currentDate.getMinutes() + ':' + // Set getMinutes
					currentDate.getSeconds();        //Set secondesvar username = prompt('Hello, what\'s your name?' );
document.body.innerHTML = '<h1>Hello, ' +username+ '!</h1>' +'<p>'+
projectName + ' ' + versionNumber + ' accessed on: ' +currentTime+ '</p>';