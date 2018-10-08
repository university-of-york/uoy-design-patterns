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
        var getObjFromXml = function(nodeTitles, childNodesToFetch) {

            var returnObj = {},
                xmlChildNodes;

            if(!Utils.doesObjExist(_xmlDoc)) {
                return returnObj;
            }

            // e.g. nodeTitles = ['titles', 'name', 'address']
            //      childNodesToFetch = [2, 1, 1]
            for (var i = 0; i < nodeTitles.length; i++) {
                var nodeTitle = nodeTitles[i];

                xmlChildNodes = _xmlDoc.getElementsByTagName(nodeTitle)[0].childNodes;

                if(childNodesToFetch.length >= i && typeof childNodesToFetch[i] !== 'undefined') {

                    if(childNodesToFetch[i] === 1) {
                        returnObj[nodeTitle] = xmlChildNodes[0].textContent;
                        continue;
                    } else {
                        returnObj[nodeTitle] = [];
                    }

                    // fetch specific child node value
                    for(var j = 0; j < childNodesToFetch[i]; j++) {
                        if(typeof xmlChildNodes[j] !== 'undefined') {
                            returnObj[nodeTitle][j] = xmlChildNodes[j].textContent;
                        }
                    }
                }
            }


            return returnObj;
        };

        var getXMLValue = function(nodeTitle, childNodesToFetch, returnStringValue) {
            var returnEl = [],
                xmlChildNodes,
                i = 0;

            if(!Utils.doesObjExist(_xmlDoc)) {
                return '';
            }

            xmlChildNodes = _xmlDoc.getElementsByTagName(nodeTitle)[0].childNodes;

            if(childNodesToFetch === -1) {

                // loop through and build up an output to return
                for(i = 0; i < xmlChildNodes.length; i++) {
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

            return returnEl;
        };

        var init = function(xmlDoc) {

            if(Utils.doesObjExist(xmlDoc)) {
                _xmlDoc = xmlDoc;
            }
        };


        return {
            init: init,
            getXMLValue: getXMLValue,
            getObjFromXml: getObjFromXml
        };
    }());

    return XML_READER;
});
