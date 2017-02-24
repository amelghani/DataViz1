	/* The figures below refer to refugees from Burma/Myanmar. All figures are from 2015, CIA world fact book */

			/* This is the total number of registered refugees from Myanmar*/

			var total = 461016;

			/*This is the place the refugees are coming from*/

			var place_form = "Myanmar";

			/*These are the different ethnicities or reasons refugees leave */

			var types_refugees = ["Rohingya", "Karen", "Chin", "Climate Refugees"];

			/*These are the countries they are present in */

			var countries = ["India", "Malaysia", "Thailand", "United States", "Bangladesh"];

			/*This the number of refugees and ethincities each country has taken in. Corrected into an an object within an array */

			var number_countries_have_and_ethnicities = { "India": ["15,735", "Chin"],
							"Malaysia": ["88,637","Karen", "Rohingya"],
							"Thailand": ["106,637", "Karen"],
							"United States": ["12,347", "Chin", "Karen"],
							"Bangladesh": ["231,948", "Rohingya"],
						};
		
			/* The below is actualy a list of objects; each object is an article. I've used the articles that appeared initially
			 * on the webpage i created. */
				/* The variables are about the headlines, whether the headline refers to the country as Myanmar or Burma, the publication and the url.
				 * The blurb is copied from what i put in above. 
				 * If i put it on separate lines it doesn't light up as green, which i'm assuming means it's not being read as code. 
				 * This is why all of it is on one line, maing it tedious to scroll through */
				 
			var researchs_stories = [{
				

				"headline" : "Myanmar’s Refugee Problem: It’s Not Just the Rohingya",
				
				"uses" : "Myanmar",

				"publication" : "The Diplomat",

				"web_address" : "http://thediplomat.com/2015/10/myanmars-refugee-problem-its-not-just-the-rohingya",

				"blurb" : "The term Burmese Refugees immediately conjures up the image of the Rohingya Muslims. The community was covered extensively by the media in 2015, when the Rohingya started fleeing the country. The Burmese Refugee crisis is more than that.The article highlights other ethnicities and groups who fled the country due to militarization.As Democratic reforms began in the country in the country in 2011, the article discusses the many reasons these people fled Burma in the first place and what might be in store for them if they return.It also provides an overview of the different ethnicities of people fleeing from Burma and seeking refuge elsewhere."

			}, 
			{

				"headline" : "Refugees From Burma Begin Their Slow Return From Border Camps in Thailand",
				
				"uses": "Burma",

				"publication" : "Time Magazine",

				"web_address" : "http://time.com/4544021/refugees-burma-myanmar-thailand-repatriation-unhcr/",

				"blurb" : "The article discusses repatriation of Burmese refugees from Thailand, which started in October 2016. It also provides a brief overview of the refugees who have been living in Thailand for over 30 years now. It goes on to mention that while repatriation might be taking place it is unlikely that a large group of refugees will go back to Burma since the political situation there is still precarious for these people."

			}, 
			{

				"headline" : "Myanmar refugees pave the way home in pilot return",
				
				"uses" : "Myanmar",

				"app" : "UNHCR",

				"publication" : "http://www.unhcr.org/en-us/news/latest/2016/10/58131e5d4/myanmar-refugees-pave-way-home-pilot-return.html",

				"blurb" : "The article produced by the UNHCR provides some details of the refugees who left Thailand to reutrn to Myanmar. It is focused on the Nupo refugee camp in Thailand and discusses the stories of different refugees who returned.Those returning express a mixture of hope and anxiety on their return, some are worried about finding jobs while others have been planning for this moment for a while."

			}, 
			
			{

				"headline" : "Refugees from Myanmar say 'Delhi is our future'",
				
				"uses" : "Myanmar",
				
				"publication" : "AlJazeera",

				"web_address" : "http://www.aljazeera.com/indepth/features/2015/12/refugees-myanmar-delhi-future-151203183015643.html",

				"blurb" : "The article uses the story of Thanga from Burma to highlight the many problems Burmese refugees face in India. Thanga, is from the Chin ethnicity and is Christian, which is why he had to flee in July 2007, after he got into an alteraction with a military officer. Delhi, in India is home to over 5000 Chin refugees, which is why Thanga also made the city his home. UNHCR assistance to these refugees is limited. The organization only provides assistance to the disabled."
				
				
			}];
		
		/* Goal: go through my list of articls and console.log only the ones that use Myanmar in the title*/
		
		/*If it's not from nytime, console.log "Not NYTimes" */
		/*To go through the list, creates a for loop! */
		
		/*basically saying that we're going to start counting at '0', convention is to start at '0'. Stop counting at the number of articles in your list */
		
		function givingitareicipe(researchs_stories) {
		
		for (var counter = 0; counter <researchs_stories.length; counter++) {
			
			var stories = researchs_stories[counter];
			
			/* Every†hing i want to do †ø my loop must be inside these brackets */
			/*Check if an article has Burma in its headline*/
			
			
			if (stories.uses == "Burma")
			{console.log (stories);
			}else{console.log("Myanmar");
				
				
			}
			
			}
		
			}
		givingitareicipe(researchs_stories)
		