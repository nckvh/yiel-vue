<template>
    <div style="position:relative;width:800px;height:516px;">
        <form >
            <div>
                <div id="background" style ="background:transparent url({{createLink(overlay.bg)}}) no-repeat top left;max-width:800px;max-height:500px; font-family:arial; text-shadow: none; border-radius: 0; box-shadow: none; z-index:98; top:0; left:0; display:block; width:800px; height:500px; margin:0; border:0; "></div>
            </div>
            <div>
                <input id="submit_button" expiration=2000000000 yie_affiliate=true redirect_url="http://www.anrdoezrs.net/links/7681109/type/dlg/http://www.stylesforless.com/sale?t=t" name ="" style ="background:transparent; color:transparent; font-family:arial; text-shadow: none; border-radius: 0; box-shadow: none; position:absolute; font-size:; z-index:99; top:404px; left:98.5px; width:222px; height:40px; line-height:56px; padding:0; cursor:pointer; margin:0; border:0; " type = "submit" value =""></input>
            </div>
        </form>
    </div>
    <h1>{{async.basket}}</h1>
</template>

<script>
import $ from '../node_modules/jquery'

export default {
    data () {
        return {
            //  overylay background image - amazon S3 link
            overlay: {
                bg: 'https://yieldify-static-files.s3.amazonaws.com/stylesforless/Dec15/25off.jpg'
            },
            async: {
                basket : false
            },
            msg: 'Hello Vue! this is fun',
            testData: false
        }
    },
    //  captures postMessage information and
    //  translates DOM events to VUE events for easy handling
    created  : function(){
        var that = this
        this.bindEvent(window, 'message', function(event){
            //process
            var data = event.data.split(',');
            that.$emit(data[0], data[1]);
        });
    },

    //  These events are used to handle messages from the parentFrame
    //  in this format
    //  'message' : callback()
    events  : {
        'basket' : function(msg){
            console.log('vue event', msg);
            this.async.basket = msg;
        }
    },
    methods : {
        //  a function to convert AMAZON S3 links to CloudFront links
        createLink(passUrl){
            passUrl = decodeURIComponent(passUrl);
            if (passUrl !== undefined){
                let fileTypes = ["png", "jpg", "gif", "html", "js", "json", "css"];
                let passUrlRegExp = new RegExp(passUrl.match(/[^\.]+$/));
                if (passUrlRegExp.test(fileTypes)){
                    let protocolDef = passUrl.match(/[^y]*/).toString();
                    if("http://"==protocolDef||"https://"==protocolDef||"//"==protocolDef){
                        let thelink = passUrl.replace(protocolDef,""),
                        concatLink = protocolDef.concat(thelink),
                        cloudfrontBase = "https://dwmvwp56lzq5t.cloudfront.net/",
                        s3Base = "yieldify-static-files.s3.amazonaws.com/",
                        imgPath = thelink.replace(s3Base, ""),
                        newCloudFrontLink = cloudfrontBase.concat(imgPath),
                        newlink = passUrl.replace(concatLink, newCloudFrontLink);
                        console.log(newlink);
                        return(newlink)
                    } else {
                        console.log('link failed')
                        return false
                    }
                }
            }
        },
        //  a function to polyfill event listeners
        //  this is only used in the 'created' function
        //  to translate window.postMessage into Vue events
        bindEvent(t,e,i){
                t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent("on"+e,i)
        },
        async test(){
            console.log('start');
            let end = await this.prom()
                .then(x=> x + ' and ')
                .then(x=> x + ' apples')
            return(end);
        },
        prom(){
            return new Promise((res,rej)=>{
                res('bananas')
            })
        }
    }
}
</script>

<style lang="stylus">
body
    color black
</style>
