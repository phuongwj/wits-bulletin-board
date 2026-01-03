import React from 'react'

export default function Form() {
  return (
    <div>
        <form method="post" className="bg-[#383838]">
            <label>
                Your name

                <input type="text" name="inputName"/>
            </label>
        </form>
    </div>
  )
}
