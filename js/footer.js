/*!
 * Bohe Technology
 * Copyright 2016
 *
 * Date: Wed Jan 13 15:23:05 2016 
 */
 
var globle_footer = '<div class="footer">';
globle_footer += '<div class="footerbox">';
globle_footer += '<ul><li><a href="ZP.html">诚聘英才</a>|</li>';
globle_footer += '<li><a href="contact.html">联系我们</a>|</li>';
globle_footer += '<li><a href="tip.html">风险提示</a>|</li>';
globle_footer += '<li><a href="safe.html">安全提示</a>|</li>';
globle_footer += '<li><a href="clause.html">免责条款</a>|</li>';
globle_footer += '<li><a href="law.html">法律法规</a></li>';
globle_footer += '</ul>';
globle_footer += '<div>Copyright © 2006-2013 fengrunjf.com All rights reserved</div>';
globle_footer += '<div>北京易如投资管理有限公司版权所有</div>';
globle_footer += '</div>';
globle_footer += '</div>';
document.write(globle_footer);

$(function(){

	AjaxObj.footgetContact(function(result){
		if(result.Data.code ==1){
			$('#footerLeft').html(result.Data.data.contentdetails)
			//sessionStorage.setItem('contentdetails',result.Data.data.contentdetails)
		}else{
			alert(result.Data.msg)
		}
	})
})