var array = [
    {id: 22, title: 'hello', parent: {number:0}},
    {id: 6, title: 'hello', parent: {number:1}},
    {id: 78, title: 'hello', parent: {number:1}},
    {id: 105, title: 'hello', parent: {number:6}},
    {id: 63, title: 'hello', parent: {number:6}},
    {id: 87, title: 'hello', parent: {number:6}},
    {id: 1, title: 'hello', parent: {number:80}},
    {id: 104, title: 'hello', parent: {number:81}},
    {id: 80, title: 'hello', parent: {number:22}},
    {id: 81, title: 'hello', parent: {number:22}}

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