<template>
    <div id="All">
        <h1>豆瓣电影排行榜</h1>
        <h3 style="color: #30ac4f">· · · · · ·豆瓣新片榜 · · · · · ·</h3>
        <!--<el-divider  content-position></el-divider>-->
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <div>
            <el-row>
                <el-row v-for="movie in top" type="flex" justify="left"
                        style="margin-top: 5px;">
                    <el-col :span="4" style="margin-top: 10px;">
                        <img v-bind:src="movie[0].imgUrl"/>
                    </el-col>
                    <!--a-->
                    <div class=a>
                        <div>
                            <a href="http://localhost:8080/movie" style="text-decoration:none">
                                <p class="title-span" v-on:click="(movie[0].title)">
                                    {{movie[0].title}}
                                </p>
                            </a>
                        </div>
                        <!--b-->
                        <div class=b>
                                    <span v-on:click="(movie[0].category) ">
                                        类型：{{movie[0].category}}
                                    </span>
                        </div>
                        <!--c-->
                        <div class=c>
                            <P v-on:click="(movie[0].dateactors) ">
                                {{movie[0].dateactors}}
                            </P>
                        </div>
                        <!--d-->
                        <div class=d>
                            <el-rate disabled show-score
                                     text-color="#ff9900" v-model="value1"></el-rate>
                        </div>
                        <!--e-->
                        <div class=e>
                            ({{movie[0].amount}})评价
                        </div>
                    </div>
                </el-row>
            </el-row>
        </div>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <div>
            <el-row>
                <el-row v-for="movie in top" type="flex" justify="left"
                        style="margin-top: 5px;">
                    <el-col :span="4" style="margin-top: 10px;">
                        <img v-bind:src="movie[1].imgUrl"/>
                    </el-col>
                    <!--a-->
                    <div class=a>
                        <div>
                            <a href="http://localhost:8080/movie1" style="text-decoration:none;">
                                <p class="title-span" v-on:click="(movie[1].title)">
                                    {{movie[1].title}}
                                </p>
                            </a>
                        </div>
                        <!--b-->
                        <div class=b>
                                    <span v-on:click="(movie[1].category) ">
                                        类型：{{movie[1].category}}
                                    </span>
                        </div>
                        <!--c-->
                        <div class=c>
                            <P v-on:click="e(movie[1].dateactors) ">
                                {{movie[1].dateactors}}
                            </P>
                        </div>
                        <!--d-->
                        <div class=d>
                            <el-rate disabled show-score
                                     text-color="#ff9900" v-model="value2"></el-rate>
                        </div>
                        <!--e-->
                        <div class=e>
                            ({{movie[1].amount}})评价
                        </div>
                    </div>
                </el-row>
            </el-row>
        </div>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <div>
            <el-row>
                <el-row v-for="movie in top" type="flex" justify="left"
                        style="margin-top: 5px;">
                    <el-col :span="4" style="margin-top: 10px;">
                        <img v-bind:src="movie[2].imgUrl"/>
                    </el-col>
                    <!--a-->
                    <div class=a>
                        <div>
                            <a href="http://localhost:8080/movie2" style="text-decoration:none">
                                <p class="title-span" v-on:click="(movie[2].title)">
                                    {{movie[2].title}}
                                </p>
                            </a>
                        </div>
                        <!--b-->
                        <div class=b>
                                    <span v-on:click="(movie[2].category) ">
                                        类型：{{movie[2].category}}
                                    </span>
                        </div>
                        <!--c-->
                        <div class=c>
                            <P v-on:click="e(movie[2].dateactors) ">
                                {{movie[2].dateactors}}
                            </P>
                        </div>
                        <!--d-->
                        <div class=d>
                            <el-rate disabled show-score
                                     text-color="#ff9900" v-model="value3"></el-rate>
                        </div>
                        <!--e-->
                        <div class=e>
                            ({{movie[2].amount}})评价
                        </div>
                    </div>
                </el-row>
            </el-row>
        </div>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <div>
            <el-row>
                <el-row v-for="movie in top" type="flex" justify="left"
                        style="margin-top: 5px;">
                    <el-col :span="4" style="margin-top: 10px;">
                        <img v-bind:src="movie[3].imgUrl"/>
                    </el-col>
                    <!--a-->
                    <div class=a>
                        <div>
                            <a href="http://localhost:8080/movie3" style="text-decoration:none">
                                <p class="title-span" v-on:click="(movie[3].title)">
                                    {{movie[3].title}}
                                </p>
                            </a>
                        </div>
                        <!--b-->
                        <div class=b>
                                    <span v-on:click="(movie[3].category) ">
                                        类型：{{movie[3].category}}
                                    </span>
                        </div>
                        <!--c-->
                        <div class=c>
                            <P v-on:click="e(movie[3].dateactors) ">
                                {{movie[3].dateactors}}
                            </P>
                        </div>
                        <!--d-->
                        <div class=d>
                            <el-rate disabled show-score
                                     text-color="#ff9900" v-model="value4"></el-rate>
                        </div>
                        <!--e-->
                        <div class=e>
                            ({{movie[3].amount}})评价
                        </div>
                    </div>
                </el-row>
            </el-row>
        </div>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <div>
            <el-row>
                <el-row v-for="movie in top" type="flex" justify="left"
                        style="margin-top: 5px;">
                    <el-col :span="4" style="margin-top: 10px;">
                        <img v-bind:src="movie[4].imgUrl"/>
                    </el-col>
                    <!--a-->
                    <div class=a>
                        <div>
                            <p class="title-span" v-on:click="(movie[4].title)">
                                {{movie[4].title}}
                            </p>
                        </div>
                        <!--b-->
                        <div class=b>
                                    <span v-on:click="(movie[4].category) ">
                                        类型：{{movie[4].category}}
                                    </span>
                        </div>
                        <!--c-->
                        <div class=c>
                            <P v-on:click="e(movie[4].dateactors) ">
                                {{movie[4].dateactors}}
                            </P>
                        </div>
                        <!--d-->
                        <div class=d>
                            <el-rate disabled show-score
                                     text-color="#ff9900" v-model="value5"></el-rate>
                        </div>
                        <!--e-->
                        <div class=e>
                            ({{movie[4].amount}})评价
                        </div>
                    </div>
                </el-row>
            </el-row>
        </div>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <div>
            <el-row>
                <el-row v-for="movie in top" type="flex" justify="left"
                        style="margin-top: 5px;">
                    <el-col :span="4" style="margin-top: 10px;">
                        <img v-bind:src="movie[5].imgUrl"/>
                    </el-col>
                    <!--a-->
                    <div class=a>
                        <div>
                            <p class="title-span" v-on:click="(movie[5].title)">
                                {{movie[5].title}}
                            </p>
                        </div>
                        <!--b-->
                        <div class=b>
                                    <span v-on:click="(movie[5].category) ">
                                        类型：{{movie[5].category}}
                                    </span>
                        </div>
                        <!--c-->
                        <div class=c>
                            <P v-on:click="e(movie[5].dateactors) ">
                                {{movie[5].dateactors}}
                            </P>
                        </div>
                        <!--d-->
                        <div class=d>
                            <el-rate disabled show-score
                                     text-color="#ff9900" v-model="value6"></el-rate>
                        </div>
                        <!--e-->
                        <div class=e>
                            ({{movie[5].amount}})评价
                        </div>
                    </div>
                </el-row>
            </el-row>
        </div>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <div>
            <el-row>
                <el-row v-for="movie in top" type="flex" justify="left"
                        style="margin-top: 5px;">
                    <el-col :span="4" style="margin-top: 10px;">
                        <img v-bind:src="movie[6].imgUrl"/>
                    </el-col>
                    <!--a-->
                    <div class=a>
                        <div>
                            <p class="title-span" v-on:click="(movie[6].title)">
                                {{movie[6].title}}
                            </p>
                        </div>
                        <!--b-->
                        <div class=b>
                                    <span v-on:click="(movie[6].category) ">
                                        类型：{{movie[6].category}}
                                    </span>
                        </div>
                        <!--c-->
                        <div class=c>
                            <P v-on:click="e(movie[6].dateactors) ">
                                {{movie[6].dateactors}}
                            </P>
                        </div>
                        <!--d-->
                        <div class=d>
                            <el-rate disabled show-score
                                     text-color="#ff9900" v-model="value7"></el-rate>
                        </div>
                        <!--e-->
                        <div class=e>
                            ({{movie[6].amount}})评价
                        </div>
                    </div>
                </el-row>
            </el-row>
        </div>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <div>
            <el-row>
                <el-row v-for="movie in top" type="flex" justify="left"
                        style="margin-top: 5px;">
                    <el-col :span="4" style="margin-top: 10px;">
                        <img v-bind:src="movie[7].imgUrl"/>
                    </el-col>
                    <!--a-->
                    <div class=a>
                        <div>
                            <p class="title-span" v-on:click="(movie[7].title)">
                                {{movie[7].title}}
                            </p>
                        </div>
                        <!--b-->
                        <div class=b>
                                    <span v-on:click="(movie[7].category) ">
                                        类型：{{movie[7].category}}
                                    </span>
                        </div>
                        <!--c-->
                        <div class=c>
                            <P v-on:click="e(movie[7].dateactors) ">
                                {{movie[7].dateactors}}
                            </P>
                        </div>
                        <!--d-->
                        <div class=d>
                            <el-rate disabled show-score
                                     text-color="#ff9900" v-model="value8"></el-rate>
                        </div>
                        <!--e-->
                        <div class=e>
                            ({{movie[7].amount}})评价
                        </div>
                    </div>
                </el-row>
            </el-row>
        </div>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>
        <hr STYLE="BORDER:0.5px dashed; color:rgba(203,203,203,0.75)"></hr>

    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                value1: 4.8,
                value2: 3.8,
                value3: 4.6,
                value4: 4.4,
                value5: 3.8,
                value6: 4.2,
                value7: 4.5,
                value8: 3.9,
                top: [
                    [
                        {
                            title: '小丑(Jorker) ' + '/' + ' Romeo  Joker' + '/' + ' Origin Movie',
                            imgUrl: require('../assets/1.jpg'),
                            dateactors: '2019-08-31(威尼斯电影节) ' + '/' + ' 2019-10-04(美国) ' + '/' +
                                '杰昆·菲尼克斯' + '/' +
                                '罗伯特·德尼罗' + '/' +
                                '马克·马龙' + '/' +
                                ' 莎姬·贝兹' + '/' +
                                ' 迈克尔·本茨 ' + '/' +
                                ' 莎珑·华盛顿' + '/' +
                                ' 桑德拉·詹姆斯' + '/' +
                                ' 托尼·赫德' + '/' +
                                ' 曼德拉·贝拉米' + '/' +
                                '  乔·奥克曼' + '/' +
                                '  卡尔·伦德施泰特' + '/' +
                                ' 莎姬·贝兹' + '/' +
                                ' 米克·奥罗克' + '/' +
                                ' 大卫·吉布森' + '/' +
                                ' 伊万·罗萨多' + '/' +
                                ' 安妮·比萨比亚' + '/' +
                                '谢伊·惠格姆',
                            category: '剧情/惊悚/犯罪',
                            amount: '564561'
                        }, {
                        title: '好莱坞往事 ' + '/' + '从前，有个荷里活(港)' + '/' + '从前，有个好莱坞...(台)',
                        imgUrl: require('../assets/2.jpg'),
                        dateactors: '2019-05-21(戛纳电影节) ' + '/' + '2019-07-26(美国) ' + '/' + '2019(中国大陆) ' + '/' +
                            '莱昂纳多·迪卡普里奥' + '/' +
                            '布拉德·皮特' + '/' +
                            '玛格特·罗比 ' + '/' +
                            '  埃米尔·赫斯基' + '/' +
                            '  玛格丽特·库里 ' + '/' +
                            ' 蒂莫西·奥利芬特' + '/' +
                            ' 茱莉亚·巴特斯' + '/' +
                            ' 奥斯汀·巴特勒 ' + '/' +
                            ' 曼德拉·贝拉米' + '/' +
                            '  达科塔·范宁' + '/' +
                            '  卡尔·伦德施泰特' + '/' +
                            '  布鲁斯·邓恩',
                        category: '剧情/喜剧',
                        amount: '175744'
                    }, {
                        title: '婚姻故事',
                        imgUrl: require('../assets/3.jpg'),
                        dateactors: '2019-08-29(威尼斯电影节)' + '/' + '2019-12-06(美国)' + '/' +
                            ' 斯嘉丽·约翰逊' + '/' +
                            ' 亚当·德赖弗 ' + '/' +
                            '玛格特·罗比 ' + '/' +
                            '  埃米尔·赫斯基' + '/' +
                            '  梅里特·韦弗 ' + '/' +
                            ' 劳拉·邓恩' + '/' +
                            ' 雷·利奥塔' + '/' +
                            ' 朱丽·哈基提 ' + '/' +
                            ' 马克·奥布莱恩' + '/' +
                            '  华莱士·肖恩 ' + '/' +
                            '  米奇·萨姆纳' + '/' +
                            '  阿伦·阿尔达' + '/' +
                            '  艾奇·罗伯逊' + '/' +
                            ' 马修·马希尔',
                        category: '爱情/剧情/喜剧',
                        amount: '24409'
                    }, {
                        title: '82年生的金智英' + '/' + '82年生金智英' + '/' + 'Kim Ji-young,Born 1982',

                        imgUrl: require('../assets/4.jpg'),
                        dateactors: '  2019-10-23(韩国) ' + '/' + ' 2019-11-07(中国香港) ' + '/' +
                            ' 郑有美' + '/' +
                            ' 孔侑 ' + '/' +
                            '金美京 ' + '/' +
                            '  孔敏晶' + '/' +
                            '  朴成妍 ' + '/' +
                            ' 李凤莲' + '/' +
                            '  金圣喆' + '/' +
                            ' 李乌 ' + '/' +
                            ' 李海云' + '/' +
                            '  孙成灿 ' + '/' +
                            '  金正英 ' + '/' +
                            '  李娜云 ' + '/' +
                            '  禹志贤' + '/' +
                            ' 刘英雅',
                        category: '剧情/爱情/喜剧',
                        amount: '43512'
                    }, {
                        title: '圣诞节的秘密' + '/' + '圣诞老人',
                        imgUrl: require('../assets/5.jpg'),
                        dateactors: '   2019-11-08(西班牙)'
                            + '/' + '2019-11-08(英国)' + '/' +
                            ' J·K·西蒙斯' + '/' +
                            ' 詹森·舒瓦兹曼' + '/' +
                            '拉什达·琼斯 ' + '/' +
                            '  琼·库萨克' + '/' +
                            '  诺曼·麦克唐纳徳 ' + '/' +
                            '  威尔·萨索' + '/' +
                            '  塞尔希奥·巴勃罗斯' + '/' +
                            ' 米拉·布雷纳 ' + '/' +
                            '  内达·玛格丽特·拉巴 ' + '/' +
                            '  悉尼·布朗 ' + '/' +
                            '   泰迪·布鲁姆' + '/' +
                            '  李娜云' + '/' +
                            '  艾玛·香农' + '/' +
                            ' 肯德尔·卓依',
                        category: '剧情/动画',
                        amount: '21562'
                    }, {
                        title: '爱尔兰人' + '/' + '听说你刷房子了' + '/' + '爱尔兰杀手(港)',
                        imgUrl: require('../assets/6.jpg'),
                        dateactors: '    2019-09-27(纽约电影节)'
                            + '/' + '2019-11-01(美国点映)' + '/' +
                            ' 罗伯特·德尼罗' + '/' +
                            '  阿尔·帕西诺' + '/' +
                            '乔·佩西 ' + '/' +
                            '  安娜·帕奎因' + '/' +
                            '  杰西·普莱蒙 ' + '/' +
                            '  哈威·凯特尔' + '/' +
                            '  斯蒂芬·格拉汉姆' + '/' +
                            '  鲍比·坎纳瓦尔 ' + '/' +
                            '   杰克·休斯顿 ' + '/' +
                            '  阿莱卡萨·帕拉迪诺 ' + '/' +
                            '   泰迪·布鲁姆' + '/' +
                            '  艾玛·香农' + '/' +
                            ' 凯瑟琳·纳杜奇',
                        category: '剧情/爱情/喜剧',
                        amount: '19876'
                    }, {
                        title: '攀登者',
                        imgUrl: require('../assets/7.jpg'),
                        dateactors: '    2019-10-01(中国大陆)'
                            + '/' + '吴京' + '/' +
                            '  章子怡' + '/' +
                            '   井柏然' + '/' +
                            '  张译' + '/' +
                            '  胡歌 ' + '/' +
                            '   成龙' + '/' +
                            '  陈龙' + '/' +
                            '  多布杰 ' + '/' +
                            '   何琳 ' + '/' +
                            ' 刘小锋 ' + '/' +
                            '   拉旺罗布' + '/' +
                            '  曲尼次仁' + '/' +
                            ' 迪丽热巴 ',
                        category: '剧情/冒险',
                        amount: '20529'
                    }, {
                        title: ' 准备好了没 ' + '/' + '弑婚游戏(台)' + '/' + '爆血新婚夜(港)',
                        imgUrl: require('../assets/8.jpg'),
                        dateactors: '    2019-08-21(美国)'
                            + '/' + '萨玛拉·维文' + '/' +
                            '  安迪·麦克道威尔' + '/' +
                            '   马克·奥布莱恩 ' + '/' +
                            ' 亚当·布罗迪' + '/' +
                            '  亨利·科泽尼 ' + '/' +
                            '   妮基·瓜达尼' + '/' +
                            ' 梅兰妮·斯科洛凡诺' + '/' +
                            '   克里斯蒂安·布鲁恩 ' + '/' +
                            '   伊利斯 莱韦斯克 ' + '/' +
                            ' 约翰·拉尔斯顿  ' + '/' +
                            '   达妮埃拉·巴博萨' + '/' +
                            '   伊拉娜·盖尔',
                        category: '惊悚/恐怖/犯罪',
                        amount: '13672'
                    }

                    ]

                ],
            }

        },


        methods: {
            detailPage: function (title) {
                this.$router.push({name: "movie", params: {title: title}});
            }
        }
    }

</script>
<style scoped>
    #All {
        height: 1900px;
        width: 950px;
        margin: 0 auto;
        padding: 0;
    }

    img {
        width: 140px;
        height: 210px;
    }

    .title-span {
        color: #444db4;
        cursor: pointer;
    }

    .a {
        margin-left: 50px;
        text-align: left
    }

    .b {
        width: 200px;
        height: 10px;
        color: #535154;
        font-size: 15px
    }

    .c {
        width: 550px;
        padding-top: 15px;
        height: 50px;
        font-size: 14px;
        color: #5f5f5f
    }

    .d {
        padding-top: 60px;
        width: 150px;
    }

    .e {
        font-size: 13px;
        width: 225px;
        text-align: right;
        transform: translateY(-120%)
    }
</style>
