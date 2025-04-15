'use strict'

import Alpine from 'alpinejs'

// noinspection JSUnusedGlobalSymbols
Alpine.store('app', {
    tab: 'advertising',
    form: {
        image: '',
        avatar: '',
        spawn: 60,
        duration: 8,
        debug: 0,
    },
    init(): void {
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('#myTab button').forEach((button) => {
                button.addEventListener('click', (e) => {
                    // @ts-ignore
                    this.tab = button.id
                    console.log('tab', this.tab)
                })
            })
        })
    },
    url(): string {
        const url = new URLSearchParams(document.location.search)
        switch (this.tab) {
            case 'advertising':
                // if (!this.form.image) return ''
                if (!this.form.avatar) return ''
                url.set('image', encodeURI(this.form.image))
                url.set('avatar', this.form.avatar)
                url.set('spawn', this.form.spawn)
                url.set('duration', this.form.duration)
                url.set('debug', this.form.debug)
                break
        }
        return new URL(this.tab + '.html?' + url.toString(), document.location.href).toString()
    },
    copy(): void {
        const copyText = document.getElementById("url") as HTMLInputElement
        copyText.select()
        copyText.setSelectionRange(0, 99999)
        // noinspection JSIgnoredPromiseFromCall
        navigator.clipboard.writeText(copyText.value)
    },
})

Alpine.start()
