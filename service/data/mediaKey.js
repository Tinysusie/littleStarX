
var pswCtrlPort = 65000;
//var rsaKey = "";//"-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNMWxnj1/Vt42H0ZZkAhbsRyfL\nDbTo+/eI2qv5e9gIlsrUMLYTAChJGtulflo4kD4E1oSC1WFYAgtYf2Ow9XUlpLTE\nsRLS6FaIeYB2PDTJQq8JwW3EwrAyUIG9sbT3LtK/pHc43uPfcLvR+8LlZuJn2mci\nFPa6STgl2LSMVh097QIDAQAB\n-----END PUBLIC KEY-----";
//var rsaKey2 = "";//"-----BEGIN PRIVATE KEY-----\nMIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAM0xbGePX9W3jYfR\nlmQCFuxHJ8sNtOj794jaq/l72AiWytQwthMAKEka26V+WjiQPgTWhILVYVgCC1h/\nY7D1dSWktMSxEtLoVoh5gHY8NMlCrwnBbcTCsDJQgb2xtPcu0r+kdzje499wu9H7\nwuVm4mfaZyIU9rpJOCXYtIxWHT3tAgMBAAECgYAnTYUvHOZFYGAqmLmOtFvBrCty\nGFEDo2eZfhEcu1z44DE/jYkCgLA2uH9D5rzPQsmuUYyWJtr7aYDU1am5tnpWgLV9\nFyl3eVn9FayFtH2IlM1Sj/fFKwIfEDLIrI0iSmfTimlDBJUY01hJx9y/MI4XuFO6\nxPoAAmP42exa9RSXQQJBAOaD1f7NQvYfUDpPoCiJH3CBo7E/tOvRnBYvewccE+6I\nKG+Za0a7lnm34i4Y0ShAJ2ca5gV3G+WDh22CQNl/O/0CQQDj4OmLP169gmbaWk8X\nf+rze2BJMYaoFLB8+HMs/1PfpN+4l57GJHaOStJ0Oly8zYVu4jTojTN6hrp7fJdH\n2RSxAkBH7QD7tU5cf57H4wqFO2v87eaGqusn3cqHPZ90s3Ugq4l6cPOBKY0lQ5Qm\ncAXrOkFRMZpuQCELN0QtjkPv2Xx9AkBHcMGG+Cz5eKJKHjnhgibkgm9jQvWWSDY0\nV6e0Ga/v0z6YHmCWeeP5JBfqfEmKn1wPsTcpGOtkpExeXmcHDVVhAkEAmue/Qjfk\nJ1bHesZn2etc4XLzp5l9+vVUpCLiaeociC4TZwdsc9VZuKHxtJ8Jh1CtEq+F4ba+\n3s6wE/HdWlziaA==\n-----END PRIVATE KEY-----";
var checkCtrlAliveTimer;

var iv = '0692036503250300';

var sendUUIDToControlURL = "/security/control/sendUUIDToControl.htm";
var getVersionNumURL = "/security/control/getVersionNum.htm";
var isCtrlAliveURL = "/security/control/isCtrlAlive.htm";
var startHookURL = "/security/control/startTypeHook.htm";
var stopHookURL = "/security/control/stopTypeHook.htm";
var clearKeybordDataURL = "/security/control/clearTypeKeybordData.htm";
var startHookAndClearPasswordURL = "/security/control/startTypeHookAndClearPwd.htm";
var updateControlURL = "https://www.mideaepay.com/security/control/updateControl.json";
var getUUIDAndPubRSAURL = "https://www.mideaepay.com/security/common/getPublicKey.json";
var installCertURL = "/security/control/installCert.htm";
var isCertInstalledURL = "/security/control/isCertInstalled.htm";
var deleteCertURL = "/security/control/deleteCert.htm";
var setSelectRangeURL = "/security/control/setTypeSelectRange.htm";
var getTokenURL = "https://www.mideaepay.com/security/common/getToken.json";
var getPasswordURL = "/security/control/getPassword.htm";
var getPasswordsURL = "/security/control/getPasswords.htm";
var getPasswordsiURL = "/security/control/getPasswordsi.htm"; 
var getCtrlDownloadLnkURL = "https://www.mideaepay.com/security/control/getControlDownloadUrl.json";

function delCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval = getCookie(name);
	if (cval != null)
		document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

