import { useCallback, useState } from 'react'
import { toast } from 'react-hot-toast'

import styles from './styles.module.scss'

import { ReactComponent as CheckImage } from '../../assets/images/check-white.svg'
import { ReactComponent as CopyImage } from '../../assets/images/copy.svg'

interface RoomCodeProps {
  code: string
}

export function RoomCode({ code }: RoomCodeProps) {
  const [copy, setCopy] = useState(false)

  const copyRoomCode = useCallback(
    async function copyRoomCode() {
      if (!navigator.clipboard) return
      try {
        await navigator.clipboard.writeText(code)
        setCopy(true)
        toast.success('O código da sala foi copiado')
        setTimeout(() => setCopy(false), 1000)
      } catch {
        toast.error('Erro ao copiar o código da sala')
      }
    },
    [code]
  )
  return (
    <button className={styles.container} onClick={copyRoomCode}>
      <div className={styles.icon}>{copy ? <CheckImage /> : <CopyImage />}</div>
      <span className={styles.text}>#{code}</span>
    </button>
  )
}
