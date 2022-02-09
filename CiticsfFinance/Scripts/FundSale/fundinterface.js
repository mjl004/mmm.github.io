var m_IPAddress = "124.207.9.124:20026";

$(document).ready(function () {

    $("#bt_331100").click(function () {
        QueryData_331100();
    });

    $("#bt_330403").click(function () {
        QueryData_330403();
    });

    $("#bt_330402").click(function () {
        QueryData_330402();
    });

    $("#bt_330404").click(function () {
        QueryData_330404();
    });

    $("#bt_331150").click(function () {
        QueryData_331150();
    });

    $("#bt_331113").click(function () {
        QueryData_331113();
    });

    $("#bt_331101").click(function () {
        QueryData_331101();
    });

    $("#bt_331450").click(function () {
        QueryData_331450();
    });

    $("#bt_332254").click(function () {
        QueryData_332254();
    });
    $("#bt_332255").click(function () {
        QueryData_332255();
    });

    $("#bt_331403").click(function () {
        QueryData_331403();
    });

    $("#bt_334000").click(function () {
        QueryData_334000();
    });

    $("#bt_331401").click(function () {
        QueryData_331401();
    });
    $("#bt_334001").click(function () {
        QueryData_334001();
    });
    $("#bt_332250").click(function () {
        QueryData_332250();
    });
    $("#bt_339400").click(function () {
        QueryData_339400();
    });
    $("#bt_334100").click(function () {
        QueryData_334100();
    });

    $("#bt_334215").click(function () {
        QueryData_334215();
    });
    $("#bt_332253").click(function () {
        QueryData_332253();
    });
    $("#bt_334002").click(function () {
        QueryData_334002();
    });
    $("#bt_334102").click(function () {
        QueryData_334102();
    });
    $("#bt_339401").click(function () {
        QueryData_339401();
    });

    $("#bt_331010").click(function () {
        QueryData_331010();
    });


    $("#bt_331011").click(function () {
        QueryData_331011();
    });
    $("#bt_331018").click(function () {
        QueryData_331018();
    });

    $("#bt_331261").click(function () {
        QueryData_331261();
    });

    $("#bt_331019").click(function () {
        QueryData_331019();
    });

    $("#bt_331015").click(function () {
        QueryData_331015();
    });

    $("#bt_2017001023").click(function () {
        QueryData_2017001023();
    });

    $("#bt_2017001024").click(function () {
        QueryData_2017001024();
    });


    $("#bt_330001").click(function () {
        QueryData_330001();
    });

    $("#bt_337400").click(function () {
        QueryData_337400();
    });

    $("#bt_337403").click(function () {
        QueryData_337403();
    });

    $("#bt_L3604000").click(function () {
        QueryData_L3604000();
    });
});
function showpage(funid) {
    var strid = "tb_" + funid;
    var node = $("#" + strid);
    if (node.is(':hidden')) {　　//如果node是隐藏的则显示node元素，否则隐藏
        node.show();
    } else {
        node.hide();
    }
}
function QueryData_331100() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way").val();
    var txt_op_station = $("#txt_op_station").val();
    var txt_branch_no = $("#txt_branch_no").val();
    var txt_password = $("#txt_password").val();
    var txt_password_type = $("#txt_password_type").val();
    var txt_input_content = $("#txt_input_content").val();
    var txt_account_content = $("#txt_account_content").val();
    var txt_content_type = $("#txt_content_type").val();
    var txt_asset_prop = $("#txt_asset_prop").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.ClientLogin");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.password = txt_password;
    param.clientType = txt_input_content;
    param.account = txt_account_content;
    param.accountType = txt_content_type;
    param.branchNo = txt_branch_no;
    param.passwordType = txt_password_type;
    param.assetProp = txt_asset_prop;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331300").html(result);
    });
}

function QueryData_330403() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_330403").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_330403").val();
    var txt_op_station = $("#txt_op_station_330403").val();
    var fund_company = $("#txt_fund_company_330403").val();
    var fund_code = $("#txt_fund_code_330403").val();
    var stock_type = $("#txt_stock_type_330403").val();
    var position_str = $("#txt_position_str_3300403").val();
    var request_num = $("#txt_request_num_330403").val();
    var sort_direction = $("#txt_sort_direction_330403").val();
    var ofchannel_type = $("#txt_ofchannel_type_330403").val();
    var econtract_version = $("#txt_econtract_version_330403").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundPrice");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.positionStr = position_str;
    param.requestNum = request_num;
    param.econtractVersion = econtract_version;
    param.fundCompany = fund_company;
    param.fundCode = fund_code;
    param.stockType = stock_type;
    param.sortDirection = sort_direction;
    param.channelType = ofchannel_type;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_330403").html(result);
    });

}

