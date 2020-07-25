import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    .btn-search{
        width: 70px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        background: transparent;
        border: 0;
        padding: 0;
        cursor: pointer;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        align-items: center;
    }
    .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {
        border: 1px solid #b3c2ca;
        border-radius: 3px;
        margin: 0.3em;
        text-align: center;
        padding: 2em 0 2.25em 0;
    }
    .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {
        font-weight: 700;
        font-size: 20px;
        margin-top: 24px;
    }
    .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {
        margin: 0.25em 0 2em 0;
    }
    .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {
        margin-left: 0.5em;
    }
    .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {
        margin-left: 0;
    }
    .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {
        width: 16px !important;
        height: 16px !important;
        border-radius: 50%;
    }
    .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {
        margin-left: 0.6em;
    }
    .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .car-details > .p-grid {
        margin-right: 0.6em;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    All = null;
    CSSK = 'CSSK';
    TPCN = 'TPCN';
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer2) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }
}
