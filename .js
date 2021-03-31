var list = [];
function append_n(val){
    list.push(val);
    $("#input__").html(list);
}
function del_elemn(){
    list.pop();
    $("#input__").html(list);
    if (list.length == 0){
        $("#input__").html(0);
    }
}

function all_clear(){
    list = [];
    $("#input__").html(list);
    $("#input__").html(0);
}
function calc_fial(){
    let selected = $("#selected_unit").val();
    let required = $("#required_unit").val();
    let unit = parseFloat(list.join(""));
    let raw_unit , pro_unit;
    switch(selected){
        case "Mt":
        raw_unit = unit * 1000000
        break;
        
        case "Gm":
        raw_unit = unit * 1000000000
        break;
        
        case "Mm":
        raw_unit = unit * 1000000
        break;
        
        case "km":
        raw_unit = unit * 1000
        break;
        
        case "hm":
        raw_unit = unit * 100
        break;
        
        case "dam":
        raw_unit = unit * 10
        break;
        
        case "m":
        raw_unit = unit
        break;
        
        case "dm":
        raw_unit = unit / 10
        break;
        
        case "cm":
        raw_unit = unit / 100
        break;
        
        case "mm":
        raw_unit = unit / 1000
        break;
        
        case "μm":
        raw_unit = unit / 1000000
        break;
        
        case "nm":
        raw_unit = unit / 1000000000
        break;
        
    }
    
    switch(required){
       
        case "Mt":
        pro_unit = raw_unit / 1000000 + " Mt"
        break;
        
        
        case "Gm":
        pro_unit = raw_unit / 1000000000 + " Gg"
        break;
        
        case "Mm":
        pro_unit = raw_unit / 1000000 + " Mg"
        break;
        
        case "km":
        pro_unit = (raw_unit / 1000) + " Kg"
        break;
        
        case "hm":
        pro_unit = (raw_unit / 100) + " mg"
        break;
        
        case "dam":
        pro_unit = (raw_unit / 10) + " dag"
        break;
        
        case "m":
        pro_unit = (raw_unit) + " g"
        break;
        
        case "dm":
        pro_unit = (raw_unit * 10) + " dg"
        break;
        
        case "cm":
        pro_unit = (raw_unut * 100) + " cg"
        break;
        
        case "mm":
        pro_unit = (raw_unit * 1000) + " mg"
        break;
        
        case "μm":
        pro_unit = (raw_unit * 1000000) + " μg"
        break;
        
        case "nm":
        pro_unit = (raw_unit * 1000000000) + " ng"
        break;
    }
    
    if (pro_unit.includes("NaN")){
        $("#result").html("0");
    }
    else{
        $("#result").html(pro_unit)
    }
}

function Auto(){
    let selected = $("#selected_unit").val();
    $("#sy").html(selected);
}
setInterval(Auto,0);

var x = 0
function change_bg(){
    if (x==0){
       $("body").css({
            "background":"white",
            "color":"black"
        });
        $(".keypad > div").css("background","gray");
        $("select , label").css("color","black");
        $("hr").css("background","black");
        $("#btn").html("off");
        $("#btn").css("color","red");
        x = 1;
        
    }
    else{
        $("body").css({
            "background":"#010101",
            "color":"#fbfbfb"
        });
        $(".keypad > div").css("background","#1f1f1f");
        $("select , label").css("color","#fbfbfb");
        $("hr").css("background","white");
        $("#btn").html("on");
        $("#btn").css("color","lime");
        x = 0;
    }
}
