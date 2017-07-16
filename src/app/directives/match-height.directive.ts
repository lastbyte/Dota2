import { Directive, ElementRef, AfterViewChecked, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

  // class name to match height
  @Input()
  appMatchHeight: string;

  constructor(private el: ElementRef) { }

  ngAfterViewChecked() {
    this.matchHeight(this.el.nativeElement, this.appMatchHeight);
  }

  matchHeight(parent: HTMLElement, className: string) {
        // match height logic here

        if (!parent) {
          return;
        }

        // step 1: find all the child elements with the selected class name
        const children = parent.getElementsByClassName(className);
        console.log(children);
        if (!children) {
          return;
        }

        // step 1b: reset all children height
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = 'initial';
        });

        // step 2a: get all the child elements heights
        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height);

        // step 2b: find out the tallest
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);

        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
    }


    @HostListener('window:resize')
    onResize() {
        // call our matchHeight function here
        this.matchHeight(this.el.nativeElement, this.appMatchHeight);
    }

}