function QueryData_330402() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_330402").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_330402").val();
    var txt_op_station = $("#txt_op_station_330402").val();
    var fund_company = $("#txt_fund_company_330402").val();
    var position_str = $("#txt_position_str_330402").val();
    var request_num = $("#txt_request_num_330402").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundCompanyQry");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.positionStr = position_str;
    param.requestNum = request_num;
    param.fundCompany = fund_company;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_330402").html(result);
    });
}

function QueryData_330404() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_330404").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_330404").val();
    var txt_op_station = $("#txt_op_station_330404").val();
    var fund_company = $("#txt_fund_company_330404").val();
    var position_str = $("#txt_position_str_330404").val();
    var request_num = $("#txt_request_num_330404").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundCodeQry");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.positionStr = position_str;
    param.requestNum = request_num;
    param.fundCompany = fund_company;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_330404").html(result);
    });
}

function QueryData_331150() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_331150").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_331150").val();
    var txt_op_station = $("#txt_op_station_331150").val();
    var txt_branch_no_331150 = $("#txt_branch_no_331150").val();
    var txt_client_id_331150 = $("#txt_client_id_331150").val();
    var txt_fund_account_331150 = $("#txt_fund_account_331150").val();
    var txt_password_331150 = $("#txt_password_331150").val();
    var txt_password_type_331150 = $("#txt_password_type_331150").val();
    var txt_user_token_331150 = $("#txt_user_token_331150").val();
    var txt_query_mode_331150 = $("#txt_query_mode_331150").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.GetClient");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no_331150;
    param.clientId = txt_client_id_331150;
    param.password = txt_password_331150;
    param.fundAccount = txt_fund_account_331150;
    param.passwordType = txt_password_type_331150;
    param.userToken = txt_user_token_331150;
    param.queryMode = txt_query_mode_331150;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331150").html(result);
    });
}

function QueryData_331113() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_331113").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_331113").val();
    var txt_op_station = $("#txt_op_station_331113").val();
    var txt_branch_no_331113 = $("#txt_branch_no_331113").val();
    var txt_client_id_331113 = $("#txt_client_id_331113").val();
    var txt_fund_account_331113 = $("#txt_fund_account_331113").val();
    var txt_password_331113 = $("#txt_password_331113").val();
    var txt_password_type_331113 = $("#txt_password_type_331113").val();
    var txt_user_token_331113 = $("#txt_user_token_331113").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.ClientBulletin");

    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no_331113;
    param.clientId = txt_client_id_331113;
    param.fundAccount = txt_fund_account_331113;
    param.password = txt_password_331113;
    param.passwordType = txt_password_type_331113;
    param.userToken = txt_user_token_331113;

    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331113").html(result);
    });
}

function QueryData_331101() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_331101").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_331101").val();
    var txt_op_station = $("#txt_op_station_331101").val();
    var txt_branch_no = $("#txt_branch_no_331101").val();
    var txt_client_id = $("#txt_client_id_331101").val();
    var txt_fund_account = $("#txt_fund_account_331101").val();
    var txt_password = $("#txt_password_331101").val();
    var txt_password_type = $("#txt_password_type_331101").val();
    var txt_user_token = $("#txt_user_token_331101").val();
    var txt_new_password = $("#txt_new_password_331101").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.ClientUpdatePwd");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.newPassword = txt_new_password;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331101").html(result);
    });
}

function QueryData_331450() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_331450").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_331450").val();
    var txt_op_station = $("#txt_op_station_331450").val();
    var txt_branch_no = $("#txt_branch_no_331450").val();
    var txt_client_id = $("#txt_client_id_331450").val();
    var txt_fund_account = $("#txt_fund_account_331450").val();
    var txt_password = $("#txt_password_331450").val();
    var txt_password_type = $("#txt_password_type_331450").val();
    var txt_user_token = $("#txt_user_token_331450").val();
    var txt_fund_company = $("#txt_fund_company_331450").val();
    var txt_position_str = $("#txt_position_str_331450").val();
    var txt_request_num_str = $("#txt_request_num_331450").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundStockholderAccountQry");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCompany = txt_fund_company;
    param.positionStr = txt_position_str;
    param.requestNum = txt_request_num_str;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331450").html(result);
    });
}

