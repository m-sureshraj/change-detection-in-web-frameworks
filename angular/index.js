const core = ng.core;

import { RatingsComponent } from './rating-widget.js'

let cmp;
document.addEventListener('DOMContentLoaded', () => {
    cmp = core.ɵrenderComponent(RatingsComponent);
});

/*
setTimeout(() => {
    core.ɵdetectChanges(cmp)
}, 3000);
*/