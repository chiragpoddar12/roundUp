    $(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function (e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });
});

function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
}
function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
}

function onCauseSelect(){
    var cause = document.getElementById("select-cause").value;
    var charityNames = document.getElementById("select-charityName").children;
    for(var i=1; i<charityNames.length; i++){
        if (charityNames[i].value.startsWith(cause) || cause.startsWith("dummy")){
            $("#select-charityName option[value=" + charityNames[i].value+ "]").show();
        }else{
            $("#select-charityName option[value=" + charityNames[i].value + "]").hide();
        }
    }
}