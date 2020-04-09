var array = [
    {id: 1, title: 'hello', parent: {number:0}},
    {id: 2, title: 'hello', parent: {number:0}},
    {id: 3, title: 'hello', parent: {number:1}},
    {id: 4, title: 'hello', parent: {number:3}},
    {id: 5, title: 'hello', parent: {number:4}},
    {id: 6, title: 'hello', parent: {number:4}},
    {id: 7, title: 'hello', parent: {number:3}},
    {id: 8, title: 'hello', parent: {number:2}}

]
function getNestedChildren(arr, parent) {
    var children = [];
    for(var i =0; i < arr.length; ++i) {
        if(arr[i].parent.number == parent.number) {
            var grandChildren = getNestedChildren(arr, {number: arr[i].id})

            if(grandChildren.length) {
                arr[i].children = grandChildren;
            }
            children.push( arr[i]);
        }
    }
    return children;
}
var nest = getNestedChildren(array,{number: 0});
console.log( JSON.stringify(nest) );