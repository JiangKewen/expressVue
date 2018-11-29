<template>
  <div class="indexBox">
    <el-row type="flex" :gutter="30" justify="center" class="topNav">
      <el-col
        v-for="(item, index) in navsItem"
        :key="index"
        :span="4"
        :class="{'navItem':true,'navActive':newRouter===item.router}"
        @click.native="goNav(item)">
        {{item.value}}
      </el-col>
    </el-row>
    <el-row class="topPoetry">
      <el-col :span="6" :offset="4" class="articles">
        <div class="poetrys">面对大河我无限惭愧</div>
        <div class="poetrys">我年华虚度 控油一身疲倦</div>
        <div class="poetrys">和所有以梦为马的诗人一样</div>
        <div class="poetrys">岁月易逝 一滴不剩</div>
        <div class="poetrys">——海子 《以梦为马》</div>
      </el-col>
      <el-col :span="14" class="articlesBg"></el-col>
    </el-row>
    <h2 class="reason"><span>咨询动态</span></h2>
    <el-row class="reasonBox">
      <el-col :span="16" :offset="4" class="textAndImg">
        <div class="reasonBody">
          <div class="texts">
            <p>
              ClothArt是专业从事高档针织面料设计、研发、生产的综合型纺织企业，成立于2008年，座落在设计之都长沙洋湖。 ClothArt在巴黎、米兰、伦敦、深圳等地区设立分支机构，并向全球10多个国家的著名服装品牌和成衣制造商提供高档、优质的针织面料。我们坚持高端产品定位，与欧洲、日本、韩国、美国等大型纤维跨国企业和国际时尚导向机构建立了长期战略合作伙伴关系，掌握最新国际流行动态；研发的新产品在时尚性和实用性都处于行业领先地位，深受全球高端时装品牌的青睐。
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
    <h2 class="reason"><span>美文赏析</span></h2>
    <el-row class="newsBox">
      <el-col :span="16" :offset="4">
        <el-row class="newsItem" type="flex" justify="space-between" align="middle" v-for="item in newsItem" :key="item.title">
          <el-col class="newsTime" :span="2">
            <span style="font-size:25px;font-weight:600;">{{item.day}}</span>
            <span>{{item.time}}</span>
          </el-col>
          <el-col :span="4"><img :src="item.img" :alt="item.imginfo" class="newImg"></el-col>
          <el-col :span="18" class="newsInfo">
            <h6>{{item.title}}</h6>
            <p>{{item.news}}</p>
            <button>查看全文</button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class="abc" style="height: 1000px;"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navsItem: [
        {
          router: 'index',
          value: '首页'
        },
        {
          router: 'about',
          value: '小桥'
        },
        {
          router: 'shows',
          value: '流水'
        },
        {
          router: 'join',
          value: '人家'
        }
      ],
      newRouter: 'index',
      newsItem: [
        {
          time: 2018.11,
          day: 14,
          img: '../../../static/images/index/news01.jpg',
          imginfo: '亚麻',
          title: '亚麻针织面料的原料与加工浅析',
          news: '亚麻针织面料的原料与加工浅析麻针织衫，日前多数是麻棉混纺纱编织的。报价在35元~400元/件不等。单个品牌卖到800元/件。麻针织衫的长处是吸汗离体不沾身，凉快，挺括，有男人风姿。有资料证明;麻有抗菌效果，当麻针织衫中，麻的混纺比挨近或高于50%时，麻衫的抗菌消臭效果有很好的表现。重复出汗时，身上(衣服)无汗臭味。现在市场上的麻衫，主要有;大麻、苎麻和罗布麻。苎麻的剌痒感不太能彻底治愈，处理好了的...'
        },
        {
          time: 2018.11,
          day: 24,
          img: '../../../static/images/index/news01.jpg',
          imginfo: '亚麻',
          title: '精神收敛，看轻松事情',
          news: '亚麻针织面料的原料与加工浅析麻针织衫，日前多数是麻棉混纺纱编织的。报价在35元~400元/件不等。单个品牌卖到800元/件。麻针织衫的长处是吸汗离体不沾身，凉快，挺括，有男人风姿。有资料证明;麻有抗菌效果，当麻针织衫中，麻的混纺比挨近或高于50%时，麻衫的抗菌消臭效果有很好的表现。重复出汗时，身上(衣服)无汗臭味。现在市场上的麻衫，主要有;大麻、苎麻和罗布麻。苎麻的剌痒感不太能彻底治愈，处理好了的...'
        }
      ]
    }
  },
  methods: {
    goNav (item) {
      console.log(item, 'item')
      this.newRouter = item.router
    }
  }
}
</script>
<style lang="scss" scoped>
$topHeight: 68px; // 顶部nav高度
$grayBg: #f0f0f0; // 暗一点的背景
$grayColor: rgb(170, 170, 170); // 暗一点的背景下的文字
$redBg: rgb(215, 0, 15); // 红一点的颜色
$yellowBg: #ef742d; // 黄一点的颜色
$zongseBg: #bc9b63; // 棕色一点的颜色
.indexBox {
  padding-top: $topHeight;
  box-sizing: border-box;
  min-width: 1200px;
  .topNav {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    margin: 0 auto !important;
    width: 100%;
    height: $topHeight;
    background: $grayBg;
    box-shadow: 0 4px 20px 1px ($grayBg - 20);
    box-sizing: border-box;
    .navItem {
      text-align: center;
      height: $topHeight;
      line-height: $topHeight;
      color: $grayColor;
      font-size: 18px;
      cursor: pointer;
      margin: 0 2px;
      &:hover {
        color: $yellowBg;
        background: $grayBg + 4;
      }
    }
    .navActive {
      color: $yellowBg;
      background: $grayBg + 4;
      font-weight: bold;
    }
  }
  .topPoetry {
    padding-top: 30px;
    .articles {
      position: relative;
      padding-top: 18px;
      user-select: none;
      .poetrys {
        position: relative;
        line-height: 3rem;
        color: $grayColor;
        transition: all 2s;
        &:hover {
          // transform: rotate(30deg);
          transform: translate(30px, 0);
          color: $redBg - 20;
        }
      }
    }
    .articlesBg {
      width: 700px;
      height: 260px;
      background: url(../../../static/images/index/haizi.jpg) no-repeat center center;
      background-size: 100%;
      box-shadow: 4px 4px 20px 10px ($grayBg - 20);
      transition: all 2s;
      &:hover {
        background-size: 110%;
      }
    }
  }
  .reason {
    display: inline-block;
    color: $yellowBg;
    padding-left: 22%;
    font-size: 26px;
    margin: 20px auto;
    margin-top: 90px;
    border-top: 1px solid $grayBg;
    box-sizing: border-box;
    transition: all 2s;
    span {
      display: inline-block;
      cursor: pointer;
      border-bottom: 4px solid $yellowBg;
      border-right: 4px solid $yellowBg;
      border-radius: 5px;
      padding: 8px 22px;
    }
    &:hover {
      padding-left: 26%;
    }
  }
  .reasonBox {
    position: relative;
    background: url(../../../static/images/index/bg.jpg);
    .textAndImg {
      // border: 1px solid salmon;
      padding: 50px;
      display: flex;
      justify-content: flex-end;
      .reasonBody {
        border: 5px solid $zongseBg;
        padding: 60px;
        width: 20%;
        .texts {
          width: 100vw * .5;
          margin-left: calc(100% - 100vw * .5);
          text-align: right;
          background: #eee;
          border: 1px dotted $zongseBg;
          height: 400px;
          p {
            padding: 60px 90px;
            font-size: 14px;
            line-height: 60px;
            color: #8c8c8c;
          }
        }
      }
    }
  }
  .newsBox {
    padding: 30px 0;
    .newsItem {
      padding: 60px 10px 20px 10px;
      border-bottom: 1px solid black;
      .newsTime {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: center;
        line-height: 1.6rem;
        color: rgb(170, 170, 170);
        font-family: "Courier New";
      }
      .newsInfo {
        h6 {
          margin-bottom: 12px;
          transition: all 1s;
          cursor: pointer;
          &:hover {
            color: $redBg;
            transform: translate(4px, 0);
          }
        }
        p {
          color: rgb(170, 170, 170);
          line-height: 1.8rem;
          font-size: 13px;
          margin-bottom: 24px;
        }
        button {
          border: 1px solid $zongseBg;
          color: $zongseBg;
          background: transparent;
          padding: 7px 14px;
          cursor: pointer;
          &:hover {
            color: #fff;
            background: $zongseBg;
          }
        }
      }
    }
    .newImg {
      width: 100%;
      height: 100%;
      transition: all 2s;
      &:hover {
        transform: scale(1.1, 1.1);
      }
    }
  }
}
// @keyframes easeRight {
//   from {}
//   to {
    
//   }
// }
</style>