function QueryData_332254() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_332254").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_332254").val();
    var txt_op_station = $("#txt_op_station_332254").val();
    var txt_branch_no = $("#txt_branch_no_332254").val();
    var txt_client_id = $("#txt_client_id_332254").val();
    var txt_fund_account = $("#txt_fund_account_332254").val();
    var txt_password = $("#txt_password_332254").val();
    var txt_password_type = $("#txt_password_type_332254").val();
    var txt_user_token = $("#txt_user_token_331450").val();
    var txt_money_type = $("#txt_money_type_332254").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.ClientFundFastQry");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.moneyType = txt_money_type;
    param.sysnode_id = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_332254").html(result);
    });
}


function QueryData_332255() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_332255").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_332255").val();
    var txt_op_station = $("#txt_op_station_332255").val();
    var txt_branch_no = $("#txt_branch_no_332255").val();
    var txt_client_id = $("#txt_client_id_332255").val();
    var txt_fund_account = $("#txt_fund_account_332255").val();
    var txt_password = $("#txt_password_332255").val();
    var txt_password_type = $("#txt_password_type_332255").val();
    var txt_user_token = $("#txt_user_token_332255").val();
    var txt_money_type = $("#txt_money_type_332255").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.ClientExactFundQry");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.moneyType = txt_money_type;
    param.sysnode_id = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_332255").html(result);
    });
}
function QueryData_331403() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_331403").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_331403").val();
    var txt_op_station = $("#txt_op_station_331403").val();
    var txt_branch_no = $("#txt_branch_no_331403").val();
    var txt_client_id = $("#txt_client_id_331403").val();
    var txt_fund_account = $("#txt_fund_account_331403").val();
    var txt_password = $("#txt_password_331403").val();
    var txt_password_type = $("#txt_password_type_331403").val();
    var txt_user_token = $("#txt_user_token_331403").val();
    var txt_fund_company = $("#txt_fund_company_331403").val();
    var txt_fund_code = $("#txt_fund_code_331403").val();
    var txt_business_flag = $("#txt_business_flag_331403").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.TradeRiskCheck");

    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCompany = txt_fund_company;
    param.fundCode = txt_fund_code;
    param.businessFlag = txt_business_flag;

    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331403").html(result);
    });
}

function QueryData_334000() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_334000").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_334000").val();
    var txt_op_station = $("#txt_op_station_334000").val();
    var txt_branch_no = $("#txt_branch_no_334000").val();
    var txt_client_id = $("#txt_client_id_334000").val();
    var txt_fund_account = $("#txt_fund_account_334000").val();
    var txt_password = $("#txt_password_334000").val();
    var txt_password_type = $("#txt_password_type_334000").val();
    var txt_user_token = $("#txt_user_token_334000").val();
    var txt_fund_company = $("#txt_fund_company_334000").val();
    var txt_fund_code = $("#txt_fund_code_334000").val();
    var txt_balance = $("#txt_balance_334000").val();
    var txt_ofchannel_type = $("#txt_ofchannel_type_334000").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundSub");

    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCompany = txt_fund_company;
    param.fundCode = txt_fund_code;
    param.balance = txt_balance;
    param.channelType = txt_ofchannel_type;
    param.sysnode_id = 4;

    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_334000").html(result);
    });
}

function QueryData_331401() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_331401").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_331401").val();
    var txt_op_station = $("#txt_op_station_331401").val();
    var txt_branch_no = $("#txt_branch_no_331401").val();
    var txt_client_id = $("#txt_client_id_331401").val();
    var txt_fund_account = $("#txt_fund_account_331401").val();
    var txt_password = $("#txt_password_331401").val();
    var txt_password_type = $("#txt_password_type_331401").val();
    var txt_user_token = $("#txt_user_token_331401").val();
    var txt_fund_company = $("#txt_fund_company_331401").val();
    var stock_account = $("#txt_stock_account_331401").val();
    var autofillstkacct = $("#txt_autofillstkacct_331401").val();
    var agreement_id = $("#txt_agreement_id_331401").val();
    var shstock_account = $("#txt_shstock_account_331401").val();
    var szstock_account = $("#txt_szstock_account_331401").val();
    var statement_flag = $("#txt_statement_flag_331401").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundFirstOpen");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCompany = txt_fund_company;
    param.stockAccount = stock_account;
    param.autoFillStockAccount = autofillstkacct;
    param.agreementId = agreement_id;
    param.shStockAccount = shstock_account;
    param.szStockAccount = szstock_account;
    param.statementFlag = statement_flag;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331401").html(result);
    });
}

