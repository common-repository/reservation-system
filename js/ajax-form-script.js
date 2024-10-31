jQuery(document).ready(function () {
    jQuery('form#reservationformid').on('submit', function (e) {
        jQuery.ajax({
            type: "POST",
            url: ajax_form_object.ajaxurl,
            dataType: 'json',
            data: {
                'action': 'reservation_system_insert_form',
                'r_security_nonce': jQuery('input[name=r_security_nonce]').val(),
                'eventname': jQuery('input[name=r_eventname]').val(),
                'eventdetail': jQuery('textarea[name=r_eventdetail]').val(),
                'name': jQuery('input[name=r_name]').val(),
                'postid': jQuery('input[name=r_postid]').val(),
                'number': jQuery('input[name=r_number]').val(),
                'date': jQuery('input[name=r_date]').val()
            },
            beforeSend: function () {
                jQuery("#image").show();
            },
            complete: function () {
                jQuery("#image").hide();
            },
            success: function (res) {
                if (res == 1) {
                    jQuery(".messageshow").append("<span>Successfully Insert</span>");
                } else if (res == 2) {
                    jQuery(".messageshow").append("<span>Already Reserve</span>");
                } else {
                    jQuery(".messageshow").append("<span>Something Wrong</span>");
                }
                jQuery(".messageshow span").delay(1500).hide(0);
            }
        });

        return false;
        e.preventDefault();
    });
});