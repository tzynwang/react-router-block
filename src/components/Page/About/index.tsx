import React, { memo } from 'react'

import useBlock from '@Hooks/useBlock'

function AboutPage(): React.ReactElement {
  useBlock({})
  return <div>this is the about page.</div>
}

export default memo(AboutPage)