function QueryData_334001() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_334001").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_334001").val();
    var txt_op_station = $("#txt_op_station_334001").val();
    var txt_branch_no = $("#txt_branch_no_334001").val();
    var txt_client_id = $("#txt_client_id_334001").val();
    var txt_fund_account = $("#txt_fund_account_334001").val();
    var txt_password = $("#txt_password_334001").val();
    var txt_password_type = $("#txt_password_type_334001").val();
    var txt_user_token = $("#txt_user_token_334001").val();
    var txt_fund_company = $("#txt_fund_company_334001").val();
    var fund_code = $("#txt_fund_code_334001").val();
    var balance = $("#txt_balance_334001").val();
    var auto_buy = $("#txt_auto_buy_334001").val();
    var ofchannel_type = $("#txt_ofchannel_type_334001").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundApply");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCompany = txt_fund_company;
    param.fundCode = fund_code;
    param.autoBuy = auto_buy;
    param.channelType = ofchannel_type;
    param.balance = balance;
    param.sysnode_id = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_334001").html(result);
    });
}

function QueryData_339400() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_339400").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_339400").val();
    var txt_op_station = $("#txt_op_station_339400").val();
    var txt_branch_no = $("#txt_branch_no_339400").val();
    var txt_client_id = $("#txt_client_id_339400").val();
    var txt_fund_account = $("#txt_fund_account_339400").val();
    var txt_password = $("#txt_password_339400").val();
    var txt_password_type = $("#txt_password_type_339400").val();
    var txt_user_token = $("#txt_user_token_339400").val();
    var txt_fund_company = $("#txt_fund_company_339400").val();
    var fund_code = $("#txt_fund_code_339400").val();
    var entrust_type = $("#txt_entrust_type_339400").val();
    var begin_date = $("#txt_begin_date_339400").val();
    var end_date = $("#txt_end_date_339400").val();
    var position_str = $("#txt_position_str_339400").val();
    var request_num = $("#txt_request_num_339400").val();
    var ofchannel_type = $("#txt_ofchannel_type_339400").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundEentrustHisQry");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCompany = txt_fund_company;
    param.fundCode = fund_code;
    param.beginDate = begin_date;
    param.endDate = end_date;
    param.entrustType = entrust_type;
    param.channelType = ofchannel_type;
    param.positionStr = position_str;
    param.requestNum = request_num;
    param.sysnode_id = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_339400").html(result);
    });
}


function QueryData_334100() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_334100").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_334100").val();
    var txt_op_station = $("#txt_op_station_334100").val();
    var txt_branch_no = $("#txt_branch_no_334100").val();
    var txt_client_id = $("#txt_client_id_334100").val();
    var txt_fund_account = $("#txt_fund_account_334100").val();
    var txt_password = $("#txt_password_334100").val();
    var txt_password_type = $("#txt_password_type_334100").val();
    var txt_user_token = $("#txt_user_token_334100").val();
    var txt_fund_company = $("#txt_fund_company_334100").val();
    var fund_code = $("#txt_fund_code_334100").val();
    var entrust_no = $("#txt_entrust_no_334100").val();
    var allotno = $("#txt_allotno_334100").val();
    var position_str = $("#txt_position_str_334100").val();
    var request_num = $("#txt_request_num_334100").val();
    var ofchannel_type = $("#txt_ofchannel_type_334100").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundEntrustQry");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCompany = txt_fund_company;
    param.fundCode = fund_code;
    param.allotno = allotno;
    param.entrustNo = entrust_no;
    param.ofchannelType = ofchannel_type;
    param.positionStr = position_str;
    param.requestNum = request_num;
    param.sysnode_id = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_334100").html(result);
    });
}

function QueryData_332250() {

    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_332250").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_332250").val();
    var txt_op_station = $("#txt_op_station_332250").val();
    var txt_branch_no = $("#txt_branch_no_332250").val();
    var txt_client_id = $("#txt_client_id_332250").val();
    var txt_fund_account = $("#txt_fund_account_332250").val();
    var txt_password = $("#txt_password_332250").val();
    var txt_password_type = $("#txt_password_type_332250").val();
    var txt_user_token = $("#txt_user_token_332250").val();
    var txt_bank_no = $("#txt_bank_no_332250").val();
    var entrust_no = $("#txt_entrust_no_332250").val();
    var position_str = $("#txt_position_str_332250").val();
    var request_num = $("#txt_request_num_332250").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.BankTransferLogQry");

    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.bank_no = txt_bank_no;
    param.entrustNo = entrust_no;
    param.positionStr = position_str;
    param.requestNum = request_num;
    param.sysnode_id = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_332250").html(result);
    });
}

