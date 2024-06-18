import React from 'react';
import './setting.css';
import { delay } from '@/lib/util';

async function SettingPage() {
    await delay(4000);

  return (
    <div className="setting">SettingPage</div>
  )
}

export default SettingPage