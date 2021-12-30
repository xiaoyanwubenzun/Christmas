let vm = new Vue({
	el: "#app",
	data() {
		return {
			blessing: "",
			random_bless: null,
			blessing_arr: ["With music，candle and bell may peace and happiness be with you.乐声环绕，烛光闪烁，钟声飘向远方，让幸福、安康、快乐，降临到你和家人的旁边。", "More friendship- and friendship - closer and closerto our hearts 圣诞快乐，好友，我们的情谊，更加深厚; 我们的心灵，愈加相印。", "Red candle ，pine tree and Christmas are greeting you，wishing youth and happiness be your.红烛、松树、圣辰，祝福你，我的友人，青春永驻，幸福长在。", "Let`s share the happiness of Chirstmas 让我们一同分享这快乐的圣诞 Best wishes at Christma.I miss you. 圣诞的祝福，真诚的思念。", "Three hundred and sixty-five days，everywhere be touched with my warmest blessing. 365里路，每一步都有我的圣诞祝福;365个日夜，每一天都有我温馨的问候。", "At this happy moment.I miss you very much. 在着幸福的时刻，我更加的怀念你。", "May the angel bring you peace，happiness，joys and fortunes. 愿可爱的`小天使带给你平安，幸福，快乐和如意。", "May the spirit of Christmas bring you joys and happiness all through the New Year.圣诞老人的祝福，陪伴着你，保佑着你，地久天长。", "More friendship - and friendship - closer and closerto our hearts 圣诞快乐，好友，我们的情谊，更加深厚; 我们的心灵，愈加相印。", "Merry Christmas.Many happiness returns of the day.恭贺圣诞，岁岁似今朝。", "May you be happy at Christmas and always.我的心和雪花一起，飘落到你的门前，祝福，等待着你; 快乐，每一个圣诞。", "Mountains and rivers cannot separate us.Maerry Christmas.远隔千山万水，也隔不断我对你的思念。祝你圣诞快乐。", "Stars are shining.May Santa Claus come to you with joys and happiness.星光闪烁，圣诞老人来到你的床前，将欢乐与祝福，洒满你的房间"],
			bless_color: {
				"color": ""
			},
			title_color: {
				"color": ""
			}
		};
	},
	methods: {
		changeBless() {
			this.blessing = this.blessing_arr[parseInt(Math.random(13) * 10)]
			this.bless_color.color = this.getColor();
			this.title_color.color = this.getColor();
		},
		playMusic() {
			let music = document.querySelector("#music");
			if (music.paused) { //判读是否播放  
				music.paused=false;
				music.play(); //没有就播放 
			}
		},
		getColor() {
			return (function (m, s, c) {
				return (c ? arguments.callee(m, s, c - 1) : '#') +
					s[m.floor(m.random() * 16)]
			})(Math, '0123456789abcdef', 5)
		}
	},
	mounted() {
		this.changeBless();
}
});