function QueryData_334215() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_334215").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_334215").val();
    var txt_op_station = $("#txt_op_station_334215").val();
    var txt_branch_no = $("#txt_branch_no_334215").val();
    var txt_client_id = $("#txt_client_id_334215").val();
    var txt_fund_account = $("#txt_fund_account_334215").val();
    var txt_password = $("#txt_password_334215").val();
    var txt_password_type = $("#txt_password_type_334215").val();
    var txt_user_token = $("#txt_user_token_334215").val();
    var txt_fund_company = $("#txt_fund_company_334215").val();
    var txt_fund_code = $("#txt_fund_code_334215").val();
    var entrust_no = $("#txt_entrust_no_334215").val();
    var position_str = $("#txt_position_str_334215").val();
    var request_num = $("#txt_request_num_334215").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundAdvanceQry");

    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCompany = txt_fund_company;
    param.fundCode = txt_fund_code;
    param.entrustNo = entrust_no;
    param.positionStr = position_str;
    param.requestNum = request_num;
    param.sysnode_id = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_334215").html(result);
    });
}

function QueryData_332253() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_332253").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_332253").val();
    var txt_op_station = $("#txt_op_station_332253").val();
    var txt_branch_no = $("#txt_branch_no_332253").val();
    var txt_client_id = $("#txt_client_id_332253").val();
    var txt_fund_account = $("#txt_fund_account_332253").val();
    var txt_password = $("#txt_password_332253").val();
    var txt_password_type = $("#txt_password_type_332253").val();
    var txt_user_token = $("#txt_user_token_332253").val();
    var txt_fund_password = $("#txt_fund_password_332253").val();
    var txt_bank_password = $("#txt_bank_password_332253").val();
    var txt_bank_no = $("#txt_bank_no_332253").val();
    var txt_money_type = $("#txt_money_type_332253").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.QueryBankAmount");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundpassword = txt_fund_password;
    param.bankpassword = txt_bank_password;
    param.bankno = txt_bank_no;
    param.monetyType = txt_money_type;
    param.sysnode_id = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_332253").html(result);
    });
}

function QueryData_334002() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_334002").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_334002").val();
    var txt_op_station = $("#txt_op_station_334002").val();
    var txt_branch_no = $("#txt_branch_no_334002").val();
    var txt_client_id = $("#txt_client_id_334002").val();
    var txt_fund_account = $("#txt_fund_account_334002").val();
    var txt_password = $("#txt_password_334002").val();
    var txt_password_type = $("#txt_password_type_334002").val();
    var txt_user_token = $("#txt_user_token_334002").val();
    var txt_fund_company = $("#txt_fund_company_334002").val();
    var txt_fund_code = $("#txt_fund_code_334002").val();
    var txt_amount = $("#txt_amount_334002").val();
    var txt_allotno = $("#txt_allotno_334002").val();
    var txt_exceedflag = $("#txt_exceedflag_334002").val();
    var ofchannel_type = $("#txt_ofchannel_type_334002").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundRedeem");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCode = txt_fund_code;
    param.allotno = txt_allotno;
    param.amount = txt_amount;
    param.exceedflag = txt_exceedflag;
    param.channelType = ofchannel_type;
    param.sysnode_id = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_334002").html(result);
    });
}

function QueryData_334102() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_334102").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_334102").val();
    var txt_op_station = $("#txt_op_station_334102").val();
    var txt_branch_no = $("#txt_branch_no_334102").val();
    var txt_client_id = $("#txt_client_id_334102").val();
    var txt_fund_account = $("#txt_fund_account_334102").val();
    var txt_password = $("#txt_password_334102").val();
    var txt_password_type = $("#txt_password_type_334102").val();
    var txt_user_token = $("#txt_user_token_334102").val();
    var txt_fund_company = $("#txt_fund_company_334102").val();
    var txt_fund_code = $("#txt_fund_code_334102").val();
    var position_str = $("#txt_position_str_334102").val();
    var request_num = $("#txt_request_num_334102").val();
    var en_business_flag = $("#txt_en_business_flag_334102").val();
    var en_stock_type = $("#txt_en_stock_type_334102").val();
    var ofchannel_type = $("#txt_ofchannel_type_334102").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundConfirmQry");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCode = txt_fund_code;
    param.fundCompany = txt_fund_company;
    param.businessFlag = en_business_flag;
    param.stockType = en_stock_type;
    param.channelType = ofchannel_type;
    param.positionStr = position_str;
    param.requestNum = request_num;
    param.sysnodeid = 4;
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_334102").html(result);
    });
}

