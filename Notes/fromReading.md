ES6 arrow function... => - look this up, allows anonymous function as variable (syntax: const variable = () => {...})

#Fun Fun Function Videos:
-functions in JS are just values, same as numbers, strings, etc
-a higher order function is a function that uses another function
-anonymous function syntax example: 
  var tripler = function(x) {
    return X * 3;
  }
  let waffle = tripler;
  waffle(15) //will return 45
-filter
  -works on arrays
    const var = thingToFilter.filter(function(itemToFilterWith) {
      return itemToFilterWith.valueOfItem === 'whateverFilterYouWant';
    });
    -thingToFilter = the array that the filter function is being used on
    -filter = filter (the function we're using - will always be filter if we're filtering)
    -function = function (an anonymous function, so this will always be function)
    -itemToFilterWith = one item in the array; if the array contains 'letters', this would be 'letter', e.g.
    -valueOfItem = assuming an array of objects, this will be some quality of the item (perhaps 'vowel')
    -whateverFilterYouWant = what you're screening for; 
  -note the odd parens replacement - won't work without them that whateverFilterYouWant (Because it's closing the function call)
  -if you want to filter on multiple criteria, can use && or || (see JSpractice.js)
  -find does the same as filter, but only returns the first item (will make a new array with one element)
  -can also use filter to kick things out of an array (see JSpractic.js)
-map
  -similar to filter (works on arrays, similar syntax)
  -instead of selecting/picking out items, it transforms them
    const var = arrayToMap.map(function(itemInArray) {
      return itemInArray.valueWanted;
      -this variation of map will take the value and list all of those in the new array
  })
-reduce
  -very versatile tool
  -syntax:
    const var = arrayName.reduce(function(sum, iteratedObject) {
      return sum + iteratedObject.propertyToTotal;
    }, 0)
  -slightly different from other higher functions so far 
    -takes 2 parameters: first is the sum or whatever, second is what will be whatever is iterated 
    -needs a value directly after the function to start sum at (often 0, but can be object, number, whatever)

#JavaScript and DOM
<a href="https://www.w3schools.com/js/js_htmldom_html.asp">
-document.write() can be used to write directly to the HTML output stream
  -example syntax (as it would appear in an HTML doc): 
    <script>
      document.write(Date());
    </script>
  -note that if you do this after the page has loaded, it will overwrite the content of the page
-to alter HTML, use .innerHTML
  -example syntax:
    document.getElementById(id).innerHTML = new HTML
    -note that var element = document.getElementById(id) can be used to replace that text (see examples)
-to change the value of an HTML attribute, <...>.attribute = new value
  -example syntax: 
    document.getElementById(id).attribute = new value
    -note that this isn't literally 'attribute' - the name of the attribute goes there

<a href="https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_dom_html2">
-to change an element using tag instead of ID:
  -example syntax: 
    document.getElementsByTagName('p')[0].innerHTML = 'New Text';
    -the number in brackets tells it *which* of those tags to change... so [0] will change the first, and so on...
    -without brackets, will apply to all instances of that element
-to change an element using class instead of tag or ID:
  -example syntax:
    document.getElementsByClassName('class')[0].innerHTML = <...>;
    -number in brackets tells it which of the class instances to change
-to change a style element, use <...>.style.attributename = <...>
  -example syntax: 
    document.getElementById("demo").style.color = "red";

<a href="https://www.w3schools.com/js/js_htmldom_elements.asp">
-to find an element within an element, use variables
  -example syntax (finds id main, then all p elements within main):
    var x = document.getElementById("main");
    var y = x.getElementsByTagName("p");
-to find an element by a particular CSS selector:
  -example syntax: 
    var x = document.querySelectorAll("p.intro");
-to find an element by object collection: 
  -example syntax (finds all forms with frm1 id (should only be one)):
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
  -for a list of the objects that can be found this way, see above link (toward bottom)

<a href="https://www.w3schools.com/js/js_htmldom.asp">
-overview of DOM reference

<a href="https://www.w3schools.com/js/js_htmldom_document.asp">
-great overview of javascript DOM syntax

<a href='https://www.w3schools.com/js/js_htmldom_css.asp'>
-to add an event, add an Event Listener
  -syntax example (changes style on click)(goes in HTML):
    <h1 id="id1">My Heading 1</h1>
    <button type="button" onclick="document.getElementById('id1').style.color = 'red'">Click Me!</button>
  -another example:
    <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

<a href="https://www.w3schools.com/js/js_htmldom_animate.asp">
-resource for how to create a basic webpage animation with javascript

<a href="https://www.w3schools.com/js/js_htmldom_events.asp">
-syntax example (calling a function via an event handler):
  <h1 onclick="changeText(this)">Click on this text!</h1>
  <script>
    function changeText(id) { 
      id.innerHTML = "Ooops!";
    }
  </script>
