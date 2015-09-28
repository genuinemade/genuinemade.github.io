var isIE=navigator.userAgent.match(/(?:MSIE |Trident.*rv:)(\d+)|$/i)[1],
    isWebkit=/webkit/i.test(navigator.userAgent),
    isWindows=/Windows NT/.test(navigator.userAgent);
if(isIE&&isIE<9){
	 
	 (function(s,i){ //HTML5创建
           for(i=0;i<s.length;i++)document.createElement(s[i]);
      })(['article','aside','canvas','footer','header','nav','section']);
}
