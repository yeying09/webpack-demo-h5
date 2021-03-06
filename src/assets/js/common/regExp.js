module.exports = {
  IDReg: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
  cnameReg: /^([\u4e00-\u9fa5]){2,7}$/, // 2-7位中文
  float2Reg: /^\+?(\d*\.?\d{0,2})$/, // 最多保留2位小数的浮点数
  intReg: /^\d*$/,
  mobileReg: /^1[34578]\d{9}$/, // 手机号码
  smsCodeReg: /[0-9]{6}/ // 短信验证码
}
