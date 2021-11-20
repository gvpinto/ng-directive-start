import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]',
})
export class BetterHightlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: String = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );

    this.backgroundColor = 'transparent';
  }
}
