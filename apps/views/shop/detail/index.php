<?php echo template('shop/header');echo template('shop/sider');?>
<div class="layui-body">
	<div class="childrenBody childrenBody_show">
		<div class="layui-card">
            <div class="layui-card-header ">
                流水列表
            </div>
			<div class="layui-card-body">
				<table  id="user" lay-filter="common"  ></table>
			</div>
		</div>
	</div>
</div>
<?php echo template('shop/script');?>
<script type="text/html" id="operation">
    <?php echo admin_btn(($dr_url.'/del/id-{{d.id}}'),'del','layui-btn-xs f_del_d','lay-event="del"');?>
</script>
<script type="text/html" id="images">
    <div class="img_view"><img src="{{d.avatar}}"></div>
</script>
    <script type="text/html" id="status">
        {{# if(d.status==1){ }}
        <span class="text-green">成功</span>
        {{# }else if(d.status==0){ }}
        <span class="text-orange">提现中</span>
        {{# }else if(d.status==2){ }}
        <span class="text-red">失败</span>
        {{# } }}
    </script>
    <script type="text/html" id="type">
        {{# if(d.type==1){ }}
        商品收入
        {{# }else if(d.type==2){ }}
        提现
        {{# }else if(d.type==3){ }}
        转账
        {{# } }}
    </script>
<script>
//执行渲染
layui.table.render({
	elem: '#user', //指定原始表格元素选择器（推荐id选择器）
	id:'common',//给事件用的
	height: 'full-250', //容器高度
	url:'<?php echo ("$dr_url/lists")?>',toolbar: '',
	cols: [[
        {field: 'id', title: 'ID', width: 80},
        {field: 'src', title: '名称'},
        {field: 'money', title: '金额'},
        {field: 'sxf', title: '服务费'},
        {field: 'status', title: '状态',toolbar:'#status',width: 200},
        {field: 'type', title: '类型',toolbar:'#type',width: 200},
        {field: 'mark', title: '说明'},
        {field: 'add_time', title: '申请时间',width: 200,toolbar:'<div>{{Time(d.add_time, "%y-%M-%d %h:%m:%s")}}</div>'},
        {field: 'right', title: '操作',toolbar: '#operation',width: 90}
	       ]],
	limit: 20,
	page:true,
	response:{msgName:'message'},
	done:function(res, curr, count){
		this.where.total = count;
        layer.photos({photos:'.img_view'});//添加预览
	}
});

layui.table.on('edit(common)', function(obj){
	var data = {id:obj.data.id},key = "data["+obj.field+"]";
	data[key] = obj.value;
	$.post('<?php echo ("$dr_url/edits")?>',data,function(d){layer.msg(d.message)},'json');
});
</script>
<?php echo template('shop/footer');?>