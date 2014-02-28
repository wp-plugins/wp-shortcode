var shortcodes = {
    "button-brown" : {
        "self-closing" : false, // for shortcodes that don't need [/closing] tag
        "atts" : {
            "url" : "#",
            "target" : "_self",
            "position" : "left"
        },
        "content" : "Button text" ,
        "description" : "Inserts a brown button. Set target to <strong>_blank</strong> to open link in a new window."
    },
    "button-blue" : {
        "self-closing" : false,
        "atts" : {
            "url" : "#",
            "target" : "_self",
            "position" : "left"
        },
        "content" : "Button text" ,
        "description" : "Inserts a blue button. Set target to <strong>_blank</strong> to open link in a new window."
    },
    "button-green" : {
        "self-closing" : false,
        "atts" : {
            "url" : "#",
            "target" : "_self",
            "position" : "left"
        },
        "content" : "Button text" ,
        "description" : "Inserts a green button. Set target to <strong>_blank</strong> to open link in a new window."
    },
    "button-yellow" : {
        "self-closing" : false,
        "atts" : {
            "url" : "#",
            "target" : "_self",
            "position" : "left"
        },
        "content" : "Button text" ,
        "description" : "Inserts a yellow button. Set target to <strong>_blank</strong> to open link in a new window."
    },
    "button-red" : {
        "self-closing" : false,
        "atts" : {
            "url" : "#",
            "target" : "_self",
            "position" : "left"
        },
        "content" : "Button text" ,
        "description" : "Inserts a red button. Set target to <strong>_blank</strong> to open link in a new window."
    },
    "button-white" : {
        "self-closing" : false,
        "atts" : {
            "url" : "#",
            "target" : "_self",
            "position" : "left"
        },
        "content" : "Button text" ,
        "description" : "Inserts a white button. Set target to <strong>_blank</strong> to open link in a new window."
    },
    "alert-note" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Note text",
        "description" : "Display a note."
    },
    "alert-announce" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Announce text",
        "description" : "Display an announcement."
    },
    "alert-success" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Success text",
        "description" : "Display a success message."
    },
    "alert-warning" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Warning text",
        "description" : "Display warning or error message."
    },
    "youtube" : {
        "self-closing" : true,
        "atts" : {
            "id" : "#",
            "width" : "600",
            "height" : "340",
            "position" : "left"
        },
        "content" : "",
        "description" : "Embed a Youtube Video"
    },
    "vimeo" : {
        "self-closing" : true,
        "atts" : {
            "id" : "#",
            "width" : "600",
            "height" : "340",
            "position" : "left"
        },
        "content" : "",
        "description" : "Embed a Vimeo Video."
    },
    "googlemap" : {
        "self-closing" : true,
        "atts" : {
            "address" : "Libertyville, Illinois, USA",
            "width" : "600",
            "height" : "340",
            "position" : "left"
        },
        "content" : "",
        "description" : "Embed a Google Map. Insert address or GPS location."
    },
    "toggle" : {
        "self-closing" : false,
        "atts" : {
            "title" : "Toggle Title"
        },
        "content" : "Insert Content Here",
        "content_field" : "textarea",
        "description" : "Content will be shown after clicking on the toggle title."
    },
    "tabs" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "[tab title=&quot;Tab 1 Title&quot;]Insert tab 1 content here[/tab]\n[tab title=&quot;Tab 2 Title&quot;]Insert tab 2 content here[/tab]\n[tab title=&quot;Tab 3 Title&quot;]Insert tab 3 content here[/tab]",
        "content_field" : "textarea",
        "description" : "Display content in tabbed form."
    },
    "divider" : {
        "self-closing" : true,
        "atts" : {},
        "content" : "",
        "description" : "Simple horizontal divider."
    },
    "divider_top" : {
        "self-closing" : true,
        "atts" : {},
        "content" : "",
        "description" : "Divider with an anchor link to top of page."
    },
    "clear" : {
        "self-closing" : true,
        "atts" : {},
        "content" : "",
        "description" : "Clear shortcode can be used to clear an element of its neighbors, no floating elements are allowed on the left or the right side."
    },
    
    // Column Shortcodes
    
    "one_third" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "one_third_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "two_third" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "two_third_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "one_half" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "one_half_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "one_fourth" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "one_fourth_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "three_fourth" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "three_fourth_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "one_fifth" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "one_fifth_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "two_fifth" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "two_fifth_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "three_fifth" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "three_fifth_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "four_fifth" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "four_fifth_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "one_sixth" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "one_sixth_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "five_sixth" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
    "five_sixth_last" : {
        "self-closing" : false,
        "atts" : {},
        "content" : "Column content",
        "content_field" : "textarea",
        "description" : "Use column shortcodes in conjunction with their <em>Last</em> version, eg. <br /><strong>One Third + One Third + One Third Last</strong>"
    },
};

