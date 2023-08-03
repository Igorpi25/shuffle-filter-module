// ShuffleScheme component
Vue.component('shuffle-scheme', {
    props: ['local', 'incoming'],
    template: `
    <div>
        <slot></slot>
    </div>
    `,
});
