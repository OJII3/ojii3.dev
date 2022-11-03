import { MutableRefObject, useEffect, useRef } from "react";

/**
 * This class uses React.useRef<Element>()
 * Just write `ref={new Fade**Ref().ref}` and it works
 * Plese don't forget to add `style={{ opacity: 0 }}`
 */
class FadeRef {

  fadeUpRef: MutableRefObject<Element | undefined>
  className: string = 'fade-untriggered'
  disableAfter: boolean
  disabled: boolean = false

  /**
   * Example: <Row ref={new FadeUpRef().ref}><Row>
   * @warning If you use FadeRight or FadeLeft, be sure to add style={{overflowX: hidden}} to the parent element
   * @param disableAfter default value is true
   */
  constructor(disableAfter: boolean = true) {
    this.fadeUpRef = useRef()
    this.disableAfter = disableAfter
  }

  get ref() {
    this.observe()
    return this.fadeUpRef
  }

  observe() {
    useEffect(() => {
      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (this.disabled) {
            return;
          } else if (entry.isIntersecting) {
            entry.target.classList.add(this.className);
            this.disabled = this.disableAfter ? true : false;
          } else {
            entry.target.classList.remove(this.className);
            entry.target.classList.add('fade-untriggered')
          }
        })
      }, { threshold: 0.25 })

      if (this.fadeUpRef.current) observer.observe(this.fadeUpRef.current)
    })
  }
}

export class FadeUpRef extends FadeRef {
  className: string = 'fade-up'
}

export class FadeRightRef extends FadeRef {
  className: string = 'fade-right'
}

export class FadeLeftRef extends FadeRef {
  className: string = 'fade-left'
}
