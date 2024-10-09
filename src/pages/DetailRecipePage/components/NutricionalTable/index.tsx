import { Typography } from "@mui/material"
import { FC } from "react"
import { mockNutritionalInfo } from "../../utils"


export const NutricionalTable:FC = () => {
  return (
    <div className="bg-gray-100 p-7 rounded-lg shadow-md w-full max-w-[400px]">
          <Typography
            variant="h3"
            className="!font-semibold text-main-darkBg pb-4"
          >
            Informações Nutricionais <br /> (por porção)
          </Typography>
          <ul className="list-none">
            {mockNutritionalInfo.map((info, index) => (
              <li
                key={index}
                className="flex justify-between text-neutral-700 py-1 border-b last:border-none"
              >
                <Typography variant="body1" >
                  {info.label}
                </Typography>
                <Typography variant="body1">
                  {info.value}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
  )
}
