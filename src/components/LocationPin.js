import '../App.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

export const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon}  width="50"/>
      <p className="pin-text">{text}</p>
    </div>
  )