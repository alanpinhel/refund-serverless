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
      const right = width > this.maxWidthBody ? (width - this.maxWidthBody) / 2 + this.spacingFAB : this.spacingFAB
      this.renderer.setStyle(this.elementRef.nativeElement, 'right', `${right}px`)
      this.cd.detectChanges()
    })
    ro.observe(document.querySelector('html'))
  }
}
