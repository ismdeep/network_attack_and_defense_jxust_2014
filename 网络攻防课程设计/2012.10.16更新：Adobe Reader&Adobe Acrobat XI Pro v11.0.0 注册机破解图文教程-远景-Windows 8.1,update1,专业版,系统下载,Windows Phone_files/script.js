jQuery(function($j){
	if (!getcookie("zantip") && $j("#tools .pc_zan").length == 1) {
		var $zan = $j("#tools .pc_zan"),
			zantip = document.createElement("div");
		zantip.id = "zantip";
		zantip.innerHTML = '<strong>����ޣ�</strong><p>�㡰�ޡ�֧����ϲ�������£�����¥��������ྫ�����ݣ���Ҳ���������ջ�Ŷ��</p><span id="zantip_ok">�õ�</span><i id="zantip_close"></i>';
		document.body.appendChild(zantip);
	
		$("zantip_ok").onclick = $("zantip_close").onclick = function () {
			setcookie("zantip", 1, 60*60*24*180);
			document.body.removeChild(zantip);
		};
		
		function setTipPos() {
			var offset = $zan.offset();
			zantip.style.cssText = "top:" + (offset.top + 70) + "px;left:" + (offset.left - 11) + "px";
		};
	
		$j(window).resize(setTipPos).scroll(setTipPos);
		setTipPos();
	};
});