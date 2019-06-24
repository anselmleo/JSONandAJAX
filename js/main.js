var btn = document.getElementById("btn");
var listContainer = document.getElementById("list-container");
var listHeader = document.getElementById("list-header");
var listCount = 3;

btn.addEventListener("click", function(){

	var req = new XMLHttpRequest();
	req.open('GET','https://my-json-server.typicode.com/anselmleo/my-api-examples/toptens'+listCount);
	alert(listCount)
	req.onload = function() {
		myData = JSON.parse(req.responseText);
		// console.log(myData.toptens1[0]);
		listHeader.innerHTML = myData[0].title;
		renderInHtml()
	}
	req.send();	
	listCount--;
	if(listCount==0) {
		btn.classList.add("hideme");
	}
	btn.innerHTML = "View rest of list";
});


function renderInHtml() {
	for (i=myData.length-1; i>0; i--) {
		var htmlString = "<p> Position: " + myData[i].position + " | City:" + myData[i].city 
										 + " | Country: " + myData[i].country + "</p>"
		listContainer.insertAdjacentHTML("beforeend", htmlString);
	}
	
}