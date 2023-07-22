const {ccclass, property} = cc._decorator;

@ccclass
export default class EnermyControl extends cc.Component {

    // onLoad () {}
    @property
    speed: number = 300

    start () {

    }

    update (dt) {
        this.node.y -= this.speed * dt
        if (this.node.y < -850) {
            this.node.destroy()
        }
    }

    /**
     * 死亡
     */
    die() {
        // 加载飞机爆炸图片
        cc.loader.loadRes("enemy0_die", cc.SpriteFrame, (err, res)=> {
            this.node.getComponent(cc.Sprite).spriteFrame = res
            this.speed = 0
        })
        setTimeout(()=> {
            this.node.destroy()
        },  300)
    }

}
