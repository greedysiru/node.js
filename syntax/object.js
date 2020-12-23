var members = ['siru','jaemin','greedysiru'];
console.log(members[1]); // 콘솔창에 jaemin 출력
var i = 0;
while(i < members.length){
  console.log('array loop',members[i])
  i = i + 1
}


var roles = {
  'programmer':'jaemin',
  'cat' : 'siru',
  'id' : 'greedysiru'
}
console.log(roles.programmer); // 콘솔창에 jaemin 출력
console.log(roles['programmer'])

for(var name in roles){
  console.log('object =>', name, 'value =>', roles[name]);
}
