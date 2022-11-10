<template>
    <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple">yang</div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple-light">lin</div>
        </el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
            <div class="grid-content bg-purple">
                <button @click="getBaidu">ling</button>
                <label>
                    <input v-model="infoStr">
                </label>
                <p>ling</p>
            </div>
        </el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
            <div class="grid-content bg-purple-light">long</div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "layout",
        data() {
            return {
                infoStr: '我的'
            }
        },
        methods: {
            getBaidu() {
                // eslint-disable-next-line no-undef
                let infoli = '我的liolili';
                this.$axios.get('/api/yang/yang?name=yang&yang=linlong')
                    .then(function (response) {
                        const info = response.data.data.name;
                        console.log("info===", info);
                        infoli = info;
                        const yang = response.data.data.yang;
                        console.log("yang===", yang);
                        const list = response.data.data.list;
                        console.log("list===", list)
                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
                // eslint-disable-next-line no-undef

                this.infoStr = infoli;
                console.log("infoStr==" + JSON.stringify(this.infoStr));
            }
        }
    }
</script>

<style scoped>
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>