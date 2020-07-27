<template>
    <div>
        <div class="wrap">
            <div class="header">
                <img :src="`image/gift${index}.jpg`">
                <div class="content">
                    <p class="title">极无双2元福利礼包</p>
                    <p class="price">{{price}}移动积分</p>
                </div>
            </div>
            <div class="rule">
                <img v-if="index" :src="`image/rule${index}.png`">
            </div>
        </div>
        <div class="btn-wrap">
            <div class="btn" @click="gotoLink"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .wrap {
        height: calc(100vh - 120px);
        overflow-y: scroll;
    }
    .header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 38px 36px;
        border-bottom: 1px solid #e6e6e6 ;
        img {
            width: 200px;
            height: auto;
        }
        .content {
            flex: 1;
            padding-left: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
        }
        .title {
            font-weight: bold;
        }
        .price {
            color: #e9582c;
            margin-top: 40px;
        }
    }
    .rule {
        margin: 30px 36px 0;
        img {
            width: 100%;
            height: auto;
        }
    }
    .btn-wrap {
        height: 120px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1;
    }
    .btn {
        width: 237px;
        height: 60px;
        background-image: url(../assets/image/btn.png);
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>

<script>
    export default {
        name: 'Detail',
        data() {
            return {
                index: 0,
                price: 0
            }
        },
        created() {
            this.index = this.$route.params.id
            this.price = this.$route.query.price
        },
        methods: {
            gotoLink() {
                window.location.href = 'https://open.shi1.cn/OnLineInfo/coupon.html?AppKey=YSWS20200724'
            }
        }
    }
</script>