function handleCookie(name, value, obj) {
	if (arguments.length > 1) {
		var Days = 30;
		if (obj && obj.expires) {
			Days = obj.expires;
		}
		var exp = new Date();
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=.mideaepay.com";
	} else {
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(name + "=")
			if (c_start != -1) {
				c_start = c_start + name.length + 1
				c_end = document.cookie.indexOf(";", c_start)
				if (c_end == -1) c_end = document.cookie.length
				return unescape(document.cookie.substring(c_start, c_end))
			}
		}
		return "";
	}
}

window.console = window.console || {
	log: $.noop
};


var safectrl = {
	downloadUrl: "",
	rsaUUID: "",
	rsaKey: "",
	si: "",
	data: {
		"loginName": " "
	},
	needAuth: false,
	genUUID: function (len, radix) {
		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
		var uuid = [], i;
		radix = radix || chars.length;

		if (len) {
			// Compact form
			for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
		} else {
			// rfc4122, version 4 form
			var r;

			// rfc4122 requires these characters
			uuid[8] = uuid[13] = uuid[18] = uuid[23] = '';
			uuid[14] = '4';

			// Fill in random data.  At i==19 set the high bits of clock sequence as
			// per rfc4122, sec. 4.1.5
			for (i = 0; i < 36; i++) {
				if (!uuid[i]) {
					r = 0 | Math.random() * 16;
					uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
				}
			}
		}

		return uuid.join('');
	},
	/*
	  Encrypt:function(word, key){
	  key = '0392039203920300';
		  var parseKey = CryptoJS.enc.Hex.parse(key);  
		  var srcs = CryptoJS.enc.Hex.parse(word);
	  var iv2 = CryptoJS.enc.Hex.parse(iv);
		  var encrypted = CryptoJS.AES.encrypt(word, parseKey, { iv: iv });
	  console.log(parseKey);
	  console.log(word);
	  console.log('encrypted:' + encrypted.ciphertext);
	  console.log('encrypted2:' + Base64.encode(encrypted.ciphertext.toString()));
		  return encrypted.ciphertext.toString().toUpperCase();
	  },
  
	  Decrypt:function(word, key){  
		  console.log(key);
		  var parseKey = CryptoJS.enc.Utf8.parse(key);  
		  var encryptedHexStr = CryptoJS.enc.Hex.parse(word);
		  var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
		  var decrypt = CryptoJS.AES.decrypt(srcs, parseKey, { iv: iv,mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
		  var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8); 
		  return decryptedStr.toString();
	  },
	*/
	/**
	 * 加密数据
	 * @param {type} data 待加密的字符串
	 * @param {type} keyStr 秘钥
	 * @param {type} ivStr 向量
	 * @returns {unresolved} 加密后的数据
	 */
	aesEncrypt: function (data, keyStr, ivStr) {
		var sendData = CryptoJS.enc.Utf8.parse(data);
		var key = CryptoJS.enc.Utf8.parse(keyStr);
		var iv = CryptoJS.enc.Utf8.parse(ivStr);
		var encrypted = CryptoJS.AES.encrypt(sendData, key, { iv: iv });
		//return CryptoJS.enc.Base64.stringify(encrypted.toString(CryptoJS.enc.Utf8));
		return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
	},
	/**
	 * 
	 * @param {type} data BASE64的数据
	 * @param {type} key 解密秘钥
	 * @param {type} iv 向量
	 * @returns {undefined} 
	 */
	aesDecrypt: function (data, keyStr, ivStr) {
		var key = CryptoJS.enc.Utf8.parse(keyStr);
		var iv = CryptoJS.enc.Utf8.parse(ivStr);
		//解密的是基于BASE64的数据，此处data是BASE64数据
		var decrypted = CryptoJS.AES.decrypt(data, key, { iv: iv });
		return decrypted.toString(CryptoJS.enc.Utf8);
	},
	encryptPostData: function (data) {
		var RequstId = safectrl.genUUID();
		var PlainText = "";
		if (typeof data != 'undefined' && data != '') {
			PlainText = data + "&";
		}
		PlainText = PlainText + "timestamp=" + new Date().getTime() + "&" + "uuid=" + safectrl.getRSAuuid();
		//console.debug('PlainText:' + PlainText);
		var DataEncryptResult = safectrl.aesEncrypt(PlainText, RequstId.substring(0, 16), iv);//RequstId.substring(0,15)
		//console.debug('DataEncryptResult:' + DataEncryptResult);
		var KeyEncryptResult = RequstId;
		if (safectrl.isCheckPortSuccess()) {
			var crypt = new JSEncrypt();
			crypt.setPublicKey(safectrl.getRSAKey());
			KeyEncryptResult = crypt.encrypt(RequstId);
		}
		//console.debug('KeyEncryptResult:' + KeyEncryptResult);
		return { data: "params=" + encodeURIComponent(DataEncryptResult) + "&requestId=" + encodeURIComponent(KeyEncryptResult) + "&" + "uuid=" + safectrl.getRSAuuid(), RequstId: RequstId };
	},

	startCheckCtrlAlive: function () {
		checkCtrlAliveTimer = window.setInterval(safectrl.checkCtrlAlive, 1000);
	},
	stopCheckCtrlAlive: function () {
		window.clearInterval(checkCtrlAliveTimer);
	},
	requstCtrl: function (params) {
		var requstData = safectrl.encryptPostData(params.data);
		$.ajax({
			dataType: "jsonp",
			timeout: params.timeout ? params.timeout : 3000,
			url: "https://localhost:" + safectrl.getCtrlPort() + params.url,
			data: requstData.data,
			success: function (data) {
				console.log("requstCtrl success msg:" + data);
				if (data[0] == "{") {
					var dataJson = eval("(" + data + ")");
					if (dataJson && dataJson.code == '10004') {
						safectrl.getToken(); //重新建立通信
						if (params.reconnect) {
							params.reconnect();
						}
						else {
							safectrl.onCtrlReconnect();
						}
						return;
					}
				}
				var decryptData = safectrl.aesDecrypt(data, requstData.RequstId.substring(0, 16), iv);
				if (!decryptData) {
					if (params.fail) {
						params.fail(dataJson);
					}
					return;
				}
				//console.debug("requstCtrl success decryptData:" + decryptData);
				var dataJson = eval("(" + decryptData + ")");
				//console.debug("requstCtrl success decryptData:" + dataJson.result);
				if (dataJson.code == '0') {
					if (params.success) {
						params.success(dataJson);
					}
				}
				else if (dataJson.code == '10004') { //没rsakey
					safectrl.checkPortSuccess = false;
					dataJson.info = "安全控件出错，请关闭浏览器后重试";
					if (params.fail) {
						params.fail(dataJson);
					}
				}
				else {
					if (params.fail) {
						params.fail(dataJson);
					}
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				console.log("error:" + textStatus);
				console.log("error:" + toString(XMLHttpRequest));
				console.log("error:" + toString(errorThrown));
				if (params.error) {
					params.error();
				}
			}
		});
	},
	lastCheckCtrlAliveTime: 0,
	checkCtrlAlive: function () {
		safectrl.requstCtrl({
			data: "",
			url: isCtrlAliveURL,
			success: function (data) {
				safectrl.lastCheckCtrlAliveTime = new Date().getTime();
			},
			fail: function (data) {
				if (safectrl.lastCheckCtrlAliveTime <= 0) {
					safectrl.lastCheckCtrlAliveTime = new Date().getTime();
				}
				if (safectrl.lastCheckCtrlAliveTime > 0 &&
					new Date().getTime() - safectrl.lastCheckCtrlAliveTime > 3000) {
					safectrl.onCtrlError();
				}
			},
			error: function () {
				if (safectrl.lastCheckCtrlAliveTime <= 0) {
					safectrl.lastCheckCtrlAliveTime = new Date().getTime();
				}
				if (safectrl.lastCheckCtrlAliveTime > 0 &&
					new Date().getTime() - safectrl.lastCheckCtrlAliveTime > 3000) {
					safectrl.onCtrlError();
				}
			}
		});
	},
	onCtrlError: function () {
		$(".password").hide();
		$(".install_ctrl_tips").show();
		$(".reconnect_ctrl_tips").hide();
		$(".update_ctrl_tips").hide();
		$(".checking_ctrl_tips").hide();

		if(safectrl.downloadUrl)
		{
			$(".install_ctrl_tips").attr("href", safectrl.downloadUrl);
		}
		else
		{
			safectrl.getCtrlDownloadLnk();
		}
		
	},
	onCtrlSuccessCallBack: undefined,
	onCtrlSuccess: function (flag, url) {
		if (safectrl.onCtrlSuccessCallBack) {
			safectrl.onCtrlSuccessCallBack();
			safectrl.onCtrlSuccessCallBack = undefined;
		}
		if (flag == -1) {// 不需要更新控件
			$(".password").val("");
			$(".password").show();
			$(".install_ctrl_tips").hide();
			$(".reconnect_ctrl_tips").hide();
			$(".update_ctrl_tips").hide();
			$(".checking_ctrl_tips").hide();
		}
		else if (flag == 1) {// 需要更新控件
			$(".password").hide();
			$(".install_ctrl_tips").hide();
			$(".reconnect_ctrl_tips").hide();
			$(".update_ctrl_tips").show();
			$(".checking_ctrl_tips").hide();

			// 更新控件的链接从后台获取
			$(".update_ctrl_tips").attr("href", url);
		}
	},
	onCtrlReconnect: function () {
		$(".password").hide();
		$(".install_ctrl_tips").hide();
		$(".reconnect_ctrl_tips").show();
		$(".update_ctrl_tips").hide();
		$(".checking_ctrl_tips").hide();
		//if ("#" + document.activeElement.id == safectrl.passwordID) {
			//$("#reconnect_ctrl_tips")[0].focus();
		//}
	},
	onGotPrivRSAKey: function() {
		$(".password").show();
		$(".install_ctrl_tips").hide();
		$(".reconnect_ctrl_tips").hide();
		$(".update_ctrl_tips").hide();
		$(".checking_ctrl_tips").hide();
	},
	checkCtrlPort: function () {
		safectrl.setCtrlCookie('checkPortSuccess', "0");
		if (pswCtrlPort == 65001) {
			safectrl.onCtrlError();
		}
		if (pswCtrlPort >= 65030) {
			safectrl.onCtrlError();
			return;
		}
		safectrl.requstCtrl({
			data: "",
			url: sendUUIDToControlURL,
			timeout: 3000,
			success: function (data) {
				console.log("checkCtrlPort success " + data);
				safectrl.setCtrlCookie('ctrlPort', pswCtrlPort);
				safectrl.getVersionNum();
			},
			fail: function (data) {
				pswCtrlPort++;
				safectrl.checkCtrlPort();
				console.log("checkCtrlPort fail");
			},
			error: function () {
				pswCtrlPort++;
				safectrl.checkCtrlPort();
				console.log("checkCtrlPort error");
			}
		});
	},
	getCtrlDownloadLnk: function () {

		$.ajax({
			type: "POST",
			url: getCtrlDownloadLnkURL,
			data: {},
			dataType: "json",
			beforeSend: function () {
			},
			success: function (data) {
				if (data.result == 0) {
					$(".install_ctrl_tips").attr("href", data.url);
					safectrl.downloadUrl = data.url;

				} else {
					var h = '<div class="tips m-t10">' + data.result + ' ' + data.retinfo + '</div>';
					$("#J-tips").append(h);
				}
			},
			error: function () {
				var h = '<div class="tips m-t10">网络有误，请刷新重试</div>';
				$("#J-tips").append(h);
			}
		});
	},
	getVersionNumTimes: 0,
	getVersionNum: function () {
		if (safectrl.getVersionNumTimes >= 3) {
			safectrl.getVersionNumTimes = 0;
			safectrl.onCtrlError();
			return;
		}
		safectrl.requstCtrl({
			data: "",
			timeout: 30000,
			url: getVersionNumURL,
			success: function (data) {
				console.log("getVersionNum success:" + data.data);
				safectrl.setCtrlCookie('checkPortSuccess', "1");
				safectrl.onGotPrivRSAKey();

				safectrl.updateControl(data.data);
			},
			fail: function (data) {
				safectrl.getVersionNumTimes++;
				safectrl.getVersionNum();
			},
			error: function () {
				safectrl.getVersionNumTimes++;
				safectrl.getVersionNum();
			}
		});
	},
	startHookTimes: 0,
	startHookKeybord: function (elmId, type, regexType, maxLen) {
		if (safectrl.startHookTimes >= 3) {
			safectrl.startHookTimes = 0;
			safectrl.onCtrlError();
			return;
		}
		$("#" + elmId).attr('startFinish','false'); // 已通知控件，但控件没有反馈监听成功，不允许用户输入
		safectrl.requstCtrl({
			data: "type=" + type + "&regexType=" + regexType + "&maxLen=" + maxLen,
			url: startHookURL,
			success: function (data) {
				safectrl.startCheckCtrlAlive();
				safectrl.startHookTimes = 0;
				$("#" + elmId).attr('startFinish','true'); // 控件已开始监听
			},
			fail: function (data) {
				safectrl.startHookTimes++;
				safectrl.startHookKeybord(elmId, type, regexType, maxLen);
			},
			error: function () {
				safectrl.startHookTimes++;
				safectrl.startHookKeybord(elmId, type, regexType, maxLen);
			}
		});
	},
	stopHookTimes: 0,
	stopHookKeybord: function (elmId, type, pwdLen) {
		safectrl.stopCheckCtrlAlive();
		if (safectrl.stopHookTimes >= 3) {
			safectrl.stopHookTimes = 0;
			return;
		}
		$("#" + elmId).attr('stopFinish','false');
		safectrl.requstCtrl({
			data: "type=" + type + "&pwdLen=" + pwdLen,
			url: stopHookURL,
			success: function (data) {
				safectrl.stopHookTimes = 0;
				$("#" + elmId).attr('stopFinish','true');
			},
			fail: function (data) {
				safectrl.stopHookTimes++;
				safectrl.stopHookKeybord(elmId, type, pwdLen);
			},
			error: function () {
				safectrl.stopHookTimes++; 
				safectrl.stopHookKeybord(elmId, type, pwdLen);
			}
		});
	},
	updateControl: function (ctrlVersion) {
		$.ajax({
			type: "POST",
			url: updateControlURL,
			data: {
				'controlVersion': ctrlVersion
			},
			dataType: "json",
			beforeSend: function () {
			},
			success: function (data) {
				if (data.result == 0) {
					safectrl.onCtrlSuccess(data.updateFlag, data.url);

				} else {
					var h = '<div class="tips m-t10">' + data.result + ' ' + data.retinfo + '</div>';
					$("#J-tips").append(h);
				}
			},
			error: function () {
				var h = '<div class="tips m-t10">网络有误，请刷新重试</div>';
				$("#J-tips").append(h);
			}
		});
	},

	setCtrlCookie: function (name, value) {
		document.cookie = name + "=" + value;
	},
	getCtrlCookie: function (name) {
		var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if (arr = document.cookie.match(reg))
			return unescape(arr[2]);
		else
			return null;
	},

	isCheckPortSuccess: function () {
		return safectrl.getCtrlCookie('checkPortSuccess') == "1";
	},
	getRSAuuid: function () {
		return safectrl.rsaUUID;
	},
	getRSAKey: function () {
		//return safectrl.formatPrivateRSAKey(safectrl.getCtrlCookie('rsaKey'));
		return safectrl.rsaKey;
	},
	getCtrlPort: function () {
		if (safectrl.isCheckPortSuccess()) {
			return safectrl.getCtrlCookie('ctrlPort');
		}
		else {
			return pswCtrlPort;
		}
	},
	isGetingPubRSA: false,
	getUUIDAndPubRSA: function (param) {
		if (safectrl.isGetingPubRSA) {
			return;
		}
		safectrl.isGetingPubRSA = true;
		// safectrl.setCtrlCookie('checkPortSuccess', "");
		$.ajax({
			type: "POST",
			url: getUUIDAndPubRSAURL,
			data: {
				token: param,
			},
			dataType: "json",
			beforeSend: function () {
				//$("#J-btnIng").removeClass('hide');
				//$("#J-btn").addClass('hide');
			},
			success: function (data) {
				//console.debug(data);
				safectrl.isGetingPubRSA = false;
				if (data.result == 0) {
					//safectrl.setCtrlCookie("rsaUUID", data.UUID);
					//safectrl.setCtrlCookie("rsaKey", data.publicKey);
					safectrl.rsaUUID = data.UUID;
					safectrl.rsaKey = data.publicKey;
					safectrl.checkCtrlPort();
				} else {
					$("#J-btnIng").addClass('hide');
					$("#J-btn").removeClass('hide');
					var h = '<div class="tips m-t10">' + data.result + ' ' + data.retinfo + '</div>';					
					$("#J-tips").append(h);
				}
			},
			error: function () {
				safectrl.isGetingPubRSA = false;
				$("#J-btnIng").addClass('hide');
				$("#J-btn").removeClass('hide');
				var h = '<div class="tips m-t10">网络有误，请刷新重试</div>';				
				$("#J-tips").append(h);
			}
		});
	},
	formatPrivateRSAKey: function (key) {
		var keyFormat = "-----BEGIN RSA PRIVATE KEY-----\n";
		for (var i = 0; i < key.length; i += 64) {
			keyFormat += key.substr(i, 64);
			keyFormat += "\n";
		}
		keyFormat += key.substr(i);
		keyFormat += "-----END RSA PRIVATE KEY-----\n";
		return keyFormat;
	},
	getPassword: function (pwdType, salt, si, callback) {
		var postData = "type=" + pwdType + "&salt=" + salt + "&si=" + si;
		safectrl.requstCtrl({
			data: postData,
			url: getPasswordURL,
			success: function (data) {
				callback.success(data);
			},
			fail: function (data) {
				callback.fail(data);
			},
			error: function () {
				callback.error();
			}
		});
	},
	getPasswords: function (salt, key, callback) {
		var postData = "salt=" + salt + "&randKey=" + key;
		safectrl.requstCtrl({
			data: postData,
			url: getPasswordsURL,
			success: function (data) {
				callback.success(data);
			},
			fail: function (data) {
				callback.fail(data);
			},
			error: function () {
				callback.error();
			}
		});
	},
	getPasswordsi: function (salt, si, callback) {
		var postData = "salt=" + salt + "&si=" + si;
		safectrl.requstCtrl({
			data: postData,
			url: getPasswordsiURL,
			success: function (data) {
				callback.success(data);
			},
			fail: function (data) {
				callback.fail(data);
			},
			error: function () {
				callback.error();
			}
		});
	},
	installCert: function (token, userId, callback) {
		safectrl.requstCtrl({
			data: "token=" + token + "&userId=" + userId,
			timeout: 15000,
			url: installCertURL,
			success: function (data) {
				if (callback.success) {
					callback.success(data);
				}
			},
			fail: function (data) {
				if (callback.fail) {
					callback.fail(data);
				}
			},
			error: function () {
				if (callback.error) {
					callback.error();
				}
			}
		});
	},

	isCertInstalled: function (bindId, callback) {
		safectrl.requstCtrl({
			data: "bindId=" + bindId,
			url: isCertInstalledURL,
			success: function (data) {
				if (callback.success) {
					callback.success(data);
				}
			},
			fail: function (data) {
				if (callback.fail) {
					callback.fail(data);
				}
			},
			error: function () {
				if (callback.error) {
					callback.error();
				}
			}
		});
	},
	uninstallCert: function (bindId, callback) {
		safectrl.requstCtrl({
			data: "bindId=" + bindId,
			url: deleteCertURL,
			success: function (data) {
				if (callback.success) {
					callback.success(data);
				}
			},
			fail: function (data) {
				if (callback.fail) {
					callback.fail(data);
				}
			},
			error: function () {
				if (callback.error) {
					callback.error();
				}
			}
		});
	},
	clearKeybordData: function (elmId, type) {
		$("#" + elmId).attr('clearFinish','false');
		safectrl.requstCtrl({
			data: "type=" + type,
			url: clearKeybordDataURL,
			success: function (data) {
				$("#" + elmId).attr('clearFinish','true'); 
			},
			fail: function (data) {
				$("#" + elmId).attr('clearFinish','false');
			},
			error: function () {
				$("#" + elmId).attr('clearFinish','false');
			}
		});
	},

	startHookAndClearPwdTimes: 0,
	startHookAndClearPwd: function (elmId, type, regexType, maxLen) {
		if (safectrl.startHookAndClearPwdTimes >= 3) {
			safectrl.startHookAndClearPwdTimes = 0;
			safectrl.onCtrlError();
			return;
		}
		$("#" + elmId).attr('startFinish','false'); // 已通知控件，但控件没有反馈监听成功，不允许用户输入
		$("#" + elmId).attr('clearFinish','false');
		safectrl.requstCtrl({
			data: "type=" + type + "&regexType=" + regexType + "&maxLen=" + maxLen,
			url: startHookAndClearPasswordURL,
			success: function (data) {
				safectrl.startCheckCtrlAlive();
				safectrl.startHookAndClearPwdTimes = 0;
				$("#" + elmId).attr('startFinish','true'); // 控件已开始监听
				$("#" + elmId).attr('clearFinish','true');
			},
			fail: function (data) {
				safectrl.startHookAndClearPwdTimes++;
				safectrl.startHookAndClearPwd(elmId, type, regexType, maxLen);
			},
			error: function () {
				safectrl.startHookAndClearPwdTimes++;
				safectrl.startHookAndClearPwd(elmId, type, regexType, maxLen);
			}
		});
	},

	// ie8 chrome, ff 输入框验证通过了
	setCaretPosition: function (ctrl, pos) {//设置光标位置函数 
		if (ctrl.setSelectionRange) {
			//ctrl.focus();
			ctrl.setSelectionRange(pos, pos);
		}
		else if (ctrl.createTextRange) {
			var range = ctrl.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	},
	setSelect: function (elmId, start, count, type) {
		if (!safectrl.isCheckPortSuccess()) {
			return;
		}
		$("#" + elmId).attr('setFinish','false');
		safectrl.requstCtrl({
			data: "start=" + start + "&count=" + count + "&type=" + type,
			url: setSelectRangeURL,
			success: function (data) {
				$("#" + elmId).attr('setFinish','true');
			},
			fail: function (data) {
				$("#" + elmId).attr('setFinish','false');
			},
			error: function () {
				$("#" + elmId).attr('setFinish','false');
			}
		});
	},
	setStyleForInput: function($elm) {
		if (typeof $elm !== 'object' && typeof $elm[0] !== 'undefined') {//jquery对象
			return;
		}
		// $elm.addClass('h_pass ui-input password');
		$elm.css({
			'-moz-user-select': 'none',
			'-webkit-user-select': 'none',
			'user-select': 'none',
			'-khtml-user-select': 'none'
		});
	},
	setJsEventForInput: function($elm) {
		if (typeof $elm !== 'object' && typeof $elm[0] !== 'undefined') {//jquery对象
			return;
		}
		$elm.on('keydown', function(e) {
			e=e||window.event;
			if(e.keyCode==32) {
			    if (e.preventDefault) {
			        e.preventDefault();
			    } else { //兼容IE8
			        e.returnValue = false;
			    }
			}else if(e.keyCode==116){ //按的F5刷新时，密码框强制失去焦点
				$elm.blur();
		   }
		}).on('copy', function() {
			return false;
		}).on('paste', function() {
			return false;
		}).on('cut', function() {
			return false;
		}).on('selectstart', function() {
			return false;
		})
	},
	setdefaultAttrForInput: function($elm) {
		if (typeof $elm !== 'object' && typeof $elm[0] !== 'undefined') {//jquery对象
			return;
		}
		$elm.attr('startFinish', 'false').attr('stopFinish', 'true').attr('clearFinish', 'true').attr('setFinish', 'true');
	},
	initPwdInput: function (elmId, type, regexType, fatherId, maxLen) {
		var $elm = $("#" + elmId);
		var elm = $elm[0];
		if(elm) {
			safectrl.setStyleForInput($elm);
			safectrl.setJsEventForInput($elm);
			safectrl.setdefaultAttrForInput($elm);
			$("#" + fatherId).append("<a style='display:none;' id='"+elmId+"_reconnect_ctrl_tips' class='reconnect_ctrl_tips form-control h_bg psd_control personal_control'>密码控件重新连接中...</a>" 
									+ "<a style='display:none;' id='"+elmId+"_checking_ctrl_tips' class='checking_ctrl_tips form-control h_bg psd_control personal_control'>正在检测控件请稍等...</a>"
									+ "<a style='display:none;text-decoration:underline;' id='"+elmId+"_install_ctrl_tips' class='install_ctrl_tips form-control h_bg psd_control personal_control'>请先下载并安装密码控件</a>"
									+ "<a style='display:none;text-decoration:underline;' id='"+elmId+"_update_ctrl_tips' class='update_ctrl_tips form-control h_bg psd_control personal_control'>请下载并更新密码控件</a>");
			
			$(".password").hide();
			$(".install_ctrl_tips").hide();
			$(".reconnect_ctrl_tips").hide();
			$(".update_ctrl_tips").hide();
			$(".checking_ctrl_tips").show();

			var start, count;
			if (elm.addEventListener) {
				elm.addEventListener("click", function () {
					console.log("not ie click");
					safectrl.setCaretPosition(elm, elm.value.length);
					// start = elm.selectionStart;
					// count = elm.selectionEnd - elm.selectionStart;
					// safectrl.setSelect(elmId, start, count, type);
				}, false);
			}
			else {
				elm.attachEvent("onclick", function () {
					console.log("ie click");
					safectrl.setCaretPosition(elm, elm.value.length);
					// start = elm.selectionStart;
					// count = elm.selectionEnd - elm.selectionStart;
					// safectrl.setSelect(elmId, start, count, type);
				});
			}
			$("#" + elmId).on("focus", function () {
				safectrl.setCaretPosition(elm, elm.value.length);
				if ($("#" + elmId).val().length == 0) {
					safectrl.startHookAndClearPwd(elmId, type, regexType, maxLen);
				}
				else {
					safectrl.startHookKeybord(elmId, type, regexType, maxLen);
				}
			});
			$("#" + elmId).bind("keydown", function () {
				if($(this).attr('startFinish')==="true" && $(this).attr('clearFinish')==="true") {
					// console.log("control get already, input allowed!");
					// console.log($(this).attr('startFinish'));
					// console.log("clearFinish: " + $(this).attr('clearFinish'));
					// console.log("setFinish: " + $(this).attr('setFinish'));
					return true;
				}
				else {
					// console.log("control not ready, input forbid!");
					// console.log($(this).attr('startFinish'));
					// console.log("clearFinish: " + $(this).attr('clearFinish'));
					// console.log("setFinish: " + $(this).attr('setFinish'));
					return false;
				}
			});
			$("#" + elmId).on("blur", function () {
				safectrl.stopHookKeybord(elmId, type, $("#" + elmId).val().length);
			});
			$("#" + elmId).bind('input propertychange', function () {
				if ((window.event && (!window.event.propertyName || window.event.propertyName === 'value')) || !window.event) {
					if ($("#" + elmId).val().length == 0) {
						safectrl.clearKeybordData(elmId, type);
					}
				}
			});
			$("#" + elmId).on("select", function () {
				// var start, count;
				// start = elm.selectionStart;
				// count = elm.selectionEnd - elm.selectionStart;
				// safectrl.setSelect(elmId, start, count, type);
				// safectrl.setCaretPosition(elm, elm.value.length);
			});
		}
	},

	isGetingToken: false,
	getToken: function () {
		if (safectrl.isGetingToken) {
			return;
		}
		safectrl.isGetingToken = true;
		safectrl.setCtrlCookie('checkPortSuccess', "");
		$.ajax({
			type: "POST",
			url: getTokenURL,
			data: {
			},
			dataType: "json",
			beforeSend: function () {
				//$("#J-btnIng").removeClass('hide');
				//$("#J-btn").addClass('hide');
			},
			success: function (data) {
				safectrl.isGetingToken = false;
				if (data.result == 0) {
					safectrl.getUUIDAndPubRSA(data.token);
				} else {
					$("#J-btnIng").addClass('hide');
					$("#J-btn").removeClass('hide');
					var h = '<div class="tips m-t10">' + data.result + ' ' + data.retinfo + '</div>';					
					$("#J-tips").append(h);
				}
			},
			error: function () {
				safectrl.isGetingToken = false;
				$("#J-btnIng").addClass('hide');
				$("#J-btn").removeClass('hide');
				var h = '<div class="tips m-t10">网络有误，请刷新重试</div>';				
				$("#J-tips").append(h);
			}
		});
	},

	passwordID: "",
	//1.js从服务器获取uuid和public key
	//2.js将uuid设置给控件
	//3.控件从服务器获取private key
	//4.js从控件获取版本号
	//5.密码输入框获取到焦点时开始hook
	//6.密码输入框失去焦点时结束hook
	//7.用户名输入框失去焦点是后去登陆密码盐值
	//8.点击登录时，获取加密后的登录名和密码
	initCtrl: function () {
		//safectrl.passwordID = "#" + passwordID;
		safectrl.getToken();
	}
}
