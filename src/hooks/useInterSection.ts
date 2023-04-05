import type {
  Dispatch,
  MutableRefObject,
  RefObject,
  SetStateAction,
} from 'react'
import { useEffect, useRef } from 'react'

export const useInterSection = (
  SnapContainer: MutableRefObject<HTMLDivElement | null>,
  SnapItems: MutableRefObject<RefObject<HTMLDivElement>[]>,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  setIsIntersecting: Dispatch<SetStateAction<boolean>>
) => {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const intersectedRef = useRef<HTMLElement | null>(null)
  const snapItemsCurrent = SnapItems.current

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetElement = entry.target as HTMLElement

          if (entry.isIntersecting) {
            intersectedRef.current = targetElement
            const current = Number(targetElement.id)
            setCurrentPage(current)
          } else {
            if (intersectedRef.current === targetElement) {
              intersectedRef.current = null
            }
          }
        })
        setIsIntersecting(entries[0].isIntersecting)
      },
      {
        root: SnapContainer.current,
        rootMargin: '-50% 0px',
        threshold: 0,
      }
    )
    snapItemsCurrent.forEach((SnapItem) => {
      if (SnapItem.current) {
        observerRef.current?.observe(SnapItem.current)
      }
    })

    return () => {
      snapItemsCurrent.forEach((SnapItem) => {
        if (SnapItem.current) observerRef.current?.unobserve(SnapItem.current)
      })
    }
  }, [SnapContainer, setCurrentPage, setIsIntersecting, snapItemsCurrent])
}
