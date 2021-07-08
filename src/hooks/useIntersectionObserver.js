import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import usePrevious from "./usePrevious"

const useIntersectionObserver = () => {
  const [scrollPosition, setScrollPosition] = useState("header")
  const prevScrollPosition = usePrevious(scrollPosition)

  const [headerRef, headerInView] = useInView({
    threshold: 0.85,
  })
  const [s1Ref, s1InView] = useInView({
    threshold: 0.85,
  })
  const [s2Ref, s2InView] = useInView({
    threshold: 0.85,
  })
  const [s3Ref, s3InView] = useInView({
    threshold: 0.85,
  })
  const [s4Ref, s4InView] = useInView({
    threshold: 0.85,
  })
  const [s5Ref, s5InView] = useInView({
    threshold: 0.85,
  })
  const [s6Ref, s6InView] = useInView({
    threshold: 0.85,
  })

  useEffect(() => {
    // console.log(headerInView, s1InView, s2InView, s3InView, s4InView, s5InView)
    if (
      !headerInView &&
      !s1InView &&
      !s2InView &&
      !s3InView &&
      !s4InView &&
      !s5InView &&
      !s6InView
    ) {
      setScrollPosition("switching")
    } else if (
      headerInView &&
      !s1InView &&
      !s2InView &&
      !s3InView &&
      !s4InView &&
      !s5InView &&
      !s6InView
    ) {
      setScrollPosition("header")
    } else if (
      !headerInView &&
      s1InView &&
      !s2InView &&
      !s3InView &&
      !s4InView &&
      !s5InView &&
      !s6InView
    ) {
      setScrollPosition("section-1")
      // setBoundary("top")
    } else if (
      !headerInView &&
      !s1InView &&
      s2InView &&
      !s3InView &&
      !s4InView &&
      !s5InView &&
      !s6InView
    ) {
      setScrollPosition("section-2")
    } else if (
      !headerInView &&
      !s1InView &&
      !s2InView &&
      s3InView &&
      !s4InView &&
      !s5InView &&
      !s6InView
    ) {
      setScrollPosition("section-3")
    } else if (
      !headerInView &&
      !s1InView &&
      !s2InView &&
      !s3InView &&
      s4InView &&
      !s5InView &&
      !s6InView
    ) {
      setScrollPosition("section-4")
    } else if (
      !headerInView &&
      !s1InView &&
      !s2InView &&
      !s3InView &&
      !s4InView &&
      s5InView &&
      !s6InView
    ) {
      setScrollPosition("section-5")
      // setBoundary("bottom")
    } else if (
      !headerInView &&
      !s1InView &&
      !s2InView &&
      !s3InView &&
      !s4InView &&
      !s5InView &&
      s6InView
    ) {
      setScrollPosition("section-6")
    }
  }, [headerInView, s1InView, s2InView, s3InView, s4InView, s5InView, s6InView])

  // useEffect(() => {
  //   console.log({
  //     prev: prevScrollPosition,
  //     curr: scrollPosition,
  //   })
  // }, [prevScrollPosition])

  // useEffect(() => {
  //   console.log({
  //     prev: prevScrollPosition,
  //     curr: scrollPosition,
  //   })
  // }, [scrollPosition])

  return {
    observerRefs: [headerRef, s1Ref, s2Ref, s3Ref, s4Ref, s5Ref, s6Ref],
    position: {
      prev: prevScrollPosition,
      curr: scrollPosition,
    },
  }
}

export default useIntersectionObserver
