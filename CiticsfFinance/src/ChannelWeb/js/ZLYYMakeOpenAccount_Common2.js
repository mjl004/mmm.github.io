// 'use strict'
define(function (require, exports, module) {
    var sTpl = require('../template/ZLYYMakeOpenAccount_Common2.html');
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
          if (aa <= 45) {
              $("#lbl_ValidateCode").css("height", "45px");
              $("#lbl_ValidateCode").css("line-height", "45px");
          } else {
              $("#lbl_ValidateCode").css("height", "3vw");
              $("#lbl_ValidateCode").css("line-height", "3vw");
          }
          if (viewWidth >= 500) {
              $("#div_content").css("top", "12%");
              $("#div_content_version").css("margin-top", "11%");
              $("#div_content input").css("margin", "20px 0");
              $("#lbl_ValidateCode").css("margin-top", "20px");
              $("#btn_Submit").css("margin-bottom", "20px");
              $(".m-bg").css("margin-top", "21px");
              $(".p_class").css("font-size", "16px");
          } else if (viewWidth < 500 && viewWidth > 450) {
              $("#div_content").css("top", "13%");
              $("#div_content_version").css("margin-top", "4%");
              $("#div_content input").css("margin", "8px 0");
              $("#lbl_ValidateCode").css("margin-top", "8px");
              $("#btn_Submit").css("margin-bottom", "20px");
              $(".m-bg").css("margin-top", "20px");
              $(".p_class").css("font-size", "14px");
          } else if (viewWidth <= 450 && viewWidth > 375) {
              $("#div_content").css("top", "13%");
              $("#div_content_version").css("margin-top", "4%");
              $("#div_content input").css("margin", "8px 0");
              $("#lbl_ValidateCode").css("margin-top", "8px");
              $("#btn_Submit").css("margin-bottom", "8px");
              $(".m-bg").css("margin-top", "20px");
              $(".p_class").css("font-size", "14px");
          } else if (viewWidth <= 375 && viewWidth >= 350) {
              $("#div_content").css("top", "13%");
              $("#div_content_version").css("margin-top", "15px");
              $("#div_content input").css("margin", "6px 0");
              $("#lbl_ValidateCode").css("margin-top", "6px");
              $("#btn_Submit").css("margin-bottom", "6px");
              $(".m-bg").css("margin-top", "0px");
              $(".p_class").css("font-size", "12px");
          } else if (viewWidth < 350 && viewWidth >= 320) {
              $("#div_content").css("top", "13%");
              $("#div_content_version").css("margin-top", "0px");
              $("#div_content input").css("margin", "6px 0");
              $("#lbl_ValidateCode").css("margin-top", "6px");
              $("#btn_Submit").css("margin-bottom", "6px");
              $(".m-bg").css("margin-top", "0px");
              $(".p_class").css("font-size", "12px");
          }
          else {
              $(".m-bg").css("margin-top", "0px");
              $(".p_class").css("font-size", "12px");
              $("#div_content").css("top", "14%");
              $("#div_content_version").css("margin-top", "0px");
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