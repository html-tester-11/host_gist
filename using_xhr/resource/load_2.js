var _json_api="https://api.github.com/gists/fcb39f54576e3b2d68ef845b2416d2bb";

function load()
{
   loadJSON(_json_api, function(response)
   {
        //alert(response);
         _data = JSON.parse(response); //eval('(' +response+')')
     


          });

}
