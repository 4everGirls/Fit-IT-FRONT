<style lang="scss">

$color: #409EFF;
.component-date{

  .my-vue-date2{
      width: 320px;
      background: #fff;
      font-size: 12px;
      padding: 5px;
      border: 1px solid #E4E7ED;
      border-radius: 4px;
      .date-header{
        margin-top: 10px;
        text-align: center;
        position:relative;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        .last,.next{
          width: 25px;
          height: 30px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          font-size: 24px;
          background: url(./btn.png) center no-repeat;
          background-size: auto 50%;
        }
        .last{
          left: 50px;
          transform: translateY(-50%) rotate(180deg);
        }
        .next{
          right: 50px;
          
        }
      }
      .font14{
        font-size: 14px;
      }
      table{
        width: 100%;
        border-spacing: 0;
        th{
          font-weight: bold;
        }
        td,th{
          text-align:  center;
          height: 35px;
          margin: 0;
          padding: 0;
        }
        .hover:hover{
          td{
            background: #f2f6fc;
            &:first-child{
              //span{
                border-radius: 35px 0 0 35px;
              //}
              
            }
            &:last-child{
              //span{
                border-radius: 0px 35px 35px 0px;
              //}
            }
          }
        }
        .current{
          td{
            background: #f2f6fc;
            &:first-child{
              border-radius: 35px 0 0 35px;
              span{
                background: $color;
                color: #fff;
              }
              
            }
            &:last-child{
              border-radius: 0px 35px 35px 0px;
              span{
                background: $color;
                color: #fff;
              }
            }
          }
        }
        .today{
          span{
            color:$color;
            font-weight: bold;
          }
          .active{
            background: $color;
            font-weight: normal;
            color:#fff;
          }
        }
        .grey{
          color:#c0c4cc;
        }
        .active{
          background: $color;
          color:#fff;
        }
        .has{
          background: #bad1ff;
          color: #fff;
        }
        span{
          display:inline-block;
          width: 30px;
          height: 30px;
          line-height: 30px;
          border-radius: 50%;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .full-cover{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.6);
      z-index: 999;
    }
    .btn-header{
      height: 30px;
      line-height: 30px;
      padding: 0 15px 5px;
      border-bottom: 1px solid #ececec;
      a{
        float: left;
        font-size: 15px;
      }
      .right{
        float: right;
        color: $color;
      }
    }
    .years{
      padding-left: 0;
      padding-top: 10px;
      li{
        float: left;
        width: 24%;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        text-align: center;
        border-radius: 2px;
        margin-left: 1%;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        list-style-type: none;
      }
      .active{
        color: $color;
        font-weight: bold;
      }
      .clear-both{
        height: 1px;
        float: none;
        clear: both;
      }
    }
}
</style>

<template>
<div class="component-date" :class="customClass">
    <div class="my-vue-date2 " >
      <div class="date-header" v-if="type === 'date' || type === 'week'">
        <span class="last" @click="last" ></span>
        <span @click="showYear" >{{year}}</span>
        年
        <span @click="showMonth" >{{month}}</span>
        月
        <span class="next" @click="next"></span>
      </div>

      <div class="date-header font14" v-if="type === 'year'">
        <span class="last" @click="last" ></span>
        <span >{{yearTitle}}</span>
        <span class="next" @click="next"></span>
      </div>

      <div class="date-header font14" v-if="type === 'month'">
        <span class="last" @click="last" ></span>
        <span >{{year}}</span>
        <span class="next" @click="next"></span>
      </div>

      <ul class="years" v-if="type === 'year'">
        <li :class="nowYear == val ? 'active': ''" v-for="val in yearList" :key="val" @click="getYear(val)" >{{val}}</li>
        <li class="clear-both"></li>
      </ul>

      <ul class="years " v-if="type === 'month'">
        <li :class="month == i ? 'active': ''" v-for="i in 12" :key="i" @click="getMonth(i)" >
          {{i}}月
        </li>
        <li class="clear-both"></li>
        
      </ul>
      <table v-if="type === 'date' || type === 'week'" colspan="0" rowspan="0" >
        <tr>
          <th>日</th>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
        </tr>
        <tr :class="{hover: type === 'week', current: weekIndex === row[3].date }" v-for="(row,i) in rows" :key="i" @click="getWeek(i)">
          <td v-for="(cell,n) in row" :key="n" :class="cell.date == nowDate ? 'today' : ''" >
            <span 
            class="date-item"
            :class="{grey: (cell.month == 'last' || cell.month == 'next' ) , active: hasChoosed(cell.date) }"
            :title="cell.date" 
            @click="getDate(cell,$event)" >{{cell.text}}</span>
          </td>
        </tr>
      </table>
    </div>
</div>
  
</template>

<script>
    export default {
      name: 'datePicker',
      props:{
        separator: {
          type: String,
          default: '-'
        },
        customClass: {
          type: String,
          default: ''
        },
        value: { // 默认值
          type: String,
          default: ''   // yyyy-mm-dd: date/week(week时时间必须是周三) yyyy: 年  yyyy-mm: 月   
        },
        type: {
          type: String,
          default: 'date'  // date  week month  year
        }
      },
        data(){
            return{
              yearList: [],
              year: 2018,
              month: 8,
              dateLength: 0,
              startDay: 0,
              rows:[],
              date: [],
              nowMonth: 0,
              nowDate: '',
              weekIndex: '',
              nowYear: 0
            }
        },
        created(){

        },
        computed: {
          yearTitle(){
            return this.yearList[0] + '-' + this.yearList[11]
          }
        },
        mounted(){
          this.year = new Date().getFullYear()
          this.month = new Date().getMonth() + 1
          this.nowMonth = this.month
          this.startDay = new Date(this.year+'/'+this.month+'/01').getDay()
          this.dateLength = this.getDateLength(this.month)
          this.nowDate = this.format(this.year + this.separator + this.month + this.separator + new Date().getDate())

        
          if(this.value != ''){
            if(this.type === 'date' || this.type === 'week'){
              this.date = this.value 
              this.year = parseInt(this.date.split(this.separator)[0])
              this.month = parseInt(this.date.split(this.separator)[1])
              if(this.type === 'week'){
                this.weekIndex = this.value  // 传进入的时间为周三的日期
                this.date = ''
              }
            }else if(this.type === 'month'){
              this.year = parseInt(this.value.split(this.separator)[0])
              this.month = this.value.split(this.separator)[1]
            }else if(this.type === 'year'){
              this.year = parseInt(this.value)
              this.nowYear = this.year
            }
            
          }

          for(let i=0;i<12;i++){
            this.yearList.push(this.year + i)
          }

          this.startDay = new Date(this.year+'/'+this.month+'/01').getDay()
          
          this.getRows()
        },
        methods:{
          showYear(){
            this.monthDialog = false
            this.yearDialog = true
          },
          showMonth(){
            this.yearDialog = false
            this.monthDialog = true
          },
          getYear(year){
            if(this.type === 'year'){
              //console.log(year)
              this.$emit('getValue', year)
              this.$emit('input',year)
            }
            this.nowYear = year
            this.year = year
            this.yearDialog = false
            this.startDay = new Date(this.year+'/'+this.month+'/01').getDay()
            this.getRows()
          },
          getMonth(month){
            if(this.type === 'month'){
              let value = `${this.year}-${month > 9 ? month : '0'+month}`
              //console.log(value)
              this.$emit('getValue', value)
              this.$emit('input',value)
            }
            this.month = month
            this.monthDialog = false
            this.startDay = new Date(this.year+'/'+this.month+'/01').getDay()
            this.getRows()
          },
          getDateLength(month){ // 获取每个月份天数
            if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
              return 31
            }else if(month == 2){
              if (this.year % 4 === 0 && this.year % 100 !== 0 || this.year % 400 === 0) {
                return 29;
              } else {
                return 28;
              }
            }else{
              return 30
            }
          },
          getRows(){ // 获取月份天数列表数组
            var arr = []
            var index = 0
            var lastMonth = this.month - 1 == 0 ? 12 : this.month - 1
            var lastDay = this.getDateLength(lastMonth)
            var date
            //lastDay = lastDay == 0 ? 12 : lastDay
            if(this.startDay != 0){ // 月初第一天不是周一
              for(let d = this.startDay;d > 0;d--){
                let obj = {}
                obj.text = lastDay - d + 1
                obj.month = "last"
                if(this.month > 1){
                  date = this.year+this.separator+(this.month-1)+this.separator+(lastDay - d + 1)
                }else{
                  date = (this.year - 1)+this.separator+'12'+this.separator+(lastDay - d + 1)
                }
                obj.date = this.format(date)
                arr.push(obj)
              }
            }else{  // 月初第一天是周一 从第二行开始
              for(let d = 7;d > 0;d--){
                let obj = {}
                obj.text = lastDay - d + 1
                obj.month = 'last'

                if(this.month > 1){
                  date = this.year+this.separator+(this.month-1)+this.separator+(lastDay - d + 1)
                }else{
                  date = (this.year - 1)+this.separator+'12'+this.separator+(lastDay - d + 1)
                }
                obj.date = this.format(date)
                arr.push(obj)
              } 
            }
            for(let date=0;date<this.getDateLength(this.month);date++){ //  懒得写注释了 自己看吧 就是年份日期一堆判断
              let obj = {}
              obj.text = date + 1
              obj.month = "now"
              obj.date = this.format(this.year+this.separator+this.month+this.separator+(date + 1))
              arr.push(obj) 
            }
            for(let end=this.startDay+this.getDateLength(this.month);end<42;end++){
              let obj = {}
              index += 1
              obj.text = index
              obj.month = "next"
              if(this.month < 12){
                date = this.year+this.separator+(this.month+1)+this.separator+(index)
              }else{
                date = (this.year+1)+this.separator+1+this.separator+(index)
              }
              obj.date = this.format(date)
              arr.push(obj) 
            }
            let row = []
            for(let i=0;i<42;i+=7){
              row.push(arr.splice(0,7))
            }
            this.rows = row
          },
          last(){
            if(this.type === 'date' || this.type === 'week'){
              if(this.month > 1){
                this.month -= 1
              }else{
                this.month = 12
                this.year -= 1
              }
              this.startDay = new Date(this.year+'/'+this.month+'/01').getDay()
              this.getRows()
            }else if (this.type === 'year'){
              this.year -= 11
              this.yearList = []
              for(let i=0;i<12;i++){
                this.yearList.push(this.year + i)
              }
              
            }else if(this.type === 'month'){
              this.year -= 1
            }
            
          },
          hasChoosed(value){
            if(value === this.date){
              return true
            }
          },
          next(){
            if(this.type === 'date' || this.type === 'week'){
              if(this.month < 12){
                this.month += 1
              }else{
                this.month = 1
                this.year += 1
              }
              this.startDay = new Date(this.year+'/'+this.month+'/01').getDay()
              this.getRows()
            }else if(this.type === 'year'){
              this.year += 11
              this.yearList = []
              for(let i=0;i<12;i++){
                this.yearList.push(this.year + i)
              }
            }else if(this.type === 'month'){
              this.year += 1
            }
            
          },
          getDate(cell){
            if(this.type === 'date'){
              //console.log(cell.date)
              this.date = cell.date
              this.$emit('getValue', cell.date)
              this.$emit('input',cell.date)
            }
            
          },
          getWeek(week){
            if(this.type === 'week'){
              this.weekIndex = this.rows[week][3].date
              
              let date = [this.rows[week][0].date,this.rows[week][6].date]
              let num = this.getWeekNumber(new Date(this.rows[week][3].date))
              let month = new Date(this.rows[week][3].date).getMonth()
              const trueDate = new Date(this.rows[week][3].date)
              if (num === 1 && month === 11) {
                trueDate.setHours(0, 0, 0, 0);
                trueDate.setDate(trueDate.getDate() + 3 - (trueDate.getDay() + 6) % 7);
              }

              let year = trueDate.getFullYear()
              let value = `${year} 第 ${num > 9 ? num : '0'+num} 周`
              
              let obj = {
                text: value,
                date: this.rows[week][3].date, // 周三的时间
                range: [this.rows[week][0].date,this.rows[week][6].date]
              }

              //console.log(value)
              //console.log(obj)
              this.$emit('getValue', obj)
              this.$emit('input',obj.date)
            }
          },
          getWeekNumber(src) {
            //if (!isDate(src)) return null;
            const date = new Date(src.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
            // January 4 is always in week 1.
            const week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
            // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
            return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
          },
          format(date){
            var arr = date.split(this.separator)
            arr[1] = arr[1] > 9 ? arr[1] : '0'+arr[1]
            arr[2] = arr[2] > 9 ? arr[2] : '0'+arr[2]
            return arr.join(this.separator)
          },
          
        }

        
    }
</script>
