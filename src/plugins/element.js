import Vue from 'vue'
import { Button } from 'element-ui'
import {Form,FormItem} from 'element-ui'
import {Input} from 'element-ui'
//导入弹框提示组件
import {Message} from 'element-ui'
import {Container,Header,Main} from 'element-ui'
import {Select,Option} from 'element-ui'
import {Radio} from 'element-ui'
import {Upload} from 'element-ui'
// import {Link} from 'element-ui'



Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Select)
Vue.use(Option)
Vue.use(Radio)
Vue.use(Upload)
// Vue.use(Link)
Vue.prototype.$message = Message