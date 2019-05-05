# getElementsByAttribute
Gets the Elements by attribute name and or value

Search the DOM for Elements by Attribute without jQuery. Two functions too extend the Node object.

<pre>
/* find all elements in DOM that have a data-id attribute regardless of the value */
document.getElementsByAttribute("data-id");

/* find all elements in DOM that have a data-class_name attribute with the exact value of one */
document.getElementsByAttributeValue("data-id", "one");

</pre>
