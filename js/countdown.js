(() => {
    'use strict';

    class Countdown {

        // 2020-09-01 10:00:00
        // days 24 * 60 * 60
        // hours
        // minutes
        // seconds
        // due date - входное
        // start
        // stop
        // refresh

        _seconds_per_day = (60 * 60 * 24)
        _seconds_per_hour = (60 * 60)
        _seconds_per_minute = 60

        constructor(options) {
            console.log(options.due_date)
            this.due_date = new Date(options.due_date)
            this.target = options.target

            if (this.target) {
                this.calc()
                this.display()

                this.start()
            }

            
        }

        calc() {

            this.now = new Date()

            this.delta = Math.round((this.due_date - this.now) / 1000)

            this.delta = this.delta > 0 ? this.delta : 0

            let tmp = this.delta

            this.days = Math.floor(tmp / this._seconds_per_day)
            tmp = tmp - this.days * this._seconds_per_day

            this.hours = Math.floor(tmp / this._seconds_per_hour)
            tmp = tmp - this.hours * this._seconds_per_hour

            this.minutes = Math.floor(tmp / this._seconds_per_minute)
            tmp = tmp - this.minutes * this._seconds_per_minute

            this.seconds = tmp

            if (this.delta = 0) {
                this.stop()
            }

        }

        display() {
            let hours = ('0' + this.hours).slice(-2),
                minutes = ('0' + this.minutes).slice(-2),
                seconds = ('0' + this.seconds).slice(-2)

            this.target.innerHTML = `${this.days}:${hours}:${minutes}:${seconds}`
        }

        start () {
            this.id = setInterval(() => {
                this.calc()
                this.display()
            }, 1000)
        }

        stop () {
            clearInterval(this.id)
        }
    }

    let newYearCountdown = new Countdown({
        target: document.querySelector('#newYear'),
        due_date: '2021-01-01 00:00:00'
    })

    let farewellPartyCountdown = new Countdown({
        target: document.querySelector('#farewellParty'),
        due_date: '2020-07-03 18:30:00'
    })

    setTimeout(() => {
        newYearCountdown.stop()
    }, 5000)

    // countdown.display()

})();