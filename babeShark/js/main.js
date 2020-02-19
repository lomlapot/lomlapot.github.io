if($(window).width() > 1024)
{
    $('body').parallax({
        'elements': [
            {
                'selector': '.dadyshark',
                'properties': {
                    'x': {
                        'left': {
                            'initial':575,
                            'multiplier': 0.05,
                            'unit': 'px',
                            'invert': false
                        }
                    },
                    'y': {
                        'top': {
                            'initial': 85,
                            'multiplier': 0.05,
                            'unit': 'px',
                            'invert': false
                        }
                    }
                }
            },

            { 
                'selector': '.baby',
                'properties': {
                    'x': {
                        'left': {
                            'initial':0,
                            'multiplier': 0.03,
                            'unit': 'px',
                            'invert': true
                        }
                    },
                    'y': {
                        'top': {
                            'initial': 0,
                            'multiplier': 0.03,
                            'unit': 'px',
                            'invert': true
                        }
                    }
                }
            },
        ]
    });
} else {
   // change functionality for larger screens
}
   // $('.puzyr').animate({ top: "-60px"}, 10000);
{
   var p =[
   '.solo1','.solo2','.solo3','.solo4'];
 
  var fun=function (el) {
      // body...
       $(el).animate({ top: "-300px"}, 5000);
  };    
 
  
   p.forEach(function(ellem,i){
    setTimeout(function(){
        fun(ellem);
    },5000*i);
});
     
    

     

   
    
   
 }   

// $('.text').animate({ left: "-400px"}, 10000);
// $('.text').animate({ left: "-400px"}, 10000);

    
 