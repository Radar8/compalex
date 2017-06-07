Data = {
    showAll: function (elem) {
        $('table.table tr.data').show();
        Data.selectElement(elem);
    },

    showDiff: function (elem) {
        $('table.table tr.data').hide();
        $('table.table li.new').parent().parent().parent().show();
        Data.selectElement(elem);
    },

    selectElement: function (elem) {
        $('.panel .sp a').removeClass('active');
        $(elem).addClass('active');
    },

    getTableData: function (url) {
        $('#content-block').html('<img src="/public/img/loading.gif" alt="Loading...">');
        $('#content-block').load(url);
        $('div.modal-background').addClass('visible');
    },

    hideTableData: function () {
        $('#content-block').html('');
        $('div.modal-background').removeClass('visible');
    }
};