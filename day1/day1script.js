/*const不可更改原始值*/
/*querySelectAll深度遍历匹配的元素列表，返回的对象是 NodeList*/
const tus = document.querySelectorAll('.tu');

function addactive(){
        removeactive();
    /*Element.classList 是一个只读属性，返回一个元素的类属性的实时 DOMTokenList 集合*/
    /*虽然 element.classList 本身是只读的，但是你可以使用 add() 和 remove() 方法修改它*/
    
    /*在当前tu的class中添加active*/
    /*当前tu应该使用this！！！*/
        this.classList.add('active');
}

function removeactive(){
    /*遍历tus，去除所有类中的active*/
    tus.forEach(function(tu){
            tu.classList.remove('active');
        })
}

/*forEach() 方法对数组的每个元素执行一次给定的函数*/
tus.forEach(function(tu){
    /*EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行*/
    tu.addEventListener('click',addactive)
 })
