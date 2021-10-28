<template>
  <div>
    <div class="header">采购信息</div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="采购任务名称:">
        <el-input size="mini" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="需求日期:">
        <el-input size="mini" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="付款方式:">
        <el-select placeholder="请选择" size="mini" style="width: 180px">
          <el-option label="一" value="1"></el-option>
          <el-option label="二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="暂定包数:">
        <el-input size="mini" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="最迟供货时间:">
        <el-input size="mini" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="进项金额(元):">
        <el-input size="mini" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="质保期限(月):">
        <el-input size="mini" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="估算金额(元):">
        <el-input size="mini" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="专用资质条件:">
        <el-input style="width: 500px" :rows="3"  type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="项目概况:">
        <el-input placeholder="(—)项目的整体情况
项目的整体情况介绍，项目性质(属于自建项目还是经营性项目)，项目预算(包括项目整体采购预算)，工期或交货期,项目主办部门(若有多个部门承接项目应明确一个主办部门，并描述各部门承接项目的界面)，各子项目划分，相关特殊说明等。
(二)中标或销售合同签订情况(自建项目描述立项情况》
是否已中标,销售合同有无签订，销售合同的性质(物资、服务、工程、混合),以及项目和销售合同的要求等。
自建项目描述综合计划费用落实及立项情况。注:概况介绍务必言简意赅,切忌套话。
" style="width: 500px" :rows="10"  type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="本次采购必要性说明:">
        <el-input placeholder="外包原因说明(如:不是项目的核心内容、自主开发能力不足等》
注:工程项目中总承包人可以将承包工程中的部分工程发包给具有相应资质条件的分包单位，但不得将主体工程分包出去，分包单位不得再将其承包的工程分包出去。
信息化建设项目的需求分析、概要设计、详细设计部分和信息安全类项目不得专业分包,业务分包金额原则上不得超过合同总金额的60%。
" style="width: 500px" :rows="10"  type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="备注:">
        <el-input style="width: 500px" :rows="3"  type="textarea"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "PurchaseInfo",
};
</script>

<style scoped>
.header {
  background-color: rgb(242, 242, 242);
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>