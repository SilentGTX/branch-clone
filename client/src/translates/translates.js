import i18next from 'i18next'
i18next.init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                key: "hello world"
            },
            common: {
                sign: "Sign in"
            }
        },
        bg: {
            translation: {
                key: 'здрасти'
            },
            common: {
                sign: "Вход"
            }
        }
    }
})

console.log(i18next.t('common:sign', { lng: 'bg' }));