/*# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
*/
$(document).ready(function () {
	$(window).load(function () {
		$(".picture").animate({left:'15em', opacity:'1.0'}, 750);
		$(".experience").animate({left:'31em', opacity:'1.0'}, 750);
		$(".education").animate({left:'15em', opacity:'1.0'}, 1000);
		$(".website").animate({left:'31em', opacity:'1.0'}, 1000);
		$(".resume").animate({left:'15em', opacity:'1.0'}, 1200);
		$(".contact").animate({left:'31em', opacity:'1.0'}, 1200);
	});
	
	/*
		Mouseover animations for tile effects	
	*/
	//picture
	$(".picture").mouseover(function () {
		$(".picture").css("background-image","url('assets/matthewg.jpg')");
	});
	$(".picture").mouseout(function () {
		$(".picture").css("background-image","url('assets/matthew.jpg')");
	});
	
	//Experience
	$(".experience").mouseover(function () {
		$(".experience").css("background-color", "#33AA66");
	});
	$(".experience").mouseout(function () {
		$(".experience").css("background-color", "#339966");
	});
	//Education
	$(".education").mouseover(function () {
		$(".education").css("background-color", "#0066AB");
	});
	$(".education").mouseout(function () {
		$(".education").css("background-color", "#336699");
	});
	//Website
	$(".website").mouseover(function () {
		$(".website").css("background-color", "#FFDD66");
	});
	$(".website").mouseout(function () {
		$(".website").css("background-color", "#FFCC66");
	});
	//Resume
	$(".resume").mouseover(function () {
		$(".resume").css("background-color", "#6633DD");
	});
	$(".resume").mouseout(function () {
		$(".resume").css("background-color", "#663399");
	});
	//Contact
	$(".contact").mouseover(function () {
		$(".contact").css("background-color", "#990000");
	});
	$(".contact").mouseout(function () {
		$(".contact").css("background-color", "#780000");
	});
	//Contact	
	//Back
	
	/*
		Start of click functionality
	*/
	
	//back clicked
	$(".back").click(function () {
		$(".experience").animate({left:'31em', opacity:'1.0'},1200);
		$(".experience").css("visibility", "visible");
		
		$(".back").animate({opacity:'0.0'});
		$(".back").css("visibility", "hidden");
		
		$(".line").animate({opacity:'0.0', width:'0em'},800);
		$(".line").css("visibility", "hidden");
		
		$(".text").animate({opacity:'0.0'}, 1700);		
		$(".text").css("visibility", "hidden");
		
		$(".intelLogo").animate({opacity:'0.0'});
		$(".intelLogo").css("visibility", "hidden");
		$(".amproLogo").animate({opacity:'0.0'});
		$(".amproLogo").css("visibility", "hidden");
		$(".dennysLogo").animate({opacity:'0.0'});
		$(".dennysLogo").css("visibility", "hidden");
		$(".redlobsterLogo").animate({opacity:'0.0'});
		$(".redlobsterLogo").css("visibility", "hidden");
		
		$(".mastersLogo").animate({opacity:'0.0'});
		$(".mastersLogo").css("visibility", "hidden");
		$(".wascLogo").animate({opacity:'0.0'});
		$(".wascLogo").css("visibility", "hidden");
		
		$(".html5css3Logo").animate({opacity:'0.0'},1600);
		$(".html5css3Logo").css("visibility", "hidden");		
		$(".rubyonrailsLogo").animate({opacity:'0.0'},1600);
		$(".rubyonrailsLogo").css("visibility", "hidden");
		$(".postgresqlLogo").animate({opacity:'0.0'},1600);
		$(".postgresqlLogo").css("visibility", "hidden");
		
		$(".picture").animate({opacity: "1.0", top:'5em'},1200);
		$(".picture").css("visibility", "visible");
		$(".education").animate({opacity: "1.0",top:'21em'},1200);
		$(".education").css("visibility", "visible");
		$(".website").animate({opacity: "1.0", left:'31em'},600);
		$(".website").css("visibility", "visible");
		$(".website").animate({top:'21em'},600);
		$(".resume").animate({opacity: "1.0",top:'37em'},1200);
		$(".resume").css("visibility", "visible");
		$(".contact").animate({opacity: "1.0",left:'31em'},600);
		$(".contact").animate({top:'37em'},600);
		$(".contact").css("visibility", "visible");
	});
	
	//Picture clicked
	$(".picture").click(function () {
		$(".picture").animate({left:'15em'},800);
		
		$(".back").animate({opacity:'1.0'},1600, pictureClicked());
		$(".back").css("visibility", "visible");
		
		$(".line").animate({opacity:'1.0', width:'40em'},800);
		$(".line").css("visibility", "visible");
		$(".line").css("background-color", "#000000");
		
		var text = "<strong><div class='pictureTextHeading'>ABOUT</div></strong><br>Hi! Welcome to the online portfolio of Matthew Seagle. Whether you are here because I am a possible candidate for a job or simply because you have stumbled here among the reaches of the internet I hope you enjoy your stay." +
		" If you are interested in learning more about me personally and professionally go ahead and have a look around.<br><br><strong><div class='pictureTextHeading'>HOBBIES/PERSONAL INTERESTS</div></strong><br>In my spare time I enjoy running, working out, hiking, reading (almost exclusively theology, apologetics, and philosophy)," +
		" riding motorcycles, as well as playing a few video games. If I have the opportunity, camping and skiing are welcome adventures but have become rare as I've become busier in life.<br>" +
		" <br>On the technical side of things I've been working with and building computers since I was 10 (1995). I often do maintenance and virus/malware removal for anyone who needs it. I have built custom setups for friends and family and always research and build my own computer for personal use." +
		" I enjoy keeping up with the latest technology from a software and hardware perspective.<br>" +
		"<br> As a side note, I spend most of my time on Mint 15 unless I need windows for a game.";
		pictureNode = document.getElementsByClassName('text');
		pictureNode[0].innerHTML = text;
		
		$(".text").animate({opacity:'1.0'}, 1700);		
		$(".text").css("visibility", "visible");		
		
		$(".experience").animate({opacity: "0.0"},"fast");
		$(".education").animate({opacity: "0.0"},"fast");
		$(".website").animate({opacity: "0.0"},"fast");
		$(".resume").animate({opacity: "0.0"},"fast");
		$(".contact").animate({opacity: "0.0"},"fast");
	});
	
	//Experience clicked
	$(".experience").click(function () {
		$(".experience").animate({left:'15em'},800);
		
		$(".back").animate({opacity:'1.0'},1600, experienceClicked());
		$(".back").css("visibility", "visible");
		
		
		$(".intelLogo").animate({opacity:'1.0'},1600);
		$(".intelLogo").css("visibility", "visible");
		$(".amproLogo").animate({opacity:'1.0'},1600);
		$(".amproLogo").css("visibility", "visible");
		$(".dennysLogo").animate({opacity:'1.0'},1600);
		$(".dennysLogo").css("visibility", "visible");
		$(".redlobsterLogo").animate({opacity:'1.0'}, 1600);
		$(".redlobsterLogo").css("visibility", "visible");
		
		$(".line").animate({opacity:'1.0', width:'40em'},800);
		$(".line").css("visibility", "visible");
		$(".line").css("background-color", "#339966");
		
		var text = "<strong><div class='experienceTextHeading'>EXPERIENCE</div></strong><br><br>Looking for some of the work experience I have had? You've come to the right place!<br>" +
		"<strong>Part-time, Ampro Corp.</strong>, San Jose, CA 2004 - 2005<br>" +
		"<ul><li>Created a project error tracker using HTML, JavaScript, CSS, PHP5, and MySQL</li>" +
		"<li>Effectively maintained company systems and network connected assets</li>" +
		"<li>Worked in an organized way around an office environment and adapted to other " +
		"employees with limited technical background</li></ul><br>" +
		"<strong>Intern, Intel Corp.</strong>, Santa Clara, CA 2003 - 2004<br>" +
		"<ul><li>Quick RMA of broken department assets such as hard drives, mainboards, and systems</li>" +
		"<li>Competently catalogued all department assets into inventory</li>" +
		"<li>Cooperated in a team with other employees to complete general IT repairs and work orders in an organized manner</li></ul><br>" +
		"<strong>Server, Red Lobster</strong>, Valencia, CA 2011 - current<br>" +
		"<ul><li>Fulfill guest needs and expectations on a consistent basis for excellent service</li>" +
		"<li> Maintain patience and composure in a high stress, quick paced environment</li>" +
		"<li> Successful management of multiple conflicting tasks on a regular basis while adapting to changing needs</li></ul><br>" +
		"<strong>Server, Denny's</strong>, Morgan Hill, CA 2006 - 2010<br>" +
		"<ul><li>Train incoming employees in proper handling of cash, guest services, ally coordination, and cleaning</li>" +
		"<li>Responsiveness to changing situations and different groups of people who may be inhibited from alcohol or other means.</li>" +
		"<li>Energetic and passionate even during down times on long shifts over graveyard work times</li></ul><br>";
		
		experienceNode = document.getElementsByClassName('text');
		experienceNode[0].innerHTML = text;
		
		$(".text").animate({opacity:'1.0'}, 1700);		
		$(".text").css("visibility", "visible");	
		
		$(".picture").animate({opacity: "0.0"},"fast");
		$(".education").animate({opacity: "0.0"},"fast");
		$(".website").animate({opacity: "0.0"},"fast");
		$(".resume").animate({opacity: "0.0"},"fast");
		$(".contact").animate({opacity: "0.0"},"fast");
	});
	
	//Education clicked
	$(".education").click(function () {
		$(".education").animate({top:'5em'},800);
		
		$(".back").animate({opacity:'1.0'},1600, educationClicked());
		$(".back").css("visibility", "visible");
		
		$(".mastersLogo").animate({opacity:'1.0'}, 1600);
		$(".mastersLogo").css("visibility", "visible");
		$(".wascLogo").animate({opacity:'1.0'}, 1600);
		$(".wascLogo").css("visibility", "visible");
		
		$(".line").animate({opacity:'1.0', width:'40em'},800);
		$(".line").css("visibility", "visible");
		$(".line").css("background-color", "#336699");
		
		var text = "<strong><div class='educationTextHeading'>EDUCATION</div></strong><br>Information on my education at The Master's College, it's full WASC authority," +
		"and some accolaids of the college.<br><br>" +
		"<div class='educationTextHeading'>Accreditation</div>The Master's College has full authority to award Bachelor's and Master's Degrees in all its disciplines as determined by the Western Association of Schools and Colleges (WASC)." +
		"More information can be found at <a href='www.wascsenior.org'>www.wascsenior.org</a><br><br><br><br><br><br><br>" +
		"<div class='educationTextHeading'>Accolaides</div> Morever, The Master's College is ranked nationally and regionally exceptionally well and for 15 consecutive years has been ranked among First tier colleges by" +
		" U.S. News and World Report.<br> <ul><li><a href='http://www.masters.edu/the-master%27s-college-garners-us-news-world-report-2-ranking.aspx'>Ranked #2 Among Western Regional Colleges (2012)</a><br>*among 371 colleges</li>" +
		"<li><a href='http://www.masters.edu/college-ranks-in-%E2%80%9Cfirst-tier%E2%80%9D-in-latest-us-news-and-world-report-rankings.aspx'>Ranked #4 Among Western Regional Colleges (2013)</a><br>*among 370 colleges</li>" +
		"<li><a href='http://www.masters.edu/the-master%27s-college-ranked-no-4-among-western-regional-colleges-by-us-news-world-report.aspx'>Ranked #4 Among Western Regional Colleges (2014)</a><br>*among 367 colleges</li></ul><br>" +
		"Forbes Magazine also ranked The Master's College in \"America's Top College's\" for 2014. <br>" +
		"The Master's College ranked #302 in the nation, which places it above many other notable colleges such as:" +
		"<ul><li>California State University, Northridge (#507)</li>" +
		"<li>California State University, Long Beach (#354)</li>" +
		"<li>California State Univerrsity, Fresno (#428)</li>" +
		"<li>San Francisco State University (#464)</li>" +
		"<li>California State University, Sacremento (#430)</li>" +
		"<li>San Jose State University (#345)</li></ul>";
		
		
		educationNode = document.getElementsByClassName('text');
		educationNode[0].innerHTML = text;
		
		$(".text").animate({opacity:'1.0'}, 1700);		
		$(".text").css("visibility", "visible");
		
		$(".picture").animate({opacity: "0.0"},"fast");
		$(".experience").animate({opacity: "0.0"},"fast");
		$(".website").animate({opacity: "0.0"},"fast");
		$(".resume").animate({opacity: "0.0"},"fast");
		$(".contact").animate({opacity: "0.0"},"fast");
	});
	
	//Website clicked
	$(".website").click(function () {
		$(".website").animate({top:'5em'},400);
		$(".website").animate({left:'15em'},800);
		
		$(".back").animate({opacity:'1.0'},1600, websiteClicked());
		$(".back").css("visibility", "visible");
		
		$(".html5css3Logo").animate({opacity:'1.0'},1600);
		$(".html5css3Logo").css("visibility", "visible");		
		$(".rubyonrailsLogo").animate({opacity:'1.0'},1600);
		$(".rubyonrailsLogo").css("visibility", "visible");
		$(".postgresqlLogo").animate({opacity:'1.0'},1600);
		$(".postgresqlLogo").css("visibility", "visible");
		
		$(".line").animate({opacity:'1.0', width:'40em'},800);
		$(".line").css("visibility", "visible");
		$(".line").css("background-color", "#FFCC66");
		
		var text = "<strong><div class='websiteTextHeading'>WEBSITE INFORMATION</div></strong><br>This website employs the use of many different technologies.<br>" +
		"<ul><li>Animations, fonts, and colors, are all configured using CSS3.</li>" +
		"<li>Page content is updated dynamically using AJAX from a PostgreSQL database.</li>" +
		"<li>The entire site uses a Model View Controller (MVC) of Ruby on Rails for quick and easy changes.</li></ul>";
		websiteNode = document.getElementsByClassName('text');
		websiteNode[0].innerHTML = text;
		
		$(".text").animate({opacity:'1.0'}, 1700);		
		$(".text").css("visibility", "visible");
		
		$(".picture").animate({opacity: "0.0"},"fast");
		$(".experience").animate({opacity: "0.0"},"fast");
		$(".education").animate({opacity: "0.0"},"fast");
		$(".resume").animate({opacity: "0.0"},"fast");
		$(".contact").animate({opacity: "0.0"},"fast");
	});
	
	//Resume clicked
	$(".resume").click(function () {
		$(".resume").animate({top:'5em'},800);		
		
		$(".back").animate({opacity:'1.0'},1600, resumeClicked());
		$(".back").css("visibility", "visible");
		
		$(".line").animate({opacity:'1.0', width:'40em'},800);
		$(".line").css("visibility", "visible");
		$(".line").css("background-color", "#663399");
		
		var text = "<strong><div class='resumeTextHeading'>RESUME</div></strong><br>Looking for my resume?<br>" +
		"Download it in PDF form <a href='MatthewSeagleResume.pdf' target='new'>here</a>.";
		resumeNode = document.getElementsByClassName('text');
		resumeNode[0].innerHTML = text;
		
		$(".text").animate({opacity:'1.0'}, 1700);		
		$(".text").css("visibility", "visible");
		
		$(".picture").animate({opacity: "0.0"},"fast");
		$(".experience").animate({opacity: "0.0"},"fast");
		$(".education").animate({opacity: "0.0"},"fast");
		$(".website").animate({opacity: "0.0"},"fast");
		$(".contact").animate({opacity: "0.0"},"fast");
	});

	//Contact clicked
	$(".contact").click(function () {
		$(".contact").animate({top:'5em'},400);
		$(".contact").animate({left:'15em'},800);
		
		$(".back").animate({opacity:'1.0'},1600, contactClicked());
		$(".back").css("visibility", "visible");
		
		$(".line").animate({opacity:'1.0', width:'40em'},800);
		$(".line").css("visibility", "visible");
		$(".line").css("background-color", "#780000");
		
		var text = "<strong><div class='contactTextHeading'>CONTACT</div></strong><br>Looking for ways to contact me?<br>" +
		"Facebook: <a href='https://www.facebook.com/matthew.seagle.1' target='new'>here</a><br>" +
		"LinkedIn: <a href='www.linkedin.com/pub/matthew-seagle/32/54a/591/' target='new'>here</a>";
		contactNode = document.getElementsByClassName('text');
		contactNode[0].innerHTML = text;
		
		$(".text").animate({opacity:'1.0'}, 1700);		
		$(".text").css("visibility", "visible");
		
		$(".picture").animate({opacity: "0.0"},"fast");
		$(".experience").animate({opacity: "0.0"},"fast");
		$(".education").animate({opacity: "0.0"},"fast");
		$(".resume").animate({opacity: "0.0"},"fast");
		$(".website").animate({opacity: "0.0"},"fast");
	});
	
	function pictureClicked() {
	  $(".experience").css("visibility", "hidden");
	  $(".education").css("visibility", "hidden");
	  $(".website").css("visibility", "hidden");
	  $(".resume").css("visibility", "hidden");
	  $(".contact").css("visibility", "hidden");
	}
	
	function experienceClicked() {
	  $(".picture").css("visibility", "hidden");
	  $(".education").css("visibility", "hidden");
	  $(".website").css("visibility", "hidden");
	  $(".resume").css("visibility", "hidden");
	  $(".contact").css("visibility", "hidden");
	}
	
	function educationClicked() {
	  $(".picture").css("visibility", "hidden");
	  $(".experience").css("visibility", "hidden");
	  $(".website").css("visibility", "hidden");
	  $(".resume").css("visibility", "hidden");
	  $(".contact").css("visibility", "hidden");
	}
	
	function websiteClicked() {
	  $(".picture").css("visibility", "hidden");
	  $(".experience").css("visibility", "hidden");
	  $(".education").css("visibility", "hidden");
	  $(".resume").css("visibility", "hidden");
	  $(".contact").css("visibility", "hidden");
	}
	
	function resumeClicked() {
	  $(".picture").css("visibility", "hidden");
	  $(".experience").css("visibility", "hidden");
	  $(".education").css("visibility", "hidden");
	  $(".website").css("visibility", "hidden");
	  $(".contact").css("visibility", "hidden");
	}
	
	function contactClicked() {
	  $(".picture").css("visibility", "hidden");
	  $(".experience").css("visibility", "hidden");
	  $(".education").css("visibility", "hidden");
	  $(".website").css("visibility", "hidden");
	  $(".resume").css("visibility", "hidden");
	}
});

