
var lastElemStart = 0;
var page = "";
var userStyle = "<style> #userPage {";
var style = "";
var lastStyleStart = style.length;
var bodyStyle = "<style> body {";
var styleEnd = "</style>";
var htmlWindow = null;
var pageCentered = false;


function undoElem()
{
	page = page.substring(0, lastElemStart);
	updateCode();
}


function undoStyle()
{
	style = style.substring(0, lastStyleStart);
	updateCode();
}


function updateCode()
{
	document.getElementById("userPage").innerHTML = userStyle + style + " } " + styleEnd + page;
}


function addParagraph()
{
	var font = prompt("Enter the font type (https://www.w3schools.com/cssref/css_websafe_fonts.asp) to use:");
	var size = prompt("Enter the font size to use:");

	lastElemStart = page.length;
	page += "<p style = 'font-family: " + font + "; font-size: " + size + "px;'>" + document.getElementById("paragraphInput").value + "</p>";
	updateCode();
	document.getElementById("paragraphInput").value = "";
}


function addQuote()
{
	lastElemStart = page.length;
	page += "<blockquote>" + document.getElementById("paragraphInput").value + "</blockquote>";
	updateCode();
	document.getElementById("paragraphInput").value = "";
}


function addBr()
{
	lastElemStart = page.length;
	page += "<br/>";
	updateCode();
}

function addHr()
{
	lastElemStart = page.length;
	page += "<hr>";
	updateCode();
}


function addCitation()
{
	var input = prompt("Enter the citation to be inserted:");

	if (input == "")
        { return; }

	lastElemStart = page.length;
	page += "<cite>" + input + "</cite>";
	updateCode();
}


function addImage()
{
	var input = prompt("Enter the image URL:");

	if (input == "")
        { return; }
	
	lastElemStart = page.length;
	page += "<img src = '"  + input + "' />";
	updateCode();
}

function addHeader()
{
	var size = prompt("Enter the header size (1-6, 1 largest):");
	var input = prompt("Enter the header text:");

	if (input == "" || size == "")
        { retun; }

	lastElemStart = page.length;
	page += "<h" + size + ">" + input + "</h" + size + ">";
	updateCode();
}



function addBGImage()
{
	var input = prompt("Enter the image URL:");
	var size = prompt("Enter the image size in Wid/hgh (ie: 100px 200px):");

	if (input == "" || size == "")
        { return; }

	lastStyleStart = style.length;
	style += " background: url('" + input + "'); background-size: " + size + "; ";

	
	document.getElementById("userPage").style.minWidth = size.split(' ')[0];
	document.getElementById("userPage").style.minHeight = size.split(' ')[1];
	updateCode();
}


function addEmbed()
{
	var input = prompt("Enter a source URL:");

	if (input == "")
        { return; }
	
	lastElemStart = page.length;
	page += "<embed src = '"  + input + "' />";
	updateCode();
}


function addVideo()
{
	var type = prompt("File type:");
	var input = prompt("Enter a source URL:");
	var width = prompt("Display width:");	
	var height = prompt("Display height:");	

	if (input == "" || type == "" || width == "" || height == "")
        { return; }
	
	lastElemStart = page.length;	
	page += "<video width = '" + width + "' height = '" + height + "' controls>";
	page += "<source src = '" + input + "' type = 'video/" + type + "'>";
	page += "</video>";
	updateCode();
}



function addLink()
{
	var input = prompt("Enter a source URL:");
	var linkText = prompt("Enter link's text (optional, shown instead of full url):");

	if (input == "")
        { return; }

	if (linkText == "")
        { linkText = input }

	lastElemStart = page.length;
	page += "<a href = '" + input + "'>" + linkText + "</a>";
	updateCode();	
}



function addList()
{
	var input = prompt("Enter the list items, use ; as delimiter.");

	if (input == "")
        { return; }

	var items = input.split(';');
	var numItems = items.length;
		
	lastElemStart = page.length;
	page += "<ul>";

	for (var i = 0; i < numItems; i++)
	{
		page += "<li>" + items[i] + "</li>";
	}

	page += "</ul>";
	updateCode();
}



function addDate()
{
	var curDate = new Date();
	lastElemStart = page.length;
	page += "<span> " + curDate.toLocaleString() + " </span>";
	updateCode();
}



function addTime()
{
	var curDate = new Date();
	lastElemStart = page.length;
	page += "<span> " + curDate.toLocaleTimeString() + " </span>";
	updateCode();
}


function addBGColor()
{
	var input = prompt("Enter the name or hex value (https://www.w3schools.com/colors/colors_names.asp) of the color you want:");

	if (input == "")
        { return; }

	lastStyleStart = style.length;
	style += " background-color: " + input +"; ";
	updateCode();
}



function addAudio()
{
	var type = prompt("Enter the file type:");
	var input = prompt("Enter the audio source url:");

	lastElemStart = page.length;
	page += "<audio controls> <source src = '" + input + "' type = 'audio/" + type + "'> </audio>";
	updateCode();

}



function addAbbv()
{
	var input = prompt("Enter the abbreviated form:");
	var def = prompt("Enter the definition/full form:");

	lastElemStart = page.length;
	page += "<abbr title = '" + def + "'>" + input + "</abbr>";
	updateCode();
}



function AddCentering()
{

	lastStyleStart = style.length;
	style += " text-align: center;";
	updateCode();

}







































































