/*

---
title: XML reading utility module
name: xml-reader
category: Javascript
---

 */
define(['app/utils'], function (Utils) {

    var XML_READER = (function(){

        // Variables
        var _xmlDoc;


        // Private functions



        // Public functions
        var getXMLValue = function(nodeTitle, childNodesToFetch, returnStringValue) {
            var returnEl = [],
                xmlChildNodes;

            if(!Utils.doesObjExist(_xmlDoc)) {
                return '';
            }

            xmlChildNodes = _xmlDoc.getElementsByTagName(nodeTitle)[0].childNodes;

            if(childNodesToFetch === -1) {

                // loop through and build up an output to return
                for(var i = 0; i < xmlChildNodes.length; i++) {
                    returnEl.push(xmlChildNodes[i].textContent);
                }
            } else {
                // fetch specific child node value
                for(i = 0; i < childNodesToFetch.length; i++) {
                    if(typeof xmlChildNodes[childNodesToFetch[i]] !== 'undefined') {
                        returnEl.push(xmlChildNodes[childNodesToFetch[i]].textContent);
                    }
                }
            }


            if(returnStringValue) {
                return returnEl.join(', ');
            }

            return returnEl
        };

        var init = function(xmlDoc) {

            if(Utils.doesObjExist(xmlDoc)) {
                _xmlDoc = xmlDoc;
            }
        };


        return {
            init: init,
            getXMLValue: getXMLValue
        };
    }());

    return XML_READER;
});
