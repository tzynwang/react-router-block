import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UnregisterCallback } from 'history'

interface useBlockArgs {
  block?: boolean
}

let LEAVE: UnregisterCallback

export default function useBlock(args: useBlockArgs) {
  const history = useHistory()
  const { block } = args

  const preventCloseAndRefresh = (event: BeforeUnloadEvent) => {
    const e = event || window.event
    e.preventDefault()
    if (e) e.returnValue = ''
    return ''
  }

  useEffect(() => {
    if (block === false) return
    window.addEventListener('beforeunload', preventCloseAndRefresh)
    LEAVE = history.block(() => {
      const leave = window.confirm('Leave this page?')
      if (!leave) {
        return false
      }
      return undefined
    })

    return () => {
      window.removeEventListener('beforeunload', preventCloseAndRefresh)
      LEAVE()
    }
  }, [block])
}
