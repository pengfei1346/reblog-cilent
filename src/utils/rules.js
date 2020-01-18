
//为空判断
String.prototype.isEmpty = function() {
    var str = this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

    if(str === "" || str === undefined || str === null) {
        return true;
    }else {
        return false;
    }

}

//去除字符串两端的空格
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}

//去掉所有空格
String.prototype.sTrim = function (){

    return this.replace(/\s/g, "");
}

//营业执照号  必须是15或者18位 字母大写
String.prototype.isBusinessLicenseNo = function () {


    var reg = /^[A-Z0-9]{15}$/; //var reg1 = /^[A-Za-z0-9]{18}$/;
    var reg1 = /^[A-Z0-9]{18}$/;

    if(!reg.test(this) && !reg1.test(this)) {
        return false;
    }else {
        return true;
    }
}

//是否是有效姓名
String.prototype.isPersonal = function()
{
    return /^[A-Za-z\u4e00-\u9fa5]+$/g.test(this); // 有效中英文
}

//验证身份证
String.prototype.isIDCard = function () {
//
    var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
    //如果通过该验证，说明身份证格式正确，但准确性还需计算
    if (regIdCard.test(this)) {
        if (this.length == 18) {
            var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
            var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
            var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
            for (var i = 0; i < 17; i++) {
                idCardWiSum += this.substring(i, i + 1) * idCardWi[i];
            }
            var idCardMod = idCardWiSum % 11;//计算出校验码所在数组的位置
            var idCardLast = this.substring(17);//得到最后一位身份证号码
            //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
            if (idCardMod == 2) {
                if (idCardLast == "X" || idCardLast == "x") {
                    return true;
                    //alert("恭喜通过验证啦！");
                } else {
                    return false;
                    //alert("身份证号码错误！");
                }
            } else {
                //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                if (idCardLast == idCardY[idCardMod]) {
                    //alert("恭喜通过验证啦！");
                    return true;
                } else {
                    return false;
                    //alert("身份证号码错误！");
                }
            }
        }
    } else {
        //alert("身份证格式不正确!");
        return false;
    }
}


String.prototype.isPhoneNumber = function()
{
    return /(^[0-9]{3,4}-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^([0-9]{3,4})[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}$)/.test(this);
}


//是否是手机号
String.prototype.isMobile = function()
{
    // return /^1[34578]\d{9}$/.test(this);
    return /^1[3456789]\d{9}$/.test(this); // 2017年底10批电信网码号申请199  198  166
}

//是否是邮件
String.prototype.isEmail = function()
{
    return /^w+((-w+)|(.w+))*@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+)*.[A-Za-z0-9]+$/.test(this);
}

//是否是邮编
String.prototype.isZipCode = function()
{
    return /^[d]{6}$/.test(this);
}
//验证银行卡号 2018-10-29
String.prototype.isBankCardNumber = function (val){
    var bankno = val.trim(val);

    var num = /^\d*$/; //全数字
    var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
    if(bankno == "" || bankno.length > 25 || !strBin.indexOf(bankno.substring(0, 2)) == -1) {
        return false
    }else {
       return true
    }

}

//验证银行卡号  back版本
// String.prototype.isBankCardNumber = function (){
//
//     var bankno = this;
//     var tip = "";
//     bankno = bankno.trim(bankno);
//     if(bankno == "") {
//         tip = "请填写银行卡号";
//         return false;
//     }
//     if(bankno.length < 16 || bankno.length > 19) {
//         tip = "银行卡号长度必须在16到19之间";
//         return false;
//     }
//     var num = /^\d*$/; //全数字
//     if(!num.exec(bankno)) {
//         tip = "银行卡号必须全为数字";
//         return false;
//     }
//     //开头6位
//     var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
//     if(strBin.indexOf(bankno.substring(0, 2)) == -1) {
//         tip = "银行卡号开头6位不符合规范";
//         return false;
//     }
//
//
//     //校验规则：16位银行卡号（19位通用）:
//
//     // 1.将未带校验位的 15（或18）位卡号从右依次编号 1 到 15（18），位于奇数位号上的数字乘以 2。
//     // 2.将奇位乘积的个十位全部相加，再加上所有偶数位上的数字。
//     // 3.将加法和加上校验位能被 10 整除。
//     var lastNum=bankno.substr(bankno.length-1,1);//取出最后一位（与luhm进行比较）
//
//     var first15Num=bankno.substr(0,bankno.length-1);//前15或18位
//     var newArr=new Array();
//     for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
//         newArr.push(first15Num.substr(i,1));
//     }
//     var arrJiShu=new Array();  //奇数位*2的积 <9
//     var arrJiShu2=new Array(); //奇数位*2的积 >9
//
//     var arrOuShu=new Array();  //偶数位数组
//     for(var j=0;j<newArr.length;j++){
//         if((j+1)%2==1){//奇数位
//             if(parseInt(newArr[j])*2<9)
//                 arrJiShu.push(parseInt(newArr[j])*2);
//             else
//                 arrJiShu2.push(parseInt(newArr[j])*2);
//         }
//         else //偶数位
//             arrOuShu.push(newArr[j]);
//     }
//
//     var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
//     var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
//     for(var h=0;h<arrJiShu2.length;h++){
//         jishu_child1.push(parseInt(arrJiShu2[h])%10);
//         jishu_child2.push(parseInt(arrJiShu2[h])/10);
//     }
//
//     var sumJiShu=0; //奇数位*2 < 9 的数组之和
//     var sumOuShu=0; //偶数位数组之和
//     var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
//     var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
//     var sumTotal=0;
//     for(var m=0;m<arrJiShu.length;m++){
//         sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
//     }
//
//     for(var n=0;n<arrOuShu.length;n++){
//         sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
//     }
//
//     for(var p=0;p<jishu_child1.length;p++){
//         sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
//         sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
//     }
//     //计算总和
//     sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);
//
//     //计算Luhm值
//     var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
//     var luhm= 10-k;
//
//     if(lastNum==luhm){
//         return true;
//     }else{
//         return false;
//     }
//
// }

// getFloatStr(num){
//     num += '';
//     num = num.replace(/[^0-9|\.]/g, ''); //清除字符串中的非数字非.字符
//     if(/^0+/) //清除字符串开头的0
//       num = num.replace(/^0+/, '');
//     if(!/\./.test(num)) //为整数字符串在末尾添加.00
//               num += '.00';
//     if(/^\./.test(num)) //字符以.开头时,在开头添加0
//                 num = '0' + num;
//                 num += '00';        //在字符串末尾补零
//                 num = num.match(/\d+\.\d{2}/)[0];
//
//     return num
// },
