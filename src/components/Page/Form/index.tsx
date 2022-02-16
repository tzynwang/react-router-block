import React, { memo, useState } from 'react'
import useBlock from '@Hooks/useBlock'

function FormPage(): React.ReactElement {
  const [block, setBlock] = useState<boolean>(true)
  useBlock({ block })

  return (
    <div>
      <label htmlFor="fname">First name:</label>
      <br />
      <input type="text" id="fname" name="fname" value="John" required />
      <br />

      <label htmlFor="lname">Last name:</label>
      <br />
      <input type="text" id="lname" name="lname" value="Doe" required />
      <br />
      <br />
      <button onClick={() => setBlock(false)}>submit</button>
      <br />
      Block status: {block ? 'page is block, click the submit button to unblock' : 'page is NOT block'}
    </div>
  )
}

export default memo(FormPage)
