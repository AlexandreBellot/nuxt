import gsap from 'gsap'

export class MouseAnime {

    constructor(elements, movement, pull, smoothTarget, smoothPointer, pointer) {

        this.elements           = elements;                 // Les élements à animer au survol
        this.movement           = movement;                 // Le déplacement en pixel de l'élément survolé
        this.pull               = pull;                     // Si TRUE l'élément survolé est attiré, si FALSE l'élément est repoussé
        this.smoothPointer      = smoothPointer;            // Vitesse de déplacement de l'objet survolé en seconde
        this.smoothTarget       = smoothTarget;             // Vitesse de déplacement du curseur qui suit la souris en seconde
        this.pointer            = pointer.get();
    }
    load () {
        this.refresh();
        this.onMoveEvent();
    }
    refresh() {
        this.targets = document.querySelectorAll(this.elements);
        this.targets.forEach(element => {
            element.mouseAnimeElement = true;
        });
    }
    onMoveEvent() {

        document.onmousemove = event => {
            gsap.to(this.pointer, this.smoothPointer, {y: event.clientY, x: event.clientX});
            if (!this.targets) {return false;}

            if (this.previousElement && this.previousElement !== event.target) {
                this.previousElement.classList.remove('onMoveMouse');
                gsap.to(this.previousElement, this.smoothTarget, {y: 0, x: 0});
            }

            if (event.target.mouseAnimeElement) {
                this.pointer.classList.add('onHover');
                event.target.classList.add('onMoveMouse');
                let rec = event.target.getBoundingClientRect(),
                    x   = this.movement / ((rec.width / 2) / ((rec.left + rec.width / 2) - event.clientX)),
                    y   = this.movement / ((rec.height / 2) / ((rec.top + rec.height / 2) - event.clientY));

                if (this.pull) {
                    x = -x;
                    y = -y;
                }

                gsap.to(event.target, this.smoothTarget, {y: y, x: x});
                this.previousElement = event.target;
            } else {
                this.pointer.classList.remove('onHover');
            }
        }

    }
}

export class CustomPointer {
    constructor(classes) {
        if (!document.getElementById('sitePointer')) {
            let pointer = document.createElement('div');
            pointer.setAttribute('id', 'sitePointer');

            if (typeof classes !== 'undefined' && classes) {
                pointer.setAttribute('class', classes);
            }
            document.body.appendChild(pointer);
        }
    }
    get() {
        return document.getElementById('sitePointer');
    }
}



