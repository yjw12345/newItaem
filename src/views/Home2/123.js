'use strict';
let textArray = [
    "廖信达",
    "江绮晴",
    "廖世通",
    "吴燕璇",
    "曾亮辉",
    "陆晋辉",
    "张维鹏",
    "关司平",
    "陈维欢",
    "杜文华",
    "韩晓强",
    "廖铭涛",
    "冯志杰",
    "黄文波",
    "刘嘉豪",
    "刘清键",
    "彭智彬",
    "丘雀灵",
    "张泽鸿",
    "许学斌",
    "范文杰",
    "朱飞冲",
    "张鸿杰",
    "倪东方",
    "黄伊晴",
    "麦丽莹",
    "郑文琪",
    "林泓村",
    "黄玮文",
    "梁盛辉",
    "梁广杰",
    "李锦浩",
    "曹琬姗",
    "黄佩华",
    "曾志超",
    "崔文元",
    "许广华",
    "邓玉麟",
    "郑美香",
    "刘丹仪",
    "范文杰",
    "朱飞冲",
    "张鸿杰",
    "倪东方",
    "黄伊晴",
    "麦丽莹",
    "郑文琪",
    "韩晓强",
    "廖铭涛",
    "冯志杰",
    "黄文波",
    "刘嘉豪",
    "刘清键",
    "彭智彬",
    "丘雀灵",
    "张泽鸿",
    "许学斌",
    "冯剑雄",
    "麦振键",
    "梁灿健",
    "李振明",
    "刘飞洋",
    "赖俊杰",
    "周英琦",
    "肖卓涵",
    "陈芷怡",
    "李念龙",
    "范振南",
    "黄捷宇",
    "黄泳浩",
    "杨收权",
    "霍嘉团",
    "梁煜彬",
    "林志鹏",
    "吴远健",
    "陈颖",
    "吕敏",

]
{

    window.onload = function () {
        const canvas = document.querySelector('canvas');
        if (typeof canvas.getContext === 'undefined') {
            return;
        }
        const ctx = canvas.getContext("2d");


        // Canvas Resize
        function fitCanvasSize() {
            canvas.width = document.documentElement.clientWidth;
            canvas.height = document.documentElement.clientHeight;


        }
        fitCanvasSize();
        window.onresize = fitCanvasSize;

        // RequestAnimationFrame
        (function () {
            var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame;
            window.requestAnimationFrame = requestAnimationFrame;
        })();

        const colors = ['#000030', '#4d4398', '#4784bf', '#000030', '#4d4398', '#ffffff']

        //Utility Function
        function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function randomColor(colors) {
            return colors[Math.floor(Math.random() * colors.length)]
        }
        // Objects
        function Particle(x, y, radius, color,text) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.text = text
            this.color = color;
            this.radians = Math.random() * Math.PI * 2;
            this.velocity = 0.001;
            this.distanceFormCenter = randomIntFromRange(10, canvas.width / 2 + 100);

            this.update = () => {
                // Move points over time
                this.radians += this.velocity;
                //Circular Motion
                this.x = Math.cos(this.radians) * this.distanceFormCenter + canvas.width / 2;
                this.y = Math.sin(this.radians) * this.distanceFormCenter + canvas.height / 2;
                this.draw();
            }

            this.draw = () => {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.globalAlpha = .8;
                ctx.fill();
            };
        }

        // Implementation
        let perticles;
        function init() {
            perticles = []

            for (let i = 0; i < textArray.length; i++) {
                const radius = (Math.random()) + .5;
                perticles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colors)));
            }
        }

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate);
            var g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            g.addColorStop(0, 'rgba(19,27,35,.05)');
            g.addColorStop(1, 'rgba(10,20,67,.05)');
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            perticles.forEach(perticles => {
                perticles.update();
            });
        }

        init();
        animate();
    }
}