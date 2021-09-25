import {Directive, OnInit, Output, EventEmitter, Input} from '@angular/core';

/*
Sample usage : <div *ngIf="condition" (ngInit)="initialize()">  ... </div>
*/

@Directive({
    selector: '[ngInit]'
})
export class NgInitDirective implements OnInit {

    @Input() isLast: boolean;
    
    @Output('ngInit') initEvent: EventEmitter<any> = new EventEmitter();
    //ngInit: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        //this.ngInit.emit();
     //setTimeout(() => this.ngInit.emit(),10);
        if (this.isLast) {
            //this.ngInit.emit();
           setTimeout(() => this.initEvent.emit(), 10);
        }
    }
}
