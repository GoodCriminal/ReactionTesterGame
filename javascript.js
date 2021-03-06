
//TIME STARTED//

		var start = new Date().getTime();   //time after shape appears on the screen   

								function getRandomColor() // function to choose random color of shape
									{
										var letters= '1234567890ABCDEF'.split(''); //spiliting the digits and alphabets randomly to make different color combinations
										var color= '#';
											for(i=0; i<6 ; i++)
														{
															color += letters[Math.floor(Math.random() * 16 )]; //setting to a round off digit rather than a decimal one
														}
											return color;
									}	




//SHAPE APPEARED ON THE SCREEN FOR THE FIRST TIME//

								function makeShapeAppear() // function for shape to appear on screen the very first time. Since display is set to 'none' in head tag.
									{

										var top= Math.random() * 400; //setting variable for random position from top
										var left= Math.random() * 800; //setting  variable for random position from left
										var width=Math.random() *400;  //setting variable for random width of shape
										var height=Math.random() *400; //setting variable for random height of shape

											if(Math.random()>0.5)		// half of the time shape will be circle,half of the time shpae will be rectangle
											{
												document.getElementById("shape").style.borderRadius="50%"; 
											}
											else
											{
												document.getElementById("shape").style.borderRadius="0%"; 
											}

										document.getElementById("shape").style.backgroundColor=getRandomColor(); //calling random color function
										document.getElementById("shape").style.top=top + "px";  //setting random from top
										document.getElementById("shape").style.left=left + "px";  //setting random position from left
										document.getElementById("shape").style.width=width + "px"; //setting random width of shape
										document.getElementById("shape").style.height=height + "px"; //setting random height of shape

										document.getElementById("shape").style.display="block";  // making the shape APPEAR the very first time on screen and also REAPPEAR AGAIN after the shape had been vanished on clicking
							     		 start = new Date().getTime(); // start time before clicking
									}

		setTimeout(makeShapeAppear, (Math.random())*2000); // making the shape APPEAR for the first time on screen after 2000 miliseconds 




// SHAPE VANISHED AFTER CLICKING ON IT//

								document.getElementById("shape").onclick=function() // function to make shape vanish after a click
									
										{
											document.getElementById("shape").style.display="none"; // to make shape vanish after click
											var end = new Date().getTime(); // end time after clicking
											var timeTaken= (end-start)/1000; // time difference i.e in how many seconds user had clicked the shape
											document.getElementById("timetake").innerHTML= timeTaken + "s"; // displaying the time taken by user to click the shape
															
										
// SHAPE REAPPEARING//											
											
											setTimeout(makeShapeAppear, (Math.random())*2000); // inbuilt function to make shape REAPPEAR automatically AGAIN after 2000 miliseconds after it had been vanished
										}

