
<template>
    <div>
        <h2>
           好莱坞往事
            <span style="color:lightgray">
                ({{movie.publishDate}})
            </span>
        </h2>
        <el-row type="flex" justify="center" :gutter="20">
            <el-col :span="5">
                <img src="../assets/2.jpg" style="width: 150px;height:200px">
            </el-col>
            <el-col :span="8" style="text-align: left">
                <div>
                    导演： {{movie.director}}
                </div>
                <div>
                    编剧：
                    <template v-for="(a,index) in movie.author">
                        <span style="color:#37a">{{a}}</span>
                        <template v-if="index!=movie.author.length-1">
                            /
                        </template>
                    </template>
                </div>
                <div>
                    主演：
                    <template v-for="(a,index) in movie.actors">
                        <span style="color:#37a">{{a}}</span>
                        <template v-if="index!=movie.actors.length-1">
                            /
                        </template>
                    </template>
                </div>
                <div>类型：{{movie.category}}</div>

                <div>
                    制片国家/地区：{{movie.country}}
                </div>
                <div>
                    语言：{{movie.lan}}
                </div>
                <div>
                    上映日期：{{movie.publishDate}}
                </div>
                <div>
                    片长：{{movie.timeLength}} 分钟
                </div>
                <div>
                    又名：{{movie.alias}}
                </div>
            </el-col>
            <el-col :span="5" style="border-left: 1px solid lightgray;text-align: left">
                <h5 style="color:rgba(72,117,122,0.81);margin: 5px">豆瓣评分</h5>
                <div>
                    <div style="display: inline-block">
                        <h1 style="margin: 5px">7.5</h1>
                    </div>
                    <div style="display: inline-block">
                       <el-rate disabled v-model="movie.scoring.star"></el-rate>
                        <div style="font-size:12px;color:#37a;padding-left: 3px">{{movie.scoring.amount}}人评价</div>
                    </div>
                    <div>
                        <el-row>
                            <el-col :span="4" class="star-col">
                                5星
                            </el-col>
                            <el-col :span="14">
                                <el-progress :percentage="movie.scoring.five" color="#ffd596"></el-progress>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4" class="star-col">
                                4星
                            </el-col>
                            <el-col :span="14">
                                <el-progress :percentage="movie.scoring.four" color="#ffd596"></el-progress>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4" class="star-col">
                                3星
                            </el-col>
                            <el-col :span="14">
                                <el-progress :percentage="movie.scoring.three" color="#ffd596"></el-progress>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4" class="star-col">
                                2星
                            </el-col>
                            <el-col :span="14">
                                <el-progress :percentage="movie.scoring.two" color="#ffd596"></el-progress>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4" class="star-col">
                                1星
                            </el-col>
                            <el-col :span="14">
                                <el-progress :percentage="movie.scoring.one" color="#ffd596"></el-progress>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row style="margin-top: 30px">
            <el-col :span="2" :offset="4">
                <el-button size="mini" style="background-color:#FFEADA">想看</el-button>
            </el-col>
            <el-col :span="2">
                <el-button size="mini" style="background-color:#FFEADA">看过</el-button>
            </el-col>
            <el-col :span="4">
                评价：
                <el-rate style="display: inline-block"></el-rate>
            </el-col>
        </el-row>
        <el-row style="text-align: left;margin-top: 30px">
            <el-col :span="16" :offset="4">
                <span class="title-col" >{{movie.title}}· ·剧情简介 · · · ·</span>
                <hr STYLE="BORDER:0.5px dashed; color:rgba(119,119,119,0.89)"></hr>
            </el-col>
        </el-row>
        <el-row style="text-align: left;margin-top: 30px">
            <el-col :span="16" :offset="4">
                <p style="text-indent: 20px">{{movie.describe}}</p>
            </el-col>
        </el-row>
        <el-row style="text-align: left;margin-top: 30px">
            <el-col :span="16" :offset="4">
                <span class="title-col">{{movie.title}}· ·短评 · · · · </span>( 全部 25324 条 )
            </el-col>
        </el-row>
        <el-row style="text-align: left;font-size: 12px" v-for="comment in movie.comments">
            <el-col :span="16" :offset="4">
                <hr style="color:lightgray"/>
                <div>
                    <span>{{comment.user}}</span>看过
                    <el-rate disabled v-model="comment.star" style="display:inline-block"></el-rate>
                    <span>{{comment.date}}</span>
                    <span style="position:relative;left:60%">{{comment.zan}}有用</span>
                </div>
                <p>
                    {{comment.content}}
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import ElProgress from "../../node_modules/element-ui/packages/progress/src/progress";
    export default {
        components: {ElProgress},

        created: function () {

            this.movie.title = this.$route.params.title;
        },
        data () {
            return {
                movie: {
                    director: "昆汀·塔伦蒂诺",
                    author: [
                        "昆汀·塔伦蒂诺",
                        ],
                    actors: [
                        "布拉德·皮特",
                        "玛格特·罗比",
                        "埃米尔·赫斯基",
                        "玛格丽特·库里",

                    ],
                    category: "剧情 / 喜剧",
                    country: "美国 / 英国 / 中国大陆",
                    lan: "英语 / 意大利语 / 西班牙语",
                    publishDate: "2019-05-21",
                    timeLength: "165分钟 / 161分钟(戛纳电影节) / 162分钟(院线版) / 171分钟(加长版)",
                    alias: "从前，有个荷里活(港) / 从前，有个好莱坞...(台) / 好莱坞杀人事件 ",
                    title: "好莱坞往事",
                    describe: "故事在1969年瞬息万变的洛杉矶展开，在那个风起云涌的变革时代，嬉皮文化盛行，" +
                        "好莱坞大制片厂制度瓦解，新的好莱坞明星纷纷崛起。电视明星里克·道尔顿" +
                        "（莱昂纳多·迪卡普里奥 Leonardo DiCaprio饰）与他长期合作替身搭档克里夫·布斯（布拉德·皮特 Brad Pitt 饰）如何在逐渐陌生的娱乐圈里，找到自己的一席之地。他们正力图扬名电影圈，却发现这个行业早已不是他们想象的样子了…… 这是昆汀自编自导第9部影片，汇集星光闪闪的卡司与交错的情节，纪念好莱坞不再复返的黄金年代。 ",
                    comments: [
                        {
                            user: "LOYHN1",
                            content: "昆汀电影里一贯的成吨的血浆没有了，无穷无尽的暴力没有了，源源不断的话痨也没有了，" +
                                "这让电影显得冗长且无聊，只有恋足癖和最后半小时的高潮能挽回颜面。小李子的表演依然不懂得节制，" +
                                "各种用力过猛，劲儿劲儿的。皮特虽然耍帅，但也只是耍帅而已，和李小龙的那段耍帅更是觉得有失偏颇。" +
                                "所谓的迷影情节，因为全程被割裂，最后被“嫁接”进来的感觉很违和。吹得有点过了，这不是昆汀最好的作品",
                            star: 3,
                            date: "2019-04-15",
                            zan:"3608"
                        },
                        {
                            user: "风中飘摇",
                            content: "很平铺直叙的无聊故事。演技确实爆棚。 还有为什么非要丑化李小龙？亚洲男人在美国还不够惨吗？",
                            star: 4,
                            date: "2019-11-21",
                            zan:"2852"
                        }
                    ],
                    scoring: {
                        score: 7.3,
                        five: 15,
                        four: 44,
                        three: 34,
                        two: 5,
                        one: 6,
                        amount: 74246,
                        star: 3.5
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .star-col {
        font-size: 14px;
    }

    .title-col {
        color: #007722;
        font-size: 16px
    }
</style>