-use event attributes to assign to elements 
  -syntax example (assigning onclick to button):
    <button onclick="displayDate()">Try it</button>
-assign events to HTML elements via DOM
  -syntax example (onclick event to button):
    <script>
      document.getElementById("myBtn").onclick = displayDate;
    </script>
-onload and onunload events are triggered when user loads or unloads the page, respectively
  -example:
    <body onload="checkCookies()">
-onchange event often used to validate input fields
  -example:
    <input type="text" id="fname" onchange="upperCase()">
    -upperCase() function will happen when user changes the content of an input field
-onmouseover and onmouseout are events that will change something when the user mouses over content
-see more events in link above

<a href="https://www.w3schools.com/js/js_htmldom_eventlistener.asp">
-adding an event listener
  -syntax example (fires when user clicks a button):
    document.getElementById("myBtn").addEventListener("click", displayDate);
-addEventListener() attaches to an element and does not overwrite existing event handlers (the limitation to not using addEventListener)
-you can add multiple event listeners to one element - even the same type of event listener
-event listeners can be added to any DOM element, not just HTML objects
-remove event listeners with removeEventListener()
-addEventListener syntax decoded:
  -addEventListener(EventInQuestion(e.g.click), FunctionCalledWhenEventHappens, OptionalBooleanForCapturing/Bubbling)
    -note that you don't use 'on' in front of the event - just put 'click', not 'onclick'
  -example:
    element.addEventListener("click", function(){ alert("Hello World!"); });
  -to pass parameters within the called function, use an anonymous function:
    element.addEventListener("click", function(){ myFunction(p1, p2); });
-bubbling and capturing are used to determine the priority of events when two elements both have events that will trigger
  -in bubbling, inner element is first; in capturing, outer element is first
  -bubbling is the default and is equal to boolean 'false'
-lots more at the link above

<a href="https://www.w3schools.com/js/js_htmldom_navigation.asp">
-within HTML, you can navigate using DOM nodes
-everything in an HTML doc is a node: the document, the elements, the text within elements, and all comments(!)
<img src="DOMtree.gif">
-image above (saved in Notes folder and available on link) shows the parent relationships for each node
-note that elements don't innately have text.. but they may have children text nodes that can be accessed with innerHTML
-innerHTML accesses the nodeValue of the first child
-can also access the first child with the following syntax:
  var myTitle = document.getElementById("demo").childNodes[0].nodeValue;
-nodeName specifies the name of a node and:
  -is read-only
  -nodeName of an element node is the same as the tag name
  -nodeName of an attribute is the attribute name
  -nodeName of a text node is #text
  -nodeName of the document as a whole is #document
-nodeValue can also be used to access a node and:
  -nodeValue of an element is null
  -nodeValue of a text node is the text itself
  -nodeValue for attribute nodes is the attribute itself
-nodeType is read-only and returns the type of the node
  -the type will be a numerical value - see a list of some at the link above

<a href="https://www.w3schools.com/js/js_htmldom_nodes.asp">
-all about creating and removing nodes (elements)
-to add a new element to the DOM, create the element node first, then append it to an existing element
  -syntax example: 
    <div id="div1">
      <p id="p1">This is a paragraph.</p>
      <p id="p2">This is another paragraph.</p>
    </div>
    <script>
      var para = document.createElement("p");
      var node = document.createTextNode("This is new.");
      para.appendChild(node);
      var element = document.getElementById("div1");
      element.appendChild(para);
    </script>
  -this syntax will append the new paragraph after the two existing paragraphs
  -if you want to insert something before an existing element, use insertBefore():
    <div id="div1">
      <p id="p1">This is a paragraph.</p>
      <p id="p2">This is another paragraph.</p>
    </div>
    <script>
      var para = document.createElement("p");
      var node = document.createTextNode("This is new.");
      para.appendChild(node);
      var element = document.getElementById("div1");
      var child = document.getElementById("p1");
      element.insertBefore(para, child);
    </script>
  -with insertBefore(), the first parameter is the node to be inserted; the second is the element that it will be inserted before
-to remove an HTML element, you need to know the parent of the element
  -syntax example:
    <div id="div1">
      <p id="p1">This is a paragraph.</p>
      <p id="p2">This is another paragraph.</p>
    </div>
    <script>
      var parent = document.getElementById("div1");
      var child = document.getElementById("p1");
      parent.removeChild(child);
    </script>
  -if you're not sure what the parent is, can use:
    var child = document.getElementById("p1");
    child.parentNode.removeChild(child);
-to replace a DOM element, syntax example:
  <div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
  </div>
  <script>
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.replaceChild(para, child);
  </script>



