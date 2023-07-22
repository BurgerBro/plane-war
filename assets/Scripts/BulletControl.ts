import EnermyControl from "./EnermyControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BulletControl extends cc.Component {

    @property
    speed: number = 800;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        // 移动
        this.node.y += this.speed *dt
        // 出屏幕销毁
        if (this.node.y > 820) {
            this.node.destroy()
        }
    }

    
    onCollisionEnter(other) {
        // 如果碰到敌人，则先销毁敌人，后销毁自己
        console.log(other)
        if (other.tag == 1) {
            // 销毁敌人
            other.getComponent(EnermyControl).die()
            // 销毁自己
            this.node.destroy()
        }
    }
}
