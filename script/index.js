function myFunction() {
    var Str='HTML stands for Hyper Text Markup Language, which is the most widely used language on Web to develop web pages. HTML was created by Berners-Lee in late 1991 but "HTML 2.0" was the first standard HTML specification which was published in 1995.<br><a id="learn_more" href="Html_page.html">Learn More';
    document.getElementById("info").innerHTML = Str;
  }

  function myFunction1() {
      var Str1='Cascading Style Sheets, fondly referred to as CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages. <br><a id="learn_more" href="Css_page.html">Learn More';
    document.getElementById("info").innerHTML =Str1; 
  }

  function myFunction2() {
      var Str2='JavaScript is the Programming Language for the Web.<br>JavaScript can update and change both HTML and CSS.<br>JavaScript can calculate, manipulate and validate data.<br><a id="learn_more" href="Js_page.html">Learn More'
    document.getElementById("info").innerHTML =Str2 ;
  }