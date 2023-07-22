const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {

    start () {

    }

    update (dt) {
        // 移动 遍历子物体
        for (let bgNode of this.node.children) {
            // 移动 不同设备屏幕刷新率不同 需乘dt统一
            bgNode.y -= 50 * dt
            if ( bgNode.y < -850) {
                bgNode.y += 852*2
            }
        }

    }
}
