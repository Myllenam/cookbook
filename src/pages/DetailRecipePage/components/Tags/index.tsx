import { Typography } from "@mui/material"
import { FC } from "react"
import "./style.css"

export const Tags:FC<{tags:string[]|undefined}> = ({tags}) => {
  return (
    <div className="flex flex-col gap-4 w-full ">
    <Typography variant="h3" className="!font-semiBold text-main-darkBg">
      Tags
    </Typography>
    <div className="flex gap-4 flex-wrap !max-w-[350px]">
      {tags?.map((tag, index) => (
        <div
          key={index}
          className="tag px-4 py-2 bg-white shadow rounded-[10px] text-center text-main-darkBg"
        >
            <Typography variant="body1" className="text-neutral-400">
          {tag}
          </Typography>
        </div>
      ))}
    </div>
  </div>
  )
}
