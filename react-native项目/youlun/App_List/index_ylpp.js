import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Dimensions,
    Navigator,
    ScrollView,
} from 'react-native';
let Icon = require('react-native-vector-icons/FontAwesome');
import styles from "../Style/css.js";
let {height, width} = Dimensions.get('window')


class Index extends Component {
    constructor(props){
        super(props)
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state={
            dataSource:ds.cloneWithRows([])
        }
    }
    _fetchData() {
        fetch("https://www.weilv100.com/api/ad/ad_img_show/75/149")
            .then((response) => response.json())
            .then((responseJson) =>{
                this.setState={
                    dataSource:this.state.dataSource.cloneWithRows()
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    RenderRow(row){
        return(
            <View style={{flexDirection:'row'}}>
                <Image style={{width:120,height:80,marginLeft:10}} source={require('../img/hyrz1副本.jpg')}/>
                <Image style={{width:120,height:80,marginLeft:10}} source={require('../img/hyrz2副本.jpg')}/>
                <Image style={{width:120,height:80,marginLeft:10}} source={require('../img/hyrz3副本.jpg')}/>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.ylpp_box}>
                <View style={{height:40,justifyContent: 'center'}}>
                    <Image style={{marginLeft:10}} source={require("../img/邮轮品牌.png")}/>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.RenderRow}
                    automaticallyAdjustContentInsets={false}
                    enableEmptySections={true}
                />
            </View>
        )
    }
}
module.exports = Index;
