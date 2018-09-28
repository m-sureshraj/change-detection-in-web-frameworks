const VNode = virtualDom.VNode;
const VText = virtualDom.VText;

const h = virtualDom.h;
const diff = virtualDom.diff;
const patch = virtualDom.patch;
const createElement = virtualDom.create;


function render() {
    /*
    // returned from `render`

    React.createElement('li', {
        className: 'fa-star ' + (this.state.rating > 0 ? 'fas' : 'far')
    });
    */

    // framework
    const vnode1 = h('li.fa-star.far');
    const li = createElement(vnode1);
    document.querySelector('play-comp').appendChild(li);


    setTimeout(() => {
        /*
        // returned from `render`

        React.createElement('li', {
            className: 'fa-star fas'
        });
        */
        const vnode2 = h('li.fa-star.fas');

        // difference between virtual nodes
        const patches = diff(vnode1, vnode2);

        // applying changes
        const node = patch(li, patches);
    }, 5000);    /*
    // returned from `render`

    React.createElement('li', {
        className: 'fa-star fas'
    });
    */
    const vnode2 = h('li.fa-star.fas');

    // difference between virtual nodes
    const patches = diff(vnode1, vnode2);

    /*
    <li data-value="1" className={'fa-star ' + (this.state.rating > 0 ? 'fas' : 'far')}></li>

    render
    React.createElement('li', {
        className: 'fa-star ' + (this.state.rating > 0 ? 'fas' : 'far')
    });

    return1
    React.createElement('li', {
        className: 'fa-star fas'
    });

    return2
    React.createElement('li', {
        className: 'fa-star far'
    });
    */
}

document.addEventListener('DOMContentLoaded', render);