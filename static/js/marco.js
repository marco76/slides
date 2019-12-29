document.addEventListener("DOMContentLoaded", loadScreens);

function loadScreen(pageTitle, postFunction) {
    console.log('loadscreen', pageTitle);
  loadTitle(pageTitle, postFunction);
};

async function loadTitle(pageTitle, postFunction){
  let htmlCode = await fetch('../static/pages/'+pageTitle+'.html');
        let text = await htmlCode.text();
        let element = document.getElementsByName(pageTitle);
        if (!element) {
            console.log(pageTitle + ' not found!');
        }
        else {
            element[0].innerHTML = text;
            if (postFunction) {
              postFunction();
            }
        }
}

function loadHighlighter(){
    console.log('load blocks');
    var blocks = document.getElementsByTagName('code');
    console.log('blocks', blocks);
    for (let item of blocks) {
        console.log('block', item);
        hljs.highlightBlock(item);
    }
}
/**
 * function loadScreens(){
        loadScreen('test')
      }
 */

