import { useRef, useEffect } from "react"

const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    if (value === "switching") return
    ref.current = value
  })
  return ref.current
}

export default usePrevious
