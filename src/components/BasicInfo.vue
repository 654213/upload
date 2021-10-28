<template>
  <div>
    <div class="header">基本信息</div>
    <el-form :inline="true">
      <el-form-item label="申请人:">
        <el-input
          :disabled="true"
          size="mini"
          style="width: 180px"
          placeholder="系统自动填入"
        ></el-input>
      </el-form-item>
      <el-form-item label="申请日期:">
        <el-input
          :disabled="true"
          size="mini"
          style="width: 180px"
          placeholder="系统自动填入"
        ></el-input>
      </el-form-item>
      <el-form-item label="采购类型:">
        <el-select placeholder="物资" size="mini" style="width: 180px">
          <el-option label="一" value="1"></el-option>
          <el-option label="二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="框架类型:">
        <el-select placeholder="请选择" size="mini" style="width: 180px">
          <el-option label="一" value="1"></el-option>
          <el-option label="二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="建议采购方式:">
        <el-select placeholder="直接采购" size="mini" style="width: 180px">
          <el-option label="一" value="1"></el-option>
          <el-option label="二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="直接采购方式">
        <el-select placeholder="其它" size="mini" style="width: 180px">
          <el-option label="一" value="1"></el-option>
          <el-option label="二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="直接采购目录:">
        <el-select placeholder="目录一" size="mini" style="width: 80px">
          <el-option label="一" value="1"></el-option>
          <el-option label="二" value="2"></el-option>
        </el-select>
        <el-select placeholder="目录二" size="mini" style="width: 80px">
          <el-option label="一" value="1"></el-option>
          <el-option label="二" value="2"></el-option>
        </el-select>
        <el-select placeholder="目录三" size="mini" style="width: 80px">
          <el-option label="一" value="1"></el-option>
          <el-option label="二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择项目">
        <el-input placeholder="请输入内容" style="height:20px">
          <template slot="append">选择</template>
        </el-input>
      </el-form-item>
      <el-form-item label="项目编号:">
        <el-input
          :disabled="true"
          size="mini"
          style="width: 180px"
          placeholder="自动带出项目编号"
        ></el-input>
      </el-form-item>
      <el-form-item label="项目部门:">
        <el-input
          :disabled="true"
          size="mini"
          style="width: 180px"
          placeholder="自动带出项目编号"
        ></el-input>
      </el-form-item>
      <el-form-item label="项目负责人:">
        <el-input
          :disabled="true"
          size="mini"
          style="width: 180px"
          placeholder="自动带出项目负责人"
        ></el-input>
      </el-form-item>
      <el-form-item label="联系电话:">
        <el-input
          size="mini"
          style="width: 180px"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "BasicInfo",
};
</script>

<style>
.header {
  background-color: rgb(242, 242, 242);
  color: #333;
  text-align: center;
  line-height: 60px;
}
.all{
  display: flex;
  justify-content: space-between;
}
</style>