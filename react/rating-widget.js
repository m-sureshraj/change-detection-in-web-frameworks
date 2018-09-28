import { ReactComponent, reactCreateElement } from './react.js';

export class RatingComponent extends ReactComponent {

    constructor() {
        super();
        this.state = {rating: 1};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({rating: Number(event.target.dataset.value)})
    };

    render() {
        // @formatter:off

        /*
        <ul className="rating" onClick={this.handleClick}>
            <li data-value="1" className={'fa-star ' + (this.state.rating > 0 ? 'fas' : 'far')}></li>
            <li data-value="2" className={'fa-star ' + (this.state.rating > 1 ? 'fas' : 'far')}></li>
            <li data-value="3" className={'fa-star ' + (this.state.rating > 2 ? 'fas' : 'far')}></li>
            <li data-value="4" className={'fa-star ' + (this.state.rating > 3 ? 'fas' : 'far')}></li>
            <li data-value="5" className={'fa-star ' + (this.state.rating > 4 ? 'fas' : 'far')}></li>
        </ul>
        */

        return reactCreateElement('ul', { className: 'ratings', onclick: this.handleClick }, [
            reactCreateElement('li', { dataset: {value: 1}, className: 'fa-star ' + (this.state.rating > 0 ? 'fas' : 'far') }),
            reactCreateElement('li', { dataset: {value: 2}, className: 'fa-star ' + (this.state.rating > 1 ? 'fas' : 'far') }),
            reactCreateElement('li', { dataset: {value: 3}, className: 'fa-star ' + (this.state.rating > 2 ? 'fas' : 'far') }),
            reactCreateElement('li', { dataset: {value: 4}, className: 'fa-star ' + (this.state.rating > 3 ? 'fas' : 'far') }),
            reactCreateElement('li', { dataset: {value: 5}, className: 'fa-star ' + (this.state.rating > 4 ? 'fas' : 'far') })
        ]);
    }
}