function QueryData_339401() {
    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_339401").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_339401").val();
    var txt_op_station = $("#txt_op_station_339401").val();
    var txt_branch_no = $("#txt_branch_no_339401").val();
    var txt_client_id = $("#txt_client_id_339401").val();
    var txt_fund_account = $("#txt_fund_account_339401").val();
    var txt_password = $("#txt_password_339401").val();
    var txt_password_type = $("#txt_password_type_339401").val();
    var txt_user_token = $("#txt_user_token_339401").val();
    var txt_fund_company = $("#txt_fund_company_339401").val();
    var txt_fund_code = $("#txt_fund_code_339401").val();
    var position_str = $("#txt_position_str_339401").val();
    var request_num = $("#txt_request_num_339401").val();
    var en_business_flag = $("#txt_en_business_flag_339401").val();
    var en_stock_type = $("#txt_en_stock_type_339401").val();
    var ofchannel_type = $("#txt_ofchannel_type_339401").val();
    var beginDate = $("#txt_begin_date_339401").val();
    var endDate = $("#txt_end_date_339401").val();
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.FundConfirmHisQry");
    param.IP = m_IPAddress;
    param.opBranchNo = txt_op_branch_no;
    param.entrustWay = txt_op_entrust_way;
    param.station = txt_op_station;
    param.branchNo = txt_branch_no;
    param.clientId = txt_client_id;
    param.fundAccount = txt_fund_account;
    param.password = txt_password;
    param.passwordType = txt_password_type;
    param.userToken = txt_user_token;
    param.fundCode = txt_fund_code;
    param.fundCompany = txt_fund_company;
    param.businessFlag = en_business_flag;
    param.stockType = en_stock_type;
    param.channelType = ofchannel_type;
    param.positionStr = position_str;
    param.requestNum = request_num;
    param.beginDate = beginDate;
    param.endDate = endDate;
    param.sysnodeid = 4;

    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_339401").html(result);
    });
}



function QueryData_331010() {

    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_331010").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_331010").val();
    var txt_op_station = $("#txt_op_station_331010").val();
    var txt_organ_flag = $("#txt_organ_flag_331010").val();
    var txt_paper_type = $("#txt_paper_type_331010").val();
    var txt_prodta_no = $("#txt_prodta_no_331010").val();

    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.GetQuestionList");
    param.opBranchNo = txt_op_branch_no;

    param.entrustWay = txt_op_entrust_way;

    param.station = txt_op_station;

    param.organflag = txt_organ_flag;

    param.papertype = txt_paper_type;

    param.prodtano = txt_prodta_no;

    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331010").html(result);
    });
}


function QueryData_331011() {

    var result = "";
    var txt_op_branch_no = $("#txt_op_branch_no_331011").val();
    var txt_op_entrust_way = $("#txt_op_entrust_way_331011").val();
    var txt_op_station = $("#txt_op_station_331011").val();
    var txt_organ_flag = $("#txt_organ_flag_331011").val();
    var txt_paper_type = $("#txt_paper_type_331011").val();
    var txt_prodta_no = $("#txt_prodta_no_331011").val();

    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.GetQuestionAnswer");
    param.opBranchNo = txt_op_branch_no;

    param.entrustWay = txt_op_entrust_way;

    param.station = txt_op_station;

    param.organflag = txt_organ_flag;

    param.papertype = txt_paper_type;

    param.prodtano = txt_prodta_no;

    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331010").html(result);
    });
}

function QueryData_331018() {

    var result = "";
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.GetUserInvestInfo");
    param.opBranchNo = "2012";
    param.entrustWay = "7";
    param.station = "345";
    param.branch_no = "";
    param.clientid = "3702455";
    param.fundaccount = "2012000011";
    param.password = "123567";
    param.passwordtype = "2";
    param.usertoken = "";
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331018").html(result);
    });
}

//产品适当性交易匹配检查
function QueryData_331261() {

    var result = "";
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.CheckUserFundRiskNew");
    param.opBranchNo = "2012";
    param.entrustWay = "7";
    param.station = "";
    param.branch_no = "";
    param.clientid = "3702455";
    //param.fundaccount = "2012000011";
    param.password = "123457";
    param.passwordtype = "2";
    param.usertoken = "";
    param.FundCompany = "27";
    param.FundCode = "001542";
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331261").html(result);
    });
}


//适当性管理答卷分数计算
function QueryData_331019() {
    //string identity_type ,string opBranchNo, string entrustWay, string station, string branch_no, string clientid, string password,
    //string passwordtype, string usertoken, string paperanswer, string papertype,string paper_score, string remark
    var result = "";
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.PutAnswerOnly");
    param.identity_type = "";
    param.opBranchNo = "2012";
    param.entrustWay = "7";
    param.station = "";
    param.branch_no = "";
    param.clientid = "3702455";
    //param.fundaccount = "2012000011";
    param.password = "123567";
    param.passwordtype = "2";
    param.usertoken = "";
    param.paperanswer = "930&2|931&4|932&1|933&1|934&3|935&4|936&2|937&2|938&2|939&1^2|940&2|941&3|942&3|943&4|944&2|945&2|946&1|947&1|948&1|949&2|950&1";
    param.papertype = "";
    param.paper_score = "";
    param.remark = "";
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331019").html(result);
    });
}


