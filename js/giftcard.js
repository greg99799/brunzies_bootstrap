function popBalance() {
var width = 270;
// Replace with 315 if CAPTCHA is disabled. 
var height = 395; 
var merchantID = 3137988; 
  window.open('https://wwws.givex.com/Merchant_pages/'+merchantID,
        'balanceWindow', 
        width='+width+', 
        height='+height+',
        left=0, 
        top=0, 
        menubar=0, 
        toolbar=0, 
        status=0,
        resizable=0
    ); 
} 
