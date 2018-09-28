const core = ng.core;

class PlayComponent {
    constructor(cd) {
        this.name = 'Component';

        setTimeout(() => {
            this.name = 'updated';
        }, 3000);
    }

    updateName(newName) {
        this.name = newName;
    };
}

PlayComponent.ngComponentDef = core.ɵdefineComponent({
    type: PlayComponent, selectors: [['play-comp']],
    factory: function PlayComponent_Factory() {
        // return new PlayComponent(core.ɵdirectiveInject(core.ChangeDetectorRef));
        return new PlayComponent();
    },
    template: function PlayComponent_Template(rf, ctx) {
        if (rf & 1) {
            core.ɵE(0, 'h2');
            core.ɵT(1);
            core.ɵe();
            core.ɵT(2, ' Your name: ');
            core.ɵE(3, 'input');
            core.ɵL('input', function PlayComponent_Template_input_input_listener($event) {
                return ctx.updateName($event.target.value);
            });
            core.ɵe();
        }
        if (rf & 2) {
            core.ɵt(1, core.ɵi1('Hello, ', ctx.name, ''));
            core.ɵp(3, 'value', core.ɵb(ctx.name));
        }
    }
});

let cmp;
document.addEventListener('DOMContentLoaded', () => {
    cmp = core.ɵrenderComponent(PlayComponent);
});

/*
setTimeout(() => {
    core.ɵdetectChanges(cmp)
}, 3000);
*/
