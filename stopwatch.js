let minutes=0;
let seconds=0;
let milliSeconds=0;
let count=0;
let timerRunning=false;
let interval=null;


//start Timer
let startTimer=()=>
{
	count++;
	minutes=Math.floor((count/100)/60);
	seconds=Math.floor((count/100)-(minutes*60));
	milliSeconds=Math.floor(count-(seconds*100)-(minutes*6000));
	document.querySelector('#m-sec').innerText=leadingZero(milliSeconds);
	document.querySelector('#sec').innerText=leadingZero(seconds);
	document.querySelector('#min').innerText=leadingZero(minutes);
}

//start button

let startButton=document.querySelector('#start-btn');
startButton.addEventListener('click',function()
{
	//startTimer();
	if(!timerRunning)
	{
		interval=setInterval(startTimer,10);
		timerRunning=true;
	}
});

//leading Zero
let leadingZero=(time)=>
{
	if(time<=9)
	{
		return '0'+time;
	}
	else
	{
		return time;
	}
}


//stop button
let stopButton=document.querySelector('#stop-btn');
stopButton.addEventListener('click',function()
{
	if(timerRunning)
	{
		clearInterval(interval);
		timerRunning=false;
	}
});

//Reset button
let resetButton=document.querySelector('#reset-btn');
resetButton.addEventListener('click',function()
{
	clearInterval(interval);
	minutes=0;
	seconds=0;
	milliSeconds=0;
	count=0;
	document.querySelector('#m-sec').innerText='00';
	document.querySelector('#sec').innerText='00';
	document.querySelector('#min').innerText='00';
});