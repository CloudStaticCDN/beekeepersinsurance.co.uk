$(function() {
    $("#pph").blur(function() {
        var tot = parseInt($("#noh").val());
        if (tot != "NaN") {
            $("#totalhs").val(eval(tot * parseInt($("#pph").val())));
            $("#lefttotalhs").val(eval(tot * parseInt($("#pph").val())))
        }
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#stocksuminsured").blur(function() {
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#leftstocksum").val(stocksuminsured);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#noh").blur(function() {
        $("#leftnoh").val($("#noh").val());
        var tot = parseInt($("#pph").val());
        if (tot != "NaN") {
            $("#totalhs").val(eval(tot * parseInt($("#noh").val())));
            $("#lefttotalhs").val(eval(tot * parseInt($("#noh").val())))
        }
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#ext").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        ('#stocksuminsured').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#trop").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#micro").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#exh").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#wrkb").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#equi").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#cloth").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#book").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#ds").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#beec").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
});
$(function() {
    $("#other").blur(function() {
        var ext = $("#ext").val();
        if (ext == "") {
            ext = 0
        }
        var trop = $("#trop").val();
        if (trop == "") {
            trop = 0
        }
        var micro = $("#micro").val();
        if (micro == "") {
            micro = 0
        }
        var exh = $("#exh").val();
        if (exh == "") {
            exh = 0
        }
        var wrkb = $("#wrkb").val();
        if (wrkb == "") {
            wrkb = 0
        }
        var equi = $("#equi").val();
        if (equi == "") {
            equi = 0
        }
        var cloth = $("#cloth").val();
        if (cloth == "") {
            cloth = 0
        }
        var book = $("#book").val();
        if (book == "") {
            book = 0
        }
        var ds = $("#ds").val();
        if (ds == "") {
            ds = 0
        }
        var beec = $("#beec").val();
        if (beec == "") {
            beec = 0
        }
        var other = $("#other").val();
        if (other == "") {
            other = 0
        }
        var newtot = eval(parseInt(book) + parseInt(ds) + parseInt(beec) + parseInt(other));
        var tot = eval(parseInt(newtot) + parseInt(ext) + parseInt(trop) + parseInt(micro) + parseInt(exh) + parseInt(wrkb) + parseInt(equi) + parseInt(cloth));
        $('#content_sum').val(tot);
        $('#leftcontentsum').val(tot);
        var content_sum = $("#content_sum").val();
        if (content_sum == "")
            content_sum = 0;
        var stocksuminsured = parseInt($("#stocksuminsured").val());
        if (stocksuminsured == "NaN")
            stocksuminsured = 0;
        var totalhs = parseInt($("#totalhs").val());
        if (totalhs == "NaN")
            totalhs = 0;
        var finaltotal = eval(parseInt(content_sum) + parseInt(stocksuminsured) + parseInt(totalhs));
        $("#hiddenfinaltotal").val(finaltotal);
        $("#finaltotal").empty();
        $("#finaltotal").html(finaltotal);
        $("#leftfinaltotal").val(finaltotal)
    })
})