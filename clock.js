function getTimeFromCommandLine(){
	debug("Please enter the time in the format hh:mm");
	return readline();
}


function splitHourAndMinute(time) {
	var timeArray = time.split(":");
	return {
		'hour': parseInt(timeArray[0]),
		'minute': parseInt(timeArray[1])
	}
}

function checkHourMatches(hour, index){
	var twelveHourMod = hour % 12;
	return twelveHourMod === index;
}

function checkMinuteMatches(minute, index){
	var minuteInFive = Math.floor(minute / 5);
	return minuteInFive === index;
}

function convertToTimeDisplayCharacter(isHour, isMinute){
	if(isHour && isMinute) return 'x';
	else if(isHour) return 'h';
	else if(isMinute) return 'm';
	return 'o';
}

function createTimeArray(timeObject){
	var timeArray = [];
	for(var index = 0; index<12; index++){
		var isHour = checkHourMatches(timeObject.hour, index);
		var isMinute = checkMinuteMatches(timeObject.minute, index);
		timeArray.push(convertToTimeDisplayCharacter(isHour, isMinute));  
	}
	return timeArray;
}

function print(timeArray){
	for(var index=0;index<7;index++){
		if(index === 0 || index ===6){
			debug("    "+timeArray[index]+"    ");
		}else{
			debug(timeArray[12-index]+"       "+timeArray[index])
		}

	}
}

print(createTimeArray(splitHourAndMinute(getTimeFromCommandLine())));




