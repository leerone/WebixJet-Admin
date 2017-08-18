define([], function(){
	var layout = {
		type: "clean",
		rows: [{
			id:"tabsDataMana", view:"tabbar",  multiview:true,
			css: "tab-mana",
			value: "tabDataMana",
			optionWidth: 160, 
			height:30,
			options:[],
			on: {
				onOptionRemove: function(id, value){
					if(!id) return;

					$$("viewsDataMana").removeView(id);

					$$("app:menu").unselectAll();
					if(this.config.options.length === 0){
						$$("tabWelcome").show();
					}else{
						var curTab = this.getValue();
						$$("app:menu").select(curTab);
					}
				},
				onChange: function(newv, oldv){
					if(!newv) return;
					$$("app:menu").select(newv);
				}
			}
		}, {
			id:"viewsDataMana", cells:[
            	{view:"template", id:"tabWelcome", template:"<div class='welcom-word'>欢迎使用电压自动采集系统!</div>"} //默认页签
        	]
		}]
	};

	return layout;
});