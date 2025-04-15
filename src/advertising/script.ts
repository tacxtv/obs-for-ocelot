'use strict'

import Alpine from 'alpinejs'
import * as dayjs from 'dayjs'
import 'dayjs/locale/fr'

// @ts-ignore
window.Alpine = Alpine
dayjs.locale('fr')

// noinspection JSUnusedGlobalSymbols
Alpine.store('app', {
    title: "Ouverture le 25 avril 2025",
    interval: 60 * 1_000,
    duration: 8 * 1_000,
    spawn: 60,
    unit: 'minutes',
    open: false,
    lastUsed: null,
    image: null,
    avatar: null,
    init(): void {
        const params = new URLSearchParams(document.location.search)
        const interval = parseInt(params.get('interval'))
        if (interval >= 1) this.interval = interval * 1_000
        const duration = parseInt(params.get('duration'))
        if (duration >= 1) this.duration = duration * 1_000
        const spawn = parseInt(params.get('spawn'))
        if (spawn >= 1) this.spawn = spawn
        const unit = params.get('unit')
        if (unit === 'minutes' || unit === 'hours') this.unit = unit
        if (params.has('avatar')) {
            this.avatar = params.get('avatar')
        }
        const debug = parseInt(params.get('debug')) === 1
        if (debug) this.debug()

        this.lastUsed = window.localStorage.getItem('lastUsed')

        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('advertising-image')!.style['background-image'] = `url(${params.get('image') || 'https://pbs.twimg.com/media/GoQnrWcWEAAGtx9?format=jpg&name=medium'})`
            if (params.has('avatar')) {
                const options = {
                    method: 'GET',
                    headers: {
                        'client-id': 'zk2p6oyir4hoipjgti78k3p9dffq5u',
                        'User-Agent': 'insomnia/11.0.2',
                        Authorization: 'Bearer 4ojkta39w5w4q661pud80wx0aaipb2'
                    }
                };

                fetch('https://api.twitch.tv/helix/users?login=' + this.avatar, options)
                    .then(response => response.json())
                    .then(response => {
                        const data = response.data[0]
                        if (data) {
                            const avatarUrl = data.profile_image_url
                            const length = this.avatar.length
                            const size = 2 - (length * 0.01)
                            document.getElementById('advertising-avatar-img')!.style['background-image'] = `url(${avatarUrl})`;
                            console.log('size', size)
                            document.getElementById('advertising-avatar-name')!.style['font-size'] = `${size}em`;
                        }
                    })
                    .catch(err => console.error(err))
            }

            if (params.get('debug') !== '1') {
                this.intervalFunction()
                setInterval(() => this.intervalFunction(), this.interval)
            } else {

                this.open = true
            }
        })
    },
    intervalFunction(): void {
        const now = dayjs()

        if (now.add(-this.spawn, this.unit).valueOf() >= this.lastUsed) {
            this.open = true
            const handler = setTimeout(() => {
                this.open = false
                clearTimeout(handler)
            }, this.duration)
            this.lastUsed = now.valueOf()
            window.localStorage.setItem('lastUsed', this.lastUsed)
        }
    },
    debug(): void {
        // this.spawn = 0.2
        // this.interval = 1_000
        // this.duration = 4_000
    },
})

Alpine.start()
