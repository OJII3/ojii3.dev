import { MutableRefObject, useEffect, useRef } from "react";

/**
 * This class uses React.useRef<Element>()
 * Just write `ref={new FadeUpRef().ref}` and it works
 * Plese don't forget to add `style={{ opacity: 0 }}`
 */
export class FadeUpRef {
  fadeUpRef: MutableRefObject<Element | undefined>

  constructor () {
    this.fadeUpRef = useRef<Element>()
  }

  get ref() {
    this.observe()
    return this.fadeUpRef
  }

  observe() { useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
        } else {
          entry.target.classList.remove('fade-up');
          entry.target.classList.add('fade-untriggered')
        }
      })
    }, { threshold: 0.25 })

    if (this.fadeUpRef.current) observer.observe(this.fadeUpRef.current)
  })}
}

class FadeRef {
  fadeUpRef: MutableRefObject<Element | undefined>
  className: string = 'fade-untriggered'

  /**
   * className: fade-up, fade-down, fade-right, fade-left
   * @param className 
   */
  constructor () {
    this.fadeUpRef = useRef<Element>()
  }

  get ref() {
    this.observe()
    return this.fadeUpRef
  }

  observe() { useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(this.className);
        } else {
          entry.target.classList.remove(this.className);
          entry.target.classList.add('fade-untriggered')
        }
      })
    }, { threshold: 0.25 })

    if (this.fadeUpRef.current) observer.observe(this.fadeUpRef.current)
  })}
}

export class FadeRightRef extends FadeRef {
  className: string = 'fade-right'
}
