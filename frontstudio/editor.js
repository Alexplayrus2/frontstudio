function exporthtml() {
  const exportbox = document.getElementById("exportbox");
  const tinymcecontent=tinymce.activeEditor.getContent();
  const jsbox = document.getElementById("javascript");
  const colorbox = document.getElementById("color");
  const bgcolorbox = document.getElementById("bgcolor");
  const exportstring=`
   <!DOCTYPE html>
   <head>
   <style type="text/css" media="screen">
   body {
   color: ${colorbox.value};
   background-color: ${bgcolorbox.value};
   }
   </style>
   </head>

   <body>
   ${tinymcecontent}
  
   <script>
   ${jsbox.value}
   </script>
   </body>
    `
  exportbox.value=exportstring
};
function createelement() {
  const customelement = document.getElementById("customelement");
  const elemid = document.getElementById("cstelementid");
  const new_elem=document.createElement(customelement.value);
  new_elem.setAttribute("id", elemid.value);
  tinyMCE.activeEditor.selection.setNode(new_elem);
};
