import { FC, ReactNode } from "react"

type Props = {
  children?: ReactNode  
}

export const Container: FC<Props> = ({ children }) => {
  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '30px' }}>
      {children}
    </div>
  )
}