//产品适当性交易匹配检查
function QueryData_331015() {
    var result = "";
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.SetInvestRiskLog");
    param.identity_type = "";
    param.opBranchNo = "2012";
    param.entrustWay = "7";
    param.station = "";
    param.branch_no = "";
    param.clientid = "3702455";
    //param.fundaccount = "2012000011";
    param.password = "123567";
    param.passwordtype = "2";
    param.usertoken = "";
    param.riskRemindInfo = "投资者风险告知及适当性匹配结果确认";
    param.exchange_type = "";
    param.stock_code = "";
    param.entrust_no = "";
    param.prodrisk_level = "";
    param.corp_risk_level = "";
    param.product_name = "";
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_331015").html(result);
    });
}


function QueryData_2017001023() {

    var result = "";
    var param = new SilverSoft.Param("CiticsfFinance.OpenSystemBll.GetHSDicList");
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_2017001023").html(result);
    });
}
function QueryData_2017001024() {
    var result = "";
    var param = new SilverSoft.Param("CiticsfFinance.OpenSystemBll.GetHSDicDetailList");
    param.DicEntryID = $("#txt_2017001024_dictEntry").val();
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_2017001024").html(result);
    });
}


function QueryData_330001() {
    var result = "";
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.GetHSDataDict");
    param.dict_entry = $("#txt_330001_dictEntry").val();
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_330001").html(result);
    });
}

function QueryData_337400() {
    var result = "";
    var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.DJR_FundListNew");

    param.opBranchNo = "2012";
    param.entrustWay = "7";
    param.station = "";
    param.branch_no = "2012";
  //  param.clientid = "3702455";
    //param.fund_account = "2012000011";
    //param.password = "123567";
   // param.passwordtype = "2";
    param.usertoken = "";
    param.prod_code = "000128";
    param.prodta_no = "";
    param.money_type = "";
    param.assess_level = "";
    param.en_prod_status = "";
    param.en_prodrisk_level = "";
    param.request_num = 1;
    param.position_str = "";
    param.prod_type_ass = "";
    param.straddle_type = "";
    param.prod_internal_code = "";
    param.prodcode_type = "";
    param.en_prodcode_kind = "";
    param.begin_datetime = "";
    param.end_datetime = "";
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_337400").html(result);
    });
}

