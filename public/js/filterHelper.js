console.log("connected");
var imagesToFilter = document.querySelectorAll("#lightgallery .imagesToFilter");
var checkBoxes = document.querySelectorAll("#filterModal .checkbox label input");

// setup click event handlers on filter checkboxes
for (var i = 0; i < checkBoxes.length; i++) {
	checkBoxes[i].addEventListener("click", filterImages , false);
	checkBoxes[i].checked = true;
}

// click event handler function
function filterImages(e) {
 	var clickedItem = e.target;
	console.log("clicked");
        console.log("clicked item value: " + clickedItem.value);
	if (clickedItem.checked == true) {
		hideOrShowItems(clickedItem.value, "hideItem", "showItem");
		console.log("checked");
	}
	else if (clickedItem.checked == false) {
		hideOrShowItems(clickedItem.value, "showItem", "hideItem");
		console.log("unchecked");
	}
}

// add or remove classes to show/hide the images
function hideOrShowItems(itemType, classToRemove, classToAdd) {
	for (var i = 0; i < imagesToFilter.length; i++) {
		var currentItem = imagesToFilter[i];

		// indexOf checks if the images tag(s) contain tag(s)
		if (currentItem.getAttribute("data-type").indexOf(itemType) >= 0) {
			console.log("show/hide");
			console.log(currentItem.getAttribute("data-type"));
			removeClass(currentItem, classToRemove);
			addClass(currentItem, classToAdd);
		}
	}
}

// helper functions for adding removing class values
function addClass(element, classToAdd) {
	var currentClassValue = element.className;
	
	if (currentClassValue.indexOf(classToAdd) == -1) {
        	if ((currentClassValue == null) || (currentClassValue === "")) {
            		element.className = classToAdd;
        } else {
            element.className += " " + classToAdd;
        }
    }
}
        
function removeClass(element, classToRemove) {
    var currentClassValue = element.className;
  
    if (currentClassValue == classToRemove) {
        element.className = "";
        return;
    }
  
    var classValues = currentClassValue.split(" ");
    var filteredList = [];
  
    for (var i = 0 ; i < classValues.length; i++) {
        if (classToRemove != classValues[i]) {
            filteredList.push(classValues[i]);
        }
    }
  
    element.className = filteredList.join(" ");
}



