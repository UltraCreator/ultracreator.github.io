$(function(){
	
	var note = $('.note'),
		ts = new Date(2015, 11, 17),
		released = true;
	
	if((new Date()) > ts){
		ts = (new Date()).getTime();
		released = false;
	}
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br >";
			
			if(released){
				message += "left until release date.";
			}
			else {
				message = "<a href='https://itunes.apple.com/app/id1067170056'><div style='width:130px; height:46px; float:left; padding: 0px 0 0 0; margin-left: 0px;'><img src='icon_appstore.png' alt='App Store'></div></a><a href='https://play.google.com/store/apps/details?id=com.dotgears.swingcopters2'><div style='width:130px; height:46px; float:right; padding: 0px 0 0 0; margin-right: 0px;'><img src='icon_googleplay.png' alt='Play Store'></div></a><a href='http://www.amazon.com/gp/mas/dl/android?p=com.dotgears.swingcopters2'><div align='center' style='width:130px; height:46px; float:left; margin-left: 80px; margin-top: 10px;'><img src='icon_amazon.png' alt='App Store'></div></a>";
				$('#countdown').hide();
			}
			note.html(message);
		}
	});
	
});