function QueryData_337403() {
    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundAccountBll.DJR_FundList");
    //param.opBranchNo = "2012";
    //param.entrustWay = "7";
    //param.station = "";
    //param.branch_no = "2012";
    ////param.clientid = "3702455";
    ////param.fund_account = "2012000011";
    ////param.password = "123567";
    ////param.passwordtype = "2";
    //param.usertoken = "";
    //param.prod_code = "";
    //param.prodta_no = "";
    //param.prodcode_type="";
    //param.en_prodcode_kind = "";
    //param.request_num = 2;
    //param.position_str = "";
    //param.en_prod_status = "";
    //param.money_type="";
    //param.en_prodrisk_level = "";
    //param.assess_level = "";
    //param.prod_type_ass = "";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});


    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_GetUserToken");
    //param.HSClinetID = "3802360";   //"2099182";//3706592//3802360:2012000028
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});




    ////var result = "";
    ////var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_QueryOTCProductList");
    ////param.station = "WEB_TEST";  //3706592
    ////var box = SilverSoft.Robot.CallAsync(param, function (box) {
    ////    if (box.Success) {
    ////        result = box.ExtraArgument;
    ////    } else {
    ////        result = "异常：" + box.Error + box.ErrorCode;
    ////    }
    ////    $("#span_337403").html(result);
    ////});



    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_HsClientUserInfo_Query");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3802360";  //3706592
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_DataDictQuery");
    //param.station = "WEB_TEST";  //3706592
    //param.inputID = "ID_TYPE";//ISS_STAT
    //param.Sub_ItemID = "00";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_TAQuery");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3802360";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    /////[[0,"",1,"",""],["CUST_CODE","CUST_NAME","CUST_TYPE","CUST_CLS","CUST_STATUS","CUST_FNAME","INT_ORG","CORP_ORG","SEX","ID_TYPE","ID_CODE","ID_ADDR","ADDRESS","EMAIL","CITIZENSHIP","MOBILE_TEL","CHANNELS","RIGHT_CODE","OPEN_DATE","CUACCT_CODE","CUACCT_INT_ORG","CUACCT_STATUS","CUACCT_OPEN_DATE","MINOR_FlAG","EVAL_SCORE","EVAL_LVL","EVAL_DATE","VALID_DATE","AGREEMENT_ID","EVAL_ID","PAY_ORG","ID_ISS_AGCY","ID_BEG_DATE","ID_EXP_DATE","SURVEY_VERSION","INVSTOR_TYPE","PROF_EXP_DATE","CUST_INVST_TIME","CUST_INVST_CLSS","CUST_ICP","ORG_INVEST_TYPE","EXAM_KEY","MGR_FNAME","MGR_ID_TYPE","MGR_ID_CODE","CAREER"],[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],["3706592","中信测试","0","9","0","中信测试","2016","2000","0","00","500230198404062130","","北京","","CHN","123456789","0578GT","*elt","0","2016000021","2016","0","0","0","0","2","20180917","20200916","","1","0","丰都县公安局","20100205","20200205","","0","0","3","4","","","","","","","04"]]
    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_HsClientUserInfo_Query");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3706592";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});


    //[[0, "", 1, "", ""], ["CUST_CODE", "ECIF_CODE", "CUST_NAME", "ID_TYPE", "ID_CODE", "CUST_TYPE", "CUST_CLS", "CUST_STATUS", "INT_ORG", "OPEN_OP_CODE", "TEL", "EMAIL", "ADDRESS", "CITIZENSHIP", "SEX", "BIRTHDAY", "TRANSACTOR_NAME", "TRANSACTOR_ID_TYPE", "TRANSACTOR_ID_CODE", "ANNUITY_GRP_CODE", "MOBILE_TEL", "CUST_FNAME", "OPEN_DATE", "CUACCT_CODE", "CUACCT_STATUS", "BANK_ACCT", "CURRENCY", "PAY_WAY", "PAY_ORG", "MAIN_FLAG", "BANK_ACCT_NAME", "OPEN_BANK_FNAME", "LARGE_PAY_NO"], [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []], ["3706592", "62000023516710", "中信测试", "00", "500230198404062130", "0", "1", "0", "2016", "0", "13800000001", "null", "null", "   ", "0", "0", "", "  ", "", "", "13800000001", "中信测试全称", "20160511", "2016000021", "0", "2016000021", "0", "0", "869", "1", "", "", ""]]
    var result = "";
    var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_QueryOpenOTCStatus");
    param.station = "WEB_TEST";  //3706592
    param.CustCode = "3802360";
    var box = SilverSoft.Robot.CallAsync(param, function (box) {
        if (box.Success) {
            result = box.ExtraArgument;
        } else {
            result = "异常：" + box.Error + box.ErrorCode;
        }
        $("#span_337403").html(result);
    });



    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_InvestRiskQuery");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3706592";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_HsClientUserInfo_Query");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3706592";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_QueryTAList");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3802360";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_UserTAQuery");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3802360";
    //param.F_SESSION = "";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_QueryUserSignAgreeMentInfo");
    //param.station = "WEB_TEST";  //
    //param.CustCode = "3802360";
    //param.p_CUST_AGMT_TYPE = "1";  //
    ////param.p_REVEAL_VER = "1.0";
    ////param.p_SIGN_TYPE = "1";  //
    ////param.p_AGMT_NO = "13";
    ////param.p_SIGN_RESULT = "A|B|A";  //
    ////param.p_SIGN_FLAG = "0";
    ////param.p_SIGN_STAT = "0";
    ////param.p_OPER_TYPE = "0";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_QueryESignSetInfo");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3802360";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.GetAESEncrypt");
    //param.pszEncrInfo = "071085";  //3706592
    //param.p_llKey = "3802360";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_OpenTAAccount");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3702455";
    //param.OpenType = "0";
    //param.AccountNo = "2012000011";
    //param.TaCode = "Q1";

    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});


    //var result = "";
    //var param = new SilverSoft.Param("CiticsfFinance.FundOTCBLL.OTC_QueryESignInfo");
    //param.station = "WEB_TEST";  //3706592
    //param.CustCode = "3802360";
    //param.p_INST_TYPE = "I";
    //param.p_INST_CLS = "Ia";
    //param.F_SESSION = "g6MkAHHlopP1rR / t9rdznqWJseEtCFKQ";
    //var box = SilverSoft.Robot.CallAsync(param, function (box) {
    //    if (box.Success) {
    //        result = box.ExtraArgument;
    //    } else {
    //        result = "异常：" + box.Error + box.ErrorCode;
    //    }
    //    $("#span_337403").html(result);
    //});

}


