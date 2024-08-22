import React from 'react'
import {Buttons} from '../Buttons/Buttons'
import DataProvider from '../Context/DataContext';
import { Display } from '../Display/Display'
import styles from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calculate}>
      <DataProvider>
    <Display />
    <Buttons/>
</DataProvider>
      </div>

    </div>

  )
}
