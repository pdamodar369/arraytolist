
            var a = [ "Desktop", "Folder1",  "InnerFolder1" ];
            var b = [ "Desktop", "Folder1",  "Inner 2" ];
            var c = [ "Documents", "Folder 2", "InnerFolder1", "even deepper" ];
            var d = [ "Something Else", "Folder1",  "Inner 2" ];

            var all = [a, b, c, d];
            var Tree = {};
            var ul = document.getElementById("tree");

            function init(){
                for ( var i = 0; i < all.length; i++ ){
                    addToTree(Tree, all[i] );
                }
                createList(Tree, ul);
            }

            function addToTree(tree, array) {
                for (var i = 0, length = array.length; i < length; i++) {
                    tree = tree[ array[i] ] = tree[ array[i] ] || {};
                }
            }

            function createList( obj, _pushTo  ){
                for ( attr in obj ){
                    var _doIHaveChildren = function ( ){
                        for(var prop in obj[attr]) {
                            if (obj[attr].hasOwnProperty(prop)) {
                                return true;
                            }
                        }
                        return false;
                    }
                    var li = document.createElement("li");
                    li.id = attr.toString();
                    li.innerHTML = attr.toString();
                    if ( Tree.hasOwnProperty(attr) ){
                        ul.appendChild(li);
                    } else {
                        _pushTo.appendChild(li);
                    }
                    if ( _doIHaveChildren() === true ){
                        var ul2 = document.createElement("ul");
                        li.appendChild(ul2);
                    }
                    createList( obj[attr], ul2 );
                }
            }