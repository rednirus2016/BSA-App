import React,{useState} from "react";
import {View,Text,StyleSheet,FlatList,TextInput} from "react-native";
const Example =()=>{
    const rules=[
        {
            field:"TEXT_INPUT",
            data:{
                placeholder:"Enter Name",
                maxLength:30,
                isRequired:true,
                badMessage:"Please enter your correct Name",
            },
        },
        {
            field:"TEXT_INPUT",
            data:{
                placeholder:"Enter Email",
                maxLength:30,
                isRequired:true,
                badMessage:"Please enter your correct Email id",
            },
        },
        {
            field:"TEXT",
            data:{
                value:"XYZ226600"
            }  
        },
        {
            field:"TEXT_INPUT",
            data:{
                placeholder:"Enter Mobile Number",
                maxLength:10,
                isRequired:false,
                badMessage:"Please enter your correct Mobile Number",
            },
        },
        {
            field:"CHECK_BOX",
            data:{
                isRequired:true,
                title:"I accept all conditions",
            },
        },
        {
            field:"BUTTON",
            data:{
                backgroundColor:'#71717171',
                title:"Submit",
            },
        },

    ]
    return(
        <View style={{flex:1}}>
            <FlatList data={rules} renderItem={({item, index})=>{
                return(
                    <View>
                        {item.field === 'TEXT_INPUT' ? (
                            <TextInput placeholder={item.data.placeholder}/>
                        ): item.field === "TEXT" ? (
                            <View></View>
                        ): item.field === "CHECK_BOX" ? (
                            <View></View>
                        ): item.field === "BUTTON" ?(
                            <TouchableOpacity>
                            <Text>{item.data.title}</Text>
                            </TouchableOpacity>
                        ):null}
                        </View>
                )
            }}/>
        </View>
    )
}
export default Example