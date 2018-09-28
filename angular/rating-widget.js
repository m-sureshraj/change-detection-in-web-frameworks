const core = ng.core;
const elementStart = core.ɵE;
const elementStyling = core.ɵs;
const listener = core.ɵL;
const elementEnd = core.ɵe;

const elementStylingMap = core.ɵsm;
const elementStylingApply = core.ɵsa;

/*
@Component({
    template: `
    <ul class="rating" (click)="handleClick($event)">
      <li data-value="1" [className]="'fa-star ' + (rating > 0 ? 'fas' : 'far')"></li>
      <li data-value="2" [className]="'fa-star ' + (rating > 1 ? 'fas' : 'far')"></li>
      <li data-value="3" [className]="'fa-star ' + (rating > 2 ? 'fas' : 'far')"></li>
      <li data-value="4" [className]="'fa-star ' + (rating > 3 ? 'fas' : 'far')"></li>
      <li data-value="5" [className]="'fa-star ' + (rating > 4 ? 'fas' : 'far')"></li>
    </ul>
  `
})
*/
export class RatingsComponent {
    constructor(cd) {

        this.rating = 1;
        this.cd = cd;

        /*setTimeout(() => {
            this.rating = 3;
            this.cd.markForCheck();
        }, 3000);*/
    }

    handleClick(event) {
        this.rating = Number(event.target.dataset.value);
    };
}

// compiled component factory
RatingsComponent.ngComponentDef = core.ɵdefineComponent({
    type: RatingsComponent,
    selectors: [['.ratings-wrapper']],
    factory: function RatingWidget_Factory() {
        return new RatingsComponent(core.ɵinjectChangeDetectorRef());
    },
    template: function RatingWidget_Template(rf, ctx) {
        if (rf & 1) {
            elementStart(0, 'ul');
            elementStyling(['ratings', 1, 'ratings', true]);
            listener('click', function RatingWidget_Template_ul_click_listener($event) {
                return ctx.handleClick($event);
            });
            elementStart(1, 'li', ['data-value', '1']);
            elementStyling();
            elementEnd();
            elementStart(2, 'li', ['data-value', '2']);
            elementStyling();
            elementEnd();
            elementStart(3, 'li', ['data-value', '3']);
            elementStyling();
            elementEnd();
            elementStart(4, 'li', ['data-value', '4']);
            elementStyling();
            elementEnd();
            elementStart(5, 'li', ['data-value', '5']);
            elementStyling();
            elementEnd();
            elementEnd();
        }
        if (rf & 2) {
            elementStylingMap(1, ('fa-star ' + ((ctx.rating > 0) ? 'fas' : 'far')));
            elementStylingApply(1);
            elementStylingMap(2, ('fa-star ' + ((ctx.rating > 1) ? 'fas' : 'far')));
            elementStylingApply(2);
            elementStylingMap(3, ('fa-star ' + ((ctx.rating > 2) ? 'fas' : 'far')));
            elementStylingApply(3);
            elementStylingMap(4, ('fa-star ' + ((ctx.rating > 3) ? 'fas' : 'far')));
            elementStylingApply(4);
            elementStylingMap(5, ('fa-star ' + ((ctx.rating > 4) ? 'fas' : 'far')));
            elementStylingApply(5);
        }
    }
});