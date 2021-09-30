// script.js

$(function(){
    
    //DRAGGABLE
    
    $('#box4').css('background', 'purple' );
    
    //draggable
    $('.box').draggable();
    
    // Using the drag option to scroll the pages
    $('#box1').draggable({scroll:true, revert: "invalid"});
    
    // only to move it in specific directions
    $('#box2').draggable({axis: 'x'});
    $('#box3').draggable({axis: 'y'});
    
    // containment
    $('#box4').draggable({containment: '.container', revert: "valid"});
    
    //DROPPABLE
    
    $('#droppable').droppable({
        accept: '#box1',
        drop: function(){
            $(this).find('span').html("When a box got attitude,drop it like it's hot")
        }
    });
    
    
    // SORTABLE
    
    
    $('#sortableToo').sortable({ connectWith: "#sortable", placeholder:"placeholderBox" });
    
    $('#sortable').sortable({ connectWith: "#sortableToo", placeholder: "placeholderBox"});
    
    
    //Accordion
    
    $('#accordion').accordion({ collapsible: true, heightStyle: "content" });
    
    
    //DatePicker
    
    $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 2,
    });
    
    
    // TODO LIST
    
    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectWith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    })
    
    $('input').keydown(function(e){
        if(e.keyCode == 13) {
            var item =$(this).val();
            
            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('');
        }
    });
    
    $('#trash').droppable ({
        drop:function(event, ui){
            ui.draggable.remove();
        }
        
    });

});