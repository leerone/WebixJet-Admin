define(function(){
	
	function openNewTab(id){
		var item = webix.$$("app:menu").getItem(id);
		if(!$$(item.id)){
			$$("viewsDataMana").addView({ 
				view:"template", id:item.id,
				template: "<div class='welcom-word'>" + item.value + "模块相关页面...</div>"
			});
			$$("tabsDataMana").addOption({
				id: item.id,
				value: item.value,
				close: true,
				icon: item.icon
			}, true);
		}else{
			$$("tabsDataMana").setValue(item.id);
		}
	}

	return {
		$ui:{
			width: 200,

			rows:[
				{
					view: "tree",
					id: "app:menu",
					type: "menuTree2",
					css: "menu",
					activeTitle: true,
					select: true,
					tooltip: {
						template: function(obj){
							return obj.$count?"":obj.details;
						}
					},
					on:{
						onBeforeSelect:function(id){
							if(this.getItem(id).$count){
								//debugger;
								return false;
							}
							
						},
						onAfterSelect:function(id){
							//this.$scope.show("./"+id);
							//var item = this.getItem(id);
							//webix.$$("title").parse({title: item.value, details: item.details});
							openNewTab(id);
							
						}
					},
					data:[
						{id: "main", value: "基本操作", open: true, data:[
							{ id: "dataMana", value: "数据管理", icon: "table", $css: "dashboard", details:""},
							{ id: "recordMana", value: "档案管理", icon: "table", $css: "orders", details:""},
							{ id: "paramsMana", value: "参数管理", icon: "table", $css: "products", details:""}
						]},
						{id: "queryStat", open: true, value:"查询统计", data:[
							{ id: "statCollection", value: "采集统计", icon: "bar-chart-o", details: "" },
							{ id: "statRecord", value: "档案统计", icon: "bar-chart-o", details: ""}

						]},
						{id: "uis", value:"用户管理", open:1, data:[
							{ id: "pwdMana", value: "密码管理", icon: "lock", details: "" },
							{ id: "promiseMana", value: "权限管理", icon: "user", details: "" }
						]}
					]
				}
			]
		}
	};

});
