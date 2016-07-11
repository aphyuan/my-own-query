//
// function _dojo(id){
//     var intro ={
//       Author: "Houyuan Pan",
//       Created: "Summer 2016"
//     };
//     //Avoid clobbering the window scope:
//     if(id){
//       if (window === this){
//         return new _dojo(id);
//       }
//       this.e = document.getElementById(id);
//       return this;
//     }else{
//       return intro;
//     }
// };
var _dojo = (function(){
  // var intro ={
  //       Author: "Houyuan Pan",
  //       Created: "Summer 2016"
  //     };
      //Avoid clobbering the window scope:

        this.e = document.getElementById("button");
        return {
          click: function(){
            console.log("hey!");
          },
          hover: function(callback){
            document.getElementById("txt").addEventListener('mouseover',callback);
            document.getElementById("txt").addEventListener('mouseout',callback);
          }
        };
}());


// _dojo.prototype = {
//   click: function(){
//     console.log("Don't click me!");
//   },
//   hover: function(){
//
//   }
// };
function hey(){
  console.log("nihao");
}
function btnClick(){
  _dojo.click();
}
function btnHover(){
  _dojo.hover(hey());
}
