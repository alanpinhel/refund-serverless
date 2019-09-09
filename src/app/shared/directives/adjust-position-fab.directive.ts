import { Directive, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core'
import ResizeObserver from 'resize-observer-polyfill'

@Directive({
  selector: '[appAdjustPositionFAB]',
})
export class AdjustPositionFABDirective {
  readonly maxWidthBody = 425
  readonly spacingFAB = 16

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private cd: ChangeDetectorRef) {
    const ro = new ResizeObserver(entries => {
      const { width } = entries[0].contentRect
      if (width > this.maxWidthBody) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'right', `${(width - this.maxWidthBody) / 2 + this.spacingFAB}px`)
      } else {
        this.renderer.setStyle(this.elementRef.nativeElement, 'right', `${this.spacingFAB}px`)
      }
      this.cd.detectChanges()
    })
    ro.observe(document.querySelector('html'))
  }
}
