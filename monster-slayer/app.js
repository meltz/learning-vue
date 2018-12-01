new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
        },
        attack() {
            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })

            if(this.checkWin()) {
                return
            }

            this.monsterAttack()
        },
        SpecialAttack() {
            var damage = this.calculateDamage(10, 20)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            })

            if(this.checkWin()) {
                return
            }

            this.monsterAttack()
        },
        heal() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10
            }else {
                this.playerHealth = 100
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heal for 10'
            })
            this.monsterAttack()
        },
        giveUp() {
            this.gameIsRunning = false
            this.clearLogs()
        },
        clearLogs(){
            this.turns = []
        },
        monsterAttack() {
            var damage = this.calculateDamage(5, 12)
            this.playerHealth -= damage

            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            })

            this.checkWin()
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min)
        },
        checkWin() {
            if(this.monsterHealth <= 0) {
                if(confirm('You Won! New Game ?')) {
                    this.startGame()
                    this.clearLogs()
                }
                else {
                    this.giveUp()
                }
                return true
            }
            else if (this.playerHealth <= 0) {
                if(confirm('You Lost! New Game ?')) {
                    this.startGame()
                    this.clearLogs()
                }
                else {
                    this.giveUp()
                }
                return true
            }
            return false
        }
    }
})