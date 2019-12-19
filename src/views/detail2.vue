
<template>
    <div>
        <h2>
            婚姻故事
            <span style="color:lightgray">
                ({{movie.publishDate}})
            </span>
        </h2>
        <el-row type="flex" justify="center" :gutter="20">
            <el-col :span="5">
                <img src="../assets/3.jpg" style="width: 150px;height:200px">
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
                        <h1 style="margin: 5px">9.0</h1>
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
                    director: "诺亚·鲍姆巴赫",
                    author: [
                        "诺亚·鲍姆巴赫",
                    ],
                    actors: [
                        "斯嘉丽·约翰逊",
                        "亚当·德赖弗",
                        "梅里特·韦弗",
                        "劳拉·邓恩",

                    ],
                    category: " 剧情 / 喜剧 / 爱情",
                    country: "美国",
                    lan: "英语 ",
                    publishDate: "2019-08-29",
                    timeLength: "136",
                    alias: "只爱斯嘉丽",
                    title: "婚姻故事",
                    describe: "以一起离婚事件探讨婚姻和爱情，诺亚·鲍姆巴赫执导， 亚当·德赖弗扮演一个剧作家，" +
                        "斯嘉丽·约翰逊扮演一个女明星，两人因各自工作分居纽约和洛杉矶而不得不走向离婚，" +
                        "主演另有劳拉·邓恩、格蕾塔·葛韦格。 Netflix参与制作。 ",
                    comments: [
                        {
                            user: "桃桃林林",
                            content:
                                "它讲的是爱情，它讲的是婚姻，它讲的就是生活本身！ 这电影对于生活的呈现实在太真实、太细腻、也太残酷了。" +
                                "虽然已经尽力温和及略抒情的方式来处理这段关系，但还是看得人触目惊心。 " +
                                "两律师激辩那场戏以及之后一场长时间的争吵，都看得人难过到心痛。" +
                                "从我们应该考虑分开，逐渐演变成我恨你、必须马上离开你。真是眼睁睁看着大家从相爱到仇视，甚至彼此恶毒起来，" +
                                "越发的狰狞。我们怎么变成了这样？ 亚当·德赖弗与斯嘉丽·约翰逊演得都太好了，各种小的情感细节：" +
                                "温柔的、善良的、愤怒的、尴尬的……每个细节的转换与呈现都特别棒，感觉也融入了很多自身的体验与投射。" +
                                "片子有非常多用心的小细节可以仔细品味，都很有用意。 这不仅是一部电影，这是一面镜子，照向每一个人。",
                            star: 5,
                            date: "2019-12-07",
                            zan:"1342"
                        },
                        {
                            user: "MR.LUH",
                            content: "What I love about this film is 它是那么的温暖又那么令人心碎。它是坐在粉色毛绒抱枕上的Scarlett Johansson，" +
                                "笑着哭着讲述着属于她部分的婚姻，讲述着她的爱与挣扎。它是在转身离开房间的Adam Driver，" +
                                "一道门，将他温柔的眼神关在房间之外。它是从无话不说的欢乐时光，到凝望菜单时房间里漫长的沉默。" +
                                "它是彼此望向对方温柔的眼神，也是房间里相隔最远两个座位上躲闪的目光。" +
                                "它是所有最深情爱意所有点点滴滴所有曾经拥有的回忆都变成彼此憎恶对簿公堂的理由。" +
                                "它是脆弱与崩溃之后抚摸在彼此发丝之间的手。它是镜头懒散晃动，它是生活片段的蒙太奇，" +
                                "它是台词在欢笑与尴尬之后令人哽咽难言的留白。它是彼此最细微情绪的表演。它是风浪后留给彼此最后的温柔。" +
                                "如果生活是一面白墙，那么婚姻就是墙上拳头砸出的那个洞口。",
                            star: 5,
                            date: "2019-10-25",
                            zan:"1322"
                        }
                    ],
                    scoring: {
                        score: 9,
                        five: 48,
                        four: 43,
                        three: 8.1,
                        two: 0.6,
                        one: 0.2,
                        amount: 10558,
                        star: 4.5
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