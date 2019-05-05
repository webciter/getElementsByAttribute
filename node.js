/* Code By David Clews */

/*
 * getElementsByAttributeValue
 * 
 * Gets all the elements from the DOM where attribute name and value match
 * 
 * @param {string} a The attribute name
 * @param {string} b The attribute value
 * @returns {array|null}
 */
Node.prototype.getElementsByAttributeValue = function(a, b){
    let c = this.all || this.getElementsByTagName("*");
    let d = new Array();
    for (var i in c) {
        if ((typeof c[i]) === "object"){
            if (c[i].getAttribute(a) === b.toString()){
                d.push(c[i]);
            }
        }
    }
    
    return d.length >= 1 ? d : null;
};

/*
 * getElementsByAttribute
 * 
 * Gets all the elements in the DOM where attribute name exists
 * 
 * @param {string} a The attribute name
 * @returns {array|null}
 */
Node.prototype.getElementsByAttribute = function(a){
    var c = this.all || this.getElementsByTagName("*");
    var d = new Array();
    for (var i in c) {
        if ((typeof c[i]) === "object"){
            if (c[i].hasAttribute(a) === true){
                d.push(c[i]);
            }
        }
    }
    
    return d.length >= 1 ? d : null;
};
