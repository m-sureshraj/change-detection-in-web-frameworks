export class RatingsComponent {
    constructor() {
        this._rating = 1;
    }

    destroy() {
        this.list.remove();
    }

    init(container) {
        this.list = document.createElement('ul');
        this.list.classList.add('ratings');
        this.list.addEventListener('click', (event) => {
            this.rating = Number(event.target.dataset.value);
        });

        this.elements = [1, 2, 3, 4, 5].map((value) => {
            const li = document.createElement('li');
            li.classList.add('far', 'fa-star');
            li.dataset.value = value;
            this.list.appendChild(li);
            return li;
        });

        container.appendChild(this.list);

        this.updateRatings();
    }

    updateRatings() {
        this.elements.forEach((element, index) => {
            element.classList.toggle('fas', this.rating > index);
            element.classList.toggle('far', this.rating <= index);
        });
    }

    set rating(v) {
        this._rating = v;
        this.updateRatings();
    }

    get rating() {
        return this._rating;
    }
}