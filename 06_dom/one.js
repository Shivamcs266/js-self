// Difference Between

// .innerText = It provides the that type of text who is visible .
// .textContent = it shows the all text, which is hides with any type of display or style property .( isme agar hidden text bhi hoga jispar styleing ki wajah se visible na ho bo bhi dikhega.)

// .innerHTML = is ptovides the html value . (isme h1, p all types tags visible hote hai)

// inner html - ye html tags ko support karta hai, inner text ya content -- html tags ko support nahi karta hai.


// ********get method******** 

//document.getElementById = id se collection lene k liye . 
//document.getElementsByClassName = class se colection lene ke liye .


// Query selector ********************

//document.querySelector('h1') = it provides the all h1 tag
//document.querySelector('#title') = for id selector and get data for id. '#'
//document.querySelector('.heading') = for class selector and get data for the reference for class. '.'
//document.querySelector('input[type="paasword"]') = for add a input value.

// document.querySelector('ul') = for select the whole unorderd list.
// const myul = document.queryselctor('ul') = for assign a name myul in a variable.
// myul.querySelector('li') = for target the inside ul list. (list) #it is provide the only one list, and target only one list.
// const turngreen = myul.querySelector('li') = for assign a value to target list.
// turngreen.style.backgroundColor = "green" = assign for styling.
// turngreen.style.padding = "10px" = for add padding on particular list.


// querySelectorAll ****************

// document.querySelectorAll('li') = its target the all list inside the ul.
// const myH1 = document.querySelectorAll('h1') == assin variable in myH1
// myH1 = its provide the NodeList
// myH1.style.color = "green" = it is not run because it shoes the like a Array, but not have a property of Array.
// myH1[0].style.color = "green" = it works ! because assign the 0 element for run the color property. 

//**************tempList and nodeList *************
// it is look like a array but not pure array.
// if i converted the tempList for array we use Array.from('tempList') : it shows the functionality same as Array. 
// Array.from(tempClassList)
// const.myConvertedArray = Array.from(tempClassList)
// myConvertedArray.forEach(function(li) {
// li.style.color = "orange"
// })