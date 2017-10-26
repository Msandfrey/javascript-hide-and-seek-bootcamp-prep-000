function getFirstSelector(selector){
  return querySelector(selector).innerHTML
}
function nestedTarget(){
  return querySelector('div#nested div').target
}
function increaseRankBy(n){
  var ranks = querySelectorAll('ul.ranked-list')
  for(var i = 0; i < ranks.length; i++){
    ranks[i].innerHTML += 1
  }
}
function deepestChild(){

}
