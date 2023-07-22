const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyManager extends cc.Component {

    @property(cc.Prefab)
    enemyPre: cc.Prefab = null;

    @property
    text: string = 'hello';

    start () {
        // 每隔两秒一个飞机
        this.schedule(()=> {
            this.createEnemy()
        }, 2)
    }

    // update (dt) {}
    createEnemy() {
        let enemy = cc.instantiate(this.enemyPre)
        enemy.setParent(cc.director.getScene())
        enemy.y = this.node.y
        enemy.x = Math.random()*400 + 20
    }
}
