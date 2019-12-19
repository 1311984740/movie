
<template>
    <div>
        <h2>
            82年生的金智英
            <span style="color:lightgray">
                ({{movie.publishDate}})
            </span>
        </h2>
        <el-row type="flex" justify="center" :gutter="20">
            <el-col :span="5">
                <img src="../assets/4.jpg" style="width: 150px;height:200px">
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
                        <h1 style="margin: 5px">8.7</h1>
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
                <span class="title-col">{{movie.title}}· ·短评 · · · · </span>( 全部 15201 条 )
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
                    director: "金度英",
                    author: [
                        "刘英雅 ",
                        "赵南珠",
                    ],
                    actors: [
                        " 郑有美",
                        " 孔侑",
                        "金美京",
                        "孔敏晶 ",
                        "朴成妍 ",
                    ],
                    category: " 剧情",
                    country: "韩国",
                    lan: "韩语 ",
                    publishDate: "2019-11-07",
                    timeLength: " 118",
                    alias: " Kim Ji-young,Born 198",
                    title: "Kim Ji-young,Born 198",
                    describe: "　　同名小说改编而成，直击韩国家庭和社会上的性别不公议题。" +
                        "金智英（郑有美 饰）一直按照社会规范下的女性身份生活，" +
                        "成为重男轻女的父母所期待的「好女儿」，职场上温顺隐忍的「好女人」，" +
                        "和以家庭为重的「好妻子」。直到一天她好似被附身一样，" +
                        "言行如同自己的母亲一般，丈夫（孔侑 饰）决定带她接受心理咨询，" +
                        "两个人一同重新面对她的人生伤痛。小说面世以来饱受争议，" +
                        "甚至在电影改编计划期间出现全国性的请愿反对，" +
                        "这段「不可言说」的故事面对社会压力仍被搬上银幕，值得关注。 ",
                    comments: [
                        {
                            user: "糖法醋金瓜",
                            content:
                                "愿每一位女性都能以一个独立的人格存在并且可以获得尊重",
                            star: 4,
                            date: "2019-10-24",
                            zan:"656"
                        },
                        {
                            user: "重忆小窗莎",
                            content: "在电影院哭成泪人。电影比小说更加丰满，其实男性跟女性一样被困在传统偏见的桎梏中，" +
                                "电影中已经展现了当代年轻男性对女性困境的共情与理解，" +
                                "但是老一代两班们真心没救。PS：看来男性洗碗和育儿在南韩依然不被接受。",
                            star: 5,
                            date: "2019-10-26",
                            zan:"462"
                        }
                    ],
                    scoring: {
                        score: 8.7,
                        five: 47,
                        four: 43,
                        three: 9.5,
                        two: 0.7,
                        one: 0.2,
                        amount: 38520,
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