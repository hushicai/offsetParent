
// @see: https://www.cnblogs.com/rubylouvre/archive/2012/10/30/2746751.html

window.onload = function(){
  var add = "<ul>";
  var i = 0;
  var hash = {
    1: "自身position: relative的DIV元素",
    2: "自身position: absolute的DIV元素",
    3: "自身position: fixed的DIV元素",
    0: "自身position: static的DIV元素"
  };

  "abcdefghijklmnopqrst".replace(/\w/g, function(id){
    i++;
    add += "<li>";

    if(i < 5) {
      add += "没有已定位的父节点，且";
    } if(i >= 5 && i < 9){
      add += "拥有一个已定位的父节点，且";
    }else if( i >= 9 && i < 13){
      add += "在table之内，td与table都没有定位，且";
    }else if( i >= 13 && i < 17){
      add += "在table之内，td相对定位，且";
    }else if( i >= 17){
      add += "在table之内，table相对定位，且";
    }

    add += hash[i % 4];
    id = id + id + id;

    var el = document.getElementById(id).offsetParent;
    var ret = (el && el.id) + "";

    switch(ret){
      case "html":
        add += "的offsetParent为HTML";
        break;
      case "body":
        add += "的offsetParent为BODY";
        break;
      case "relative":
        add += "的offsetParent为其最近被定位的祖先";
        break;
      case "td":
      case "td2":
      case "td3":
        add += "的offsetParent为其最近的<strong>TD、TH</strong>元素";
        break;
      case "table1":
      case "table2":
        add += "的offsetParent为其最近的<strong>TABLE</strong>元素";
        break;
      default:
        add += "的offsetParent为null";
        break
    }

    add += "</li>";
  });

  add += "</ul>";

  var el = document.createElement("form");

  el.style = 'position: absolute; top: 0; right: 0;';
  document.body.appendChild(el);
  el.innerHTML = add;
};
