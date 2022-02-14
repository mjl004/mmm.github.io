// 'use strict'
define(function (require, exports, module) {
    var sTpl = require('../template/ZLYYMakeOpenAccount_Common1.html');
    module.exports = {
      template: sTpl,
      data: function data() {
        return {
          isLogin: false,
        };
      },
      methods: {
        init: function init() {
          var that = this;
          /* that.decideIsLogin(function login() {
            Promise.all([that.$refs.assets.init(), that.$refs.store.init(), that.readMesg()], function () {});
          }); */
        },
        InitPage: function InitPage() {
          var viewWidth = window.innerWidth;
          var viewHeight = window.innerHeight;
          var aa = $("#lbl_ValidateCode").height();
          $("#btn_Submit").html("下载APP开户");
          if (aa <= 45) {
              $("#lbl_ValidateCode").css("height", "45px");
              $("#lbl_ValidateCode").css("line-height", "45px");
              $("#btn_Submit").css("height", "45px");
              $("#btn_Submit").css("line-height", "45px");
          } else {
              $("#lbl_ValidateCode").css("height", "3vw");
              $("#lbl_ValidateCode").css("line-height", "3vw");
              $("#btn_Submit").css("height", "3vw");
              $("#btn_Submit").css("line-height", "3vw");
          }
          if (viewWidth >= 500) {
              $("#div_content").css("top", "23.4%");
              $("#div_content_version").css("margin-top", "20%");
              $("#div_content input").css("margin", "20px 0");
              $("#lbl_ValidateCode").css("margin-top", "20px");
              $("#btn_Submit").css("margin-bottom", "20px");
              $("#txt_Phone").css("font-size", "16px");
              $("#txt_ValidateCode").css("font-size", "16px");
          } else if (viewWidth < 500 && viewWidth >= 428) {
              $("#div_content").css("top", "23.4%");
              $("#div_content_version").css("margin-top", "10%");
              $("#div_content input").css("margin", "8px 0");
              $("#lbl_ValidateCode").css("margin-top", "8px");
              $("#btn_Submit").css("margin-bottom", "8px");
              $("#txt_Phone").css("font-size", "16px");
              $("#txt_ValidateCode").css("font-size", "16px");
          } else if (viewWidth < 428 && viewWidth > 375) {
              $("#div_content").css("top", "23.4%");
              $("#div_content_version").css("margin-top", "5%");
              $("#div_content input").css("margin", "8px 0");
              $("#lbl_ValidateCode").css("margin-top", "8px");
              $("#btn_Submit").css("margin-bottom", "8px");
              $("#txt_Phone").css("font-size", "16px");
              $("#txt_ValidateCode").css("font-size", "16px");
          }
          else if (viewWidth <= 375 && viewWidth > 320) {
              $("#div_content").css("top", "22.4%");
              $("#div_content_version").css("margin-top", "4%");
              $("#div_content input").css("margin", "6px 0");
              $("#lbl_ValidateCode").css("margin-top", "6px");
              $("#btn_Submit").css("margin-bottom", "6px");
              $("#txt_Phone").css("font-size", "12px");
              $("#txt_ValidateCode").css("font-size", "12px");
          }
          else {
              $("#div_content").css("top", "22.4%");
              $("#txt_Phone").css("font-size", "12px");
              $("#txt_ValidateCode").css("font-size", "12px");
              $("#div_content input").css("margin", "4px 0");
              $("#lbl_ValidateCode").css("margin-top", "4px");
          }
        },
      },
      mounted: function mounted() {
        var that = this;
        that.InitPage();
        window.onresize = function () {
          that.InitPage();
        }
      },
      components: {
        
        
      }
    };
  });