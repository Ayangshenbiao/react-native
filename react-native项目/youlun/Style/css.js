import React, { Component } from 'react';
import {StyleSheet,Dimensions,} from 'react-native';
let {height,width}= Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    region_box:{
        flexDirection:'row',
        backgroundColor:'#fff',
        height:110,
    },
    region_text: {
        fontSize:12,
    },
    region_list: {
        width:width*0.25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30,
    },
    input_box:{
        width:width*0.9,
        height:40,
        borderRadius:5,
        borderColor:'#cacbcc',
        borderWidth:1,
        flexDirection:'row',
        backgroundColor:"white",
    },
    ylpp_box:{
        height:135,
        marginBottom:10,
        backgroundColor:'#fff',
    },
    rxcp_box:{
        alignItems: 'center',
    },
    rxcp_list:{
        width:355,
        height:240,
        marginBottom:10,
    },
    rxcp_list_text:{
        width:355,
        height:26,
        backgroundColor:"rgba(0,0,0,.5)",
        marginTop:-29,
        marginLeft:-1,
        alignItems: 'center',
        flexDirection:'row',
    },
    rxcp_list_price:{
        width:355,
        height:74,
        backgroundColor:"#fff",
        borderColor:"#dcdcdc",
        borderWidth:1,
        borderTopWidth:0,
        marginLeft:-1,
        borderBottomLeftRadius:3,
        borderBottomRightRadius:3,
    }
})


module.exports = styles;