/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ListView,
    TextInput,
    TouchableOpacity,
    RefreshControl,
    ActivityIndicator,
    Navigator,
    ScrollView,
} from 'react-native';
import styles from "./Style/css.js";
let {height,width}= Dimensions.get('window');
let Icon = require('react-native-vector-icons/FontAwesome');
let Index = require('./App_List/index_ylpp.js');
import Swiper from 'react-native-swiper'

class Detail extends Component {
    gotoBack(){
        this.props.navigator.pop()
    }
    render(){
        let row = this.props;
        console.log(this.props)
        return(
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text onPress={this.gotoBack.bind(this)}>{row.name}</Text>
            </View>
        )
    }
}

export default class youlun extends Component {
    constructor(props){
        super(props);
        this.state={
            data:null,
        };
        this._fetchData();
    }
    _fetchData() {
        fetch("https://www.weilv100.com/api/ad/ad_img_show/75/149")
            .then((response) => response.json())
            .then((responseJson) =>{
                let data=responseJson;
                this.setState({
                    data:data
                })
            })
            .catch((error) => {
                console.error(error);
            });
    }
    changePage(){
        this.props.navigator.push({
            name: '详情页',
            component: Detail,
            params:{
                name:"日韩",
                number:"123"
            }
        });
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Swiper height={200} style={styles.wrapper}
                        showsButtons={true}  //前进后退按钮
                        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8,
                            borderRadius: 4, marginLeft: 3,
                            marginRight: 3, marginTop: 3,
                            marginBottom: 3}} />}
                    // 未选中小点样式
                        activeDot={<View style={{backgroundColor: 'red', width: 8, height: 8,
                            borderRadius: 4, marginLeft: 3,
                            marginRight: 3, marginTop: 3,
                            marginBottom: 3}} />}
                    // 选中小点样式
                        horizontal={true} // 值为false时为上下滚动
                        autoplay={true}  // 自动播放
                    // paginationStyle={{
                    //    bottom: 20, left: null, right: null
                    // }}
                    // 小点位置
                    //onMomentumScrollEnd={(e, state, context) => alert('index:', state.index)}
                    // 滑动之后执行函数
                >
                    <View style={styles.slide1}>
                        <Text style={{textAlign:'center'}}>rfdsfa</Text>
                        <Image style={{width:400,height:200}} source={require('./img/hyrz1副本.jpg')}/>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={{textAlign:'center'}}>Beautiful</Text>
                        <Image style={{width:400,height:200}} source={require('./img/hyrz2副本.jpg')}/>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={{textAlign:'center'}}>And simple</Text>
                        <Image style={{width:400,height:200}} source={require('./img/hyrz3副本.jpg')}/>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={{textAlign:'center'}}>And simple</Text>
                        <Image style={{width:400,height:200}} source={require('./img/hyrz1副本.jpg')}/>
                    </View>
                </Swiper>
                <View style={{alignItems: 'center',marginTop:-20,position:'relative',marginBottom:-20,zIndex:1}}>
                    <View style={styles.input_box}>
                        <Icon
                            name="heart"
                            size={20}
                            color="red"
                            style={{marginLeft:10,marginTop:8,marginRight:5}}
                        />
                        <TextInput
                            style={{width:250,height: 38, borderColor:'white', borderWidth:1,fontSize:12}}
                            keyboardType="ascii-capable"
                            placeholder='请输入邮轮目的地/关键字'
                        />
                    </View>
                </View>
                <View style={styles.region_box}>
                    <TouchableOpacity onPress={this.changePage.bind(this)}>
                        <View style={styles.region_list}>
                            <Icon
                                name="heart"
                                size={40}
                                color="red"
                            />
                            <Text style={styles.region_text}>日韩</Text>
                            <Navigator
                                initialRoute={{
                                    name:"设置",
                                    component:Detail
                                }}
                                configureScene={(route) => {
                                    return Navigator.SceneConfigs.FloatFromRight;
                                }}

                                renderScene={(route,navigator) => {
                                    let Component = route.component;
                                    return(
                                        <Component {...route.params} navigator={navigator} />
                                    )
                                }}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.region_list}>
                            <Icon
                                name="heart"
                                size={40}
                                color="green"
                            />
                            <Text style={styles.region_text}>日本</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.region_list}>
                            <Icon
                                name="heart"
                                size={40}
                                color="yellow"
                            />
                            <Text style={styles.region_text}>韩国</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.region_list}>
                            <Icon
                                name="heart"
                                size={40}
                                color="blue"
                            />
                            <Text style={styles.region_text}>地中海</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{height:10,backgroundColor:'#dee5eb'}}></View>
                <Index/>
                <View style={{height:10,backgroundColor:'#dee5eb'}}></View>
                <View>
                    <View style={{flexDirection:'row',height:40,marginLeft:10,alignItems: 'center',}}>
                        <Image source={require("./img/热推产品.png")}/>
                        <Text>热推产品</Text>
                    </View>
                    <View style={{position:'absolute',right:10,top:7}}>
                        <View style={{flexDirection:'row',alignItems: 'center',}}>
                            <Text style={{fontSize:13,color:'#6f7378'}}>更多</Text>
                            <Icon
                                name="heart"
                                size={20}
                                color="red"
                            />
                        </View>
                    </View>

                    <View  style={styles.rxcp_box}>
                        <View style={styles.rxcp_list}>
                            <Image style={{width:355,height:168,marginLeft:-1,borderRadius:3}} source={require("./img/hyrz1副本.jpg")}/>
                            <View style={styles.rxcp_list_text}>
                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                    <Icon
                                        name="heart"
                                        size={20}
                                        color="red"
                                    />
                                    <Text style={{color:"#fff",fontSize:12}}>上海出发</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                    <Icon
                                        name="heart"
                                        size={20}
                                        color="red"
                                    />
                                    <Text style={{color:"#fff",fontSize:12}}>请提前10天报名</Text>
                                </View>
                                <View style={{position:"absolute",right:10,top:3}}>
                                    <Icon
                                        name="heart"
                                        size={20}
                                        color="red"
                                    />
                                </View>
                            </View>
                            <View style={styles.rxcp_list_price}>
                                <View style={{alignItems: 'center',}}>
                                    <Text style={{width:323,fontSize:14}}>2015年6月7日歌诗达大西洋号 上海-济南-福冈-上海 4晚5天</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems: 'center',position:'absolute',bottom:8,left:15}}>
                                    <Icon
                                        name="heart"
                                        size={15}
                                        color="#a0a0a0"
                                    />
                                    <Text style={{color:'#a0a0a0',fontSize:11}}>歌诗达邮轮-大西洋号</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'flex-end',position:'absolute',bottom:8,right:15}}>
                                    <Text style={{fontSize:12,color:'#ff5b26',lineHeight:17}}>￥</Text>
                                    <Text style={{fontSize:15,color:'#ff5b26',lineHeight:15}}>19860</Text>
                                    <Text style={{fontSize:13,color:'#bbb'}}>起</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View  style={styles.rxcp_box}>
                        <View style={styles.rxcp_list}>
                            <Image style={{width:355,height:168,marginLeft:-1,borderRadius:3}} source={require("./img/hyrz1副本.jpg")}/>
                            <View style={styles.rxcp_list_text}>
                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                    <Icon
                                        name="heart"
                                        size={20}
                                        color="red"
                                    />
                                    <Text style={{color:"#fff",fontSize:12}}>上海出发</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                    <Icon
                                        name="heart"
                                        size={20}
                                        color="red"
                                    />
                                    <Text style={{color:"#fff",fontSize:12}}>请提前10天报名</Text>
                                </View>
                                <View style={{position:"absolute",right:10,top:3}}>
                                    <Icon
                                        name="heart"
                                        size={20}
                                        color="red"
                                    />
                                </View>
                            </View>
                            <View style={styles.rxcp_list_price}>
                                <View style={{alignItems: 'center',}}>
                                    <Text style={{width:323,fontSize:14}}>2015年6月7日歌诗达大西洋号 上海-济南-福冈-上海 4晚5天</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems: 'center',position:'absolute',bottom:8,left:15}}>
                                    <Icon
                                        name="heart"
                                        size={15}
                                        color="#a0a0a0"
                                    />
                                    <Text style={{color:'#a0a0a0',fontSize:11}}>歌诗达邮轮-大西洋号</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'flex-end',position:'absolute',bottom:8,right:15}}>
                                    <Text style={{fontSize:12,color:'#ff5b26',lineHeight:17}}>￥</Text>
                                    <Text style={{fontSize:15,color:'#ff5b26',lineHeight:15}}>19860</Text>
                                    <Text style={{fontSize:13,color:'#bbb'}}>起</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View  style={styles.rxcp_box}>
                        <View style={styles.rxcp_list}>
                            <Image style={{width:355,height:168,marginLeft:-1,borderRadius:3}} source={require("./img/hyrz1副本.jpg")}/>
                            <View style={styles.rxcp_list_text}>
                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                    <Icon
                                        name="heart"
                                        size={20}
                                        color="red"
                                    />
                                    <Text style={{color:"#fff",fontSize:12}}>上海出发</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems: 'center',}}>
                                    <Icon
                                        name="heart"
                                        size={20}
                                        color="red"
                                    />
                                    <Text style={{color:"#fff",fontSize:12}}>请提前10天报名</Text>
                                </View>
                                <View style={{position:"absolute",right:10,top:3}}>
                                    <Icon
                                        name="heart"
                                        size={20}
                                        color="red"
                                    />
                                </View>
                            </View>
                            <View style={styles.rxcp_list_price}>
                                <View style={{alignItems: 'center',}}>
                                    <Text style={{width:323,fontSize:14}}>2015年6月7日歌诗达大西洋号 上海-济南-福冈-上海 4晚5天</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems: 'center',position:'absolute',bottom:8,left:15}}>
                                    <Icon
                                        name="heart"
                                        size={15}
                                        color="#a0a0a0"
                                    />
                                    <Text style={{color:'#a0a0a0',fontSize:11}}>歌诗达邮轮-大西洋号</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'flex-end',position:'absolute',bottom:8,right:15}}>
                                    <Text style={{fontSize:12,color:'#ff5b26',lineHeight:17}}>￥</Text>
                                    <Text style={{fontSize:15,color:'#ff5b26',lineHeight:15}}>19860</Text>
                                    <Text style={{fontSize:13,color:'#bbb'}}>起</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


AppRegistry.registerComponent('youlun', () => youlun);