function mnmshortcodesubmit() {
	var tagtext;
    var mnm_shortcodeid = document.getElementById('mnmshortcode_tag').value;
    if (mnm_shortcodeid == 0) {
        tinyMCEPopup.close();
        return;
    }
    if (typeof shortcodes[mnm_shortcodeid] != 'undefined') {
        tagtext = "["+mnm_shortcodeid + ' ';
        jQuery.each(shortcodes[mnm_shortcodeid]['atts'], function(index, item) {
            tagtext += index + '="' + jQuery('#shortcode_att_'+index).val() + '" ';            
        });
        
        tagtext = tagtext.trim() + "]";
        if (!shortcodes[mnm_shortcodeid]['self-closing']) {
            tagtext += jQuery('#shortcode_content').val() + "[/" + mnm_shortcodeid + "]";
        }
    } else {
        tagtext="["+mnm_shortcodeid + "]Insert your content here[/" + mnm_shortcodeid + "]";
    }

    if(window.tinyMCE) {
		window.tinyMCE.execInstanceCommand('content', 'mceInsertContent', false, tagtext);
		tinyMCEPopup.editor.execCommand('mceRepaint');
		tinyMCEPopup.close();
	}
	return;
}

// document ready
jQuery(function($) {
    $('#mnmshortcode_panel').append('<table id="mnmshortcode_atts" border="0" cellpadding="4" cellspacing="0"></table>');
    tinyMCEPopup.resizeToInnerSize();
    $('#mnmshortcode_tag').change(function() {
        var mnm_shortcodeid = $(this).val();
        var $atts_table = $('#mnmshortcode_atts');
        $atts_table.empty();
        // build form
        if (typeof shortcodes[mnm_shortcodeid] != 'undefined') {
            var html = '';
            
            if (shortcodes[mnm_shortcodeid]['description']) {
                html += '<tr><td class="mnmshortcode_description" colspan="2">'+shortcodes[mnm_shortcodeid]['description']+'</td></tr>';
            }
            $.each(shortcodes[mnm_shortcodeid]['atts'], function(index, item) {
                html += '<tr class="mnmshortcode_att_name"><td>'+index+'</td><td><input type="text" name="shortcode_att_'+index+'" id="shortcode_att_'+index+'" value="'+item+'" /></td></tr>';
            });
            
            if (!shortcodes[mnm_shortcodeid]['self-closing']) {
                if (shortcodes[mnm_shortcodeid]['content_field'] == undefined) {
                    shortcodes[mnm_shortcodeid]['content_field'] = 'input';
                }
                switch (shortcodes[mnm_shortcodeid]['content_field']) {
                    case 'input':
                        html += '<tr class="mnmshortcode_content"><td>Content</td><td><input type="text" name="shortcode_content" id="shortcode_content" value="'+shortcodes[mnm_shortcodeid]['content']+'" /></td></tr>';
                        break;
                        
                    case 'textarea':
                        html += '<tr class="mnmshortcode_content"><td>Content</td><td><textarea name="shortcode_content" id="shortcode_content">'+shortcodes[mnm_shortcodeid]['content']+'</textarea></td></tr>';
                        break;
                    
                    default:
                        html += '<tr class="mnmshortcode_content"><td>Content</td><td><input type="text" name="shortcode_content" id="shortcode_content" value="'+shortcodes[mnm_shortcodeid]['content']+'" /></td></tr>';
                        break;
                }
                
            }
            $atts_table.append(html);
            $('.mnmshortcode_att_name input, .mnmshortcode_content input').each(function() {
                var $this = $(this);
                $this.data('defaultVal', $this.val())
                .css('color', '#777777')
                .focus(function() {
                    if ($this.val() == $this.data('defaultVal')) {
                        $this.val('').css('color', '#000000');
                    }
                });
            });
        }
        tinyMCEPopup.execCommand( 'mcewpspanel_resize', false, { height : $('#mnmshortcode_form').height() } );
        tinyMCEPopup.resizeToInnerSize();
    });
    
    // Resize onLoad
    tinyMCEPopup.execCommand( 'mcewpspanel_resize', false, { height : 50 } );
    tinyMCEPopup.resizeToInnerSize();
});