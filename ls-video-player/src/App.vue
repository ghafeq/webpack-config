<template>
    <div id="app">
        <template v-if="!isShowMultiple && show">
            <vue-aliplayer-v2 :source="source" ref="VueAliplayerV2" :options="options"/>
        </template>
        <div v-if="isShowMultiple && show" class="show-multiple">
            <template v-for="x in 5">
                <vue-aliplayer-v2 class="multiple-player" :key="x" :source="source" ref="VueAliplayerV2" :options="options" />
            </template>
        </div>
        <p class="remove-text" v-if="!show">The player has been destroyed!</p>
        <div class="player-btns">
            <template v-if="!isShowMultiple && show">
                <span @click="play()">Play</span>
                <span @click="pause()">Pause</span>
                <span @click="replay()">Replay</span>
                <!-- <span @click="getCurrentTime()">Play Moment</span>
                <span @click="getStatus()">Get player status</span> -->
            </template>
            <!--<span @click="show = !show">{{ show ? 'Destroy' : 'Overload' }}</span>
            <span @click="options.isLive = !options.isLive">{{ options.isLive ? 'Switch to normal mode' : 'Switch live mode' }}</span>
            <span @click="showMultiple()">{{isShowMultiple ? 'Show 1 player' : 'Show multiple players'}}</span>-->
        </div>
        <div class="source-box">
            <span class="source-label">Select the playback source (support dynamic switching):</span>
            <select v-model="source" name="source" id="source">
                <option value="//player.alicdn.com/video/aliyunmedia.mp4">Play source 1</option>
                <option value="//yunqivedio.alicdn.com/user-upload/nXPDX8AASx.mp4">Play source 2</option>
                <option value="//tbm-auth.alicdn.com/e7qHgLdugbzzKh2eW0J/kXTgBkjvNXcERYxh2PA@@hd_hq.mp4?auth_key=1584519814-0-0-fc98b2738f331ff015f7bf5c62394888">Play source 3</option>
                <option value="//ivi.bupt.edu.cn/hls/cctv1.m3u8">Live broadcast source 4</option>
            </select>
        </div>
        <div class="source-box">
            <span class="source-label">Input playback source (support dynamic switching):</span>
            <input class="source-input" type="text" v-model="source">
        </div>
        <div class="source-box">
            <span class="source-label">Designated as flash:</span>
              <select v-model="options.useFlashPrism">
                <option :value="true">Yes</option>
                <option :value="false">No</option>
            </select>
        </div>
        <div class="source-box">
            <span class="source-label">Prohibit user dragging (only flash is valid):</span>
              <select v-model="options.disableSeek">
                <option :value="true">Yes</option>
                <option :value="false">No</option>
            </select>
        </div>
    </div>
</template>
<script>
// import VueAliplayerV2 from '../packages';
export default {
    // components:{ VueAliplayerV2 },
    data(){
        return {
            options: {
                // source:'//player.alicdn.com/video/aliyunmedia.mp4',
                isLive: !true,   //切换为直播流的时候必填
                // skinLayout: [
                // {
                //     'name': 'bigPlayButton',
                //     'align': 'blabs',
                //     'x': 30,
                //     'y': 80
                // },
                // {
                //     'name': 'infoDisplay'
                // },
                // {
                //     'name': 'controlBar',
                //     'align': 'blabs',
                //     'x': 0,
                //     'y': 0,
                //     'children': [
                //         {
                //             'name': 'liveDisplay',
                //             'align': 'tlabs',
                //             'x': 15,
                //             'y': 6
                //         },
                //         {
                //             'name': 'fullScreenButton',
                //             'align': 'tr',
                //             'x': 10,
                //             'y': 10
                //         },
                //         {
                //             'name': 'volume',
                //             'align': 'tr',
                //             'x': 5,
                //             'y': 10
                //         }
                //     ]
                // }]
                // useFlashPrism: false,    //指定为flash
                // disableSeek: true //禁用进度条的Seek，默认值为false
            },
            source: '//player.alicdn.com/video/aliyunmedia.mp4',
            // source: '//ivi.bupt.edu.cn/hls/cctv1.m3u8',
            show: true,
            isShowMultiple: false,
        }
    },

    methods:{

        play(){
            this.$refs.VueAliplayerV2.play()
        },

        pause(){
            this.$refs.VueAliplayerV2.pause();
        },

        replay(){
            this.$refs.VueAliplayerV2.replay();
        },

        getCurrentTime(){
            // this.$refs.VueAliplayerV2.getCurrentTime();
            this.source = 'http://ivi.bupt.edu.cn/hls/cctv1.m3u8';
        },

        getStatus(){
           const status =  this.$refs.VueAliplayerV2.getStatus();
           console.log(`getStatus:`, status);
           alert(`getStatus:${status}`);
        },

        showMultiple(){
            this.isShowMultiple = !this.isShowMultiple;
        }
    }
}
</script>
