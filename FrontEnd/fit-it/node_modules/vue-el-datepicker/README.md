# vue-el-datepicker

> 仿element-ui日期选择器弹窗部分组件

## 起因


由于某些业务要求，需要用到`element`时间选择器样式的同时不希望它是弹窗的模式，但是`element-ui`并没有提供一个单独的选择日期组件，因此开发了这个组件，组件逻辑部分大部分参考`element-ui` `date-picker` 源码部分。

## 样式

![示例图片](https://raw.githubusercontent.com/mikoshu/vue-component-datepicker/master/public/el.jpg '示例图片')



## 安装
```
npm install --save vue-el-datepicker
```


## 用法

```html

<template>
  <div id="app">
    
    <p>{{date}}</p>

    <date-picker 
      ref="date"
      v-model="date"
      type="week"
      separator="-"
      @getValue="getTime"
    />

  </div>
</template>

<script>
import datePicker from 'vue-el-datepicker'
export default {
  data(){
    return {
      date: '2020-01-08',
    }
  },
  components: {
    datePicker
  },
  methods:{
    getTime(time){
      console.log(time)
      console.log(time.date)
      
    }
  }
}
</script>


```

## Props

Prop|Type|Default|Description
---|:--:|---:|---
customClass| String| null | 弹窗的样式包含遮罩层在内样式均可重写
separator | String | "-" | 分隔符，默认为 `"-"` ，确认分隔符后传入的所有时间以及输出的时间，都将按照分隔符风格， 入分隔符设定为 `"/"` 则输入出时间为 `"2019/04/05"` 格式，同时传入的 `value` 等参数也将使用分隔符的格式传入
type | String | "date" | `"date"/"week"/"month"/"year"`, 同 `element-ui` `datepicker`组件
getValue | Function（val） | null | 点击触发,根据`type`不同返回不同内容




