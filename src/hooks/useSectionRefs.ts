import type { RefObject} from "react";
import { createRef, useMemo, useRef } from "react";

import { topSectionTexts } from '@/constants/topSectionTexts'

const useSectionRefs = () => {
   const snapContainerRef = useRef<HTMLDivElement | null>(null)
  const snapItemRefs = useRef<RefObject<HTMLDivElement>[]>([])

  const sectionLength = useMemo(() => topSectionTexts.length, [])

  ;[...Array(sectionLength)].forEach((_, index) => {
    snapItemRefs.current[index] = createRef<HTMLDivElement>()
  })
 
  return { snapContainerRef, snapItemRefs, sectionLength }
}

export default useSectionRefs