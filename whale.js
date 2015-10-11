jQuery(document).ready(function($) {
   var num = parseInt(location.hash.substr(1));

   if (isNaN(num))
   {
     num = 142857;
   }
   console.log(num);
} );
